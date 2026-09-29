import React, { useState } from 'react';
import { Star, Sparkles } from 'lucide-react';

const MathSudoku = ({ addReward }) => {
  // Sudoku 7x7 (Latin Square)
  const [board, setBoard] = useState([
    [3, '', 4, '', 5, '', 1],
    ['', 4, '', 5, '', 7, ''],
    [6, '', 7, '', 1, '', 4],
    ['', 5, '', 6, '', 1, ''],
    [7, '', 1, '', 2, '', 5],
    ['', 1, '', 2, '', 4, ''],
    [4, '', 5, '', 6, '', 2]
  ]);
  const solution = [
    [3, 6, 4, 7, 5, 2, 1],
    [1, 4, 2, 5, 3, 7, 6],
    [6, 2, 7, 3, 1, 5, 4],
    [2, 5, 3, 6, 4, 1, 7],
    [7, 3, 1, 4, 2, 6, 5],
    [5, 1, 6, 2, 7, 4, 3],
    [4, 7, 5, 1, 6, 3, 2]
  ];
  const [msg, setMsg] = useState('');
  const [helpsLeft, setHelpsLeft] = useState(3);

  const handleChange = (r, c, val) => {
    if (val !== '' && !['1','2','3','4','5','6','7'].includes(val)) return;
    const newBoard = [...board];
    newBoard[r][c] = val === '' ? '' : parseInt(val);
    setBoard(newBoard);
  };

  const useHelp = () => {
    if (helpsLeft > 0) {
      setHelpsLeft(prev => prev - 1);
      const newBoard = [...board];
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          if (newBoard[r][c] === '' || newBoard[r][c] !== solution[r][c]) {
            newBoard[r][c] = solution[r][c];
            setBoard(newBoard);
            return;
          }
        }
      }
    }
  };

  const checkSudoku = () => {
    let isCorrect = true;
    let isFull = true;
    for(let r=0; r<7; r++) {
      for(let c=0; c<7; c++) {
        if (board[r][c] === '') isFull = false;
        if (board[r][c] !== '' && board[r][c] !== solution[r][c]) {
          isCorrect = false;
        }
      }
    }
    
    if (!isFull) {
      setMsg('Vui lòng điền kín tất cả các ô!');
    } else if (isCorrect) {
      setMsg('Hoàn hảo! Bạn đã giải xong Sudoku +30 XP 🏆');
      addReward(30, 5);
    } else {
      setMsg('Có lỗi sai ở đâu đó. Quy tắc: Mỗi hàng và mỗi cột phải chứa các số từ 1-7 không lặp lại.');
    }
  };

  return (
    <div className="bg-surface rounded-3xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto animate-fade-in flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Sudoku Toán học (7x7)</h2>
      <p className="text-gray-500 mb-6 text-center text-sm">Điền các số 1-7 sao cho không bị trùng lặp trên mỗi hàng và mỗi cột.</p>
      
      <div className="flex justify-between items-center w-full mb-6">
        <span className="text-gray-500 font-medium"></span>
        <div className="flex gap-1 items-center bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
          <Star size={16} className="text-yellow-500" />
          <span className="text-yellow-700 font-bold text-sm">{helpsLeft} trợ giúp</span>
        </div>
      </div>

      <div className="bg-gray-800 p-2 rounded-xl shadow-xl overflow-x-auto max-w-full">
        <div className="grid grid-cols-7 gap-[1px] bg-gray-400 p-[1px] rounded-lg">
          {board.map((row, r) => (
            row.map((cell, c) => {
              const initialBoard = [
                [3, '', 4, '', 5, '', 1],
                ['', 4, '', 5, '', 7, ''],
                [6, '', 7, '', 1, '', 4],
                ['', 5, '', 6, '', 1, ''],
                [7, '', 1, '', 2, '', 5],
                ['', 1, '', 2, '', 4, ''],
                [4, '', 5, '', 6, '', 2]
              ];
              const isInitial = initialBoard[r][c] !== '';
              
              return (
                <input 
                  key={`${r}-${c}`}
                  type="text"
                  maxLength={1}
                  value={cell}
                  onChange={(e) => handleChange(r, c, e.target.value)}
                  readOnly={isInitial}
                  className={`w-10 h-10 md:w-12 md:h-12 text-center font-bold text-xl md:text-2xl outline-none transition-colors
                    ${isInitial ? 'bg-gray-200 text-gray-800 cursor-not-allowed' : 'bg-white text-indigo-600 focus:bg-indigo-50'}
                  `}
                />
              )
            })
          ))}
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 w-full">
        <button 
          onClick={useHelp}
          disabled={helpsLeft === 0}
          className="px-6 py-3 bg-yellow-400 text-yellow-900 rounded-xl font-bold hover:bg-yellow-500 transition shadow-lg shadow-yellow-200/50 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <Sparkles size={20} /> Trợ giúp
        </button>
        <button 
          onClick={checkSudoku}
          className="flex-1 px-8 py-3 bg-sky-600 text-white rounded-xl font-bold hover:bg-sky-700 transition shadow-lg shadow-sky-200"
        >
          Kiểm tra Sudoku
        </button>
      </div>

      {msg && (
        <div className={`mt-6 p-4 rounded-xl font-medium text-center ${msg.includes('Hoàn hảo') ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
          {msg}
        </div>
      )}
    </div>
  );
};

export default MathSudoku;
