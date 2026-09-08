export class AuditLeadRequestError extends Error {
  public readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'AuditLeadRequestError';
    this.status = status;
  }
}

interface RequestLike {
  url: string;
  headers: { get(name: string): string | null };
  body: ReadableStream<Uint8Array> | null;
}

export function assertSameOriginAuditRequest(request: RequestLike): void {
  const origin = request.headers.get('origin');
  if (!origin) {
    throw new AuditLeadRequestError(403, 'This submission source is not allowed.');
  }

  let suppliedOrigin: string;
  let requestOrigin: string;
  try {
    suppliedOrigin = new URL(origin).origin;
    requestOrigin = new URL(request.url).origin;
  } catch {
    throw new AuditLeadRequestError(403, 'This submission source is not allowed.');
  }
  if (suppliedOrigin !== origin || suppliedOrigin !== requestOrigin) {
    throw new AuditLeadRequestError(403, 'This submission source is not allowed.');
  }

  const fetchSite = request.headers.get('sec-fetch-site');
  if (fetchSite !== 'same-origin') {
    throw new AuditLeadRequestError(403, 'This submission source is not allowed.');
  }
}

export const assertSameOriginAuditLeadRequest = assertSameOriginAuditRequest;

export async function readBoundedAuditLeadJson(
  request: RequestLike,
  maxBytes: number
): Promise<unknown> {
  const contentType = request.headers.get('content-type')?.toLowerCase() || '';
  if (!contentType.startsWith('application/json')) {
    throw new AuditLeadRequestError(415, 'Content-Type must be application/json.');
  }

  const declaredLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
    throw new AuditLeadRequestError(413, 'Request body is too large.');
  }
  if (!request.body) {
    throw new AuditLeadRequestError(400, 'Request body is required.');
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > maxBytes) {
      await reader.cancel('Request exceeded the byte limit.');
      throw new AuditLeadRequestError(413, 'Request body is too large.');
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    throw new AuditLeadRequestError(400, 'Request body must contain valid JSON.');
  }
}
