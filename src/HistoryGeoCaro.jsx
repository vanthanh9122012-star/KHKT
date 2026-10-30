import React, { useState, useEffect, useRef } from 'react';
import { 
  Target, CheckCircle2, X, RefreshCw, Trophy, Sparkles, 
  MapPin, Compass, Flag, Award, ArrowRight, Play, Pause, 
  ChevronRight, ChevronLeft, Eye, Volume2, ShieldCheck, Flame,
  Scroll, BookOpen, Feather
} from 'lucide-react';
import { VIETNAM_LANDMARKS, CAMPAIGN_STAGES } from './data/vietnamLandmarksData';
import { CARO_QUESTIONS, getSmartCaroQuestion } from './data/caroQuestionsData';

const BOARD_SIZE = 8; // Bàn cờ 8x8 tương ứng 64 ô
const WIN_CONDITION = 5; // Cần 5 dấu liên tiếp thẳng hàng (Ngang, Dọc, Chéo) để thắng!
const REQUIRED_WINS_FOR_GRAND_VICTORY = 3; // Thắng 3 hiệp để đoạt ĐẠI THẮNG

// Âm thanh kèn chiến thắng (Web Audio API)
const playVictoryAudio = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const notes = [
      { f: 523.25, t: 0, d: 0.14 },    // C5
      { f: 659.25, t: 0.15, d: 0.14 }, // E5
      { f: 783.99, t: 0.30, d: 0.18 }, // G5
      { f: 1046.50, t: 0.50, d: 0.35 },// C6
      { f: 880.00, t: 0.90, d: 0.15 }, // A5
      { f: 1046.50, t: 1.08, d: 0.55 },// C6
      { f: 1318.51, t: 1.65, d: 0.70 } // E6
    ];
    notes.forEach(({ f, t, d }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, ctx.currentTime + t);
      gain.gain.setValueAtTime(0.25, ctx.currentTime + t);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + d);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + t);
      osc.stop(ctx.currentTime + t + d);
    });
  } catch (e) {
    console.warn("Audio error:", e);
  }
};

// Hiệu ứng pháo hoa bằng Canvas
function FireworksEffect({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#06b6d4', '#6366f1', '#ec4899', '#fbbf24', '#ffffff'];

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const createExplosion = (x, y) => {
      const count = 45;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
        const speed = Math.random() * 6 + 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          size: Math.random() * 3 + 2,
          gravity: 0.08,
          decay: Math.random() * 0.015 + 0.01
        });
      }
    };

    let launchTimer = 0;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      launchTimer++;
      if (launchTimer % 22 === 0) {
        const x = Math.random() * (canvas.width * 0.8) + canvas.width * 0.1;
        const y = Math.random() * (canvas.height * 0.5) + canvas.height * 0.1;
        createExplosion(x, y);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  if (!active) return null;
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
}

export default function HistoryGeoCaro({ addReward }) {
  // Bàn cờ 8x8 với ban đầu toàn bộ 64 ô màu trắng tinh
  const [board, setBoard] = useState(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [activeCell, setActiveCell] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [msg, setMsg] = useState({ text: 'Lượt của bạn: Vui lòng chọn 1 ô vuông trên bàn cờ để nhận câu hỏi!', type: 'info' });
  const [roundWinner, setRoundWinner] = useState(null); // 'user' | 'bot' | null
  const [winLine, setWinLine] = useState([]);
  
  // Tiến trình 3 Lượt Thắng để giành Đại Thắng
  const [userWinCount, setUserWinCount] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [isGrandVictory, setIsGrandVictory] = useState(false);

  // Cơ chế chống trùng lặp câu hỏi & trạng thái giải thích kiến thức
  const [usedQuestionIds, setUsedQuestionIds] = useState([]);
  const [answeredState, setAnsweredState] = useState(null); // { selectedOpt, isCorrect, explanation }

  // Màn hình Hành Trình Ảo sau khi chiến thắng
  const [showVirtualJourney, setShowVirtualJourney] = useState(false);
  const [activeStationIndex, setActiveStationIndex] = useState(0);
  const [isAutoTourRunning, setIsAutoTourRunning] = useState(false);

  // Thuật toán kiểm tra 5 ô liên tiếp thẳng hàng (Ngang, Dọc, Chéo)
  const checkWinner = (squares) => {
    // 1. Kiểm tra hàng ngang
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c <= BOARD_SIZE - WIN_CONDITION; c++) {
        const player = squares[r * BOARD_SIZE + c]?.player;
        if (!player) continue;
        let win = true;
        let line = [];
        for (let i = 0; i < WIN_CONDITION; i++) {
          const idx = r * BOARD_SIZE + c + i;
          if (squares[idx]?.player !== player) { win = false; break; }
          line.push(idx);
        }
        if (win) return { player, line };
      }
    }

    // 2. Kiểm tra hàng dọc
    for (let r = 0; r <= BOARD_SIZE - WIN_CONDITION; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        const player = squares[r * BOARD_SIZE + c]?.player;
        if (!player) continue;
        let win = true;
        let line = [];
        for (let i = 0; i < WIN_CONDITION; i++) {
          const idx = (r + i) * BOARD_SIZE + c;
          if (squares[idx]?.player !== player) { win = false; break; }
          line.push(idx);
        }
        if (win) return { player, line };
      }
    }

    // 3. Đường chéo xuôi (Top-Left to Bottom-Right)
    for (let r = 0; r <= BOARD_SIZE - WIN_CONDITION; r++) {
      for (let c = 0; c <= BOARD_SIZE - WIN_CONDITION; c++) {
        const player = squares[r * BOARD_SIZE + c]?.player;
        if (!player) continue;
        let win = true;
        let line = [];
        for (let i = 0; i < WIN_CONDITION; i++) {
          const idx = (r + i) * BOARD_SIZE + c + i;
          if (squares[idx]?.player !== player) { win = false; break; }
          line.push(idx);
        }
        if (win) return { player, line };
      }
    }

    // 4. Đường chéo ngược (Top-Right to Bottom-Left)
    for (let r = 0; r <= BOARD_SIZE - WIN_CONDITION; r++) {
      for (let c = WIN_CONDITION - 1; c < BOARD_SIZE; c++) {
        const player = squares[r * BOARD_SIZE + c]?.player;
        if (!player) continue;
        let win = true;
        let line = [];
        for (let i = 0; i < WIN_CONDITION; i++) {
          const idx = (r + i) * BOARD_SIZE + c - i;
          if (squares[idx]?.player !== player) { win = false; break; }
          line.push(idx);
        }
        if (win) return { player, line };
      }
    }

    return null;
  };

  const handleCellClick = (index) => {
    if (board[index] || roundWinner || !isXNext || activeCell !== null || answeredState !== null) return;

    setActiveCell(index);
    const landmark = VIETNAM_LANDMARKS[index] || VIETNAM_LANDMARKS[0];
    const { question, updatedUsedIds } = getSmartCaroQuestion(usedQuestionIds, landmark);
    setUsedQuestionIds(updatedUsedIds);
    setAnsweredState(null);

    const shuffledQ = { 
      ...question, 
      options: [...question.options].sort(() => 0.5 - Math.random()),
      targetLandmark: landmark
    };
    setCurrentQuestion(shuffledQ);
    setMsg({ 
      text: 'Trả lời đúng để chiếm ô vuông và hiển thị Địa danh này!', 
      type: 'info' 
    });
  };

  const handleAnswer = (option) => {
    if (!currentQuestion || answeredState !== null) return;

    const isCorrect = option === currentQuestion.correct;
    setAnsweredState({
      selectedOpt: option,
      isCorrect,
      explanation: currentQuestion.explanation || ''
    });

    if (isCorrect) {
      const landmark = VIETNAM_LANDMARKS[activeCell] || VIETNAM_LANDMARKS[0];
      const newBoard = [...board];
      // CHỈ KHI TRẢ LỜI ĐÚNG MỚI HIỆN LÊN ĐỊA DANH
      newBoard[activeCell] = { 
        player: 'X', 
        landmark: landmark.name, 
        province: landmark.province,
        region: landmark.region,
        image: landmark.image,
        desc: landmark.desc,
        history: landmark.history
      };
      setBoard(newBoard);
      
      const winnerData = checkWinner(newBoard);

      setTimeout(() => {
        setActiveCell(null);
        setCurrentQuestion(null);
        setAnsweredState(null);

        if (winnerData && winnerData.player === 'X') {
          setRoundWinner('user');
          setWinLine(winnerData.line);
          playVictoryAudio();

          const newWins = userWinCount + 1;
          setUserWinCount(newWins);

          if (newWins >= REQUIRED_WINS_FOR_GRAND_VICTORY) {
            setIsGrandVictory(true);
            setMsg({ text: '🎉 ĐẠI THẮNG TOÀN DIỆN! Bạn đã hoàn thành 3/3 lượt chơi và làm chủ dải đất hình chữ S (+150 XP, +30 💎)', type: 'success' });
            if (addReward) addReward(150, 30);
          } else {
            setMsg({ text: `🎉 CHIẾN THẮNG HIỆP ${currentRound}! Bạn đã đạt 5 ô thẳng hàng liên tiếp (+60 XP).`, type: 'success' });
            if (addReward) addReward(60, 10);
          }

          setTimeout(() => {
            setShowVirtualJourney(true);
          }, 1200);

        } else {
          setMsg({ text: 'Lượt của Máy (Đối thủ đang đi nước cờ)...', type: 'info' });
          setIsXNext(false);
        }
      }, 1800);

    } else {
      setMsg({ text: `Chưa chính xác! Bạn mất lượt cờ này. Hãy đọc giải thích bên dưới nhé!`, type: 'error' });
      setTimeout(() => {
        setActiveCell(null);
        setCurrentQuestion(null);
        setAnsweredState(null);
        setMsg({ text: 'Lượt của Máy...', type: 'info' });
        setIsXNext(false);
      }, 2500);
    }
  };

  // Nước đi của bot
  useEffect(() => {
    if (!isXNext && !roundWinner) {
      const timer = setTimeout(() => {
        const emptyCells = board.map((cell, idx) => cell === null ? idx : null).filter(val => val !== null);
        if (emptyCells.length === 0) {
          setRoundWinner('draw');
          setMsg({ text: 'Hòa nhau hiệp này!', type: 'info' });
          return;
        }

        let botMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        
        // Thử chặn chuỗi 4 ô của người chơi
        for (const idx of emptyCells) {
          const testBoard = [...board];
          testBoard[idx] = { player: 'X' };
          const winTest = checkWinner(testBoard);
          if (winTest && winTest.player === 'X') {
            botMove = idx;
            break;
          }
        }

        const landmark = VIETNAM_LANDMARKS[botMove] || VIETNAM_LANDMARKS[0];
        const newBoard = [...board];
        newBoard[botMove] = { 
          player: 'O', 
          landmark: landmark.name, 
          province: landmark.province,
          region: landmark.region,
          image: landmark.image,
          desc: landmark.desc,
          history: landmark.history
        };
        setBoard(newBoard);
        
        const winnerData = checkWinner(newBoard);
        if (winnerData && winnerData.player === 'O') {
          setRoundWinner('bot');
          setWinLine(winnerData.line);
          setMsg({ text: 'Rất tiếc! Máy đã thắng hiệp này.', type: 'error' });
        } else {
          setIsXNext(true);
          setMsg({ text: 'Lượt của Bạn (Chọn 1 ô vuông màu trắng để nhận câu hỏi)', type: 'info' });
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isXNext, board, roundWinner]);

  // Sang hiệp đấu tiếp theo
  const startNextRound = () => {
    setBoard(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
    setIsXNext(true);
    setActiveCell(null);
    setCurrentQuestion(null);
    setAnsweredState(null);
    setRoundWinner(null);
    setWinLine([]);
    setShowVirtualJourney(false);
    setIsAutoTourRunning(false);
    setActiveStationIndex(0);
    setCurrentRound(r => r + 1);
    setMsg({ text: `Bước vào Hiệp ${currentRound + 1}! Đạt 5 ô thẳng hàng để tiến tới Cúp Đại Thắng!`, type: 'info' });
  };

  // Khởi động lại toàn bộ
  const resetEntireGame = () => {
    setBoard(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
    setIsXNext(true);
    setActiveCell(null);
    setCurrentQuestion(null);
    setAnsweredState(null);
    setUsedQuestionIds([]);
    setRoundWinner(null);
    setWinLine([]);
    setUserWinCount(0);
    setCurrentRound(1);
    setIsGrandVictory(false);
    setShowVirtualJourney(false);
    setIsAutoTourRunning(false);
    setActiveStationIndex(0);
    setMsg({ text: 'Lượt của Bạn (Chọn 1 ô vuông màu trắng để nhận câu hỏi)', type: 'info' });
  };

  // Lọc các địa danh đã được chiếm đóng trong ván chơi
  const journeyStations = board
    .map((cell, idx) => cell && cell.player === 'X' ? { ...cell, cellIndex: idx, isWinningPiece: winLine.includes(idx) } : null)
    .filter(Boolean)
    .sort((a, b) => {
      if (a.isWinningPiece && !b.isWinningPiece) return -1;
      if (!a.isWinningPiece && b.isWinningPiece) return 1;
      return a.cellIndex - b.cellIndex;
    });

  // Tự động lướt hành trình
  useEffect(() => {
    let timer;
    if (isAutoTourRunning && journeyStations.length > 0) {
      timer = setInterval(() => {
        setActiveStationIndex(prev => (prev + 1) % journeyStations.length);
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isAutoTourRunning, journeyStations.length]);

  return (
    <div className="bg-[#fcf7ec] rounded-3xl p-5 sm:p-7 shadow-lg border-2 border-[#d5be8e] max-w-5xl mx-auto animate-fade-in relative font-sans">
      
      {/* Hiệu ứng pháo hoa khi chiến thắng */}
      <FireworksEffect active={roundWinner === 'user' || isGrandVictory} />

      {/* Header trò chơi */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#451a03] flex items-center gap-2.5 font-sans tracking-tight">
            <Scroll className="text-amber-800" size={28} />
            <span>Cờ Caro Lịch Sử - Giang Sơn Cổ Đồ</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#78350f]/80 mt-1 font-sans">
            Nghiên cứu danh thắng lịch sử • Ghi <strong>5 dấu thẳng hàng</strong> trong <strong>3 hiệp</strong> để đoạt Đại Thắng!
          </p>
        </div>

        {/* Tiến trình 3 Lượt Thắng */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f5e9c9] border border-[#c4a46a] rounded-xl text-xs font-bold text-[#5c351f] shadow-sm font-sans">
            <Trophy size={16} className="text-amber-700" />
            <span>Chiến dịch: Thắng {userWinCount}/{REQUIRED_WINS_FOR_GRAND_VICTORY} Hiệp</span>
          </div>

          {journeyStations.length > 0 && (
            <button
              onClick={() => setShowVirtualJourney(true)}
              className="px-3 py-1.5 bg-[#451a03] hover:bg-[#5c2405] text-amber-100 text-xs font-bold rounded-xl border border-[#2b1002] transition cursor-pointer flex items-center gap-1 shadow-sm font-sans"
            >
              <Sparkles size={14} className="text-amber-300" />
              <span>Hành Trình Ảo ({journeyStations.length})</span>
            </button>
          )}

          <button 
            onClick={resetEntireGame}
            className="p-2 bg-[#f5e9c9] text-[#5c351f] rounded-full hover:bg-[#eddcb2] transition cursor-pointer border border-[#c4a46a] shadow-sm"
            title="Chơi lại ván mới"
          >
            <RefreshCw size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-7 items-start">
        
        {/* ========================================================================= */}
        {/* BÀN CỜ HÌNH DẠNG CUỘN VĂN BẢN / CHIẾU THƯ CỔ KÍNH HOÀI NIỆM              */}
        {/* ========================================================================= */}
        <div className="flex-1 max-w-lg mx-auto w-full relative select-none">
          
          {/* Trục cuộn trên bằng gỗ mun cổ kính */}
          <div className="relative z-20 flex items-center justify-between -mb-2 px-2 sm:px-3 drop-shadow-md">
            <div className="w-3 sm:w-3.5 h-6 sm:h-7 bg-gradient-to-r from-amber-800 via-amber-500 to-amber-900 rounded-l shadow border-y border-l border-amber-950 flex items-center justify-center">
              <div className="w-1 h-3 bg-amber-950/40 rounded-full"></div>
            </div>
            <div className="flex-1 h-4 sm:h-5 bg-gradient-to-b from-[#2b1609] via-[#522b13] to-[#201006] rounded-sm shadow-inner border border-[#1a0c05] flex items-center justify-center">
              <div className="w-4/5 h-0.5 bg-amber-600/25 rounded-full"></div>
            </div>
            <div className="w-3 sm:w-3.5 h-6 sm:h-7 bg-gradient-to-r from-amber-900 via-amber-500 to-amber-800 rounded-r shadow border-y border-r border-amber-950 flex items-center justify-center">
              <div className="w-1 h-3 bg-amber-950/40 rounded-full"></div>
            </div>
          </div>

          {/* Thân cuộn văn bản / chiếu thư cổ (Parchment Paper Body) */}
          <div className="relative p-3 sm:p-4 bg-gradient-to-b from-[#fbf3dc] via-[#f6ebce] to-[#eddcb2] rounded-sm border-2 border-[#b58b4c] shadow-[0_10px_25px_rgba(70,40,15,0.22),inset_0_0_35px_rgba(180,130,60,0.2)] overflow-hidden aspect-square">
            
            {/* LƯỚI 8x8: CÁC Ô VUÔNG (CHỈ HIỆN ĐỊA DANH KHI TRẢ LỜI ĐÚNG) */}
            <div className="grid grid-cols-8 gap-1 sm:gap-1.5 h-full w-full relative z-10">
              {board.map((cell, idx) => {
                const isSelected = activeCell === idx;
                const isWinPiece = winLine.includes(idx);
                const isUser = cell?.player === 'X';

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleCellClick(idx)}
                    disabled={cell !== null || roundWinner !== null || !isXNext || activeCell !== null}
                    className={`
                      relative flex flex-col items-center justify-center rounded font-sans font-bold transition-all duration-200 cursor-pointer overflow-hidden
                      ${!cell 
                        ? 'bg-white hover:bg-amber-50 hover:border-amber-500 shadow-[0_1px_2px_rgba(0,0,0,0.06)] border border-stone-200 hover:scale-[1.02]' 
                        : 'bg-white shadow-md border-2 border-amber-600'
                      }
                      ${isSelected ? 'bg-amber-100 ring-2 ring-amber-600 animate-pulse z-20 scale-105 shadow-lg' : ''}
                      ${isWinPiece ? 'bg-amber-200 ring-4 ring-amber-500 z-30 scale-110 shadow-xl animate-bounce' : ''}
                      h-full w-full
                    `}
                    style={{
                      backgroundImage: cell ? `url(${cell.image})` : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* CHỈ KHI TRẢ LỜI ĐÚNG MỚI HIỆN LÊN ĐỊA DANH */}
                    {cell && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 backdrop-blur-[0.5px] p-0.5 animate-fade-in border border-amber-600/70">
                        <span className={`font-sans font-black text-sm sm:text-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] ${isUser ? 'text-red-400' : 'text-amber-300'}`}>
                          {cell.player}
                        </span>
                        <span 
                          className="text-[6px] sm:text-[7.5px] text-amber-100 bg-[#2b170c]/90 font-sans font-bold uppercase px-1 py-0.5 w-full text-center truncate leading-tight rounded-sm mt-0.5 border border-amber-700/50" 
                        >
                          {cell.landmark}
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Trục cuộn dưới bằng gỗ mun cổ kính */}
          <div className="relative z-20 flex items-center justify-between -mt-2 px-2 sm:px-3 drop-shadow-md">
            <div className="w-3 sm:w-3.5 h-6 sm:h-7 bg-gradient-to-r from-amber-800 via-amber-500 to-amber-900 rounded-l shadow border-y border-l border-amber-950 flex items-center justify-center">
              <div className="w-1 h-3 bg-amber-950/40 rounded-full"></div>
            </div>
            <div className="flex-1 h-4 sm:h-5 bg-gradient-to-b from-[#2b1609] via-[#522b13] to-[#201006] rounded-sm shadow-inner border border-[#1a0c05] flex items-center justify-center">
              <div className="w-4/5 h-0.5 bg-amber-600/25 rounded-full"></div>
            </div>
            <div className="w-3 sm:w-3.5 h-6 sm:h-7 bg-gradient-to-r from-amber-900 via-amber-500 to-amber-800 rounded-r shadow border-y border-r border-amber-950 flex items-center justify-center">
              <div className="w-1 h-3 bg-amber-950/40 rounded-full"></div>
            </div>
          </div>

          <div className="text-center mt-3 font-sans text-[#78350f] text-xs sm:text-sm">
            📜 Quy tắc: Đạt <strong>5 ô liên tiếp</strong> (Ngang, Dọc, Chéo) trong <strong>3 hiệp</strong> để đoạt Đại Thắng!
          </div>
        </div>

        {/* ========================================================================= */}
        {/* KHUNG CÂU HỎI & THÔNG BÁO                                                 */}
        {/* ========================================================================= */}
        <div className="flex-1 flex flex-col w-full">
          
          {/* Thanh thông báo lượt chơi phong cách thẻ bài */}
          <div className={`p-3.5 rounded-xl mb-5 font-sans font-bold flex items-center justify-center gap-2 text-center text-xs sm:text-sm shadow-sm transition-all ${
            msg.type === 'info' ? 'bg-[#faf2dd] text-[#5c351f] border border-[#c8a66d]' : 
            msg.type === 'success' ? 'bg-amber-100 text-amber-900 border border-amber-400' : 
            'bg-red-50 text-red-700 border border-red-300'
          }`}>
            {msg.type === 'success' && <Trophy size={18} className="text-amber-700" />}
            {msg.type === 'error' && <X size={18} className="text-red-600" />}
            {msg.type === 'info' && <Feather size={17} className="text-amber-800" />}
            <span>{msg.text}</span>
          </div>

          {/* Khung câu hỏi thử thách khi bấm vào 1 ô vuông */}
          {currentQuestion ? (
            <div className="bg-gradient-to-b from-[#fffef9] to-[#fcf5e3] p-5 sm:p-6 rounded-2xl border-2 border-[#b58b4c] shadow-lg shadow-amber-950/10 flex-1 flex flex-col font-sans animate-slide-up">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#e2cf9f]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-bold border ${
                    currentQuestion.subject === 'his' || currentQuestion.type === 'his'
                      ? 'bg-red-50 text-red-800 border-red-300' 
                      : 'bg-amber-50 text-amber-800 border-amber-300'
                  }`}>
                    {currentQuestion.subject === 'his' || currentQuestion.type === 'his' ? '📜 LỊCH SỬ' : '🧭 ĐỊA LÍ'}
                  </span>
                  {currentQuestion.grade && (
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-100/90 text-amber-900 border border-amber-300">
                      {currentQuestion.grade}
                    </span>
                  )}
                  {currentQuestion.targetLandmark && (
                    <span className="text-amber-900/80 text-xs italic font-medium flex items-center gap-1 bg-[#f7eed4] px-2 py-0.5 rounded border border-[#dac191]">
                      <MapPin size={12} className="text-amber-700" />
                      {currentQuestion.targetLandmark.name}
                    </span>
                  )}
                </div>
                {!answeredState && (
                  <button
                    type="button"
                    onClick={() => { setActiveCell(null); setCurrentQuestion(null); }}
                    className="p-1 text-amber-800/60 hover:text-amber-950 rounded-lg hover:bg-amber-100/60 transition"
                    title="Hủy chọn ô"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#3b1d08] mb-4 flex-1 leading-relaxed">
                {currentQuestion.text}
              </h3>

              {/* Lời giải thích tri thức lịch sử / địa lí khi đã trả lời */}
              {answeredState && (
                <div className={`p-3.5 mb-4 rounded-xl text-xs sm:text-sm font-sans leading-relaxed border animate-fade-in ${
                  answeredState.isCorrect 
                    ? 'bg-emerald-50 text-emerald-950 border-emerald-300' 
                    : 'bg-amber-50 text-amber-950 border-amber-300'
                }`}>
                  <div className="font-bold flex items-center gap-1.5 mb-1 text-xs">
                    {answeredState.isCorrect ? (
                      <span className="text-emerald-700 flex items-center gap-1 font-bold">
                        <CheckCircle2 size={15} /> Chính xác tuyệt đối!
                      </span>
                    ) : (
                      <span className="text-red-700 flex items-center gap-1 font-bold">
                        <X size={15} /> Đáp án đúng: {currentQuestion.correct}
                      </span>
                    )}
                  </div>
                  <p className="text-stone-800 italic mt-1">
                    💡 <strong>Tri thức lịch sử - địa lí:</strong> {answeredState.explanation}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                {currentQuestion.options.map((opt, idx) => {
                  let btnStyle = "border-[#d6be90] hover:border-[#8c6239] hover:bg-[#fbf3db] text-[#451a03]";
                  if (answeredState) {
                    if (opt === currentQuestion.correct) {
                      btnStyle = "bg-emerald-100 border-emerald-600 text-emerald-900 font-bold shadow-sm ring-2 ring-emerald-400";
                    } else if (opt === answeredState.selectedOpt && !answeredState.isCorrect) {
                      btnStyle = "bg-red-100 border-red-500 text-red-900 font-bold line-through";
                    } else {
                      btnStyle = "border-[#e0d3ba] text-stone-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={answeredState !== null}
                      onClick={() => handleAnswer(opt)}
                      className={`p-3.5 text-left rounded-xl border font-sans text-xs sm:text-sm transition cursor-pointer shadow-sm active:scale-98 ${btnStyle}`}
                    >
                      <span className="font-bold mr-2 text-[#991b1b]">{['A', 'B', 'C', 'D'][idx]}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-[#fcf8ee] rounded-2xl border-2 border-dashed border-[#d6be90] p-8 text-center font-sans min-h-[220px]">
              <div className="text-[#8c6239]">
                <Scroll size={46} className="mx-auto mb-3 opacity-60 text-amber-800" />
                <p className="font-bold text-[#451a03] text-sm sm:text-base">Khởi đầu hành trình trên Giang Sơn Cổ Đồ</p>
                <p className="text-xs sm:text-sm mt-1.5 text-[#78350f]/80 italic">
                  Vui lòng chọn 1 ô trên bản đồ để nhận câu hỏi điển tích lịch sử - địa lý.
                </p>
              </div>
            </div>
          )}

          {/* Nút hành động chuyển Hiệp khi thắng */}
          {roundWinner === 'user' && !isGrandVictory && (
            <div className="mt-4 p-4 bg-[#fdf5df] rounded-2xl border-2 border-amber-400 text-center space-y-2 animate-fade-in font-sans shadow-sm">
              <p className="text-xs sm:text-sm font-bold text-[#5c351f]">
                Khải hoàn Hiệp {currentRound}! Hãy tiếp tục tiến quân để giành trọn vẹn Cúp Đại Thắng trong 3 lượt chơi.
              </p>
              <button
                type="button"
                onClick={startNextRound}
                className="w-full py-3 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 text-amber-100 font-bold text-sm rounded-xl shadow-md hover:brightness-110 transition flex items-center justify-center gap-1.5 cursor-pointer font-sans border border-amber-950"
              >
                <span>Tiến Sang Hiệp {currentRound + 1} Tiếp Theo</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Nút khi Đại thắng 3 Hiệp */}
          {isGrandVictory && (
            <div className="mt-4 p-5 bg-gradient-to-r from-[#854d0e] via-[#b45309] to-[#78350f] text-amber-100 rounded-2xl shadow-xl text-center space-y-2 animate-bounce border-2 border-amber-300 font-sans">
              <h4 className="text-base sm:text-lg font-black text-amber-200">🏆 ĐẠI THẮNG CHIẾN DỊCH GIANG SƠN CỔ ĐỒ!</h4>
              <button
                type="button"
                onClick={() => setShowVirtualJourney(true)}
                className="w-full py-2.5 bg-[#fefbee] text-[#78350f] font-bold text-xs sm:text-sm rounded-xl shadow hover:bg-amber-100 transition cursor-pointer font-sans border border-amber-400"
              >
                Khám Phá Hành Trình Ảo Xuyên Suốt Non Sông
              </button>
            </div>
          )}

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL: HÀNH TRÌNH ẢO XUYÊN VIỆT - TỔNG KẾT ĐỊA DANH & LỊCH SỬ HÀO HÙNG     */}
      {/* ========================================================================= */}
      {showVirtualJourney && (
        <div className="fixed inset-0 z-[999999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in">
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white p-4 sm:px-7 sm:py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white/20 text-yellow-300 flex items-center justify-center font-black text-xl shadow-inner flex-shrink-0">
                  🗺️
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-white">
                      Tổng Kết Sau Trận Đấu
                    </span>
                    <span className="text-xs text-sky-100">
                      {journeyStations.length} Trạm Dừng Chân Đã Mở Khóa
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                    Hành Trình Ảo: Khám Phá Địa Danh & Lịch Sử Việt Nam
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowVirtualJourney(false)}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-xl transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Sub-bar điều khiển Auto Tour */}
            <div className="bg-slate-50 p-2.5 px-4 sm:px-7 flex items-center justify-between border-b border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAutoTourRunning(!isAutoTourRunning)}
                  className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition cursor-pointer ${
                    isAutoTourRunning 
                      ? 'bg-amber-500 text-white shadow-sm' 
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  {isAutoTourRunning ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isAutoTourRunning ? 'Tạm Dừng Thuyết Minh' : '🚀 Chạy Tự Động Hành Trình (Auto Tour)'}</span>
                </button>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="text-slate-500 hidden sm:inline">
                  Đang xem trạm <strong>{activeStationIndex + 1}</strong> / {journeyStations.length}
                </span>
              </div>

              {/* Nút lùi/tiến trạm */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveStationIndex(prev => (prev - 1 + journeyStations.length) % journeyStations.length)}
                  className="p-1.5 bg-white text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-300 transition"
                  title="Trạm trước"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStationIndex(prev => (prev + 1) % journeyStations.length)}
                  className="p-1.5 bg-white text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-300 transition"
                  title="Trạm tiếp theo"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* NỘI DUNG HÀNH TRÌNH ẢO CHI TIẾT */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
              
              {journeyStations.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-xs">
                  Chưa có địa danh nào được cắm cờ trong ván này. Hãy trả lời đúng các câu hỏi để mở khóa hành trình!
                </div>
              ) : (() => {
                const currentStation = journeyStations[activeStationIndex] || journeyStations[0];

                return (
                  <div className="space-y-5">
                    
                    {/* THẺ CHI TIẾT ĐỊA DANH ĐANG XEM */}
                    <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-lg border border-slate-800 flex flex-col md:flex-row gap-5">
                      
                      {/* Ảnh minh họa địa danh */}
                      <div className="w-full md:w-2/5 flex-shrink-0 relative rounded-2xl overflow-hidden aspect-video md:aspect-auto shadow border border-white/10">
                        <img 
                          src={currentStation.image} 
                          alt={currentStation.landmark}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white shadow flex items-center gap-1">
                          <Flag size={11} className="text-yellow-300" />
                          <span>{currentStation.region}</span>
                        </div>
                        {currentStation.isWinningPiece && (
                          <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-xl text-[10px] font-black bg-amber-400 text-slate-950 text-center shadow">
                            ⭐ Nằm trong Chuỗi 5 Ô Thắng Trận!
                          </div>
                        )}
                      </div>

                      {/* Thông tin mô tả địa lý & giai đoạn lịch sử */}
                      <div className="flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold mb-1">
                            <MapPin size={14} />
                            <span>Tỉnh {currentStation.province}</span>
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold text-white">
                            {currentStation.landmark}
                          </h4>
                        </div>

                        {/* TÓM TẮT ĐỊA LÝ (DESCRIPTION) */}
                        <div className="bg-white/10 p-3 rounded-xl border border-white/10 space-y-1">
                          <span className="text-[10px] font-black uppercase tracking-wider text-sky-300 flex items-center gap-1">
                            <Compass size={13} />
                            <span>Tóm tắt Địa lý & Cảnh quan thiên nhiên:</span>
                          </span>
                          <p className="text-xs text-slate-200 leading-relaxed font-medium">
                            {currentStation.desc}
                          </p>
                        </div>

                        {/* KỂ VỀ GIAI ĐOẠN LỊCH SỬ HÀO HÙNG */}
                        <div className="bg-amber-400/10 p-3 rounded-xl border border-amber-300/20 space-y-1">
                          <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                            <Award size={13} />
                            <span>Giai đoạn & Dấu ấn Lịch sử hào hùng:</span>
                          </span>
                          <p className="text-xs text-amber-100 leading-relaxed font-medium">
                            {currentStation.history}
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* DẢI TIẾN TRÌNH LỘ TRÌNH DỌC BẮC NAM */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span>LỘ TRÌNH ĐỊA DANH ĐÃ XUẤT HIỆN TRONG LƯỢT CHƠI ({journeyStations.length} ĐIỂM):</span>
                        <span className="text-primary text-[11px]">Bấm vào từng trạm để xem</span>
                      </div>

                      <div className="flex gap-2 overflow-x-auto pb-2 pt-1 hide-scrollbar">
                        {journeyStations.map((st, sIdx) => {
                          const isActive = sIdx === activeStationIndex;
                          return (
                            <button
                              key={sIdx}
                              type="button"
                              onClick={() => {
                                setActiveStationIndex(sIdx);
                                setIsAutoTourRunning(false);
                              }}
                              className={`flex-shrink-0 p-2 rounded-xl border transition-all text-left flex items-center gap-2 cursor-pointer ${
                                isActive 
                                  ? 'bg-primary text-white border-primary shadow-sm scale-105' 
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-primary/50 hover:bg-sky-50/50'
                              }`}
                            >
                              <div className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center flex-shrink-0 ${
                                isActive ? 'bg-white text-primary' : 'bg-slate-200 text-slate-600'
                              }`}>
                                {sIdx + 1}
                              </div>
                              <div className="text-xs pr-1">
                                <strong className="block truncate max-w-[110px]">{st.landmark}</strong>
                                <span className={`text-[9px] block ${isActive ? 'text-sky-100' : 'text-slate-400'}`}>
                                  {st.province}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                );
              })()}

            </div>

            {/* Footer Modal Action */}
            <div className="p-3 sm:px-6 sm:py-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                ⭐ Tích lũy kiến thức qua mỗi bước đi trên dải đất non sông Việt Nam!
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {roundWinner === 'user' && !isGrandVictory && (
                  <button
                    type="button"
                    onClick={startNextRound}
                    className="flex-1 sm:flex-none px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow hover:brightness-110 transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Tiếp Tục Hiệp {currentRound + 1}</span>
                    <ArrowRight size={15} />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setShowVirtualJourney(false)}
                  className="flex-1 sm:flex-none px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer"
                >
                  Đóng Hành Trình
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
