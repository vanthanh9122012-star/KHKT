import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  Sparkles, Gem, HelpCircle, Trophy, RefreshCw, X, Award, ChevronRight, 
  Layers, Info, ShieldCheck, Flame, Atom, Star, CheckCircle2, Volume2, VolumeX, Eye, Zap, Timer, Lock
} from 'lucide-react';
import { GACHA_ELEMENTS, pullRandomElement } from './data/elementsGachaData';

// Singleton Audio Context for ultra-low latency sound synthesis
let sharedAudioCtx = null;
function getAudioContext() {
  try {
    if (!sharedAudioCtx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) sharedAudioCtx = new AudioCtx();
    }
    if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume().catch(() => {});
    }
    return sharedAudioCtx;
  } catch {
    return null;
  }
}

function playSound(type) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'crank') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } else if (type === 'tumble') {
      // Sound of plastic balls colliding/tumbling inside the gacha sphere
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320 + Math.random() * 260, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.09, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } else if (type === 'drop') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(380, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === 'legendary') {
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = freq;
        o.connect(g);
        g.connect(ctx.destination);
        const startTime = ctx.currentTime + i * 0.08;
        g.gain.setValueAtTime(0.2, startTime);
        g.gain.exponentialRampToValueAtTime(0.01, startTime + 0.35);
        o.start(startTime);
        o.stop(startTime + 0.4);
      });
    } else if (type === 'rare') {
      [587.33, 739.99, 880].forEach(freq => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'triangle';
        o.frequency.value = freq;
        o.connect(g);
        g.connect(ctx.destination);
        g.gain.setValueAtTime(0.2, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        o.start();
        o.stop(ctx.currentTime + 0.4);
      });
    } else if (type === 'common') {
      [659.25, 880].forEach((freq, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = freq;
        o.connect(g);
        g.connect(ctx.destination);
        const startTime = ctx.currentTime + idx * 0.09;
        g.gain.setValueAtTime(0.18, startTime);
        g.gain.exponentialRampToValueAtTime(0.01, startTime + 0.22);
        o.start(startTime);
        o.stop(startTime + 0.25);
      });
    }
  } catch {
    // Audio fail-safe
  }
}

// 16 Element Balls for 2D Canvas Physics Simulation
const BALL_PRESETS = [
  { symbol: 'Au', color1: '#fef08a', color2: '#eab308', color3: '#854d0e', glow: 'rgba(234,179,8,0.8)', text: '#422006' },
  { symbol: 'Pt', color1: '#cffafe', color2: '#06b6d4', color3: '#155e75', glow: 'rgba(6,182,212,0.8)', text: '#083344' },
  { symbol: 'U',  color1: '#bef264', color2: '#22c55e', color3: '#14532d', glow: 'rgba(34,197,94,0.8)', text: '#052e16' },
  { symbol: 'Fr', color1: '#fecaca', color2: '#ef4444', color3: '#991b1b', glow: 'rgba(239,68,68,0.8)', text: '#450a0a' },
  { symbol: 'Ag', color1: '#ffffff', color2: '#cbd5e1', color3: '#475569', glow: 'rgba(203,213,225,0.8)', text: '#0f172a' },
  { symbol: 'Ti', color1: '#e9d5ff', color2: '#a855f7', color3: '#581c87', glow: 'rgba(168,85,247,0.8)', text: '#3b0764' },
  { symbol: 'W',  color1: '#fed7aa', color2: '#f97316', color3: '#9a3412', glow: 'rgba(249,115,22,0.8)', text: '#431407' },
  { symbol: 'He', color1: '#fef08a', color2: '#facc15', color3: '#a16207', glow: 'rgba(250,204,21,0.8)', text: '#422006' },
  { symbol: 'Hg', color1: '#e2e8f0', color2: '#94a3b8', color3: '#334155', glow: 'rgba(148,163,184,0.8)', text: '#0f172a' },
  { symbol: 'Fe', color1: '#ffedd5', color2: '#ea580c', color3: '#7c2d12', glow: 'rgba(234,88,12,0.8)', text: '#ffffff' },
  { symbol: 'O',  color1: '#bae6fd', color2: '#0ea5e9', color3: '#0369a1', glow: 'rgba(14,165,233,0.8)', text: '#ffffff' },
  { symbol: 'H',  color1: '#a5f3fc', color2: '#06b6d4', color3: '#0e7490', glow: 'rgba(6,182,212,0.8)', text: '#ffffff' },
  { symbol: 'Cl', color1: '#d9f99d', color2: '#84cc16', color3: '#3f6212', glow: 'rgba(132,204,22,0.8)', text: '#1a2e05' },
  { symbol: 'Na', color1: '#fef08a', color2: '#eab308', color3: '#a16207', glow: 'rgba(234,179,8,0.8)', text: '#422006' },
  { symbol: 'Cu', color1: '#fed7aa', color2: '#d97706', color3: '#78350f', glow: 'rgba(217,119,6,0.8)', text: '#ffffff' },
  { symbol: 'C',  color1: '#cbd5e1', color2: '#475569', color3: '#1e293b', glow: 'rgba(71,85,105,0.8)', text: '#ffffff' }
];

export default function ElementGacha({ addReward, gamification, onElementUnlocked }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinTimeRemaining, setSpinTimeRemaining] = useState(5.0);
  const [pulledResults, setPulledResults] = useState(null);
  const [activeRevealedIndex, setActiveRevealedIndex] = useState(0);
  const [droppedBall, setDroppedBall] = useState(null);
  const [showOddsModal, setShowOddsModal] = useState(false);
  const [showCodexModal, setShowCodexModal] = useState(false);
  const [selectedCodexElement, setSelectedCodexElement] = useState(null);
  const [codexTab, setCodexTab] = useState('owned'); // 'owned' | 'all'
  const [collection, setCollection] = useState({});
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [crankDegree, setCrankDegree] = useState(0);

  // Kiểm tra người dùng đã từng có lượt quay trước đó chưa (chỉ cho duy nhất 1 lần thử đối với người chưa từng quay)
  const [hasSpunBefore, setHasSpunBefore] = useState(() => {
    try {
      const trialUsed = localStorage.getItem('studyflow_gacha_trial_used') === 'true';
      const totalSpins = parseInt(localStorage.getItem('studyflow_gacha_total_spins') || '0', 10);
      const savedColl = localStorage.getItem('studyflow_element_collection');
      const hasElements = savedColl ? Object.keys(JSON.parse(savedColl)).length > 0 : false;
      return trialUsed || totalSpins > 0 || hasElements;
    } catch {
      return false;
    }
  });

  const canvasRef = useRef(null);
  const physicsRef = useRef(null);
  const tumbleIntervalRef = useRef(null);

  // Initialize Canvas 2D Tumbler Physics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const containerRadius = (width / 2) - 4;
    const ballRadius = 17;
    const maxDist = containerRadius - ballRadius;

    // Create 16 balls with initial resting positions at the bottom
    const balls = BALL_PRESETS.map((preset, i) => {
      const angle = Math.PI * 0.2 + (i / BALL_PRESETS.length) * Math.PI * 0.6;
      const dist = maxDist * (0.4 + (i % 3) * 0.25);
      return {
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        rot: Math.random() * Math.PI * 2,
        r: ballRadius,
        ...preset
      };
    });

    physicsRef.current = { balls, isSpinning: false };
    let animationFrameId;

    const render = () => {
      const isSpin = physicsRef.current?.isSpinning || false;
      ctx.clearRect(0, 0, width, height);

      // Glass bowl inner shadow/glow
      const domeGrad = ctx.createRadialGradient(cx, cy - 20, 10, cx, cy, containerRadius);
      domeGrad.addColorStop(0, 'rgba(15, 23, 42, 0.2)');
      domeGrad.addColorStop(0.8, 'rgba(30, 41, 59, 0.4)');
      domeGrad.addColorStop(1, 'rgba(56, 189, 248, 0.15)');
      ctx.fillStyle = domeGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, containerRadius, 0, Math.PI * 2);
      ctx.fill();

      // Physics update for each ball
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];

        if (isSpin) {
          // Dynamic vortex swirling turbulence
          const dx = b.x - cx;
          const dy = b.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const angle = Math.atan2(dy, dx);

          // Centrifugal + rotational force
          const swirlSpeed = 2.2;
          b.vx += -Math.sin(angle) * swirlSpeed + (Math.random() - 0.5) * 2.8;
          b.vy += Math.cos(angle) * swirlSpeed + (Math.random() - 0.5) * 2.8 - 0.8; // Upward suction

          // Max speed clamp
          const currentSpeed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
          if (currentSpeed > 16) {
            b.vx = (b.vx / currentSpeed) * 16;
            b.vy = (b.vy / currentSpeed) * 16;
          }
        } else {
          // Normal idle: gravity pulling down + gentle settle
          b.vy += 0.22;
          b.vx *= 0.96;
          b.vy *= 0.96;
        }

        b.x += b.vx;
        b.y += b.vy;
        b.rot += b.vx * 0.08;

        // Circular boundary bounce
        const dx = b.x - cx;
        const dy = b.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > maxDist) {
          const nx = dx / dist;
          const ny = dy / dist;
          b.x = cx + nx * maxDist;
          b.y = cy + ny * maxDist;

          const dot = b.vx * nx + b.vy * ny;
          if (dot > 0) {
            const restitution = isSpin ? 0.92 : 0.65;
            b.vx = (b.vx - 1.9 * dot * nx) * restitution;
            b.vy = (b.vy - 1.9 * dot * ny) * restitution;
          }
        }
      }

      // Ball-to-ball collisions (Elastic circle-circle physics)
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const b1 = balls[i];
          const b2 = balls[j];
          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = b1.r + b2.r;

          if (dist < minDist && dist > 0) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = 0.5 * (minDist - dist);

            b1.x -= nx * overlap;
            b1.y -= ny * overlap;
            b2.x += nx * overlap;
            b2.y += ny * overlap;

            const kx = b1.vx - b2.vx;
            const ky = b1.vy - b2.vy;
            const p = kx * nx + ky * ny;

            if (p > 0) {
              const restitution = 0.88;
              b1.vx -= p * nx * restitution;
              b1.vy -= p * ny * restitution;
              b2.vx += p * nx * restitution;
              b2.vy += p * ny * restitution;
            }
          }
        }
      }

      // Draw all balls with 3D gradient shading & symbols
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];

        ctx.save();
        ctx.translate(b.x, b.y);

        // Glow effect
        ctx.shadowColor = b.glow;
        ctx.shadowBlur = isSpin ? 18 : 8;

        // Ball body 3D gradient
        const sphereGrad = ctx.createRadialGradient(-b.r * 0.35, -b.r * 0.35, b.r * 0.1, 0, 0, b.r);
        sphereGrad.addColorStop(0, b.color1);
        sphereGrad.addColorStop(0.5, b.color2);
        sphereGrad.addColorStop(1, b.color3);

        ctx.fillStyle = sphereGrad;
        ctx.beginPath();
        ctx.arc(0, 0, b.r, 0, Math.PI * 2);
        ctx.fill();

        // Equator ring to make ball spin visually noticeable
        ctx.rotate(b.rot);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.ellipse(0, 0, b.r - 1, b.r * 0.35, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Element symbol in center
        ctx.shadowBlur = 0;
        ctx.fillStyle = b.text;
        ctx.font = '900 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(b.symbol, 0, 1);

        // Specular highlight dot (light reflection)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.beginPath();
        ctx.arc(-b.r * 0.35, -b.r * 0.35, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // Glass reflection crescent overlay
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx - 35, cy - 45, 65, 30, -Math.PI / 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Sync isSpinning with physics engine
  useEffect(() => {
    if (physicsRef.current) {
      physicsRef.current.isSpinning = isSpinning;
    }
  }, [isSpinning]);

  // Load element collection from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('studyflow_element_collection');
      if (saved) {
        const parsed = JSON.parse(saved);
        setCollection(parsed);
        if (Object.keys(parsed).length > 0) {
          setHasSpunBefore(true);
        }
      }
    } catch (e) {
      console.error('Error loading element collection:', e);
    }
  }, []);

  const saveCollection = useCallback((newColl) => {
    setCollection(newColl);
    try {
      localStorage.setItem('studyflow_element_collection', JSON.stringify(newColl));
      if (onElementUnlocked) onElementUnlocked();
      window.dispatchEvent(new Event('studyflow_element_unlocked'));
    } catch (e) {
      console.error('Error saving element collection:', e);
    }
  }, []);

  // Get current user rubies
  const currentRubies = gamification?.rubies ?? (() => {
    try {
      const saved = localStorage.getItem('studyflow_gamification');
      return saved ? (JSON.parse(saved)?.rubies || 0) : 0;
    } catch {
      return 0;
    }
  })();

  // 5-SECOND REAL ROTATING GACHA PHYSICS SPIN LOGIC
  const handleSpin = useCallback((count = 1) => {
    // Chỉ cho duy nhất 1 lần thử đối với người chưa từng có lượt quay trước đó
    const isFreeTrial = (count === 1 && !hasSpunBefore);
    const cost = isFreeTrial ? 0 : count * 200;

    if (!isFreeTrial && currentRubies < cost) {
      alert(`Bạn cần ít nhất ${cost} Ruby để quay ${count} lượt! Hiện tại bạn có ${currentRubies} Ruby. Hãy chăm chỉ học tập và hoàn thành các thử thách để tích lũy thêm Ruby nhé!`);
      return;
    }

    if (isSpinning) return;

    // Deduct Rubies if not free trial
    if (cost > 0 && addReward) {
      addReward(0, -cost);
    }

    // Đánh dấu đã sử dụng lượt thử và cập nhật lịch sử lượt quay
    try {
      localStorage.setItem('studyflow_gacha_trial_used', 'true');
      const curSpins = parseInt(localStorage.getItem('studyflow_gacha_total_spins') || '0', 10);
      localStorage.setItem('studyflow_gacha_total_spins', String(curSpins + count));
    } catch (e) {
      console.error('Error saving spin history:', e);
    }
    setHasSpunBefore(true);

    setIsSpinning(true);
    setPulledResults(null);
    setDroppedBall(null);
    setActiveRevealedIndex(0);
    setSpinTimeRemaining(5.0);

    // Continuous 5-second multi-turn crank rotation (15 full rotations)
    setCrankDegree(prev => prev + 360 * 15);
    if (soundEnabled) playSound('crank');

    // Continuous ball rattling/tumbling sound interval
    if (tumbleIntervalRef.current) clearInterval(tumbleIntervalRef.current);
    tumbleIntervalRef.current = setInterval(() => {
      if (soundEnabled) playSound('tumble');
    }, 110);

    // 5-second countdown timer interval (updates every 100ms)
    const startTime = Date.now();
    const duration = 5000; // Exact 5 seconds as requested!
    
    const countdownInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, (duration - elapsed) / 1000);
      setSpinTimeRemaining(Number(remaining.toFixed(1)));

      if (elapsed >= 4100 && !droppedBall) {
        // At 4.1s, the winning capsule drops into the tray
        if (soundEnabled) playSound('drop');
        setDroppedBall(true);
      }

      if (elapsed >= duration) {
        clearInterval(countdownInterval);
        if (tumbleIntervalRef.current) clearInterval(tumbleIntervalRef.current);

        // Final pull resolution
        const results = [];
        const updatedCollection = { ...collection };

        for (let i = 0; i < count; i++) {
          const pull = pullRandomElement();
          const el = pull.element;
          const isFirstTime = !updatedCollection[el.id];

          if (isFirstTime) {
            updatedCollection[el.id] = {
              count: 1,
              firstUnlockedAt: Date.now(),
              level: 1
            };
          } else {
            updatedCollection[el.id].count = (updatedCollection[el.id].count || 1) + 1;
          }

          results.push({
            ...el,
            isNew: isFirstTime,
            pullRarity: pull.rarity
          });
        }

        saveCollection(updatedCollection);
        setPulledResults(results);
        setIsSpinning(false);

        // Sound fanfare upon revealing
        if (soundEnabled) {
          if (results.some(r => r.rarity === 'legendary')) {
            playSound('legendary');
          } else if (results.some(r => r.rarity === 'rare')) {
            playSound('rare');
          } else {
            playSound('common');
          }
        }
      }
    }, 100);
  }, [currentRubies, isSpinning, addReward, soundEnabled, collection, saveCollection, droppedBall, hasSpunBefore]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (tumbleIntervalRef.current) clearInterval(tumbleIntervalRef.current);
    };
  }, []);

  // Stats calculation
  const totalElementsCount = GACHA_ELEMENTS.length;
  const collectedCount = useMemo(() => Object.keys(collection).length, [collection]);
  const completionPercentage = Math.round((collectedCount / totalElementsCount) * 100);

  // Danh sách nguyên tố hiển thị (Mặc định chỉ hiện những nguyên tố đã xoay ra được)
  const displayedElements = useMemo(() => {
    if (codexTab === 'owned') {
      return GACHA_ELEMENTS.filter(el => !!collection[el.id]);
    }
    return GACHA_ELEMENTS;
  }, [codexTab, collection]);

  return (
    <div className="space-y-6 animate-fade-in text-white">
      {/* Top Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-7 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-wider uppercase mb-2.5 shadow-inner">
              <Sparkles size={13} className="text-yellow-400" /> Tích Hợp Virtual Lab
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2.5">
              MÁY GACHA NGUYÊN TỐ
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-400 text-xl sm:text-2xl font-extrabold">
                PERIODIC LAB
              </span>
            </h2>
            <p className="text-slate-300 mt-1.5 text-xs sm:text-sm max-w-xl leading-relaxed">
              Mô phỏng quả cầu quay vật lý 5 giây chân thực! Tỉ lệ ra nguyên tố <span className="text-yellow-300 font-bold">Cực hiếm là 3%</span>, <span className="text-purple-300 font-bold">Hiếm vừa là 10%</span> (200 💎 / lượt).
            </p>
          </div>

          {/* User Ruby Display & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/80 shadow-lg">
            <div className="text-center sm:text-left px-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Ruby của bạn</span>
              <div className="flex items-center gap-1.5 text-xl font-black text-rose-400 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]">
                <Gem size={20} className="text-rose-400 fill-rose-500 animate-pulse" />
                <span>{currentRubies.toLocaleString()}</span>
                <span className="text-xs text-rose-300 font-bold">💎</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowOddsModal(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-slate-700/80 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-600 transition active:scale-95 cursor-pointer"
                title="Xem tỷ lệ rơi"
              >
                <HelpCircle size={13} className="text-cyan-400" /> Tỷ lệ
              </button>

              <button 
                onClick={() => setShowCodexModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition shadow-[0_0_12px_rgba(99,102,241,0.4)] active:scale-95 cursor-pointer"
              >
                <Layers size={13} /> Sổ tay ({collectedCount}/{totalElementsCount})
              </button>

              <button 
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-1.5 text-slate-400 hover:text-white rounded-xl bg-slate-800 border border-slate-700 active:scale-95 cursor-pointer"
                title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
              >
                {soundEnabled ? <Volume2 size={15} className="text-emerald-400" /> : <VolumeX size={15} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Gacha Machine Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Column: The 3D Gacha Capsule Dome Machine */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 rounded-[2.5rem] p-5 sm:p-7 border-4 border-slate-700/80 shadow-[0_0_40px_rgba(79,70,229,0.2)] flex flex-col items-center">
            
            {/* Top Glowing Sign */}
            <div className="w-full text-center mb-3">
              <div className="inline-block px-5 py-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full font-black text-[11px] uppercase tracking-widest text-white shadow-[0_0_12px_rgba(99,102,241,0.5)]">
                {!hasSpunBefore ? '★ 1 LƯỢT QUAY THỬ MIỄN PHÍ DÀNH CHO BẠN ★' : '★ 200 RUBY / 1 LƯỢT ★'}
              </div>
            </div>

            {/* REAL 2D CANVAS PHYSICS CHAMBER: Circular Glass Dome */}
            <div className="relative w-64 h-64 rounded-full border-4 border-cyan-400/50 bg-gradient-to-b from-slate-950 via-indigo-950/80 to-slate-950 backdrop-blur-md shadow-[inset_0_0_40px_rgba(34,211,238,0.3),0_0_30px_rgba(99,102,241,0.3)] overflow-hidden flex items-center justify-center">
              
              {/* Canvas Physics Simulation of Bouncing Balls */}
              <canvas
                ref={canvasRef}
                width={256}
                height={256}
                className="w-full h-full rounded-full cursor-pointer"
                title="Quả cầu Gacha chứa các nguyên tố chuyển động vật lý chân thực"
              />

              {/* Glowing Aura During Spin */}
              {isSpinning && (
                <div className="absolute inset-0 bg-cyan-400/15 rounded-full pointer-events-none animate-pulse"></div>
              )}
            </div>

            {/* Machine Lower Body: Crank Knob & Chute */}
            <div className="w-full mt-5 flex items-center justify-around bg-slate-900/90 rounded-2xl p-3.5 border border-slate-700/80">
              
              {/* Rotating Mechanical Crank with 5-second smooth rotation */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => handleSpin(1)}
                  disabled={isSpinning}
                  style={{ 
                     transform: `rotate(${crankDegree}deg)`,
                     transition: isSpinning ? 'transform 5s cubic-bezier(0.15, 0.85, 0.25, 1)' : 'transform 0.5s ease-out'
                  }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br from-slate-200 via-slate-400 to-slate-700 border-4 border-slate-300 shadow-xl flex items-center justify-center active:scale-95 hover:brightness-110 cursor-pointer ${
                    isSpinning ? 'cursor-not-allowed' : ''
                  }`}
                  title="Nhấn để vặn cần quay Gacha 5 giây"
                >
                  <div className="w-3.5 h-10 bg-indigo-600 rounded-full shadow-inner transform -rotate-45"></div>
                </button>
                <span className="text-[10px] font-bold text-slate-400 mt-1.5">
                  {isSpinning ? 'Đang Xoay 5s...' : 'Tay Vặn Xoay'}
                </span>
              </div>

              {/* Output Chute Tray: Drops capsule at 4.2s */}
              <div className="flex flex-col items-center">
                <div className={`w-20 h-14 bg-slate-950 rounded-2xl border-2 transition-all flex items-center justify-center relative overflow-hidden ${
                  droppedBall ? 'border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]' : 'border-slate-700 shadow-inner'
                }`}>
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-b from-black/80 to-transparent"></div>
                  
                  {isSpinning && !droppedBall && (
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                      <span className="text-[10px] font-mono text-cyan-300 font-bold">Chờ bóng...</span>
                    </div>
                  )}

                  {droppedBall && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-600 border-2 border-yellow-200 shadow-[0_0_15px_rgba(250,204,21,0.9)] animate-bounce flex items-center justify-center">
                      <Sparkles size={14} className="text-slate-950 animate-spin" />
                    </div>
                  )}

                  {!isSpinning && !droppedBall && (
                    <span className="text-[11px] text-slate-600 font-bold uppercase tracking-wider">Cửa Ra</span>
                  )}
                </div>
                <span className="text-[10px] font-bold text-slate-400 mt-1.5">Khay Nhận Bóng</span>
              </div>
            </div>

            {/* Spin Buttons Controls */}
            <div className="w-full grid grid-cols-2 gap-3.5 mt-5">
              <button
                onClick={() => handleSpin(1)}
                disabled={isSpinning}
                className={`py-3 px-3 rounded-2xl font-black text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition-all transform active:scale-95 shadow-lg border-2 cursor-pointer ${
                  isSpinning
                    ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed'
                    : !hasSpunBefore
                    ? 'bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:brightness-110 border-yellow-300/60 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)] animate-pulse'
                    : currentRubies >= 200
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border-cyan-400/40 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                    : 'bg-slate-800 border-rose-500/50 text-rose-300 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <RefreshCw size={15} className={isSpinning ? "animate-spin" : ""} /> 
                  {!hasSpunBefore ? 'Quay Thử (1 Lần Duy Nhất)' : 'Quay 1 Lần (5s)'}
                </span>
                <span className="text-[11px] opacity-90 font-mono text-cyan-200">
                  {!hasSpunBefore ? '0 💎 Miễn Phí' : '200 💎 Ruby'}
                </span>
              </button>

              <button
                onClick={() => handleSpin(10)}
                disabled={isSpinning}
                className={`py-3 px-3 rounded-2xl font-black text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition-all transform active:scale-95 shadow-lg border-2 cursor-pointer ${
                  isSpinning
                    ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed'
                    : currentRubies >= 2000
                    ? 'bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:brightness-110 border-yellow-300/50 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles size={15} className="text-yellow-300" /> Quay 10 Lần
                </span>
                <span className="text-[11px] opacity-90 font-mono text-yellow-200">2,000 💎</span>
              </button>
            </div>

            {/* Thông tin hỗ trợ: Chỉ cho duy nhất 1 lần thử đối với người chưa từng có lượt quay trước đó */}
            {!hasSpunBefore ? (
              <div className="mt-3.5 p-2.5 bg-indigo-500/15 border border-indigo-400/30 rounded-xl text-center w-full animate-fade-in">
                <p className="text-[11px] text-indigo-300 font-semibold flex items-center justify-center gap-1.5">
                  <Sparkles size={14} className="text-yellow-400" />
                  Bạn có <strong className="text-yellow-300">1 lần thử duy nhất</strong> vì chưa từng có lượt quay trước đó!
                </p>
              </div>
            ) : currentRubies < 200 ? (
              <div className="mt-3.5 p-2.5 bg-slate-900/60 border border-slate-800 rounded-xl text-center w-full animate-fade-in">
                <p className="text-[11px] text-slate-400 font-medium">
                  Bạn đang có <span className="font-bold text-rose-400">{currentRubies} 💎 Ruby</span>. Cần tối thiểu <span className="text-cyan-300 font-bold">200 💎</span> để quay. Hãy học tập và vượt thử thách để tích lũy thêm Ruby nhé!
                </p>
              </div>
            ) : null}
          </div>
        </div>

        {/* Right Column: Display of Pulled Result or 5-Second Spinning Countdown */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          
          {/* While Spinning: 5-Second Real-Time Countdown & Progress */}
          {isSpinning && (
            <div className="w-full bg-slate-900/90 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[25rem] shadow-[0_0_30px_rgba(6,182,212,0.2)] backdrop-blur-xl animate-fade-in relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/15 rounded-full blur-2xl"></div>

              {/* Animated Atom / Energy Sphere */}
              <div className="relative mb-4">
                <Atom size={64} className="text-cyan-400 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Timer size={24} className="text-yellow-300 animate-pulse" />
                </div>
              </div>

              {/* 5-Second Countdown Display */}
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-amber-300 to-pink-400 font-mono tracking-wider">
                {spinTimeRemaining.toFixed(1)}s
              </div>

              <h3 className="text-lg font-black text-white tracking-wide mt-2">
                {spinTimeRemaining > 1.2 ? 'ĐANG KHUẤY TRỘN VIÊN NANG...' : 'VIÊN NANG ĐANG RƠI VÀO KHAY!'}
              </h3>
              
              <p className="text-slate-400 text-xs mt-1 max-w-xs leading-relaxed">
                {spinTimeRemaining > 2.5 
                  ? 'Các quả bóng nguyên tố đang xoay và va chạm vật lý bên trong buồng kính...'
                  : 'Sắp hoàn tất! Đang định vị nguyên tố trúng thưởng...'}
              </p>

              {/* Progress bar across 5 seconds */}
              <div className="w-56 h-3 bg-slate-950 rounded-full mt-6 overflow-hidden border border-slate-800 p-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 rounded-full transition-all duration-100 shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                  style={{ width: `${Math.min(100, ((5.0 - spinTimeRemaining) / 5.0) * 100)}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Result Card Revealed (After 5 Seconds) */}
          {!isSpinning && pulledResults && (
            <div className="w-full space-y-3.5 animate-pop-in">
              {/* If multi-pull (10x), show pagination / list selector */}
              {pulledResults.length > 1 && (
                <div className="flex items-center justify-between bg-slate-900/80 p-2 rounded-2xl border border-slate-700">
                  <span className="text-xs font-bold text-slate-300 pl-2">10 kết quả:</span>
                  <div className="flex gap-1 overflow-x-auto max-w-[17rem] pb-0.5">
                    {pulledResults.map((r, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveRevealedIndex(idx)}
                        className={`w-7 h-7 rounded-lg text-xs font-black transition cursor-pointer active:scale-95 ${
                          activeRevealedIndex === idx 
                            ? 'bg-cyan-500 text-slate-950 scale-105 shadow-[0_0_8px_rgba(6,182,212,0.8)]' 
                            : r.rarity === 'legendary' ? 'bg-yellow-500/30 text-yellow-300 border border-yellow-500'
                            : r.rarity === 'rare' ? 'bg-purple-500/30 text-purple-300 border border-purple-500'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {r.symbol}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Active Element Display Card */}
              {(() => {
                const item = pulledResults[activeRevealedIndex];
                if (!item) return null;
                const isLegendary = item.rarity === 'legendary';
                const isRare = item.rarity === 'rare';

                return (
                  <div className={`w-full bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950 p-5 sm:p-7 rounded-[2rem] border-2 ${item.theme.border} ${item.theme.glow} shadow-2xl relative overflow-hidden animate-pop-in`}>
                    
                    {/* Decorative Rarity Glow */}
                    <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none ${
                      isLegendary ? 'bg-yellow-500/20' : isRare ? 'bg-purple-500/20' : 'bg-cyan-500/10'
                    }`}></div>

                    {/* Rarity Header Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(item.stars)].map((_, s) => (
                          <Star key={s} size={16} className={`fill-current ${item.theme.textColor}`} />
                        ))}
                        <span className={`text-[11px] font-black uppercase tracking-wider ml-1 px-2.5 py-0.5 rounded-full border ${item.theme.badgeBg}`}>
                          {item.rarityLabel}
                        </span>
                      </div>

                      {item.isNew && (
                        <span className="px-2.5 py-0.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[10px] font-extrabold rounded-full shadow-lg animate-bounce">
                          ✨ MỚI MỞ KHÓA!
                        </span>
                      )}
                    </div>

                    {/* Atomic Symbol & Information */}
                    <div className="flex items-center gap-5 my-3">
                      {/* Element Square Box */}
                      <div className={`w-24 h-24 rounded-2xl bg-slate-950 border-2 ${item.theme.border} p-2.5 flex flex-col justify-between shadow-2xl relative`}>
                        <div className="flex justify-between items-start text-[11px] font-mono text-slate-400">
                          <span className="font-bold text-white text-xs">{item.atomicNumber}</span>
                          <span>{item.atomicMass}</span>
                        </div>
                        <div className={`text-3xl font-black text-center tracking-tight ${item.theme.textColor} drop-shadow-md`}>
                          {item.symbol}
                        </div>
                        <div className="text-[10px] text-center font-bold text-slate-300 truncate">
                          {item.name}
                        </div>
                      </div>

                      {/* Element Overview Details */}
                      <div className="space-y-1">
                        <h3 className="text-xl font-black text-white flex items-center gap-2">
                          {item.name} <span className="text-slate-400 text-sm font-normal">({item.enName})</span>
                        </h3>
                        <div className="text-xs font-semibold text-slate-300">
                          {item.category} • <span className="text-cyan-300">{item.groupPeriod}</span>
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800 inline-block">
                          e⁻: {item.electronConfig}
                        </div>
                      </div>
                    </div>

                    {/* Scientific Description */}
                    <div className="mt-3 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </div>

                    {/* Fun Science Fact */}
                    <div className="mt-2.5 bg-indigo-950/40 p-3 rounded-2xl border border-indigo-500/30 text-xs text-indigo-200 leading-relaxed">
                      <span className="font-bold text-yellow-300 flex items-center gap-1 mb-0.5">
                        <Sparkles size={13} /> Sự Thật Thú Vị:
                      </span>
                      {item.funFact}
                    </div>

                    {/* Action button inside card */}
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => handleSpin(1)}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-600 transition flex items-center gap-1.5 shadow active:scale-95 cursor-pointer"
                      >
                        <RefreshCw size={13} /> Quay Tiếp (5s - 200 💎)
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Idle Placeholder when no pull made yet */}
          {!isSpinning && !pulledResults && (
            <div className="w-full bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[25rem] shadow-xl backdrop-blur-md">
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 border-2 border-indigo-400/30 flex items-center justify-center text-indigo-400 mb-3 shadow-inner">
                <Atom size={32} className="animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">Sẵn Sàng Khởi Động Gacha</h3>
              <p className="text-slate-400 text-xs max-w-sm leading-relaxed mb-5">
                Nhấn cần vặn hoặc chọn nút <span className="text-cyan-300 font-bold">"Quay 1 Lần"</span> (200 💎) để xoay các viên nang chuyển động vật lý trong 5 giây và mở khóa nguyên tố vào sổ tay.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowOddsModal(true)}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 rounded-xl border border-slate-700 transition active:scale-95 cursor-pointer"
                >
                  Xem Tỷ Lệ Rơi
                </button>
                <button
                  onClick={() => setShowCodexModal(true)}
                  className="px-3.5 py-2 bg-indigo-600/80 hover:bg-indigo-600 text-xs font-bold text-white rounded-xl transition active:scale-95 cursor-pointer"
                >
                  Mở Sổ Tay Nguyên Tố
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= MODAL: DROP ODDS TRANSPARENCY ================= */}
      {showOddsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 max-w-lg w-full rounded-3xl p-6 shadow-2xl relative text-white">
            <button 
              onClick={() => setShowOddsModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-black text-white flex items-center gap-2 mb-1.5">
              <HelpCircle className="text-cyan-400" size={20} /> TỶ LỆ RƠI NGUYÊN TỐ
            </h3>
            <p className="text-slate-400 text-xs mb-4">
              Hệ thống Gacha mô phỏng công bằng tuyệt đối với thuật toán ngẫu nhiên tiêu chuẩn:
            </p>

            <div className="space-y-3">
              {/* Legendary Tier 3% */}
              <div className="p-3.5 rounded-2xl bg-yellow-500/10 border-2 border-yellow-500/40">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-black text-yellow-400 flex items-center gap-1.5 text-sm">
                    <Star size={15} className="fill-yellow-400" /> CỰC HIẾM (5★ Legendary)
                  </span>
                  <span className="font-black text-yellow-300 text-base bg-yellow-500/20 px-2.5 py-0.5 rounded-full border border-yellow-500/40">
                    3%
                  </span>
                </div>
                <p className="text-xs text-yellow-200/80 leading-relaxed">
                  Vàng (Au), Bạch kim (Pt), Urani (U), Plutoni (Pu), Franci (Fr), Oganesson (Og), Californi (Cf), Bismut (Bi).
                </p>
              </div>

              {/* Rare Tier 10% */}
              <div className="p-3.5 rounded-2xl bg-purple-500/10 border-2 border-purple-500/40">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-black text-purple-300 flex items-center gap-1.5 text-sm">
                    <Star size={15} className="fill-purple-400" /> HIẾM VỪA (4★ Epic)
                  </span>
                  <span className="font-black text-purple-200 text-base bg-purple-500/20 px-2.5 py-0.5 rounded-full border border-purple-500/40">
                    10%
                  </span>
                </div>
                <p className="text-xs text-purple-200/80 leading-relaxed">
                  Bạc (Ag), Titan (Ti), Wolfram (W), Neon (Ne), Heli (He), Thủy ngân (Hg), Liti (Li), Crom (Cr).
                </p>
              </div>

              {/* Common Tier 87% */}
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border-2 border-cyan-500/40">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-black text-cyan-300 flex items-center gap-1.5 text-sm">
                    <Star size={15} className="fill-cyan-400" /> PHỔ BIẾN (3★ Standard)
                  </span>
                  <span className="font-black text-cyan-200 text-base bg-cyan-500/20 px-2.5 py-0.5 rounded-full border border-cyan-500/40">
                    87%
                  </span>
                </div>
                <p className="text-xs text-cyan-200/80 leading-relaxed">
                  Hiđro (H), Oxi (O), Cacbon (C), Nitơ (N), Sắt (Fe), Đồng (Cu), Nhôm (Al), Canxi (Ca), Natri (Na), Clo (Cl), Magie (Mg), Silic (Si), Lưu huỳnh (S)...
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowOddsModal(false)}
                className="px-5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition cursor-pointer active:scale-95"
              >
                Đã Hiểu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: CODEX / BỘ SƯU TẬP BẢNG TUẦN HOÀN ================= */}
      {showCodexModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 max-w-4xl w-full max-h-[88vh] rounded-[2rem] p-5 sm:p-7 shadow-2xl flex flex-col relative text-white">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3.5 border-b border-slate-800">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <Layers className="text-indigo-400" size={22} /> SỔ TAY NGUYÊN TỐ BẢNG TUẦN HOÀN
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Đã thu thập: <span className="text-cyan-400 font-bold">{collectedCount}</span> / {totalElementsCount} nguyên tố ({completionPercentage}%)
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                {/* Bộ lọc chế độ xem: Mặc định Chỉ hiện nguyên tố đã xoay ra */}
                <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold shadow-inner">
                  <button
                    onClick={() => { setCodexTab('owned'); setSelectedCodexElement(null); }}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                      codexTab === 'owned'
                        ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sparkles size={12} className={codexTab === 'owned' ? 'text-yellow-300' : ''} />
                    <span>Đã xoay ra ({collectedCount})</span>
                  </button>
                  <button
                    onClick={() => { setCodexTab('all'); setSelectedCodexElement(null); }}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                      codexTab === 'all'
                        ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Layers size={12} />
                    <span>Tất cả ({totalElementsCount})</span>
                  </button>
                </div>

                <button 
                  onClick={() => { setShowCodexModal(false); setSelectedCodexElement(null); }}
                  className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 cursor-pointer transition shrink-0"
                  title="Đóng sổ tay"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-950 h-2 rounded-full mt-3 overflow-hidden border border-slate-800">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>

            {/* Elements Grid */}
            <div className="flex-1 overflow-y-auto hide-scrollbar py-4 min-h-[300px]">
              {displayedElements.length === 0 ? (
                <div className="py-16 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3 shadow-inner">
                    <Atom size={32} className="animate-spin-slow" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Chưa có nguyên tố nào được xoay ra!</h4>
                  <p className="text-slate-400 text-xs max-w-sm leading-relaxed mb-4">
                    Toàn bộ nguyên tố chưa quay ra đều đã được ẩn. Hãy gạt cần hoặc nhấn nút quay Gacha để bắt đầu thu thập các nguyên tố hóa học nhé!
                  </p>
                  <button
                    onClick={() => { setShowCodexModal(false); }}
                    className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs rounded-xl shadow-lg transition active:scale-95 cursor-pointer"
                  >
                    Quay Gacha Ngay
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
                  {displayedElements.map(el => {
                    const isOwned = !!collection[el.id];
                    const count = collection[el.id]?.count || 0;

                    return (
                      <button
                        key={el.id}
                        onClick={() => {
                          if (isOwned) {
                            setSelectedCodexElement(el);
                          }
                        }}
                        disabled={!isOwned}
                        className={`p-2.5 rounded-2xl border-2 flex flex-col items-center justify-between transition-all transform ${
                          isOwned
                            ? `${el.theme.border} bg-slate-800/90 shadow-md hover:scale-105 active:scale-95 cursor-pointer hover:shadow-cyan-500/20`
                            : 'border-slate-800/80 bg-slate-950/40 opacity-40 cursor-not-allowed'
                        }`}
                      >
                        <div className="w-full flex justify-between items-center text-[10px] text-slate-400 font-mono">
                          <span>{el.atomicNumber}</span>
                          {count > 1 && (
                            <span className="text-cyan-400 font-bold bg-cyan-950/80 border border-cyan-800 px-1.5 py-0.2 rounded-md">
                              x{count}
                            </span>
                          )}
                        </div>

                        <div className={`text-2xl font-black my-0.5 ${isOwned ? el.theme.textColor : 'text-slate-600'}`}>
                          {isOwned ? (
                            el.symbol
                          ) : (
                            <span className="flex items-center justify-center my-0.5">
                              <Lock size={18} className="text-slate-600" />
                            </span>
                          )}
                        </div>

                        <div className="text-[10px] font-bold text-slate-300 truncate w-full text-center">
                          {isOwned ? el.name : '???'}
                        </div>

                        <div className="mt-0.5 flex items-center gap-0.5">
                          {[...Array(el.stars)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={8} 
                              className={isOwned ? `fill-current ${el.theme.textColor}` : 'fill-slate-700 text-slate-700'} 
                            />
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Detailed Inspector Modal for Selected Element */}
            {selectedCodexElement && (
              <div className="mt-3 p-3.5 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in relative shadow-xl">
                <button 
                  onClick={() => setSelectedCodexElement(null)}
                  className="absolute top-2 right-2 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer sm:hidden"
                >
                  <X size={15} />
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className={`w-14 h-14 rounded-2xl border-2 ${selectedCodexElement.theme.border} bg-slate-900 flex flex-col items-center justify-center flex-shrink-0 shadow-lg ${selectedCodexElement.theme.glow}`}>
                    <span className="text-[10px] text-slate-400 font-mono">{selectedCodexElement.atomicNumber}</span>
                    <span className={`text-xl font-black ${selectedCodexElement.theme.textColor}`}>{selectedCodexElement.symbol}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-white">
                        {selectedCodexElement.name} ({selectedCodexElement.enName})
                      </h4>
                      {collection[selectedCodexElement.id]?.count > 1 && (
                        <span className="text-[10px] font-black bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-2 py-0.5 rounded-full">
                          Đã quay x{collection[selectedCodexElement.id].count} lần
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 max-w-lg mt-0.5 leading-relaxed">
                      {selectedCodexElement.description}
                    </p>
                    {selectedCodexElement.funFact && (
                      <p className="text-[11px] text-amber-300/90 mt-1 italic">
                        💡 {selectedCodexElement.funFact}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-right flex-shrink-0 flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${selectedCodexElement.theme.badgeBg}`}>
                    {selectedCodexElement.rarityLabel}
                  </span>
                  <button
                    onClick={() => setSelectedCodexElement(null)}
                    className="hidden sm:inline-flex text-[11px] text-slate-400 hover:text-slate-200 mt-1 cursor-pointer font-medium"
                  >
                    Đóng chi tiết ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
