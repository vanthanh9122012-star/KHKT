import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere, Ring } from '@react-three/drei';
import * as THREE from 'three';

// --- STAGE 0: Asteroid ---
const Asteroid = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });
  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial color="#475569" roughness={0.9} metalness={0.1} />
    </mesh>
  );
};

// --- STAGE 1: Core ---
const CorePlanet = () => {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      const scale = 1 + Math.sin(clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });
  return (
    <Sphere ref={meshRef} args={[1.5, 32, 32]}>
      <meshStandardMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={0.5} roughness={0.4} />
    </Sphere>
  );
};

// --- STAGE 2: Atmosphere ---
const AtmospherePlanet = () => {
  const meshRef = useRef();
  const cloudsRef = useRef();
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.005;
    if (cloudsRef.current) cloudsRef.current.rotation.y -= 0.008;
  });
  return (
    <group>
      <Sphere ref={meshRef} args={[1.4, 32, 32]}>
        <meshStandardMaterial color="#0284c7" roughness={0.6} />
      </Sphere>
      <Sphere ref={cloudsRef} args={[1.5, 32, 32]}>
        <meshStandardMaterial color="#bae6fd" transparent opacity={0.4} roughness={0.2} />
      </Sphere>
    </group>
  );
};

// --- GRADE 6: Earth ---
const EarthPlanet = () => {
  const meshRef = useRef();
  const cloudsRef = useRef();
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.005;
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.007;
  });
  return (
    <group>
      <Sphere ref={meshRef} args={[1.4, 64, 64]}>
        <meshStandardMaterial color="#3b82f6" emissive="#1d4ed8" emissiveIntensity={0.2} roughness={0.5} metalness={0.2} />
      </Sphere>
      {/* Landmass representation (just stylized) */}
      <Sphere ref={cloudsRef} args={[1.42, 32, 32]}>
        <meshStandardMaterial color="#4ade80" wireframe transparent opacity={0.3} />
      </Sphere>
      {/* Atmosphere */}
      <Sphere args={[1.6, 32, 32]}>
        <meshStandardMaterial color="#60a5fa" transparent opacity={0.15} side={THREE.BackSide} />
      </Sphere>
    </group>
  );
};

// --- GRADE 7: Mars ---
const MarsPlanet = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.008;
  });
  return (
    <group>
      <Sphere ref={meshRef} args={[1.4, 64, 64]}>
        <meshStandardMaterial color="#dc2626" emissive="#991b1b" emissiveIntensity={0.2} roughness={0.9} metalness={0.1} />
      </Sphere>
      <Sphere args={[1.55, 32, 32]}>
        <meshStandardMaterial color="#f87171" transparent opacity={0.1} side={THREE.BackSide} />
      </Sphere>
    </group>
  );
};

// --- GRADE 8: Jupiter ---
const JupiterPlanet = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.015; // Rotates fast
  });
  return (
    <Sphere ref={meshRef} args={[1.6, 64, 64]}>
      <meshStandardMaterial color="#d97706" emissive="#78350f" emissiveIntensity={0.2} roughness={0.4} />
      {/* Jupiter's bands can be represented beautifully with wireframe layers or just standard color */}
    </Sphere>
  );
};

// --- GRADE 9: Saturn ---
const SaturnPlanet = () => {
  const meshRef = useRef();
  const ringRef = useRef();
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.01;
    if (ringRef.current) ringRef.current.rotation.z -= 0.005;
  });
  return (
    <group rotation={[Math.PI / 6, 0, 0]}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <meshStandardMaterial color="#fcd34d" emissive="#b45309" emissiveIntensity={0.1} roughness={0.5} />
      </Sphere>
      <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 2.5, 64]} />
        <meshStandardMaterial color="#fde68a" transparent opacity={0.8} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default function InteractivePlanet3D({ completed, total, index }) {
  let PlanetComponent = Asteroid;
  
  if (completed > 0 && completed <= 2) {
    PlanetComponent = CorePlanet;
  } else if (completed > 2 && completed < total) {
    PlanetComponent = AtmospherePlanet;
  } else if (completed === total) {
    // Fully evolved based on grade (NASA Solar System)
    if (index === 0) PlanetComponent = EarthPlanet;
    else if (index === 1) PlanetComponent = MarsPlanet;
    else if (index === 2) PlanetComponent = JupiterPlanet;
    else PlanetComponent = SaturnPlanet;
  }

  return (
    <div className="w-full h-full min-h-[250px] relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} />
        <pointLight position={[-5, -3, -5]} intensity={0.5} color="#3b82f6" />
        
        {/* Subtle space background effect */}
        <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />
        
        <React.Suspense fallback={null}>
          <PlanetComponent />
        </React.Suspense>
        
        {/* Allows 360 rotation by user */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
