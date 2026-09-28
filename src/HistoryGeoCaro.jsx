import React, { useState } from 'react';
import { Target, CheckCircle2, X } from 'lucide-react';

const QUESTIONS = [
  { id: 1, type: 'geo', text: 'Quốc gia nào có diện tích lớn nhất thế giới?', options: ['Mỹ', 'Trung Quốc', 'Nga', 'Canada'], correct: 'Nga', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=400' },
  { id: 2, type: 'his', text: 'Chiến thắng Điện Biên Phủ diễn ra vào năm nào?', options: ['1945', '1954', '1975', '1930'], correct: '1954' },
  { id: 3, type: 'geo', text: 'Đỉnh núi cao nhất Việt Nam là?', options: ['Fansipan', 'Bạch Mã', 'Langbiang', 'Tây Côn Lĩnh'], correct: 'Fansipan', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=400' },
  { id: 4, type: 'his', text: 'Vị vua nào đã đổi tên nước ta thành Vạn Xuân?', options: ['Lý Bí', 'Ngô Quyền', 'Đinh Bộ Lĩnh', 'Lê Lợi'], correct: 'Lý Bí' },
  { id: 5, type: 'geo', text: 'Sông Amazon nằm ở châu lục nào?', options: ['Châu Á', 'Châu Phi', 'Châu Nam Mỹ', 'Châu Âu'], correct: 'Châu Nam Mỹ', image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&q=80&w=400' },
  { id: 6, type: 'his', text: 'Tác giả của "Hịch tướng sĩ" là ai?', options: ['Trần Quốc Tuấn', 'Lý Thường Kiệt', 'Nguyễn Trãi', 'Quang Trung'], correct: 'Trần Quốc Tuấn' },
  { id: 7, type: 'geo', text: 'Đại dương nào rộng nhất thế giới?', options: ['Thái Bình Dương', 'Đại Tây Dương', 'Ấn Độ Dương', 'Bắc Băng Dương'], correct: 'Thái Bình Dương' },
  { id: 8, type: 'his', text: 'Ai là người lãnh đạo cuộc khởi nghĩa Lam Sơn?', options: ['Lê Hoàn', 'Lê Lợi', 'Nguyễn Huệ', 'Trần Hưng Đạo'], correct: 'Lê Lợi' },
  { id: 9, type: 'geo', text: 'Thủ đô của nước Úc (Australia) là?', options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'], correct: 'Canberra' },
];

export default function HistoryGeoCaro({ addReward }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [activeCell, setActiveCell] = useState(null); // The cell currently being challenged
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [msg, setMsg] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleCellClick = (index) => {
    if (board[index] || gameOver || !isXNext || activeCell !== null) return;
    
    // Pick a random question
    const q = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    setCurrentQuestion(q);
    setActiveCell(index);
    setMsg('');
  };

  const botPlay = (currentBoard) => {
    const available = currentBoard.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
    if (available.length === 0) return;
    
    // Simple bot: pick random
    const randomIdx = available[Math.floor(Math.random() * available.length)];
    const newBoard = [...currentBoard];
    newBoard[randomIdx] = 'O';
    setBoard(newBoard);
    setIsXNext(true);

    const winner = checkWinner(newBoard);
    if (winner) {
      setGameOver(true);
      setMsg(winner === 'X' ? 'Bạn đã thắng! +30 XP 👑' : 'Bot đã thắng! Hãy thử lại nhé.');
    } else if (!newBoard.includes(null)) {
      setGameOver(true);
      setMsg('Hòa cờ!');
    }
  };

  const answerQuestion = (selectedOption) => {
    if (selectedOption === currentQuestion.correct) {
      // Đúng
      const newBoard = [...board];
      newBoard[activeCell] = 'X';
      setBoard(newBoard);
      setCurrentQuestion(null);
      setActiveCell(null);
      setIsXNext(false);
      setMsg('Chính xác! Bạn được đánh X.');
      
      const winner = checkWinner(newBoard);
      if (winner) {
        setGameOver(true);
        setMsg('Bạn đã thắng! +30 XP 👑');
        addReward(30, 5);
      } else if (!newBoard.includes(null)) {
        setGameOver(true);
        setMsg('Hòa cờ!');
      } else {
        // Bot plays after 1 second
        setTimeout(() => botPlay(newBoard), 1000);
      }
    } else {
      // Sai -> mất lượt
      setCurrentQuestion(null);
      setActiveCell(null);
      setIsXNext(false);
      setMsg('Sai rồi! Bạn mất lượt. Đến lượt Bot.');
      setTimeout(() => botPlay(board), 1500);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setMsg('');
    setActiveCell(null);
    setCurrentQuestion(null);
  };

  return (
    <div className="bg-surface rounded-3xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Cờ Caro Kiến Thức (Địa lý & Lịch sử)</h2>
      <p className="text-gray-500 mb-6">Trả lời đúng để đánh X, trả lời sai mất lượt (Bot đánh O)</p>

      {msg && (
        <div className={`mb-6 p-4 rounded-xl font-bold transition-all ${msg.includes('thắng') || msg.includes('Chính xác') ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
          {msg}
        </div>
      )}

      {!currentQuestion ? (
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 gap-2 bg-gray-300 p-2 rounded-xl mb-8">
            {board.map((cell, idx) => (
              <div 
                key={idx}
                onClick={() => handleCellClick(idx)}
                className={`w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg flex items-center justify-center text-4xl font-black cursor-pointer transition-all ${
                  cell === 'X' ? 'text-blue-500' : cell === 'O' ? 'text-rose-500' : 'hover:bg-gray-50'
                }`}
              >
                {cell}
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <span className={`px-4 py-2 rounded-full font-bold ${isXNext ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>Lượt của Bạn (X)</span>
            <span className={`px-4 py-2 rounded-full font-bold ${!isXNext ? 'bg-rose-100 text-rose-700' : 'bg-gray-100 text-gray-500'}`}>Lượt của Bot (O)</span>
          </div>

          {gameOver && (
            <button onClick={resetGame} className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200">
              Chơi lại
            </button>
          )}
        </div>
      ) : (
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl animate-fade-in text-left">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-blue-800 text-lg flex items-center gap-2">
              <Target size={20} /> Thử thách {currentQuestion.type === 'geo' ? 'Địa lý' : 'Lịch sử'}!
            </h3>
            <span className="text-sm font-medium text-blue-600">Ô số {activeCell + 1}</span>
          </div>
          
          {currentQuestion.image && (
            <img src={currentQuestion.image} alt="Minh họa" className="w-full h-40 object-cover rounded-xl mb-4 shadow-sm" />
          )}
          
          <p className="text-gray-800 font-medium mb-6 text-lg">{currentQuestion.text}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQuestion.options.map(opt => (
              <button 
                key={opt}
                onClick={() => answerQuestion(opt)}
                className="px-4 py-3 bg-white border-2 border-blue-100 text-gray-700 font-medium rounded-xl hover:border-blue-500 hover:bg-blue-50 transition text-left"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
