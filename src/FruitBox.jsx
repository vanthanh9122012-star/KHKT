import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Apple, Timer, CheckCircle2, RefreshCcw, Trophy, Sparkles, 
  Lightbulb, ArrowRight, RotateCw, Brain, Award, Zap, AlertCircle
} from 'lucide-react';
import { 
  FRUIT_BOX_QUESTIONS, 
  QUESTIONS_PER_ROUND, 
  shuffleQuestions 
} from './data/fruitBoxData';

const GRID_SIZE = 10;
const QUESTION_TIME_LIMIT = 75; // 75 giây mỗi câu đố mẹo để suy nghĩ

// Sinh bảng quả táo 10x10 ngẫu nhiên chứa chuỗi đáp án (ngang hoặc dọc)
const generateGrid = (answerStr) => {
  const grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
  const isHorizontal = Math.random() > 0.5;
  let r, c;

  if (isHorizontal) {
    r = Math.floor(Math.random() * GRID_SIZE);
    c = Math.floor(Math.random() * (GRID_SIZE - answerStr.length + 1));
    for (let i = 0; i < answerStr.length; i++) {
      grid[r][c + i] = answerStr[i];
    }
  } else {
    r = Math.floor(Math.random() * (GRID_SIZE - answerStr.length + 1));
    c = Math.floor(Math.random() * GRID_SIZE);
    for (let i = 0; i < answerStr.length; i++) {
      grid[r + i][c] = answerStr[i];
    }
  }

  // Điền các ô trống bằng các chữ số ngẫu nhiên 0-9
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      if (grid[i][j] === '') {
        grid[i][j] = Math.floor(Math.random() * 10).toString();
      }
    }
  }
  return grid;
};

// Hàm lấy 10 câu hỏi mới không trùng lặp từ kho 75+ câu
const pickRoundQuestions = (usedIds = []) => {
  let available = FRUIT_BOX_QUESTIONS.filter(q => !usedIds.includes(q.id));
  
  // Nếu số câu còn lại ít hơn 10, reset lại kho nhưng giữ lại danh sách vừa chơi
  if (available.length < QUESTIONS_PER_ROUND) {
    available = shuffleQuestions(FRUIT_BOX_QUESTIONS);
  } else {
    available = shuffleQuestions(available);
  }

  const selected = available.slice(0, QUESTIONS_PER_ROUND);
  const newUsedIds = [...usedIds, ...selected.map(q => q.id)];
  return { questions: selected, newUsedIds };
};

export default function FruitBox({ addReward }) {
  // Quản lý vòng chơi và câu hỏi
  const [roundNumber, setRoundNumber] = useState(1);
  const [usedQuestionIds, setUsedQuestionIds] = useState([]);
  const [roundQuestions, setRoundQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);

  // Trạng thái lưới và tương tác
  const [grid, setGrid] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [gameState, setGameState] = useState('playing'); // 'playing' | 'won' | 'timeout' | 'round_complete'
  
  // Hỗ trợ người chơi
  const [showHint, setShowHint] = useState(false);
  const [roundScores, setRoundScores] = useState({ correct: 0, total: QUESTIONS_PER_ROUND });

  // Khởi tạo vòng chơi đầu tiên
  useEffect(() => {
    const { questions, newUsedIds } = pickRoundQuestions([]);
    setRoundQuestions(questions);
    setUsedQuestionIds(newUsedIds);
    setCurrentQIndex(0);
    setRoundScores({ correct: 0, total: QUESTIONS_PER_ROUND });
  }, []);

  const currentQ = roundQuestions[currentQIndex];

  // Khởi tạo bảng cho câu hỏi hiện tại
  const setupCurrentQuestion = useCallback(() => {
    if (!currentQ) return;
    setGrid(generateGrid(currentQ.a));
    setSelectedCells([]);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setShowHint(false);
    setGameState('playing');
  }, [currentQ]);

  useEffect(() => {
    setupCurrentQuestion();
  }, [setupCurrentQuestion]);

  // Bộ đếm thời gian
  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('timeout');
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  // Xử lý sang câu hỏi tiếp theo hoặc kết thúc vòng
  const handleProceedNext = (wasCorrect = true) => {
    if (wasCorrect) {
      setRoundScores(prev => ({ ...prev, correct: prev.correct + 1 }));
    }

    if (currentQIndex < QUESTIONS_PER_ROUND - 1) {
      // Sang câu tiếp theo trong 10 câu của vòng này
      setCurrentQIndex(prev => prev + 1);
    } else {
      // Đã hoàn thành cả 10 câu -> Chuyển sang màn hình Tổng kết Vòng
      setGameState('round_complete');
      // Thưởng lớn khi hoàn thành 1 vòng (100 XP, 10 Ruby)
      if (addReward) {
        addReward(100, 10);
      }
    }
  };

  // Sang vòng chơi mới với 10 câu hỏi hoàn toàn mới
  const startNextRound = () => {
    const nextRoundNum = roundNumber + 1;
    const { questions, newUsedIds } = pickRoundQuestions(usedQuestionIds);
    
    setRoundNumber(nextRoundNum);
    setRoundQuestions(questions);
    setUsedQuestionIds(newUsedIds);
    setCurrentQIndex(0);
    setRoundScores({ correct: 0, total: QUESTIONS_PER_ROUND });
    setGameState('playing');
  };

  // Đổi câu hỏi khác nếu gặp câu quá khó (lấy từ kho chưa dùng)
  const handleSwapQuestion = () => {
    const unpicked = FRUIT_BOX_QUESTIONS.filter(
      q => !usedQuestionIds.includes(q.id) && !roundQuestions.some(rq => rq.id === q.id)
    );
    const replacement = unpicked.length > 0 
      ? unpicked[Math.floor(Math.random() * unpicked.length)]
      : shuffleQuestions(FRUIT_BOX_QUESTIONS)[0];

    const updatedRound = [...roundQuestions];
    updatedRound[currentQIndex] = replacement;
    setRoundQuestions(updatedRound);
    setUsedQuestionIds(prev => [...prev, replacement.id]);
    setSelectedCells([]);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setShowHint(false);
  };

  // Làm mới vị trí các số trên bảng cho câu hiện tại
  const handleRemixGrid = () => {
    if (currentQ) {
      setGrid(generateGrid(currentQ.a));
      setSelectedCells([]);
    }
  };

  // Xử lý click chọn quả táo
  const handleCellClick = (r, c) => {
    if (gameState !== 'playing') return;

    // Bỏ chọn nếu click lại quả táo cuối cùng vừa chọn
    if (selectedCells.length > 0) {
      const last = selectedCells[selectedCells.length - 1];
      if (last.r === r && last.c === c) {
        setSelectedCells(prev => prev.slice(0, -1));
        return;
      }
    }

    // Chọn quả táo đầu tiên
    if (selectedCells.length === 0) {
      const newSel = [{ r, c }];
      setSelectedCells(newSel);
      checkAnswer(newSel);
      return;
    }

    // Nối quả táo tiếp theo (phải liền kề 8 hướng và chưa được chọn)
    const last = selectedCells[selectedCells.length - 1];
    const isAdjacent = Math.abs(last.r - r) <= 1 && Math.abs(last.c - c) <= 1;
    const isAlreadySelected = selectedCells.some(cell => cell.r === r && cell.c === c);

    if (isAdjacent && !isAlreadySelected) {
      const newSel = [...selectedCells, { r, c }];
      setSelectedCells(newSel);
      checkAnswer(newSel);
    }
  };

  // Kiểm tra chuỗi số nối được
  const checkAnswer = (cells) => {
    if (!currentQ) return;
    const formedString = cells.map(cell => grid[cell.r][cell.c]).join('');
    
    if (formedString === currentQ.a) {
      setGameState('won');
      if (addReward) addReward(20, 2);
    } else if (formedString.length >= currentQ.a.length) {
      // Độ dài đã đủ hoặc vượt nhưng sai -> tự động xóa sau 300ms
      setTimeout(() => setSelectedCells([]), 320);
    }
  };

  const isSelected = (r, c) => selectedCells.some(cell => cell.r === r && cell.c === c);

  // Màu sắc badge theo chủ đề câu hỏi
  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'Đố Mẹo IQ':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Tư Duy Ngược':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Bẫy Toán Học':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      case 'Logic Dãy Số':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Bẫy Chữ Số':
      case 'Bẫy Tỉ Lệ':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      default:
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    }
  };

  // ==========================================
  // MÀN HÌNH HOÀN THÀNH VÒNG CHƠI (10/10 CÂU)
  // ==========================================
  if (gameState === 'round_complete') {
    return (
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-amber-200 max-w-2xl mx-auto animate-fade-in flex flex-col items-center justify-center text-center">
        <div className="relative mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-tr from-yellow-400 to-amber-300 rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-bounce">
            <Trophy size={56} className="text-white drop-shadow-md" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 text-yellow-500 animate-spin" size={32} />
        </div>

        <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-200 text-amber-900 mb-3 border border-amber-300">
          Vòng {roundNumber} Xuất Sắc
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-amber-900 mb-3">
          Chúc Mừng! Vượt Ải Thành Công!
        </h2>
        
        <p className="text-slate-600 text-base sm:text-lg font-medium max-w-lg mb-6 leading-relaxed">
          Bạn đã giải mã trọn vẹn <span className="font-bold text-amber-700">10/10 câu hỏi đố mẹo IQ & bẫy tư duy</span> của Vòng {roundNumber}. Trí tuệ của bạn thật đáng nể!
        </p>

        {/* Khối phần thưởng vòng */}
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl p-5 mb-8 border border-amber-200 shadow-sm flex items-center justify-around">
          <div className="text-center">
            <p className="text-xs font-bold text-slate-400 uppercase">Thưởng Vượt Vòng</p>
            <p className="text-2xl font-black text-amber-600 flex items-center justify-center gap-1 mt-1">
              <Zap size={22} className="text-amber-500 fill-amber-500" /> +100 XP
            </p>
          </div>
          <div className="h-10 w-[1px] bg-amber-100"></div>
          <div className="text-center">
            <p className="text-xs font-bold text-slate-400 uppercase">Kho Báu Thu Thập</p>
            <p className="text-2xl font-black text-purple-600 flex items-center justify-center gap-1 mt-1">
              <Sparkles size={22} className="text-purple-500" /> +10 💎
            </p>
          </div>
          <div className="h-10 w-[1px] bg-amber-100"></div>
          <div className="text-center">
            <p className="text-xs font-bold text-slate-400 uppercase">Xếp Loại</p>
            <p className="text-xl font-black text-emerald-600 flex items-center justify-center gap-1 mt-1">
              <Award size={20} /> Siêu IQ
            </p>
          </div>
        </div>

        {/* Nút hành động */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button 
            onClick={startNextRound}
            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-4 rounded-2xl font-black transition-all shadow-lg shadow-orange-500/25 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg"
          >
            <span>Sang Vòng {roundNumber + 1} (10 Câu Mới)</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <p className="text-xs text-amber-700/70 mt-5 font-semibold">
          💡 Vòng tiếp theo sẽ mở ra 10 câu đố mẹo ngẫu nhiên mới từ kho 75+ câu hỏi!
        </p>
      </div>
    );
  }

  // ==========================================
  // GIAO DIỆN CHƠI GAME CHÍNH
  // ==========================================
  return (
    <div className="bg-gradient-to-b from-amber-50/80 to-orange-50/50 rounded-3xl p-4 sm:p-7 shadow-sm border border-amber-200/80 max-w-3xl mx-auto animate-fade-in flex flex-col items-center">
      
      {/* Header Game */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center shadow-md">
            <Apple size={28} className="text-white fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black text-slate-800">Fruit Box</h2>
              <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-amber-500 text-white shadow-sm">
                Vòng {roundNumber}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Nối các quả táo kề nhau để tìm số đáp án đố mẹo IQ</p>
          </div>
        </div>

        {/* Thanh đếm giờ & Nút đổi câu */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRemixGrid}
            title="Làm mới lại vị trí các quả táo"
            className="p-2.5 bg-white hover:bg-amber-100 text-slate-600 rounded-xl border border-amber-200 transition shadow-sm"
          >
            <RotateCw size={18} />
          </button>
          
          <div className={`flex items-center gap-1.5 font-black text-lg px-3.5 py-1.5 rounded-xl border transition-colors shadow-sm ${
            timeLeft <= 15 
              ? 'bg-red-50 text-red-600 border-red-300 animate-pulse' 
              : 'bg-white text-slate-700 border-amber-200'
          }`}>
            <Timer size={20} className={timeLeft <= 15 ? 'text-red-500' : 'text-amber-500'} /> 
            <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Progress Dots: 10 câu hỏi của vòng này */}
      <div className="w-full bg-white rounded-2xl p-3.5 mb-5 shadow-sm border border-amber-100">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-2">
          <span className="flex items-center gap-1.5">
            <Brain size={16} className="text-amber-500" />
            <span>Tiến độ Vòng {roundNumber}: <strong className="text-amber-600">Câu {currentQIndex + 1}/{QUESTIONS_PER_ROUND}</strong></span>
          </span>
          <span className="text-slate-400">
            Kho 75+ câu hỏi mẹo IQ xoay tua
          </span>
        </div>

        {/* 10 chấm tròn biểu thị 10 câu */}
        <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
          {Array.from({ length: QUESTIONS_PER_ROUND }).map((_, idx) => {
            const isCompleted = idx < currentQIndex;
            const isCurrent = idx === currentQIndex;
            return (
              <div 
                key={idx}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-emerald-500 shadow-sm' 
                    : isCurrent 
                      ? 'bg-amber-500 ring-2 ring-amber-300 animate-pulse' 
                      : 'bg-slate-200'
                }`}
                title={`Câu ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Câu hỏi & Thẻ chủ đề */}
      {currentQ && (
        <div className="w-full bg-white rounded-2xl p-5 mb-5 border-2 border-amber-200/90 shadow-sm relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-black border ${getCategoryBadgeClass(currentQ.category)}`}>
              {currentQ.category}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowHint(!showHint)}
                className={`text-xs font-bold px-3 py-1 rounded-full transition flex items-center gap-1 border ${
                  showHint 
                    ? 'bg-amber-100 text-amber-800 border-amber-300' 
                    : 'bg-slate-100 hover:bg-amber-50 text-slate-600 border-slate-200'
                }`}
              >
                <Lightbulb size={14} className={showHint ? 'text-amber-600 fill-amber-500' : 'text-slate-400'} />
                {showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}
              </button>

              <button
                onClick={handleSwapQuestion}
                className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition"
                title="Đổi câu hỏi mẹo khác từ kho"
              >
                Đổi câu khác ↻
              </button>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-800 text-center leading-relaxed px-2">
            {currentQ.q}
          </h3>

          {/* Gợi ý mở rộng */}
          {showHint && currentQ.hint && (
            <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium flex items-start gap-2 animate-fade-in">
              <Lightbulb size={18} className="text-amber-500 flex-shrink-0 mt-0.5 fill-amber-400" />
              <div>
                <strong className="font-bold">Mẹo tư duy: </strong>
                {currentQ.hint}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Lưới 10x10 Quả Táo */}
      <div className="relative w-full max-w-fit">
        
        {/* OVERLAY KHI TRẢ LỜI ĐÚNG */}
        {gameState === 'won' && currentQ && (
          <div className="absolute inset-0 z-30 bg-white/95 rounded-3xl p-6 flex flex-col items-center justify-center backdrop-blur-md animate-fade-in border-2 border-emerald-400 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 shadow-inner">
              <CheckCircle2 size={40} />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-emerald-600 mb-1">
              Chính Xác Tuyệt Đối!
            </h3>
            
            <div className="flex items-center gap-3 mb-4 text-sm font-black">
              <span className="text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">+20 XP</span>
              <span className="text-purple-600 bg-purple-50 px-3 py-1 rounded-lg border border-purple-200">+2 💎</span>
              <span className="text-slate-500 font-semibold">Đáp án: <strong className="text-slate-800 font-black">{currentQ.a}</strong></span>
            </div>

            {/* Bật mí tư duy & mẹo giải */}
            {currentQ.explanation && (
              <div className="w-full max-w-md bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 mb-5 text-left text-xs sm:text-sm text-emerald-950 leading-relaxed shadow-sm">
                <div className="flex items-center gap-1.5 font-black text-emerald-800 mb-1">
                  <Brain size={16} /> 💡 Bật Mí Tư Duy IQ:
                </div>
                {currentQ.explanation}
              </div>
            )}

            <button 
              onClick={() => handleProceedNext(true)} 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-7 py-3 rounded-full font-black text-base transition-all shadow-lg shadow-emerald-500/25 transform hover:scale-105 flex items-center gap-2"
            >
              <span>{currentQIndex < QUESTIONS_PER_ROUND - 1 ? `Câu Tiếp Theo (${currentQIndex + 2}/${QUESTIONS_PER_ROUND})` : `Xem Kết Quả Vòng ${roundNumber}`}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* OVERLAY KHI HẾT GIỜ */}
        {gameState === 'timeout' && currentQ && (
          <div className="absolute inset-0 z-30 bg-white/95 rounded-3xl p-6 flex flex-col items-center justify-center backdrop-blur-md animate-fade-in border-2 border-red-300 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-red-100 text-red-500 flex items-center justify-center mb-3">
              <AlertCircle size={40} />
            </div>
            
            <h3 className="text-2xl font-black text-red-600 mb-1">
              Hết Thời Gian!
            </h3>
            
            <p className="text-slate-500 text-xs sm:text-sm text-center mb-3">
              Câu đố mẹo này có đáp án là: <strong className="text-slate-800 text-base font-black">{currentQ.a}</strong>
            </p>

            {currentQ.explanation && (
              <div className="w-full max-w-md bg-amber-50 border border-amber-200 rounded-2xl p-3.5 mb-5 text-left text-xs text-amber-950 leading-relaxed">
                <span className="font-bold text-amber-800 block mb-0.5">💡 Lời giải mẹo:</span>
                {currentQ.explanation}
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setTimeLeft(45);
                  setGameState('playing');
                }}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full text-xs transition"
              >
                Thử lại (+45s)
              </button>
              <button 
                onClick={() => handleProceedNext(false)} 
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold text-xs transition shadow-md flex items-center gap-1.5"
              >
                <span>Bỏ qua & Sang câu tiếp</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Ma trận 10x10 ô quả táo */}
        <div className="grid grid-cols-10 gap-1 sm:gap-2 p-2.5 sm:p-4 rounded-3xl bg-amber-100/60 border border-amber-200 shadow-inner">
          {grid.map((row, r) => (
            row.map((cell, c) => {
              const selected = isSelected(r, c);
              return (
                <button
                  key={`${r}-${c}`}
                  disabled={gameState !== 'playing'}
                  onClick={() => handleCellClick(r, c)}
                  className={`w-7 h-7 sm:w-10 sm:h-10 md:w-11 md:h-11 transition-all flex items-center justify-center relative overflow-visible focus:outline-none rounded-xl
                    ${selected 
                      ? 'transform scale-110 drop-shadow-xl z-10' 
                      : 'hover:scale-105 drop-shadow-sm hover:drop-shadow-md active:scale-95'
                    }
                  `}
                >
                  <Apple 
                    className={`absolute w-[125%] h-[125%] transition-colors duration-200 ${
                      selected 
                        ? 'text-red-600 fill-red-500 filter drop-shadow' 
                        : 'text-red-500/90 fill-red-400'
                    }`}
                    strokeWidth={1.5}
                  />
                  <span className={`relative z-10 text-xs sm:text-base md:text-lg font-black drop-shadow-md transition-colors ${
                    selected ? 'text-yellow-100 font-extrabold' : 'text-white'
                  }`}>
                    {cell}
                  </span>
                </button>
              );
            })
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-between text-xs text-slate-400 font-medium mt-4 px-2">
        <span>💡 Nhấp vào các quả táo cạnh nhau (ngang/dọc/chéo) để nối số</span>
        <span>Mỗi vòng: 10 câu đố IQ</span>
      </div>

    </div>
  );
}
