"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function NeuralNetwork({ count = 150 }) {
  const points = useRef<THREE.Points>(null!);
  const linesGeometry = useRef<THREE.BufferGeometry>(null!);
  
  // Create random nodes (neurons)
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const r = 12; // Radius distribution
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta); // x
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
        positions[i * 3 + 2] = r * Math.cos(phi); // z
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock, pointer } = state;
    if (points.current) {
      const time = clock.getElapsedTime();
      
      // Gentle rotation
      points.current.rotation.y = time * 0.05 + pointer.x * 0.05;
      points.current.rotation.x = -pointer.y * 0.05;
    }
  });

  return (
    <group>
        {/* Neurons */}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlesPosition, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#00f3ff"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      
      {/* Synapses (Connections) - Stylized as a wireframe sphere for performance */}
       <mesh rotation={[0, 0, 0]}>
         <icosahedronGeometry args={[12, 2]} />
         <meshBasicMaterial 
            color="#00f3ff" 
            wireframe 
            transparent 
            opacity={0.03} 
            blending={THREE.AdditiveBlending}
         />
       </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="canvas-container fixed inset-0 z-0 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 18]} />
        <color attach="background" args={["#030303"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
          <NeuralNetwork count={200} />
        </Float>

        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Fog for depth */}
        <fog attach="fog" args={["#030303", 10, 30]} />
      </Canvas>
    </div>
  );
}
