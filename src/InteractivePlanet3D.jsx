import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const EvolvingPlanet = ({ completed, total }) => {
  const meshRef = useRef();
  const atmosRef = useRef();
  const progress = total > 0 ? Math.min(completed / total, 1) : 0;
  
  // We use jupiter map to get those beautiful gas swirls
  const texture = useLoader(THREE.TextureLoader, '/textures/jupiter_map.jpg');
  
  // Create colors based on progress
  const currentColor = useMemo(() => {
    // Start: Dull dark rock #334155
    // End: Deep vibrant blue #1e40af
    return new THREE.Color().lerpColors(new THREE.Color('#334155'), new THREE.Color('#1e40af'), progress);
  }, [progress]);

  const currentEmissive = useMemo(() => {
    // Start: No emission
    // End: Glowing cyan/blue #0ea5e9
    return new THREE.Color().lerpColors(new THREE.Color('#000000'), new THREE.Color('#0ea5e9'), progress);
  }, [progress]);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Base rotation
    }
    if (atmosRef.current) {
      atmosRef.current.rotation.y += 0.007; // Atmosphere rotates slightly faster
    }
  });

  return (
    <group>
      {/* Main Body */}
      <Sphere ref={meshRef} args={[1.4, 64, 64]}>
        <meshStandardMaterial 
          map={progress > 0.1 ? texture : null} // Show swirls early on
          color={currentColor}
          emissive={currentEmissive}
          emissiveIntensity={progress * 0.85} // Glows more as it progresses
          roughness={1 - progress * 0.4} // Becomes smoother
          metalness={progress * 0.2}
        />
      </Sphere>
      
      {/* Atmosphere Glow */}
      {progress > 0 && (
        <Sphere ref={atmosRef} args={[1.52, 32, 32]}>
          <meshStandardMaterial 
            color="#38bdf8" 
            transparent 
            opacity={progress * 0.3} 
            side={THREE.BackSide} 
            blending={THREE.AdditiveBlending} 
          />
        </Sphere>
      )}
    </group>
  );
};

export default function InteractivePlanet3D({ completed, total, index }) {
  // We apply the single evolving planet logic for all grades now, 
  // as the user requested the specific blue gas giant look for completed lessons.
  
  return (
    <div className="w-full h-full min-h-[250px] relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 3, 5]} intensity={2.5} />
        <pointLight position={[-5, -3, -5]} intensity={1} color="#ffffff" />
        
        {/* Subtle space background effect */}
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        <React.Suspense fallback={null}>
          <EvolvingPlanet completed={completed} total={total} />
        </React.Suspense>
        
        {/* Allows 360 rotation by user */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
