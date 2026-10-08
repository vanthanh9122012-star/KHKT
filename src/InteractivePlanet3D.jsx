import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
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
      <meshStandardMaterial color="#334155" roughness={0.9} metalness={0.1} />
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
      <meshStandardMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={0.6} roughness={0.4} />
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
  const texture = useLoader(THREE.TextureLoader, '/textures/earth_map.jpg');
  
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.005;
  });
  return (
    <group>
      <Sphere ref={meshRef} args={[1.4, 64, 64]}>
        <meshStandardMaterial map={texture} roughness={0.6} metalness={0.1} />
      </Sphere>
      {/* Atmosphere Glow */}
      <Sphere args={[1.55, 32, 32]}>
        <meshStandardMaterial color="#60a5fa" transparent opacity={0.2} side={THREE.BackSide} blending={THREE.AdditiveBlending} />
      </Sphere>
    </group>
  );
};

// --- GRADE 7: Pink Moon ---
const PinkMoonPlanet = () => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, '/textures/moon_map.jpg');
  
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.005;
  });
  return (
    <group>
      <Sphere ref={meshRef} args={[1.4, 64, 64]}>
        <meshStandardMaterial 
          map={texture} 
          color="#ff66cc" 
          emissive="#4a0024"
          emissiveIntensity={0.5}
          roughness={0.8} 
          metalness={0.2} 
        />
      </Sphere>
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial color="#ff99cc" transparent opacity={0.15} side={THREE.BackSide} blending={THREE.AdditiveBlending} />
      </Sphere>
    </group>
  );
};

// --- GRADE 8: Blue Gas Giant ---
const BlueGasPlanet = () => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, '/textures/jupiter_map.jpg');
  
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.008;
  });
  return (
    <group>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial 
          map={texture} 
          color="#0088ff" 
          emissive="#0022aa"
          emissiveIntensity={0.6}
          roughness={0.3} 
        />
      </Sphere>
      <Sphere args={[1.65, 32, 32]}>
        <meshStandardMaterial color="#33aaff" transparent opacity={0.25} side={THREE.BackSide} blending={THREE.AdditiveBlending} />
      </Sphere>
    </group>
  );
};

// --- GRADE 9: Fiery/Golden Gas Giant ---
const FireGasPlanet = () => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, '/textures/jupiter_map.jpg');
  
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.01;
  });
  return (
    <group>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial 
          map={texture} 
          color="#ff5500" 
          emissive="#aa2200"
          emissiveIntensity={0.8}
          roughness={0.4} 
        />
      </Sphere>
      <Sphere args={[1.65, 32, 32]}>
        <meshStandardMaterial color="#ffaa00" transparent opacity={0.3} side={THREE.BackSide} blending={THREE.AdditiveBlending} />
      </Sphere>
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
    // Fully evolved mapping based on Grade
    if (index === 0) PlanetComponent = EarthPlanet;
    else if (index === 1) PlanetComponent = PinkMoonPlanet;
    else if (index === 2) PlanetComponent = BlueGasPlanet;
    else PlanetComponent = FireGasPlanet; // Grade 9
  }

  return (
    <div className="w-full h-full min-h-[250px] relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 3, 5]} intensity={2.5} />
        <pointLight position={[-5, -3, -5]} intensity={1} color="#ffffff" />
        
        {/* Subtle space background effect */}
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        <React.Suspense fallback={null}>
          <PlanetComponent />
        </React.Suspense>
        
        {/* Allows 360 rotation by user */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
