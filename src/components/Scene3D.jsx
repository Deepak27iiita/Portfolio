import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count, isMobile }) {
  const pointsRef = useRef();

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vels = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vels[i * 3]     = (Math.random() - 0.5) * 0.003;
      vels[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vels[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }
    return [pos, vels];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const arr = pointsRef.current.geometry.attributes.position.array;
    const { x, y } = state.pointer;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      arr[idx]     += velocities[idx];
      arr[idx + 1] += velocities[idx + 1];
      arr[idx + 2] += velocities[idx + 2];
      if (Math.abs(arr[idx])     > 9) velocities[idx]     *= -1;
      if (Math.abs(arr[idx + 1]) > 9) velocities[idx + 1] *= -1;
      if (Math.abs(arr[idx + 2]) > 5) velocities[idx + 2] *= -1;
      if (!isMobile) {
        const dx = arr[idx] - x * 5;
        const dy = arr[idx + 1] - y * 5;
        if (Math.sqrt(dx * dx + dy * dy) < 2.5) {
          arr[idx]     += dx * 0.003;
          arr[idx + 1] += dy * 0.003;
        }
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y += 0.0004;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#1D9E75"
        size={isMobile ? 0.045 : 0.07}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingIcosahedron() {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.0015;
    meshRef.current.rotation.y += 0.002;
    const { x, y } = state.pointer;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x * 1.2, 0.04);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y * 1.2, 0.04);
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={[2.5, 0.5, -3]}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial color="#1D9E75" wireframe transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

function FloatingTorus() {
  const meshRef = useRef();
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.z += 0.001;
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[-3, -1.5, -4]}>
        <torusGeometry args={[1.2, 0.3, 8, 24]} />
        <meshBasicMaterial color="#1D9E75" wireframe transparent opacity={0.08} />
      </mesh>
    </Float>
  );
}

function Scene({ isMobile, particleCount }) {
  return (
    <>
      <Particles count={particleCount} isMobile={isMobile} />
      {!isMobile && (
        <>
          <FloatingIcosahedron />
          <FloatingTorus />
        </>
      )}
    </>
  );
}

export default function Scene3D({ isMobile = false }) {
  const particleCount = isMobile ? 100 : 260;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#05070a]">
      {/* Layered radial glows */}
      <div className="absolute top-[15%] left-[15%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,158,117,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,158,117,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute top-[60%] left-[50%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,158,117,0.04) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, isMobile ? 1 : 1.5]}
          gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
          style={{ background: 'transparent' }}
        >
          <Scene isMobile={isMobile} particleCount={particleCount} />
        </Canvas>
      </Suspense>
    </div>
  );
}
