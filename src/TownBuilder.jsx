import React, { useState, useEffect } from 'react';
import { 
  Map, CheckCircle2, Sparkles, Loader2, Lock, Play, Check, Book, 
  Brain, Star, Award, Compass, ArrowRight, X, Trophy, RotateCcw, 
  Rocket, ChevronRight, Zap, RefreshCw, Flame
} from 'lucide-react';
import InteractivePlanet3D from './InteractivePlanet3D';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { INITIAL_TOWN } from './data/townData';

const SUBJECT_COLORS = {
  'Toán': 'text-blue-600 bg-blue-50 border-blue-200',
  'Ngữ Văn': 'text-rose-600 bg-rose-50 border-rose-200',
  'Văn': 'text-rose-600 bg-rose-50 border-rose-200',
  'Tiếng Anh': 'text-emerald-600 bg-emerald-50 border-emerald-200',
  'Anh': 'text-emerald-600 bg-emerald-50 border-emerald-200',
  'KHTN': 'text-teal-600 bg-teal-50 border-teal-200',
  'Lịch sử - Địa lí': 'text-amber-600 bg-amber-50 border-amber-200',
  'Sử': 'text-amber-600 bg-amber-50 border-amber-200',
  'Địa': 'text-orange-600 bg-orange-50 border-orange-200',
  'GDCD': 'text-rose-600 bg-rose-50 border-rose-200',
  'Tin học': 'text-purple-600 bg-purple-50 border-purple-200',
  'Công nghệ': 'text-yellow-600 bg-yellow-50 border-yellow-200',
};

// Vị trí các hành tinh dọc theo con đường uốn lượn S-Curve khớp với ảnh
const PLANET_MAP_POSITIONS = [
  // 0: Khởi Nguyên (Lớp 6) - Phía dưới bên trái
  { top: '68%', left: '20%', rocketOffset: { x: 95, y: -20, rotate: -35 } },
  // 1: Khí Quyển (Lớp 7) - Phía giữa bên trái
  { top: '48%', left: '16%', rocketOffset: { x: 95, y: -25, rotate: -20 } },
  // 2: Tinh Thể (Lớp 8) - Phía trên bên phải
  { top: '28%', left: '68%', rocketOffset: { x: -95, y: -20, rotate: 30 } },
  // 3: Tối Thượng (Lớp 9) - Đỉnh vũ trụ phía trên
  { top: '8%', left: '26%', rocketOffset: { x: 90, y: 15, rotate: -45 } }
];

export default function TownBuilder({ setActiveTab, addReward, gamification }) {
  const [houses, setHouses] = useState(INITIAL_TOWN);
  const [activeHouseIndex, setActiveHouseIndex] = useState(0);
  const [isPlanetDetailView, setIsPlanetDetailView] = useState(false);
  const [prestigeLevel, setPrestigeLevel] = useState(1);

  // Quiz Overlay State
  const [activeQuizRoom, setActiveQuizRoom] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedQuestions, setSubmittedQuestions] = useState({});
  const [score, setScore] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  // Modal Bí mật vinh danh Danh hiệu đặc biệt "Bá khí trên từng hạt bí"
  const [showUniverseGrandModal, setShowUniverseGrandModal] = useState(false);

  // 1. Tải tiến độ My Universe từ Firebase Firestore
  useEffect(() => {
    if (!auth.currentUser) return;
    const loadTown = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          if (data.universePrestige) {
            setPrestigeLevel(data.universePrestige);
          }
          if (data.townBuilder) {
            const savedTown = data.townBuilder;
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

            // Kiểm tra mở khóa NHIỆM VỤ ẨN: Hoàn thành 100% vũ trụ
            const totalAll = merged.reduce((sum, h) => sum + h.rooms.length, 0);
            const completedAll = merged.reduce((sum, h) => sum + h.rooms.filter(r => r.completed).length, 0);

            if (completedAll >= totalAll && totalAll > 0) {
              const hasBadge = gamification?.badges?.some(b => b.includes('Bá khí trên từng hạt bí'));
              if (!hasBadge) {
                // Kích hoạt vinh danh nhiệm vụ ẩn!
                setShowUniverseGrandModal(true);
                if (addReward) {
                  addReward(1000, 50, '🎃 Bá khí trên từng hạt bí');
                }
                setDoc(doc(db, 'users', auth.currentUser.uid), {
                  activeTitle: '🎃 Bá khí trên từng hạt bí',
                  badges: [...(gamification?.badges || []), '🎃 Bá khí trên từng hạt bí']
                }, { merge: true }).catch(console.error);
              }
            }
          }
        }
      } catch (err) {
        console.error("Lỗi tải tiến độ thị trấn:", err);
      }
    };
    loadTown();
  }, []);

  const activeHouse = houses[activeHouseIndex] || houses[0];
  const completedRooms = activeHouse.rooms.filter(r => r.completed).length;
  const totalRooms = activeHouse.rooms.length;

  const totalUniverseRooms = houses.reduce((sum, h) => sum + h.rooms.length, 0);
  const completedUniverseRooms = houses.reduce((sum, h) => sum + h.rooms.filter(r => r.completed).length, 0);
  const isAllUniverseDone = totalUniverseRooms > 0 && completedUniverseRooms >= totalUniverseRooms;

  // Giai đoạn phát triển hành tinh
  const getPhaseName = (completed, total) => {
    if (completed === 0) return 'Tiểu hành tinh sơ khởi';
    if (completed <= 2) return 'Hình thành lõi địa chất';
    if (completed < total) return 'Tạo lập khí quyển';
    return 'Tiến hóa hoàn tất';
  };

  // Click vào phòng bài tập
  const handleRoomClick = async (room) => {
    if (room.completed) {
      const confirm = window.confirm("Phòng này đã hoàn thành. Bạn có muốn làm lại bộ câu hỏi tư duy nâng cao để rèn luyện thêm không?");
      if (!confirm) return;
    }

    setActiveQuizRoom(room);
    setUserAnswers({});
    setIsSubmitted(false);
    setSubmittedQuestions({});
    setScore(0);
  };

  // Đánh dấu hoàn thành phòng & kiểm tra mở khóa nhiệm vụ ẩn
  const markRoomCompleted = () => {
    const newHouses = [...houses];
    const hIndex = newHouses.findIndex(h => h.id === activeHouse.id);
    const rIndex = newHouses[hIndex].rooms.findIndex(r => r.id === activeQuizRoom.id);
    
    newHouses[hIndex].rooms[rIndex].completed = true;
    setHouses(newHouses);
    setActiveQuizRoom(null);
    
    // Thưởng hoàn thành phòng
    if (addReward) {
      addReward(50, 2);
    }

    // Kiểm tra nếu phòng này làm cho toàn bộ vũ trụ đạt 100%
    const totalAll = newHouses.reduce((sum, h) => sum + h.rooms.length, 0);
    const completedAll = newHouses.reduce((sum, h) => sum + h.rooms.filter(r => r.completed).length, 0);

    if (completedAll >= totalAll && totalAll > 0) {
      setShowUniverseGrandModal(true);
      if (addReward) {
        addReward(1000, 50, '🎃 Bá khí trên từng hạt bí');
      }
      if (auth.currentUser) {
        setDoc(doc(db, 'users', auth.currentUser.uid), {
          activeTitle: '🎃 Bá khí trên từng hạt bí',
          badges: [...(gamification?.badges || []), '🎃 Bá khí trên từng hạt bí']
        }, { merge: true }).catch(console.error);
      }
    }

    if (auth.currentUser) {
      setDoc(doc(db, 'users', auth.currentUser.uid), {
        townBuilder: newHouses
      }, { merge: true }).catch(err => console.error("Lỗi đồng bộ thị trấn:", err));
    }
  };

  // LÀM MỚI TẤT CẢ CÁC BÀI HỌC SAU KHI HOÀN TẤT VŨ TRỤ (TÁI SINH VŨ TRỤ - NEW GAME+)
  const handleResetUniverse = async () => {
    if (!window.confirm("🚀 BẠN ĐÃ CHINH PHỤC TOÀN BỘ VŨ TRỤ!\n\nBạn có muốn TÁI SINH VŨ TRỤ để làm mới lại toàn bộ 32 phòng học nâng cao, tiếp tục rèn luyện tư duy và cày thêm XP/Ruby không?\n\n(Danh hiệu độc quyền 'Bá khí trên từng hạt bí' cùng số Ruby, XP đã đạt được của bạn vẫn được giữ nguyên vĩnh viễn!)")) {
      return;
    }

    const resetHouses = houses.map(h => ({
      ...h,
      rooms: h.rooms.map(r => ({
        ...r,
        completed: false
      }))
    }));

    const nextPrestige = prestigeLevel + 1;
    setHouses(resetHouses);
    setPrestigeLevel(nextPrestige);

    if (auth.currentUser) {
      try {
        await setDoc(doc(db, 'users', auth.currentUser.uid), {
          townBuilder: resetHouses,
          universePrestige: nextPrestige
        }, { merge: true });
      } catch (e) {
        console.error("Lỗi lưu tái sinh vũ trụ:", e);
      }
    }

    alert(`✨ Chúc mừng bạn đã bước vào Vũ Trụ Uy Danh Cấp ${nextPrestige}! Các bài học đã được làm mới hoàn toàn!`);
  };

  // Trả lời câu hỏi
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
      const newMistake = { 
        ...q, 
        subject: q.subject || (activeQuizRoom ? activeQuizRoom.subject : 'Tổng hợp'), 
        userAnswer: val, 
        timestamp: new Date().toISOString() 
      };
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
    
    if (newMistakes.length > 0) {
      const existing = JSON.parse(localStorage.getItem('study_app_mistakes') || '[]');
      localStorage.setItem('study_app_mistakes', JSON.stringify([...existing, ...newMistakes]));
    }
    
    setScore(newScore);
    setIsSubmitted(true);
  };

  const activePos = PLANET_MAP_POSITIONS[activeHouseIndex] || PLANET_MAP_POSITIONS[0];

  return (
    <div className="animate-fade-in w-full h-full min-h-screen">
      {/* ====================== GIAO DIỆN LÀM BÀI TẬP PHÒNG ====================== */}
      {activeQuizRoom ? (
        <div className="bg-slate-50 animate-fade-in w-full min-h-screen m-0 p-0">
          <div className="w-full min-h-screen flex flex-col bg-white">
            <div className="flex justify-between items-center p-4 sm:px-8 sm:py-6 sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-black uppercase tracking-wider border px-3 py-1.5 rounded-xl shadow-sm ${SUBJECT_COLORS[activeQuizRoom.subject] || 'bg-slate-100 text-slate-600'}`}>
                  Môn {activeQuizRoom.subject}
                </span>
                <h2 className="text-xl font-extrabold text-slate-800">{activeQuizRoom.title}</h2>
              </div>
              <button 
                onClick={() => setActiveQuizRoom(null)} 
                className="p-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition shadow-sm font-bold flex items-center gap-2 text-sm"
              >
                <X size={20} /> Đóng phòng
              </button>
            </div>
            
            <div className="flex-1 p-6 sm:p-10 max-w-4xl mx-auto w-full">
              <div className="mb-6 p-4 bg-purple-50 rounded-2xl border border-purple-200 text-purple-900 text-sm flex items-center gap-3">
                <Zap size={20} className="text-purple-600 shrink-0" />
                <span>
                  <strong>Thử thách tư duy bậc cao:</strong> Các câu hỏi yêu cầu giải quyết vấn đề thực tiễn, phân tích kiến thức chuyên sâu của THCS.
                </span>
              </div>

              <div className="space-y-8">
                {activeQuizRoom.questions?.map((q, idx) => (
                  <div key={q.id} className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="bg-purple-100 text-purple-800 font-black px-3.5 py-1.5 rounded-xl text-base shrink-0">
                        Câu {idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 leading-relaxed pt-0.5">{q.text}</h3>
                    </div>
                    
                    {(q.type === 'mcq' || q.type === 'true_false') ? (
                      <div className="space-y-3 pl-0 sm:pl-14">
                        {q.options.map(opt => (
                          <label key={opt} className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                            userAnswers[q.id] === opt ? 'border-purple-500 bg-purple-50 shadow-sm' : 'border-slate-100 hover:border-slate-300 bg-slate-50/50'
                          } ${(isSubmitted || submittedQuestions[q.id]) && opt === q.correct ? 'border-green-500 bg-green-50 ring-2 ring-green-200 ring-offset-1' : ''}`}>
                            <input 
                              type="radio" 
                              name={`q-${q.id}`} 
                              value={opt} 
                              checked={userAnswers[q.id] === opt} 
                              onChange={() => handleAnswerChange(q, opt)}
                              disabled={isSubmitted || submittedQuestions[q.id]}
                              className="w-5 h-5 text-purple-600 border-slate-300 focus:ring-purple-500"
                            />
                            <span className={`text-base font-medium ${(isSubmitted || submittedQuestions[q.id]) && opt === q.correct ? 'text-green-800 font-bold' : 'text-slate-700'}`}>{opt}</span>
                            {(isSubmitted || submittedQuestions[q.id]) && opt === q.correct && <CheckCircle2 size={22} className="ml-auto text-green-500" />}
                            {(isSubmitted || submittedQuestions[q.id]) && userAnswers[q.id] === opt && opt !== q.correct && <X size={22} className="ml-auto text-red-500" />}
                          </label>
                        ))}
                      </div>
                    ) : q.type === 'fill_blank' ? (
                      <div className="space-y-4 pl-0 sm:pl-14">
                        <input 
                          type="text"
                          value={userAnswers[q.id] || ''}
                          onChange={(e) => handleAnswerChange(q, e.target.value)}
                          disabled={isSubmitted || submittedQuestions[q.id]}
                          placeholder="Nhập đáp án phân tích của bạn..."
                          className={`w-full p-4 text-base font-medium border-2 rounded-2xl outline-none transition text-slate-700 shadow-inner ${
                            !(isSubmitted || submittedQuestions[q.id]) ? 'border-slate-200 focus:border-purple-500 bg-slate-50 focus:bg-white' :
                            userAnswers[q.id]?.trim().toLowerCase() === q.correct.toLowerCase() ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-500 bg-red-50 text-red-800'
                          }`}
                        />
                        {(isSubmitted || submittedQuestions[q.id]) && userAnswers[q.id]?.trim().toLowerCase() !== q.correct.toLowerCase() && (
                          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                            <span className="text-xs font-black text-purple-700 block mb-1 uppercase tracking-wider">Đáp án chuẩn:</span>
                            <span className="text-base font-bold text-slate-800">{q.correct}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4 pl-0 sm:pl-14">
                        <textarea 
                          value={userAnswers[q.id] || ''}
                          onChange={(e) => handleAnswerChange(q, e.target.value)}
                          disabled={isSubmitted || submittedQuestions[q.id]}
                          placeholder="Trình bày bài giải chi tiết..."
                          className="w-full h-32 p-4 text-base font-medium border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:bg-white bg-slate-50 outline-none transition text-slate-700 resize-none shadow-inner"
                        ></textarea>
                        {(isSubmitted || submittedQuestions[q.id]) && (
                          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                            <span className="text-xs font-black text-purple-700 block mb-1.5 uppercase tracking-wider">Gợi ý bareme chấm điểm:</span>
                            <span className="text-sm font-medium text-slate-800 leading-relaxed">{q.correct}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {(isSubmitted || submittedQuestions[q.id]) && q.explanation && (
                      <div className="mt-5 pl-0 sm:pl-14">
                        <div className="text-sm bg-amber-50 text-amber-900 p-4 rounded-2xl border border-amber-200 font-medium flex items-start gap-3 shadow-sm">
                          <Brain className="text-amber-600 shrink-0 mt-0.5" size={18} />
                          <div>
                            <span className="block font-black text-amber-700 mb-1 uppercase text-xs">Giải thích tư duy chuyên sâu</span>
                            {q.explanation}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-10 mb-8 pt-8 border-t-2 border-slate-100 flex justify-center">
                {!isSubmitted ? (
                  <button 
                    onClick={submitQuiz}
                    disabled={Object.keys(userAnswers).length === 0}
                    className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold rounded-full text-lg hover:shadow-xl hover:shadow-purple-200 hover:-translate-y-0.5 transition-all disabled:opacity-50"
                  >
                    Nộp Bài Phân Tích
                  </button>
                ) : (
                  <div className="text-center w-full max-w-xl mx-auto">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-3xl mb-6 shadow-sm border border-green-200">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md text-green-500">
                        <Trophy size={32} />
                      </div>
                      <h3 className="text-2xl font-black text-green-800 mb-1">Chinh Phục Thành Công!</h3>
                      <p className="text-green-900 text-sm font-medium">Căn phòng <span className="font-bold">"{activeQuizRoom.title}"</span> đã được giải mã và thắp sáng năng lượng!</p>
                    </div>
                    <button 
                      onClick={markRoomCompleted}
                      className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-full text-base shadow-lg transition-all"
                    >
                      Xác Nhận & Trở Lại Vũ Trụ (+50 XP, +2 Ruby)
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6 pb-12 p-4 md:p-8 h-full max-w-5xl mx-auto">
          {!isPlanetDetailView ? (
            <>
              {/* HEADER VŨ TRỤ */}
              <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 p-6 rounded-3xl text-white shadow-xl border border-purple-800/40">
                <div>
                  <h1 className="text-2xl md:text-3xl font-black mb-1 flex items-center gap-3 text-white">
                    <Map className="text-purple-400" size={28} /> My Universe • Hành Trình Vũ Trụ
                  </h1>
                  <p className="text-purple-200/80 font-medium text-xs md:text-sm">
                    Khám phá 4 đại hành tinh 3D dọc theo con đường thiên hà. Giải các bài tập tư duy bậc cao để tiến hóa hành tinh!
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-left md:text-right">
                    <span className="text-[11px] text-purple-300 font-bold block uppercase tracking-wider">Tiến độ khám phá</span>
                    <span className="text-xl font-black text-amber-300">{completedUniverseRooms}/{totalUniverseRooms} phòng</span>
                  </div>
                  <div className="w-28 bg-slate-800 h-3 rounded-full overflow-hidden border border-purple-500/30">
                    <div 
                      className="bg-gradient-to-r from-purple-400 to-amber-400 h-full transition-all duration-700"
                      style={{ width: `${(completedUniverseRooms / (totalUniverseRooms || 1)) * 100}%` }}
                    />
                  </div>
                </div>
              </header>

              {/* NÚT TÁI SINH VŨ TRỤ (CHỈ HIỂN THỊ KHI ĐÃ HOÀN TẤT 100% CÁC CHƯƠNG) */}
              {isAllUniverseDone && (
                <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 p-5 rounded-3xl shadow-xl text-white border-2 border-yellow-200 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner shrink-0">
                      🎃
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="bg-black/30 text-yellow-100 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          Đã mở khóa nhiệm vụ ẩn
                        </span>
                        <span className="text-xs text-yellow-100 font-bold">Uy danh: Cấp {prestigeLevel}</span>
                      </div>
                      <h3 className="text-xl font-black text-white">
                        Danh hiệu: "Bá khí trên từng hạt bí" (Đang trang bị)
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={handleResetUniverse}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-yellow-300 font-extrabold rounded-2xl shadow-lg border border-yellow-400/50 transition flex items-center gap-2 text-sm shrink-0 hover:scale-105 active:scale-95"
                    title="Làm mới lại toàn bộ bài học để cày thêm điểm"
                  >
                    <RefreshCw size={18} className="animate-spin text-yellow-400" />
                    <span>Làm mới & Tái sinh Vũ trụ</span>
                  </button>
                </div>
              )}

              {/* BẢN ĐỒ VŨ TRỤ THEO ĐÚNG HÌNH ẢNH MINH HỌA (VERTICAL JOURNEY S-CURVE MAP) */}
              <div className="relative w-full max-w-2xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-4 border-purple-900/50 bg-[#16082b] min-h-[960px] md:min-h-[1050px]">
                
                {/* 1. Lớp hình nền Vũ Trụ Chuẩn Theo Ảnh */}
                <img 
                  src="/universe_map.png" 
                  alt="Universe Map" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none select-none"
                />

                {/* 2. Lớp bụi sao & ánh sáng vũ trụ lung linh */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-purple-900/30 pointer-events-none" />

                {/* 3. CON TÀU VŨ TRỤ (ROCKET) BAY THEO HÀNH TINH ĐANG CHỌN */}
                <div 
                  className="absolute z-30 transition-all duration-700 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                  style={{
                    top: `calc(${activePos.top} + ${activePos.rocketOffset.y}px)`,
                    left: `calc(${activePos.left} + ${activePos.rocketOffset.x}px)`,
                    transform: `translate(-50%, -50%) rotate(${activePos.rocketOffset.rotate}deg)`
                  }}
                >
                  <div className="relative">
                    {/* Thân tên lửa */}
                    <div className="w-12 h-14 bg-gradient-to-t from-slate-200 to-red-500 rounded-t-full border-2 border-white shadow-xl flex items-center justify-center relative">
                      <div className="w-4 h-4 rounded-full bg-sky-200 border border-slate-700 shadow-inner" />
                      {/* Cánh tên lửa */}
                      <div className="absolute -left-2 bottom-0 w-3 h-5 bg-red-600 rounded-l-md" />
                      <div className="absolute -right-2 bottom-0 w-3 h-5 bg-red-600 rounded-r-md" />
                    </div>
                    {/* Ngọn lửa phản lực động cơ */}
                    <div className="w-4 h-6 mx-auto -mt-0.5 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent rounded-b-full animate-pulse filter drop-shadow-[0_0_8px_rgba(255,165,0,0.9)]" />
                  </div>
                </div>

                {/* 4. CÁC ĐẠI HÀNH TINH 3D TỰ XOAY DỌC THEO CON ĐƯỜNG ĐÁ */}
                {houses.map((house, index) => {
                  const comp = house.rooms.filter(r => r.completed).length;
                  const tot = house.rooms.length;
                  const isActive = index === activeHouseIndex;
                  const pos = PLANET_MAP_POSITIONS[index] || PLANET_MAP_POSITIONS[0];

                  return (
                    <div 
                      key={house.id}
                      className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 group"
                      style={{ top: pos.top, left: pos.left }}
                      onClick={() => {
                        setActiveHouseIndex(index);
                      }}
                    >
                      {/* Khối Cầu Hành Tinh 3D Thật Tự Xoay */}
                      <div className={`
                        relative w-36 h-36 md:w-44 md:h-44 transition-transform duration-500
                        ${isActive ? 'scale-115 drop-shadow-[0_0_25px_rgba(224,86,253,0.8)]' : 'scale-100 hover:scale-105'}
                      `}>
                        <InteractivePlanet3D completed={comp} total={tot} index={index} isDetail={false} />

                        {/* Huy hiệu hoàn thành góc hành tinh */}
                        {comp === tot && (
                          <div className="absolute -top-1 -right-1 bg-green-500 text-white p-1.5 rounded-full shadow-lg border-2 border-white animate-bounce">
                            <Check size={18} strokeWidth={3} />
                          </div>
                        )}
                      </div>

                      {/* Thẻ Thông Tin Nhỏ Treo Cạnh Hành Tinh */}
                      <div className={`
                        mt-1 p-2.5 px-3.5 rounded-2xl text-center backdrop-blur-md transition-all duration-300 max-w-[190px] mx-auto
                        ${isActive 
                          ? 'bg-purple-900/90 text-white border-2 border-purple-400 shadow-xl' 
                          : 'bg-slate-900/80 text-purple-100 border border-purple-800/60 hover:bg-slate-900/95'}
                      `}>
                        <h4 className="font-extrabold text-xs md:text-sm truncate">{house.title.split('-')[0]}</h4>
                        <div className="flex items-center justify-center gap-1.5 mt-1 text-[11px] text-amber-300 font-bold">
                          <span>{comp}/{tot} phòng</span>
                          <span>•</span>
                          <span className="text-purple-200">{getPhaseName(comp, tot).split(' ')[0]}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* 5. THANH ĐIỀU KHIỂN & KHÁM PHÁ NẰM Ở ĐÁY BẢN ĐỒ */}
                <div className="absolute bottom-5 left-5 right-5 z-40 bg-slate-900/90 backdrop-blur-md p-4 sm:p-5 rounded-3xl border-2 border-purple-500/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
                      <Rocket size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-purple-400 tracking-wider block">
                        Hành Tinh Đang Chọn:
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-white truncate">
                        {activeHouse.title}
                      </h3>
                      <p className="text-xs text-purple-200/70 font-medium">
                        {completedRooms}/{totalRooms} phòng đã giải mã ({getPhaseName(completedRooms, totalRooms)})
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => setIsPlanetDetailView(true)}
                      className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:to-sky-500 text-white font-extrabold rounded-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 text-sm transition-all hover:scale-105 active:scale-95"
                    >
                      <Sparkles size={18} />
                      <span>Khám phá 8 phòng học &rarr;</span>
                    </button>
                  </div>
                </div>

              </div>
            </>
          ) : (
            /* ====================== GIAO DIỆN CHI TIẾT 8 PHÒNG HỌC CỦA HÀNH TINH ====================== */
            <div className="flex flex-col gap-6 mt-2 relative min-h-screen animate-fade-in">
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => setIsPlanetDetailView(false)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-2xl shadow-md font-extrabold text-slate-700 hover:text-purple-600 hover:shadow-lg transition-all border border-slate-200 text-sm"
                >
                  <Compass size={18} /> &larr; Trở về Bản đồ Vũ Trụ
                </button>

                <div className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-white px-4 py-2 rounded-2xl border border-slate-200">
                  <span>Tiến độ:</span>
                  <span className="text-purple-600 font-extrabold text-base">{completedRooms}/{totalRooms} phòng</span>
                </div>
              </div>
              
              {/* Màn hình 3D Hành tinh lớn có thể xoay chuột 360 độ */}
              <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#180829] to-[#270d42] rounded-[3rem] p-6 relative overflow-hidden shadow-2xl border-4 border-purple-900/60 h-[340px] md:h-[420px]">
                <div className="absolute inset-0 z-10 w-full h-full">
                  <InteractivePlanet3D completed={completedRooms} total={totalRooms} index={activeHouseIndex} isDetail={true} />
                </div>
                
                <div className="absolute bottom-6 z-20 text-center bg-slate-900/85 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-purple-500/40 shadow-2xl max-w-lg w-[90%]">
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">{activeHouse.title}</h2>
                  <div className="text-xs font-bold text-amber-300 bg-purple-950/80 inline-block px-4 py-1.5 rounded-full border border-purple-700 uppercase tracking-widest">
                    {getPhaseName(completedRooms, totalRooms)}
                  </div>
                </div>
              </div>
              
              {/* Danh sách 8 Căn Phòng Bài Tập Nâng Cao */}
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-sm border border-slate-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 mb-6 border-b border-slate-100 gap-2">
                  <div>
                    <h3 className="text-2xl font-black text-slate-800">8 Căn Phòng Bài Tập Tư Duy Nâng Cao</h3>
                    <p className="text-slate-500 text-sm mt-0.5">Hoàn thành các bài tập phân tích để xây dựng công trình và tiến hóa hành tinh!</p>
                  </div>
                  <span className="text-xs font-black text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-xl">
                    Độ khó: Vận dụng cao ⭐⭐⭐
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {activeHouse.rooms.map((room) => (
                    <div 
                      key={room.id}
                      onClick={() => handleRoomClick(room)}
                      className={`p-5 rounded-3xl border-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between
                        ${room.completed 
                          ? 'border-green-300 bg-gradient-to-b from-green-50 to-white shadow-md' 
                          : 'border-slate-100 bg-white hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50'
                        }
                      `}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className={`text-[11px] font-black uppercase tracking-wider border px-2.5 py-1 rounded-lg ${SUBJECT_COLORS[room.subject] || 'bg-slate-100 text-slate-600'}`}>
                            {room.subject}
                          </span>
                          {room.completed ? (
                            <div className="bg-green-500 text-white p-1 rounded-full shadow-sm"><Check size={14} strokeWidth={3} /></div>
                          ) : (
                            <div className="bg-slate-100 text-slate-400 p-1 rounded-full"><Lock size={14} /></div>
                          )}
                        </div>
                        
                        <h4 className={`font-bold text-base leading-snug mb-2.5 ${room.completed ? 'text-green-800' : 'text-slate-800'}`}>
                          {room.title}
                        </h4>
                        
                        <div className={`p-3 rounded-xl mb-4 text-xs font-medium leading-relaxed border ${room.completed ? 'bg-white border-green-100 text-green-700' : 'bg-slate-50 border-slate-100 text-slate-500'}`}>
                          <div className="flex items-center gap-1.5 mb-1 opacity-70">
                            <Brain size={13} />
                            <span className="text-[10px] font-black uppercase">Kiến thức cốt lõi</span>
                          </div>
                          {room.knowledge}
                        </div>
                      </div>
                      
                      <button 
                        className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all mt-auto shadow-sm
                          ${room.completed 
                            ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                            : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-md'
                          }
                        `}
                      >
                        {room.completed ? (
                          <>Đã hoàn thành</>
                        ) : (
                          <>Vào học ngay <ArrowRight size={14} /></>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ====================== MODAL MỞ KHÓA NHIỆM VỤ ẨN VŨ TRỤ ====================== */}
      {showUniverseGrandModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 border-4 border-amber-400 rounded-3xl p-8 max-w-lg w-full text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-amber-400 via-rose-500 to-yellow-300"></div>
            
            <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-500 flex items-center justify-center text-5xl shadow-xl shadow-yellow-500/30 animate-bounce">
              🎃
            </div>

            <div className="inline-block bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              🌟 BẬT MÍ NHIỆM VỤ ẨN THÀNH CÔNG
            </div>

            <h2 className="text-3xl font-black text-amber-300 mb-2 tracking-wide">
              Bá khí trên từng hạt bí
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Phi thường xuất sắc! Bạn đã giải mã và hoàn tất toàn bộ 32/32 phòng học nâng cao trên toàn cõi <strong>My Universe</strong>! Danh hiệu đặc biệt ẩn giấu đã chính thức được mở khóa và tự động trang bị cho bạn!
            </p>

            <div className="bg-white/10 rounded-2xl p-4 border border-white/10 mb-6 flex justify-around text-center">
              <div>
                <span className="text-xs text-slate-400 block font-bold">Kinh nghiệm</span>
                <span className="text-xl font-black text-amber-400">+1000 XP</span>
              </div>
              <div className="w-px bg-white/10"></div>
              <div>
                <span className="text-xs text-slate-400 block font-bold">Đá quý</span>
                <span className="text-xl font-black text-rose-400">+50 Ruby</span>
              </div>
              <div className="w-px bg-white/10"></div>
              <div>
                <span className="text-xs text-slate-400 block font-bold">Tiến độ</span>
                <span className="text-xl font-black text-emerald-400">32/32 Xong</span>
              </div>
            </div>

            <button
              onClick={() => setShowUniverseGrandModal(false)}
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black rounded-2xl shadow-lg shadow-yellow-500/40 text-lg transition-all active:scale-95"
            >
              Trang Bị & Khoe Danh Hiệu Ngay 🚀
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
