import React, { useState } from 'react';
import { Gamepad2, Brain, FlaskConical, Trophy, Sparkles, Star, Target, CheckCircle2 } from 'lucide-react';
import HistoryGeoCaro from './HistoryGeoCaro';

const CatchWordGame = ({ addReward }) => {
  const levels = [
    { emojis: '🌞 + 🌻', hint: 'A yellow flower that turns to the sun', answer: 'SUNFLOWER' },
    { emojis: '🔥 + 🐶', hint: 'A popular fast food', answer: 'HOTDOG' },
    { emojis: '🌧️ + 🏹', hint: 'Colorful arc in the sky', answer: 'RAINBOW' },
    { emojis: '❄️ + 👨', hint: 'A figure made of snow', answer: 'SNOWMAN' },
    { emojis: '👁️ + 📱', hint: 'An Apple product', answer: 'IPHONE' }
  ];
  const [lvl, setLvl] = useState(0);
  const [input, setInput] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });
  const [helpsLeft, setHelpsLeft] = useState(3);

  const check = () => {
    if (input.trim().toUpperCase() === levels[lvl].answer) {
      setMsg({ text: 'Chính xác! Bạn nhận được +10 XP 🔥', type: 'success' });
      addReward(10, 2);
      setTimeout(() => {
        setMsg({ text: '', type: '' });
        setInput('');
        setLvl((lvl + 1) % levels.length);
      }, 2000);
    } else {
      setMsg({ text: 'Sai rồi, thử lại nhé!', type: 'error' });
    }
  };

  const useHelp = () => {
    if (helpsLeft > 0) {
      setHelpsLeft(prev => prev - 1);
      const answer = levels[lvl].answer;
      const currentInput = input.toUpperCase();
      let nextLetter = '';
      for (let i = 0; i < answer.length; i++) {
        if (currentInput[i] !== answer[i]) {
          nextLetter = answer[i];
          const newInput = answer.substring(0, i + 1);
          setInput(newInput);
          break;
        }
      }
      if (!nextLetter) setInput(answer); // Nếu đã đúng hết phần đầu thì điền full
    }
  };

  return (
    <div className="bg-surface rounded-3xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Đuổi hình bắt chữ Tiếng Anh</h2>
      <div className="flex justify-between items-center mb-8">
        <span className="text-gray-500 font-medium">Level {lvl + 1}/{levels.length}</span>
        <div className="flex gap-1 items-center bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
          <Star size={16} className="text-yellow-500" />
          <span className="text-yellow-700 font-bold text-sm">{helpsLeft} trợ giúp</span>
        </div>
      </div>
      
      <div className="text-7xl mb-8 select-none tracking-widest bg-gray-50 py-10 rounded-3xl shadow-inner border border-gray-100">
        {levels[lvl].emojis}
      </div>
      
      <p className="text-gray-500 mb-6 italic font-medium">Gợi ý: {levels[lvl].hint}</p>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <input 
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && check()}
          placeholder="Nhập từ tiếng Anh..."
          className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 outline-none text-center font-bold text-xl uppercase tracking-widest flex-1 max-w-sm shadow-sm"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <button 
          onClick={useHelp}
          disabled={helpsLeft === 0}
          className="px-6 py-4 bg-yellow-400 text-yellow-900 rounded-xl font-bold hover:bg-yellow-500 transition shadow-lg shadow-yellow-200/50 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <Sparkles size={20} /> Trợ giúp
        </button>
        <button 
          onClick={check}
          className="px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
        >
          Kiểm tra Đáp án
        </button>
      </div>

      {msg.text && (
        <div className={`mt-6 p-4 rounded-xl font-bold animate-bounce ${msg.type === 'success' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
          {msg.text}
        </div>
      )}
    </div>
  );
};

const MathSudoku = ({ addReward }) => {
  // Sudoku 4x4 đơn giản (Shidoku)
  const [board, setBoard] = useState([
    [3, '', 1, ''],
    ['', 1, '', 3],
    ['', 2, '', 1],
    [1, '', 2, '']
  ]);
  const solution = [
    [3, 4, 1, 2],
    [2, 1, 4, 3],
    [4, 2, 3, 1],
    [1, 3, 2, 4]
  ];
  const [msg, setMsg] = useState('');
  const [helpsLeft, setHelpsLeft] = useState(3);

  const handleChange = (r, c, val) => {
    if (val !== '' && !['1','2','3','4'].includes(val)) return;
    const newBoard = [...board];
    newBoard[r][c] = val === '' ? '' : parseInt(val);
    setBoard(newBoard);
  };

  const useHelp = () => {
    if (helpsLeft > 0) {
      setHelpsLeft(prev => prev - 1);
      const newBoard = [...board];
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
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
    for(let r=0; r<4; r++) {
      for(let c=0; c<4; c++) {
        if (board[r][c] === '') isFull = false;
        if (board[r][c] !== '' && board[r][c] !== solution[r][c]) {
          isCorrect = false;
        }
      }
    }
    
    if (!isFull) {
      setMsg('Vui lòng điền kín tất cả các ô!');
    } else if (isCorrect) {
      setMsg('Hoàn hảo! Bạn đã giải xong Sudoku +20 XP 🏆');
      addReward(20, 5);
    } else {
      setMsg('Có lỗi sai ở đâu đó. Quy tắc: Mỗi hàng, mỗi cột, và mỗi ô 2x2 phải chứa các số từ 1-4 không lặp lại.');
    }
  };

  return (
    <div className="bg-surface rounded-3xl p-8 shadow-sm border border-gray-100 max-w-lg mx-auto animate-fade-in flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Sudoku Toán học (4x4)</h2>
      <p className="text-gray-500 mb-6 text-center text-sm">Điền các số 1-4 sao cho không bị trùng lặp trên mỗi hàng, mỗi cột và mỗi khối 2x2.</p>
      
      <div className="flex justify-between items-center w-full mb-6">
        <span className="text-gray-500 font-medium"></span>
        <div className="flex gap-1 items-center bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
          <Star size={16} className="text-yellow-500" />
          <span className="text-yellow-700 font-bold text-sm">{helpsLeft} trợ giúp</span>
        </div>
      </div>

      <div className="bg-gray-800 p-2 rounded-xl shadow-xl">
        <div className="grid grid-cols-4 gap-1 bg-gray-400 p-1 rounded-lg">
          {board.map((row, r) => (
            row.map((cell, c) => {
              const isInitial = [
                [0,0], [0,2], [1,1], [1,3], [2,1], [2,3], [3,0], [3,2]
              ].some(pos => pos[0] === r && pos[1] === c);
              
              const borderRight = c === 1 ? 'border-r-4 border-gray-800' : '';
              const borderBottom = r === 1 ? 'border-b-4 border-gray-800' : '';
              
              return (
                <input 
                  key={`${r}-${c}`}
                  type="text"
                  maxLength={1}
                  value={cell}
                  onChange={(e) => handleChange(r, c, e.target.value)}
                  readOnly={isInitial}
                  className={`w-14 h-14 md:w-20 md:h-20 text-center font-bold text-2xl md:text-3xl outline-none transition-colors
                    ${isInitial ? 'bg-gray-200 text-gray-800 cursor-not-allowed' : 'bg-white text-indigo-600 focus:bg-indigo-50'}
                    ${borderRight} ${borderBottom}
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

const ScienceLab = ({ addReward }) => {
  const [slot1, setSlot1] = useState(null);
  const [slot2, setSlot2] = useState(null);
  const [result, setResult] = useState(null);

  const elements = [
    { id: 'water', icon: '💧', name: 'Nước' },
    { id: 'heat', icon: '🔥', name: 'Nhiệt độ' },
    { id: 'vinegar', icon: '🍷', name: 'Giấm' },
    { id: 'baking_soda', icon: '🧂', name: 'Baking Soda' },
    { id: 'seed', icon: '🌱', name: 'Hạt giống' },
    { id: 'light', icon: '☀️', name: 'Ánh sáng' },
    { id: 'acid', icon: '🧪', name: 'Axit' },
    { id: 'metal', icon: '🔩', name: 'Kim loại' },
  ];

  const combinations = {
    'water+heat': { icon: '☁️', name: 'Sự bay hơi (Vật lý)', desc: 'Khi nước được đun nóng đến 100°C, nó chuyển sang thể khí.' },
    'heat+water': { icon: '☁️', name: 'Sự bay hơi (Vật lý)', desc: 'Khi nước được đun nóng đến 100°C, nó chuyển sang thể khí.' },
    'vinegar+baking_soda': { icon: '🌋', name: 'Phản ứng sủi bọt (Hóa học)', desc: 'Giấm (Axit Axetic) phản ứng với Baking Soda tạo ra khí CO2.' },
    'baking_soda+vinegar': { icon: '🌋', name: 'Phản ứng sủi bọt (Hóa học)', desc: 'Giấm (Axit Axetic) phản ứng với Baking Soda tạo ra khí CO2.' },
    'seed+light': { icon: '🌿', name: 'Quang hợp & Nảy mầm (Sinh học)', desc: 'Cây sử dụng ánh sáng mặt trời để tổng hợp chất hữu cơ nuôi cây phát triển.' },
    'light+seed': { icon: '🌿', name: 'Quang hợp & Nảy mầm (Sinh học)', desc: 'Cây sử dụng ánh sáng mặt trời để tổng hợp chất hữu cơ nuôi cây phát triển.' },
    'acid+metal': { icon: '💥', name: 'Phản ứng giải phóng H2 (Hóa học)', desc: 'Axit tác dụng với kim loại giải phóng khí Hydro dễ cháy.' },
    'metal+acid': { icon: '💥', name: 'Phản ứng giải phóng H2 (Hóa học)', desc: 'Axit tác dụng với kim loại giải phóng khí Hydro dễ cháy.' },
  };

  const handleSelect = (el) => {
    if (!slot1) setSlot1(el);
    else if (!slot2 && el.id !== slot1.id) {
      setSlot2(el);
      checkCombo(slot1, el);
    }
  };

  const checkCombo = (e1, e2) => {
    const key = `${e1.id}+${e2.id}`;
    if (combinations[key]) {
      setResult(combinations[key]);
      addReward(15, 3);
    } else {
      setResult({ icon: '❓', name: 'Không có hiện tượng gì đặc biệt', desc: 'Thử kết hợp các nguyên liệu khác xem sao!' });
    }
  };

  const reset = () => {
    setSlot1(null);
    setSlot2(null);
    setResult(null);
  };

  return (
    <div className="bg-surface rounded-3xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Phòng thí nghiệm Lý - Hóa - Sinh</h2>
      <p className="text-gray-500 mb-10 text-center">Chọn 2 nguyên liệu để xem hiện tượng khoa học gì sẽ xảy ra nhé!</p>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-12">
        {/* Slot 1 */}
        <div className="w-32 h-32 rounded-3xl bg-gray-50 border-4 border-dashed border-gray-200 flex items-center justify-center text-5xl shadow-inner relative">
          {slot1 ? slot1.icon : <span className="text-gray-300">1</span>}
          {slot1 && <div className="absolute -bottom-8 text-sm font-bold text-gray-600 whitespace-nowrap">{slot1.name}</div>}
        </div>
        
        <span className="text-4xl font-bold text-gray-300">+</span>
        
        {/* Slot 2 */}
        <div className="w-32 h-32 rounded-3xl bg-gray-50 border-4 border-dashed border-gray-200 flex items-center justify-center text-5xl shadow-inner relative">
          {slot2 ? slot2.icon : <span className="text-gray-300">2</span>}
          {slot2 && <div className="absolute -bottom-8 text-sm font-bold text-gray-600 whitespace-nowrap">{slot2.name}</div>}
        </div>

        <span className="text-4xl font-bold text-gray-300">=</span>

        {/* Result */}
        <div className={`w-40 h-40 rounded-3xl flex items-center justify-center text-7xl shadow-xl transition-all duration-700
          ${result ? (result.icon === '❓' ? 'bg-gray-100 border border-gray-200' : 'bg-gradient-to-br from-green-400 to-emerald-600 text-white animate-bounce') : 'bg-gray-50 border border-gray-100'}
        `}>
          {result ? result.icon : ''}
        </div>
      </div>

      {result && (
        <div className={`p-6 rounded-2xl mb-10 text-center shadow-sm animate-fade-in ${result.icon === '❓' ? 'bg-gray-50' : 'bg-emerald-50 border border-emerald-100'}`}>
          <h3 className={`text-xl font-bold mb-2 ${result.icon === '❓' ? 'text-gray-600' : 'text-emerald-700'}`}>{result.name}</h3>
          <p className={result.icon === '❓' ? 'text-gray-500' : 'text-emerald-600'}>{result.desc}</p>
          {result.icon !== '❓' && <p className="mt-3 text-sm font-bold text-emerald-500 flex items-center justify-center gap-1"><Sparkles size={16}/> Nhận được +15 XP</p>}
        </div>
      )}

      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8">
        {elements.map(el => (
          <button
            key={el.id}
            onClick={() => handleSelect(el)}
            disabled={!!result || (slot1 && slot1.id === el.id)}
            className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-200 rounded-2xl hover:bg-sky-50 hover:border-sky-300 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
          >
            <span className="text-3xl">{el.icon}</span>
            <span className="text-xs font-bold text-gray-600">{el.name}</span>
          </button>
        ))}
      </div>

      <div className="text-center">
        <button 
          onClick={reset}
          className="px-6 py-2 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition"
        >
          Làm lại thí nghiệm
        </button>
      </div>
    </div>
  );
};

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
      desc: 'Rèn luyện tư duy logic và suy luận toán học qua lưới số 4x4.',
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
