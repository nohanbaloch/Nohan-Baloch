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
    const { clock, pointer } = state;
    if (points.current) {
      const time = clock.getElapsedTime();
      
      // Calculate target rotations:
      // Y: Constant slow spin + mouse horizontal movement
      // X: Mouse vertical movement (inverted for natural feel)
      const targetRotationY = time * 0.05 + pointer.x * 0.5;
      const targetRotationX = -pointer.y * 0.5;

      // Smoothly interpolate current rotation to target (0.1 = damping factor)
      points.current.rotation.y += (targetRotationY - points.current.rotation.y) * 0.1;
      points.current.rotation.x += (targetRotationX - points.current.rotation.x) * 0.1;
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

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}
