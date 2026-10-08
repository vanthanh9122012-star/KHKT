import React, { useState, useEffect } from 'react';
import { Trophy, Clock, Star, Medal, Users, AlertCircle, CheckCircle2, ChevronRight, Swords } from 'lucide-react';
import { QUIZ_DATA } from './data/quizData'; // Use existing quiz data for questions

const BOT_NAMES = [
  "Bảo Nam", "Hải Đăng", "Gia Bảo", "Khôi Nguyên", "Minh Khang", 
  "Thảo Phương", "Bích Ngọc", "Quỳnh Anh", "Diệp Chi", "Mai Lan",
  "Trọng Tấn", "Đức Huy", "Hoàng Việt", "Nhật Minh", "Thanh Hải",
  "Nguyệt Minh", "Thu Trà", "Trúc Đào", "Hương Ly"
];

// Combine all questions from quizData
const ALL_QUESTIONS = QUIZ_DATA.reduce((acc, qz) => [...acc, ...qz.questions], []);

const TournamentManager = ({ addReward, currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState('lobby'); // lobby, playing, roundResult, tournamentEnd
  const [round, setRound] = useState(1);
  const [participants, setParticipants] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [roundScore, setRoundScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const ROUND_NAMES = ["Sơ lọc", "Tuyển chọn", "Tứ kết", "Bán kết", "Chung kết"];
  const ADVANCE_COUNTS = [10, 8, 4, 2, 1]; // How many advance to next round

  useEffect(() => {
    // Check if today is a competition day
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth() + 1;
    
    // Allowed days: 1/1, 2/2, ..., 12/12 OR today for testing
    if (d === m || (d === 8 && m === 10) || (d === 9 && m === 10) || (d === 10 && m === 10)) {
      setIsOpen(true);
    }
  }, []);

  const startTournament = () => {
    const initialParticipants = BOT_NAMES.map((name, i) => ({
      id: `bot_${i}`,
      name: name,
      isBot: true,
      score: 0,
      totalScore: 0
    }));
    initialParticipants.push({
      id: 'player',
      name: currentUser?.username || 'Bạn',
      isBot: false,
      score: 0,
      totalScore: 0
    });
    setParticipants(initialParticipants);
    setRound(1);
    startRound(1, initialParticipants);
  };

  const startRound = (r, currentPlayers) => {
    setStage('playing');
    setRoundScore(0);
    setCurrentQIndex(0);
    setHasAnswered(false);
    setSelectedAnswer(null);
    setTimeLeft(10);

    // Pick 3 random questions for the round
    const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random());
    setCurrentQuestions(shuffled.slice(0, 3));
  };

  useEffect(() => {
    let timer;
    if (stage === 'playing' && timeLeft > 0 && !hasAnswered) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (stage === 'playing' && timeLeft === 0 && !hasAnswered) {
      handleAnswer(null); // Timeout
    }
    return () => clearTimeout(timer);
  }, [timeLeft, stage, hasAnswered]);

  const handleAnswer = (option) => {
    if (hasAnswered) return;
    setHasAnswered(true);
    setSelectedAnswer(option);

    const isCorrect = option === currentQuestions[currentQIndex].correct;
    if (isCorrect) {
      setRoundScore(prev => prev + 100 + (timeLeft * 10)); // Bonus for speed
    }

    setTimeout(() => {
      if (currentQIndex < 2) {
        setCurrentQIndex(prev => prev + 1);
        setHasAnswered(false);
        setSelectedAnswer(null);
        setTimeLeft(10);
      } else {
        finishRound();
      }
    }, 2000);
  };

  const finishRound = () => {
    // Calculate bot scores
    const updatedParticipants = participants.map(p => {
      if (!p.isBot) {
        return { ...p, score: roundScore, totalScore: p.totalScore + roundScore };
      }
      // Bots get random score between 50 and 350
      const botScore = Math.floor(Math.random() * 300) + 50;
      return { ...p, score: botScore, totalScore: p.totalScore + botScore };
    });

    // Sort by this round's score descending
    updatedParticipants.sort((a, b) => b.score - a.score);
    
    setParticipants(updatedParticipants);
    setStage('roundResult');
  };

  const nextRound = () => {
    const advanceCount = ADVANCE_COUNTS[round - 1];
    const advancedPlayers = participants.slice(0, advanceCount);
    
    const playerAdvanced = advancedPlayers.find(p => !p.isBot);

    if (!playerAdvanced) {
      // Player eliminated
      handleElimination(round);
      return;
    }

    if (round === 5) {
      // Player won the finals
      handleElimination(6); // 6 means absolute winner
      return;
    }

    setParticipants(advancedPlayers);
    setRound(prev => prev + 1);
    startRound(round + 1, advancedPlayers);
  };

  const handleElimination = (eliminatedAfterRound) => {
    setStage('tournamentEnd');
    
    // Determine placement based on the round they were eliminated IN.
    // If eliminatedAfterRound == 1 -> Top 20 (failed R1)
    // If eliminatedAfterRound == 2 -> Top 10 (failed R2)
    // If eliminatedAfterRound == 3 -> Top 8 (failed R3)
    // If eliminatedAfterRound == 4 -> Top 4 (failed Semi-final -> 3rd place usually)
    // If eliminatedAfterRound == 5 -> Failed Final -> 2nd place
    // If eliminatedAfterRound == 6 -> Won Final -> 1st place

    if (eliminatedAfterRound === 6) {
      addReward(500, 20, '🌟 Quán Quân Khóa Thi');
    } else if (eliminatedAfterRound === 5) {
      addReward(300, 10);
    } else if (eliminatedAfterRound === 4) {
      addReward(150, 5);
    }
  };

  if (!isOpen) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-slate-50">
        <Trophy size={80} className="text-slate-300 mb-6" />
        <h2 className="text-3xl font-black text-slate-700 mb-4">Cổng Không Gian Đã Đóng</h2>
        <p className="text-lg text-slate-500 max-w-lg">
          Trang thẻ cuộc thi liên trường chỉ mở cửa vào các ngày lễ đặc biệt trong tháng (5/5, 9/9, 10/10...). Vui lòng quay lại sau!
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto min-h-screen">
      {stage === 'lobby' && (
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
            <Trophy size={48} className="text-white" />
          </div>
          <h1 className="text-4xl font-black text-slate-800 mb-4">Giải Đấu Liên Trường</h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Cuộc thi <strong>Hỏi nhanh - Đáp lẹ</strong> quy tụ 20 thí sinh xuất sắc nhất. Vượt qua 5 vòng thi để giành lấy phần thưởng đặc quyền:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
              <h3 className="font-black text-amber-600 text-xl mb-2">Hạng 1</h3>
              <ul className="text-amber-800 font-medium space-y-1">
                <li>• 20 Ruby</li>
                <li>• Danh hiệu: 🌟 Quán Quân</li>
                <li>• 500 XP</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200">
              <h3 className="font-black text-slate-600 text-xl mb-2">Hạng 2</h3>
              <ul className="text-slate-700 font-medium space-y-1">
                <li>• 10 Ruby</li>
                <li>• Lời cổ vũ đặc biệt</li>
                <li>• 300 XP</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <h3 className="font-black text-orange-600 text-xl mb-2">Hạng 3</h3>
              <ul className="text-orange-800 font-medium space-y-1">
                <li>• 5 Ruby</li>
                <li>• Cơ hội phục thù</li>
                <li>• 150 XP</li>
              </ul>
            </div>
          </div>

          <button 
            onClick={startTournament}
            className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black rounded-full text-xl hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-1 transition-all"
          >
            Bắt đầu thi đấu ngay
          </button>
        </div>
      )}

      {stage === 'playing' && (
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-indigo-100 max-w-2xl mx-auto animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
            <div 
              className="h-full bg-indigo-500 transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / 10) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between items-center mb-8 mt-2">
            <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl font-bold">
              Vòng {round}: {ROUND_NAMES[round-1]}
            </div>
            <div className="flex items-center gap-2 text-rose-500 font-black text-xl">
              <Clock size={24} /> 00:{timeLeft.toString().padStart(2, '0')}
            </div>
          </div>

          <div className="mb-8">
            <span className="text-sm font-bold text-slate-400 mb-2 block uppercase tracking-wider">
              Câu hỏi {currentQIndex + 1}/3
            </span>
            <h2 className="text-2xl font-bold text-slate-800 leading-relaxed">
              {currentQuestions[currentQIndex]?.text}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestions[currentQIndex]?.options?.map((opt, i) => {
              let btnClass = "bg-slate-50 border-slate-200 text-slate-700 hover:bg-indigo-50 hover:border-indigo-200";
              
              if (hasAnswered) {
                if (opt === currentQuestions[currentQIndex].correct) {
                  btnClass = "bg-green-100 border-green-400 text-green-800";
                } else if (opt === selectedAnswer) {
                  btnClass = "bg-red-100 border-red-400 text-red-800";
                } else {
                  btnClass = "bg-slate-50 border-slate-200 text-slate-400 opacity-50";
                }
              }

              return (
                <button
                  key={i}
                  disabled={hasAnswered}
                  onClick={() => handleAnswer(opt)}
                  className={`p-4 text-left border-2 rounded-2xl font-bold transition-all ${btnClass}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {stage === 'roundResult' && (
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 max-w-2xl mx-auto animate-fade-in text-center">
          <h2 className="text-3xl font-black text-slate-800 mb-2">Kết quả Vòng {round}</h2>
          <p className="text-slate-500 mb-8 font-medium">Top {ADVANCE_COUNTS[round-1]} thí sinh sẽ được đi tiếp vào vòng trong</p>
          
          <div className="space-y-3 mb-8 text-left">
            {participants.map((p, i) => (
              <div 
                key={p.id} 
                className={`flex items-center justify-between p-4 rounded-xl border-2 ${
                  i < ADVANCE_COUNTS[round-1] 
                    ? (!p.isBot ? 'bg-indigo-50 border-indigo-200' : 'bg-green-50 border-green-100') 
                    : (!p.isBot ? 'bg-red-50 border-red-200 opacity-70' : 'bg-slate-50 border-slate-100 opacity-50')
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-black text-xl w-6 ${i < 3 ? 'text-amber-500' : 'text-slate-400'}`}>#{i+1}</span>
                  <span className={`font-bold ${!p.isBot ? 'text-indigo-700' : 'text-slate-700'}`}>{p.name} {!p.isBot && '(Bạn)'}</span>
                </div>
                <div className="font-black text-slate-700">{p.score} <span className="text-xs text-slate-400 font-medium">điểm</span></div>
              </div>
            ))}
          </div>

          <button 
            onClick={nextRound}
            className="px-10 py-4 bg-slate-800 text-white font-bold rounded-xl text-lg hover:bg-slate-900 transition-all w-full md:w-auto"
          >
            Tiếp tục
          </button>
        </div>
      )}

      {stage === 'tournamentEnd' && (
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-indigo-100 max-w-2xl mx-auto animate-fade-in text-center">
          {(() => {
            const playerIndex = participants.findIndex(p => !p.isBot);
            const isWinner = round === 5 && playerIndex === 0;
            const isRunnerUp = round === 5 && playerIndex === 1;
            const isThird = round === 4;

            if (isWinner) {
              return (
                <>
                  <div className="bg-amber-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Trophy size={64} className="text-amber-500" />
                  </div>
                  <h2 className="text-4xl font-black text-amber-600 mb-4">Nhà Vô Địch!</h2>
                  <p className="text-lg text-slate-600 mb-6 font-medium">Bạn đã xuất sắc đánh bại 19 đối thủ để giành vị trí Top 1!</p>
                  <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-2xl inline-block text-left mb-8">
                    <h4 className="font-bold text-amber-800 mb-2">Phần thưởng đã nhận:</h4>
                    <ul className="text-amber-700 font-medium space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle2 size={18}/> 20 Ruby</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={18}/> Danh hiệu: 🌟 Quán Quân</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={18}/> 500 XP</li>
                    </ul>
                  </div>
                </>
              );
            } else if (isRunnerUp) {
              return (
                <>
                  <div className="bg-slate-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Medal size={64} className="text-slate-500" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-700 mb-4">Á Quân (Hạng 2)</h2>
                  <p className="text-lg text-slate-600 mb-6 font-medium">Bạn đã làm rất tốt! Chỉ một chút xíu nữa thôi là chạm đến Cúp vàng. Hãy cố gắng ở lần thi sau!</p>
                  <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-2xl inline-block text-left mb-8">
                    <h4 className="font-bold text-slate-700 mb-2">Phần thưởng đã nhận:</h4>
                    <ul className="text-slate-600 font-medium space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle2 size={18}/> 10 Ruby</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={18}/> 300 XP</li>
                    </ul>
                  </div>
                </>
              );
            } else if (isThird) {
              return (
                <>
                  <div className="bg-orange-50 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Medal size={64} className="text-orange-500" />
                  </div>
                  <h2 className="text-4xl font-black text-orange-600 mb-4">Hạng 3 Chung cuộc</h2>
                  <p className="text-lg text-slate-600 mb-6 font-medium">Dừng bước ở Bán kết. Đừng nản chí, hãy rèn luyện thêm và phục thù ở giải sau nhé!</p>
                  <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-2xl inline-block text-left mb-8">
                    <h4 className="font-bold text-orange-800 mb-2">Phần thưởng khuyến khích:</h4>
                    <ul className="text-orange-700 font-medium space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle2 size={18}/> 5 Ruby</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={18}/> 150 XP</li>
                    </ul>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className="bg-rose-50 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <AlertCircle size={64} className="text-rose-400" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-700 mb-4">Bị Loại Ở Vòng {round}</h2>
                  <p className="text-lg text-slate-600 mb-8 font-medium">Cuộc thi rất khốc liệt. Hãy luyện tập thêm trong My Universe và Flashcard nhé!</p>
                </>
              );
            }
          })()}
          
          <div>
            <button 
              onClick={() => setStage('lobby')}
              className="px-8 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all"
            >
              Về Sảnh chờ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TournamentManager;
