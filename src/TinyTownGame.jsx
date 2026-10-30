import React, { useState, useEffect } from 'react';
import { 
  Home, Hammer, Compass, BookOpen, Sparkles, CheckCircle2, 
  X, HelpCircle, Layers, ArrowRight, RotateCcw, Volume2, 
  Sun, Moon, Eye, Award, Trophy, Ruler, Plus, Check, Info, Box,
  Shuffle, Package, CheckCheck, RefreshCw, Zap, ArrowLeft
} from 'lucide-react';
import TinyTown3DScene from './TinyTown3DScene';
import { 
  CONSTRUCTION_QUESTIONS, 
  MATRIX_SORTING_QUESTIONS,
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

    } else if (type === 'crate_correct') {
      // Tiếng thẻ rơi trúng Thùng Gỗ ĐÚNG & leng keng nhận thưởng gỗ
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.2);

      setTimeout(() => {
        try {
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(1174.66, ctx.currentTime);
          gain2.gain.setValueAtTime(0.25, ctx.currentTime);
          gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          osc2.start(ctx.currentTime);
          osc2.stop(ctx.currentTime + 0.26);
        } catch (e) {}
      }, 70);

    } else if (type === 'crate_wrong') {
      // Tiếng phế phẩm rớt bịch vào Thùng Gỗ SAI
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(55, ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.28);

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

// Hàm xáo trộn mảng ngẫu nhiên (Fisher-Yates Shuffle)
const shuffleArray = (arr) => {
  if (!arr || !Array.isArray(arr)) return [];
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
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
      try {
        const parsed = JSON.parse(saved).inventory;
        if (parsed) {
          return {
            stone: parsed.stone || 0,
            concrete: parsed.concrete || 0,
            brick: parsed.brick || 0,
            wood: parsed.wood || 0,
            glass: parsed.glass || 0,
            roof: parsed.roof || 0,
            steel: parsed.steel || 0,
            mortar: parsed.mortar || 0,
          };
        }
      } catch (e) {}
    }
    return { stone: 0, concrete: 0, brick: 0, wood: 0, glass: 0, roof: 0, steel: 0, mortar: 0 };
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

  // -------------------------------------------------------------
  // VẤN ĐÁP VẬT LIỆU: MA TRẬN 2 THÙNG GỖ & TRẮC NGHIỆM XÁO TRỘN
  // -------------------------------------------------------------
  const [quizMode, setQuizMode] = useState('matrix'); // 'matrix' (Ma trận phân loại 2 thùng gỗ) | 'classic' (Trắc nghiệm rơi thùng)

  // 1. Chế độ Ma Trận Phân Loại 2 Thùng Gỗ
  const [currentMatrixIndex, setCurrentMatrixIndex] = useState(0);
  const [matrixCards, setMatrixCards] = useState(() => {
    return shuffleArray(MATRIX_SORTING_QUESTIONS[0]?.cards || []);
  });
  const [matrixSortedStatus, setMatrixSortedStatus] = useState({}); // { [cardId]: { status: 'correct'|'wrong', reward: number } }
  const [activeDroppingCard, setActiveDroppingCard] = useState(null); // { id, isCorrect }
  const [crateBounce, setCrateBounce] = useState(false); // Hiệu ứng Thùng ĐÚNG nảy
  const [crateShake, setCrateShake] = useState(false); // Hiệu ứng Thùng SAI rung lắc
  const [floatingWood, setFloatingWood] = useState(null); // Biểu tượng thưởng '+60 🪵'
  const [matrixFeedback, setMatrixFeedback] = useState(null); // { name, isCorrect, explanation, reward }

  // 2. Chế độ Trắc Nghiệm Cổ Điển Rơi Thùng (32 câu xáo trộn ngẫu nhiên)
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState(() => {
    return shuffleArray(CONSTRUCTION_QUESTIONS[0]?.options || []);
  });
  const [quizAnswerState, setQuizAnswerState] = useState(null); // { selectedOpt, isCorrect, explanation, reward }
  const [classicDroppingOpt, setClassicDroppingOpt] = useState(null); // { opt, isCorrect }

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

    const matInfo = MATERIAL_HANDBOOK.find(m => m.id === materialId);
    const matName = matInfo ? (matInfo.shortName || matInfo.name) : 'Vật liệu';

    setWoodCount(prev => prev - cost);
    setInventory(prev => ({
      ...prev,
      [materialId]: (prev[materialId] || 0) + 1
    }));

    playConstructionSound('hammer');
    showToast(`Đổi thành công 1 Lô ${matName} (-300 🪵 Gỗ)!`, 'success');
  };

  // -------------------------------------------------------------
  // TIẾN HÀNH THI CÔNG HẠNG MỤC TIẾP THEO
  // -------------------------------------------------------------
  const handleConstructNextStage = () => {
    if (currentStage >= 6) {
      showToast('Ngôi nhà của bạn đã hoàn thành tuyệt mỹ!', 'success');
      return;
    }

    const currentStageData = CONSTRUCTION_STAGES[currentStage];
    if (!currentStageData) return;

    // Các vật liệu cần thiết để hoàn thành giai đoạn này (chuyển sang stage tiếp theo)
    const requiredMats = currentStageData.requiredMaterials || [];
    const missing = requiredMats.filter(item => (inventory[item.id] || 0) < item.amount);

    if (missing.length > 0) {
      const missingNames = missing.map(m => `${m.name} (cần ${m.amount} Lô, hiện có ${inventory[m.id] || 0})`).join(', ');
      showToast(`Chưa đủ vật liệu! Bạn còn thiếu: ${missingNames}`, 'warning');
      return;
    }

    // Tiêu thụ vật liệu
    setInventory(prev => {
      const updated = { ...prev };
      requiredMats.forEach(item => {
        updated[item.id] = Math.max(0, (updated[item.id] || 0) - item.amount);
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
      const completedInfo = CONSTRUCTION_STAGES[newStage];
      showToast(`Đã hoàn thành: ${completedInfo?.name || `Giai đoạn ${newStage}`}! Tiếp tục bước tiếp theo.`, 'success');
    }
  };

  // -------------------------------------------------------------
  // TRẢ LỜI CÂU HỎI & MA TRẬN PHÂN LOẠI 2 THÙNG GỖ
  // -------------------------------------------------------------
  // Chuyển ma trận phân loại
  const handleLoadMatrix = (index) => {
    const safeIdx = (index + MATRIX_SORTING_QUESTIONS.length) % MATRIX_SORTING_QUESTIONS.length;
    setCurrentMatrixIndex(safeIdx);
    setMatrixCards(shuffleArray(MATRIX_SORTING_QUESTIONS[safeIdx]?.cards || []));
    setMatrixSortedStatus({});
    setMatrixFeedback(null);
    setActiveDroppingCard(null);
  };

  // Người chơi nhấp vào 1 ô thẻ trong Ma Trận
  const handleSortMatrixCard = (card) => {
    if (matrixSortedStatus[card.id] || activeDroppingCard) return;

    const isCorrect = card.isCorrect;
    const currentMatrix = MATRIX_SORTING_QUESTIONS[currentMatrixIndex];
    const reward = isCorrect ? (currentMatrix.rewardPerCorrect || 60) : 0;

    setActiveDroppingCard({ id: card.id, isCorrect });

    if (isCorrect) {
      playConstructionSound('crate_correct');
      setCrateBounce(true);
      setTimeout(() => setCrateBounce(false), 900);
      setWoodCount(prev => prev + reward);
      setFloatingWood(`+${reward} 🪵`);
      setTimeout(() => setFloatingWood(null), 1800);
      showToast(`Chính xác! Thẻ đã rơi vào THÙNG GỖ ĐÚNG (+${reward} 🪵 Gỗ)`, 'success');
    } else {
      playConstructionSound('crate_wrong');
      setCrateShake(true);
      setTimeout(() => setCrateShake(false), 900);
      showToast(`Lỗi kỹ thuật! Thẻ đã rơi vào THÙNG GỖ SAI (+0 🪵 Gỗ)`, 'warning');
    }

    setMatrixSortedStatus(prev => ({
      ...prev,
      [card.id]: {
        status: isCorrect ? 'correct' : 'wrong',
        reward
      }
    }));

    setMatrixFeedback({
      name: card.name,
      isCorrect,
      explanation: card.explanation,
      reward
    });

    setTimeout(() => {
      setActiveDroppingCard(null);
    }, 550);
  };

  // Trả lời câu hỏi trắc nghiệm cổ điển rơi thùng
  const handleAnswerQuiz = (selectedOption) => {
    if (quizAnswerState !== null || classicDroppingOpt !== null) return;

    const currentQ = CONSTRUCTION_QUESTIONS[currentQuizIndex];
    const isCorrect = selectedOption === currentQ.correct;
    const reward = isCorrect ? (currentQ.woodReward || 100) : 0;

    setClassicDroppingOpt({ opt: selectedOption, isCorrect });

    if (isCorrect) {
      playConstructionSound('crate_correct');
      setCrateBounce(true);
      setTimeout(() => setCrateBounce(false), 900);
      setWoodCount(prev => prev + reward);
      setFloatingWood(`+${reward} 🪵`);
      setTimeout(() => setFloatingWood(null), 1800);
      showToast(`Chính xác! Rơi vào THÙNG GỖ ĐÚNG (+${reward} 🪵 Gỗ)`, 'success');
    } else {
      playConstructionSound('crate_wrong');
      setCrateShake(true);
      setTimeout(() => setCrateShake(false), 900);
      showToast(`Chưa đúng! Rơi vào THÙNG GỖ SAI (+0 🪵 Gỗ)`, 'warning');
    }

    setQuizAnswerState({
      selectedOpt: selectedOption,
      isCorrect,
      explanation: currentQ.explanation,
      reward
    });

    setTimeout(() => {
      setClassicDroppingOpt(null);
    }, 550);
  };

  const handleNextQuiz = () => {
    setQuizAnswerState(null);
    setClassicDroppingOpt(null);
    const nextIdx = (currentQuizIndex + 1) % CONSTRUCTION_QUESTIONS.length;
    setCurrentQuizIndex(nextIdx);
    setShuffledOptions(shuffleArray(CONSTRUCTION_QUESTIONS[nextIdx]?.options || []));
  };

  const openQuizModal = (mode = 'matrix') => {
    setQuizMode(mode);
    if (mode === 'matrix') {
      setMatrixCards(shuffleArray(MATRIX_SORTING_QUESTIONS[currentMatrixIndex]?.cards || []));
      setMatrixSortedStatus({});
      setMatrixFeedback(null);
    } else {
      setShuffledOptions(shuffleArray(CONSTRUCTION_QUESTIONS[currentQuizIndex]?.options || []));
      setQuizAnswerState(null);
      setClassicDroppingOpt(null);
    }
    setActiveModal('quiz');
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
            onClick={() => openQuizModal('matrix')}
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

          {/* Dải thanh tiến độ thi công 7 bước */}
          <div className="mt-3 grid grid-cols-7 gap-1.5 text-center">
            {CONSTRUCTION_STAGES.map((st) => {
              const stepLabels = [
                'Đất thô',
                'Móng đá',
                'Khung cột',
                'Tường gạch',
                'Cửa & Kính',
                'Mái ngói',
                'Nội thất'
              ];
              const isCurrent = currentStage === st.stage;
              const isDone = currentStage > st.stage;

              return (
                <div 
                  key={st.stage}
                  className={`p-1.5 rounded-xl border text-[11px] font-bold transition flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-amber-100 border-amber-400 text-amber-950 ring-2 ring-amber-300/60 shadow-sm'
                      : isDone
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                      : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                  }`}
                >
                  <div className={`text-[10px] uppercase font-black ${
                    isCurrent ? 'text-amber-800' : isDone ? 'text-emerald-700' : 'text-slate-400'
                  }`}>
                    {isDone ? '✓ B.' + st.stage : 'B.' + st.stage}
                  </div>
                  <div className="truncate text-[10px] sm:text-[11px]" title={st.name}>
                    {stepLabels[st.stage] || st.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CỘT PHẢI: TRUNG TÂM THI CÔNG & CỬA HÀNG VẬT LIỆU (4 CỘT) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* 1. HỘP ĐIỀU KHIỂN KẾ HOẠCH THI CÔNG */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-5 rounded-2xl border-2 border-amber-200 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                <Hammer size={15} /> Kế Hoạch Xây Dựng
              </span>
              <span className="text-xs font-bold bg-amber-200 text-amber-900 px-2.5 py-0.5 rounded-full">
                Tiến độ: {currentStage}/6 ({Math.round((currentStage / 6) * 100)}%)
              </span>
            </div>

            {/* Trạng thái hiện tại đã xong */}
            <div className="p-3 bg-white/80 rounded-xl border border-amber-200/80">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                <CheckCircle2 size={13} className="text-emerald-500" />
                <span>Trạng thái hiện tại (Đã xong):</span>
              </div>
              <div className="text-sm font-bold text-slate-800 mt-0.5">
                {CONSTRUCTION_STAGES[currentStage]?.name}
              </div>
              <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                {CONSTRUCTION_STAGES[currentStage]?.desc}
              </div>
            </div>

            {/* Hạng mục thi công tiếp theo */}
            {currentStage < 6 ? (
              <div className="space-y-3">
                <div className="p-3.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl border-2 border-orange-300">
                  <div className="text-[11px] font-extrabold text-orange-800 uppercase tracking-wide flex items-center gap-1 mb-1">
                    <Sparkles size={13} className="text-orange-600" />
                    <span>Hạng mục tiếp theo cần xây:</span>
                  </div>
                  <div className="text-base font-black text-slate-900 leading-snug">
                    {CONSTRUCTION_STAGES[currentStage]?.nextStepTitle}
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {CONSTRUCTION_STAGES[currentStage]?.nextStepDesc}
                  </p>

                  {/* Danh sách vật tư cần có */}
                  <div className="mt-3 pt-2.5 border-t border-orange-200/70 space-y-2">
                    <div className="text-[11px] font-bold text-slate-700 flex items-center justify-between">
                      <span>Vật tư cần có cho bước này:</span>
                      <span className="text-slate-500 font-normal">300 🪵 / Lô</span>
                    </div>

                    <div className="space-y-1.5">
                      {CONSTRUCTION_STAGES[currentStage]?.requiredMaterials.map(req => {
                        const currentHave = inventory[req.id] || 0;
                        const isSufficient = currentHave >= req.amount;
                        return (
                          <div 
                            key={req.id}
                            className={`p-2 rounded-lg border flex items-center justify-between text-xs transition ${
                              isSufficient 
                                ? 'bg-emerald-50/80 border-emerald-300 text-emerald-900' 
                                : 'bg-rose-50/80 border-rose-300 text-rose-900'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{req.icon}</span>
                              <div>
                                <div className="font-bold">{req.name}</div>
                                <div className="text-[10px] text-slate-600">
                                  Cần: <span className="font-bold">{req.amount}</span> Lô | Kho có: <span className={`font-bold ${isSufficient ? 'text-emerald-700' : 'text-rose-700'}`}>{currentHave}</span>
                                </div>
                              </div>
                            </div>

                            {isSufficient ? (
                              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-emerald-200 shadow-sm">
                                <Check size={14} /> Đã đủ
                              </span>
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleExchangeMaterial(req.id)}
                                className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-md text-[11px] font-bold transition flex items-center gap-1 cursor-pointer shadow-sm active:scale-95"
                                title="Đổi nhanh vật tư này với 300 🪵 Gỗ"
                              >
                                <Plus size={12} />
                                <span>Đổi (300 🪵)</span>
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Nút bấm thi công */}
                {(() => {
                  const reqs = CONSTRUCTION_STAGES[currentStage]?.requiredMaterials || [];
                  const canBuild = reqs.every(req => (inventory[req.id] || 0) >= req.amount);

                  return (
                    <button
                      type="button"
                      onClick={handleConstructNextStage}
                      disabled={!canBuild}
                      className={`w-full py-3.5 rounded-xl font-black text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer ${
                        canBuild
                          ? 'bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-emerald-300/50 active:scale-98 animate-pulse'
                          : 'bg-slate-200 text-slate-500 cursor-not-allowed border border-slate-300'
                      }`}
                    >
                      <Hammer size={18} />
                      <span>
                        {canBuild 
                          ? `Thi Công Ngay: ${CONSTRUCTION_STAGES[currentStage]?.nextStepTitle.split(':')[1] || 'Giai đoạn tiếp theo'}`
                          : `Còn thiếu vật tư để thi công (${CONSTRUCTION_STAGES[currentStage]?.nextStepTitle.split(':')[1] || ''})`
                        }
                      </span>
                    </button>
                  );
                })()}
              </div>
            ) : (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <div className="text-3xl">🎉🏡✨</div>
                <div className="text-sm font-black text-emerald-900">Đại Công Cáo Thành - Ngôi Nhà Hoàn Hảo!</div>
                <p className="text-xs text-emerald-700">
                  Bạn đã hoàn thành trọn vẹn toàn bộ 6 giai đoạn xây dựng từ bãi đất cát đá hoang sơ thành tổ ấm lung linh. Hãy xoay 360 độ hoặc mở nóc mái để chiêm ngưỡng tác phẩm của mình!
                </p>
              </div>
            )}
          </div>

          {/* 2. CỬA HÀNG ĐỔI VẬT LIỆU (TẤT CẢ ĐỒNG GIÁ 300 🪵 GỖ) */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
              <div>
                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                  <span>Kho & Cửa Hàng Vật Liệu</span>
                </h4>
                <div className="text-[11px] text-slate-500">Đầy đủ bê tông, gạch, đá, gỗ, kính, ngói...</div>
              </div>
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                Đồng giá 300 🪵 / Lô
              </span>
            </div>

            {/* Danh sách 8 vật liệu xây nhà tương thích */}
            <div className="grid grid-cols-2 gap-2 flex-1 max-h-[360px] overflow-y-auto pr-1">
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
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                          count > 0 
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-800' 
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}>
                          Có: {count}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-800 mt-1 leading-tight line-clamp-1" title={mat.name}>
                        {mat.shortName || mat.name}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate" title={mat.tag}>
                        {mat.tag}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleExchangeMaterial(mat.id)}
                      className="mt-2 w-full py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-[11px] font-bold transition flex items-center justify-center gap-1 cursor-pointer shadow-sm active:scale-95"
                    >
                      <span>300 🪵</span>
                      <span>Đổi</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 text-center">
              <button
                type="button"
                onClick={() => openQuizModal('matrix')}
                className="text-[11px] text-amber-700 hover:text-amber-900 font-bold underline cursor-pointer inline-flex items-center gap-1 bg-amber-50/80 px-3 py-1 rounded-full border border-amber-200"
              >
                <span>💡 Thiếu gỗ? Nhấn vào đây để vào Ma Trận Phân Loại 2 Thùng Gỗ nhận 🪵 Gỗ!</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: ĐẤU TRƯỜNG VẬT LIỆU - MA TRẬN 2 THÙNG GỖ & TRẮC NGHIỆM            */}
      {/* ========================================================================= */}
      {activeModal === 'quiz' && (
        <div className="fixed inset-0 z-[99999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-5 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[94vh] overflow-y-auto animate-slide-up">
            
            {/* Header Modal */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center text-2xl shadow-md shadow-amber-200">
                  📦
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-800 flex items-center gap-2">
                    <span>Đấu Trường Vật Liệu - Tích Lũy Gỗ</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Phân loại thẻ vào 2 Thùng Gỗ: Thùng ĐÚNG nhận 🪵 Gỗ, Thùng SAI không nhận được vật phẩm
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                {/* Kho gỗ hiện tại */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-300 rounded-xl text-xs font-black text-amber-950">
                  <span className="text-sm">🪵</span>
                  <span>{woodCount.toLocaleString()} Gỗ</span>
                </div>

                <button
                  type="button"
                  onClick={() => { setActiveModal(null); setQuizAnswerState(null); setActiveDroppingCard(null); }}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
                  title="Đóng cửa sổ"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* TAB CHUYỂN ĐỔI CHẾ ĐỘ CHƠI */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setQuizMode('matrix')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-2 cursor-pointer ${
                  quizMode === 'matrix'
                    ? 'bg-white text-amber-900 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Package size={16} className="text-amber-600" />
                <span>Ma Trận Phân Loại 2 Thùng Gỗ</span>
                <span className="text-[10px] bg-amber-500 text-white px-1.5 py-0.2 rounded-full font-bold">Mới</span>
              </button>

              <button
                type="button"
                onClick={() => setQuizMode('classic')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-2 cursor-pointer ${
                  quizMode === 'classic'
                    ? 'bg-white text-amber-900 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Shuffle size={16} className="text-sky-600" />
                <span>Trắc Nghiệm Rơi Thùng (32 Câu Xáo Trộn)</span>
              </button>
            </div>

            {/* ================================================================= */}
            {/* CHẾ ĐỘ 1: MA TRẬN PHÂN LOẠI 2 THÙNG GỖ (WOOD CRATE SORTING)        */}
            {/* ================================================================= */}
            {quizMode === 'matrix' && (() => {
              const matrix = MATRIX_SORTING_QUESTIONS[currentMatrixIndex];
              const sortedCount = Object.keys(matrixSortedStatus).length;
              const totalCards = matrixCards.length;
              const isFinished = sortedCount === totalCards;

              return (
                <div className="space-y-4">
                  
                  {/* Thanh thông tin chủ đề ma trận */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-amber-50/60 p-3 rounded-2xl border border-amber-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full">
                          Ma Trận {currentMatrixIndex + 1}/{MATRIX_SORTING_QUESTIONS.length}
                        </span>
                        <h4 className="text-sm font-black text-slate-800">{matrix.topic}</h4>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        {matrix.prompt}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        type="button"
                        onClick={() => setMatrixCards(shuffleArray(matrixCards))}
                        className="px-2.5 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-1 cursor-pointer transition shadow-sm"
                        title="Xáo trộn lại vị trí các ô thẻ trong ma trận"
                      >
                        <Shuffle size={13} className="text-amber-600" />
                        <span>Xáo Thẻ</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleLoadMatrix(currentMatrixIndex + 1)}
                        className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer transition shadow-sm"
                        title="Đổi sang ma trận kiến thức khác"
                      >
                        <span>Đổi Ma Trận</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>

                  {/* LƯỚI MA TRẬN CÁC Ô THẺ ĐÁP ÁN (MATRIX CARDS) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {matrixCards.map((card) => {
                      const sortedInfo = matrixSortedStatus[card.id];
                      const isDropping = activeDroppingCard?.id === card.id;

                      let cardStyle = "bg-white border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 text-slate-800 cursor-pointer shadow-sm hover:shadow-md";
                      if (sortedInfo) {
                        if (sortedInfo.status === 'correct') {
                          cardStyle = "bg-emerald-50/90 border-2 border-emerald-400 text-emerald-950 shadow-inner";
                        } else {
                          cardStyle = "bg-rose-50/80 border-2 border-rose-300 text-rose-950 opacity-90 shadow-inner";
                        }
                      }
                      if (isDropping) {
                        cardStyle += activeDroppingCard.isCorrect 
                          ? " scale-95 ring-4 ring-emerald-400 animate-pulse" 
                          : " scale-95 ring-4 ring-rose-400 animate-shake";
                      }

                      return (
                        <div
                          key={card.id}
                          onClick={() => handleSortMatrixCard(card)}
                          className={`p-3 rounded-2xl transition-all duration-200 flex flex-col justify-between select-none ${cardStyle}`}
                        >
                          <div>
                            {/* Trạng thái phân loại của thẻ */}
                            <div className="flex items-center justify-between mb-2">
                              {sortedInfo ? (
                                sortedInfo.status === 'correct' ? (
                                  <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <Check size={12} /> ĐÃ RƠI VÀO THÙNG ĐÚNG (+{sortedInfo.reward} 🪵)
                                  </span>
                                ) : (
                                  <span className="text-[10px] font-black uppercase text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <X size={12} /> ĐÃ RƠI VÀO THÙNG SAI (+0 🪵)
                                  </span>
                                )
                              ) : (
                                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                                  <span>👉 Nhấp để phân loại</span>
                                </span>
                              )}
                              <span className="text-xl">{card.icon}</span>
                            </div>

                            <h5 className="font-extrabold text-xs sm:text-sm leading-tight text-slate-800">
                              {card.name}
                            </h5>
                            <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                              {card.desc}
                            </p>
                          </div>

                          <div className="mt-2 pt-2 border-t border-slate-100/80 text-[10px] font-semibold text-slate-400 flex items-center justify-between">
                            <span>{sortedInfo ? 'Đã phân loại' : 'Chưa phân loại'}</span>
                            <span className="font-bold text-amber-700">+60 🪵 nếu đúng</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* BANNER GIẢI THÍCH NGAY SAU KHI PHÂN LOẠI */}
                  {matrixFeedback && (
                    <div className={`p-3.5 rounded-2xl border text-xs sm:text-sm leading-relaxed animate-fade-in flex items-start gap-2.5 ${
                      matrixFeedback.isCorrect
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                        : 'bg-rose-50 border-rose-300 text-rose-950'
                    }`}>
                      <div className="mt-0.5">
                        {matrixFeedback.isCorrect ? <CheckCircle2 size={18} className="text-emerald-600" /> : <X size={18} className="text-rose-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold mb-0.5">
                          {matrixFeedback.isCorrect 
                            ? `🎉 CHÍNH XÁC! Thẻ "${matrixFeedback.name}" đã rơi vào Thùng ĐÚNG (+${matrixFeedback.reward} 🪵 Gỗ)`
                            : `⚠️ CHƯA CHÍNH XÁC! Thẻ "${matrixFeedback.name}" đã rơi vào Thùng SAI (+0 🪵)`
                          }
                        </div>
                        <p className="text-slate-700 text-xs italic">
                          💡 <strong>Kiến thức xây dựng:</strong> {matrixFeedback.explanation}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* KHI HOÀN THÀNH TẤT CẢ CÁC THẺ TRONG MA TRẬN */}
                  {isFinished && (
                    <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 animate-slide-up">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">🎉</div>
                        <div>
                          <div className="text-sm font-black text-amber-950">
                            Tuyệt vời! Bạn đã phân loại hoàn tất cả {totalCards} thẻ của ma trận này!
                          </div>
                          <div className="text-xs text-amber-800">
                            Khám phá ma trận tiếp theo để tìm hiểu thêm nhiều siêu vật liệu hiếm khác.
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleLoadMatrix(currentMatrixIndex + 1)}
                        className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95"
                      >
                        <span>Ma Trận Tiếp Theo</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  )}

                </div>
              );
            })()}

            {/* ================================================================= */}
            {/* CHẾ ĐỘ 2: TRẮC NGHIỆM RƠI THÙNG (32 CÂU HỎI XÁO TRỘN ĐÁP ÁN)     */}
            {/* ================================================================= */}
            {quizMode === 'classic' && (() => {
              const q = CONSTRUCTION_QUESTIONS[currentQuizIndex];
              return (
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-sky-50 p-3 rounded-2xl border border-sky-200">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-sky-200 text-sky-900">
                        {q.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        Câu {currentQuizIndex + 1}/{CONSTRUCTION_QUESTIONS.length}
                      </span>
                    </div>
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
                            <CheckCircle2 size={16} /> Chính xác! Đã rơi vào Thùng ĐÚNG (+{quizAnswerState.reward} 🪵 Gỗ)!
                          </span>
                        ) : (
                          <span className="text-rose-700 flex items-center gap-1">
                            <X size={16} /> Chưa đúng! Đã rơi vào Thùng SAI (+0 🪵). Đáp án đúng là: <strong>{q.correct}</strong>
                          </span>
                        )}
                      </div>
                      <p className="text-slate-700 mt-1 italic">
                        💡 <strong>Kiến thức xây dựng:</strong> {quizAnswerState.explanation}
                      </p>
                    </div>
                  )}

                  {/* Danh sách 4 phương án xáo trộn ngẫu nhiên */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {shuffledOptions.map((opt, idx) => {
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
                        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Thử Thách Câu Hỏi Tiếp Theo (Xáo Trộn)</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* ========================================================================= */}
            {/* 2 CHIẾC THÙNG GỖ TRỰC QUAN: THÙNG ĐÚNG (ĐẠT CHUẨN) & THÙNG SAI (PHẾ LIỆU) */}
            {/* ========================================================================= */}
            <div className="pt-3 border-t border-slate-100">
              <div className="text-[11px] font-black uppercase text-slate-400 tracking-wider mb-2 flex items-center justify-between">
                <span>Điểm Tiếp Nhận Đáp Án (2 Thùng Gỗ Mô Phỏng):</span>
                <span className="text-amber-700 font-bold">🪵 Gỗ thưởng dùng để đổi vật liệu thi công</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* 1. THÙNG GỖ ĐÚNG (HÀNG ĐẠT CHUẨN) */}
                <div className={`relative p-3.5 rounded-2xl border-4 transition-all duration-300 overflow-hidden shadow-md select-none ${
                  crateBounce
                    ? 'scale-105 ring-4 ring-emerald-400 border-amber-400 bg-gradient-to-b from-amber-700 via-amber-800 to-amber-950 -translate-y-1'
                    : 'border-amber-800/90 bg-gradient-to-b from-[#8B5A2B] via-[#654321] to-[#3E2723]'
                }`}>
                  <div className="relative z-10 flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-amber-600/40">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-500 text-white shadow-sm">
                      <CheckCircle2 size={13} />
                      <span>THÙNG ĐÚNG (ĐẠT CHUẨN)</span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-200 bg-black/30 px-2 py-0.5 rounded border border-amber-500/30">
                      Nhận 🪵 Gỗ
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center justify-between gap-3 pt-0.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-11 h-11 rounded-xl bg-amber-900/90 border-2 border-amber-500/60 flex items-center justify-center text-xl shadow-inner relative">
                        <Package className="text-amber-200" size={24} />
                        <span className="absolute -bottom-1 -right-1 text-xs">🪵</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-100">Khoang Gỗ Hảo Hạng</div>
                        <div className="text-[11px] text-amber-200/80 leading-tight">
                          Đáp án đúng rơi vào đây để nhận thưởng <strong>🪵 Gỗ</strong>
                        </div>
                      </div>
                    </div>

                    {floatingWood && crateBounce && (
                      <div className="animate-bounce font-black text-emerald-300 text-xs sm:text-sm bg-black/70 px-2.5 py-1 rounded-xl border border-emerald-400 shadow-md">
                        {floatingWood}
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. THÙNG GỖ SAI (PHẾ PHẨM / LỖI) */}
                <div className={`relative p-3.5 rounded-2xl border-4 transition-all duration-300 overflow-hidden shadow-md select-none ${
                  crateShake
                    ? 'ring-4 ring-rose-500 border-rose-500 bg-gradient-to-b from-stone-800 via-stone-900 to-black translate-x-1'
                    : 'border-stone-700 bg-gradient-to-b from-[#3a3a3a] via-[#262626] to-[#141414]'
                }`}>
                  <div className="relative z-10 flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-stone-600/40">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-600 text-white shadow-sm">
                      <X size={13} />
                      <span>THÙNG SAI (PHẾ PHẨM)</span>
                    </div>
                    <span className="text-[10px] font-bold text-stone-300 bg-black/40 px-2 py-0.5 rounded border border-stone-600/40">
                      +0 🪵
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center justify-between gap-3 pt-0.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-11 h-11 rounded-xl bg-stone-900/90 border-2 border-stone-600 flex items-center justify-center text-xl shadow-inner relative">
                        <Box className="text-stone-400" size={24} />
                        <span className="absolute -bottom-1 -right-1 text-xs">⚠️</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-stone-200">Khoang Phế Liệu & Rác Thải</div>
                        <div className="text-[11px] text-stone-400 leading-tight">
                          Đáp án sai rơi vào đây, <strong>không nhận được vật phẩm nào</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

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
