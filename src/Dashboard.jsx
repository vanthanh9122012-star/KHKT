import React, { useState, useEffect } from 'react';
import { Quote, Clock, CheckCircle2, Circle, Trash2, Plus, Flame, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

const MOCK_QUOTES = [
  { text: "Bí mật của việc tiến lên là bắt đầu.", author: "Mark Twain" },
  { text: "Học tập không phải là chuẩn bị cho cuộc sống, học tập chính là cuộc sống.", author: "John Dewey" },
  { text: "Thành công là tổng của những nỗ lực nhỏ được lặp đi lặp lại mỗi ngày.", author: "Robert Collier" },
  { text: "Tương lai thuộc về những ai tin vào vẻ đẹp ước mơ của mình.", author: "Eleanor Roosevelt" },
  { text: "Giáo dục là vũ khí mạnh nhất bạn có thể dùng để thay đổi thế giới.", author: "Nelson Mandela" }
];

export default function Dashboard({ setActiveTab }) {
  // Tasks State
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('studyflow_today_tasks');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, title: 'Học 5 thẻ Flashcard mới', time: '08:00', completed: true },
      { id: 2, title: 'Ôn tập Spaced Repetition', time: '14:00', completed: false },
      { id: 3, title: 'Giải đề Toán', time: '20:00', completed: false },
    ];
  });
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  // Streak State
  const [streakData, setStreakData] = useState(() => {
    const saved = localStorage.getItem('studyflow_streak_data');
    if (saved) return JSON.parse(saved);
    return { count: 3, lastCheckIn: null };
  });

  // Study Stats Tracking
  const [studyStats, setStudyStats] = useState({});
  useEffect(() => {
    const loadStats = () => {
      setStudyStats(JSON.parse(localStorage.getItem('study_time_stats') || '{}'));
    };
    loadStats();
    const interval = setInterval(loadStats, 10000);
    return () => clearInterval(interval);
  }, []);

  const todayDate = new Date();
  const todayKey = `${todayDate.getFullYear()}-${String(todayDate.getMonth()+1).padStart(2, '0')}-${String(todayDate.getDate()).padStart(2, '0')}`;
  const todaySeconds = studyStats[todayKey] || 0;
  const todayHours = Math.floor(todaySeconds / 3600);
  const todayMinutes = Math.floor((todaySeconds % 3600) / 60);

  const getDayStat = (dayOffset) => {
    const d = new Date();
    const day = d.getDay(); 
    const diff = d.getDate() - day + (day === 0 ? -6 : 1) + dayOffset;
    const targetDate = new Date(d.setDate(diff));
    const key = `${targetDate.getFullYear()}-${String(targetDate.getMonth()+1).padStart(2, '0')}-${String(targetDate.getDate()).padStart(2, '0')}`;
    return studyStats[key] || 0;
  };

  const chartHeights = [0, 1, 2, 3, 4, 5, 6].map(i => {
    const seconds = getDayStat(i);
    const maxTime = 7200; // 2 hours
    return Math.min(100, (seconds / maxTime) * 100);
  });


  useEffect(() => {
    localStorage.setItem('studyflow_today_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      completed: false
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setIsAdding(false);
  };

  const handleCheckIn = () => {
    const todayStr = new Date().toDateString();
    if (streakData.lastCheckIn === todayStr) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    let newCount = 1;
    if (streakData.lastCheckIn === yesterday.toDateString()) {
      newCount = streakData.count + 1;
    } else if (streakData.count > 0 && streakData.lastCheckIn === null) {
      // First time clicking but using initial mock state
      newCount = streakData.count + 1;
    }

    const newData = { count: newCount, lastCheckIn: todayStr };
    setStreakData(newData);
    localStorage.setItem('studyflow_streak_data', JSON.stringify(newData));
  };

  const isCheckedInToday = streakData.lastCheckIn === new Date().toDateString();

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const today = new Date();

  const getDailyQuote = () => {
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    return MOCK_QUOTES[seed % MOCK_QUOTES.length];
  };
  const dailyQuote = getDailyQuote();


  const getStreakColor = (count) => {
    if (count >= 100) return '#593E67';
    if (count >= 70) return '#84495F';
    if (count >= 30) return '#B85B56';
    if (count >= 10) return '#DE741C';
    return '#FEA837';
  };
  const streakColor = getStreakColor(streakData.count);

  const formatDate = () => {
    const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    return `${days[today.getDay()]}, ${today.getDate()} Tháng ${today.getMonth() + 1}`;
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10 font-sans">
      
      {/* Header section with compact Streak Widget */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
        <div>
          <p className="text-slate-500 font-medium mb-1 tracking-wide">{formatDate()}</p>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Chào bạn! 👋</h1>
        </div>
        
        {/* Compact Streak Widget */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-2.5 flex items-center gap-4 max-w-sm">
          <div className="flex items-center gap-2">
            <div 
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors`}
              style={{ backgroundColor: `${streakColor}33`, color: streakColor }}
            >
              <Flame size={20} className={isCheckedInToday ? "animate-pulse" : ""} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold" style={{ color: streakColor }}>{streakData.count} <span className="text-sm font-semibold text-slate-500">ngày</span></span>
                <span className="text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                  Giữ streak nha
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={handleCheckIn}
            disabled={isCheckedInToday}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${isCheckedInToday ? 'bg-slate-50 text-slate-400 border border-slate-100 cursor-not-allowed' : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-200 hover:shadow-lg'}`}
          >
            {isCheckedInToday ? 'Đã điểm danh' : 'Điểm danh'}
          </button>
        </div>
      </header>

      {/* Daily Momentum Quote - Academic & Neutral Theme */}
        <div className="bg-gradient-to-br from-stone-50 via-slate-50 to-zinc-100 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200/60 relative overflow-hidden group flex items-center gap-6">
          {/* Decorative Background Icon */}
          <Quote size={180} className="absolute -top-10 -right-10 text-stone-200/40 -rotate-12 group-hover:rotate-6 transition-transform duration-700 ease-out" />
          
          <div className="hidden md:flex w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl items-center justify-center text-stone-500 shrink-0 shadow-sm border border-stone-100 relative z-10">
            <Quote size={32} />
          </div>
          <div className="relative z-10 flex flex-col justify-center">
            <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed tracking-wide mb-4">
              <span className="text-3xl font-black text-stone-400 mr-2">"</span>
              {dailyQuote.text}
              <span className="text-3xl font-black text-stone-400 ml-2">"</span>
            </p>
            <p className="text-sm md:text-base font-bold text-slate-500 flex items-center gap-3 uppercase tracking-widest">
              <span className="w-8 h-[2px] bg-stone-300 rounded-full"></span>
              {dailyQuote.author}
            </p>
          </div>
        </div>

      {/* Stats Cards - Academic & Neutral Theme */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 border border-indigo-100 shadow-sm flex flex-col justify-between h-40 transform transition hover:-translate-y-1 relative group">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-indigo-900 flex items-center gap-2">
              <BookOpen size={18} className="text-indigo-500" />
              Thời gian học hôm nay
            </h3>
          </div>
          <div>
            <div className="text-4xl font-black text-indigo-700 tracking-tight">{todayHours}<span className="text-2xl font-bold text-indigo-400">h</span> {todayMinutes}<span className="text-2xl font-bold text-indigo-400">m</span></div>
            <div className="text-sm text-teal-600 mt-2 font-semibold flex items-center gap-1">
              <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded text-xs">Trực tiếp</span> Đang ghi nhận
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 border border-emerald-100 shadow-sm flex flex-col justify-between h-40 transform transition hover:-translate-y-1 relative group">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-emerald-900 flex items-center gap-2">
              <GraduationCap size={18} className="text-emerald-500" />
              Nhiệm vụ hoàn thành
            </h3>
            <span className="text-xs font-bold bg-white text-emerald-700 px-2.5 py-1 rounded-full shadow-sm">{progressPercentage}%</span>
          </div>
          <div>
            <div className="text-4xl font-black text-emerald-700 tracking-tight">{completedCount}<span className="text-2xl font-bold text-emerald-400">/{totalCount}</span></div>
            <div className="w-full bg-white h-2.5 rounded-full mt-4 overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full transition-all duration-1000" style={{width: `${progressPercentage}%`}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        
        {/* Weekly Progress - Neutral Theme */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-slate-800">Tiến độ tuần</h2>
            <button className="text-sm text-slate-500 font-semibold hover:text-slate-800 flex items-center transition">
              Xem chi tiết <ChevronRight size={16} />
            </button>
          </div>
          <div className="flex items-end justify-between h-48 px-2 md:px-6">
            {chartHeights.map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer w-full">
                <div className="relative w-8 md:w-12 bg-indigo-50/50 rounded-t-xl h-36 flex items-end justify-center overflow-hidden transition-all border border-indigo-50 border-b-0 group-hover:bg-indigo-50">
                  <div 
                    className="w-full bg-gradient-to-t from-indigo-400 to-indigo-300 rounded-t-xl transition-all duration-1000 group-hover:from-indigo-600 group-hover:to-indigo-500" 
                    style={{height: `${h}%`}}
                  ></div>
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-700 transition">
                  {['T2','T3','T4','T5','T6','T7','CN'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* To-Do List - Neutral Theme */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col h-[380px]">
          <div className="flex justify-between items-center mb-6 shrink-0">
            <h2 className="text-xl font-bold text-slate-800">Cần làm hôm nay</h2>
          </div>
          
          <div className="space-y-3 overflow-y-auto custom-scrollbar pr-2 flex-grow">
            {tasks.length === 0 ? (
              <div className="text-center text-slate-400 text-sm mt-10 font-medium">Chưa có nhiệm vụ nào.<br/>Thêm ngay nhé!</div>
            ) : (
              tasks.map(task => (
                <div key={task.id} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100 group">
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className={`mt-0.5 transition ${task.completed ? 'text-slate-700' : 'text-slate-300 hover:text-indigo-400'}`}
                  >
                    {task.completed ? <CheckCircle2 size={20} className="text-emerald-500 fill-emerald-100" /> : <Circle size={20} className="hover:text-indigo-400 transition-colors" />}
                  </button>
                  <div className="flex-grow">
                    <p className={`font-semibold text-sm transition ${task.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                      {task.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 font-medium">{task.time}</p>
                  </div>
                  <button 
                    onClick={() => removeTask(task.id)}
                    className="text-red-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
          
          <div className="shrink-0 mt-4 border-t border-slate-100 pt-4">
            {isAdding ? (
              <form onSubmit={addTask} className="flex gap-2">
                <input 
                  type="text" 
                  autoFocus
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="Nhập nhiệm vụ..."
                  className="flex-grow p-3 text-sm font-medium border border-slate-200 rounded-xl outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition"
                />
                <button type="submit" className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-200 transition">
                  <Plus size={18} />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setIsAdding(true)}
                className="w-full py-3 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-600 text-sm font-bold hover:bg-indigo-100 hover:text-indigo-800 transition flex items-center justify-center gap-2"
              >
                <Plus size={16} /> Thêm nhiệm vụ mới
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
