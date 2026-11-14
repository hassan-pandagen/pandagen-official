"use client";

import { useCallback, useState } from "react";
import { SubmissionGate } from "@/lib/forms/submissionGate";

export type SubmissionStatus = "idle" | "sending" | "sent" | "error";

/**
 * One status for a form that sends something: idle, sending, sent or error.
 *
 * 14 Nov 2026: replaces the loading/submitted/error flags each lead form kept. Use it as
 *
 *   const token = submission.start();
 *   if (token === null) return;          // already sending: a double click does nothing
 *   try { await send(); submission.succeed(token); }
 *   catch (e) { submission.fail(token, message); }
 *
 * succeed and fail ignore an attempt that `reset` has since made stale, so a late response
 * cannot reopen a form the visitor closed. They return whether they applied.
 */
export function useSubmission() {
  // Created once per form; it never changes, so it needs no re-render.
  const [gate] = useState(() => new SubmissionGate());
  const [state, setState] = useState<{ status: SubmissionStatus; error: string }>({ status: "idle", error: "" });

  const start = useCallback((): number | null => {
    const token = gate.start();
    if (token !== null) setState({ status: "sending", error: "" });
    return token;
  }, [gate]);

  const succeed = useCallback((token: number): boolean => {
    if (!gate.settle(token)) return false;
    setState({ status: "sent", error: "" });
    return true;
  }, [gate]);

  const fail = useCallback((token: number, error: string): boolean => {
    if (!gate.settle(token)) return false;
    setState({ status: "error", error });
    return true;
  }, [gate]);

  const isCurrent = useCallback((token: number) => gate.isCurrent(token), [gate]);

  const reset = useCallback(() => {
    gate.reset();
    setState({ status: "idle", error: "" });
  }, [gate]);

  return { status: state.status, error: state.error, start, succeed, fail, isCurrent, reset };
}
