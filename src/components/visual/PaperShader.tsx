"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Slow folds of light across grey paper, drawn by one small fragment shader.
// ─────────────────────────────────────────────────────────────────────────────
// Added 23 Sep 2026 for the homepage redesign preview. No video, no image, no
// library: the whole effect is the GLSL below, so it costs a few kilobytes and
// no network request. It renders at half resolution (the image is soft by
// design, so nobody can see the difference) and at most ~30 frames a second,
// pauses when the hero is off screen or the tab is hidden, and draws a single
// still frame for visitors who ask for reduced motion.
//
// Tones are bounded for legibility, re-measured 24 Sep 2026 for the grey
// palette (see redesign/tokens.ts). The darkest tone under text, #E0DDD6, keeps
// the small grey labels (#5E5B55) at 4.99:1 before grain. Only the far right
// edge, where no small text sits, goes deeper (#D2CEC5). Change the palette,
// re-measure on rendered frames, not just the constants.
//
// Whatever sits underneath (the CSS gradient fallback) shows until the first
// frame is drawn, and permanently if WebGL is unavailable.
// ─────────────────────────────────────────────────────────────────────────────

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;

const FRAG = `
precision mediump float;
uniform vec2 r;
uniform float t;

float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){
  vec2 i=floor(p),f=fract(p);
  vec2 u=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1,0)),u.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),u.x),u.y);
}
float fbm(vec2 p){
  float v=0.,a=.5;
  for(int k=0;k<4;k++){v+=a*n(p);p=p*2.02+vec2(3.1,1.7);a*=.5;}
  return v;
}

void main(){
  vec2 uv=gl_FragCoord.xy/r;
  // Stretched along a diagonal so the shapes read as long folds, not smoke.
  vec2 a=uv*vec2(r.x/r.y,1.);
  vec2 p=mat2(.8,-.6,.6,.8)*a*vec2(.55,1.25)*1.1;
  float s=t*.018;

  // Domain warp: the folds bend into each other like draped paper or linen.
  vec2 q=vec2(fbm(p+vec2(0.,s)),fbm(p+vec2(5.2,1.3)-s));
  vec2 w=vec2(fbm(p+2.8*q+vec2(1.7,9.2)+s*.7),fbm(p+2.8*q+vec2(8.3,2.8)-s*.5));
  float f=fbm(p+2.2*w);

  // Light falls from the top left; long soft ridges catch it.
  float light=clamp(1.15-uv.x*.55+uv.y*.35,0.,1.);
  float ridge=smoothstep(.38,.72,f);

  vec3 hi=vec3(.969,.965,.949);   // #F7F6F2
  vec3 mid=vec3(.922,.914,.894);  // #EBE9E4  (the page paper)
  vec3 lo=vec3(.878,.867,.839);   // #E0DDD6  (legibility floor under text)
  vec3 deep=vec3(.824,.808,.773); // #D2CEC5  (right edge only)

  vec3 c=mix(lo,mid,ridge);
  c=mix(c,hi,smoothstep(.55,1.,ridge*light+.12*light));
  c=mix(c,deep,smoothstep(.82,1.,uv.x)*(1.-ridge)*.75);

  // Fine grain, so the gradient reads as a material rather than a screen.
  c+=(h(gl_FragCoord.xy+fract(t))-.5)*.022;
  gl_FragColor=vec4(c,1.);
}`;

export default function PaperShader({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false, powerPreference: "low-power" });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (gl.getShaderParameter(s, gl.COMPILE_STATUS)) return s;
      console.warn("[PaperShader]", gl.getShaderInfoLog(s));
      return null;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(prog, "r");
    const uT = gl.getUniformLocation(prog, "t");

    const SCALE = 0.5;
    const resize = () => {
      const w = Math.max(1, Math.round(canvas.clientWidth * SCALE));
      const h = Math.max(1, Math.round(canvas.clientHeight * SCALE));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uR, w, h);
    };

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now() - 40_000; // start mid-drift, not at a seam
    let raf = 0;
    let last = 0;
    let visible = true;

    const draw = (now: number) => {
      resize();
      gl.uniform1f(uT, (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      canvas.style.opacity = "1";
    };
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden || now - last < 33) return;
      last = now;
      draw(now);
    };

    if (still) {
      draw(performance.now());
    } else {
      raf = requestAnimationFrame(loop);
    }

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    const ro = new ResizeObserver(() => still && draw(performance.now()));
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      // Deliberately NOT calling WEBGL_lose_context here. A canvas keeps one
      // context for its lifetime, so a remount of the same element (React does
      // this in development, and can on the live site) would get the lost
      // context back and silently draw nothing. The browser frees it with the
      // element.
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{ opacity: 0, transition: "opacity 900ms ease" }}
    />
  );
}
