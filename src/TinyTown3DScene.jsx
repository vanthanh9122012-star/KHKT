import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

// =========================================================================
// MÔ ĐUN HẠT BỤI CÔNG TRÌNH KHI THI CÔNG (CONSTRUCTION DUST PARTICLES)
// =========================================================================
function DustParticles({ active }) {
  const pointsRef = useRef();
  const count = 75;

  const [positions, opacities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const op = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = Math.random() * 4 + 0.2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      op[i] = Math.random() * 0.8;
    }
    return [pos, op];
  }, [active]);

  useFrame((state, delta) => {
    if (!pointsRef.current || !active) return;
    const posArr = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += delta * 0.8; // Bay lơ lửng lên trên
      posArr[i * 3] += Math.sin(state.clock.elapsedTime + i) * 0.01;
      if (posArr[i * 3 + 1] > 5) {
        posArr[i * 3 + 1] = 0.2;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  if (!active) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        color="#fbbf24"
        transparent
        opacity={0.65}
        depthWrite={false}
      />
    </points>
  );
}

// =========================================================================
// BÃI ĐẤT HOANG SƠ BAN ĐẦU: ĐẤT, CÁT, ĐÁ VÀ CỌC TIÊU CÔNG TRÌNH
// =========================================================================
function BarrenPlotTerrain({ houseWidth, houseLength }) {
  // Đá tự nhiên rải rác trên bãi đất
  const rocks = useMemo(() => [
    { pos: [houseLength / 2 + 1.8, 0.2, houseWidth / 2 + 1.2], scale: [0.6, 0.4, 0.5], rot: [0.2, 0.5, 0.1] },
    { pos: [-houseLength / 2 - 2.0, 0.15, -houseWidth / 2 - 1.5], scale: [0.8, 0.5, 0.7], rot: [0.4, 0.8, 0.2] },
    { pos: [houseLength / 2 + 2.2, 0.18, -houseWidth / 2 - 0.8], scale: [0.5, 0.35, 0.5], rot: [0.1, 0.3, 0.4] },
    { pos: [-houseLength / 2 - 1.5, 0.22, houseWidth / 2 + 1.8], scale: [0.7, 0.45, 0.6], rot: [0.3, 0.6, 0.2] },
    { pos: [0.5, 0.12, houseWidth / 2 + 2.5], scale: [0.4, 0.25, 0.4], rot: [0.5, 0.2, 0.1] },
  ], [houseWidth, houseLength]);

  // Cọc tiêu ranh giới công trình 4 góc
  const stakes = useMemo(() => {
    const halfL = houseLength / 2 + 0.6;
    const halfW = houseWidth / 2 + 0.6;
    return [
      [-halfL, -halfW],
      [halfL, -halfW],
      [halfL, halfW],
      [-halfL, halfW]
    ];
  }, [houseWidth, houseLength]);

  return (
    <group>
      {/* Nền đất cát hoang sơ rộng lớn */}
      <mesh receiveShadow position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[26, 26]} />
        <meshStandardMaterial color="#c29b68" roughness={0.9} />
      </mesh>

      {/* Vùng đất quy hoạch móng nhà (Đất nền nén chặt) */}
      <mesh receiveShadow position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[houseLength + 2.2, houseWidth + 2.2]} />
        <meshStandardMaterial color="#a77c4e" roughness={0.95} />
      </mesh>

      {/* Ranh giới dây căng đo đạc công trình */}
      <lineSegments position={[0, 0.45, 0]}>
        <edgesGeometry
          args={[new THREE.BoxGeometry(houseLength + 1.2, 0.05, houseWidth + 1.2)]}
        />
        <lineBasicMaterial color="#f59e0b" linewidth={2} />
      </lineSegments>

      {/* 4 Cọc tiêu đo đạc công trình */}
      {stakes.map(([x, z], i) => (
        <group key={i} position={[x, 0.35, z]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.7, 8]} />
            <meshStandardMaterial color="#d97706" />
          </mesh>
          {/* Cờ đỏ báo hiệu ranh đất */}
          <mesh position={[0.12, 0.25, 0]}>
            <boxGeometry args={[0.22, 0.14, 0.02]} />
            <meshStandardMaterial color="#ef4444" />
          </mesh>
        </group>
      ))}

      {/* Các mỏm đá thô tự nhiên trên bãi đất */}
      {rocks.map((r, i) => (
        <mesh
          key={i}
          position={r.pos}
          scale={r.scale}
          rotation={r.rot}
          castShadow
          receiveShadow
        >
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#78716c" roughness={0.85} />
        </mesh>
      ))}
    </group>
  );
}

// =========================================================================
// MÔ HÌNH NGÔI NHÀ 3D TỪNG BƯỚC THI CÔNG THEO GIAI ĐOẠN
// =========================================================================
function House3DModel({
  stage,
  length = 8,
  width = 6,
  height = 3.4,
  roofCutaway = false,
  isNight = false,
  decorations = {}
}) {
  const halfL = length / 2;
  const halfW = width / 2;
  const wallThick = 0.28;
  const foundationH = 0.6;
  const wallH = height;

  return (
    <group position={[0, 0, 0]}>

      {/* ------------------------------------------------------------- */}
      {/* GIAI ĐOẠN 1: MÓNG ĐÁ KIÊN CỐ (FOUNDATION)                      */}
      {/* ------------------------------------------------------------- */}
      {stage >= 1 && (
        <group position={[0, foundationH / 2, 0]}>
          {/* Khối móng đá thô & bê tông chịu nén */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[length + 0.4, foundationH, width + 0.4]} />
            <meshStandardMaterial color="#6b7280" roughness={0.9} />
          </mesh>

          {/* Viền đá hoa cương ốp chân móng */}
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(length + 0.42, foundationH + 0.02, width + 0.42)]} />
            <lineBasicMaterial color="#374151" />
          </lineSegments>

          {/* Bậc tam cấp bằng đá bước vào cửa chính */}
          <mesh position={[0, -foundationH / 4, halfW + 0.55]} castShadow receiveShadow>
            <boxGeometry args={[2.0, foundationH / 2, 0.8]} />
            <meshStandardMaterial color="#9ca3af" roughness={0.8} />
          </mesh>
          <mesh position={[0, -foundationH * 0.45, halfW + 0.95]} castShadow receiveShadow>
            <boxGeometry args={[2.4, foundationH / 4, 0.8]} />
            <meshStandardMaterial color="#6b7280" roughness={0.85} />
          </mesh>

          {/* Sàn lát đá granite chống trơn bên trong */}
          <mesh position={[0, foundationH / 2 + 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[length, width]} />
            <meshStandardMaterial color="#e5e7eb" roughness={0.4} />
          </mesh>
        </group>
      )}

      {/* ------------------------------------------------------------- */}
      {/* GIAI ĐOẠN 2: KHUNG CỘT BÊ TÔNG & GIÀN GIÁO THI CÔNG           */}
      {/* ------------------------------------------------------------- */}
      {stage >= 2 && (
        <group position={[0, foundationH + wallH / 2, 0]}>
          {/* 4 Cột góc bê tông cốt thép chịu lực */}
          {[
            [-halfL + wallThick / 2, -halfW + wallThick / 2],
            [halfL - wallThick / 2, -halfW + wallThick / 2],
            [halfL - wallThick / 2, halfW - wallThick / 2],
            [-halfL + wallThick / 2, halfW - wallThick / 2]
          ].map(([cx, cz], i) => (
            <mesh key={i} position={[cx, 0, cz]} castShadow receiveShadow>
              <boxGeometry args={[wallThick * 1.3, wallH, wallThick * 1.3]} />
              <meshStandardMaterial color="#4b5563" roughness={0.7} />
            </mesh>
          ))}

          {/* Dầm giằng bê tông bo viền đỉnh tường */}
          <mesh position={[0, wallH / 2 - wallThick / 2, -halfW + wallThick / 2]} castShadow>
            <boxGeometry args={[length, wallThick, wallThick]} />
            <meshStandardMaterial color="#4b5563" roughness={0.7} />
          </mesh>
          <mesh position={[0, wallH / 2 - wallThick / 2, halfW - wallThick / 2]} castShadow>
            <boxGeometry args={[length, wallThick, wallThick]} />
            <meshStandardMaterial color="#4b5563" roughness={0.7} />
          </mesh>
          <mesh position={[-halfL + wallThick / 2, wallH / 2 - wallThick / 2, 0]} castShadow>
            <boxGeometry args={[wallThick, wallThick, width]} />
            <meshStandardMaterial color="#4b5563" roughness={0.7} />
          </mesh>
          <mesh position={[halfL - wallThick / 2, wallH / 2 - wallThick / 2, 0]} castShadow>
            <boxGeometry args={[wallThick, wallThick, width]} />
            <meshStandardMaterial color="#4b5563" roughness={0.7} />
          </mesh>

          {/* Giàn giáo thi công bên cạnh nhà khi đang xây thô (Giai đoạn 2-4) */}
          {stage < 5 && (
            <group position={[halfL + 0.8, -wallH * 0.1, 0]}>
              <mesh castShadow>
                <cylinderGeometry args={[0.04, 0.04, wallH * 1.1, 8]} />
                <meshStandardMaterial color="#f59e0b" metalness={0.6} />
              </mesh>
              <mesh position={[0, 0, 1.4]} castShadow>
                <cylinderGeometry args={[0.04, 0.04, wallH * 1.1, 8]} />
                <meshStandardMaterial color="#f59e0b" metalness={0.6} />
              </mesh>
              {/* Sàn gỗ giàn giáo để đứng */}
              <mesh position={[0, wallH * 0.2, 0.7]} castShadow>
                <boxGeometry args={[0.6, 0.08, 1.8]} />
                <meshStandardMaterial color="#b45309" roughness={0.9} />
              </mesh>
            </group>
          )}
        </group>
      )}

      {/* ------------------------------------------------------------- */}
      {/* GIAI ĐOẠN 3: TƯỜNG BAO GẠCH ĐẤT NUNG ĐỎ ẤM CÚNG                */}
      {/* ------------------------------------------------------------- */}
      {stage >= 3 && (
        <group position={[0, foundationH + wallH / 2, 0]}>
          {/* Tường sau (Back Wall) - có 2 ô chừa cửa sổ */}
          <mesh position={[-length * 0.28, 0, -halfW + wallThick / 2]} castShadow receiveShadow>
            <boxGeometry args={[length * 0.38, wallH, wallThick]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.8} />
          </mesh>
          <mesh position={[0, 0, -halfW + wallThick / 2]} castShadow receiveShadow>
            <boxGeometry args={[length * 0.2, wallH, wallThick]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.8} />
          </mesh>
          <mesh position={[length * 0.28, 0, -halfW + wallThick / 2]} castShadow receiveShadow>
            <boxGeometry args={[length * 0.38, wallH, wallThick]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.8} />
          </mesh>
          {/* Đổ lanh tô trên và tường dưới cửa sổ sau */}
          <mesh position={[-length * 0.14, -wallH * 0.32, -halfW + wallThick / 2]} castShadow receiveShadow>
            <boxGeometry args={[length * 0.16, wallH * 0.36, wallThick]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.8} />
          </mesh>
          <mesh position={[-length * 0.14, wallH * 0.38, -halfW + wallThick / 2]} castShadow receiveShadow>
            <boxGeometry args={[length * 0.16, wallH * 0.24, wallThick]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.8} />
          </mesh>

          {/* Tường trước (Front Wall) - chừa cửa đi chính ở giữa và ô cửa sổ bên cạnh */}
          <mesh position={[-length * 0.3, 0, halfW - wallThick / 2]} castShadow receiveShadow>
            <boxGeometry args={[length * 0.36, wallH, wallThick]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.8} />
          </mesh>
          <mesh position={[length * 0.3, 0, halfW - wallThick / 2]} castShadow receiveShadow>
            <boxGeometry args={[length * 0.36, wallH, wallThick]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.8} />
          </mesh>
          {/* Lanh tô trên cửa chính */}
          <mesh position={[0, wallH * 0.35, halfW - wallThick / 2]} castShadow receiveShadow>
            <boxGeometry args={[1.8, wallH * 0.3, wallThick]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.8} />
          </mesh>

          {/* Tường trái (Left Wall) */}
          <mesh position={[-halfL + wallThick / 2, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[wallThick, wallH, width]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.8} />
          </mesh>

          {/* Tường phải (Right Wall) */}
          <mesh position={[halfL - wallThick / 2, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[wallThick, wallH, width]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.8} />
          </mesh>

          {/* Vách ngăn trong nhà (chia phòng khách và phòng ngủ) */}
          <mesh position={[-0.4, 0, -halfW * 0.25]} castShadow receiveShadow>
            <boxGeometry args={[wallThick * 0.7, wallH * 0.95, width * 0.55]} />
            <meshStandardMaterial color="#ea580c" roughness={0.7} />
          </mesh>
        </group>
      )}

      {/* ------------------------------------------------------------- */}
      {/* GIAI ĐOẠN 4: CỬA GỖ TỰ NHIÊN & CỬA SỔ KÍNH TRONG SUỐT          */}
      {/* ------------------------------------------------------------- */}
      {stage >= 4 && (
        <group position={[0, foundationH + wallH / 2, 0]}>
          {/* Cửa chính bằng gỗ sồi tự nhiên */}
          <group position={[0, -wallH * 0.15, halfW - wallThick / 2]}>
            <mesh castShadow>
              <boxGeometry args={[1.6, wallH * 0.7, 0.08]} />
              <meshStandardMaterial color="#78350f" roughness={0.6} />
            </mesh>
            {/* Tay nắm kim loại vàng óng */}
            <mesh position={[0.6, 0, 0.06]} castShadow>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.2} />
            </mesh>
          </group>

          {/* Cửa sổ kính trước nhà */}
          <group position={[-length * 0.3, 0, halfW - wallThick / 2]}>
            <mesh>
              <boxGeometry args={[1.4, 1.4, 0.04]} />
              <meshPhysicalMaterial
                color="#bae6fd"
                transparent
                opacity={0.45}
                roughness={0.1}
                transmission={0.85}
                ior={1.5}
              />
            </mesh>
            {/* Khung cửa sổ gỗ */}
            <lineSegments>
              <edgesGeometry args={[new THREE.BoxGeometry(1.42, 1.42, 0.06)]} />
              <lineBasicMaterial color="#78350f" linewidth={2} />
            </lineSegments>
          </group>

          {/* Cửa sổ kính sau nhà */}
          <group position={[-length * 0.14, 0, -halfW + wallThick / 2]}>
            <mesh>
              <boxGeometry args={[1.3, 1.2, 0.04]} />
              <meshPhysicalMaterial
                color="#bae6fd"
                transparent
                opacity={0.45}
                roughness={0.1}
                transmission={0.85}
              />
            </mesh>
            <lineSegments>
              <edgesGeometry args={[new THREE.BoxGeometry(1.32, 1.22, 0.06)]} />
              <lineBasicMaterial color="#78350f" linewidth={2} />
            </lineSegments>
          </group>
        </group>
      )}

      {/* ------------------------------------------------------------- */}
      {/* GIAI ĐOẠN 5: MÁI NGÓI ĐỎ & ỐNG KHÓI LÒ SƯỞI                   */}
      {/* ------------------------------------------------------------- */}
      {stage >= 5 && (
        <group
          position={[0, foundationH + wallH + (roofCutaway ? 3.0 : 0), 0]}
          visible={!roofCutaway || true}
        >
          {/* Mái tam giác / Mái dốc lợp ngói đỏ */}
          <mesh
            position={[0, 1.3, 0]}
            rotation={[0, Math.PI / 2, 0]}
            castShadow
            receiveShadow
          >
            <coneGeometry args={[width * 0.78, 2.6, 4]} />
            <meshStandardMaterial
              color="#b91c1c"
              roughness={0.65}
              transparent={roofCutaway}
              opacity={roofCutaway ? 0.25 : 1}
            />
          </mesh>

          {/* Viền hồi mái ngói sắc nét */}
          <lineSegments position={[0, 1.3, 0]} rotation={[0, Math.PI / 2, 0]}>
            <edgesGeometry args={[new THREE.ConeGeometry(width * 0.78, 2.6, 4)]} />
            <lineBasicMaterial color="#7f1d1d" />
          </lineSegments>

          {/* Ống khói gạch cổ điển vươn cao */}
          <group position={[length * 0.25, 2.0, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.7, 1.8, 0.7]} />
              <meshStandardMaterial color="#991b1b" roughness={0.8} />
            </mesh>
            <mesh position={[0, 0.95, 0]} castShadow>
              <boxGeometry args={[0.85, 0.15, 0.85]} />
              <meshStandardMaterial color="#4b5563" roughness={0.7} />
            </mesh>
          </group>
        </group>
      )}

      {/* ------------------------------------------------------------- */}
      {/* GIAI ĐOẠN 6: NỘI THẤT & TRANG TRÍ HOÀN THIỆN                  */}
      {/* ------------------------------------------------------------- */}
      {stage >= 6 && (
        <group position={[0, foundationH, 0]}>
          {/* 1. Bộ Sofa phòng khách */}
          <group position={[halfL * 0.35, 0.35, -halfW * 0.35]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1.8, 0.45, 0.8]} />
              <meshStandardMaterial color="#3b82f6" roughness={0.7} />
            </mesh>
            <mesh position={[0, 0.45, -0.32]} castShadow>
              <boxGeometry args={[1.8, 0.55, 0.2]} />
              <meshStandardMaterial color="#2563eb" roughness={0.7} />
            </mesh>
            {/* Bàn trà gỗ nhỏ */}
            <mesh position={[0, -0.1, 0.75]} castShadow receiveShadow>
              <boxGeometry args={[1.2, 0.25, 0.6]} />
              <meshStandardMaterial color="#78350f" roughness={0.5} />
            </mesh>
          </group>

          {/* 2. Giường ngủ ấm cúng ở gian phòng ngủ */}
          <group position={[-halfL * 0.45, 0.3, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1.8, 0.4, 2.2]} />
              <meshStandardMaterial color="#d1d5db" roughness={0.6} />
            </mesh>
            {/* Đệm và ga trải giường xanh pastel */}
            <mesh position={[0, 0.22, 0.1]} castShadow>
              <boxGeometry args={[1.7, 0.12, 1.9]} />
              <meshStandardMaterial color="#6366f1" roughness={0.5} />
            </mesh>
            {/* Gối trắng */}
            <mesh position={[0, 0.32, -0.65]} castShadow>
              <boxGeometry args={[1.2, 0.12, 0.4]} />
              <meshStandardMaterial color="#ffffff" roughness={0.4} />
            </mesh>
          </group>

          {/* 3. Kệ bếp nhỏ xinh */}
          <group position={[halfL * 0.4, 0.45, halfW * 0.45]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1.5, 0.85, 0.6]} />
              <meshStandardMaterial color="#f3f4f6" roughness={0.3} metalness={0.1} />
            </mesh>
            {/* Mặt bếp đá granite đen */}
            <mesh position={[0, 0.44, 0]} castShadow>
              <boxGeometry args={[1.55, 0.05, 0.65]} />
              <meshStandardMaterial color="#1f2937" roughness={0.2} />
            </mesh>
          </group>

          {/* 4. Đèn trần thả phát sáng ấm áp bên trong */}
          <group position={[0, wallH * 0.85, 0]}>
            <mesh>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color="#fef08a" emissive="#f59e0b" emissiveIntensity={isNight ? 2.5 : 0.6} />
            </mesh>
            {/* Đèn PointLight chiếu sáng nội thất */}
            <pointLight
              color="#fbbf24"
              intensity={isNight ? 4.5 : 1.2}
              distance={8}
              decay={2}
            />
          </group>

          {/* 5. Cây xanh & thảm cỏ trước hiên nhà */}
          <group position={[halfL + 1.2, 0, halfW - 0.5]}>
            <mesh position={[0, 0.4, 0]} castShadow>
              <cylinderGeometry args={[0.3, 0.25, 0.5, 12]} />
              <meshStandardMaterial color="#b45309" roughness={0.8} />
            </mesh>
            {/* Tán lá tròn xanh mướt */}
            <mesh position={[0, 1.1, 0]} castShadow>
              <sphereGeometry args={[0.65, 16, 16]} />
              <meshStandardMaterial color="#16a34a" roughness={0.7} />
            </mesh>
          </group>

          {/* 6. Hàng rào gỗ bao quanh sân */}
          {[-halfL - 1.2, halfL + 1.2].map((fx, i) => (
            <mesh key={i} position={[fx, 0.35, halfW + 1.2]} castShadow>
              <boxGeometry args={[0.1, 0.7, 1.8]} />
              <meshStandardMaterial color="#fef3c7" roughness={0.6} />
            </mesh>
          ))}
        </group>
      )}

    </group>
  );
}

// =========================================================================
// THÀNH PHẦN SCENE 3D TỔNG THỂ (THREE.JS CANVAS VIEWPORT)
// =========================================================================
export default function TinyTown3DScene({
  stage = 0,
  houseDimensions = { length: 8, width: 6, height: 3.4 },
  roofCutaway = false,
  isNight = false,
  activeDust = false,
  cameraPreset = 'iso'
}) {
  const controlsRef = useRef();

  return (
    <div className="w-full h-full relative select-none">
      <Canvas
        shadows
        camera={{ position: [13, 11, 13], fov: 42 }}
        className="w-full h-full cursor-grab active:cursor-grabbing rounded-2xl"
      >
        {/* Ánh sáng & Bầu trời */}
        <ambientLight intensity={isNight ? 0.35 : 0.85} />
        
        <directionalLight
          position={[12, 16, 10]}
          intensity={isNight ? 0.4 : 1.3}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={40}
          shadow-camera-left={-12}
          shadow-camera-right={12}
          shadow-camera-top={12}
          shadow-camera-bottom={-12}
        />

        {/* Bầu trời sao ban đêm lung linh */}
        {isNight && <Stars radius={60} depth={40} count={3500} factor={4} fade speed={1.2} />}

        {/* Màu sương mù nhẹ nhàng */}
        <fog attach="fog" args={[isNight ? '#0f172a' : '#f0f9ff', 18, 45]} />

        {/* Bãi đất hoang sơ ban đầu */}
        <BarrenPlotTerrain
          houseWidth={houseDimensions.width}
          houseLength={houseDimensions.length}
        />

        {/* Ngôi nhà 3D đang được kiến thiết */}
        <House3DModel
          stage={stage}
          length={houseDimensions.length}
          width={houseDimensions.width}
          height={houseDimensions.height}
          roofCutaway={roofCutaway}
          isNight={isNight}
        />

        {/* Hạt bụi công trình khi thi công */}
        <DustParticles active={activeDust} />

        {/* Bộ điều khiển xoay đa chiều 360 độ */}
        <OrbitControls
          ref={controlsRef}
          makeDefault
          enableDamping
          dampingFactor={0.07}
          minDistance={4}
          maxDistance={32}
          maxPolarAngle={Math.PI / 2 - 0.05} // Không cho camera chìm dưới mặt đất
        />
      </Canvas>
    </div>
  );
}
