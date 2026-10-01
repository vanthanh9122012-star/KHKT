import React, { useState, useEffect, useCallback } from 'react';
import { Apple, Timer, RefreshCcw, CheckCircle2 } from 'lucide-react';

const QUESTIONS = [
  { q: "Mẹ mua 2kg táo, mỗi kg 15k. Mẹ phải trả bao nhiêu k?", a: "30" },
  { q: "Lớp có 40 học sinh, chia đều thành 8 tổ. Mỗi tổ có mấy học sinh?", a: "5" },
  { q: "Hôm nay là thứ 3 ngày 10. Thứ 3 tuần sau là ngày mấy?", a: "17" },
  { q: "Một quả dưa hấu bổ làm 4 miếng. 3 quả dưa hấu bổ được bao nhiêu miếng?", a: "12" },
  { q: "Có 5 chậu hoa, mỗi chậu nở 4 bông. Tổng cộng có bao nhiêu bông hoa?", a: "20" },
  { q: "Mua 3 quyển vở giá 10k/quyển và 1 cây bút 5k. Tổng tiền là bao nhiêu?", a: "35" },
  { q: "Ông năm nay 70 tuổi, cháu 10 tuổi. Hỏi ông hơn cháu bao nhiêu tuổi?", a: "60" }
];

const GRID_SIZE = 6;

const generateGrid = (answerStr) => {
  const grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
  
  // Place the answer randomly (horizontal or vertical)
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

  // Fill the rest with random digits
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
  const [qIndex, setQIndex] = useState(0);
  const [grid, setGrid] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameState, setGameState] = useState('playing'); // playing, won, lost

  const currentQ = QUESTIONS[qIndex];

  const initGame = useCallback(() => {
    setGrid(generateGrid(currentQ.a));
    setSelectedCells([]);
    setTimeLeft(30);
    setGameState('playing');
  }, [currentQ]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('lost');
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  const handleCellClick = (r, c) => {
    if (gameState !== 'playing') return;

    // Check if cell is already the last selected cell (to deselect)
    if (selectedCells.length > 0) {
      const last = selectedCells[selectedCells.length - 1];
      if (last.r === r && last.c === c) {
        setSelectedCells(prev => prev.slice(0, -1));
        return;
      }
    }

    // If empty, just add
    if (selectedCells.length === 0) {
      const newSel = [{r, c}];
      setSelectedCells(newSel);
      checkAnswer(newSel);
      return;
    }

    // Otherwise, check adjacency (including diagonals)
    const last = selectedCells[selectedCells.length - 1];
    const isAdjacent = Math.abs(last.r - r) <= 1 && Math.abs(last.c - c) <= 1;
    
    // Prevent selecting already selected cells (unless it's the last one for undo, handled above)
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
      addReward(20, 2); // XP, Coins
    } else if (formedString.length >= currentQ.a.length) {
      // If length exceeds or matches but is wrong, auto clear to try again
      setTimeout(() => setSelectedCells([]), 300);
    }
  };

  const nextQuestion = () => {
    if (qIndex < QUESTIONS.length - 1) {
      setQIndex(prev => prev + 1);
    } else {
      setQIndex(0); // loop back or end
    }
  };

  const isSelected = (r, c) => selectedCells.some(cell => cell.r === r && cell.c === c);

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
          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-lg">Câu {qIndex + 1}/{QUESTIONS.length}</span>
        </div>
        <div className={`flex items-center gap-2 font-black text-xl px-4 py-1 rounded-xl ${timeLeft <= 10 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-700'}`}>
          <Timer size={24} /> 00:{timeLeft.toString().padStart(2, '0')}
        </div>
      </div>

      {/* Question */}
      <div className="text-xl font-bold text-slate-800 text-center mb-8 bg-white p-6 rounded-2xl border-2 border-dashed border-amber-300 w-full">
        {currentQ.q}
      </div>

      {/* Grid */}
      <div className="relative">
        {gameState === 'lost' && (
          <div className="absolute inset-0 z-10 bg-black/60 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm animate-fade-in">
            <h3 className="text-5xl font-black text-white mb-2 tracking-widest text-red-400 drop-shadow-lg uppercase">You Loser</h3>
            <p className="text-white font-medium mb-6">Hết giờ! Đáp án là {currentQ.a}</p>
            <button onClick={initGame} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-bold transition transform hover:scale-105">
              <RefreshCcw size={20} /> Chơi lại
            </button>
          </div>
        )}

        {gameState === 'won' && (
          <div className="absolute inset-0 z-10 bg-white/80 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm animate-fade-in">
            <CheckCircle2 size={64} className="text-green-500 mb-4" />
            <h3 className="text-3xl font-black text-green-600 mb-2">Chính xác!</h3>
            <p className="text-slate-600 font-bold mb-6">+20 XP, +2 🪙</p>
            <button onClick={nextQuestion} className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition shadow-lg transform hover:scale-105">
              Câu tiếp theo
            </button>
          </div>
        )}

        <div className="grid grid-cols-6 gap-2 bg-amber-700 p-3 rounded-2xl shadow-inner">
          {grid.map((row, r) => (
            row.map((cell, c) => (
              <button
                key={`${r}-${c}`}
                disabled={gameState !== 'playing'}
                onClick={() => handleCellClick(r, c)}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-xl text-2xl font-black transition-all flex items-center justify-center relative overflow-hidden shadow-sm
                  ${isSelected(r, c) 
                    ? 'bg-amber-400 text-amber-900 border-b-4 border-amber-600 transform translate-y-1' 
                    : 'bg-amber-50 text-amber-800 border-b-4 border-amber-200 hover:bg-white hover:-translate-y-1'}
                `}
              >
                {/* Add a subtle apple shape behind the number */}
                {isSelected(r, c) && <Apple className="absolute text-amber-300 opacity-30 w-full h-full p-2" />}
                <span className="relative z-10">{cell}</span>
              </button>
            ))
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-4 w-full">
        <button onClick={initGame} className="flex-1 py-3 bg-white border-2 border-amber-200 text-amber-700 rounded-xl font-bold hover:bg-amber-50 transition">
          Chơi lại (Reset)
        </button>
      </div>

    </div>
  );
}
