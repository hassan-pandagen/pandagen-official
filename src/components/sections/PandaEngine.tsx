"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Trail } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.x = Math.sin(time * 0.5) * 0.5;
    meshRef.current.position.y = Math.cos(time * 0.3) * 0.3;
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Trail
      width={2}
      length={8}
      color={new THREE.Color("#06B6D4")}
      attenuation={(t) => t * t}
    >
      <Sphere
        ref={meshRef}
        args={[1.5, 64, 64]}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <MeshDistortMaterial
          color="#06B6D4"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
    </Trail>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#F97316" transparent opacity={0.6} />
    </points>
  );
}

export default function PandaEngine() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06B6D4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#F97316" />
        <AnimatedSphere />
        <Particles />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
