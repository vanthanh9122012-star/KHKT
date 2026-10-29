import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// 4 Cấu hình hành tinh vũ trụ khớp chính xác với ảnh thiết kế
const PLANET_CONFIGS = [
  // 0: Hành tinh Khởi Nguyên (Lớp 6) - Hành tinh Vành Đai Tím/Hồng pastel với dải mây khí quyển và vành đai nghiêng rực rỡ
  {
    name: 'Khởi Nguyên',
    type: 'ringed',
    baseColor: '#b565d8',
    emissive: '#4a154b',
    atmosColor: '#d980fa',
    ringColor: '#f3a683',
    createTexture: () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      // Dải màu sương mù mây tím lavender & xanh phấn
      const grad = ctx.createLinearGradient(0, 0, 0, 512);
      grad.addColorStop(0, '#57227d');
      grad.addColorStop(0.2, '#9b59b6');
      grad.addColorStop(0.35, '#c56cf0');
      grad.addColorStop(0.5, '#7d5fff');
      grad.addColorStop(0.65, '#a29bfe');
      grad.addColorStop(0.85, '#e056fd');
      grad.addColorStop(1, '#4834d4');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);

      // Thêm các dải mây lượn sóng
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      for (let i = 0; i < 15; i++) {
        const y = 50 + i * 30;
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x < 1024; x += 50) {
          ctx.quadraticCurveTo(x + 25, y + Math.sin((x + i * 40) * 0.02) * 12, x + 50, y);
        }
        ctx.lineTo(1024, y + 8);
        ctx.lineTo(0, y + 8);
        ctx.fill();
      }

      // Xoáy bão khí quyển
      ctx.fillStyle = 'rgba(255, 230, 255, 0.35)';
      ctx.beginPath();
      ctx.arc(380, 260, 45, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(750, 180, 35, 0, Math.PI * 2);
      ctx.fill();

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    },
    createRingTexture: () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 512, 0);
      grad.addColorStop(0, 'rgba(243, 166, 131, 0)');
      grad.addColorStop(0.15, 'rgba(255, 204, 204, 0.4)');
      grad.addColorStop(0.3, 'rgba(248, 165, 194, 0.85)');
      grad.addColorStop(0.5, 'rgba(224, 86, 253, 0.95)');
      grad.addColorStop(0.7, 'rgba(104, 109, 224, 0.8)');
      grad.addColorStop(0.85, 'rgba(190, 144, 212, 0.3)');
      grad.addColorStop(1, 'rgba(243, 166, 131, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 64);
      return new THREE.CanvasTexture(canvas);
    }
  },

  // 1: Hành tinh Khí Quyển Sọc (Lớp 7) - Các tầng sọc xanh sapphire, tím than, lam ngọc tuyệt đẹp
  {
    name: 'Khí Quyển',
    type: 'banded',
    baseColor: '#4834d4',
    emissive: '#130f40',
    atmosColor: '#686de0',
    createTexture: () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 0, 512);
      grad.addColorStop(0, '#130f40');
      grad.addColorStop(0.15, '#30336b');
      grad.addColorStop(0.3, '#4834d4');
      grad.addColorStop(0.45, '#22a6b3');
      grad.addColorStop(0.6, '#38ada9');
      grad.addColorStop(0.75, '#686de0');
      grad.addColorStop(0.9, '#1e3799');
      grad.addColorStop(1, '#0c2461');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);

      // Thêm các sọc tầng khí quyển mịn màng
      for (let i = 0; i < 40; i++) {
        const y = i * 13;
        ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, y, 1024, 6);
      }

      // Xoáy bão khí khổng lồ
      ctx.fillStyle = 'rgba(34, 166, 179, 0.4)';
      ctx.beginPath();
      ctx.ellipse(300, 280, 70, 35, 0, 0, Math.PI * 2);
      ctx.fill();

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      return tex;
    }
  },

  // 2: Hành tinh Tinh Thể Năng Lượng (Lớp 8) - Bề mặt vỡ tinh thể tím hồng với hào quang năng lượng vàng kim
  {
    name: 'Tinh Thể',
    type: 'crystal',
    baseColor: '#be2edd',
    emissive: '#481557',
    atmosColor: '#e056fd',
    createTexture: () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#3a0954';
      ctx.fillRect(0, 0, 1024, 512);

      // Các mảng đa giác tinh thể đá vũ trụ
      const colors = ['#8854d0', '#a55eea', '#be2edd', '#d980fa', '#575fcf', '#4b4b4b'];
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 512;
        const r = 15 + Math.random() * 35;
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
          const px = x + Math.cos(a) * r;
          const py = y + Math.sin(a) * r;
          if (a === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#f8a5c2';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Vệt năng lượng sáng phát quang
      ctx.fillStyle = 'rgba(255, 234, 167, 0.4)';
      for (let j = 0; j < 25; j++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 1024, Math.random() * 512, 4 + Math.random() * 8, 0, Math.PI * 2);
        ctx.fill();
      }

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      return tex;
    }
  },

  // 3: Cung Điện Hoàng Gia / Tinh Vân Tối Thượng (Lớp 9) - Lỗ sâu xoáy cực quang vũ trụ với tâm phát sáng rực rỡ
  {
    name: 'Tối Thượng',
    type: 'vortex',
    baseColor: '#ff9ff3',
    emissive: '#6c5ce7',
    atmosColor: '#fd79a8',
    createTexture: () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#1e0c38';
      ctx.fillRect(0, 0, 1024, 512);

      // Xoáy thiên hà ngân hà
      for (let i = 0; i < 2; i++) {
        const cx = i === 0 ? 300 : 800;
        const cy = 256;
        for (let angle = 0; angle < Math.PI * 12; angle += 0.08) {
          const r = angle * 8;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r * 0.6;
          ctx.fillStyle = `hsl(${280 + angle * 10}, 90%, ${70 - (r / 300) * 40}%)`;
          ctx.beginPath();
          ctx.arc(x, y, 4 + Math.sin(angle) * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      return tex;
    }
  }
];

// Mô hình 3D Hành Tinh Tự Xoay Mượt Mà
function PlanetSphere({ completed = 0, total = 8, index = 0, isDetail = false }) {
  const meshRef = useRef();
  const ringRef = useRef();
  const energyRingRef = useRef();
  const atmosRef = useRef();

  const cfg = PLANET_CONFIGS[index % PLANET_CONFIGS.length];
  const progress = total > 0 ? Math.min(completed / total, 1) : 0;

  // Tạo kết cấu đồ họa chân thực
  const texture = useMemo(() => cfg.createTexture(), [index]);
  const ringTexture = useMemo(() => cfg.createRingTexture ? cfg.createRingTexture() : null, [index]);

  // Vòng quay 3D thực tế theo thời gian thực
  useFrame((state, delta) => {
    const rotSpeed = 0.45;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotSpeed;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * (rotSpeed * 0.6);
    }
    if (energyRingRef.current) {
      energyRingRef.current.rotation.z += delta * (rotSpeed * 1.2);
    }
    if (atmosRef.current) {
      atmosRef.current.rotation.y += delta * (rotSpeed * 0.8);
    }
  });

  const radius = isDetail ? 1.8 : 1.35;

  return (
    <group>
      {/* Khối Cầu Hành Tinh Chính */}
      <Sphere ref={meshRef} args={[radius, 64, 64]}>
        <meshStandardMaterial
          map={texture}
          roughness={0.45}
          metalness={0.25}
          emissive={new THREE.Color(cfg.emissive)}
          emissiveIntensity={0.35 + progress * 0.45}
        />
      </Sphere>

      {/* Vành đai nghiêng 3D (dành cho Hành tinh Khởi nguyên & Tối thượng) */}
      {cfg.type === 'ringed' && (
        <mesh ref={ringRef} rotation={[-Math.PI / 2.3, 0.25, 0.1]}>
          <ringGeometry args={[radius * 1.35, radius * 2.35, 64]} />
          <meshStandardMaterial
            map={ringTexture}
            color={cfg.ringColor || '#f8a5c2'}
            transparent
            opacity={0.88}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Dải hào quang năng lượng xoay quanh (dành cho Tinh thể & Tối thượng) */}
      {(cfg.type === 'crystal' || cfg.type === 'vortex') && (
        <mesh ref={energyRingRef} rotation={[0.4, -0.3, 0.8]}>
          <ringGeometry args={[radius * 1.25, radius * 1.45, 48]} />
          <meshBasicMaterial
            color={cfg.atmosColor}
            transparent
            opacity={0.65}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Lớp khí quyển phát sáng mềm mại bao bọc */}
      <Sphere ref={atmosRef} args={[radius * 1.08, 32, 32]}>
        <meshStandardMaterial
          color={cfg.atmosColor}
          transparent
          opacity={0.28 + progress * 0.22}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </Sphere>
    </group>
  );
}

export default function InteractivePlanet3D({ completed = 0, total = 8, index = 0, isDetail = false }) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none pointer-events-auto">
      <Canvas 
        camera={{ position: [0, 0, isDetail ? 5.2 : 3.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[5, 4, 6]} intensity={2.6} color="#ffffff" />
        <pointLight position={[-6, -4, -4]} intensity={1.2} color="#c56cf0" />
        <pointLight position={[0, -5, 3]} intensity={0.8} color="#7d5fff" />
        
        {isDetail && (
          <Stars radius={60} depth={30} count={1200} factor={3} saturation={0.8} fade speed={1.2} />
        )}

        <React.Suspense fallback={null}>
          <PlanetSphere completed={completed} total={total} index={index} isDetail={isDetail} />
        </React.Suspense>

        <OrbitControls 
          enableZoom={isDetail} 
          enablePan={false} 
          autoRotate={false} 
          maxPolarAngle={Math.PI / 1.3} 
          minPolarAngle={Math.PI / 3.5} 
        />
      </Canvas>
    </div>
  );
}
