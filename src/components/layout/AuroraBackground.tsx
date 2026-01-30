// Pure CSS animations - runs on compositor thread, not main thread
export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050505]">

      {/* 1. The Moving Aurora Beams - Using CSS animations for GPU acceleration */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-900/20 blur-[120px] will-change-transform animate-aurora-1"
      />

      <div
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-900/20 blur-[120px] will-change-transform animate-aurora-2"
      />

      <div
        className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/10 blur-[100px] will-change-transform animate-aurora-3"
      />

      {/* 2. The Grid Overlay (subtle structure) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

    </div>
  );
}
