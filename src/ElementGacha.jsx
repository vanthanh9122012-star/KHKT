import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Gem, HelpCircle, Trophy, RefreshCw, X, Award, ChevronRight, 
  Layers, Info, ShieldCheck, Flame, Atom, Star, CheckCircle2, Volume2, VolumeX, Eye
} from 'lucide-react';
import { GACHA_ELEMENTS, pullRandomElement } from './data/elementsGachaData';

// Sound Synthesizer via Web Audio API (no external sound files needed)
function playSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'crank') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } else if (type === 'drop') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'legendary') {
      // Fanfare arpeggio for 5-star
      const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
      notes.forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = freq;
        o.connect(g);
        g.connect(ctx.destination);
        const startTime = ctx.currentTime + i * 0.1;
        g.gain.setValueAtTime(0.2, startTime);
        g.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);
        o.start(startTime);
        o.stop(startTime + 0.45);
      });
    } else if (type === 'rare') {
      // Shimmer chord for 4-star
      [523.25, 659.25, 783.99].forEach(freq => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'triangle';
        o.frequency.value = freq;
        o.connect(g);
        g.connect(ctx.destination);
        g.gain.setValueAtTime(0.25, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
        o.start();
        o.stop(ctx.currentTime + 0.6);
      });
    } else if (type === 'common') {
      // Pleasant double chime for 3-star
      [587.33, 880].forEach((freq, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = freq;
        o.connect(g);
        g.connect(ctx.destination);
        const startTime = ctx.currentTime + idx * 0.12;
        g.gain.setValueAtTime(0.2, startTime);
        g.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
        o.start(startTime);
        o.stop(startTime + 0.35);
      });
    }
  } catch (err) {
    // Ignore audio context errors if sound blocked by browser policy
  }
}

export default function ElementGacha({ addReward, gamification }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [pulledResults, setPulledResults] = useState(null); // Array of pulled elements
  const [activeRevealedIndex, setActiveRevealedIndex] = useState(0);
  const [showOddsModal, setShowOddsModal] = useState(false);
  const [showCodexModal, setShowCodexModal] = useState(false);
  const [selectedCodexElement, setSelectedCodexElement] = useState(null);
  const [collection, setCollection] = useState({});
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [crankDegree, setCrankDegree] = useState(0);
  const [ballOffset, setBallOffset] = useState({ x: 0, y: 0 });

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

  const saveCollection = (newColl) => {
    setCollection(newColl);
    try {
      localStorage.setItem('studyflow_element_collection', JSON.stringify(newColl));
    } catch (e) {
      console.error('Error saving element collection:', e);
    }
  };

  // Get current user rubies
  const currentRubies = gamification?.rubies ?? (() => {
    try {
      const saved = localStorage.getItem('studyflow_gamification');
      return saved ? (JSON.parse(saved)?.rubies || 0) : 0;
    } catch {
      return 0;
    }
  })();

  // Handle Free Starter Grant if user has less than 200 Ruby to test
  const handleGrantTestRubies = () => {
    if (addReward) {
      addReward(0, 500);
      if (soundEnabled) playSound('common');
    }
  };

  // Trigger spin logic
  const handleSpin = (count = 1) => {
    const cost = count * 200;
    if (currentRubies < cost) {
      alert(`Bạn cần ít nhất ${cost} Ruby để quay ${count} lượt! Hiện tại bạn có ${currentRubies} Ruby. Hãy chăm chỉ học tập hoặc nhận quà tài trợ nghiên cứu bên dưới nhé!`);
      return;
    }

    if (isSpinning) return;

    // Deduct Rubies
    if (addReward) {
      addReward(0, -cost);
    }

    setIsSpinning(true);
    setPulledResults(null);
    setActiveRevealedIndex(0);

    // Rotate crank knob
    setCrankDegree(prev => prev + 360 * 2);
    if (soundEnabled) playSound('crank');

    setTimeout(() => {
      if (soundEnabled) playSound('drop');
    }, 700);

    // Perform Pulls
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
          updatedCollection[el.id].count += 1;
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

      // Play sound for highest rarity result
      if (soundEnabled) {
        if (results.some(r => r.rarity === 'legendary')) {
          playSound('legendary');
        } else if (results.some(r => r.rarity === 'rare')) {
          playSound('rare');
        } else {
          playSound('common');
        }
      }
    }, 1800);
  };

  // Stats calculation
  const totalElementsCount = GACHA_ELEMENTS.length;
  const collectedCount = Object.keys(collection).length;
  const completionPercentage = Math.round((collectedCount / totalElementsCount) * 100);

  return (
    <div className="space-y-8 animate-fade-in text-white">
      {/* Top Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-wider uppercase mb-3 shadow-inner">
              <Sparkles size={14} className="text-yellow-400 animate-spin" /> Máy Quay Hóa Học Không Gian
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-3">
              GACHA NGUYÊN TỐ
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-400 text-2xl sm:text-3xl font-extrabold">
                PERIODIC LAB
              </span>
            </h2>
            <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-xl leading-relaxed">
              Quay các viên nang năng lượng để sưu tầm đầy đủ các nguyên tố hóa học trong Bảng tuần hoàn! Khám phá bí ẩn của Vàng, Urani, Titan và các nguyên tố diệu kỳ của vũ trụ.
            </p>
          </div>

          {/* User Ruby Display & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 shadow-lg">
            <div className="text-center sm:text-left px-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Ruby khả dụng</span>
              <div className="flex items-center gap-2 text-2xl font-black text-rose-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.5)]">
                <Gem size={24} className="text-rose-400 fill-rose-500 animate-pulse" />
                <span>{currentRubies.toLocaleString()}</span>
                <span className="text-xs text-rose-300 font-bold ml-1">💎</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowOddsModal(true)}
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-700/80 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-600 transition shadow-sm"
                title="Xem tỷ lệ rơi"
              >
                <HelpCircle size={14} className="text-cyan-400" /> Tỷ lệ
              </button>

              <button 
                onClick={() => setShowCodexModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition shadow-[0_0_15px_rgba(99,102,241,0.4)]"
              >
                <Layers size={14} /> Bộ sưu tập ({collectedCount}/{totalElementsCount})
              </button>

              <button 
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800 border border-slate-700"
                title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
              >
                {soundEnabled ? <Volume2 size={16} className="text-emerald-400" /> : <VolumeX size={16} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Gacha Machine Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: The 3D Gacha Capsule Dome Machine */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 rounded-[3rem] p-6 sm:p-8 border-4 border-slate-700/80 shadow-[0_0_50px_rgba(79,70,229,0.25)] flex flex-col items-center">
            
            {/* Top Glowing Sign */}
            <div className="w-full text-center mb-4">
              <div className="inline-block px-6 py-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full font-black text-xs uppercase tracking-widest text-white shadow-[0_0_15px_rgba(99,102,241,0.6)]">
                ★ 200 RUBY / 1 LƯỢT ★
              </div>
            </div>

            {/* Glass Capsule Chamber */}
            <div className="relative w-64 sm:w-72 h-64 sm:h-72 rounded-full border-4 border-cyan-400/40 bg-gradient-to-b from-cyan-900/30 via-slate-900/60 to-indigo-900/40 backdrop-blur-md shadow-[inset_0_0_40px_rgba(34,211,238,0.25)] overflow-hidden flex items-center justify-center">
              
              {/* Glass reflection highlight */}
              <div className="absolute -top-10 left-10 w-44 h-24 bg-white/10 rounded-full blur-md transform -rotate-45 pointer-events-none"></div>
              
              {/* Floating Element Balls Inside Chamber */}
              <div className={`relative w-full h-full flex items-center justify-center ${isSpinning ? 'animate-spin' : ''}`}>
                {/* Legendary Golden Ball (Au) */}
                <div className={`absolute top-12 left-14 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-600 border-2 border-yellow-200 shadow-[0_0_15px_rgba(250,204,21,0.8)] flex items-center justify-center font-black text-xs text-slate-950 ${isSpinning ? 'animate-bounce' : 'animate-pulse'}`}>
                  Au
                </div>
                {/* Legendary Green Ball (U) */}
                <div className="absolute top-10 right-14 w-11 h-11 rounded-full bg-gradient-to-br from-lime-300 via-emerald-400 to-green-700 border-2 border-emerald-200 shadow-[0_0_15px_rgba(52,211,153,0.8)] flex items-center justify-center font-black text-xs text-slate-950">
                  U
                </div>
                {/* Rare Silver Ball (Ag) */}
                <div className="absolute bottom-16 left-12 w-11 h-11 rounded-full bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 border-2 border-white shadow-[0_0_12px_rgba(255,255,255,0.7)] flex items-center justify-center font-black text-xs text-slate-900">
                  Ag
                </div>
                {/* Rare Purple Ball (Ti) */}
                <div className="absolute bottom-14 right-14 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 via-indigo-500 to-violet-800 border-2 border-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.8)] flex items-center justify-center font-black text-xs text-white">
                  Ti
                </div>
                {/* Common Blue Ball (O) */}
                <div className="absolute center w-12 h-12 rounded-full bg-gradient-to-br from-sky-300 via-blue-500 to-cyan-600 border-2 border-cyan-200 shadow-[0_0_10px_rgba(56,189,248,0.7)] flex items-center justify-center font-black text-xs text-white">
                  O
                </div>
                {/* Common Red Ball (Fe) */}
                <div className="absolute top-28 left-28 w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-amber-700 border-2 border-orange-200 shadow-[0_0_10px_rgba(249,115,22,0.6)] flex items-center justify-center font-black text-xs text-white">
                  Fe
                </div>
                {/* Common Green Ball (Cl) */}
                <div className="absolute bottom-24 right-24 w-10 h-10 rounded-full bg-gradient-to-br from-lime-300 via-green-500 to-emerald-700 border-2 border-lime-200 shadow-[0_0_10px_rgba(132,204,22,0.6)] flex items-center justify-center font-black text-xs text-slate-950">
                  Cl
                </div>
              </div>

              {/* Shaking vibration on spin */}
              {isSpinning && (
                <div className="absolute inset-0 bg-cyan-400/20 backdrop-blur-sm animate-ping rounded-full pointer-events-none"></div>
              )}
            </div>

            {/* Machine Lower Body: Crank Knob & Chute */}
            <div className="w-full mt-6 flex items-center justify-around bg-slate-900/90 rounded-2xl p-4 border border-slate-700/80">
              
              {/* Rotating Mechanical Crank */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => handleSpin(1)}
                  disabled={isSpinning}
                  style={{ transform: `rotate(${crankDegree}deg)` }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 via-slate-400 to-slate-700 border-4 border-slate-300 shadow-xl flex items-center justify-center transition-transform duration-700 active:scale-95 hover:brightness-110 cursor-pointer"
                  title="Nhấn để vặn cần quay Gacha"
                >
                  <div className="w-4 h-12 bg-indigo-600 rounded-full shadow-inner transform -rotate-45"></div>
                </button>
                <span className="text-[11px] font-bold text-slate-400 mt-2">Tay Vặn Xoay</span>
              </div>

              {/* Output Chute Tray */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-16 bg-slate-950 rounded-2xl border-2 border-slate-700 shadow-inner flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-black/80 to-transparent"></div>
                  {isSpinning ? (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-300 to-pink-500 animate-bounce shadow-[0_0_15px_rgba(244,63,94,0.8)]"></div>
                  ) : (
                    <span className="text-xs text-slate-600 font-bold uppercase tracking-wider">Cửa Ra</span>
                  )}
                </div>
                <span className="text-[11px] font-bold text-slate-400 mt-2">Khay Nhận Bóng</span>
              </div>
            </div>

            {/* Spin Buttons Controls */}
            <div className="w-full grid grid-cols-2 gap-4 mt-6">
              <button
                onClick={() => handleSpin(1)}
                disabled={isSpinning}
                className={`py-3.5 px-4 rounded-2xl font-black text-sm flex flex-col items-center justify-center gap-1 transition-all transform active:scale-95 shadow-lg border-2 ${
                  isSpinning
                    ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed'
                    : currentRubies >= 200
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border-cyan-400/40 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                    : 'bg-slate-800 border-rose-500/50 text-rose-300 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center gap-1.5 text-base">
                  <RefreshCw size={16} className={isSpinning ? "animate-spin" : ""} /> Quay 1 Lần
                </span>
                <span className="text-xs opacity-90 font-mono text-cyan-200">200 💎 Ruby</span>
              </button>

              <button
                onClick={() => handleSpin(10)}
                disabled={isSpinning}
                className={`py-3.5 px-4 rounded-2xl font-black text-sm flex flex-col items-center justify-center gap-1 transition-all transform active:scale-95 shadow-lg border-2 ${
                  isSpinning
                    ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed'
                    : currentRubies >= 2000
                    ? 'bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:brightness-110 border-yellow-300/50 text-white shadow-[0_0_25px_rgba(244,63,94,0.4)]'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                }`}
              >
                <span className="flex items-center gap-1.5 text-base">
                  <Sparkles size={16} className="text-yellow-300" /> Quay 10 Lần
                </span>
                <span className="text-xs opacity-90 font-mono text-yellow-200">2,000 💎 (Tặng sao)</span>
              </button>
            </div>

            {/* Test Support / Out of Ruby helper */}
            {currentRubies < 200 && (
              <div className="mt-4 p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-center w-full animate-pulse">
                <p className="text-xs text-rose-300 font-medium mb-2">
                  Bạn chưa đủ 200 Ruby? Hãy nhận tài trợ nghiên cứu để thử nghiệm máy quay!
                </p>
                <button
                  onClick={handleGrantTestRubies}
                  className="px-4 py-1.5 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-white font-bold text-xs rounded-lg shadow-md transition"
                >
                  🎁 Nhận +500 💎 Tài Trợ Viện Khoa Học
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Display of Pulled Result or Information */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          
          {/* While Spinning animation */}
          {isSpinning && (
            <div className="w-full bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[26rem] shadow-2xl backdrop-blur-xl">
              <Atom size={64} className="text-cyan-400 animate-spin mb-4" />
              <h3 className="text-2xl font-black text-cyan-300 tracking-wider animate-pulse">ĐANG PHÂN TÁCH VẬT CHẤT...</h3>
              <p className="text-slate-400 text-sm mt-2">Máy đang quét cấu trúc nguyên tử trong buồng chân không...</p>
              <div className="w-48 h-2 bg-slate-800 rounded-full mt-6 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}

          {/* Result Card Revealed */}
          {!isSpinning && pulledResults && (
            <div className="w-full space-y-4">
              {/* If multi-pull (10x), show pagination / list selector */}
              {pulledResults.length > 1 && (
                <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-2xl border border-slate-700">
                  <span className="text-xs font-bold text-slate-300 pl-2">Kết quả 10 lượt quay:</span>
                  <div className="flex gap-1.5 overflow-x-auto max-w-[18rem] pb-1">
                    {pulledResults.map((r, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveRevealedIndex(idx)}
                        className={`w-7 h-7 rounded-lg text-xs font-black transition ${
                          activeRevealedIndex === idx 
                            ? 'bg-cyan-500 text-slate-950 scale-110 shadow-[0_0_10px_rgba(6,182,212,0.8)]' 
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
                  <div className={`w-full bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950 p-6 sm:p-8 rounded-[2.5rem] border-2 ${item.theme.border} ${item.theme.glow} shadow-2xl relative overflow-hidden animate-pop-in`}>
                    
                    {/* Decorative Rarity Glow */}
                    <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
                      isLegendary ? 'bg-yellow-500/20' : isRare ? 'bg-purple-500/20' : 'bg-cyan-500/10'
                    }`}></div>

                    {/* Rarity Header Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1.5">
                        {[...Array(item.stars)].map((_, s) => (
                          <Star key={s} size={18} className={`fill-current ${item.theme.textColor}`} />
                        ))}
                        <span className={`text-xs font-black uppercase tracking-wider ml-1 px-2.5 py-0.5 rounded-full border ${item.theme.badgeBg}`}>
                          {item.rarityLabel}
                        </span>
                      </div>

                      {item.isNew && (
                        <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-extrabold rounded-full shadow-lg animate-bounce">
                          ✨ MỚI MỞ KHÓA!
                        </span>
                      )}
                    </div>

                    {/* Atomic Symbol & Information */}
                    <div className="flex items-center gap-6 my-4">
                      {/* Element Square Box */}
                      <div className={`w-28 h-28 rounded-2xl bg-slate-950 border-2 ${item.theme.border} p-3 flex flex-col justify-between shadow-2xl relative group`}>
                        <div className="flex justify-between items-start text-xs font-mono text-slate-400">
                          <span className="font-bold text-white text-sm">{item.atomicNumber}</span>
                          <span>{item.atomicMass}</span>
                        </div>
                        <div className={`text-4xl font-black text-center tracking-tight ${item.theme.textColor} drop-shadow-md`}>
                          {item.symbol}
                        </div>
                        <div className="text-[10px] text-center font-bold text-slate-300 truncate">
                          {item.name}
                        </div>
                      </div>

                      {/* Element Overview Details */}
                      <div className="space-y-1.5">
                        <h3 className="text-2xl font-black text-white flex items-center gap-2">
                          {item.name} <span className="text-slate-400 text-base font-normal">({item.enName})</span>
                        </h3>
                        <div className="text-xs font-semibold text-slate-300">
                          {item.category} • <span className="text-cyan-300">{item.groupPeriod}</span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 bg-slate-950/80 px-2 py-1 rounded border border-slate-800 inline-block">
                          e⁻: {item.electronConfig}
                        </div>
                      </div>
                    </div>

                    {/* Scientific Description */}
                    <div className="mt-4 bg-slate-950/60 p-4 rounded-2xl border border-slate-800 text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </div>

                    {/* Fun Science Fact */}
                    <div className="mt-3 bg-indigo-950/40 p-4 rounded-2xl border border-indigo-500/30 text-xs text-indigo-200 leading-relaxed">
                      <span className="font-bold text-yellow-300 flex items-center gap-1.5 mb-1">
                        <Sparkles size={14} /> Sự Thật Thú Vị:
                      </span>
                      {item.funFact}
                    </div>

                    {/* Action button inside card */}
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => handleSpin(1)}
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-600 transition flex items-center gap-2 shadow"
                      >
                        <RefreshCw size={14} /> Quay Tiếp (200 💎)
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Idle Placeholder when no pull made yet */}
          {!isSpinning && !pulledResults && (
            <div className="w-full bg-slate-900/60 border border-slate-800 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[26rem] shadow-xl backdrop-blur-md">
              <div className="w-20 h-20 rounded-full bg-indigo-500/10 border-2 border-indigo-400/30 flex items-center justify-center text-indigo-400 mb-4 shadow-inner">
                <Atom size={40} className="animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sẵn Sàng Khởi Động Gacha</h3>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
                Nhấn cần vặn hoặc chọn nút <span className="text-cyan-300 font-bold">"Quay 1 Lần"</span> (200 💎) để mở khóa các nguyên tố hóa học vào bộ sưu tập của bạn.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowOddsModal(true)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 rounded-xl border border-slate-700 transition"
                >
                  Xem Tỷ Lệ Rơi
                </button>
                <button
                  onClick={() => setShowCodexModal(true)}
                  className="px-4 py-2 bg-indigo-600/80 hover:bg-indigo-600 text-xs font-bold text-white rounded-xl transition"
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
          <div className="bg-slate-900 border border-slate-700 max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative text-white">
            <button 
              onClick={() => setShowOddsModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-black text-white flex items-center gap-2 mb-2">
              <HelpCircle className="text-cyan-400" /> TỶ LỆ RƠI NGUYÊN TỐ
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Hệ thống Gacha mô phỏng công bằng tuyệt đối với thuật toán ngẫu nhiên tiêu chuẩn:
            </p>

            <div className="space-y-4">
              {/* Legendary Tier 3% */}
              <div className="p-4 rounded-2xl bg-yellow-500/10 border-2 border-yellow-500/40">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-black text-yellow-400 flex items-center gap-1.5 text-base">
                    <Star size={16} className="fill-yellow-400" /> CỰC HIẾM (5★ Legendary)
                  </span>
                  <span className="font-black text-yellow-300 text-lg bg-yellow-500/20 px-3 py-0.5 rounded-full border border-yellow-500/40">
                    3%
                  </span>
                </div>
                <p className="text-xs text-yellow-200/80 leading-relaxed mt-1">
                  Bao gồm các nguyên tố quý hiếm bậc nhất: Vàng (Au), Bạch kim (Pt), Urani (U), Plutoni (Pu), Franci (Fr), Oganesson (Og), Californi (Cf), Bismut (Bi).
                </p>
              </div>

              {/* Rare Tier 10% */}
              <div className="p-4 rounded-2xl bg-purple-500/10 border-2 border-purple-500/40">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-black text-purple-300 flex items-center gap-1.5 text-base">
                    <Star size={16} className="fill-purple-400" /> HIẾM VỪA (4★ Epic)
                  </span>
                  <span className="font-black text-purple-200 text-lg bg-purple-500/20 px-3 py-0.5 rounded-full border border-purple-500/40">
                    10%
                  </span>
                </div>
                <p className="text-xs text-purple-200/80 leading-relaxed mt-1">
                  Bao gồm các nguyên tố độc đáo: Bạc (Ag), Titan (Ti), Wolfram (W), Neon (Ne), Heli (He), Thủy ngân (Hg), Liti (Li), Crom (Cr).
                </p>
              </div>

              {/* Common Tier 87% */}
              <div className="p-4 rounded-2xl bg-cyan-500/10 border-2 border-cyan-500/40">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-black text-cyan-300 flex items-center gap-1.5 text-base">
                    <Star size={16} className="fill-cyan-400" /> PHỔ BIẾN (3★ Standard)
                  </span>
                  <span className="font-black text-cyan-200 text-lg bg-cyan-500/20 px-3 py-0.5 rounded-full border border-cyan-500/40">
                    87%
                  </span>
                </div>
                <p className="text-xs text-cyan-200/80 leading-relaxed mt-1">
                  Bao gồm các nguyên tố nền tảng tự nhiên: Hiđro (H), Oxi (O), Cacbon (C), Nitơ (N), Sắt (Fe), Đồng (Cu), Nhôm (Al), Canxi (Ca), Natri (Na), Clo (Cl), Magie (Mg), Silic (Si), Lưu huỳnh (S)...
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowOddsModal(false)}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition"
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
          <div className="bg-slate-900 border border-slate-700 max-w-4xl w-full max-h-[90vh] rounded-[2.5rem] p-6 sm:p-8 shadow-2xl flex flex-col relative text-white">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <Layers className="text-indigo-400" /> SỔ TAY NGUYÊN TỐ BẢNG TUẦN HOÀN
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Đã thu thập: <span className="text-cyan-400 font-bold">{collectedCount}</span> / {totalElementsCount} nguyên tố ({completionPercentage}%)
                </p>
              </div>
              <button 
                onClick={() => { setShowCodexModal(false); setSelectedCodexElement(null); }}
                className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800"
              >
                <X size={20} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-950 h-3 rounded-full mt-4 overflow-hidden border border-slate-800">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 transition-all duration-700"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>

            {/* Elements Grid */}
            <div className="flex-1 overflow-y-auto hide-scrollbar py-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {GACHA_ELEMENTS.map(el => {
                const isOwned = !!collection[el.id];
                const count = collection[el.id]?.count || 0;
                const isLegendary = el.rarity === 'legendary';
                const isRare = el.rarity === 'rare';

                return (
                  <button
                    key={el.id}
                    onClick={() => setSelectedCodexElement(el)}
                    className={`p-3 rounded-2xl border-2 flex flex-col items-center justify-between transition-all transform hover:scale-105 ${
                      isOwned
                        ? `${el.theme.border} bg-slate-800/90 shadow-md`
                        : 'border-slate-800 bg-slate-950/60 opacity-40 grayscale hover:grayscale-0 hover:opacity-80'
                    }`}
                  >
                    <div className="w-full flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>{el.atomicNumber}</span>
                      {count > 1 && <span className="text-cyan-400 font-bold">x{count}</span>}
                    </div>

                    <div className={`text-2xl font-black my-1 ${isOwned ? el.theme.textColor : 'text-slate-500'}`}>
                      {el.symbol}
                    </div>

                    <div className="text-[11px] font-bold text-slate-300 truncate w-full text-center">
                      {isOwned ? el.name : '???'}
                    </div>

                    <div className="mt-1 flex items-center gap-0.5">
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
              <div className="mt-4 p-4 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl border-2 ${selectedCodexElement.theme.border} bg-slate-900 flex flex-col items-center justify-center`}>
                    <span className="text-xs text-slate-400 font-mono">{selectedCodexElement.atomicNumber}</span>
                    <span className={`text-xl font-black ${selectedCodexElement.theme.textColor}`}>{selectedCodexElement.symbol}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">
                      {selectedCodexElement.name} ({selectedCodexElement.enName})
                    </h4>
                    <p className="text-xs text-slate-400 max-w-lg mt-0.5">
                      {selectedCodexElement.description}
                    </p>
                  </div>
                </div>

                <div className="text-right">
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
