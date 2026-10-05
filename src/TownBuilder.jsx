import React, { useState, useEffect } from 'react';
import { Map, CheckCircle2, Lock, Play, Check, Book, Brain, Star, Award, Compass, ArrowRight, X, Trophy } from 'lucide-react';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { INITIAL_TOWN } from './data/townData';

const SUBJECT_COLORS = {
  'Toán': 'text-blue-600 bg-blue-50 border-blue-200',
  'Văn': 'text-rose-600 bg-rose-50 border-rose-200',
  'Anh': 'text-emerald-600 bg-emerald-50 border-emerald-200',
  'Sử': 'text-amber-600 bg-amber-50 border-amber-200',
  'Địa': 'text-orange-600 bg-orange-50 border-orange-200',
  'Vật lý': 'text-purple-600 bg-purple-50 border-purple-200',
  'Hóa học': 'text-cyan-600 bg-cyan-50 border-cyan-200',
  'Sinh học': 'text-lime-600 bg-lime-50 border-lime-200',
};

// Isometric SVG components
const PlanetPhaseAsteroid = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(100,116,139,0.5)] animate-pulse">
    <circle cx="50" cy="50" r="30" fill="#475569" />
    <circle cx="40" cy="40" r="5" fill="#334155" />
    <circle cx="60" cy="55" r="7" fill="#334155" />
    <circle cx="45" cy="65" r="4" fill="#334155" />
  </svg>
);

const PlanetPhaseCore = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(245,158,11,0.5)] transform transition-transform hover:scale-105">
    <circle cx="50" cy="50" r="35" fill="#B45309" />
    <circle cx="50" cy="50" r="28" fill="#D97706" />
    <circle cx="50" cy="50" r="20" fill="#F59E0B" />
    <circle cx="40" cy="40" r="4" fill="#78350F" />
    <circle cx="60" cy="60" r="6" fill="#78350F" />
  </svg>
);

const PlanetPhaseAtmosphere = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_25px_rgba(56,189,248,0.5)] transform transition-transform hover:scale-105">
    <circle cx="50" cy="50" r="40" fill="#0EA5E9" />
    <path d="M 20 40 Q 50 20 80 40" fill="none" stroke="#BAE6FD" strokeWidth="4" strokeLinecap="round" />
    <path d="M 15 60 Q 50 80 85 60" fill="none" stroke="#BAE6FD" strokeWidth="4" strokeLinecap="round" />
    <path d="M 30 50 Q 50 40 70 50" fill="none" stroke="#7DD3FC" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const PlanetLevel1 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(34,197,94,0.6)] transform transition-transform hover:rotate-12">
    <circle cx="50" cy="50" r="42" fill="#3B82F6" />
    <path d="M 20 40 Q 30 20 50 30 T 70 20 Q 80 40 60 50 T 20 40" fill="#22C55E" />
    <path d="M 40 70 Q 50 90 70 80 T 90 60 Q 80 50 60 60 T 40 70" fill="#16A34A" />
    <circle cx="30" cy="65" r="8" fill="#22C55E" />
    <circle cx="75" cy="35" r="6" fill="#22C55E" />
    <path d="M 15 25 Q 50 0 85 25" fill="none" stroke="#EFF6FF" strokeWidth="2" strokeDasharray="4 4" opacity="0.5"/>
  </svg>
);

const PlanetLevel2 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_35px_rgba(168,85,247,0.6)] transform transition-transform hover:rotate-12">
    <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="#D8B4FE" strokeWidth="6" transform="rotate(-20 50 50)" />
    <ellipse cx="50" cy="50" rx="52" ry="20" fill="none" stroke="#C084FC" strokeWidth="2" transform="rotate(-20 50 50)" opacity="0.6"/>
    <circle cx="50" cy="50" r="35" fill="#A855F7" />
    <path d="M 18 40 Q 50 30 82 40" fill="none" stroke="#9333EA" strokeWidth="5" />
    <path d="M 16 55 Q 50 65 84 55" fill="none" stroke="#7E22CE" strokeWidth="7" />
    <path d="M 22 70 Q 50 75 78 70" fill="none" stroke="#6B21A8" strokeWidth="3" />
  </svg>
);

const PlanetLevel3 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_40px_rgba(6,182,212,0.7)] transform transition-transform hover:scale-110">
    <circle cx="50" cy="50" r="42" fill="#06B6D4" />
    <circle cx="50" cy="50" r="42" fill="url(#ice-grad)" opacity="0.5" />
    <path d="M 10 50 A 40 40 0 0 1 90 50 A 40 40 0 0 1 10 50" fill="none" stroke="#67E8F9" strokeWidth="2" strokeDasharray="5 5" />
    <path d="M 30 20 L 40 35 L 25 45 Z" fill="#CFFAFE" opacity="0.8" />
    <path d="M 60 70 L 75 60 L 80 80 Z" fill="#CFFAFE" opacity="0.8" />
    <path d="M 70 30 L 85 20 L 90 40 Z" fill="#A5F3FC" opacity="0.7" />
    <defs>
      <radialGradient id="ice-grad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#0891B2" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

const PlanetLevel4 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_50px_rgba(244,63,94,0.8)] transform transition-transform hover:rotate-90 hover:scale-110 duration-700">
    <defs>
      <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFE4E6" />
        <stop offset="40%" stopColor="#FDA4AF" />
        <stop offset="70%" stopColor="#F43F5E" />
        <stop offset="100%" stopColor="#9F1239" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#star-glow)" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="#FECDD3" strokeWidth="1" strokeDasharray="2 4" className="animate-spin-slow" />
    <path d="M 50 5 L 55 45 L 95 50 L 55 55 L 50 95 L 45 55 L 5 50 L 45 45 Z" fill="#FFF1F2" opacity="0.6" className="animate-pulse" />
  </svg>
);


export default function TownBuilder({ setActiveTab }) {
  const [houses, setHouses] = useState(INITIAL_TOWN);
  const [activeHouseIndex, setActiveHouseIndex] = useState(0);
  
  // Quiz Overlay State
  const [activeQuizRoom, setActiveQuizRoom] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedQuestions, setSubmittedQuestions] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!auth.currentUser) return;
    const loadTown = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists() && userDoc.data().townBuilder) {
          const savedTown = userDoc.data().townBuilder;
          // Merge with initial data to ensure questions are loaded if missing
          const merged = INITIAL_TOWN.map((initHouse, hi) => {
            const savedHouse = savedTown[hi];
            if (!savedHouse) return initHouse;
            return {
              ...initHouse,
              rooms: initHouse.rooms.map((initRoom, ri) => ({
                ...initRoom,
                completed: savedHouse.rooms[ri]?.completed || false
              }))
            };
          });
          setHouses(merged);
        }
      } catch (err) {
        console.error("Lỗi tải tiến độ thị trấn:", err);
      }
    };
    loadTown();
  }, []);

  const isHouseUnlocked = (index) => {
    if (index === 0) return true;
    const prevHouse = houses[index - 1];
    return prevHouse.rooms.every(r => r.completed);
  };

  const activeHouse = houses[activeHouseIndex];
  const completedRooms = activeHouse.rooms.filter(r => r.completed).length;
  const totalRooms = activeHouse.rooms.length;

  const handleRoomClick = (room) => {
    if (room.completed) return; // Đã xong thì không bắt làm lại
    setActiveQuizRoom(room);
    setUserAnswers({});
    setIsSubmitted(false);
    setSubmittedQuestions({});
    setScore(0);
  };

  const markRoomCompleted = () => {
    const newHouses = [...houses];
    const hIndex = newHouses.findIndex(h => h.id === activeHouse.id);
    const rIndex = newHouses[hIndex].rooms.findIndex(r => r.id === activeQuizRoom.id);
    
    newHouses[hIndex].rooms[rIndex].completed = true;
    setHouses(newHouses);
    setActiveQuizRoom(null);
    
    if (auth.currentUser) {
      setDoc(doc(db, 'users', auth.currentUser.uid), {
        townBuilder: newHouses
      }, { merge: true }).catch(err => console.error("Lỗi đồng bộ thị trấn:", err));
    }
  };

  const handleAnswerChange = (q, val) => {
    if (submittedQuestions[q.id]) return;
    setUserAnswers(prev => ({ ...prev, [q.id]: val }));
    
    if (q.type === 'mcq' || q.type === 'true_false') {
      submitSingleQuestion(q, val);
    }
  };

  const submitSingleQuestion = (q, val) => {
    setSubmittedQuestions(prev => ({ ...prev, [q.id]: true }));
    let isCorrect = false;
    if (val.trim().toLowerCase() === q.correct.toLowerCase()) {
      isCorrect = true;
    }
    
    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      const newMistake = { ...q, subject: q.subject || (activeQuizRoom ? activeQuizRoom.subject : (typeof currentQuiz !== 'undefined' ? currentQuiz.subject : 'Tổng hợp')), userAnswer: val, timestamp: new Date().toISOString() };
      const existing = JSON.parse(localStorage.getItem('study_app_mistakes') || '[]');
      localStorage.setItem('study_app_mistakes', JSON.stringify([...existing, newMistake]));
    }
  };

  const submitQuiz = () => {
    let newScore = 0;
    let newMistakes = [];
    activeQuizRoom.questions.forEach(q => {
      const uAns = userAnswers[q.id];
      if (!uAns) {
        newMistakes.push({ ...q, subject: q.subject || activeQuizRoom.subject || 'Tổng hợp', userAnswer: 'Không trả lời', timestamp: new Date().toISOString() });
        return;
      }
      
      let isCorrect = false;
      if ((q.type === 'mcq' || q.type === 'true_false') && uAns === q.correct) {
        isCorrect = true;
      } else if (q.type === 'fill_blank' && uAns.trim().toLowerCase() === q.correct.toLowerCase()) {
        isCorrect = true;
      }
      
      if (isCorrect) {
        newScore += 1;
      } else {
        newMistakes.push({ ...q, subject: q.subject || activeQuizRoom.subject || 'Tổng hợp', userAnswer: uAns, timestamp: new Date().toISOString() });
      }
    });
    
    // Lưu lỗi sai
    if (newMistakes.length > 0) {
      const existing = JSON.parse(localStorage.getItem('study_app_mistakes') || '[]');
      localStorage.setItem('study_app_mistakes', JSON.stringify([...existing, ...newMistakes]));
    }
    
    setScore(newScore);
    setIsSubmitted(true);
  };

  const getPlanetSvg = (completed, total, index) => {
    if (completed === 0) return <PlanetPhaseAsteroid />;
    if (completed <= 2) return <PlanetPhaseCore />;
    if (completed < total) return <PlanetPhaseAtmosphere />;
    
    if (index === 0) return <PlanetLevel1 />;
    if (index === 1) return <PlanetLevel2 />;
    if (index === 2) return <PlanetLevel3 />;
    return <PlanetLevel4 />;
  };

  const getPhaseName = (completed, total) => {
    if (completed === 0) return 'Tiểu hành tinh';
    if (completed <= 2) return 'Hình thành lõi';
    if (completed < total) return 'Tạo khí quyển';
    return 'Tiến hóa hoàn tất';
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl font-black text-gray-800 mb-3 flex items-center gap-3">
          <Map className="text-sky-500" size={32} /> My Universe</h1>
        <p className="text-gray-500 font-medium text-lg max-w-3xl">
          Giải các bài tập <span className="font-bold text-sky-600">Nâng Cao</span> theo chuyên đề để xây dựng các công trình. Kiến trúc sẽ ngày càng sang trọng!
        </p>
      </header>

      {/* Mindmap Town View */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[2.5rem] p-6 shadow-inner border border-sky-100 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" preserveAspectRatio="none">
           <path d="M -50 150 Q 150 50, 300 150 T 600 100 T 1000 200" fill="none" stroke="#3b82f6" strokeWidth="20" strokeLinecap="round" strokeDasharray="30 30" />
        </svg>

        <div className="relative z-10 flex flex-wrap justify-center gap-10 md:gap-20 items-center min-h-[300px] py-6">
          {houses.map((house, index) => {
            const unlocked = isHouseUnlocked(index);
            const comp = house.rooms.filter(r => r.completed).length;
            const tot = house.rooms.length;
            const isActive = index === activeHouseIndex;

            return (
              <div 
                key={house.id} 
                className="flex flex-col items-center relative group"
                onClick={() => unlocked && setActiveHouseIndex(index)}
              >
                {index < houses.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[100%] w-20 h-1.5 bg-sky-200/50 -z-10 transform -translate-y-1/2 rounded-full">
                    <div className={`h-full bg-sky-500 rounded-full transition-all duration-1000 ${comp === tot ? 'w-full' : 'w-0'}`}></div>
                  </div>
                )}

                <div className={`
                  w-40 h-40 md:w-48 md:h-48 relative cursor-pointer transition-all duration-300
                  ${!unlocked ? 'opacity-40 grayscale cursor-not-allowed' : 'hover:-translate-y-2'}
                  ${isActive ? 'scale-110 drop-shadow-2xl z-20' : 'scale-100'}
                `}>
                  {getPlanetSvg(comp, tot, index)}
                  
                  {!unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-slate-900/70 p-4 rounded-full text-white backdrop-blur-md">
                        <Lock size={28} />
                      </div>
                    </div>
                  )}
                  {unlocked && comp === tot && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg border-4 border-green-100 animate-bounce">
                      <CheckCircle2 size={24} />
                    </div>
                  )}
                </div>

                <div className={`mt-2 text-center p-3 rounded-2xl w-48 transition-all duration-300 ${isActive ? 'bg-white shadow-xl border-2 border-sky-400' : 'bg-white/50 backdrop-blur-sm shadow-sm border border-transparent'}`}>
                  <h3 className={`font-bold text-sm ${isActive ? 'text-sky-900' : 'text-gray-700'}`}>{house.title}</h3>
                  <div className="text-[11px] font-bold text-sky-600 mt-1 bg-sky-50 inline-block px-2 py-0.5 rounded-full">
                    {getPhaseName(comp, tot)}
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full mt-2.5 overflow-hidden">
                    <div 
                      className="bg-sky-500 h-full transition-all duration-700" 
                      style={{width: `${(comp/tot)*100}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inside the House: 8 Rooms */}
      <div className="mt-8 bg-white rounded-[2rem] p-8 shadow-sm border border-sky-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl -z-10 opacity-70 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-sky-100 pb-5 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Đang khám phá
              </span>
            </div>
            <h2 className="text-3xl font-black text-gray-800">{activeHouse ? activeHouse.title : houses[0].title}</h2>
            <p className="text-gray-500 mt-2 font-medium">Hoàn thành bài tập nâng cao ở mỗi phòng để xây dựng công trình!</p>
          </div>
          <div className="text-left md:text-right bg-sky-50 px-6 py-4 rounded-3xl border border-sky-100">
            <span className="text-4xl font-black text-sky-600">{activeHouse ? completedRooms : 0}<span className="text-2xl text-sky-300">/{activeHouse ? totalRooms : 8}</span></span>
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mt-1">Phòng đã xong</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {(activeHouse || houses[0]).rooms.map((room) => (
            <div 
              key={room.id}
              onClick={() => handleRoomClick(room)}
              className={`p-5 rounded-3xl border-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full
                ${room.completed 
                  ? 'border-green-300 bg-gradient-to-b from-green-50 to-white shadow-lg shadow-green-100/50' 
                  : 'border-slate-100 bg-white hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/50'
                }
              `}
            >
              <div className="flex justify-between items-center mb-4">
                <span className={`text-xs font-black uppercase tracking-wider border px-3 py-1.5 rounded-xl shadow-sm ${SUBJECT_COLORS[room.subject] || 'bg-slate-100 text-slate-600'}`}>
                  Phòng {room.subject}
                </span>
                {room.completed ? (
                  <div className="bg-green-500 text-white p-1 rounded-full shadow-sm"><Check size={16} strokeWidth={3} /></div>
                ) : (
                  <div className="bg-slate-100 text-slate-400 p-1 rounded-full"><Lock size={16} /></div>
                )}
              </div>
              
              <h3 className={`font-bold text-lg leading-tight mb-3 transition-colors ${room.completed ? 'text-green-800' : 'text-slate-800'}`}>
                {room.title}
              </h3>
              
              <div className={`p-4 rounded-2xl mb-4 flex-1 text-sm font-medium leading-relaxed border ${room.completed ? 'bg-white border-green-100 text-green-700' : 'bg-slate-50 border-slate-100 text-slate-500'}`}>
                <div className="flex items-center gap-1.5 mb-2 opacity-70">
                  <Brain size={14} />
                  <span className="text-[10px] font-black uppercase">Kiến thức cốt lõi</span>
                </div>
                {room.knowledge}
              </div>
              
              <button 
                className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all mt-auto shadow-sm
                  ${room.completed 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-sky-500 text-white hover:bg-sky-600 hover:shadow-md hover:shadow-sky-200'
                  }
                `}
              >
                {room.completed ? (
                  <>Đã học xong</>
                ) : (
                  <>Vào học ngay <ArrowRight size={16} /></>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

            {/* FULLSCREEN QUIZ OVERLAY MODAL */}
      {activeQuizRoom && (
        <div className="fixed inset-0 z-[9999] bg-slate-50 overflow-y-auto animate-fade-in w-full h-full m-0 p-0">
          <div className="w-full min-h-screen flex flex-col bg-white">
            <div className="bg-gradient-to-r from-sky-600 to-indigo-700 p-6 sm:px-10 sm:py-8 text-white flex justify-between items-center sticky top-0 z-10 shadow-md">
              <div>
                <h2 className="text-2xl sm:text-4xl font-black mb-2 flex items-center gap-3">
                  <Trophy className="text-yellow-300" size={36} />
                  Thử thách Nâng cao
                </h2>
                <p className="text-sky-100 font-medium text-lg">{activeQuizRoom.subject} - {activeQuizRoom.title}</p>
              </div>
              <button onClick={() => setActiveQuizRoom(null)} className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition text-white backdrop-blur-sm shadow-sm">
                <X size={28} />
              </button>
            </div>
            
            <div className="flex-1 p-6 sm:p-10">
              <div className="space-y-10">
                {activeQuizRoom.questions?.map((q, idx) => (
                  <div key={q.id} className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-sky-100 text-sky-700 font-black px-4 py-2 rounded-xl text-lg shrink-0">
                        Câu {idx + 1}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 leading-relaxed pt-1">{q.text}</h3>
                    </div>
                    
                    {(q.type === 'mcq' || q.type === 'true_false') ? (
                      <div className="space-y-4 pl-0 sm:pl-16">
                        {q.options.map(opt => (
                          <label key={opt} className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                            userAnswers[q.id] === opt ? 'border-sky-500 bg-sky-50 shadow-sm' : 'border-slate-100 hover:border-slate-300 bg-slate-50/50'
                          } ${(isSubmitted || submittedQuestions[q.id]) && opt === q.correct ? 'border-green-500 bg-green-50 ring-2 ring-green-200 ring-offset-1' : ''}`}>
                            <input 
                              type="radio" 
                              name={`q-${q.id}`} 
                              value={opt} 
                              checked={userAnswers[q.id] === opt} 
                              onChange={() => handleAnswerChange(q, opt)}
                              disabled={isSubmitted || submittedQuestions[q.id]}
                              className="w-6 h-6 text-sky-500 border-slate-300 focus:ring-sky-500"
                            />
                            <span className={`text-lg font-medium ${(isSubmitted || submittedQuestions[q.id]) && opt === q.correct ? 'text-green-800' : 'text-slate-700'}`}>{opt}</span>
                            {(isSubmitted || submittedQuestions[q.id]) && opt === q.correct && <CheckCircle2 size={24} className="ml-auto text-green-500" />}
                            {(isSubmitted || submittedQuestions[q.id]) && userAnswers[q.id] === opt && opt !== q.correct && <X size={24} className="ml-auto text-red-500" />}
                          </label>
                        ))}
                      </div>
                    ) : q.type === 'fill_blank' ? (
                      <div className="space-y-4 pl-0 sm:pl-16">
                        <input 
                          type="text"
                          value={userAnswers[q.id] || ''}
                          onChange={(e) => handleAnswerChange(q, e.target.value)}
                          disabled={isSubmitted || submittedQuestions[q.id]}
                          placeholder="Nhập đáp án của bạn..."
                          className={`w-full p-5 text-lg font-medium border-2 rounded-2xl outline-none transition text-slate-700 shadow-inner ${
                            !(isSubmitted || submittedQuestions[q.id]) ? 'border-slate-200 focus:border-sky-500 bg-slate-50 focus:bg-white' :
                            userAnswers[q.id]?.trim().toLowerCase() === q.correct.toLowerCase() ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-500 bg-red-50 text-red-800'
                          }`}
                        />
                        {(isSubmitted || submittedQuestions[q.id]) && userAnswers[q.id]?.trim().toLowerCase() !== q.correct.toLowerCase() && (
                          <div className="p-4 bg-sky-50 rounded-xl border border-sky-200">
                            <span className="text-sm font-black text-sky-600 block mb-1 uppercase tracking-wider">Đáp án chuẩn:</span>
                            <span className="text-lg font-bold text-slate-800">{q.correct}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4 pl-0 sm:pl-16">
                        <textarea 
                          value={userAnswers[q.id] || ''}
                          onChange={(e) => handleAnswerChange(q, e.target.value)}
                          disabled={isSubmitted || submittedQuestions[q.id]}
                          placeholder="Trình bày tự luận chi tiết..."
                          className="w-full h-40 p-5 text-lg font-medium border-2 border-slate-200 rounded-2xl focus:border-sky-500 focus:bg-white bg-slate-50 outline-none transition text-slate-700 resize-none shadow-inner"
                        ></textarea>
                        {(isSubmitted || submittedQuestions[q.id]) && (
                          <div className="p-5 bg-sky-50 rounded-xl border border-sky-200">
                            <span className="text-sm font-black text-sky-600 block mb-2 uppercase tracking-wider">Gợi ý chấm điểm (Bareme):</span>
                            <span className="text-base font-medium text-slate-800 leading-relaxed">{q.correct}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {(isSubmitted || submittedQuestions[q.id]) && q.explanation && (
                      <div className="mt-6 pl-0 sm:pl-16">
                        <div className="text-base bg-orange-50 text-orange-900 p-5 rounded-2xl border border-orange-200 font-medium flex items-start gap-3 shadow-sm">
                          <Brain className="text-orange-500 shrink-0 mt-0.5" size={20} />
                          <div>
                            <span className="block font-black text-orange-600 mb-1 uppercase text-sm">Giải thích chuyên sâu</span>
                            {q.explanation}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-12 mb-8 pt-8 border-t-2 border-slate-100 flex justify-center">
                {!isSubmitted ? (
                    <button 
                      onClick={submitQuiz}
                    disabled={Object.keys(userAnswers).length === 0}
                    className="px-12 py-5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-black rounded-full text-xl hover:shadow-xl hover:shadow-sky-200 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:shadow-none"
                  >
                    Nộp Bài Kiểm Tra
                  </button>
                ) : (
                  <div className="text-center w-full max-w-2xl mx-auto">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl mb-8 shadow-sm border border-green-200">
                      <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                        <Trophy size={40} className="text-green-500" />
                      </div>
                      <h3 className="text-3xl font-black text-green-800 mb-2">Đã hoàn thành xuất sắc!</h3>
                      <p className="text-green-900 text-lg font-medium">Căn phòng <span className="font-bold">"{activeQuizRoom.title}"</span> đã được giải mã và xây dựng thành công.</p>
                    </div>
                    <button 
                      onClick={markRoomCompleted}
                      className="px-10 py-4 bg-slate-800 text-white font-bold rounded-full text-lg hover:bg-slate-900 hover:shadow-lg transition-all"
                    >
                      Trở lại Thị trấn
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
