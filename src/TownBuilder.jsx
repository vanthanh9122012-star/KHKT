import React, { useState, useEffect } from 'react';
import { Map, CheckCircle2, Lock, Play, Check, Book, Brain, Star, Award, Compass, ArrowRight, X } from 'lucide-react';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

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

const INITIAL_TOWN = [
  {
    id: 1,
    title: 'Ngôi nhà 1: Khởi hành',
    rooms: [
      { id: '1-math', subject: 'Toán', title: 'Căn bậc hai', completed: false, knowledge: 'Căn bậc hai của số a không âm là x sao cho x² = a.' },
      { id: '1-lit', subject: 'Văn', title: 'Chuyện người con gái Nam Xương', completed: false, knowledge: 'Phản ánh số phận bi kịch của người phụ nữ dưới chế độ phong kiến.' },
      { id: '1-eng', subject: 'Anh', title: 'Unit 1: Local Environment', completed: false, knowledge: 'Từ vựng về các làng nghề truyền thống và môi trường địa phương.' },
      { id: '1-phys', subject: 'Vật lý', title: 'Định luật Ôm', completed: false, knowledge: 'Cường độ dòng điện I tỉ lệ thuận với hiệu điện thế U và tỉ lệ nghịch với điện trở R (I = U/R).' },
      { id: '1-chem', subject: 'Hóa học', title: 'Tính chất của Oxit', completed: false, knowledge: 'Oxit bazơ tác dụng với axit tạo muối & nước.' },
      { id: '1-bio', subject: 'Sinh học', title: 'Di truyền học Menđen', completed: false, knowledge: 'Lai một cặp tính trạng: F2 phân li theo tỉ lệ 3 trội : 1 lặn.' },
      { id: '1-his', subject: 'Sử', title: 'Liên Xô & Đông Âu', completed: false, knowledge: 'Công cuộc khôi phục kinh tế và xây dựng CNXH sau chiến tranh thế giới 2.' },
      { id: '1-geo', subject: 'Địa', title: 'Dân tộc Việt Nam', completed: false, knowledge: 'Việt Nam có 54 dân tộc, người Kinh chiếm đa số.' }
    ]
  },
  {
    id: 2,
    title: 'Ngôi nhà 2: Tăng tốc',
    rooms: [
      { id: '2-math', subject: 'Toán', title: 'Hàm số bậc nhất', completed: false, knowledge: 'Hàm số y = ax + b (a ≠ 0). Đồng biến khi a > 0.' },
      { id: '2-lit', subject: 'Văn', title: 'Hoàng Lê nhất thống chí', completed: false, knowledge: 'Tái hiện chân thực hình ảnh người anh hùng Nguyễn Huệ.' },
      { id: '2-eng', subject: 'Anh', title: 'Unit 2: City Life', completed: false, knowledge: 'Các tính từ miêu tả cuộc sống thành thị và ngữ pháp so sánh kép.' },
      { id: '2-phys', subject: 'Vật lý', title: 'Đoạn mạch nối tiếp', completed: false, knowledge: 'I = I1 = I2, U = U1 + U2, R = R1 + R2' },
      { id: '2-chem', subject: 'Hóa học', title: 'Tính chất của Axit', completed: false, knowledge: 'Làm quỳ tím hóa đỏ, tác dụng với kim loại giải phóng H2.' },
      { id: '2-bio', subject: 'Sinh học', title: 'Nhiễm sắc thể', completed: false, knowledge: 'Cấu trúc mang gen, có bản chất là ADN kết hợp prôtêin.' },
      { id: '2-his', subject: 'Sử', title: 'Các nước Á, Phi, Mĩ Latinh', completed: false, knowledge: 'Phong trào giải phóng dân tộc bùng nổ mạnh mẽ.' },
      { id: '2-geo', subject: 'Địa', title: 'Dân cư và nguồn lao động', completed: false, knowledge: 'Nguồn lao động dồi dào, tăng nhanh, cần nhiều việc làm.' }
    ]
  },
  {
    id: 3,
    title: 'Ngôi nhà 3: Vượt sóng',
    rooms: [
      { id: '3-math', subject: 'Toán', title: 'Hệ phương trình bậc nhất 2 ẩn', completed: false, knowledge: 'Sử dụng phương pháp thế hoặc cộng đại số để giải.' },
      { id: '3-lit', subject: 'Văn', title: 'Truyện Kiều', completed: false, knowledge: 'Đỉnh cao của văn học trung đại Việt Nam do Nguyễn Du sáng tác.' },
      { id: '3-eng', subject: 'Anh', title: 'Unit 3: Teen stress', completed: false, knowledge: 'Các kĩ năng ứng phó với áp lực tuổi vị thành niên.' },
      { id: '3-phys', subject: 'Vật lý', title: 'Đoạn mạch song song', completed: false, knowledge: 'U = U1 = U2, I = I1 + I2, 1/R = 1/R1 + 1/R2' },
      { id: '3-chem', subject: 'Hóa học', title: 'Tính chất của Bazơ', completed: false, knowledge: 'Làm quỳ tím hóa xanh, phenolphtalein hóa hồng.' },
      { id: '3-bio', subject: 'Sinh học', title: 'ADN và bản chất gen', completed: false, knowledge: 'Cấu trúc xoắn kép, nguyên tắc bổ sung A-T, G-X.' },
      { id: '3-his', subject: 'Sử', title: 'Nước Mĩ sau CTTG 2', completed: false, knowledge: 'Sự vươn lên thành siêu cường kinh tế số 1 thế giới.' },
      { id: '3-geo', subject: 'Địa', title: 'Nông nghiệp Việt Nam', completed: false, knowledge: 'Chuyển dịch cơ cấu cây trồng, ứng dụng công nghệ cao.' }
    ]
  }
];

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
    {/* Dirt patches */}
    <ellipse cx="50" cy="50" rx="15" ry="8" fill="#d4a373" opacity="0.8" />
    <ellipse cx="30" cy="55" rx="8" ry="4" fill="#bc6c25" opacity="0.6" />
    <ellipse cx="70" cy="45" rx="10" ry="5" fill="#bc6c25" opacity="0.6" />
  </svg>
);

const PhaseFoundation = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl transform transition-transform duration-500 hover:scale-105">
    <IsoTile colorTop="#a3b18a" colorLeft="#588157" colorRight="#3a5a40" height={10} />
    {/* Foundation */}
    <IsoTile colorTop="#ced4da" colorLeft="#adb5bd" colorRight="#6c757d" height={8} scale={0.7} yOffset={-4} />
    {/* Construction materials */}
    <rect x="40" y="45" width="8" height="4" fill="#d4a373" transform="skewY(26)" />
  </svg>
);

const PhaseWalls = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl transform transition-transform duration-500 hover:scale-105">
    <IsoTile colorTop="#a3b18a" colorLeft="#588157" colorRight="#3a5a40" height={10} />
    <IsoTile colorTop="#ced4da" colorLeft="#adb5bd" colorRight="#6c757d" height={8} scale={0.7} yOffset={-4} />
    {/* Partial Walls */}
    <IsoTile colorTop="#fefae0" colorLeft="#faedcd" colorRight="#e9edc9" height={12} scale={0.65} yOffset={-16} />
    {/* Scaffolding */}
    <line x1="20" y1="35" x2="20" y2="55" stroke="#bc6c25" strokeWidth="1" />
    <line x1="80" y1="35" x2="80" y2="55" stroke="#bc6c25" strokeWidth="1" />
  </svg>
);

const PhaseHighWalls = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl transform transition-transform duration-500 hover:scale-105">
    <IsoTile colorTop="#a3b18a" colorLeft="#588157" colorRight="#3a5a40" height={10} />
    <IsoTile colorTop="#ced4da" colorLeft="#adb5bd" colorRight="#6c757d" height={8} scale={0.7} yOffset={-4} />
    {/* Full Walls */}
    <IsoTile colorTop="#fefae0" colorLeft="#faedcd" colorRight="#e9edc9" height={25} scale={0.65} yOffset={-29} />
    {/* Left Windows */}
    <polygon points="25,48 40,55 40,45 25,38" fill="#caf0f8" opacity="0.8" />
    <polygon points="60,55 75,48 75,38 60,45" fill="#caf0f8" opacity="0.8" />
  </svg>
);

const PhaseComplete = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl transform transition-transform duration-500 hover:scale-105">
    <IsoTile colorTop="#a3b18a" colorLeft="#588157" colorRight="#3a5a40" height={10} />
    <IsoTile colorTop="#ced4da" colorLeft="#adb5bd" colorRight="#6c757d" height={8} scale={0.7} yOffset={-4} />
    <IsoTile colorTop="#fefae0" colorLeft="#faedcd" colorRight="#e9edc9" height={25} scale={0.65} yOffset={-29} />
    <polygon points="22,46 32,51 32,41 22,36" fill="#caf0f8" />
    <polygon points="38,54 48,59 48,45 38,40" fill="#d4a373" />
    <polygon points="60,55 75,48 75,38 60,45" fill="#caf0f8" />
    {/* Roof */}
    <g transform="translate(0, -32) scale(0.7) translate(21.5, 21.5)">
      <polygon points="50,15 10,50 50,70 90,50" fill="#e63946" />
      <polygon points="10,50 50,70 50,85 10,65" fill="#d90429" />
      <polygon points="90,50 50,70 50,85 90,65" fill="#9f031e" />
    </g>
  </svg>
);

export default function TownBuilder({ setActiveTab }) {
  const [houses, setHouses] = useState(INITIAL_TOWN);
  const [activeHouseIndex, setActiveHouseIndex] = useState(0);

  useEffect(() => {
    if (!auth.currentUser) return;
    const loadTown = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists() && userDoc.data().townBuilder) {
          const savedTown = userDoc.data().townBuilder;
          if (savedTown.length > 0) {
            setHouses(savedTown);
          }
        }
      } catch (err) {
        console.error("Lỗi tải tiến độ thị trấn:", err);
      }
    };
    loadTown();
  }, []);

  // Unlocked if previous house has all rooms completed
  const isHouseUnlocked = (index) => {
    if (index === 0) return true;
    const prevHouse = houses[index - 1];
    return prevHouse.rooms.every(r => r.completed);
  };

  const activeHouse = houses[activeHouseIndex];
  const completedRooms = activeHouse.rooms.filter(r => r.completed).length;
  const totalRooms = activeHouse.rooms.length; // usually 8
  
  const toggleRoom = (roomId) => {
    const newHouses = [...houses];
    const hIndex = newHouses.findIndex(h => h.id === activeHouse.id);
    const rIndex = newHouses[hIndex].rooms.findIndex(r => r.id === roomId);
    
    newHouses[hIndex].rooms[rIndex].completed = !newHouses[hIndex].rooms[rIndex].completed;
    setHouses(newHouses);
    
    if (auth.currentUser) {
      setDoc(doc(db, 'users', auth.currentUser.uid), {
        townBuilder: newHouses
      }, { merge: true }).catch(err => console.error("Lỗi đồng bộ thị trấn:", err));
    }
  };

  const getBuildingSvg = (completed, total) => {
    if (completed === 0) return <PhaseWasteland />;
    if (completed <= 2) return <PhaseFoundation />;
    if (completed <= 5) return <PhaseWalls />;
    if (completed < total) return <PhaseHighWalls />;
    return <PhaseComplete />;
  };

  const getPhaseName = (completed, total) => {
    if (completed === 0) return 'Đất hoang';
    if (completed <= 2) return 'Xây nền móng';
    if (completed <= 5) return 'Dựng tường';
    if (completed < total) return 'Hoàn thiện tường';
    return 'Nhà hoàn chỉnh';
  };

  return (
    <div className="space-y-8 animate-fade-in pb-20">
      <header className="mb-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2 flex items-center gap-3">
          <Compass className="text-sky-600" size={36} />
          Thị trấn Mindmap
        </h1>
        <p className="text-gray-500 max-w-2xl text-lg">
          Mỗi bài học là một <strong>Ngôi nhà</strong>. Bên trong là <strong>8 Căn phòng</strong> tương ứng với 8 môn học. Hoàn thành kiến thức ở mỗi căn phòng để xây dựng hoàn chỉnh một ngôi nhà!
        </p>
      </header>

      {/* Mindmap Town View */}
      <div className="bg-gradient-to-br from-sky-50 to-indigo-100 rounded-[2.5rem] p-6 shadow-inner border border-sky-100 relative overflow-hidden">
        {/* Decorative path */}
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
                {/* Connecting Line */}
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
                  {getBuildingSvg(comp, tot)}
                  
                  {/* Status Overlay */}
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

      {/* Inside the House: 8 Rooms (Subjects) */}
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
            <p className="text-gray-500 mt-2 font-medium">Bên trong ngôi nhà có 8 căn phòng. Mở khóa tri thức ở mỗi phòng để hoàn thiện kiến trúc!</p>
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
              onClick={() => toggleRoom(room.id)}
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
    </div>
  );
}
