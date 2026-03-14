import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'What Is Headless Commerce? Keep Shopify Backend, Get a Custom Coded Frontend';
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
          Headless Commerce Guide
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, justifyContent: 'center', marginTop: '40px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '56px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em', display: 'flex' }}>
              Best of Both Worlds.
            </div>
            <div style={{ fontSize: '56px', fontWeight: 800, color: '#ea580c', lineHeight: 1.1, letterSpacing: '-0.02em', display: 'flex' }}>
              Shopify Backend.
            </div>
            <div style={{ fontSize: '56px', fontWeight: 800, color: '#ea580c', lineHeight: 1.1, letterSpacing: '-0.02em', display: 'flex' }}>
              Custom Frontend.
            </div>
          </div>
          <div style={{ fontSize: '22px', color: '#999999', lineHeight: 1.4, maxWidth: '760px', display: 'flex' }}>
            Keep your products, orders, and payments in Shopify. Replace the slow theme with a lightning-fast custom storefront. Save on hosting. Rank higher.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', gap: '52px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#ea580c', display: 'flex' }}>3-5x</div>
              <div style={{ fontSize: '15px', color: '#555555', display: 'flex' }}>Faster Load Time</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#ea580c', display: 'flex' }}>$0/mo</div>
              <div style={{ fontSize: '15px', color: '#555555', display: 'flex' }}>Frontend Hosting</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#ea580c', display: 'flex' }}>+35%</div>
              <div style={{ fontSize: '15px', color: '#555555', display: 'flex' }}>Conversion Lift</div>
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
