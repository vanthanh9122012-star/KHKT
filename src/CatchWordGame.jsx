import React, { useState, useEffect } from 'react';
import { Star, Sparkles, Trophy, RotateCcw } from 'lucide-react';

const ALL_WORDS = [
  { emojis: '🌞 + 🌻', hint: 'Một loài hoa màu vàng luôn hướng về mặt trời', answer: 'SUNFLOWER' },
  { emojis: '🔥 + 🐶', hint: 'Món ăn nhanh nổi tiếng (Xúc xích kẹp bánh mì)', answer: 'HOTDOG' },
  { emojis: '🌧️ + 🏹', hint: 'Vòng cung nhiều màu sắc trên bầu trời sau cơn mưa', answer: 'RAINBOW' },
  { emojis: '❄️ + 👨', hint: 'Hình nhân làm bằng tuyết', answer: 'SNOWMAN' },
  { emojis: '👁️ + 📱', hint: 'Một sản phẩm công nghệ nổi tiếng của Apple', answer: 'IPHONE' },
  { emojis: '🌊 + 🍉', hint: 'Trái cây màu đỏ, vỏ xanh, rất mát vào mùa hè (Dưa hấu)', answer: 'WATERMELON' },
  { emojis: '🍯 + 🐝', hint: 'Con vật hút mật hoa (Ong mật)', answer: 'HONEYBEE' },
  { emojis: '👨 + 🦇', hint: 'Siêu anh hùng người dơi', answer: 'BATMAN' },
  { emojis: '☀️ + 👓', hint: 'Vật dụng đeo bảo vệ mắt khỏi ánh nắng', answer: 'SUNGLASSES' },
  { emojis: '🐮 + 👦', hint: 'Người chăn bò ở miền Tây nước Mỹ (Cao bồi)', answer: 'COWBOY' },
  { emojis: '🌟 + 🐟', hint: 'Sinh vật biển có 5 cánh (Sao biển)', answer: 'STARFISH' },
  { emojis: '🌲 + 🍎', hint: 'Trái dứa (Thơm)', answer: 'PINEAPPLE' },
  { emojis: '🔵 + 🍓', hint: 'Quả việt quất', answer: 'BLUEBERRY' },
  { emojis: '🍳 + 🍰', hint: 'Bánh kếp nướng chảo', answer: 'PANCAKE' },
  { emojis: '🌙 + 💡', hint: 'Ánh sáng của mặt trăng', answer: 'MOONLIGHT' },
  { emojis: '🚪 + 🔔', hint: 'Chuông gắn ở cửa nhà', answer: 'DOORBELL' },
  { emojis: '📚 + 🐛', hint: 'Chỉ người cực kỳ thích đọc sách (Mọt sách)', answer: 'BOOKWORM' },
  { emojis: '🦶 + ⚽', hint: 'Môn thể thao vua (Bóng đá)', answer: 'FOOTBALL' },
  { emojis: '🧠 + 🌩️', hint: 'Phương pháp động não, tập hợp ý tưởng', answer: 'BRAINSTORM' },
  { emojis: '⏳ + 🍷', hint: 'Đồng hồ cát', answer: 'HOURGLASS' },
  { emojis: '🌊 + 🐎', hint: 'Sinh vật biển nhỏ giống con ngựa (Cá ngựa)', answer: 'SEAHORSE' },
  { emojis: '🔥 + 🪰', hint: 'Con đom đóm', answer: 'FIREFLY' },
  { emojis: '🧈 + 🪰', hint: 'Con bướm', answer: 'BUTTERFLY' },
  { emojis: '❄️ + 🏂', hint: 'Ván trượt tuyết', answer: 'SNOWBOARD' },
  { emojis: '🐷 + 🏦', hint: 'Ống heo tiết kiệm', answer: 'PIGGYBANK' },
  { emojis: '🕸️ + 👨', hint: 'Siêu anh hùng người nhện', answer: 'SPIDERMAN' },
  { emojis: '🦷 + 🪥', hint: 'Bàn chải đánh răng', answer: 'TOOTHBRUSH' },
  { emojis: '🍿 + 🌽', hint: 'Bắp rang bơ', answer: 'POPCORN' },
  { emojis: '🛏️ + 🐛', hint: 'Con rệp giường', answer: 'BEDBUG' },
  { emojis: '🔥 + 🪵', hint: 'Củi lửa / Lò sưởi', answer: 'FIREWOOD' },
  { emojis: '🐎 + 👟', hint: 'Móng ngựa', answer: 'HORSESHOE' },
  { emojis: '☀️ + 🌸', hint: 'Hoa hướng dương (Sunflower)', answer: 'SUNFLOWER' }, // duplicate handled by shuffle
  { emojis: '💋 + 💄', hint: 'Son môi', answer: 'LIPSTICK' },
  { emojis: '👂 + 💍', hint: 'Khuyên tai', answer: 'EARRING' },
  { emojis: '🌍 + 🐛', hint: 'Con giun đất', answer: 'EARTHWORM' }
];

export default function CatchWordGame({ addReward }) {
  const [roundWords, setRoundWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [input, setInput] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });
  const [helpsLeft, setHelpsLeft] = useState(5);
  const [isRoundComplete, setIsRoundComplete] = useState(false);

  // Initialize a round of 10 words
  const startNewRound = () => {
    const shuffled = [...ALL_WORDS].sort(() => 0.5 - Math.random());
    // Get unique items up to 10
    const uniqueMap = new Map();
    shuffled.forEach(item => {
      if (!uniqueMap.has(item.answer) && uniqueMap.size < 10) {
        uniqueMap.set(item.answer, item);
      }
    });
    setRoundWords(Array.from(uniqueMap.values()));
    setCurrentWordIndex(0);
    setInput('');
    setMsg({ text: '', type: '' });
    setHelpsLeft(5);
    setIsRoundComplete(false);
  };

  useEffect(() => {
    startNewRound();
  }, []);

  const check = () => {
    if (!roundWords.length || isRoundComplete) return;

    if (input.trim().toUpperCase() === roundWords[currentWordIndex].answer) {
      setMsg({ text: 'Chính xác! Bạn nhận được +10 XP 🔥', type: 'success' });
      addReward(10, 2);
      
      setTimeout(() => {
        if (currentWordIndex + 1 < roundWords.length) {
          setMsg({ text: '', type: '' });
          setInput('');
          setCurrentWordIndex(prev => prev + 1);
        } else {
          setIsRoundComplete(true);
          setMsg({ text: '', type: '' });
          addReward(50, 10); // Bonus for completing the round
        }
      }, 1500);
    } else {
      setMsg({ text: 'Sai rồi, thử lại nhé!', type: 'error' });
    }
  };

  const useHelp = () => {
    if (helpsLeft > 0 && !isRoundComplete) {
      setHelpsLeft(prev => prev - 1);
      const answer = roundWords[currentWordIndex].answer;
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
      if (!nextLetter) setInput(answer);
    }
  };

  if (!roundWords.length) return null;

  if (isRoundComplete) {
    return (
      <div className="bg-surface rounded-3xl p-10 shadow-sm border border-gray-100 max-w-2xl mx-auto animate-fade-in text-center">
        <Trophy size={64} className="mx-auto text-yellow-400 mb-6 animate-bounce" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Hoàn thành xuất sắc!</h2>
        <p className="text-gray-600 mb-8 text-lg">Bạn đã vượt qua 10 câu hỏi của lượt này và nhận được thêm phần thưởng Bonus!</p>
        <button 
          onClick={startNewRound}
          className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-sky-600 transition shadow-lg shadow-sky-200 flex items-center justify-center gap-2 mx-auto text-lg"
        >
          <RotateCcw size={24} /> Chơi lượt mới (10 câu)
        </button>
      </div>
    );
  }

  const currentLevel = roundWords[currentWordIndex];

  return (
    <div className="bg-surface rounded-3xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Đuổi hình bắt chữ Tiếng Anh</h2>
      <div className="flex justify-between items-center mb-8">
        <span className="text-gray-500 font-bold bg-gray-100 px-4 py-1.5 rounded-full">
          Câu {currentWordIndex + 1} / {roundWords.length}
        </span>
        <div className="flex gap-1 items-center bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
          <Star size={16} className="text-yellow-500" />
          <span className="text-yellow-700 font-bold text-sm">{helpsLeft} trợ giúp</span>
        </div>
      </div>
      
      <div className="text-6xl md:text-7xl mb-6 select-none tracking-widest bg-gray-50 py-12 rounded-3xl shadow-inner border border-gray-100">
        {currentLevel.emojis}
      </div>
      
      <div className="mb-6">
        <p className="text-gray-500 italic font-medium text-sm mb-1">Gợi ý từ vựng:</p>
        <p className="text-indigo-600 font-bold text-lg">{currentLevel.hint}</p>
        <p className="text-gray-400 text-xs mt-2">({currentLevel.answer.length} ký tự)</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
        <input 
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && check()}
          placeholder="Nhập từ tiếng Anh..."
          className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 outline-none text-center font-bold text-2xl uppercase tracking-widest flex-1 max-w-sm shadow-sm"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
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
}
