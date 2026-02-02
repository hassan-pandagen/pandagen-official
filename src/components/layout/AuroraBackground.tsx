// Pure CSS animations - runs on compositor thread, not main thread
export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050505]">

      {/* 1. GLOBAL AMBIENT GLOW (Brighter) */}
      {/* Top Light (Blue) - Increased Opacity */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/15 blur-[150px]" />
      
      {/* Bottom Light (Purple) - Increased Opacity */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/15 blur-[150px]" />
      
      {/* Center Tint (Prevents Pitch Black void) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />

      {/* 2. The Grid Overlay (subtle structure) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

    </div>
  );
}
