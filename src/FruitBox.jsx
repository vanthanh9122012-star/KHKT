import React, { useState, useEffect, useCallback } from 'react';
import { Apple, Timer, CheckCircle2, RefreshCcw, Trophy } from 'lucide-react';

const QUESTIONS = [
  { q: "Một cửa hàng giảm giá 20% cho áo 500k. Mua 3 cái phải trả bao nhiêu? (k)", a: "1200" },
  { q: "Bể có 500 lít nước, mỗi phút bơm được 25 lít. Cần bao nhiêu phút để bơm đầy 1500 lít?", a: "40" },
  { q: "Dân số một thị trấn là 50000. Mỗi năm tăng 2%. Sau 1 năm dân số là bao nhiêu?", a: "51000" },
  { q: "Tìm x biết: 3x - 15 = 2x + 45. x bằng bao nhiêu?", a: "60" },
  { q: "Diện tích một hình chữ nhật có chu vi 100m, chiều dài gấp 4 lần chiều rộng? (m2)", a: "400" },
  { q: "Một xe lửa dài 150m chạy qua cây cầu 850m mất 50 giây. Vận tốc xe (m/s)?", a: "20" },
  { q: "Tính: (125 x 4) + 1500 / 3 - 500 = ?", a: "500" },
  { q: "Từ 1 đến 100 có bao nhiêu số chia hết cho 5?", a: "20" }
];

const GRID_SIZE = 10;

const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};


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

  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      if (grid[i][j] === '') {
        grid[i][j] = Math.floor(Math.random() * 10).toString();
      }
    }
  }
  return grid;
};

export default function FruitBox({ addReward }) {
  const [pendingQuestions, setPendingQuestions] = useState(() => shuffleArray(QUESTIONS));
  const [failedQuestions, setFailedQuestions] = useState([]);
  
  const [grid, setGrid] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameState, setGameState] = useState('playing'); // playing, won, complete_victory

  const currentQ = pendingQuestions[0];

  const initGame = useCallback(() => {
    if (!currentQ) return;
    setGrid(generateGrid(currentQ.a));
    setSelectedCells([]);
    setTimeLeft(60);
    setGameState('playing');
  }, [currentQ]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  // Timer logic
  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      // Timeout: Skip and add to failed queue
      handleNextQuestion(true);
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  const handleNextQuestion = (isFailed) => {
    let nextFailed = [...failedQuestions];
    if (isFailed) {
      nextFailed.push(currentQ);
      setFailedQuestions(nextFailed);
    }

    if (pendingQuestions.length > 1) {
      setPendingQuestions(prev => prev.slice(1));
    } else {
      // Queue empty
      if (nextFailed.length > 0) {
        // Restart with failed questions
        setPendingQuestions(nextFailed);
        setFailedQuestions([]);
      } else {
        // Complete victory!
        setGameState('complete_victory');
      }
    }
  };

  const handleCellClick = (r, c) => {
    if (gameState !== 'playing') return;

    if (selectedCells.length > 0) {
      const last = selectedCells[selectedCells.length - 1];
      if (last.r === r && last.c === c) {
        setSelectedCells(prev => prev.slice(0, -1));
        return;
      }
    }

    if (selectedCells.length === 0) {
      const newSel = [{r, c}];
      setSelectedCells(newSel);
      checkAnswer(newSel);
      return;
    }

    const last = selectedCells[selectedCells.length - 1];
    const isAdjacent = Math.abs(last.r - r) <= 1 && Math.abs(last.c - c) <= 1;
    const isAlreadySelected = selectedCells.some(cell => cell.r === r && cell.c === c);

    if (isAdjacent && !isAlreadySelected) {
      const newSel = [...selectedCells, {r, c}];
      setSelectedCells(newSel);
      checkAnswer(newSel);
    }
  };

  const checkAnswer = (cells) => {
    const formedString = cells.map(cell => grid[cell.r][cell.c]).join('');
    if (formedString === currentQ.a) {
      setGameState('won');
      if (addReward) addReward(20, 2);
    } else if (formedString.length >= currentQ.a.length) {
      setTimeout(() => setSelectedCells([]), 300);
    }
  };

  const isSelected = (r, c) => selectedCells.some(cell => cell.r === r && cell.c === c);

  if (gameState === 'complete_victory') {
    return (
      <div className="bg-amber-50 rounded-3xl p-8 shadow-sm border border-amber-200 max-w-2xl mx-auto animate-fade-in flex flex-col items-center justify-center min-h-[400px]">
        <Trophy size={80} className="text-yellow-500 mb-6 drop-shadow-xl" />
        <h2 className="text-4xl font-black text-amber-600 mb-4 text-center">Hoàn Thành Xuất Sắc!</h2>
        <p className="text-amber-800 text-lg font-medium text-center mb-8">Bạn đã giải mã thành công tất cả các câu hỏi Fruit Box!</p>
        <button 
          onClick={() => {
            setPendingQuestions(shuffleArray(QUESTIONS));
            setFailedQuestions([]);
          }} 
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold transition shadow-lg transform hover:scale-105 text-xl flex items-center gap-3"
        >
          <RefreshCcw size={24} /> Chơi Lại Từ Đầu
        </button>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 rounded-3xl p-8 shadow-sm border border-amber-200 max-w-2xl mx-auto animate-fade-in flex flex-col items-center">
      <div className="flex items-center gap-3 mb-2 text-amber-700">
        <Apple size={36} className="fill-amber-500" />
        <h2 className="text-3xl font-black">Fruit Box</h2>
      </div>
      <p className="text-amber-600 font-medium mb-6 text-center">Nối các chữ số kề nhau để tạo thành đáp án đúng!</p>

      {/* Status Bar */}
      <div className="w-full bg-white rounded-2xl p-4 mb-6 shadow-sm border border-amber-100 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-slate-700">
          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-lg">Còn lại: {pendingQuestions.length} câu</span>
          {failedQuestions.length > 0 && <span className="bg-red-100 text-red-700 px-3 py-1 rounded-lg">Cần làm lại: {failedQuestions.length}</span>}
        </div>
        <div className={`flex items-center gap-2 font-black text-xl px-4 py-1 rounded-xl transition-colors ${timeLeft <= 10 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-700'}`}>
          <Timer size={24} /> {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>
      </div>

      {/* Question */}
      {currentQ && (
        <div className="text-xl font-bold text-slate-800 text-center mb-8 bg-white p-6 rounded-2xl border-2 border-dashed border-amber-300 w-full min-h-[100px] flex items-center justify-center">
          {currentQ.q}
        </div>
      )}

      {/* Grid */}
      <div className="relative">
        {gameState === 'won' && (
          <div className="absolute inset-0 z-20 bg-white/80 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm animate-fade-in">
            <CheckCircle2 size={64} className="text-green-500 mb-4" />
            <h3 className="text-3xl font-black text-green-600 mb-2">Chính xác!</h3>
            <p className="text-slate-600 font-bold mb-6">+20 XP, +2 🪙</p>
            <button onClick={() => handleNextQuestion(false)} className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition shadow-lg transform hover:scale-105">
              Câu tiếp theo
            </button>
          </div>
        )}

        <div className="grid grid-cols-10 gap-1 sm:gap-2 p-3 sm:p-5 rounded-3xl bg-amber-100/50 border border-amber-200 w-full max-w-full overflow-hidden">
          {grid.map((row, r) => (
            row.map((cell, c) => (
              <button
                key={`${r}-${c}`}
                disabled={gameState !== 'playing'}
                onClick={() => handleCellClick(r, c)}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all flex items-center justify-center relative overflow-visible focus:outline-none
                  ${isSelected(r, c) ? 'transform scale-110 drop-shadow-xl z-10' : 'hover:scale-105 drop-shadow-md hover:drop-shadow-lg'}
                `}
              >
                <Apple 
                  className={`absolute w-[130%] h-[130%] transition-colors ${isSelected(r, c) ? 'text-red-600 fill-red-500' : 'text-red-500 fill-red-400'}`}
                  strokeWidth={1.5}
                />
                <span className="relative z-10 text-sm sm:text-base md:text-xl font-black text-white drop-shadow-md">{cell}</span>
              </button>
            ))
          ))}
        </div>
      </div>

    </div>
  );
}
