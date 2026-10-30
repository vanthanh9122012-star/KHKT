import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

// =========================================================================
// MÔ ĐUN HẠT BỤI CÔNG TRÌNH KHI THI CÔNG (CONSTRUCTION DUST PARTICLES)
// =========================================================================
function DustParticles({ active }) {
  const pointsRef = useRef();
  const count = 80;

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = Math.random() * 4.5 + 0.2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return [pos];
  }, [active]);

  useFrame((state, delta) => {
    if (!pointsRef.current || !active) return;
    const posArr = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += delta * 0.9;
      posArr[i * 3] += Math.sin(state.clock.elapsedTime * 2 + i) * 0.015;
      if (posArr[i * 3 + 1] > 6) {
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
        size={0.18}
        color="#fbbf24"
        transparent
        opacity={0.7}
        depthWrite={false}
      />
    </points>
  );
}

// =========================================================================
// MẶT NƯỚC HỒ BƠI VÔ CỰC CHO VILLA (ANIMATED SHIMMERING WATER)
// =========================================================================
function InfinityPoolWater({ position, size = [4.5, 3.2] }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.opacity = 0.78 + Math.sin(state.clock.elapsedTime * 2.5) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Lòng hồ bơi ốp gạch mosaic xanh ngọc */}
      <mesh position={[0, -0.6, 0]} receiveShadow>
        <boxGeometry args={[size[0] + 0.1, 1.1, size[1] + 0.1]} />
        <meshStandardMaterial color="#0284c7" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Lớp nước trong suốt xanh biếc lấp lánh */}
      <mesh
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.05, 0]}
      >
        <planeGeometry args={[size[0], size[1]]} />
        <meshPhysicalMaterial
          color="#38bdf8"
          transmission={0.88}
          transparent
          opacity={0.8}
          roughness={0.08}
          ior={1.33}
          reflectivity={0.9}
        />
      </mesh>

      {/* Đèn LED âm nước hồ bơi phát sáng dịu ban đêm */}
      <pointLight position={[0, -0.3, 0]} color="#38bdf8" intensity={1.5} distance={5} />
    </group>
  );
}

// =========================================================================
// CẢNH QUAN SÂN VƯỜN CHÂN THỰC: CỎ XANH, LỐI ĐI ĐÁ, HOA & ĐÈN TRỤ
// =========================================================================
function LandscapeScenery({ length, width, tier = 'house', isNight = false }) {
  const halfL = length / 2;
  const halfW = width / 2;

  // Lối đi lát đá phiến tự nhiên
  const steppingStones = useMemo(() => {
    const list = [];
    for (let i = 0; i < 5; i++) {
      list.push([
        (Math.random() - 0.5) * 0.3,
        0.02,
        halfW + 1.2 + i * 0.85
      ]);
    }
    return list;
  }, [halfW]);

  return (
    <group>
      {/* Nền đất & bãi cỏ lớn bao quanh */}
      <mesh receiveShadow position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color={isNight ? "#14532d" : "#4ade80"} roughness={0.85} />
      </mesh>

      {/* Vùng sân lát gạch / nền sỏi quanh nhà */}
      <mesh receiveShadow position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[length + 3.6, width + 3.6]} />
        <meshStandardMaterial color={tier === 'villa' ? "#e2e8f0" : tier === 'mansion' ? "#f1f5f9" : "#fef3c7"} roughness={0.7} />
      </mesh>

      {/* Lối đi đá phiến bước vào hiên nhà */}
      {steppingStones.map(([x, y, z], idx) => (
        <mesh key={idx} position={[x, y, z]} rotation={[-Math.PI / 2, 0, Math.PI / 4]} receiveShadow>
          <planeGeometry args={[0.7, 0.7]} />
          <meshStandardMaterial color="#94a3b8" roughness={0.6} />
        </mesh>
      ))}

      {/* Khóm hoa đầy màu sắc ven lối đi */}
      {[-halfL - 0.8, halfL + 0.8].map((fx, i) => (
        <group key={i} position={[fx, 0, halfW + 1.2]}>
          <mesh position={[0, 0.15, 0]} castShadow>
            <cylinderGeometry args={[0.3, 0.35, 0.3, 8]} />
            <meshStandardMaterial color="#78350f" roughness={0.9} />
          </mesh>
          {/* Bông hoa nhỏ đỏ & vàng */}
          <mesh position={[-0.1, 0.32, 0]} castShadow>
            <sphereGeometry args={[0.14, 8, 8]} />
            <meshStandardMaterial color="#f43f5e" roughness={0.5} />
          </mesh>
          <mesh position={[0.1, 0.35, 0.1]} castShadow>
            <sphereGeometry args={[0.15, 8, 8]} />
            <meshStandardMaterial color="#fbbf24" roughness={0.5} />
          </mesh>
        </group>
      ))}

      {/* Đèn trụ sân vườn phát sáng ban đêm */}
      {[-halfL - 1.2, halfL + 1.2].map((lx, idx) => (
        <group key={idx} position={[lx, 0, halfW + 2.2]}>
          <mesh position={[0, 0.45, 0]} castShadow>
            <cylinderGeometry args={[0.04, 0.05, 0.9, 8]} />
            <meshStandardMaterial color="#334155" metalness={0.7} />
          </mesh>
          <mesh position={[0, 0.92, 0]} castShadow>
            <boxGeometry args={[0.18, 0.22, 0.18]} />
            <meshStandardMaterial
              color="#fef08a"
              emissive="#f59e0b"
              emissiveIntensity={isNight ? 2.5 : 0.4}
            />
          </mesh>
          {isNight && (
            <pointLight position={[0, 1.1, 0]} color="#fbbf24" intensity={1.8} distance={5} />
          )}
        </group>
      ))}
    </group>
  );
}

// =========================================================================
// MÔ ĐUN NỘI THẤT BÊN TRONG TÙY BIẾN THEO Ý NGƯỜI CHƠI (INTERIOR CUSTOMIZER)
// =========================================================================
function DynamicInterior({ length, width, height, layout = {}, isNight = false, tier = 'house' }) {
  const halfL = length / 2;
  const halfW = width / 2;

  // Lấy cấu hình nội thất từ người chơi hoặc mặc định
  const sofaStyle = layout.livingSofa || 'luxury_leather';
  const tableStyle = layout.livingTable || 'marble';
  const rugStyle = layout.livingRug || 'persian';
  const lightStyle = layout.livingLight || 'chandelier';
  const bedStyle = layout.bedStyle || 'king_oak';
  const kitchenStyle = layout.kitchenIsland || 'granite_bar';
  const diningStyle = layout.diningTable || 'marble_6';

  return (
    <group position={[0, 0, 0]}>

      {/* ------------------------------------------------------------- */}
      {/* 1. KHU VỰC PHÒNG KHÁCH (LIVING ROOM)                           */}
      {/* ------------------------------------------------------------- */}
      <group position={[halfL * 0.38, 0, -halfW * 0.3]}>
        
        {/* Thảm sàn phòng khách */}
        {rugStyle !== 'none' && (
          <mesh position={[0, 0.015, 0.3]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[2.8, 2.2]} />
            <meshStandardMaterial
              color={rugStyle === 'persian' ? "#991b1b" : "#f1f5f9"}
              roughness={0.9}
            />
          </mesh>
        )}

        {/* Ghế Sofa tùy biến */}
        <group position={[0, 0, -0.4]}>
          {sofaStyle === 'luxury_leather' && (
            <group>
              {/* Đệm ngồi da bò Ý nâu sang trọng */}
              <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
                <boxGeometry args={[2.2, 0.45, 0.9]} />
                <meshStandardMaterial color="#854d0e" roughness={0.6} />
              </mesh>
              {/* Tựa lưng da cao */}
              <mesh position={[0, 0.72, -0.36]} castShadow>
                <boxGeometry args={[2.2, 0.65, 0.22]} />
                <meshStandardMaterial color="#713f12" roughness={0.6} />
              </mesh>
              {/* Tay vịn 2 bên */}
              <mesh position={[-1.15, 0.5, 0]} castShadow>
                <boxGeometry args={[0.22, 0.5, 0.9]} />
                <meshStandardMaterial color="#713f12" roughness={0.6} />
              </mesh>
              <mesh position={[1.15, 0.5, 0]} castShadow>
                <boxGeometry args={[0.22, 0.5, 0.9]} />
                <meshStandardMaterial color="#713f12" roughness={0.6} />
              </mesh>
            </group>
          )}

          {sofaStyle === 'nordic_fabric' && (
            <group>
              {/* Sofa nỉ Bắc Âu xám thanh lịch */}
              <mesh position={[0, 0.36, 0]} castShadow receiveShadow>
                <boxGeometry args={[2.1, 0.4, 0.85]} />
                <meshStandardMaterial color="#64748b" roughness={0.8} />
              </mesh>
              <mesh position={[0, 0.68, -0.33]} castShadow>
                <boxGeometry args={[2.1, 0.55, 0.2]} />
                <meshStandardMaterial color="#475569" roughness={0.8} />
              </mesh>
              {/* Chân gỗ sồi chéo */}
              {[-0.9, 0.9].map((cx, i) => (
                <mesh key={i} position={[cx, 0.08, 0]} castShadow>
                  <cylinderGeometry args={[0.04, 0.03, 0.16, 8]} />
                  <meshStandardMaterial color="#b45309" roughness={0.7} />
                </mesh>
              ))}
            </group>
          )}

          {sofaStyle === 'wooden_classic' && (
            <group>
              {/* Trường kỷ gỗ mun hoa văn cổ truyền */}
              <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
                <boxGeometry args={[2.0, 0.45, 0.8]} />
                <meshStandardMaterial color="#451a03" roughness={0.4} />
              </mesh>
              <mesh position={[0, 0.75, -0.32]} castShadow>
                <boxGeometry args={[2.0, 0.7, 0.14]} />
                <meshStandardMaterial color="#3b1302" roughness={0.4} />
              </mesh>
            </group>
          )}
        </group>

        {/* Bàn trà phòng khách */}
        <group position={[0, 0.25, 0.4]}>
          {tableStyle === 'marble' && (
            <group>
              <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.3, 0.08, 0.7]} />
                <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.1} />
              </mesh>
              {/* Chân kim loại mạ vàng */}
              {[-0.55, 0.55].map((tx, idx) => (
                <mesh key={idx} position={[tx, -0.12, 0]} castShadow>
                  <boxGeometry args={[0.04, 0.24, 0.6]} />
                  <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.2} />
                </mesh>
              ))}
            </group>
          )}

          {tableStyle === 'oak_wood' && (
            <group>
              <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.2, 0.1, 0.65]} />
                <meshStandardMaterial color="#b45309" roughness={0.6} />
              </mesh>
              {[-0.5, 0.5].map((tx, idx) => (
                <mesh key={idx} position={[tx, -0.12, 0]} castShadow>
                  <cylinderGeometry args={[0.04, 0.04, 0.24, 8]} />
                  <meshStandardMaterial color="#78350f" roughness={0.7} />
                </mesh>
              ))}
            </group>
          )}

          {tableStyle === 'glass' && (
            <group>
              <mesh position={[0, 0, 0]} castShadow>
                <boxGeometry args={[1.3, 0.04, 0.7]} />
                <meshPhysicalMaterial color="#38bdf8" transmission={0.9} transparent opacity={0.6} roughness={0.05} />
              </mesh>
              <mesh position={[0, -0.12, 0]} castShadow>
                <boxGeometry args={[1.2, 0.22, 0.6]} />
                <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.3} wireframe />
              </mesh>
            </group>
          )}
        </group>

        {/* Tivi màn hình lớn 85 inch treo tường phòng khách */}
        {layout.livingTv !== false && (
          <group position={[0, 1.4, halfW * 0.95]}>
            {/* Khung TV đen siêu mỏng */}
            <mesh castShadow>
              <boxGeometry args={[2.0, 1.15, 0.06]} />
              <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
            </mesh>
            {/* Màn hình phát sáng nhẹ */}
            <mesh position={[0, 0, -0.032]}>
              <planeGeometry args={[1.92, 1.08]} />
              <meshBasicMaterial color="#38bdf8" />
            </mesh>
          </group>
        )}

        {/* Lò sưởi ấm cúng góc phòng khách */}
        {layout.livingFireplace !== false && (
          <group position={[halfL * 0.5, 0.55, 0.4]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.5, 1.1, 1.0]} />
              <meshStandardMaterial color="#475569" roughness={0.8} />
            </mesh>
            {/* Khoang lửa ấm áp */}
            <mesh position={[-0.2, -0.1, 0]}>
              <boxGeometry args={[0.15, 0.5, 0.6]} />
              <meshStandardMaterial color="#ea580c" emissive="#f97316" emissiveIntensity={1.8} />
            </mesh>
            <pointLight position={[-0.3, 0, 0]} color="#f97316" intensity={1.2} distance={3} />
          </group>
        )}
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 2. KHU VỰC PHÒNG NGỦ MASTER (BEDROOM)                          */}
      {/* ------------------------------------------------------------- */}
      <group position={[-halfL * 0.45, 0, -halfW * 0.2]}>
        {/* Giường ngủ King Size */}
        <group position={[0, 0.35, 0]}>
          {bedStyle === 'king_oak' ? (
            <group>
              {/* Khung gỗ sồi */}
              <mesh castShadow receiveShadow>
                <boxGeometry args={[2.0, 0.4, 2.4]} />
                <meshStandardMaterial color="#78350f" roughness={0.6} />
              </mesh>
              {/* Đầu giường bọc đệm cao */}
              <mesh position={[0, 0.6, -1.15]} castShadow>
                <boxGeometry args={[2.0, 0.8, 0.15]} />
                <meshStandardMaterial color="#6366f1" roughness={0.7} />
              </mesh>
            </group>
          ) : (
            <group>
              {/* Giường bọc da tối giản */}
              <mesh castShadow receiveShadow>
                <boxGeometry args={[1.9, 0.35, 2.3]} />
                <meshStandardMaterial color="#334155" roughness={0.5} />
              </mesh>
              <mesh position={[0, 0.55, -1.1]} castShadow>
                <boxGeometry args={[1.9, 0.7, 0.15]} />
                <meshStandardMaterial color="#1e293b" roughness={0.5} />
              </mesh>
            </group>
          )}

          {/* Đệm lò xo & ga trải giường êm ái */}
          <mesh position={[0, 0.22, 0.1]} castShadow>
            <boxGeometry args={[1.85, 0.16, 2.1]} />
            <meshStandardMaterial color="#e0e7ff" roughness={0.4} />
          </mesh>

          {/* 2 Gối ngủ trắng tinh */}
          <mesh position={[-0.45, 0.34, -0.75]} castShadow>
            <boxGeometry args={[0.7, 0.12, 0.45]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} />
          </mesh>
          <mesh position={[0.45, 0.34, -0.75]} castShadow>
            <boxGeometry args={[0.7, 0.12, 0.45]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} />
          </mesh>
        </group>

        {/* Tủ đầu giường có đèn ngủ */}
        <group position={[-1.25, 0.3, -0.8]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.45, 0.6, 0.45]} />
            <meshStandardMaterial color="#78350f" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.38, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.14, 0.22, 8]} />
            <meshStandardMaterial color="#fef08a" emissive="#fbbf24" emissiveIntensity={isNight ? 1.5 : 0.3} />
          </mesh>
        </group>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 3. GIAN BẾP & BÀN ĂN (KITCHEN & DINING)                         */}
      {/* ------------------------------------------------------------- */}
      <group position={[-halfL * 0.35, 0, halfW * 0.45]}>
        {/* Đảo bếp mặt đá Granite hoặc Tủ bếp L */}
        {kitchenStyle === 'granite_bar' ? (
          <group position={[0, 0.48, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1.8, 0.9, 0.7]} />
              <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.2} />
            </mesh>
            {/* 2 Ghế bar cao */}
            {[-0.5, 0.5].map((gx, idx) => (
              <mesh key={idx} position={[gx, 0.05, 0.65]} castShadow>
                <cylinderGeometry args={[0.18, 0.18, 0.65, 12]} />
                <meshStandardMaterial color="#b45309" roughness={0.6} />
              </mesh>
            ))}
          </group>
        ) : (
          <group position={[0, 0.48, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[2.0, 0.9, 0.65]} />
              <meshStandardMaterial color="#d97706" roughness={0.5} />
            </mesh>
          </group>
        )}
      </group>

      {/* Bàn ăn gia đình */}
      <group position={[halfL * 0.1, 0.4, halfW * 0.5]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[diningStyle === 'marble_6' ? 1.6 : 1.2, 0.08, 0.9]} />
          <meshStandardMaterial color={diningStyle === 'marble_6' ? "#f1f5f9" : "#92400e"} roughness={0.3} />
        </mesh>
        {/* Chân bàn */}
        {[-0.6, 0.6].map((dx, i) => (
          <mesh key={i} position={[dx, -0.18, 0]} castShadow>
            <boxGeometry args={[0.08, 0.42, 0.7]} />
            <meshStandardMaterial color="#334155" metalness={0.7} />
          </mesh>
        ))}
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 4. HỆ THỐNG CHIẾU SÁNG TRẦN (CEILING LIGHTING)                */}
      {/* ------------------------------------------------------------- */}
      <group position={[0, height * 0.9, 0]}>
        {lightStyle === 'chandelier' && (
          <group>
            {/* Đèn chùm pha lê hoàng gia vàng ấm */}
            <mesh>
              <sphereGeometry args={[0.26, 16, 16]} />
              <meshStandardMaterial color="#fef08a" emissive="#f59e0b" emissiveIntensity={isNight ? 2.8 : 0.8} />
            </mesh>
            {/* Các hạt pha lê tỏa ra */}
            {[-0.3, 0.3].map((cx, idx) => (
              <mesh key={idx} position={[cx, -0.15, 0]}>
                <dodecahedronGeometry args={[0.08, 0]} />
                <meshStandardMaterial color="#ffffff" emissive="#fbbf24" emissiveIntensity={2.0} />
              </mesh>
            ))}
            <pointLight color="#fbbf24" intensity={isNight ? 5.5 : 1.5} distance={10} decay={2} castShadow />
          </group>
        )}

        {lightStyle === 'nordic_led' && (
          <group>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.6, 0.04, 16, 32]} />
              <meshStandardMaterial color="#f8fafc" emissive="#ffffff" emissiveIntensity={isNight ? 2.5 : 0.6} />
            </mesh>
            <pointLight color="#f8fafc" intensity={isNight ? 4.8 : 1.4} distance={9} />
          </group>
        )}

        {lightStyle === 'spotlight' && (
          <group>
            {[-1.5, 0, 1.5].map((sx, idx) => (
              <group key={idx} position={[sx, 0, 0]}>
                <mesh>
                  <cylinderGeometry args={[0.08, 0.08, 0.1, 12]} />
                  <meshStandardMaterial color="#0f172a" />
                </mesh>
                <pointLight position={[0, -0.1, 0]} color="#fef08a" intensity={1.8} distance={4} />
              </group>
            ))}
          </group>
        )}
      </group>

      {/* Cây cảnh trong nhà phong thủy */}
      {layout.indoorPlant !== false && (
        <group position={[halfL * 0.8, 0, -halfW * 0.8]}>
          <mesh position={[0, 0.3, 0]} castShadow>
            <cylinderGeometry args={[0.25, 0.2, 0.6, 12]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.85, 0]} castShadow>
            <sphereGeometry args={[0.4, 12, 12]} />
            <meshStandardMaterial color="#15803d" roughness={0.7} />
          </mesh>
        </group>
      )}

    </group>
  );
}

// =========================================================================
// MÔ HÌNH CẤP 1: NGÔI NHÀ PHỐ ẤM CÚNG (COZY TOWNHOUSE)
// =========================================================================
function House3DModel({
  stage,
  length = 8,
  width = 6,
  height = 3.4,
  roofCutaway = false,
  isNight = false,
  layout = {}
}) {
  const halfL = length / 2;
  const halfW = width / 2;
  const wallThick = 0.28;
  const foundationH = 0.6;
  const wallH = height;

  return (
    <group position={[0, 0, 0]}>

      {/* Giai đoạn 1: Móng đá kiên cố */}
      {stage >= 1 && (
        <group position={[0, foundationH / 2, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[length + 0.4, foundationH, width + 0.4]} />
            <meshStandardMaterial color="#64748b" roughness={0.85} />
          </mesh>

          {/* Sàn đá marble bóng mịn bên trong */}
          <mesh position={[0, foundationH / 2 + 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[length, width]} />
            <meshStandardMaterial color="#f1f5f9" roughness={0.3} metalness={0.05} />
          </mesh>

          {/* Bậc tam cấp đá hoa cương */}
          <mesh position={[0, -foundationH / 4, halfW + 0.55]} castShadow receiveShadow>
            <boxGeometry args={[2.0, foundationH / 2, 0.8]} />
            <meshStandardMaterial color="#94a3b8" roughness={0.7} />
          </mesh>
        </group>
      )}

      {/* Giai đoạn 2: Khung cột bê tông cốt thép */}
      {stage >= 2 && (
        <group position={[0, foundationH + wallH / 2, 0]}>
          {[
            [-halfL + wallThick / 2, -halfW + wallThick / 2],
            [halfL - wallThick / 2, -halfW + wallThick / 2],
            [halfL - wallThick / 2, halfW - wallThick / 2],
            [-halfL + wallThick / 2, halfW - wallThick / 2]
          ].map(([cx, cz], i) => (
            <mesh key={i} position={[cx, 0, cz]} castShadow receiveShadow>
              <boxGeometry args={[wallThick * 1.3, wallH, wallThick * 1.3]} />
              <meshStandardMaterial color="#475569" roughness={0.7} />
            </mesh>
          ))}
          {/* Dầm giằng bê tông đỉnh tường */}
          <mesh position={[0, wallH / 2 - wallThick / 2, -halfW + wallThick / 2]} castShadow>
            <boxGeometry args={[length, wallThick, wallThick]} />
            <meshStandardMaterial color="#475569" roughness={0.7} />
          </mesh>
          <mesh position={[0, wallH / 2 - wallThick / 2, halfW - wallThick / 2]} castShadow>
            <boxGeometry args={[length, wallThick, wallThick]} />
            <meshStandardMaterial color="#475569" roughness={0.7} />
          </mesh>
        </group>
      )}

      {/* Giai đoạn 3: Tường gạch đất nung ấm áp */}
      {stage >= 3 && (
        <group position={[0, foundationH + wallH / 2, 0]}>
          {/* Tường sau */}
          <mesh position={[0, 0, -halfW + wallThick / 2]} castShadow receiveShadow>
            <boxGeometry args={[length, wallH, wallThick]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.75} />
          </mesh>
          {/* Tường trái */}
          <mesh position={[-halfL + wallThick / 2, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[wallThick, wallH, width]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.75} />
          </mesh>
          {/* Tường phải */}
          <mesh position={[halfL - wallThick / 2, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[wallThick, wallH, width]} />
            <meshStandardMaterial color="#b91c1c" roughness={0.75} />
          </mesh>
          {/* Tường trước có chừa cửa đi & cửa sổ (hoặc trong suốt khi mở mái xem bên trong) */}
          <mesh
            position={[-length * 0.32, 0, halfW - wallThick / 2]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[length * 0.36, wallH, wallThick]} />
            <meshStandardMaterial
              color="#b91c1c"
              roughness={0.75}
              transparent={roofCutaway}
              opacity={roofCutaway ? 0.3 : 1}
            />
          </mesh>
          <mesh
            position={[length * 0.32, 0, halfW - wallThick / 2]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[length * 0.36, wallH, wallThick]} />
            <meshStandardMaterial
              color="#b91c1c"
              roughness={0.75}
              transparent={roofCutaway}
              opacity={roofCutaway ? 0.3 : 1}
            />
          </mesh>
        </group>
      )}

      {/* Giai đoạn 4: Cửa gỗ tự nhiên & Cửa sổ kính */}
      {stage >= 4 && (
        <group position={[0, foundationH + wallH / 2, 0]}>
          {/* Cửa gỗ chính */}
          <group position={[0, -wallH * 0.15, halfW - wallThick / 2]}>
            <mesh castShadow>
              <boxGeometry args={[1.5, wallH * 0.7, 0.08]} />
              <meshStandardMaterial color="#78350f" roughness={0.5} />
            </mesh>
            <mesh position={[0.55, 0, 0.06]} castShadow>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.2} />
            </mesh>
          </group>

          {/* Cửa sổ kính lấy sáng */}
          <group position={[-length * 0.3, 0, halfW - wallThick / 2]}>
            <mesh>
              <boxGeometry args={[1.4, 1.4, 0.04]} />
              <meshPhysicalMaterial color="#bae6fd" transparent opacity={0.4} transmission={0.9} roughness={0.08} />
            </mesh>
          </group>
        </group>
      )}

      {/* Giai đoạn 5: Mái ngói đỏ dốc & Ống khói */}
      {stage >= 5 && (
        <group
          position={[0, foundationH + wallH + (roofCutaway ? 3.5 : 0), 0]}
        >
          {/* Mái ngói đỏ */}
          <mesh position={[0, 1.3, 0]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
            <coneGeometry args={[width * 0.8, 2.6, 4]} />
            <meshStandardMaterial
              color="#dc2626"
              roughness={0.65}
              transparent={roofCutaway}
              opacity={roofCutaway ? 0.2 : 1}
            />
          </mesh>

          {/* Ống khói gạch lò sưởi */}
          <group position={[length * 0.25, 2.0, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.7, 1.8, 0.7]} />
              <meshStandardMaterial color="#991b1b" roughness={0.8} />
            </mesh>
          </group>
        </group>
      )}

      {/* Giai đoạn 6: Toàn bộ nội thất bên trong tùy biến */}
      {stage >= 6 && (
        <group position={[0, foundationH, 0]}>
          <DynamicInterior
            length={length}
            width={width}
            height={height}
            layout={layout}
            isNight={isNight}
            tier="house"
          />
        </group>
      )}

    </group>
  );
}

// =========================================================================
// MÔ HÌNH CẤP 2: BIỆT THỰ TÂN CỔ ĐIỂN 2 TẦNG (MODERN MANSION)
// =========================================================================
function Mansion3DModel({
  stage,
  length = 10,
  width = 7.2,
  height = 6.2,
  roofCutaway = false,
  isNight = false,
  layout = {}
}) {
  const halfL = length / 2;
  const halfW = width / 2;
  const floor1H = height * 0.52;
  const floor2H = height * 0.48;
  const foundationH = 0.65;

  return (
    <group position={[0, 0, 0]}>

      {/* Móng cọc bê tông đồ sộ */}
      {stage >= 1 && (
        <group position={[0, foundationH / 2, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[length + 0.6, foundationH, width + 0.6]} />
            <meshStandardMaterial color="#475569" roughness={0.85} />
          </mesh>
          <mesh position={[0, foundationH / 2 + 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[length + 0.2, width + 0.2]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.1} />
          </mesh>
        </group>
      )}

      {/* Khung cột 2 tầng & Sàn tầng 2 */}
      {stage >= 2 && (
        <group position={[0, foundationH, 0]}>
          {/* Cột sảnh đón La Mã vuông vức trắng tuyết */}
          {[-halfL * 0.35, halfL * 0.35].map((cx, i) => (
            <mesh key={i} position={[cx, floor1H / 2, halfW + 0.4]} castShadow>
              <boxGeometry args={[0.45, floor1H, 0.45]} />
              <meshStandardMaterial color="#ffffff" roughness={0.3} />
            </mesh>
          ))}
          {/* Sàn tầng 2 */}
          <mesh position={[0, floor1H, 0]} castShadow receiveShadow>
            <boxGeometry args={[length + 0.3, 0.3, width + 0.3]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
          </mesh>
        </group>
      )}

      {/* Tường bao 2 tầng sơn trắng ngà tân cổ điển */}
      {stage >= 3 && (
        <group position={[0, foundationH, 0]}>
          {/* Khối tầng 1 */}
          <mesh position={[0, floor1H / 2, -halfW + 0.15]} castShadow receiveShadow>
            <boxGeometry args={[length, floor1H, 0.3]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.5} />
          </mesh>
          {/* Hai bên hông */}
          {[-halfL + 0.15, halfL - 0.15].map((wx, i) => (
            <mesh key={i} position={[wx, floor1H / 2, 0]} castShadow receiveShadow>
              <boxGeometry args={[0.3, floor1H, width]} />
              <meshStandardMaterial color="#f8fafc" roughness={0.5} />
            </mesh>
          ))}

          {/* Khối tầng 2 */}
          <mesh position={[0, floor1H + floor2H / 2, -halfW + 0.15]} castShadow receiveShadow>
            <boxGeometry args={[length, floor2H, 0.3]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.5} />
          </mesh>
          {[-halfL + 0.15, halfL - 0.15].map((wx, i) => (
            <mesh key={i} position={[wx, floor1H + floor2H / 2, 0]} castShadow receiveShadow>
              <boxGeometry args={[0.3, floor2H, width]} />
              <meshStandardMaterial color="#f8fafc" roughness={0.5} />
            </mesh>
          ))}
        </group>
      )}

      {/* Hệ cửa vòm & Ban công tầng 2 */}
      {stage >= 4 && (
        <group position={[0, foundationH, 0]}>
          {/* Cửa đôi đại sảnh gỗ óc chó */}
          <mesh position={[0, floor1H * 0.45, halfW]} castShadow>
            <boxGeometry args={[2.2, floor1H * 0.8, 0.1]} />
            <meshStandardMaterial color="#451a03" roughness={0.4} />
          </mesh>

          {/* Ban công tầng 2 lan can kính hoặc sắt nghệ thuật */}
          <group position={[0, floor1H, halfW + 0.5]}>
            <mesh position={[0, 0.4, 0]} castShadow>
              <boxGeometry args={[3.2, 0.8, 0.05]} />
              <meshPhysicalMaterial color="#38bdf8" transmission={0.9} transparent opacity={0.5} roughness={0.1} />
            </mesh>
          </group>
        </group>
      )}

      {/* Mái Mansard Pháp & Mái Gara ô tô */}
      {stage >= 5 && (
        <group position={[0, foundationH + height + (roofCutaway ? 4.0 : 0), 0]}>
          {/* Khối mái Mansard vát đen than */}
          <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
            <boxGeometry args={[length + 0.2, 1.8, width + 0.2]} />
            <meshStandardMaterial
              color="#1e293b"
              roughness={0.7}
              transparent={roofCutaway}
              opacity={roofCutaway ? 0.25 : 1}
            />
          </mesh>
        </group>
      )}

      {/* Hoàn thiện nội thất biệt thự 2 tầng */}
      {stage >= 6 && (
        <group position={[0, foundationH, 0]}>
          <DynamicInterior
            length={length}
            width={width}
            height={height}
            layout={layout}
            isNight={isNight}
            tier="mansion"
          />
        </group>
      )}

    </group>
  );
}

// =========================================================================
// MÔ HÌNH CẤP 3: VILLA NGHỈ DƯỠNG HỒ BƠI VÔ CỰC (LUXURY RESORT VILLA)
// =========================================================================
function Villa3DModel({
  stage,
  length = 12,
  width = 8.5,
  height = 6.8,
  roofCutaway = false,
  isNight = false,
  layout = {}
}) {
  const halfL = length / 2;
  const halfW = width / 2;
  const foundationH = 0.7;

  return (
    <group position={[0, 0, 0]}>

      {/* Đào móng & Khối hồ bơi ngầm */}
      {stage >= 1 && (
        <group position={[0, 0, 0]}>
          {/* Nền móng villa đá tự nhiên */}
          <mesh position={[0, foundationH / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[length + 0.4, foundationH, width + 0.4]} />
            <meshStandardMaterial color="#475569" roughness={0.8} />
          </mesh>

          {/* HỒ BƠI VÔ CỰC BÊN HÔNG VILLA */}
          <InfinityPoolWater
            position={[halfL + 2.8, foundationH * 0.7, 0]}
            size={[4.8, 4.2]}
          />
        </group>
      )}

      {/* Khung dầm chịu lực & Thành hồ bơi bê tông chống thấm */}
      {stage >= 2 && (
        <group position={[0, foundationH, 0]}>
          {/* Cột trụ thép đen tối giản thanh thoát */}
          {[
            [-halfL + 0.2, -halfW + 0.2],
            [halfL - 0.2, -halfW + 0.2],
            [halfL - 0.2, halfW - 0.2],
            [-halfL + 0.2, halfW - 0.2]
          ].map(([cx, cz], i) => (
            <mesh key={i} position={[cx, height / 2, cz]} castShadow>
              <boxGeometry args={[0.3, height, 0.3]} />
              <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
            </mesh>
          ))}
          {/* Sàn tầng 2 kính Panorama */}
          <mesh position={[0, height * 0.5, 0]} castShadow receiveShadow>
            <boxGeometry args={[length, 0.25, width]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.3} />
          </mesh>
        </group>
      )}

      {/* Hệ vách kính Panorama kịch trần ngắm hồ bơi */}
      {stage >= 3 && (
        <group position={[0, foundationH + height / 2, 0]}>
          {/* Vách kính trước hướng hồ bơi trong suốt tuyệt đối */}
          <mesh position={[0, 0, halfW - 0.05]}>
            <boxGeometry args={[length * 0.9, height * 0.92, 0.06]} />
            <meshPhysicalMaterial
              color="#e0f2fe"
              transmission={0.92}
              transparent
              opacity={0.3}
              roughness={0.04}
              ior={1.5}
            />
          </mesh>
        </group>
      )}

      {/* Sàn gỗ Teck ngoài trời & Ghế tắm nắng hồ bơi */}
      {stage >= 4 && (
        <group position={[halfL + 2.8, foundationH, 0]}>
          {/* Boong gỗ Teck viền hồ bơi */}
          <mesh position={[0, 0.04, 2.6]} receiveShadow>
            <boxGeometry args={[5.2, 0.08, 1.4]} />
            <meshStandardMaterial color="#78350f" roughness={0.7} />
          </mesh>
          {/* 2 Chiếc ghế dài tắm nắng sang trọng */}
          {[-1.2, 1.2].map((gx, idx) => (
            <group key={idx} position={[gx, 0.2, 2.6]}>
              <mesh castShadow>
                <boxGeometry args={[0.7, 0.15, 1.6]} />
                <meshStandardMaterial color="#ffffff" roughness={0.4} />
              </mesh>
            </group>
          ))}
        </group>
      )}

      {/* Sân thượng Sky Garden & Mái che phẳng hiện đại */}
      {stage >= 5 && (
        <group position={[0, foundationH + height + (roofCutaway ? 4.5 : 0), 0]}>
          {/* Mái bằng Sky Garden */}
          <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
            <boxGeometry args={[length + 0.4, 0.3, width + 0.4]} />
            <meshStandardMaterial
              color="#334155"
              roughness={0.6}
              transparent={roofCutaway}
              opacity={roofCutaway ? 0.25 : 1}
            />
          </mesh>
          {/* Lan can kính sân thượng */}
          <mesh position={[0, 0.6, halfW]} castShadow>
            <boxGeometry args={[length, 0.8, 0.05]} />
            <meshPhysicalMaterial color="#38bdf8" transmission={0.9} transparent opacity={0.4} roughness={0.1} />
          </mesh>
        </group>
      )}

      {/* Hoàn thiện nội thất villa nghỉ dưỡng triệu đô */}
      {stage >= 6 && (
        <group position={[0, foundationH, 0]}>
          <DynamicInterior
            length={length}
            width={width}
            height={height}
            layout={layout}
            isNight={isNight}
            tier="villa"
          />
        </group>
      )}

    </group>
  );
}

// =========================================================================
// BỘ ĐIỀU KHIỂN CHUYỂN GÓC NHÌN CAMERA TỰ ĐỘNG (CAMERA CONTROLLER)
// =========================================================================
function CameraController({ viewMode = 'orbit', controlsRef }) {
  const { camera } = useThree();

  useEffect(() => {
    if (!controlsRef.current) return;

    if (viewMode === 'orbit') {
      // Góc nhìn toàn cảnh 360 độ ngoại thất
      camera.position.set(13, 11, 13);
      camera.fov = 42;
      camera.updateProjectionMatrix();
      controlsRef.current.target.set(0, 1.5, 0);
      controlsRef.current.update();
    } else if (viewMode === 'interior') {
      // Góc nhìn xem trực tiếp bên trong phòng khách / phòng ngủ
      camera.position.set(0, 3.2, 5.2);
      camera.fov = 54;
      camera.updateProjectionMatrix();
      controlsRef.current.target.set(0, 1.2, 0);
      controlsRef.current.update();
    } else if (viewMode === 'topdown') {
      // Góc nhìn từ trên cao xuống sơ đồ mặt bằng
      camera.position.set(0, 17, 0.01);
      camera.fov = 45;
      camera.updateProjectionMatrix();
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  }, [viewMode, camera, controlsRef]);

  return null;
}

// =========================================================================
// THÀNH PHẦN SCENE 3D TỔNG THỂ (THREE.JS CANVAS VIEWPORT)
// =========================================================================
export default function TinyTown3DScene({
  tier = 'house', // 'house' | 'mansion' | 'villa'
  stage = 0,
  houseDimensions = { length: 8, width: 6, height: 3.4 },
  roofCutaway = false,
  isNight = false,
  activeDust = false,
  viewMode = 'orbit', // 'orbit' | 'interior' | 'topdown'
  interiorLayout = {}
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
        <ambientLight intensity={isNight ? 0.38 : 0.9} />
        
        <directionalLight
          position={[14, 18, 12]}
          intensity={isNight ? 0.45 : 1.35}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={45}
          shadow-camera-left={-14}
          shadow-camera-right={14}
          shadow-camera-top={14}
          shadow-camera-bottom={-14}
        />

        {/* Bầu trời sao ban đêm lung linh */}
        {isNight && <Stars radius={65} depth={45} count={4000} factor={4} fade speed={1.2} />}

        {/* Màu sương mù nhẹ nhàng */}
        <fog attach="fog" args={[isNight ? '#0f172a' : '#f0f9ff', 20, 50]} />

        {/* Bộ chuyển đổi góc nhìn camera */}
        <CameraController viewMode={viewMode} controlsRef={controlsRef} />

        {/* Cảnh quan sân vườn chân thực: Cỏ xanh, lối đi đá, hoa, đèn */}
        <LandscapeScenery
          length={houseDimensions.length}
          width={houseDimensions.width}
          tier={tier}
          isNight={isNight}
        />

        {/* Mô hình công trình tương ứng với cấp bậc (Tier) */}
        {tier === 'house' && (
          <House3DModel
            stage={stage}
            length={houseDimensions.length}
            width={houseDimensions.width}
            height={houseDimensions.height}
            roofCutaway={roofCutaway || viewMode === 'interior'}
            isNight={isNight}
            layout={interiorLayout}
          />
        )}

        {tier === 'mansion' && (
          <Mansion3DModel
            stage={stage}
            length={houseDimensions.length}
            width={houseDimensions.width}
            height={houseDimensions.height}
            roofCutaway={roofCutaway || viewMode === 'interior'}
            isNight={isNight}
            layout={interiorLayout}
          />
        )}

        {tier === 'villa' && (
          <Villa3DModel
            stage={stage}
            length={houseDimensions.length}
            width={houseDimensions.width}
            height={houseDimensions.height}
            roofCutaway={roofCutaway || viewMode === 'interior'}
            isNight={isNight}
            layout={interiorLayout}
          />
        )}

        {/* Hạt bụi công trình khi thi công */}
        <DustParticles active={activeDust} />

        {/* Bộ điều khiển xoay đa chiều 360 độ */}
        <OrbitControls
          ref={controlsRef}
          makeDefault
          enableDamping
          dampingFactor={0.07}
          minDistance={3.5}
          maxDistance={35}
          maxPolarAngle={Math.PI / 2 - 0.05}
        />
      </Canvas>
    </div>
  );
}
