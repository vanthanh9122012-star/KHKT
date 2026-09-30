import React, { useState, useEffect } from 'react';
import { Quote, Clock, CheckCircle2, Circle, Trash2, Plus } from 'lucide-react';
 // Or we can copy the quote logic here if we prefer

// Define a simple cherry blossom effect if it's missing, or import it
const CherryBlossomEffect = () => (
  <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
    <div className="absolute w-2 h-2 bg-pink-200 rounded-full blur-[1px] top-4 left-4 animate-pulse"></div>
    <div className="absolute w-3 h-3 bg-rose-200 rounded-full blur-[1px] top-10 right-10 animate-bounce"></div>
  </div>
);

const MOCK_QUOTES = [
  { text: "Bí mật của việc tiến lên là bắt đầu.", author: "Mark Twain" },
  { text: "Học tập không phải là chuẩn bị cho cuộc sống, học tập chính là cuộc sống.", author: "John Dewey" },
  { text: "Thành công là tổng của những nỗ lực nhỏ được lặp đi lặp lại mỗi ngày.", author: "Robert Collier" },
  { text: "Tương lai thuộc về những ai tin vào vẻ đẹp ước mơ của mình.", author: "Eleanor Roosevelt" },
  { text: "Giáo dục là vũ khí mạnh nhất bạn có thể dùng để thay đổi thế giới.", author: "Nelson Mandela" }
];

export default function Dashboard({ setActiveTab }) {
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

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const getTodayStr = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  };

  const [journal, setJournal] = useState(() => {
    const saved = localStorage.getItem('studyflow_journal');
    return saved ? JSON.parse(saved) : {};
  });

  const today = new Date();

  const getDailyQuote = () => {
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    return MOCK_QUOTES[seed % MOCK_QUOTES.length];
  };

  const dailyQuote = getDailyQuote();

  const formatDate = () => {
    const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    return `${days[today.getDay()]}, ${today.getDate()} Tháng ${today.getMonth() + 1}`;
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="flex justify-between items-end mb-8">
        <div>
          <p className="text-gray-500 font-medium mb-1">{formatDate()}</p>
          <h1 className="text-3xl font-bold text-gray-800">Chào bạn! 👋</h1>
        </div>
        <div className="glass-panel px-4 py-2 rounded-full text-sm font-medium text-primary shadow-sm">
          🔥 Chuỗi học: 5 ngày
        </div>
      </header>

      {/* Daily Momentum Quote */}
      <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-3xl p-6 shadow-sm border border-sky-100 relative overflow-hidden group">
        <Quote className="absolute -top-4 -left-4 text-sky-100 opacity-50 rotate-180" size={120} />
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-medium text-gray-800 italic mb-3">"{dailyQuote.text}"</p>
          <p className="text-sm font-bold text-sky-600">— {dailyQuote.author} —</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-rose-100 via-rose-200 to-pink-300 rounded-3xl p-6 text-rose-900 shadow-lg shadow-rose-200 flex flex-col justify-between h-40 transform transition hover:-translate-y-1 relative overflow-hidden group">
          <CherryBlossomEffect />
          <div className="flex justify-between items-start relative z-10">
            <h3 className="font-medium text-rose-700">Thời gian học h.nay</h3>
            <div className="p-2 bg-white/40 rounded-lg text-rose-800"><Clock size={20} /></div>
          </div>
          <div className="relative z-10">
            <div className="text-3xl font-bold">2h 45m</div>
            <div className="text-sm text-rose-700 mt-1 font-medium">+15% so với hôm qua</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-100 via-rose-200 to-pink-300 rounded-3xl p-6 text-rose-900 shadow-lg shadow-rose-200 flex flex-col justify-between h-40 transform transition hover:-translate-y-1 relative overflow-hidden group">
          <CherryBlossomEffect />
          <div className="flex justify-between items-start relative z-10">
            <h3 className="font-medium text-rose-700">Nhiệm vụ hoàn thành</h3>
            <div className="p-2 bg-white/40 rounded-lg text-rose-800"><CheckCircle2 size={20} /></div>
          </div>
          <div className="relative z-10">
            <div className="text-3xl font-bold">{completedCount}<span className="text-xl text-rose-700/70">/{totalCount}</span></div>
            <div className="w-full bg-rose-900/10 h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-rose-500 h-full rounded-full transition-all duration-1000" style={{width: `${progressPercentage}%`}}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 bg-surface rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Tiến độ tuần</h2>
            <button className="text-sm text-primary font-medium hover:underline">Xem chi tiết</button>
          </div>
          <div className="flex items-end justify-between h-48 px-2">
            {[40, 70, 45, 90, 65, 30, 80].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="relative w-10 md:w-12 bg-sky-50 rounded-t-lg h-36 flex items-end justify-center overflow-hidden transition-all">
                  <div 
                    className="w-full bg-primary rounded-t-lg transition-all duration-1000 group-hover:bg-primaryLight" 
                    style={{height: `${h}%`}}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-400">
                  {['T2','T3','T4','T5','T6','T7','CN'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col h-[340px]">
          <div className="flex justify-between items-center mb-6 shrink-0">
            <h2 className="text-xl font-bold text-gray-800">Cần làm hôm nay</h2>
            <span className="text-xs font-bold bg-sky-100 text-sky-600 px-2 py-1 rounded-full">{completedCount}/{totalCount}</span>
          </div>
          <div className="space-y-4 overflow-y-auto custom-scrollbar pr-2 flex-grow">
            {tasks.length === 0 ? (
              <div className="text-center text-gray-400 text-sm mt-10">Chưa có nhiệm vụ nào. Thêm ngay nhé!</div>
            ) : (
              tasks.map(task => (
                <div key={task.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition border border-transparent hover:border-gray-100 group">
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className={`mt-0.5 transition ${task.completed ? 'text-primary' : 'text-gray-300 hover:text-gray-400'}`}
                  >
                    {task.completed ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                  </button>
                  <div className="flex-grow">
                    <p className={`font-medium text-sm transition ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                      {task.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{task.time}</p>
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
          
          <div className="shrink-0 mt-4 border-t border-gray-100 pt-4">
            {isAdding ? (
              <form onSubmit={addTask} className="flex gap-2">
                <input 
                  type="text" 
                  autoFocus
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="Nhập nhiệm vụ..."
                  className="flex-grow p-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-sky-500"
                />
                <button type="submit" className="bg-primary text-white p-2 rounded-lg hover:bg-sky-600 transition">
                  <Plus size={18} />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setIsAdding(true)}
                className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 text-sm font-medium hover:border-primary hover:text-primary transition flex items-center justify-center gap-2"
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
