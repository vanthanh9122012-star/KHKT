import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Sparkles, Gem, HelpCircle, Trophy, RefreshCw, X, Award, ChevronRight, 
  Layers, Info, ShieldCheck, Flame, Atom, Star, CheckCircle2, Volume2, VolumeX, Eye, Zap
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
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === 'drop') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(350, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
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
        g.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
        o.start(startTime);
        o.stop(startTime + 0.35);
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
    // Audio non-blocking fail-safe
  }
}

export default function ElementGacha({ addReward, gamification }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [pulledResults, setPulledResults] = useState(null);
  const [activeRevealedIndex, setActiveRevealedIndex] = useState(0);
  const [showOddsModal, setShowOddsModal] = useState(false);
  const [showCodexModal, setShowCodexModal] = useState(false);
  const [selectedCodexElement, setSelectedCodexElement] = useState(null);
  const [collection, setCollection] = useState({});
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [crankDegree, setCrankDegree] = useState(0);

  // Load element collection from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('studyflow_element_collection');
      if (saved) {
        setCollection(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading element collection:', e);
    }
  }, []);

  const saveCollection = useCallback((newColl) => {
    setCollection(newColl);
    try {
      localStorage.setItem('studyflow_element_collection', JSON.stringify(newColl));
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

  // Instant test grant
  const handleGrantTestRubies = useCallback(() => {
    if (addReward) {
      addReward(0, 500);
      if (soundEnabled) playSound('common');
    }
  }, [addReward, soundEnabled]);

  // Snappy, high-performance Spin logic (500ms duration for instant responsiveness)
  const handleSpin = useCallback((count = 1) => {
    const cost = count * 200;
    if (currentRubies < cost) {
      alert(`Bạn cần ít nhất ${cost} Ruby để quay ${count} lượt! Hiện tại bạn có ${currentRubies} Ruby. Hãy chăm chỉ học tập hoặc nhận quà tài trợ bên dưới nhé!`);
      return;
    }

    if (isSpinning) return;

    // Deduct Rubies immediately
    if (addReward) {
      addReward(0, -cost);
    }

    setIsSpinning(true);
    setPulledResults(null);
    setActiveRevealedIndex(0);

    // Fast crank rotation
    setCrankDegree(prev => prev + 360 * 2);
    if (soundEnabled) playSound('crank');

    setTimeout(() => {
      if (soundEnabled) playSound('drop');
    }, 200);

    // Perform Pulls fast (500ms total wait time)
    setTimeout(() => {
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

      if (soundEnabled) {
        if (results.some(r => r.rarity === 'legendary')) {
          playSound('legendary');
        } else if (results.some(r => r.rarity === 'rare')) {
          playSound('rare');
        } else {
          playSound('common');
        }
      }
    }, 500);
  }, [currentRubies, isSpinning, addReward, soundEnabled, collection, saveCollection]);

  // Stats calculation
  const totalElementsCount = GACHA_ELEMENTS.length;
  const collectedCount = useMemo(() => Object.keys(collection).length, [collection]);
  const completionPercentage = Math.round((collectedCount / totalElementsCount) * 100);

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
              Quay các viên nang nguyên tố Bảng tuần hoàn! Tỉ lệ ra nguyên tố <span className="text-yellow-300 font-bold">Cực hiếm là 3%</span>, <span className="text-purple-300 font-bold">Hiếm vừa là 10%</span> (200 💎 / lượt).
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
                ★ 200 RUBY / 1 LƯỢT ★
              </div>
            </div>

            {/* Glass Capsule Chamber */}
            <div className="relative w-60 sm:w-64 h-60 sm:h-64 rounded-full border-4 border-cyan-400/40 bg-gradient-to-b from-cyan-900/30 via-slate-900/60 to-indigo-900/40 backdrop-blur-md shadow-[inset_0_0_35px_rgba(34,211,238,0.2)] overflow-hidden flex items-center justify-center">
              
              {/* Glass reflection highlight */}
              <div className="absolute -top-8 left-8 w-40 h-20 bg-white/10 rounded-full blur-md transform -rotate-45 pointer-events-none"></div>
              
              {/* Floating Element Balls Inside Chamber */}
              <div className={`relative w-full h-full flex items-center justify-center ${isSpinning ? 'animate-spin' : ''}`}>
                {/* Legendary Golden Ball (Au) */}
                <div className="absolute top-10 left-12 w-11 h-11 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-600 border-2 border-yellow-200 shadow-[0_0_12px_rgba(250,204,21,0.8)] flex items-center justify-center font-black text-xs text-slate-950">
                  Au
                </div>
                {/* Legendary Green Ball (U) */}
                <div className="absolute top-9 right-12 w-10 h-10 rounded-full bg-gradient-to-br from-lime-300 via-emerald-400 to-green-700 border-2 border-emerald-200 shadow-[0_0_12px_rgba(52,211,153,0.8)] flex items-center justify-center font-black text-xs text-slate-950">
                  U
                </div>
                {/* Rare Silver Ball (Ag) */}
                <div className="absolute bottom-12 left-10 w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.7)] flex items-center justify-center font-black text-xs text-slate-900">
                  Ag
                </div>
                {/* Rare Purple Ball (Ti) */}
                <div className="absolute bottom-11 right-11 w-11 h-11 rounded-full bg-gradient-to-br from-purple-400 via-indigo-500 to-violet-800 border-2 border-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.8)] flex items-center justify-center font-black text-xs text-white">
                  Ti
                </div>
                {/* Common Blue Ball (O) */}
                <div className="absolute center w-11 h-11 rounded-full bg-gradient-to-br from-sky-300 via-blue-500 to-cyan-600 border-2 border-cyan-200 shadow-[0_0_10px_rgba(56,189,248,0.7)] flex items-center justify-center font-black text-xs text-white">
                  O
                </div>
                {/* Common Red Ball (Fe) */}
                <div className="absolute top-24 left-24 w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-amber-700 border-2 border-orange-200 shadow-[0_0_8px_rgba(249,115,22,0.6)] flex items-center justify-center font-black text-[11px] text-white">
                  Fe
                </div>
                {/* Common Green Ball (Cl) */}
                <div className="absolute bottom-20 right-20 w-9 h-9 rounded-full bg-gradient-to-br from-lime-300 via-green-500 to-emerald-700 border-2 border-lime-200 shadow-[0_0_8px_rgba(132,204,22,0.6)] flex items-center justify-center font-black text-[11px] text-slate-950">
                  Cl
                </div>
              </div>

              {/* Shaking vibration on spin */}
              {isSpinning && (
                <div className="absolute inset-0 bg-cyan-400/20 backdrop-blur-sm animate-ping rounded-full pointer-events-none"></div>
              )}
            </div>

            {/* Machine Lower Body: Crank Knob & Chute */}
            <div className="w-full mt-5 flex items-center justify-around bg-slate-900/90 rounded-2xl p-3.5 border border-slate-700/80">
              
              {/* Rotating Mechanical Crank */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => handleSpin(1)}
                  disabled={isSpinning}
                  style={{ transform: `rotate(${crankDegree}deg)` }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-200 via-slate-400 to-slate-700 border-4 border-slate-300 shadow-xl flex items-center justify-center transition-transform duration-500 active:scale-95 hover:brightness-110 cursor-pointer"
                  title="Nhấn để vặn cần quay Gacha"
                >
                  <div className="w-3.5 h-10 bg-indigo-600 rounded-full shadow-inner transform -rotate-45"></div>
                </button>
                <span className="text-[10px] font-bold text-slate-400 mt-1.5">Tay Vặn Xoay</span>
              </div>

              {/* Output Chute Tray */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-14 bg-slate-950 rounded-2xl border-2 border-slate-700 shadow-inner flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-b from-black/80 to-transparent"></div>
                  {isSpinning ? (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-300 to-pink-500 animate-bounce shadow-[0_0_12px_rgba(244,63,94,0.8)]"></div>
                  ) : (
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
                    : currentRubies >= 200
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border-cyan-400/40 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                    : 'bg-slate-800 border-rose-500/50 text-rose-300 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <RefreshCw size={15} className={isSpinning ? "animate-spin" : ""} /> Quay 1 Lần
                </span>
                <span className="text-[11px] opacity-90 font-mono text-cyan-200">200 💎 Ruby</span>
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

            {/* Test Support / Out of Ruby helper */}
            {currentRubies < 200 && (
              <div className="mt-3.5 p-2.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-center w-full animate-fade-in">
                <p className="text-[11px] text-rose-300 font-medium mb-1.5">
                  Bạn đang có {currentRubies} Ruby. Nhận thêm Ruby để trải nghiệm ngay:
                </p>
                <button
                  onClick={handleGrantTestRubies}
                  className="px-3 py-1 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-white font-bold text-xs rounded-lg shadow transition active:scale-95 cursor-pointer"
                >
                  🎁 Nhận +500 💎 Thử Nghiệm Ngay
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Display of Pulled Result or Information */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          
          {/* While Spinning animation */}
          {isSpinning && (
            <div className="w-full bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[24rem] shadow-2xl backdrop-blur-xl animate-fade-in">
              <Atom size={56} className="text-cyan-400 animate-spin mb-3" />
              <h3 className="text-xl font-black text-cyan-300 tracking-wider animate-pulse">ĐANG PHÂN TÁCH NGUYÊN TỬ...</h3>
              <p className="text-slate-400 text-xs mt-1.5">Mở khóa viên nang năng lượng...</p>
              <div className="w-40 h-2 bg-slate-800 rounded-full mt-5 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}

          {/* Result Card Revealed */}
          {!isSpinning && pulledResults && (
            <div className="w-full space-y-3.5 animate-fade-in">
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
                        <RefreshCw size={13} /> Quay Tiếp (200 💎)
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Idle Placeholder when no pull made yet */}
          {!isSpinning && !pulledResults && (
            <div className="w-full bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[24rem] shadow-xl backdrop-blur-md">
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 border-2 border-indigo-400/30 flex items-center justify-center text-indigo-400 mb-3 shadow-inner">
                <Atom size={32} className="animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">Sẵn Sàng Khởi Động Gacha</h3>
              <p className="text-slate-400 text-xs max-w-sm leading-relaxed mb-5">
                Nhấn cần vặn hoặc chọn nút <span className="text-cyan-300 font-bold">"Quay 1 Lần"</span> (200 💎) để mở khóa các nguyên tố hóa học vào bộ sưu tập của bạn.
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
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <Layers className="text-indigo-400" size={22} /> SỔ TAY NGUYÊN TỐ BẢNG TUẦN HOÀN
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Đã thu thập: <span className="text-cyan-400 font-bold">{collectedCount}</span> / {totalElementsCount} nguyên tố ({completionPercentage}%)
                </p>
              </div>
              <button 
                onClick={() => { setShowCodexModal(false); setSelectedCodexElement(null); }}
                className="text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-800 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-950 h-2.5 rounded-full mt-3 overflow-hidden border border-slate-800">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>

            {/* Elements Grid */}
            <div className="flex-1 overflow-y-auto hide-scrollbar py-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
              {GACHA_ELEMENTS.map(el => {
                const isOwned = !!collection[el.id];
                const count = collection[el.id]?.count || 0;

                return (
                  <button
                    key={el.id}
                    onClick={() => setSelectedCodexElement(el)}
                    className={`p-2.5 rounded-2xl border-2 flex flex-col items-center justify-between transition-all transform active:scale-95 cursor-pointer ${
                      isOwned
                        ? `${el.theme.border} bg-slate-800/90 shadow-md hover:scale-105`
                        : 'border-slate-800 bg-slate-950/60 opacity-40 grayscale hover:grayscale-0 hover:opacity-80'
                    }`}
                  >
                    <div className="w-full flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>{el.atomicNumber}</span>
                      {count > 1 && <span className="text-cyan-400 font-bold">x{count}</span>}
                    </div>

                    <div className={`text-2xl font-black my-0.5 ${isOwned ? el.theme.textColor : 'text-slate-500'}`}>
                      {el.symbol}
                    </div>

                    <div className="text-[10px] font-bold text-slate-300 truncate w-full text-center">
                      {isOwned ? el.name : '???'}
                    </div>

                    <div className="mt-0.5 flex items-center gap-0.5">
                      {[...Array(el.stars)].map((_, i) => (
                        <Star key={i} size={8} className={isOwned ? `fill-current ${el.theme.textColor}` : 'fill-slate-600 text-slate-600'} />
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Inspector Modal for Selected Element */}
            {selectedCodexElement && (
              <div className="mt-3 p-3.5 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl border-2 ${selectedCodexElement.theme.border} bg-slate-900 flex flex-col items-center justify-center flex-shrink-0`}>
                    <span className="text-[10px] text-slate-400 font-mono">{selectedCodexElement.atomicNumber}</span>
                    <span className={`text-lg font-black ${selectedCodexElement.theme.textColor}`}>{selectedCodexElement.symbol}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      {selectedCodexElement.name} ({selectedCodexElement.enName})
                    </h4>
                    <p className="text-xs text-slate-400 max-w-lg mt-0.5 leading-relaxed">
                      {selectedCodexElement.description}
                    </p>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${selectedCodexElement.theme.badgeBg}`}>
                    {selectedCodexElement.rarityLabel}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
