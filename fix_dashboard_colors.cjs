const fs = require('fs');
let content = fs.readFileSync('src/Dashboard.jsx', 'utf8');

// 1. Quote
content = content.replace(
  'bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 relative overflow-hidden group flex items-center gap-6',
  'bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-6 md:p-8 shadow-sm border border-orange-100 relative overflow-hidden group flex items-center gap-6'
);
content = content.replace(
  'hidden md:flex w-16 h-16 bg-slate-50 rounded-2xl items-center justify-center text-slate-300 shrink-0',
  'hidden md:flex w-16 h-16 bg-white rounded-2xl items-center justify-center text-orange-400 shrink-0 shadow-sm'
);

// 2. Card 1 (Study Time)
content = content.replace(
  '<div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-40 transform transition hover:-translate-y-1 relative group">\n          <div className="flex justify-between items-start">\n            <h3 className="font-bold text-slate-600 flex items-center gap-2">\n              <BookOpen size={18} className="text-slate-400" />\n              Thời gian học hôm nay\n            </h3>\n          </div>\n          <div>\n            <div className="text-4xl font-black text-slate-800 tracking-tight">2<span className="text-2xl font-bold text-slate-500">h</span> 45<span className="text-2xl font-bold text-slate-500">m</span></div>',
  '<div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 border border-indigo-100 shadow-sm flex flex-col justify-between h-40 transform transition hover:-translate-y-1 relative group">\n          <div className="flex justify-between items-start">\n            <h3 className="font-bold text-indigo-900 flex items-center gap-2">\n              <BookOpen size={18} className="text-indigo-500" />\n              Thời gian học hôm nay\n            </h3>\n          </div>\n          <div>\n            <div className="text-4xl font-black text-indigo-700 tracking-tight">2<span className="text-2xl font-bold text-indigo-400">h</span> 45<span className="text-2xl font-bold text-indigo-400">m</span></div>'
);

// 3. Card 2 (Tasks)
content = content.replace(
  '<div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-40 transform transition hover:-translate-y-1 relative group">\n          <div className="flex justify-between items-start">\n            <h3 className="font-bold text-slate-600 flex items-center gap-2">\n              <GraduationCap size={18} className="text-slate-400" />\n              Nhiệm vụ hoàn thành\n            </h3>\n            <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{progressPercentage}%</span>\n          </div>\n          <div>\n            <div className="text-4xl font-black text-slate-800 tracking-tight">{completedCount}<span className="text-2xl font-bold text-slate-400">/{totalCount}</span></div>\n            <div className="w-full bg-slate-100 h-2.5 rounded-full mt-4 overflow-hidden">\n              <div className="bg-slate-700 h-full rounded-full transition-all duration-1000" style={{width: `${progressPercentage}%`}}></div>\n            </div>\n          </div>',
  '<div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 border border-emerald-100 shadow-sm flex flex-col justify-between h-40 transform transition hover:-translate-y-1 relative group">\n          <div className="flex justify-between items-start">\n            <h3 className="font-bold text-emerald-900 flex items-center gap-2">\n              <GraduationCap size={18} className="text-emerald-500" />\n              Nhiệm vụ hoàn thành\n            </h3>\n            <span className="text-xs font-bold bg-white text-emerald-700 px-2.5 py-1 rounded-full shadow-sm">{progressPercentage}%</span>\n          </div>\n          <div>\n            <div className="text-4xl font-black text-emerald-700 tracking-tight">{completedCount}<span className="text-2xl font-bold text-emerald-400">/{totalCount}</span></div>\n            <div className="w-full bg-white h-2.5 rounded-full mt-4 overflow-hidden shadow-inner">\n              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full transition-all duration-1000" style={{width: `${progressPercentage}%`}}></div>\n            </div>\n          </div>'
);

// 4. Progress Chart
content = content.replace(
  'relative w-8 md:w-12 bg-slate-50 rounded-t-xl h-36 flex items-end justify-center overflow-hidden transition-all border border-slate-100 border-b-0 group-hover:bg-slate-100',
  'relative w-8 md:w-12 bg-indigo-50/50 rounded-t-xl h-36 flex items-end justify-center overflow-hidden transition-all border border-indigo-50 border-b-0 group-hover:bg-indigo-50'
);
content = content.replace(
  'w-full bg-slate-300 rounded-t-xl transition-all duration-1000 group-hover:bg-slate-700',
  'w-full bg-gradient-to-t from-indigo-400 to-indigo-300 rounded-t-xl transition-all duration-1000 group-hover:from-indigo-600 group-hover:to-indigo-500'
);

// 5. Tasks List Checked state
content = content.replace(
  '{task.completed ? <CheckCircle2 size={20} className="fill-slate-100" /> : <Circle size={20} />}',
  '{task.completed ? <CheckCircle2 size={20} className="text-emerald-500 fill-emerald-100" /> : <Circle size={20} className="hover:text-indigo-400 transition-colors" />}'
);
content = content.replace(
  "text-slate-300 hover:text-slate-400",
  "text-slate-300 hover:text-indigo-400"
);

// Submit Add Task button
content = content.replace(
  'className="bg-slate-800 text-white p-3 rounded-xl hover:bg-slate-700 transition"',
  'className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-200 transition"'
);

// Empty Add Task button
content = content.replace(
  'className="w-full py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm font-bold hover:bg-slate-100 hover:text-slate-800 transition flex items-center justify-center gap-2"',
  'className="w-full py-3 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-600 text-sm font-bold hover:bg-indigo-100 hover:text-indigo-800 transition flex items-center justify-center gap-2"'
);

// Streak widget button
content = content.replace(
  "bg-slate-800 text-white hover:bg-slate-700 shadow-md hover:shadow-lg",
  "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-200 hover:shadow-lg"
);

fs.writeFileSync('src/Dashboard.jsx', content, 'utf8');
console.log('Colors replaced successfully!');
