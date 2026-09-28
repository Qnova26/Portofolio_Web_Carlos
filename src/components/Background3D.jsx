import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Number of particles
const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 3.2;

function ParticleNetwork() {
  const meshRef = useRef();
  const lineRef = useRef();

  // Generate random particle positions once
  const { positions, velocities } = useMemo(() => {
    const pos = [];
    const vel = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8
      );
      vel.push(
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.006,
        (Math.random() - 0.5) * 0.004
      );
    }
    return {
      positions: new Float32Array(pos),
      velocities: new Float32Array(vel),
    };
  }, []);

  // Line geometry buffer (max connections)
  const MAX_LINES = PARTICLE_COUNT * 6;
  const linePositions = useMemo(() => new Float32Array(MAX_LINES * 6), []);
  const lineColors = useMemo(() => new Float32Array(MAX_LINES * 6), []);

  useFrame(() => {
    if (!meshRef.current || !lineRef.current) return;

    const pos = meshRef.current.geometry.attributes.position.array;
    const linePos = lineRef.current.geometry.attributes.position.array;
    const lineCol = lineRef.current.geometry.attributes.color.array;

    // Move particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const idx = i * 3;
      pos[idx]     += velocities[idx];
      pos[idx + 1] += velocities[idx + 1];
      pos[idx + 2] += velocities[idx + 2];

      // Bounce off bounds
      if (Math.abs(pos[idx])     > 10) velocities[idx]     *= -1;
      if (Math.abs(pos[idx + 1]) > 7)  velocities[idx + 1] *= -1;
      if (Math.abs(pos[idx + 2]) > 4)  velocities[idx + 2] *= -1;
    }

    // Draw connections
    let lineIdx = 0;
    for (let i = 0; i < PARTICLE_COUNT && lineIdx < MAX_LINES; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT && lineIdx < MAX_LINES; j++) {
        const ax = pos[i * 3], ay = pos[i * 3 + 1], az = pos[i * 3 + 2];
        const bx = pos[j * 3], by = pos[j * 3 + 1], bz = pos[j * 3 + 2];
        const dist = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.45;
          const base = lineIdx * 6;

          linePos[base]     = ax; linePos[base + 1] = ay; linePos[base + 2] = az;
          linePos[base + 3] = bx; linePos[base + 4] = by; linePos[base + 5] = bz;

          // Soft sky-blue color
          lineCol[base]     = 0.39; lineCol[base + 1] = 0.7; lineCol[base + 2] = 0.93;
          lineCol[base + 3] = 0.39 * alpha; lineCol[base + 4] = 0.7 * alpha; lineCol[base + 5] = 0.93 * alpha;

          lineIdx++;
        }
      }
    }

    // Fill unused slots with zeros
    for (let i = lineIdx * 6; i < MAX_LINES * 6; i++) {
      linePos[i] = 0;
      lineCol[i] = 0;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    lineRef.current.geometry.attributes.position.needsUpdate = true;
    lineRef.current.geometry.attributes.color.needsUpdate = true;
  });

  return (
    <>
      {/* Particle dots */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#63b3ed"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Connection lines */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.5}
          linewidth={1}
        />
      </lineSegments>
    </>
  );
}

export default function Background3D() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
