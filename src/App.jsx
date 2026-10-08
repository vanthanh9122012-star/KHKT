import { useState, useEffect } from 'react';
import { Home, BookOpen, Clock, BarChart2, CheckCircle2, Circle, Play, Pause, RotateCcw, Brain, Check, X, Filter, Book, Hash, Layers, Menu, Award, Trophy, FileText, Edit3, ClipboardList, Gem, Calendar, Plus, Trash2, BookHeart, Sparkles, Quote, Mail, Link, ShieldCheck, Activity, LogOut, Users, Crown, Languages, TrendingUp, Flame, Target, Compass, Bot, Gamepad2, HelpCircle, Map, Loader2, Save } from 'lucide-react';
import GamesManager from './GamesManager';
import TournamentManager from './TournamentManager';
import QuizManager from './QuizManager';
import ReviewManager from './ReviewManager';
import TimetableManager from './TimetableManager';
import PomodoroFocus from './PomodoroFocus';
import Dashboard from './Dashboard';
import AssessmentManager from './AssessmentManager';
import TownBuilder from './TownBuilder';
import LoginPage from './LoginPage';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

const SUBJECTS = ['Tổng hợp', 'Toán', 'Văn', 'Anh', 'Sử', 'Địa', 'Vật lý', 'Hóa học', 'Sinh học'];
const GRADES = ['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9'];

const SUBJECT_COLORS = {
  'Tổng hợp': 'text-indigo-600 bg-indigo-50 border-indigo-200',
  'Toán': 'text-blue-600 bg-blue-50 border-blue-200',
  'Văn': 'text-pink-600 bg-pink-50 border-pink-200',
  'Anh': 'text-emerald-600 bg-emerald-50 border-emerald-200',
  'Sử': 'text-amber-600 bg-amber-50 border-amber-200',
  'Địa': 'text-orange-600 bg-orange-50 border-orange-200',
  'Vật lý': 'text-purple-600 bg-purple-50 border-purple-200',
  'Hóa học': 'text-cyan-600 bg-cyan-50 border-cyan-200',
  'Sinh học': 'text-lime-600 bg-lime-50 border-lime-200',
};

const getSubjectStyle = (subject) => SUBJECT_COLORS[subject] || 'text-gray-600 bg-gray-50 border-gray-200';



const DUMMY_TASKS = [
  { id: 1, title: 'Giải phương trình bậc 2', subject: 'Toán', grade: 'Lớp 9', completed: false, time: '08:00' },
  { id: 2, title: 'Soạn bài Chiếc Lược Ngà', subject: 'Văn', grade: 'Lớp 9', completed: true, time: '09:30' },
  { id: 3, title: 'Làm bài tập trắc nghiệm Tenses', subject: 'Anh', grade: 'Lớp 8', completed: false, time: '14:00' },
  { id: 4, title: 'Ôn tập Lịch sử thế giới cận đại', subject: 'Sử', grade: 'Lớp 8', completed: false, time: '15:00' },
  { id: 5, title: 'Đọc bản đồ địa hình', subject: 'Địa', grade: 'Lớp 6', completed: false, time: '16:00' },
  { id: 6, title: 'Thực hành đo lực ma sát', subject: 'Vật lý', grade: 'Lớp 6', completed: true, time: '10:00' },
  { id: 7, title: 'Bài tập chuỗi phản ứng', subject: 'Hóa học', grade: 'Lớp 9', completed: false, time: '19:00' },
  { id: 8, title: 'Nghiên cứu cấu tạo tế bào', subject: 'Sinh học', grade: 'Lớp 7', completed: false, time: '20:00' },
];

const Sidebar = ({ activeTab, setActiveTab, gamification, currentUser, setShowAuthModal, handleLogout }) => {
  const menuItems = [
    { id: 'dashboard', icon: <Home size={20} />, label: 'Tổng quan' },
    { id: 'timetable', icon: <Calendar size={20} />, label: 'Thời gian biểu' },
    { id: 'flashcard', icon: <Layers size={20} />, label: 'Flashcard' },
    { id: 'quiz', icon: <ClipboardList size={20} />, label: 'Luyện thi' },
    { id: 'games', icon: <Gamepad2 size={20} />, label: 'Trò chơi' },
      { id: 'competition', icon: <Trophy size={20} />, label: 'Cuộc thi' },
    { id: 'tasks', icon: <Map size={20} />, label: 'My Universe' },
    { id: 'review', icon: <Brain size={20} />, label: 'Ôn tập lỗi sai' },
    { id: 'focus', icon: <Clock size={20} />, label: 'Tập trung' },
    { id: 'leaderboard', icon: <Trophy size={20} />, label: 'Bảng xếp hạng' },
  ];

  return (
    <div className="w-24 md:w-64 h-full bg-sky-100/80 backdrop-blur-md border-r border-sky-200/50 flex flex-col items-center md:items-start py-8 px-4 transition-all duration-300">
      <div className="flex items-center gap-3 px-2 mb-10 text-sky-600 font-bold text-xl md:text-2xl">
        <div className="w-10 h-10 rounded-xl bg-sky-200/50 flex items-center justify-center">
          <BookOpen size={24} />
        </div>
        <span className="hidden md:block">StudyFlow</span>
      </div>
      
      <div className="w-full space-y-2 flex-1 overflow-y-auto hide-scrollbar">
        {menuItems.map(item => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200
              ${activeTab === item.id 
                ? 'bg-sky-200/70 backdrop-blur-md text-sky-900 shadow-lg shadow-sky-300/60 border border-sky-300/50 font-bold transform scale-105' 
                : 'text-sky-700/70 hover:bg-white/40 hover:text-sky-900'}`}
          >
            <div className={`${activeTab === item.id ? 'text-sky-600 drop-shadow-sm' : 'text-sky-700/50'}`}>
              {item.icon}
            </div>
            <span className="hidden md:block font-medium">{item.label}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-auto w-full pt-6 border-t border-pink-200/50 flex flex-col gap-3 px-2">
        {currentUser ? (
          <div className="flex items-center gap-3 cursor-pointer hover:bg-white/40 p-2 rounded-xl transition-all relative group">
            <div className="relative">
              <img src={`https://ui-avatars.com/api/?name=${currentUser.username}&background=e0f2fe&color=0369a1`} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-sky-200" />
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                Lv.{gamification?.level || 1}
              </div>
            </div>
            <div className="hidden md:block text-left w-full overflow-hidden">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-800 truncate">{currentUser.username}</span>
                <span className="text-[10px] font-bold text-sky-600">{gamification?.xp || 0}/{(gamification?.level || 1) * 50} XP</span>
              </div>
              <div className="w-full bg-sky-200/50 h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div 
                  className="bg-sky-500 h-full rounded-full transition-all duration-500" 
                  style={{width: `${((gamification?.xp || 0) / ((gamification?.level || 1) * 50)) * 100}%`}}
                ></div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="text-[11px] text-gray-500 truncate font-medium flex items-center gap-1">
                  <Award size={12} className="text-yellow-500" />
                  {gamification?.badges?.[gamification.badges.length - 1] || 'Tân binh'}
                </div>
                <div className="text-[11px] font-bold text-red-500 flex items-center gap-1 bg-red-50 px-1.5 py-0.5 rounded">
                  <Gem size={12} />
                  {gamification?.rubies || 0}
                </div>
              </div>
            </div>
            {/* Logout Overlay */}
            <div onClick={handleLogout} className="absolute inset-0 bg-red-500/90 text-white font-bold rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              Đăng xuất
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setShowAuthModal(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 text-white rounded-xl font-bold shadow-md shadow-sky-300/50 hover:bg-sky-600 transition"
          >
            Đăng nhập
          </button>
        )}
      </div>
    </div>
  );
};

const FlashcardManager = ({ addReward }) => {
  const [progress, setProgress] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Trạng thái chơi Flashcard
  const [dueList, setDueList] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isStudying, setIsStudying] = useState(false);

  // Trạng thái tạo mới thẻ
  const [isCreating, setIsCreating] = useState(false);
  const [newCard, setNewCard] = useState({
    subject: 'Anh',
    grade: 'Lớp 9',
    question: '',
    answer: ''
  });

  // Trạng thái tạo bằng AI
  const [isAIGeneratorOpen, setIsAIGeneratorOpen] = useState(false);
  const [aiMaterial, setAiMaterial] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Khởi tạo tiến độ từ Firebase và localStorage
  useEffect(() => {
    const loadFlashcards = async () => {
      let loadedProgress = [];
      const uid = auth.currentUser?.uid;
      
      try {
        if (uid) {
          const userDoc = await getDoc(doc(db, 'users', uid));
          if (userDoc.exists() && userDoc.data().flashcards) {
            loadedProgress = userDoc.data().flashcards;
          } else {
             const saved = localStorage.getItem('studyflow_vocab');
             if (saved) loadedProgress = JSON.parse(saved);
          }
        } else {
           const saved = localStorage.getItem('studyflow_vocab');
           if (saved) loadedProgress = JSON.parse(saved);
        }
      } catch (e) {
        console.error("Lỗi khi tải flashcards:", e);
        const saved = localStorage.getItem('studyflow_vocab');
        if (saved) loadedProgress = JSON.parse(saved);
      }

      // Xóa các thẻ lỗi
      const originalLength = loadedProgress.length;
      loadedProgress = loadedProgress.filter(c => c.question && c.question.trim() !== '' && c.question !== 'undefined');
      
      // Gộp các card mặc định
      const newCards = INITIAL_FLASHCARDS.filter(c => !loadedProgress.find(lp => lp.id === c.id));
      if (newCards.length > 0) {
        const formattedNew = newCards.map(c => ({
          ...c,
          interval: 0,
          eFactor: 2.5,
          nextReviewTime: Date.now(),
          mistakes: 0
        }));
        loadedProgress = [...loadedProgress, ...formattedNew];
      }

      setProgress(loadedProgress);
      syncProgress(loadedProgress);
    };

    loadFlashcards();
  }, []);

  const syncProgress = (newProgress) => {
    localStorage.setItem('studyflow_vocab', JSON.stringify(newProgress));
    if (auth.currentUser) {
      setDoc(doc(db, 'users', auth.currentUser.uid), { flashcards: newProgress }, { merge: true })
        .catch(err => console.error("Lỗi đồng bộ flashcards:", err));
    }
  };

  const getFilteredCards = () => {
    return progress.filter(p => 
      (!selectedSubject || p.subject === selectedSubject) &&
      (!selectedGrade || p.grade === selectedGrade)
    );
  };

  const getDueCardsCount = () => {
    const now = Date.now();
    return getFilteredCards().filter(p => p.nextReviewTime <= now).length;
  };

  const startStudy = () => {
    const now = Date.now();
    const due = getFilteredCards().filter(p => p.nextReviewTime <= now);
    setDueList(due.sort(() => Math.random() - 0.5));
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setIsStudying(true);
  };

  const handleAnswer = (isRemembered) => {
    const currentCard = dueList[currentCardIndex];
    
    // Cập nhật thuật toán SuperMemo-2 siêu cơ bản
    const updatedProgress = progress.map(item => {
      if (item.id === currentCard.id) {
        let newInterval, newEFactor;
        if (isRemembered) {
          // Nhớ -> Tăng interval và tặng XP, Ruby
          newInterval = item.interval === 0 ? 1 : (item.interval === 1 ? 2 : Math.ceil(item.interval * item.eFactor));
          newEFactor = item.eFactor + 0.1;
        } else {
          // Quên -> Reset interval về 1 phút
          newInterval = 1;
          newEFactor = Math.max(1.3, item.eFactor - 0.2);
        }
        
        return {
          ...item,
          interval: newInterval,
          eFactor: newEFactor,
          nextReviewTime: Date.now() + newInterval * 60 * 1000, 
          mistakes: !isRemembered ? (item.mistakes || 0) + 1 : (item.mistakes || 0),
        };
      }
      return item;
    });

    syncProgress(updatedProgress);
    setProgress(updatedProgress);
    
    if (currentCardIndex + 1 < dueList.length) {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      // Hết bài
      setIsStudying(false);
    }
  };

  const handleCreateCard = (e) => {
    e.preventDefault();
    if (!newCard.question.trim() || !newCard.answer.trim()) return;

    const newId = Math.max(...progress.map(c => c.id), 0) + 1;
    const cardToAdd = {
      ...newCard,
      id: newId,
      interval: 0,
      eFactor: 2.5,
      nextReviewTime: Date.now(),
      mistakes: 0
    };

    const updatedProgress = [...progress, cardToAdd];
    setProgress(updatedProgress);
    syncProgress(updatedProgress);
    
    // Reset form but keep subject/grade
    setNewCard(prev => ({ ...prev, question: '', answer: '' }));
    setIsCreating(false);
  };

  const handleAIGenerate = async (e) => {
    e.preventDefault();
    if (!aiMaterial.trim()) return;
    
    setIsGenerating(true);
    try {
      const apiKey = document.getElementById('gemini_api_key_input').value.trim();
      const { GoogleGenAI } = await import('@google/genai');
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Bạn là một giáo viên tận tâm. Hãy đọc tài liệu dưới đây và trích xuất những kiến thức quan trọng nhất. Sau đó, hãy tạo các cặp câu hỏi - câu trả lời ngắn gọn (như flashcard) để học sinh ôn tập.
Trả về KẾT QUẢ DUY NHẤT DƯỚI DẠNG MỘT MẢNG JSON hợp lệ. KHÔNG THÊM BẤT KỲ VĂN BẢN NÀO KHÁC BÊN NGOÀI JSON. Cấu trúc mỗi object trong mảng phải là:
{ "question": "câu hỏi", "answer": "câu trả lời ngắn gọn" }

TÀI LIỆU:
${aiMaterial}`;

      const response = await ai.interactions.create({
        model: 'gemini-3.8-flash',
        input: prompt,
      });

      const responseText = response.output_text;
      
      const jsonMatch = responseText.match(/\[[\s\S]*\]/);
      if (!jsonMatch) {
        throw new Error("Không tìm thấy kết quả JSON hợp lệ từ AI");
      }
      
      const parsedCards = JSON.parse(jsonMatch[0]);
      const baseId = Math.max(...progress.map(c => c.id), 0) + 1;
      
      const newAiCards = parsedCards.map((card, idx) => {
        const keys = Object.keys(card);
        const q = card.question || card.Question || card["câu hỏi"] || card["Câu hỏi"] || card[keys[0]] || "Lỗi câu hỏi";
        const a = card.answer || card.Answer || card["câu trả lời"] || card["Câu trả lời"] || card[keys[1]] || "Lỗi đáp án";
        
        return {
          id: baseId + idx,
          subject: selectedSubject || 'Khác',
          grade: selectedGrade || 'Tự do',
          question: String(q),
          answer: String(a),
          interval: 0,
          eFactor: 2.5,
          nextReviewTime: Date.now(),
          mistakes: 0
        };
      });

      const updatedProgress = [...progress, ...newAiCards];
      setProgress(updatedProgress);
      syncProgress(updatedProgress);
      
      setAiMaterial('');
      setIsAIGeneratorOpen(false);
      alert(`Đã tạo thành công ${newAiCards.length} flashcard từ tài liệu của bạn!`);
      
    } catch (error) {
      console.error("Lỗi khi tạo flashcard bằng AI:", error);
      alert("Đã có lỗi xảy ra khi tạo flashcard. Vui lòng kiểm tra lại tài liệu hoặc thử lại sau.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (isStudying) {
    if (dueList.length === 0) return null;
    const currentCard = dueList[currentCardIndex];

    return (
      <div className="max-w-2xl mx-auto py-8 animate-fade-in flex flex-col h-full">
        <header className="mb-8 text-center flex justify-between items-center">
            <button onClick={() => setIsStudying(false)} className="text-gray-400 hover:text-gray-700">
                &larr; Quay lại
            </button>
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Ôn tập thẻ ghi nhớ</h1>
                <p className="text-gray-500 text-sm">Tiến độ: {currentCardIndex + 1} / {dueList.length}</p>
            </div>
            <div className="w-16"></div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center w-full perspective-1000">
            {/* Flashcard */}
            <div className={`relative w-full h-80 rounded-3xl transition-all duration-500 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`} onClick={() => !isFlipped && setIsFlipped(true)}>
                
                {/* Mặt trước (Câu hỏi) */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-lg border-2 border-sky-100 flex flex-col items-center justify-center p-8 text-center">
                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className={`text-xs font-bold border px-2 py-1 rounded ${getSubjectStyle(currentCard.subject)}`}>{currentCard.subject}</span>
                        <span className="text-xs font-bold text-gray-600 bg-gray-100 border border-gray-200 px-2 py-1 rounded">{currentCard.grade}</span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Câu hỏi</p>
                    <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                        {currentCard.question}
                    </h2>
                    {!isFlipped && (
                        <div className="absolute bottom-6 text-gray-400 text-sm animate-pulse">
                            Bấm vào thẻ để lật xem đáp án
                        </div>
                    )}
                </div>

                {/* Mặt sau (Đáp án) */}
                <div className="absolute inset-0 backface-hidden bg-sky-50 rounded-3xl shadow-lg border-2 border-sky-200 flex flex-col items-center justify-center p-8 text-center rotate-y-180">
                    <p className="text-sky-400 text-sm font-medium mb-4 uppercase tracking-wider">Đáp án</p>
                    <h2 className="text-3xl font-bold text-sky-900 leading-tight">
                        {currentCard.answer}
                    </h2>
                </div>
            </div>

            {/* Nút đánh giá sau khi lật */}
            <div className={`mt-10 flex gap-4 transition-all duration-300 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <button 
                    onClick={() => handleAnswer(false)}
                    className="px-8 py-4 bg-white border-2 border-red-200 text-red-600 rounded-2xl font-bold hover:bg-red-50 hover:border-red-300 transition-all flex items-center gap-2 shadow-sm"
                >
                    <X size={20} /> Quên (Lặp lại ngay)
                </button>
                <button 
                    onClick={() => handleAnswer(true)}
                    className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-sky-700 transition-all flex items-center gap-2 shadow-lg shadow-sky-200"
                >
                    <Check size={20} /> Nhớ tốt (Giãn cách)
                </button>
            </div>
        </div>
      </div>
    );
  }

  // Màn hình chọn bộ lọc
  const totalDue = getDueCardsCount();

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Flashcard Ôn Tập</h1>
          <p className="text-gray-500">Kiểm tra kiến thức sau mỗi bài học SGK từ lớp 6 - 9.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => { setIsAIGeneratorOpen(!isAIGeneratorOpen); setIsCreating(false); }}
            className={`p-3 rounded-xl shadow-sm border transition-all text-sm font-medium flex items-center gap-2 ${isAIGeneratorOpen ? 'bg-indigo-50 text-indigo-600 border-indigo-200' : 'bg-white text-indigo-600 border-indigo-200 hover:bg-indigo-50'}`}
          >
            {isAIGeneratorOpen ? <X size={20} /> : <Bot size={20} />}
            <span className="hidden md:block">{isAIGeneratorOpen ? 'Hủy' : 'Tạo bằng AI'}</span>
          </button>
          <button 
            onClick={() => { setIsCreating(!isCreating); setIsAIGeneratorOpen(false); }}
            className={`p-3 rounded-xl shadow-sm border transition-all text-sm font-medium flex items-center gap-2 ${isCreating ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-primary text-white border-primary hover:bg-sky-600'}`}
          >
            {isCreating ? <X size={20} /> : <BookOpen size={20} />}
            <span className="hidden md:block">{isCreating ? 'Hủy' : 'Tạo thẻ mới'}</span>
          </button>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="p-3 bg-surface rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-all text-gray-600 flex items-center gap-2"
          >
            <Menu size={20} />
            <span className="text-sm font-medium hidden md:block">Bộ lọc</span>
          </button>
        </div>
      </header>

      {isAIGeneratorOpen && (
        <form onSubmit={handleAIGenerate} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 shadow-sm border border-indigo-100 mb-8 animate-fade-in">
          <h2 className="text-xl font-bold text-indigo-900 mb-2 flex items-center gap-2">
            <Bot className="text-indigo-600" size={24} /> Trợ lý AI tạo Flashcard
          </h2>
          <p className="text-indigo-700/70 text-sm mb-6">Dán nội dung bài học, tài liệu của bạn vào đây. AI sẽ tự động phân tích và trích xuất thành các thẻ ghi nhớ (Flashcard) dạng hỏi - đáp ngắn gọn.</p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">Gemini API Key của bạn:</label>
              <input 
                type="password"
                id="gemini_api_key_input"
                placeholder="Ví dụ: AIzaSy..."
                className="w-full p-4 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-gray-400"
                required
              />
              <p className="text-xs text-indigo-600 mt-1">Lưu ý: API Key của bạn bị lỗi hoặc đã hết hạn. Vui lòng lấy API Key mới bắt đầu bằng <b>AIza...</b> tại <a href="https://aistudio.google.com/app/apikey" target="_blank" className="underline font-bold">Google AI Studio</a>.</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">Nội dung tài liệu học tập:</label>
              <textarea 
                value={aiMaterial}
                onChange={(e) => setAiMaterial(e.target.value)}
                placeholder="Ví dụ: Chiến tranh thế giới thứ hai diễn ra từ năm 1939 đến năm 1945..."
                className="w-full p-4 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-xl h-48 resize-none focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-gray-400"
                required
              />
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit"
                disabled={isGenerating || !aiMaterial.trim()}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition flex items-center gap-2 shadow-md shadow-indigo-200 disabled:opacity-50"
              >
                {isGenerating ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
                {isGenerating ? 'AI đang phân tích & tạo thẻ...' : 'Bắt đầu tạo Flashcard tự động'}
              </button>
            </div>
          </div>
        </form>
      )}

      {isCreating && (
        <form onSubmit={handleCreateCard} className="bg-surface rounded-3xl p-6 shadow-sm border border-gray-100 mb-8 animate-fade-in">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <BookOpen className="text-primary" size={24} /> Tạo bộ thẻ từ vựng / kiến thức mới
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phân Môn</label>
              <select 
                value={newCard.subject}
                onChange={(e) => setNewCard({...newCard, subject: e.target.value})}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
              >
                {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Khối Lớp</label>
              <select 
                value={newCard.grade}
                onChange={(e) => setNewCard({...newCard, grade: e.target.value})}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
              >
                {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Mặt trước (Từ vựng / Câu hỏi)</label>
              <textarea 
                value={newCard.question}
                onChange={(e) => setNewCard({...newCard, question: e.target.value})}
                placeholder="Ví dụ: Serendipity"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl h-24 resize-none focus:ring-2 focus:ring-primary outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Mặt sau (Định nghĩa / Câu trả lời)</label>
              <textarea 
                value={newCard.answer}
                onChange={(e) => setNewCard({...newCard, answer: e.target.value})}
                placeholder="Ví dụ: Sự tình cờ may mắn"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl h-24 resize-none focus:ring-2 focus:ring-primary outline-none"
                required
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button 
              type="submit"
              className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-md shadow-sky-200 hover:bg-sky-600 transition flex items-center gap-2"
            >
              <Check size={20} /> Lưu Thẻ
            </button>
          </div>
        </form>
      )}

      {/* Filters Dropdown / Expandable */}
      <div className={`transition-all duration-300 overflow-hidden ${showFilters ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
        <div className="bg-surface rounded-3xl p-6 shadow-sm border border-gray-100 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-gray-700 font-semibold">
              <Hash size={18} className="text-pink-500" />
              <span>Khối học (Lớp 6 - 9)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setSelectedGrade(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!selectedGrade ? 'bg-pink-500 text-white shadow-md shadow-pink-200' : 'bg-pink-50 text-pink-600 hover:bg-pink-100'}`}
              >
                Tất cả các lớp
              </button>
              {GRADES.map(grade => (
                <button 
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedGrade === grade ? 'bg-pink-500 text-white shadow-md shadow-pink-200' : 'bg-pink-50 text-pink-600 hover:bg-pink-100'}`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3 text-gray-700 font-semibold">
              <Book size={18} className="text-primary" />
              <span>Phân Môn (8 Môn)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setSelectedSubject(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!selectedSubject ? 'bg-primary text-white shadow-md shadow-sky-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                Tất cả các môn
              </button>
              {SUBJECTS.map(sub => (
                <button 
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedSubject === sub ? 'bg-primary text-white shadow-md shadow-sky-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bảng điều khiển ôn tập */}
      <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-3xl p-8 shadow-sm border border-sky-100 text-center">
          <Layers size={48} className="mx-auto text-sky-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedSubject ? `${selectedSubject} - ` : 'Tất cả môn - '}
              {selectedGrade ? selectedGrade : 'Tất cả lớp'}
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Bạn đang có <strong className="text-primary text-lg">{totalDue}</strong> thẻ ghi nhớ cần ôn tập lúc này dựa theo thuật toán Spaced Repetition.
          </p>
          
          {totalDue > 0 ? (
              <button 
                  onClick={startStudy}
                  className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg shadow-sky-300 hover:bg-sky-700 transition-all hover:-translate-y-1 flex items-center gap-2 mx-auto"
              >
                  <Play size={20} /> Bắt đầu ôn tập ngay
              </button>
          ) : (
              <div className="px-8 py-4 bg-green-100 text-green-700 rounded-full font-bold text-lg inline-flex items-center gap-2 mx-auto">
                  <CheckCircle2 size={24} /> Tuyệt vời! Không còn thẻ nào đến hạn.
              </div>
          )}
      </div>
    </div>
  );
};

const MOMENTUM_QUOTES = [
  { text: "Động lực giúp bạn bắt đầu, nhưng thói quen mới là thứ giữ bạn tiếp tục.", author: "Jim Ryun" },
  { text: "Bí mật của việc tiến lên phía trước chính là bắt đầu ngay bây giờ.", author: "Mark Twain" },
  { text: "Những thay đổi nhỏ được duy trì liên tục sẽ tạo ra những kết quả vĩ đại.", author: "James Clear" },
  { text: "Bạn không cần phải vĩ đại để bắt đầu, nhưng bạn phải bắt đầu để trở nên vĩ đại.", author: "Zig Ziglar" },
  { text: "Đừng chờ đợi cơ hội hoàn hảo. Hãy nắm lấy cơ hội hiện tại và làm cho nó hoàn hảo.", author: "George Herbert" },
  { text: "Mỗi bước đi nhỏ đều đưa bạn đến gần hơn với mục tiêu. Hãy giữ vững đà tiến này!", author: "Khuyết danh" },
  { text: "Tiến bộ dù chậm vẫn tốt hơn là không có bất kỳ sự tiến bộ nào.", author: "Khuyết danh" }
];

const MOCK_USERS = [
  { id: 'm1', name: 'Nguyễn Văn A', totalXp: 1250, badge: '💎 Huyền thoại', avatar: 'https://ui-avatars.com/api/?name=Nguyễn+A&background=fef08a&color=a16207' },
  { id: 'm2', name: 'Trần Thị B', totalXp: 980, badge: '👑 Bậc thầy', avatar: 'https://ui-avatars.com/api/?name=Trần+B&background=e9d5ff&color=7e22ce' },
  { id: 'm3', name: 'Lê Hoàng C', totalXp: 850, badge: '👑 Bậc thầy', avatar: 'https://ui-avatars.com/api/?name=Lê+C&background=bfdbfe&color=1d4ed8' },
  { id: 'm4', name: 'Phạm D', totalXp: 420, badge: '⚡ Tinh anh', avatar: 'https://ui-avatars.com/api/?name=Phạm+D&background=bbf7d0&color=15803d' },
  { id: 'm5', name: 'Hoàng E', totalXp: 310, badge: '🧠 Tri thức', avatar: 'https://ui-avatars.com/api/?name=Hoàng+E&background=fecaca&color=b91c1c' },
  { id: 'm6', name: 'Ngô F', totalXp: 150, badge: '📖 Học giả', avatar: 'https://ui-avatars.com/api/?name=Ngô+F&background=fed7aa&color=c2410c' },
];

const LeaderboardManager = ({ gamification }) => {
  const currentTotalXp = 25 * (gamification?.level || 1) * ((gamification?.level || 1) - 1) + (gamification?.xp || 0);
  const currentBadge = gamification?.badges?.[gamification.badges.length - 1] || '🌱 Tân binh';
  
  const allUsers = [
    ...MOCK_USERS,
    { 
      id: 'current_user', 
      name: 'Bạn (Học sinh)', 
      totalXp: currentTotalXp, 
      badge: currentBadge, 
      avatar: 'https://ui-avatars.com/api/?name=User&background=e0f2fe&color=0ea5e9',
      isCurrentUser: true 
    }
  ].sort((a, b) => b.totalXp - a.totalXp);

  return (
    <div className="space-y-6 animate-fade-in pb-10 max-w-3xl mx-auto">
      <header className="mb-8 text-center">
        <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-yellow-100">
          <Trophy size={40} className="text-yellow-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Bảng Xếp Hạng Lớp</h1>
        <p className="text-gray-500">So tài kinh nghiệm (XP) và danh hiệu với các bạn cùng lớp! 🚀</p>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {allUsers.map((user, idx) => {
          let rankIcon = null;
          let rankColor = "text-gray-400";
          let bgClass = user.isCurrentUser ? "bg-sky-50 border-l-4 border-l-sky-500" : "bg-white border-l-4 border-l-transparent hover:bg-gray-50";

          if (idx === 0) {
            rankIcon = <Crown size={24} className="text-yellow-500 mx-auto" />;
            rankColor = "text-yellow-600 font-black text-xl";
          } else if (idx === 1) {
            rankIcon = <Award size={24} className="text-gray-400 mx-auto" />;
            rankColor = "text-gray-500 font-bold text-xl";
          } else if (idx === 2) {
            rankIcon = <Award size={24} className="text-amber-700 mx-auto" />;
            rankColor = "text-amber-700 font-bold text-xl";
          } else {
            rankColor = "text-gray-500 font-bold text-lg";
          }

          return (
            <div key={user.id} className={`flex items-center gap-4 p-4 md:p-6 border-b border-gray-100 last:border-b-0 transition ${bgClass}`}>
              <div className={`w-12 text-center flex flex-col items-center justify-center ${rankColor}`}>
                {rankIcon ? rankIcon : `#${idx + 1}`}
              </div>
              
              <div className="relative">
                <img src={user.avatar} alt={user.name} className="w-14 h-14 rounded-full border-2 border-white shadow-sm" />
                {user.isCurrentUser && (
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className={`font-bold text-lg truncate ${user.isCurrentUser ? 'text-sky-700' : 'text-gray-800'}`}>
                  {user.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-bold rounded-full flex items-center gap-1">
                    {user.badge}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
                  {user.totalXp.toLocaleString()}
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">XP</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ParentPortal = ({ gamification }) => {
  const [parentEmail, setParentEmail] = useState(() => localStorage.getItem('studyflow_parent_email') || '');
  const [isLinked, setIsLinked] = useState(() => !!localStorage.getItem('studyflow_parent_email'));
  const [inputValue, setInputValue] = useState('');
  const [isLinking, setIsLinking] = useState(false);
  const [autoReport, setAutoReport] = useState(() => localStorage.getItem('studyflow_parent_auto') === 'true');

  const handleLink = (e) => {
    e.preventDefault();
    if (!inputValue.includes('@gmail.com')) {
      alert('Vui lòng nhập một địa chỉ Gmail hợp lệ (@gmail.com)');
      return;
    }
    setIsLinking(true);
    setTimeout(() => {
      localStorage.setItem('studyflow_parent_email', inputValue);
      setParentEmail(inputValue);
      setIsLinked(true);
      setIsLinking(false);
    }, 1500);
  };

  const handleUnlink = () => {
    if(window.confirm('Bạn có chắc chắn muốn hủy liên kết với email này?')) {
      localStorage.removeItem('studyflow_parent_email');
      localStorage.removeItem('studyflow_parent_auto');
      setParentEmail('');
      setIsLinked(false);
      setInputValue('');
    }
  };

  const toggleAutoReport = () => {
    const newVal = !autoReport;
    setAutoReport(newVal);
    localStorage.setItem('studyflow_parent_auto', newVal);
  };

  if (!isLinked) {
    return (
      <div className="space-y-6 animate-fade-in pb-10 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-sky-100 border border-sky-50 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={40} className="text-sky-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Góc Phụ Huynh</h2>
          <p className="text-gray-500 mb-8 text-sm">
            Liên kết với tài khoản Gmail của phụ huynh để nhận báo cáo tiến trình học tập hàng tuần của con.
          </p>
          <form onSubmit={handleLink} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhập Gmail của phụ huynh..." 
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-sky-500 outline-none transition"
              />
            </div>
            <button 
              type="submit" 
              disabled={isLinking}
              className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-sky-600 transition shadow-lg shadow-sky-200 flex items-center justify-center gap-2"
            >
              {isLinking ? (
                <><RotateCcw className="animate-spin" size={20} /> Đang liên kết...</>
              ) : (
                <><Link size={20} /> Kết nối tài khoản</>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <ShieldCheck className="text-emerald-500" size={32} />
          Theo dõi Học tập
        </h1>
        <p className="text-gray-500 flex items-center gap-2">
          Đang liên kết với: <strong className="text-gray-700">{parentEmail}</strong>
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Đã xác thực</span>
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-violet-50 rounded-xl text-violet-600"><Activity size={24} /></div>
            <div>
              <h2 className="text-lg font-bold text-gray-800">Tổng quan thành tích</h2>
              <p className="text-sm text-gray-500">Dữ liệu thực tế của học sinh</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
              <span className="text-gray-600 font-medium">Cấp độ hiện tại</span>
              <span className="font-bold text-gray-900 text-lg">Level {gamification?.level || 1}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
              <span className="text-gray-600 font-medium">Tổng kinh nghiệm (XP)</span>
              <span className="font-bold text-sky-600 text-lg">{gamification?.xp || 0} / {(gamification?.level || 1) * 50} XP</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
              <span className="text-gray-600 font-medium">Đá quý tích lũy</span>
              <span className="font-bold text-red-500 text-lg flex items-center gap-1"><Gem size={18} /> {gamification?.rubies || 0}</span>
            </div>
          </div>
        </div>

        <div className="bg-surface rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-sky-50 rounded-xl text-sky-600"><Mail size={24} /></div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Cấu hình báo cáo</h2>
                <p className="text-sm text-gray-500">Tùy chỉnh thông báo qua Email</p>
              </div>
            </div>
            
            <label className="flex items-center justify-between p-4 border-2 border-gray-100 rounded-2xl cursor-pointer hover:border-sky-200 transition">
              <div>
                <p className="font-bold text-gray-800">Gửi báo cáo cuối tuần</p>
                <p className="text-sm text-gray-500 mt-1">Hệ thống sẽ tự động tổng hợp và gửi email vào 20:00 Chủ Nhật.</p>
              </div>
              <div className={`w-12 h-6 rounded-full relative transition-colors ${autoReport ? 'bg-emerald-500' : 'bg-gray-200'}`} onClick={(e) => { e.preventDefault(); toggleAutoReport(); }}>
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${autoReport ? 'translate-x-6' : ''}`}></div>
              </div>
            </label>
          </div>

          <button onClick={handleUnlink} className="mt-8 w-full py-4 bg-red-50 text-red-600 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-red-100 transition">
            <LogOut size={20} /> Hủy liên kết tài khoản
          </button>
        </div>
      </div>
    </div>
  );
};

const CherryBlossomEffect = () => {
  const petals = Array.from({ length: 15 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-3xl">
      {petals.map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 30 30"
          className="absolute animate-cherry text-pink-300/60"
          style={{
            width: `${Math.random() * 12 + 8}px`,
            height: `${Math.random() * 12 + 8}px`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 2 + 3}s`,
            filter: 'drop-shadow(0 2px 2px rgba(255, 255, 255, 0.4))'
          }}
          fill="currentColor"
        >
          <path d="M15 0C25 0 30 10 30 15C30 25 20 30 15 30C5 30 0 20 0 15C0 5 5 0 15 0Z" />
        </svg>
      ))}
    </div>
  );
};

const GlobalBackground = () => {
  const petals = Array.from({ length: 50 });
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/background2.jpg')" }}></div>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      
      {petals.map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 30 30"
          className="absolute animate-cherry text-pink-400/80"
          style={{
            width: `${Math.random() * 15 + 10}px`,
            height: `${Math.random() * 15 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `-10%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            filter: 'drop-shadow(0 2px 4px rgba(244, 114, 182, 0.5))'
          }}
          fill="currentColor"
        >
          <path d="M15 0C25 0 30 10 30 15C30 25 20 30 15 30C5 30 0 20 0 15C0 5 5 0 15 0Z" />
        </svg>
      ))}
    </div>
  );
};

const StatsDashboard = () => {
  const weeklyData = [
    { day: 'T2', hours: 2.5, percentage: 50 },
    { day: 'T3', hours: 3.2, percentage: 65 },
    { day: 'T4', hours: 1.8, percentage: 35 },
    { day: 'T5', hours: 4.5, percentage: 90 },
    { day: 'T6', hours: 3.8, percentage: 75 },
    { day: 'T7', hours: 5.0, percentage: 100 },
    { day: 'CN', hours: 4.2, percentage: 85 },
  ];

  const subjectProgress = [
    { subject: 'Toán', progress: 85, color: 'bg-blue-500' },
    { subject: 'Văn', progress: 60, color: 'bg-pink-500' },
    { subject: 'Anh', progress: 92, color: 'bg-emerald-500' },
    { subject: 'Vật lý', progress: 75, color: 'bg-purple-500' },
    { subject: 'Hóa học', progress: 45, color: 'bg-cyan-500' },
    { subject: 'Sinh học', progress: 65, color: 'bg-lime-500' },
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Thống Kê Học Tập</h1>
          <p className="text-gray-500">Theo dõi tiến độ, phân tích hiệu suất và vinh danh nỗ lực của bạn.</p>
        </div>
        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl font-medium shadow-sm flex items-center gap-2 hover:bg-gray-50 transition">
          <Calendar size={18} /> Tuần này
        </button>
      </header>

      {/* Mức độ cải thiện mỗi ngày (Daily Improvement) */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-3xl p-8 text-white shadow-xl shadow-pink-200/50 relative overflow-hidden group mb-6">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-900 opacity-20 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm shadow-sm">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">Mức độ cải thiện mỗi ngày</h2>
            </div>
            <p className="text-pink-100 text-sm mb-6 max-w-md leading-relaxed">
              Hiệu suất học tập của bạn đang tăng trưởng rất tốt! Bạn đã duy trì được sự tập trung cao hơn so với tuần trước. Tiếp tục phát huy nhé!
            </p>
            
            <div className="flex items-end gap-6">
              <div>
                <span className="block text-pink-100 text-xs font-bold uppercase tracking-widest mb-1">Tuần này</span>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold drop-shadow-md">+15</span>
                  <span className="text-2xl font-bold opacity-90">%</span>
                </div>
              </div>
              <div className="h-10 w-px bg-white/30"></div>
              <div>
                <span className="block text-pink-100 text-xs font-bold uppercase tracking-widest mb-1">XP Nhận được</span>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold drop-shadow-md">1,250</span>
                  <span className="text-lg font-medium opacity-90">XP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sparkline Area Chart */}
          <div className="w-full md:w-1/2 h-32 md:h-40 relative mt-4 md:mt-0">
            <svg className="w-full h-full drop-shadow-md" viewBox="0 0 200 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
                </linearGradient>
              </defs>
              <path 
                d="M0,50 C20,45 40,55 60,35 C80,15 100,25 120,20 C140,15 160,25 200,5 L200,60 L0,60 Z" 
                fill="url(#areaGradient)" 
              />
              <path 
                d="M0,50 C20,45 40,55 60,35 C80,15 100,25 120,20 C140,15 160,25 200,5" 
                fill="none" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round"
                className="drop-shadow-lg"
              />
              {/* Data points */}
              <circle cx="60" cy="35" r="3" fill="white" className="animate-pulse" />
              <circle cx="120" cy="20" r="3" fill="white" className="animate-pulse" />
              <circle cx="200" cy="5" r="5" fill="#f43f5e" stroke="white" strokeWidth="2.5" />
            </svg>
            
            <div className="absolute bottom-[-10px] left-0 right-0 flex justify-between px-1 opacity-80">
              <span className="text-[10px] font-bold tracking-wider">T2</span>
              <span className="text-[10px] font-bold tracking-wider">T3</span>
              <span className="text-[10px] font-bold tracking-wider">T4</span>
              <span className="text-[10px] font-bold tracking-wider">T5</span>
              <span className="text-[10px] font-bold tracking-wider">T6</span>
              <span className="text-[10px] font-bold tracking-wider">T7</span>
              <span className="text-[10px] font-bold tracking-wider">CN</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Biểu đồ thanh (Bar Chart) */}
        <div className="lg:col-span-2 bg-surface/90 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-800">Cường độ học tập</h2>
            <div className="text-sm font-medium text-pink-500 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">Trung bình 3.5h/ngày</div>
          </div>
          <div className="flex items-end justify-between h-56 px-2 gap-4">
            {weeklyData.map((data, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group flex-1">
                <div className="relative w-full max-w-[48px] bg-gray-50 rounded-2xl h-48 flex items-end justify-center overflow-hidden border border-gray-100/50">
                  <div 
                    className="w-full bg-gradient-to-t from-pink-600 to-rose-400 rounded-2xl transition-all duration-1000 group-hover:from-pink-500 group-hover:to-pink-300 relative group shadow-[0_0_15px_rgba(244,63,94,0.3)]" 
                    style={{height: `${data.percentage}%`}}
                  >
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg">
                      {data.hours}h
                      <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                    </div>
                  </div>
                </div>
                <span className={`text-sm font-bold ${data.day === 'T7' || data.day === 'CN' ? 'text-pink-500' : 'text-gray-500'}`}>
                  {data.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mục tiêu tuần (Circular Progress) */}
        <div className="bg-surface/90 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          <h2 className="text-xl font-bold text-gray-800 mb-8 w-full text-center relative z-10">Mục tiêu tuần</h2>
          
          <div className="relative w-56 h-56 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 100 100">
              {/* Vòng nền */}
              <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" strokeWidth="12" />
              {/* Vòng tiến độ */}
              <circle 
                cx="50" cy="50" r="42" 
                fill="none" 
                stroke="url(#pink-gradient)" 
                strokeWidth="12" 
                strokeDasharray="263.89" 
                strokeDashoffset={263.89 - (263.89 * 78 / 100)} 
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f43f5e" /> {/* rose-500 */}
                  <stop offset="100%" stopColor="#ec4899" /> {/* pink-500 */}
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-400 drop-shadow-sm">78%</span>
              <span className="text-sm font-medium text-gray-500 mt-2">Đã hoàn thành</span>
            </div>
          </div>
          <p className="mt-8 text-base text-gray-600 font-medium text-center relative z-10">
            Bạn đã học được <span className="font-bold text-pink-600">25 giờ</span> trên tổng số <span className="font-bold text-gray-800">32 giờ</span> mục tiêu.
          </p>
        </div>
      </div>

      {/* Progress Bars (Linear) cho từng môn */}
      <div className="bg-surface/90 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          <Book className="text-sky-500" />
          Phân bổ nỗ lực theo môn học
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {subjectProgress.map((item, idx) => (
            <div key={idx} className="group">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="font-bold text-gray-700">{item.subject}</span>
                </div>
                <span className="text-sm font-bold text-gray-900 bg-gray-50 px-2 py-1 rounded-md border border-gray-100 group-hover:bg-white transition-colors">{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden p-0.5 border border-gray-200/50 shadow-inner">
                <div 
                  className={`h-full rounded-full ${item.color} transition-all duration-1000 ease-out relative`} 
                  style={{width: `${item.progress}%`}}
                >
                  {/* Hiệu ứng bóng bẩy bên trong thanh */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-white opacity-20 rounded-t-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};


const INITIAL_GAMIFICATION = {
  xp: 0,
  level: 1,
  badges: ['🌱 Tân binh'],
  rubies: 0
};

const HelpScreen = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-10 flex flex-col items-center justify-center h-full text-center">
      <div className="w-24 h-24 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center mb-4 border-4 border-pink-100">
        <HelpCircle size={48} />
      </div>
      <h2 className="text-3xl font-bold text-gray-800">Trợ giúp & Hỗ trợ</h2>
      <p className="text-gray-500 max-w-md">
        Tính năng này đang được phát triển. Trong tương lai bạn có thể xem các câu hỏi thường gặp (FAQ) hoặc liên hệ với đội ngũ hỗ trợ tại đây.
      </p>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [gamification, setGamification] = useState(() => {
    const saved = localStorage.getItem('studyflow_gamification');
    return saved ? JSON.parse(saved) : INITIAL_GAMIFICATION;
  });
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [levelUpInfo, setLevelUpInfo] = useState(null);
  
  // Auth states
  const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
    if (!currentUser) return;

    let lastInteractionTime = Date.now();
    const resetIdle = () => { lastInteractionTime = Date.now(); };

    window.addEventListener('mousemove', resetIdle);
    window.addEventListener('keydown', resetIdle);
    window.addEventListener('click', resetIdle);
    window.addEventListener('scroll', resetIdle);

    const interval = setInterval(() => {
      if (document.hidden || !document.hasFocus()) return;
      
      // Idle detection: if no interaction for 60 seconds (60,000ms), do not track time
      if (Date.now() - lastInteractionTime > 60000) return;

      const today = new Date();
      const dateKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      const stats = JSON.parse(localStorage.getItem('study_time_stats') || '{}');
      stats[dateKey] = (stats[dateKey] || 0) + 10;
      localStorage.setItem('study_time_stats', JSON.stringify(stats));
    }, 10000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', resetIdle);
      window.removeEventListener('keydown', resetIdle);
      window.removeEventListener('click', resetIdle);
      window.removeEventListener('scroll', resetIdle);
    };
  }, [currentUser]);

  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Firebase user object
        setCurrentUser({ username: user.email.split('@')[0], email: user.email, uid: user.uid });
        
        // Tải dữ liệu từ Firestore
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const data = userDoc.data();
            if (data.gamification) {
              setGamification(data.gamification);
            }
          } else {
            // Nếu user chưa có data trên db (VD: đăng ký mới), tạo data mặc định
            await setDoc(userDocRef, {
              email: user.email,
              username: user.email.split('@')[0],
              createdAt: new Date().toISOString(),
              gamification: INITIAL_GAMIFICATION
            }, { merge: true });
            setGamification(INITIAL_GAMIFICATION);
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
        }
      } else {
        setCurrentUser(null);
      }
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);
  
  const handleLogout = () => {
    signOut(auth);
  };

  const addReward = (xpPoints, rubyPoints = 0, newBadge = null) => {
    setGamification(prev => {
      let newXp = prev.xp + xpPoints;
      let newRubies = (prev.rubies || 0) + rubyPoints;
      let newLevel = prev.level;
      let newBadges = [...prev.badges];
      let didLevelUp = false;

      const badgeMap = {
        2: '📖 Học giả',
        3: '🧠 Tri thức',
        4: '⚡ Tinh anh',
        5: '👑 Bậc thầy',
        10: '💎 Huyền thoại'
      };

      const getXpReq = (lvl) => lvl * 50;
      let xpReq = getXpReq(newLevel);

      while (newXp >= xpReq) {
        newXp -= xpReq;
        newLevel += 1;
        didLevelUp = true;
        xpReq = getXpReq(newLevel);
        if (badgeMap[newLevel] && !newBadges.includes(badgeMap[newLevel])) {
          newBadges.push(badgeMap[newLevel]);
        }
      }

      const newState = { xp: newXp, level: newLevel, badges: newBadges, rubies: newRubies };
      
      if (didLevelUp) {
        setLevelUpInfo({ level: newLevel, badge: newBadges[newBadges.length - 1] });
        setShowLevelUp(true);
        setTimeout(() => setShowLevelUp(false), 5000);
      }

      localStorage.setItem('studyflow_gamification', JSON.stringify(newState));
      
      // Đồng bộ lên Firestore
      if (auth.currentUser) {
        setDoc(doc(db, 'users', auth.currentUser.uid), {
          gamification: newState
        }, { merge: true }).catch(err => console.error("Lỗi đồng bộ Gamification:", err));
      }
      
      return newState;
    });
  };

  if (authLoading) {
    return <div className="h-screen w-full flex items-center justify-center bg-sky-50"><div className="animate-spin rounded-full h-12 w-12 border-4 border-sky-200 border-t-sky-500"></div></div>;
  }

  if (!currentUser) {
    return <LoginPage />;
  }

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-transparent relative z-0">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          gamification={gamification}
          currentUser={currentUser}
          
          handleLogout={handleLogout}
        />
        
        <main className="flex-1 h-full overflow-y-auto hide-scrollbar p-6 md:p-10">
        <div className="max-w-5xl mx-auto h-full">
          {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
          {activeTab === 'timetable' && <TimetableManager />}
          {activeTab === 'flashcard' && <FlashcardManager addReward={addReward} />}
          {activeTab === 'quiz' && <QuizManager addReward={addReward} />}
          {activeTab === 'assessment' && <AssessmentManager addReward={addReward} />}
          {activeTab === 'games' && <GamesManager addReward={addReward} />}
            {activeTab === 'competition' && <TournamentManager addReward={addReward} currentUser={currentUser} />}
          {activeTab === 'tasks' && <TownBuilder setActiveTab={setActiveTab} />}
          {activeTab === 'review' && <ReviewManager addReward={addReward} />}
          {activeTab === 'focus' && <PomodoroFocus />}
          {activeTab === 'stats' && <StatsDashboard />}
          {activeTab === 'leaderboard' && <LeaderboardManager gamification={gamification} />}
          {activeTab === 'parent' && <ParentPortal gamification={gamification} />}
          {activeTab === 'help' && <HelpScreen />}
        </div>
      </main>

      {/* Level Up Notification Modal */}
      {showLevelUp && levelUpInfo && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none bg-black/20 backdrop-blur-sm transition-all animate-fade-in">
          <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center transform transition-all scale-100 animate-bounce">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-4 shadow-inner">
              <Trophy size={48} className="text-yellow-500" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Thăng Cấp!</h2>
            <p className="text-gray-600 text-lg">Chúc mừng bạn đã đạt <strong>Cấp {levelUpInfo.level}</strong></p>
            <div className="mt-4 px-6 py-2 bg-sky-50 text-sky-700 font-bold rounded-full text-lg border border-sky-100 shadow-sm flex items-center gap-2">
              {levelUpInfo.badge}
            </div>
          </div>
        </div>
      )}

    </div>
    </>
  );
}
