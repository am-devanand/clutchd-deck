"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Torus, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function GlowRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
  });
  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <Torus ref={ref} args={[2.2, 0.04, 16, 200]}>
        <meshStandardMaterial color="#3b82f6" emissive="#1d4ed8" emissiveIntensity={1} transparent opacity={0.6} />
      </Torus>
      <Torus args={[2.8, 0.02, 16, 200]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color="#6366f1" emissive="#4f46e5" emissiveIntensity={1} transparent opacity={0.3} />
      </Torus>
    </Float>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <Float speed={2} floatIntensity={0.8}>
      <Icosahedron ref={ref} args={[1.2, 1]}>
        <MeshDistortMaterial
          color="#bfdbfe" // blue-200
          emissive="#60a5fa" // blue-400
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.2}
          distort={0.25}
          speed={1.5}
          transparent
          opacity={0.85}
        />
      </Icosahedron>
    </Float>
  );
}

function Grid() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = -Math.sin(state.clock.elapsedTime * 0.2) * 0.3 - 3.5;
  });

  const lines = useMemo(() => {
    const arr = [];
    for (let x = -8; x <= 8; x += 1) {
      arr.push({ type: "v", pos: x });
    }
    for (let z = -8; z <= 8; z += 1) {
      arr.push({ type: "h", pos: z });
    }
    return arr;
  }, []);

  return (
    <group ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      {lines.map((l, i) =>
        l.type === "v" ? (
          <mesh key={i} position={[l.pos, 0, 0]}>
            <planeGeometry args={[0.01, 16]} />
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
          </mesh>
        ) : (
          <mesh key={i} position={[0, l.pos, 0]}>
            <planeGeometry args={[16, 0.01]} />
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
          </mesh>
        )
      )}
    </group>
  );
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={4} color="#ffffff" />
        <pointLight position={[-5, -5, 5]} intensity={3} color="#93c5fd" />
        <spotLight position={[0, 10, 0]} intensity={3} color="#ffffff" penumbra={1} />

        <Core />
        <GlowRing />
        <Grid />
      </Canvas>
    </div>
  );
}
