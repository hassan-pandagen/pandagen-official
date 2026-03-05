import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PandaCodeGen – Custom-Coded Websites That Load in Under 1 Second';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f0f0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '72px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            background: 'rgba(234,88,12,0.12)',
            border: '1px solid rgba(234,88,12,0.35)',
            borderRadius: '100px',
            padding: '8px 24px',
            color: '#ea580c',
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          Custom-Coded · Next.js · Performance-First
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, justifyContent: 'center', marginTop: '40px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '62px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em', display: 'flex' }}>
              Websites That Load in
            </div>
            <div style={{ fontSize: '62px', fontWeight: 800, color: '#ea580c', lineHeight: 1.1, letterSpacing: '-0.02em', display: 'flex' }}>
              Under 1 Second
            </div>
          </div>
          <div style={{ fontSize: '24px', color: '#999999', lineHeight: 1.4, maxWidth: '760px', display: 'flex' }}>
            We migrate WordPress & Shopify to custom Next.js — sub-second load times, zero bloat, 100/100 PageSpeed on every build.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', gap: '52px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#ea580c', display: 'flex' }}>100/100</div>
              <div style={{ fontSize: '15px', color: '#555555', display: 'flex' }}>PageSpeed Score</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#ea580c', display: 'flex' }}>{'<1s'}</div>
              <div style={{ fontSize: '15px', color: '#555555', display: 'flex' }}>Load Time</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#ea580c', display: 'flex' }}>$0</div>
              <div style={{ fontSize: '15px', color: '#555555', display: 'flex' }}>Plugin Fees</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <div style={{ fontSize: '30px', fontWeight: 800, color: '#ffffff', display: 'flex' }}>PandaCodeGen</div>
            <div style={{ fontSize: '14px', color: '#444444', letterSpacing: '0.08em', display: 'flex' }}>pandacodegen.com</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
