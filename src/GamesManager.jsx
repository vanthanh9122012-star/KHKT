import React, { useState } from 'react';
import { Gamepad2, Brain, FlaskConical, Trophy, Sparkles, Star, Target, CheckCircle2 } from 'lucide-react';
import HistoryGeoCaro from './HistoryGeoCaro';
import MathSudoku from './MathSudoku';
import CatchWordGame from './CatchWordGame';
import ScienceLab from './ScienceLab';

export default function GamesManager({ addReward }) {
  const [activeGame, setActiveGame] = useState(null);

  const games = [
    { 
      id: 'word', 
      title: 'Đuổi hình bắt chữ', 
      desc: 'Học từ vựng Tiếng Anh qua các biểu tượng Emojis thú vị.',
      icon: <Brain size={32} className="text-pink-500" />,
      color: 'from-pink-100 to-rose-200',
      border: 'border-pink-200'
    },
    { 
      id: 'sudoku', 
      title: 'Sudoku Toán học', 
      desc: 'Rèn luyện tư duy logic và suy luận toán học qua lưới số 7x7.',
      icon: <Gamepad2 size={32} className="text-sky-500" />,
      color: 'from-sky-100 to-blue-200',
      border: 'border-sky-200'
    },
    { 
      id: 'science', 
      title: 'Khám phá Lý-Hóa-Sinh', 
      desc: 'Kết hợp các nguyên liệu để mô phỏng hiện tượng tự nhiên kỳ thú.',
      icon: <FlaskConical size={32} className="text-emerald-500" />,
      color: 'from-emerald-100 to-teal-200',
      border: 'border-emerald-200'
    },
    { 
      id: 'caro', 
      title: 'Cờ Caro Kiến Thức', 
      desc: 'Trả lời đúng câu hỏi Địa lý/Lịch sử có hình ảnh để điền X, sai mất lượt!',
      icon: <Target size={32} className="text-purple-500" />,
      color: 'from-purple-100 to-fuchsia-200',
      border: 'border-purple-200'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Trò Chơi Học Tập</h1>
          <p className="text-gray-500">Vừa học vừa chơi - Tích lũy kiến thức qua các thử thách tương tác đa môn.</p>
        </div>
        {activeGame && (
          <button 
            onClick={() => setActiveGame(null)} 
            className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 shadow-sm transition"
          >
            ← Quay lại Menu
          </button>
        )}
      </header>

      {!activeGame && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map(game => (
            <div 
              key={game.id}
              onClick={() => setActiveGame(game.id)}
              className={`bg-gradient-to-br ${game.color} rounded-3xl p-8 border ${game.border} shadow-lg cursor-pointer transform transition hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group`}
            >
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {game.icon}
              </div>
              <h2 className="text-2xl font-extrabold text-gray-800 mb-3">{game.title}</h2>
              <p className="text-gray-700 font-medium leading-relaxed">{game.desc}</p>
              
              <div className="mt-8 flex items-center text-gray-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                Chơi ngay →
              </div>
            </div>
          ))}
        </div>
      )}

      {activeGame === 'word' && <CatchWordGame addReward={addReward} />}
      {activeGame === 'sudoku' && <MathSudoku addReward={addReward} />}
      {activeGame === 'science' && <ScienceLab addReward={addReward} />}
      {activeGame === 'caro' && <HistoryGeoCaro addReward={addReward} />}
    </div>
  );
}
