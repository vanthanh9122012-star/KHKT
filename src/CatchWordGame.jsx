import React, { useState, useEffect } from 'react';
import { Star, Sparkles, Trophy, RotateCcw, ArrowLeft, RefreshCw, CheckCircle2, Flame, Layers } from 'lucide-react';
import { CATCH_WORD_TOPICS, getTopicWordsForToday } from './data/catchWordTopics';

export default function CatchWordGame({ addReward }) {
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [roundWords, setRoundWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [input, setInput] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });
  const [helpsLeft, setHelpsLeft] = useState(5);
  const [isRoundComplete, setIsRoundComplete] = useState(false);
  const [roundScore, setRoundScore] = useState(0);

  // Start a new 10-question round for the selected topic
  const startNewRound = (topicId = selectedTopicId) => {
    if (!topicId) return;

    // Get today's dynamic pool (base 50+ plus daily rotating words)
    const wordsPool = getTopicWordsForToday(topicId);
    
    // Shuffle the pool
    const shuffled = [...wordsPool].sort(() => 0.5 - Math.random());
    
    // Pick 10 unique words
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
    setRoundScore(0);
    setIsRoundComplete(false);
  };

  const handleSelectTopic = (topicId) => {
    setSelectedTopicId(topicId);
    startNewRound(topicId);
  };

  const handleBackToTopics = () => {
    setSelectedTopicId(null);
    setRoundWords([]);
    setIsRoundComplete(false);
    setMsg({ text: '', type: '' });
    setInput('');
  };

  const check = () => {
    if (!roundWords.length || isRoundComplete) return;

    const currentWord = roundWords[currentWordIndex];
    if (input.trim().toUpperCase() === currentWord.answer) {
      setMsg({ text: 'Chính xác! Bạn nhận được +10 XP 🔥', type: 'success' });
      setRoundScore(prev => prev + 1);
      if (addReward) addReward(10, 2);
      
      setTimeout(() => {
        if (currentWordIndex + 1 < roundWords.length) {
          setMsg({ text: '', type: '' });
          setInput('');
          setCurrentWordIndex(prev => prev + 1);
        } else {
          setIsRoundComplete(true);
          setMsg({ text: '', type: '' });
          if (addReward) addReward(50, 10); // Bonus for completing the 10-question round
        }
      }, 1200);
    } else {
      setMsg({ text: 'Sai rồi, thử lại nhé!', type: 'error' });
    }
  };

  const useHelp = () => {
    if (helpsLeft > 0 && !isRoundComplete && roundWords.length) {
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

  const activeTopic = CATCH_WORD_TOPICS.find(t => t.id === selectedTopicId);

  // VIEW 1: TOPIC SELECTION SCREEN
  if (!selectedTopicId) {
    return (
      <div className="max-w-5xl mx-auto p-4 md:p-6 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 font-bold px-4 py-1.5 rounded-full text-sm mb-3">
            <Sparkles size={16} /> Game Học Từ Vựng Tiếng Anh
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
            Đuổi Hình Bắt Chữ - Chọn Chủ Đề
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Mỗi chủ đề sở hữu kho từ vựng phong phú <strong>50+ câu hỏi</strong> và tự động cập nhật từ mới mỗi ngày. Mỗi lượt chơi sẽ chọn ngẫu nhiên <strong>10 câu</strong> thử thách!
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {CATCH_WORD_TOPICS.map((topic) => (
            <div
              key={topic.id}
              onClick={() => handleSelectTopic(topic.id)}
              className={`group bg-white rounded-3xl p-6 border-2 ${topic.border} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Subtle top decoration */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${topic.color}`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl p-3 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform">
                    {topic.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200 flex items-center gap-1">
                    <Layers size={13} className="text-primary" /> 50+ từ vựng
                  </span>
                </div>

                <h3 className="text-xl font-black text-gray-800 mb-2 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  {topic.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <RefreshCw size={12} className="animate-spin" /> Đổi mới mỗi ngày
                </span>
                <button className={`px-4 py-2 rounded-xl text-white font-bold text-sm bg-gradient-to-r ${topic.color} shadow-md group-hover:shadow-lg transition`}>
                  Chơi ngay →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Daily Rotation Notice Card */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-500 text-white rounded-xl">
              <RefreshCw size={22} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Cơ chế làm mới kho từ vựng</h4>
              <p className="text-xs text-gray-500">
                Sau mỗi 24 giờ, hệ thống sẽ tự động bổ sung và luân chuyển các từ vựng mới vào từng chủ đề!
              </p>
            </div>
          </div>
          <span className="text-xs font-bold bg-white text-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-200">
            Hôm nay: {new Date().toLocaleDateString('vi-VN')}
          </span>
        </div>
      </div>
    );
  }

  // VIEW 2: ROUND COMPLETE SCREEN
  if (isRoundComplete) {
    return (
      <div className="bg-surface rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 max-w-2xl mx-auto animate-fade-in text-center my-6">
        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-100">
          <Trophy size={56} className="text-yellow-500 animate-bounce" />
        </div>
        <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold mb-3">
          Chủ đề: {activeTopic?.title}
        </div>
        <h2 className="text-3xl font-black text-gray-800 mb-3">Hoàn Thành Xuất Sắc 10 Câu!</h2>
        <p className="text-gray-600 mb-6 text-base max-w-md mx-auto">
          Bạn đã chinh phục thành công 10 câu hỏi của lượt này và tích lũy thêm <strong>+50 XP</strong> & <strong>+10 Ruby</strong>!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button 
            onClick={() => startNewRound()}
            className="px-6 py-3.5 bg-gradient-to-r from-primary to-sky-600 text-white rounded-2xl font-bold hover:shadow-lg transition shadow-primary/30 flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} /> Chơi tiếp lượt mới (10 câu khác)
          </button>
          <button 
            onClick={handleBackToTopics}
            className="px-6 py-3.5 bg-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} /> Chọn chủ đề khác
          </button>
        </div>
      </div>
    );
  }

  // VIEW 3: ACTIVE GAMEPLAY (10 QUESTIONS ROUND)
  if (!roundWords.length) return null;
  const currentLevel = roundWords[currentWordIndex];

  return (
    <div className="max-w-2xl mx-auto p-4 animate-fade-in">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={handleBackToTopics}
          className="flex items-center gap-1.5 text-sm font-bold text-gray-600 hover:text-primary bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-sm transition"
        >
          <ArrowLeft size={16} /> Đổi chủ đề
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-xl flex items-center gap-1">
            <span>{activeTopic?.icon}</span> {activeTopic?.title}
          </span>
          <div className="flex gap-1 items-center bg-yellow-50 px-3 py-1.5 rounded-xl border border-yellow-200">
            <Star size={15} className="text-yellow-500" />
            <span className="text-yellow-700 font-bold text-xs">{helpsLeft} trợ giúp</span>
          </div>
        </div>
      </div>

      {/* Main Game Card */}
      <div className="bg-surface rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 text-center relative overflow-hidden">
        {/* Progress bar */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-black tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
            Câu {currentWordIndex + 1} / {roundWords.length}
          </span>
          <div className="w-36 bg-gray-100 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-300 rounded-full"
              style={{ width: `${((currentWordIndex + 1) / roundWords.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Emojis Display */}
        <div className="text-6xl md:text-7xl mb-6 select-none tracking-widest bg-gradient-to-b from-gray-50 to-slate-100 py-10 rounded-3xl shadow-inner border border-gray-100 flex items-center justify-center min-h-[160px]">
          {currentLevel.emojis}
        </div>

        {/* Hint Section */}
        <div className="mb-6">
          <p className="text-gray-400 uppercase tracking-wider font-bold text-xs mb-1.5">Gợi ý từ vựng</p>
          <p className="text-indigo-700 font-bold text-base md:text-lg max-w-lg mx-auto leading-snug">
            {currentLevel.hint}
          </p>
          <p className="text-gray-400 text-xs font-medium mt-2">
            ({currentLevel.answer.length} chữ cái)
          </p>
        </div>

        {/* Input Field */}
        <div className="flex justify-center mt-6">
          <input 
            type="text" 
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && check()}
            placeholder="Nhập từ tiếng Anh..."
            autoFocus
            className="w-full max-w-md px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none text-center font-black text-2xl uppercase tracking-widest shadow-sm transition"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3.5 mt-6">
          <button 
            onClick={useHelp}
            disabled={helpsLeft === 0}
            className="px-6 py-3.5 bg-yellow-400 text-yellow-900 rounded-2xl font-bold hover:bg-yellow-500 transition shadow-md shadow-yellow-200/50 disabled:opacity-40 flex items-center justify-center gap-2 text-sm"
          >
            <Sparkles size={18} /> Gợi ý chữ ({helpsLeft})
          </button>
          <button 
            onClick={check}
            className="px-8 py-3.5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 text-sm"
          >
            <CheckCircle2 size={18} /> Kiểm tra Đáp án
          </button>
        </div>

        {/* Feedback Alert */}
        {msg.text && (
          <div className={`mt-6 p-4 rounded-2xl font-bold animate-bounce text-sm ${msg.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
            {msg.text}
          </div>
        )}
      </div>
    </div>
  );
}
