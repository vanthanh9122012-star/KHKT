import React, { useState, useEffect, useCallback } from 'react';
import { Apple, Timer, RefreshCcw, CheckCircle2 } from 'lucide-react';

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
            <h3 className="text-5xl font-black text-white mb-2 tracking-widest text-red-400 drop-shadow-lg uppercase">You ' re Loser</h3>
            <p className="text-white font-medium mb-6">Hết giờ! Đáp án là {currentQ.a}</p>
            <button
  key={`${r}-${c}`}
  disabled={gameState !== 'playing'}
  onClick={() => handleCellClick(r, c)}
  className={`w-14 h-14 md:w-20 md:h-20 transition-all flex items-center justify-center relative overflow-visible
    ${isSelected(r, c) ? 'transform scale-110 drop-shadow-xl z-10' : 'hover:scale-105 drop-shadow-md hover:drop-shadow-lg'}
  `}
>
  <Apple 
    className={`absolute w-[130%] h-[130%] transition-colors ${isSelected(r, c) ? 'text-red-600 fill-red-500' : 'text-red-500 fill-red-400'}`}
    strokeWidth={1.5}
  />
  <span className="relative z-10 text-2xl md:text-3xl font-black text-white drop-shadow-md">{cell}</span>
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

        <div className="grid grid-cols-6 gap-3 md:gap-5 p-6 rounded-3xl bg-amber-100/50 border border-amber-200">
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
