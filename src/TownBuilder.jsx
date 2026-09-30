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
const IsoTile = ({ colorTop, colorLeft, colorRight, yOffset = 0, height = 0, scale = 1, cx=50, cy=50 }) => (
  <g transform={`translate(${cx - cx*scale}, ${cy - cy*scale + yOffset}) scale(${scale})`}>
    <polygon points="50,30 90,50 50,70 10,50" fill={colorTop} />
    {height > 0 && <polygon points={`10,50 50,70 50,${70 + height} 10,${50 + height}`} fill={colorLeft} />}
    {height > 0 && <polygon points={`90,50 50,70 50,${70 + height} 90,${50 + height}`} fill={colorRight} />}
  </g>
);

const PhaseWasteland = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl transform transition-transform duration-500 hover:scale-105">
    <IsoTile colorTop="#a3b18a" colorLeft="#588157" colorRight="#3a5a40" height={10} />
    <ellipse cx="50" cy="50" rx="15" ry="8" fill="#d4a373" opacity="0.8" />
    <ellipse cx="30" cy="55" rx="8" ry="4" fill="#bc6c25" opacity="0.6" />
    <ellipse cx="70" cy="45" rx="10" ry="5" fill="#bc6c25" opacity="0.6" />
  </svg>
);

const PhaseFoundation = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl transform transition-transform duration-500 hover:scale-105">
    <IsoTile colorTop="#a3b18a" colorLeft="#588157" colorRight="#3a5a40" height={10} />
    <IsoTile colorTop="#ced4da" colorLeft="#adb5bd" colorRight="#6c757d" height={8} scale={0.7} yOffset={-4} />
    <rect x="40" y="45" width="8" height="4" fill="#d4a373" transform="skewY(26)" />
  </svg>
);

const PhaseWalls = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl transform transition-transform duration-500 hover:scale-105">
    <IsoTile colorTop="#a3b18a" colorLeft="#588157" colorRight="#3a5a40" height={10} />
    <IsoTile colorTop="#ced4da" colorLeft="#adb5bd" colorRight="#6c757d" height={8} scale={0.7} yOffset={-4} />
    <IsoTile colorTop="#fefae0" colorLeft="#faedcd" colorRight="#e9edc9" height={12} scale={0.65} yOffset={-16} />
    <line x1="20" y1="35" x2="20" y2="55" stroke="#bc6c25" strokeWidth="1" />
    <line x1="80" y1="35" x2="80" y2="55" stroke="#bc6c25" strokeWidth="1" />
  </svg>
);

// Level 1: Căn Nhà Gỗ
const HouseLevel1 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl transform transition-transform duration-500 hover:scale-105">
    <IsoTile colorTop="#a3b18a" colorLeft="#588157" colorRight="#3a5a40" height={10} />
    <IsoTile colorTop="#9c6644" colorLeft="#7f4f24" colorRight="#582f0e" height={15} scale={0.7} yOffset={-10} />
    <IsoTile colorTop="#b08968" colorLeft="#9c6644" colorRight="#7f4f24" height={10} scale={0.5} yOffset={-25} />
    <polygon points="50,15 80,30 50,45 20,30" fill="#e63946" />
    <polygon points="20,30 50,45 50,35" fill="#c1121f" />
    <polygon points="80,30 50,45 50,35" fill="#780000" />
    <rect x="40" y="55" width="10" height="15" fill="#3e2723" transform="skewY(26)" />
  </svg>
);

// Level 2: Biệt Thự
const HouseLevel2 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl transform transition-transform duration-500 hover:scale-105">
    <IsoTile colorTop="#a3b18a" colorLeft="#588157" colorRight="#3a5a40" height={10} />
    {/* Main body */}
    <IsoTile colorTop="#f8edeb" colorLeft="#fcd5ce" colorRight="#fbc4ab" height={20} scale={0.8} yOffset={-10} />
    {/* Balcony */}
    <IsoTile colorTop="#e8e8e4" colorLeft="#d8e2dc" colorRight="#ece4db" height={5} scale={0.4} yOffset={-30} cx={30} cy={50} />
    {/* Roof */}
    <polygon points="50,5 90,25 50,45 10,25" fill="#0077b6" />
    <polygon points="10,25 50,45 50,35" fill="#0096c7" />
    <polygon points="90,25 50,45 50,35" fill="#03045e" />
    <circle cx="50" cy="65" r="4" fill="#a8dadc" />
    <circle cx="30" cy="55" r="4" fill="#a8dadc" />
    <circle cx="70" cy="75" r="4" fill="#a8dadc" />
  </svg>
);

// Level 3: Lâu Đài
const HouseLevel3 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl transform transition-transform duration-500 hover:scale-105">
    <IsoTile colorTop="#a3b18a" colorLeft="#588157" colorRight="#3a5a40" height={10} />
    {/* Main castle body */}
    <IsoTile colorTop="#e9ecef" colorLeft="#ced4da" colorRight="#adb5bd" height={25} scale={0.8} yOffset={-10} />
    {/* Towers */}
    <IsoTile colorTop="#e9ecef" colorLeft="#ced4da" colorRight="#adb5bd" height={35} scale={0.25} yOffset={-20} cx={15} cy={40} />
    <IsoTile colorTop="#e9ecef" colorLeft="#ced4da" colorRight="#adb5bd" height={35} scale={0.25} yOffset={-20} cx={85} cy={75} />
    {/* Roof main */}
    <polygon points="50,0 80,20 50,40 20,20" fill="#9d0208" />
    {/* Tower roofs */}
    <polygon points="15,0 25,10 15,20 5,10" fill="#d00000" />
    <polygon points="85,35 95,45 85,55 75,45" fill="#d00000" />
    {/* Door */}
    <path d="M 45 70 Q 50 60 55 75 L 55 90 L 45 85 Z" fill="#370617" />
    <circle cx="45" cy="55" r="3" fill="#ffb703" />
    <circle cx="60" cy="62" r="3" fill="#ffb703" />
  </svg>
);


export default function TownBuilder({ setActiveTab }) {
  const [houses, setHouses] = useState(INITIAL_TOWN);
  const [activeHouseIndex, setActiveHouseIndex] = useState(0);
  
  // Quiz Overlay State
  const [activeQuizRoom, setActiveQuizRoom] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleAnswerChange = (qId, val) => {
    setUserAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const submitQuiz = () => {
    let newScore = 0;
    activeQuizRoom.questions.forEach(q => {
      const uAns = userAnswers[q.id];
      if (!uAns) return;
      if ((q.type === 'mcq' || q.type === 'true_false') && uAns === q.correct) {
        newScore += 1;
      } else if (q.type === 'fill_blank' && uAns.trim().toLowerCase() === q.correct.toLowerCase()) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setIsSubmitted(true);
  };

  const getBuildingSvg = (completed, total, houseIndex) => {
    if (completed === 0) return <PhaseWasteland />;
    if (completed <= 2) return <PhaseFoundation />;
    if (completed < total) return <PhaseWalls />;
    
    // Finished phase varies by houseIndex (0 = Wood, 1 = Villa, 2 = Castle)
    if (houseIndex === 0) return <HouseLevel1 />;
    if (houseIndex === 1) return <HouseLevel2 />;
    return <HouseLevel3 />;
  };

  const getPhaseName = (completed, total) => {
    if (completed === 0) return 'Bãi đất trống';
    if (completed <= 2) return 'Đổ móng';
    if (completed < total) return 'Đang xây dựng';
    return 'Hoàn thiện';
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-3xl font-black text-gray-800 mb-3 flex items-center gap-3">
          <Map className="text-sky-500" size={32} />
          Thị trấn nhỏ
        </h1>
        <p className="text-gray-500 font-medium text-lg max-w-3xl">
          Giải các bài tập <span className="font-bold text-sky-600">Nâng Cao</span> theo chuyên đề để xây dựng các công trình. Kiến trúc sẽ ngày càng sang trọng!
        </p>
      </header>

      {/* Mindmap Town View */}
      <div className="bg-gradient-to-br from-sky-50 to-indigo-100 rounded-[2.5rem] p-6 shadow-inner border border-sky-100 relative overflow-hidden">
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
                  {getBuildingSvg(comp, tot, index)}
                  
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

      {/* QUIZ OVERLAY MODAL */}
      {activeQuizRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-8">
            <div className="bg-gradient-to-r from-sky-600 to-indigo-700 p-6 sm:p-8 text-white flex justify-between items-center sticky top-0 z-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black mb-1">Thử thách Nâng cao</h2>
                <p className="text-sky-100 font-medium">{activeQuizRoom.subject} - {activeQuizRoom.title}</p>
              </div>
              <button onClick={() => setActiveQuizRoom(null)} className="p-2 hover:bg-white/20 rounded-full transition text-white">
                <X size={28} />
              </button>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="space-y-8">
                {activeQuizRoom.questions?.map((q, idx) => (
                  <div key={q.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Câu {idx + 1}: {q.text}</h3>
                    
                    {(q.type === 'mcq' || q.type === 'true_false') ? (
                      <div className="space-y-3">
                        {q.options.map(opt => (
                          <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                            userAnswers[q.id] === opt ? 'border-sky-500 bg-sky-50' : 'border-slate-200 hover:border-slate-300 bg-white'
                          } ${isSubmitted && opt === q.correct ? 'border-green-500 bg-green-50' : ''}`}>
                            <input 
                              type="radio" 
                              name={`q-${q.id}`} 
                              value={opt} 
                              checked={userAnswers[q.id] === opt} 
                              onChange={() => handleAnswerChange(q.id, opt)}
                              disabled={isSubmitted}
                              className="w-5 h-5 text-sky-500 border-slate-300 focus:ring-sky-500"
                            />
                            <span className={`font-medium ${isSubmitted && opt === q.correct ? 'text-green-700' : 'text-slate-700'}`}>{opt}</span>
                            {isSubmitted && opt === q.correct && <CheckCircle2 size={20} className="ml-auto text-green-500" />}
                            {isSubmitted && userAnswers[q.id] === opt && opt !== q.correct && <X size={20} className="ml-auto text-red-500" />}
                          </label>
                        ))}
                      </div>
                    ) : q.type === 'fill_blank' ? (
                      <div className="space-y-3">
                        <input 
                          type="text"
                          value={userAnswers[q.id] || ''}
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          disabled={isSubmitted}
                          placeholder="Nhập đáp án của bạn..."
                          className={`w-full p-4 border-2 rounded-xl outline-none transition text-slate-700 ${
                            !isSubmitted ? 'border-slate-200 focus:border-sky-500' :
                            userAnswers[q.id]?.trim().toLowerCase() === q.correct.toLowerCase() ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-500 bg-red-50 text-red-800'
                          }`}
                        />
                        {isSubmitted && userAnswers[q.id]?.trim().toLowerCase() !== q.correct.toLowerCase() && (
                          <div className="p-3 bg-sky-50 rounded-xl border border-sky-100">
                            <span className="text-xs font-bold text-sky-600 block mb-1">Đáp án đúng:</span>
                            <span className="font-bold text-slate-800">{q.correct}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <textarea 
                          value={userAnswers[q.id] || ''}
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          disabled={isSubmitted}
                          placeholder="Trình bày tự luận..."
                          className="w-full h-32 p-4 border-2 border-slate-200 rounded-xl focus:border-sky-500 outline-none transition text-slate-700 resize-none"
                        ></textarea>
                        {isSubmitted && (
                          <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                            <span className="text-xs font-bold text-sky-600 block mb-1">Gợi ý / Bareme:</span>
                            <span className="font-medium text-slate-800">{q.correct}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {isSubmitted && q.explanation && (
                      <div className="mt-4 text-sm bg-orange-50 text-orange-800 p-3 rounded-xl border border-orange-200 font-medium">
                        {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                {!isSubmitted ? (
                  <button 
                    onClick={submitQuiz}
                    disabled={Object.keys(userAnswers).length === 0}
                    className="px-10 py-4 bg-sky-600 text-white font-bold rounded-xl text-lg hover:bg-sky-700 transition-all shadow-lg disabled:opacity-50"
                  >
                    Nộp bài kiểm tra
                  </button>
                ) : (
                  <div className="text-center w-full">
                    <div className="bg-green-100 p-6 rounded-2xl mb-6">
                      <Trophy size={48} className="text-green-500 mx-auto mb-3" />
                      <h3 className="text-2xl font-black text-green-700">Đã hoàn thành!</h3>
                      <p className="text-green-800 font-medium mt-2">Phòng {activeQuizRoom.subject} đã được xây dựng thành công.</p>
                    </div>
                    <button 
                      onClick={markRoomCompleted}
                      className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 transition shadow-lg w-full sm:w-auto"
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
