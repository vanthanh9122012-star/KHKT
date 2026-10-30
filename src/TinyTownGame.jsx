import React, { useState, useEffect } from 'react';
import { 
  Home, Hammer, Compass, BookOpen, Sparkles, CheckCircle2, 
  X, HelpCircle, Layers, ArrowRight, RotateCcw, Volume2, 
  Sun, Moon, Eye, Award, Trophy, Ruler, Plus, Check, Info, Box
} from 'lucide-react';
import TinyTown3DScene from './TinyTown3DScene';
import { 
  CONSTRUCTION_QUESTIONS, 
  MATERIAL_HANDBOOK, 
  CONSTRUCTION_STAGES 
} from './data/constructionQuizData';

// =========================================================================
// HIỆU ỨNG ÂM THANH XÂY DỰNG CHÂN THẬT (WEB AUDIO API SYNTHESIS)
// =========================================================================
const playConstructionSound = (type = 'hammer') => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    if (type === 'hammer') {
      // Tiếng búa gõ đập đanh thép
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);

      // Nhát búa phụ
      setTimeout(() => {
        try {
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.type = 'square';
          osc2.frequency.setValueAtTime(800, ctx.currentTime);
          osc2.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.1);
          gain2.gain.setValueAtTime(0.2, ctx.currentTime);
          gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          osc2.start(ctx.currentTime);
          osc2.stop(ctx.currentTime + 0.12);
        } catch (e) {}
      }, 70);

    } else if (type === 'stone') {
      // Tiếng đẽo đá thô
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(280, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.22);

    } else if (type === 'glass') {
      // Tiếng kính trong trẻo
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.36);

    } else if (type === 'victory') {
      // Kèn chúc mừng hoàn thành công trình
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0.25, ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + idx * 0.12 + 0.28);
      });
    }
  } catch (e) {
    console.warn("Audio synth error:", e);
  }
};

const STORAGE_KEY = 'tinytown_3d_savedata_v1';

export default function TinyTownGame({ addReward, onBack }) {
  // -------------------------------------------------------------
  // TIỀN TỆ RIÊNG BIỆT: GỖ (WOOD) & KHO VẬT LIỆU
  // -------------------------------------------------------------
  const [woodCount, setWoodCount] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved).woodCount ?? 300; } catch (e) {}
    }
    return 300; // Khởi đầu với 300 Gỗ để người chơi đổi ngay 1 vật liệu
  });

  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved).inventory ?? { stone: 0, brick: 0, wood: 0, concrete: 0, glass: 0, roof: 0 }; } catch (e) {}
    }
    return { stone: 0, brick: 0, wood: 0, concrete: 0, glass: 0, roof: 0 };
  });

  // Giai đoạn xây dựng (0: Bãi đất cát đá -> 6: Hoàn thiện lộng lẫy)
  const [currentStage, setCurrentStage] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved).currentStage ?? 0; } catch (e) {}
    }
    return 0;
  });

  // -------------------------------------------------------------
  // VAI TRÒ KIẾN TRÚC SƯ: KÍCH THƯỚC & TÍNH TOÁN
  // -------------------------------------------------------------
  const [dimensions, setDimensions] = useState({
    length: 8.0, // Chiều dài (m)
    width: 6.0,  // Chiều rộng (m)
    height: 3.4  // Chiều cao tầng (m)
  });

  // Các chế độ hiển thị 3D
  const [isNight, setIsNight] = useState(false);
  const [roofCutaway, setRoofCutaway] = useState(false);
  const [dustActive, setDustActive] = useState(false);

  // Modal Điều Khiển
  const [activeModal, setActiveModal] = useState(null); // 'quiz' | 'handbook' | 'architect' | null
  const [selectedHandbookItem, setSelectedHandbookItem] = useState(MATERIAL_HANDBOOK[0]);

  // Vấn đáp vật liệu xây dựng (Quiz Engine)
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAnswerState, setQuizAnswerState] = useState(null); // { selectedOpt, isCorrect, explanation, reward }

  // Thông báo toast
  const [toast, setToast] = useState(null);

  // Lưu tiến trình vào LocalStorage
  useEffect(() => {
    const saveData = {
      woodCount,
      inventory,
      currentStage,
      dimensions
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
  }, [woodCount, inventory, currentStage, dimensions]);

  const showToast = (text, type = 'info') => {
    setToast({ text, type });
    setTimeout(() => setToast(null), 3500);
  };

  // -------------------------------------------------------------
  // ĐỔI VẬT LIỆU XÂY DỰNG (MỖI LOẠI CƠ BẢN LÀ 300 GỖ)
  // -------------------------------------------------------------
  const handleExchangeMaterial = (materialId) => {
    const cost = 300;
    if (woodCount < cost) {
      showToast(`Bạn cần đủ 300 🪵 Gỗ để đổi vật liệu này! Hãy vào mục "Kiếm Gỗ" trả lời câu hỏi nhé.`, 'warning');
      return;
    }

    setWoodCount(prev => prev - cost);
    setInventory(prev => ({
      ...prev,
      [materialId]: (prev[materialId] || 0) + 1
    }));

    playConstructionSound('hammer');
    showToast(`Đổi thành công 1 Lô vật liệu (-300 🪵 Gỗ)!`, 'success');
  };

  // -------------------------------------------------------------
  // TIẾN HÀNH THI CÔNG HẠNG MỤC TIẾP THEO
  // -------------------------------------------------------------
  const handleConstructNextStage = () => {
    if (currentStage >= 6) {
      showToast('Ngôi nhà của bạn đã hoàn thành tuyệt mỹ!', 'success');
      return;
    }

    const nextStageInfo = CONSTRUCTION_STAGES[currentStage + 1];
    if (!nextStageInfo) return;

    // Kiểm tra xem trong kho có đủ vật liệu yêu cầu chưa
    const requiredMats = nextStageInfo.requiredMaterials;
    const missing = requiredMats.filter(matKey => (inventory[matKey] || 0) <= 0);

    if (missing.length > 0) {
      showToast(`Thiếu vật liệu để thi công! Bạn cần đổi: ${nextStageInfo.requiredName}`, 'warning');
      return;
    }

    // Tiêu thụ 1 đơn vị vật liệu cho giai đoạn này
    setInventory(prev => {
      const updated = { ...prev };
      requiredMats.forEach(matKey => {
        if (updated[matKey] > 0) updated[matKey] -= 1;
      });
      return updated;
    });

    // Kích hoạt hiệu ứng âm thanh và bụi xây dựng
    playConstructionSound(currentStage === 0 ? 'stone' : currentStage === 3 ? 'glass' : 'hammer');
    setDustActive(true);
    setTimeout(() => setDustActive(false), 2400);

    const newStage = currentStage + 1;
    setCurrentStage(newStage);

    if (newStage === 6) {
      playConstructionSound('victory');
      showToast(`🎉 CHÚC MỪNG ĐẠI CÔNG CÁO THÀNH! Ngôi nhà mơ ước của bạn đã hoàn tất 100%! (+150 XP, +30 💎)`, 'success');
      if (addReward) addReward(150, 30);
    } else {
      showToast(`Đã hoàn thành: ${nextStageInfo.name}! Tiếp tục phấn đấu giai đoạn tiếp theo.`, 'success');
    }
  };

  // -------------------------------------------------------------
  // TRẢ LỜI CÂU HỎI VẬT LIỆU KIẾM GỖ (WOOD EARNER)
  // -------------------------------------------------------------
  const handleAnswerQuiz = (selectedOption) => {
    if (quizAnswerState !== null) return;

    const currentQ = CONSTRUCTION_QUESTIONS[currentQuizIndex];
    const isCorrect = selectedOption === currentQ.correct;

    if (isCorrect) {
      playConstructionSound('hammer');
      const reward = currentQ.woodReward || 100;
      setWoodCount(prev => prev + reward);
      setQuizAnswerState({
        selectedOpt: selectedOption,
        isCorrect: true,
        explanation: currentQ.explanation,
        reward
      });
    } else {
      setQuizAnswerState({
        selectedOpt: selectedOption,
        isCorrect: false,
        explanation: currentQ.explanation,
        reward: 0
      });
    }
  };

  const handleNextQuiz = () => {
    setQuizAnswerState(null);
    setCurrentQuizIndex(prev => (prev + 1) % CONSTRUCTION_QUESTIONS.length);
  };

  // Khởi động lại công trình
  const handleResetPlot = () => {
    if (window.confirm("Bạn có chắc chắn muốn giải phóng mặt bằng về bãi đất ban đầu để xây lại từ đầu không?")) {
      setCurrentStage(0);
      setRoofCutaway(false);
      showToast("Đã giải phóng mặt bằng về bãi đất nguyên sơ!", "info");
    }
  };

  // Tính toán số liệu kiến trúc sư
  const floorArea = (dimensions.length * dimensions.width).toFixed(1);
  const wallPerimeter = (2 * (dimensions.length + dimensions.width)).toFixed(1);
  const totalWallArea = (wallPerimeter * dimensions.height - 12).toFixed(1); // Trừ cửa sổ & cửa đi 12m2
  const roomVolume = (floorArea * dimensions.height).toFixed(1);
  const estBricks = Math.round(totalWallArea * 65);
  const estConcrete = (floorArea * 0.25).toFixed(1);

  return (
    <div className="bg-[#f8fafc] rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-200 max-w-7xl mx-auto animate-fade-in font-sans relative">

      {/* TOAST THÔNG BÁO TỔNG THỂ */}
      {toast && (
        <div className={`fixed top-6 right-6 z-[99999] px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-sm font-bold border animate-slide-up ${
          toast.type === 'success' ? 'bg-emerald-500 text-white border-emerald-400' :
          toast.type === 'warning' ? 'bg-amber-500 text-white border-amber-400' :
          'bg-slate-800 text-white border-slate-700'
        }`}>
          {toast.type === 'success' && <CheckCircle2 size={18} />}
          {toast.type === 'warning' && <Info size={18} />}
          <span>{toast.text}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* HEADER: THỊ TRẤN NHỎ (3D TINY TOWN BUILDER)                              */}
      {/* ========================================================================= */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-5 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-200">
              <Home size={24} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                <span>Thị Trấn Nhỏ</span>
                <span className="text-xs uppercase bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-bold border border-amber-300">
                  3D Builder
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Xây dựng ngôi nhà mơ ước từ bãi đất cát nguyên sơ • Ứng dụng kiến thức vật liệu & đo lường kiến trúc
              </p>
            </div>
          </div>
        </div>

        {/* Thanh công cụ tài nguyên GỖ & nút điều hướng */}
        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-end">
          
          {/* Hộp tài nguyên GỖ riêng biệt */}
          <div className="flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl shadow-sm">
            <span className="text-2xl select-none">🪵</span>
            <div>
              <div className="text-[10px] uppercase font-bold text-amber-800 leading-none">Kho Gỗ Của Bạn</div>
              <div className="text-base sm:text-lg font-black text-amber-950 leading-tight">
                {woodCount.toLocaleString()} <span className="text-xs font-semibold text-amber-800">Gỗ</span>
              </div>
            </div>
          </div>

          {/* Nút Kiếm Gỗ bằng câu hỏi */}
          <button
            type="button"
            onClick={() => setActiveModal('quiz')}
            className="px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-amber-200 transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>🪵</span>
            <span>Kiếm Thêm Gỗ</span>
          </button>

          {/* Nút Bách khoa vật liệu */}
          <button
            type="button"
            onClick={() => setActiveModal('handbook')}
            className="px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition flex items-center gap-1.5 cursor-pointer"
          >
            <BookOpen size={16} className="text-sky-600" />
            <span className="hidden sm:inline">Bách Khoa</span> Vật Liệu
          </button>

          {/* Nút Thước đo Kiến trúc sư */}
          <button
            type="button"
            onClick={() => setActiveModal('architect')}
            className="px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition flex items-center gap-1.5 cursor-pointer"
          >
            <Ruler size={16} className="text-indigo-600" />
            <span className="hidden sm:inline">Thước Đo</span> Kiến Trúc Sư
          </button>

          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition cursor-pointer"
              title="Quay lại danh sách trò chơi"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* KHU VỰC CHÍNH: KHUNG NHÌN 3D VÀ BẢNG THI CÔNG                             */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* KHUNG NHÌN 3D VIEWPORT (THREE.JS CANVAS) - 8 CỘT */}
        <div className="lg:col-span-8 flex flex-col">
          <div className="relative w-full h-[380px] sm:h-[480px] bg-gradient-to-b from-sky-100 via-sky-50 to-amber-50 rounded-2xl border-2 border-slate-200 overflow-hidden shadow-inner group">
            
            {/* THÀNH PHẦN 3D SCENE VỚI ORBITCONTROLS */}
            <TinyTown3DScene
              stage={currentStage}
              houseDimensions={dimensions}
              roofCutaway={roofCutaway}
              isNight={isNight}
              activeDust={dustActive}
            />

            {/* Hướng dẫn thao tác góc nhìn 3D */}
            <div className="absolute top-3 left-3 pointer-events-none bg-black/40 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 shadow">
              <Compass size={14} className="text-amber-300" />
              <span>Giữ chuột/chạm để <strong>xoay 360°</strong> • Lăn chuột để <strong>phóng to/thu nhỏ</strong></span>
            </div>

            {/* Nút điều khiển ngày đêm & mở nóc mái */}
            <div className="absolute top-3 right-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setRoofCutaway(!roofCutaway)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-sm backdrop-blur-sm ${
                  roofCutaway
                    ? 'bg-amber-500 text-white shadow-amber-300/50'
                    : 'bg-white/90 text-slate-700 hover:bg-white border border-slate-200'
                }`}
                title="Mở nóc mái để quan sát nội thất bên trong"
              >
                <Eye size={14} />
                <span>{roofCutaway ? 'Đậy Mái Lại' : 'Mở Nóc Mái (Xem Bên Trong)'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsNight(!isNight)}
                className="p-2 bg-white/90 hover:bg-white text-slate-700 rounded-xl shadow-sm border border-slate-200 transition cursor-pointer"
                title={isNight ? 'Chuyển sang Ban Ngày' : 'Chuyển sang Ban Đêm (Bật đèn lung linh)'}
              >
                {isNight ? <Sun size={16} className="text-amber-500" /> : <Moon size={16} className="text-indigo-600" />}
              </button>
            </div>

            {/* Badge Tiến độ xây dựng góc dưới */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md p-2.5 px-3.5 rounded-2xl border border-slate-200 shadow-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                {currentStage}/6
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase text-slate-400">Tiến độ công trình</div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-800">
                  {CONSTRUCTION_STAGES[currentStage]?.name}
                </div>
              </div>
            </div>

            {/* Nút reset giải phóng mặt bằng */}
            <div className="absolute bottom-3 right-3">
              <button
                type="button"
                onClick={handleResetPlot}
                className="p-2 bg-white/80 hover:bg-white text-slate-500 hover:text-red-600 rounded-xl shadow-sm border border-slate-200 transition text-xs flex items-center gap-1"
                title="Xây lại từ bãi đất ban đầu"
              >
                <RotateCcw size={14} />
                <span className="hidden sm:inline">Xây lại</span>
              </button>
            </div>
          </div>

          {/* Dải thanh tiến độ thi công 6 bước */}
          <div className="mt-3 grid grid-cols-7 gap-1.5 text-center">
            {CONSTRUCTION_STAGES.map((st) => (
              <div 
                key={st.stage}
                className={`p-1.5 rounded-xl border text-[11px] font-bold transition ${
                  currentStage >= st.stage
                    ? 'bg-amber-100 border-amber-300 text-amber-900'
                    : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-amber-700/70">B.{st.stage}</div>
                <div className="truncate">{st.name.split(' ')[0]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CỘT PHẢI: TRUNG TÂM THI CÔNG & CỬA HÀNG VẬT LIỆU (4 CỘT) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* 1. HỘP ĐIỀU KHIỂN THI CÔNG HIỆN TẠI */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-5 rounded-2xl border-2 border-amber-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                <Hammer size={14} /> Hạng mục thi công
              </span>
              <span className="text-xs font-bold bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-full">
                Giai đoạn {currentStage}/6
              </span>
            </div>

            <h3 className="text-lg font-black text-slate-800 leading-snug mb-1">
              {CONSTRUCTION_STAGES[currentStage]?.name}
            </h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              {CONSTRUCTION_STAGES[currentStage]?.desc}
            </p>

            {currentStage < 6 ? (
              <div className="space-y-3">
                <div className="p-3 bg-white/90 rounded-xl border border-amber-200 text-xs text-slate-700">
                  <div className="font-bold text-amber-900 mb-1 flex items-center gap-1">
                    <span>Yêu cầu vật tư:</span>
                  </div>
                  <div className="font-semibold text-slate-800">
                    {CONSTRUCTION_STAGES[currentStage + 1]?.requiredName}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleConstructNextStage}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black text-sm rounded-xl shadow-md shadow-amber-300/50 transition cursor-pointer flex items-center justify-center gap-2 transform active:scale-98"
                >
                  <Hammer size={18} />
                  <span>Xây Dựng Giai Đoạn {currentStage + 1} Ngay</span>
                </button>
              </div>
            ) : (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <div className="text-2xl">🎉</div>
                <div className="text-sm font-black text-emerald-900">Ngôi Nhà Đã Hoàn Thành Rực Rỡ!</div>
                <p className="text-xs text-emerald-700">
                  Bạn có thể dùng chuột kéo xoay ngắm toàn cảnh 3D hoặc bật tắt chế độ Mở Nóc Mái để quan sát nội thất.
                </p>
              </div>
            )}
          </div>

          {/* 2. CỬA HÀNG ĐỔI VẬT LIỆU (TẤT CẢ ĐỒNG GIÁ 300 🪵 GỖ) */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                <span>Kho & Cửa Hàng Vật Liệu</span>
              </h4>
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                Đồng giá 300 🪵 / Lô
              </span>
            </div>

            {/* Danh sách 6 vật liệu xây nhà cơ bản */}
            <div className="grid grid-cols-2 gap-2 flex-1">
              {MATERIAL_HANDBOOK.map(mat => {
                const count = inventory[mat.id] || 0;
                return (
                  <div 
                    key={mat.id}
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-amber-300 bg-slate-50/50 hover:bg-amber-50/30 transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl">{mat.icon}</span>
                        <span className="text-[10px] font-bold bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-700">
                          Có: {count}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-800 mt-1 truncate" title={mat.name}>
                        {mat.name.split(' ')[0]} {mat.name.split(' ')[1] || ''}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleExchangeMaterial(mat.id)}
                      className="mt-2 w-full py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-[11px] font-bold transition flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                    >
                      <span>300 🪵</span>
                      <span>Đổi</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="text-[11px] text-slate-400 mt-3 text-center italic">
              💡 Thiếu gỗ? Nhấn "Kiếm Thêm Gỗ" phía trên để giải đố nhận thêm 🪵!
            </p>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: KIẾM THÊM GỖ BẰNG VẤN ĐÁP VẬT LIỆU (QUIZ OVERLAY)                */}
      {/* ========================================================================= */}
      {activeModal === 'quiz' && (
        <div className="fixed inset-0 z-[99999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-slide-up">
            
            {/* Header Modal */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl">
                  🪵
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800">Vấn Đáp Vật Liệu - Tích Lũy Gỗ</h3>
                  <p className="text-xs text-slate-500">Trả lời đúng để nhận từ +100 đến +130 🪵 Gỗ cho công trình</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => { setActiveModal(null); setQuizAnswerState(null); }}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Thẻ câu hỏi hiện tại */}
            {(() => {
              const q = CONSTRUCTION_QUESTIONS[currentQuizIndex];
              return (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      {q.badge}
                    </span>
                    <span className="text-xs font-extrabold text-amber-700 flex items-center gap-1">
                      <span>Phần thưởng:</span>
                      <span className="text-sm font-black">+{q.woodReward} 🪵</span>
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                    {q.question}
                  </h4>

                  {/* Lời giải thích khi đã trả lời */}
                  {quizAnswerState && (
                    <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed animate-fade-in ${
                      quizAnswerState.isCorrect 
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-950' 
                        : 'bg-rose-50 border-rose-200 text-rose-950'
                    }`}>
                      <div className="font-bold flex items-center gap-1.5 mb-1">
                        {quizAnswerState.isCorrect ? (
                          <span className="text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 size={16} /> Chính xác! Bạn nhận được +{quizAnswerState.reward} 🪵 Gỗ!
                          </span>
                        ) : (
                          <span className="text-rose-700 flex items-center gap-1">
                            <X size={16} /> Chưa đúng! Đáp án chính xác là: <strong>{q.correct}</strong>
                          </span>
                        )}
                      </div>
                      <p className="text-slate-700 mt-1 italic">
                        💡 <strong>Kiến thức xây dựng:</strong> {quizAnswerState.explanation}
                      </p>
                    </div>
                  )}

                  {/* Danh sách 4 phương án */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map((opt, idx) => {
                      let btnStyle = "bg-slate-50 hover:bg-amber-50/50 border-slate-200 hover:border-amber-400 text-slate-800";
                      if (quizAnswerState) {
                        if (opt === q.correct) {
                          btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-300";
                        } else if (opt === quizAnswerState.selectedOpt && !quizAnswerState.isCorrect) {
                          btnStyle = "bg-rose-100 border-rose-400 text-rose-950 font-bold line-through";
                        } else {
                          btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-50";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          disabled={quizAnswerState !== null}
                          onClick={() => handleAnswerQuiz(opt)}
                          className={`p-3.5 text-left rounded-xl border text-xs sm:text-sm font-medium transition cursor-pointer shadow-sm ${btnStyle}`}
                        >
                          <span className="font-bold mr-1.5 text-amber-700">{['A', 'B', 'C', 'D'][idx]}.</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Nút sang câu hỏi tiếp theo */}
                  {quizAnswerState && (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleNextQuiz}
                        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
                      >
                        <span>Thử Thách Câu Hỏi Tiếp Theo</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: BÁCH KHOA VẬT LIỆU XÂY DỰNG (MATERIAL HANDBOOK)                   */}
      {/* ========================================================================= */}
      {activeModal === 'handbook' && (
        <div className="fixed inset-0 z-[99999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto animate-slide-up">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center text-xl">
                  📚
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-800">Bách Khoa Vật Liệu Xây Dựng</h3>
                  <p className="text-xs text-slate-500">Khám phá nguồn gốc tự nhiên & quy trình tạo nên những vật liệu xây nhà</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu chọn vật liệu */}
            <div className="flex flex-wrap gap-2 pb-2">
              {MATERIAL_HANDBOOK.map(mat => (
                <button
                  key={mat.id}
                  type="button"
                  onClick={() => setSelectedHandbookItem(mat)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                    selectedHandbookItem.id === mat.id
                      ? 'bg-amber-500 text-white border-amber-600 shadow-md shadow-amber-200'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <span>{mat.icon}</span>
                  <span>{mat.name}</span>
                </button>
              ))}
            </div>

            {/* Nội dung chi tiết vật liệu đã chọn */}
            <div className="bg-gradient-to-br from-amber-50/50 to-orange-50/50 p-5 sm:p-6 rounded-2xl border border-amber-200 space-y-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{selectedHandbookItem.icon}</span>
                  <div>
                    <h4 className="text-xl font-black text-slate-800">{selectedHandbookItem.name}</h4>
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
                      {selectedHandbookItem.tag}
                    </span>
                  </div>
                </div>
                <div className="text-xs font-extrabold text-amber-900 bg-white px-3 py-1.5 rounded-xl border border-amber-200 shadow-sm">
                  {selectedHandbookItem.unit}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase text-amber-900 tracking-wider">🌱 Nguồn Gốc & Cấu Thành Tự Nhiên:</div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-white/80 p-3 rounded-xl border border-amber-100">
                  {selectedHandbookItem.origin}
                </p>
              </div>

              {/* 5 Bước quy trình sản xuất */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase text-amber-900 tracking-wider">⚙️ Quy Trình 5 Bước Tạo Nên Vật Liệu:</div>
                <div className="space-y-2">
                  {selectedHandbookItem.steps.map(s => (
                    <div key={s.step} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                      <div className="w-6 h-6 rounded-lg bg-amber-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {s.step}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800">{s.title}</div>
                        <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sự thật thú vị */}
              <div className="p-3 bg-amber-100/70 border border-amber-300 rounded-xl text-xs text-amber-950 font-medium">
                💡 <strong>Bạn có biết:</strong> {selectedHandbookItem.funFact}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: THƯỚC ĐO & BẢN VẼ KIẾN TRÚC SƯ (ARCHITECT BLUEPRINT)            */}
      {/* ========================================================================= */}
      {activeModal === 'architect' && (
        <div className="fixed inset-0 z-[99999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-6 animate-slide-up">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl">
                  📐
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-800">Thước Đo & Bản Vẽ Kiến Trúc Sư</h3>
                  <p className="text-xs text-slate-500">Đo lường, tính toán diện tích, chu vi & dự toán vật liệu xây dựng thực tế</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Bộ thanh trượt điều chỉnh kích thước ngôi nhà */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div>
                <label className="text-xs font-bold text-slate-700 flex justify-between">
                  <span>Chiều Dài Mặt Tiền:</span>
                  <span className="text-indigo-600 font-black">{dimensions.length}m</span>
                </label>
                <input
                  type="range"
                  min="6"
                  max="12"
                  step="0.5"
                  value={dimensions.length}
                  onChange={(e) => setDimensions(d => ({ ...d, length: parseFloat(e.target.value) }))}
                  className="w-full mt-2 accent-indigo-600 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 flex justify-between">
                  <span>Chiều Sâu Ngôi Nhà:</span>
                  <span className="text-indigo-600 font-black">{dimensions.width}m</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="10"
                  step="0.5"
                  value={dimensions.width}
                  onChange={(e) => setDimensions(d => ({ ...d, width: parseFloat(e.target.value) }))}
                  className="w-full mt-2 accent-indigo-600 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 flex justify-between">
                  <span>Chiều Cao Trần Nhà:</span>
                  <span className="text-indigo-600 font-black">{dimensions.height}m</span>
                </label>
                <input
                  type="range"
                  min="3.0"
                  max="4.2"
                  step="0.1"
                  value={dimensions.height}
                  onChange={(e) => setDimensions(d => ({ ...d, height: parseFloat(e.target.value) }))}
                  className="w-full mt-2 accent-indigo-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Bảng tính diện tích & thể tích theo công thức toán THCS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-indigo-50 rounded-2xl border border-indigo-200">
                <div className="text-[10px] uppercase font-bold text-indigo-700">Diện Tích Sàn (S)</div>
                <div className="text-lg sm:text-xl font-black text-indigo-950 mt-0.5">{floorArea} m²</div>
                <div className="text-[10px] text-indigo-600 mt-1 font-mono">a × b</div>
              </div>

              <div className="p-3 bg-sky-50 rounded-2xl border border-sky-200">
                <div className="text-[10px] uppercase font-bold text-sky-700">Chu Vi Móng (P)</div>
                <div className="text-lg sm:text-xl font-black text-sky-950 mt-0.5">{wallPerimeter} m</div>
                <div className="text-[10px] text-sky-600 mt-1 font-mono">2 × (a + b)</div>
              </div>

              <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
                <div className="text-[10px] uppercase font-bold text-amber-700">Diện Tích Tường Xây</div>
                <div className="text-lg sm:text-xl font-black text-amber-950 mt-0.5">{totalWallArea} m²</div>
                <div className="text-[10px] text-amber-600 mt-1 font-mono">P × h - S_cửa</div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="text-[10px] uppercase font-bold text-emerald-700">Thể Tích Không Khí (V)</div>
                <div className="text-lg sm:text-xl font-black text-emerald-950 mt-0.5">{roomVolume} m³</div>
                <div className="text-[10px] text-emerald-600 mt-1 font-mono">S_sàn × h</div>
              </div>
            </div>

            {/* Bảng dự toán vật tư thực tế */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold uppercase text-slate-700 tracking-wider">
                📊 Bảng Dự Toán Khối Lượng Vật Tư Thi Công:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex justify-between">
                  <span className="text-slate-600">🧱 Gạch ống xây tường (65v/m²):</span>
                  <strong className="text-slate-900">{estBricks.toLocaleString()} viên</strong>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 flex justify-between">
                  <span className="text-slate-600">🏗️ Bê tông móng cốt thép:</span>
                  <strong className="text-slate-900">~{estConcrete} m³</strong>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveModal(null);
                showToast(`Đã áp dụng kích thước mới (${dimensions.length}m × ${dimensions.width}m × ${dimensions.height}m) vào mô hình 3D!`, 'success');
              }}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md transition"
            >
              Áp Dụng Bản Vẽ Vào Mô Hình 3D
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
