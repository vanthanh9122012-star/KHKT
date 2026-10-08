import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere, Ring } from '@react-three/drei';
import * as THREE from 'three';

const PLANET_PROFILES = [
  { name: 'Mars', endColor: '#dc2626', endEmissive: '#b91c1c', atmos: '#f87171', textureMap: 'moon_map.jpg', hasRing: false }, // Lớp 6
  { name: 'Earth', endColor: '#ffffff', endEmissive: '#3b82f6', atmos: '#60a5fa', textureMap: 'earth_map.jpg', hasRing: false }, // Lớp 7
  { name: 'Jupiter', endColor: '#d97706', endEmissive: '#b45309', atmos: '#fcd34d', textureMap: 'moon_map.jpg', hasRing: false }, // Lớp 8
  { name: 'Saturn', endColor: '#ca8a04', endEmissive: '#a16207', atmos: '#fde047', textureMap: 'moon_map.jpg', hasRing: true }  // Lớp 9
];

const EvolvingPlanet = ({ completed, total, index }) => {
  const meshRef = useRef();
  const atmosRef = useRef();
  const ringRef = useRef();
  const progress = total > 0 ? Math.min(completed / total, 1) : 0;
  
  const profile = PLANET_PROFILES[index % PLANET_PROFILES.length];
  
  const moonTex = useLoader(THREE.TextureLoader, '/textures/moon_map.jpg');
  const earthTex = useLoader(THREE.TextureLoader, '/textures/earth_map.jpg');
  const texture = profile.textureMap === 'earth_map.jpg' ? earthTex : moonTex;
  
  const currentColor = useMemo(() => {
    return new THREE.Color().lerpColors(new THREE.Color('#334155'), new THREE.Color(profile.endColor), progress);
  }, [progress, profile]);

  const currentEmissive = useMemo(() => {
    return new THREE.Color().lerpColors(new THREE.Color('#000000'), new THREE.Color(profile.endEmissive), progress);
  }, [progress, profile]);
  
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.005;
    if (atmosRef.current) atmosRef.current.rotation.y += 0.007;
    if (ringRef.current) ringRef.current.rotation.z -= 0.002;
  });

  return (
    <group>
      {/* Main Body */}
      <Sphere ref={meshRef} args={[1.4, 64, 64]}>
        <meshStandardMaterial 
          map={progress > 0.1 ? texture : null} 
          color={currentColor}
          emissive={currentEmissive}
          emissiveIntensity={progress * 0.4} 
          roughness={1 - progress * 0.4} 
          metalness={progress * 0.2}
        />
      </Sphere>
      
      {/* Saturn Ring */}
      {profile.hasRing && progress > 0.2 && (
        <mesh ref={ringRef} rotation={[-Math.PI / 2 + 0.3, 0, 0]}>
          <ringGeometry args={[1.7, 2.5, 64]} />
          <meshStandardMaterial 
            color={profile.atmos} 
            transparent 
            opacity={progress * 0.7} 
            side={THREE.DoubleSide} 
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      {/* Atmosphere Glow */}
      {progress > 0 && (
        <Sphere ref={atmosRef} args={[1.52, 32, 32]}>
          <meshStandardMaterial 
            color={profile.atmos} 
            transparent 
            opacity={progress * 0.5} 
            side={THREE.BackSide} 
            blending={THREE.AdditiveBlending} 
          />
        </Sphere>
      )}
    </group>
  );
};

export default function InteractivePlanet3D({ completed, total, index }) {
  return (
    <div className="w-full h-full min-h-[250px] relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 3, 5]} intensity={2.5} />
        <pointLight position={[-5, -3, -5]} intensity={1} color="#ffffff" />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <React.Suspense fallback={null}>
          <EvolvingPlanet completed={completed} total={total} index={index || 0} />
        </React.Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
