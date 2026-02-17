// Pure CSS animations - runs on compositor thread, not main thread
export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#050505] to-[#000000]">

      {/* 1. MINIMAL AMBIENT GLOW - Just atmosphere, let cards shine */}
      {/* Top Light (Blue) - reduced 70% */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 md:bg-blue-600/7 blur-[150px]" />

      {/* Bottom Right (Purple) - reduced 70% */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 md:bg-purple-600/7 blur-[150px]" />

      {/* Center Radial Lift - minimal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_60%)] md:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015),transparent_60%)]" />

      {/* 2. Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.01)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10" />

    </div>
  );
}
