"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 1000 }) {
  const points = useRef<THREE.Points>(null!);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.05;
      points.current.rotation.x = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00f3ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Grid() {
  return (
    <group rotation={[Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <gridHelper args={[20, 20, "#bc13fe", "#0a0a0a"]} />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <color attach="background" args={["#030303"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Particles count={2000} />
        </Float>
        <Grid />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}
