const fs = require('fs');
let content = fs.readFileSync('src/Dashboard.jsx', 'utf8');

const getStreakColorSnippet = `
  const getStreakColor = (count) => {
    if (count >= 100) return '#593E67';
    if (count >= 70) return '#84495F';
    if (count >= 30) return '#B85B56';
    if (count >= 10) return '#DE741C';
    return '#FEA837';
  };
  const streakColor = getStreakColor(streakData.count);
`;

content = content.replace(
  '  const formatDate = () => {',
  getStreakColorSnippet + '\n  const formatDate = () => {'
);

const oldHeader = `      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
        <div>
          <p className="text-slate-500 font-medium mb-1 tracking-wide">{formatDate()}</p>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Chào bạn! 👋</h1>
        </div>
        
        {/* Compact Streak Widget */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-2.5 flex items-center gap-4 max-w-sm">
          <div className="flex items-center gap-2">
            <div className={\`w-10 h-10 rounded-xl flex items-center justify-center transition-colors \${isCheckedInToday ? 'bg-orange-100 text-orange-500' : 'bg-slate-100 text-slate-400'}\`}>
              <Flame size={20} className={isCheckedInToday ? "animate-pulse" : ""} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-slate-800">{streakData.count} <span className="text-sm font-semibold text-slate-500">ngày</span></span>
                <span className="text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                  Giữ streak nha
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={handleCheckIn}
            disabled={isCheckedInToday}
            className={\`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap \${isCheckedInToday ? 'bg-slate-50 text-slate-400 border border-slate-100 cursor-not-allowed' : 'bg-slate-800 text-white hover:bg-slate-700 shadow-md hover:shadow-lg'}\`}
          >
            {isCheckedInToday ? 'Đã điểm danh' : 'Điểm danh'}
          </button>
        </div>
      </header>`;

const newHeader = `      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
        <div>
          <p className="text-slate-500 font-medium mb-1 tracking-wide">{formatDate()}</p>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Chào bạn! 👋</h1>
        </div>
        
        {/* Compact Streak Widget */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-2.5 flex items-center gap-4 max-w-sm">
          <div className="flex items-center gap-2">
            <div 
              className={\`w-10 h-10 rounded-xl flex items-center justify-center transition-colors\`}
              style={{ backgroundColor: isCheckedInToday ? \`\${streakColor}33\` : '#f1f5f9', color: isCheckedInToday ? streakColor : '#94a3b8' }}
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
            className={\`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap \${isCheckedInToday ? 'bg-slate-50 text-slate-400 border border-slate-100 cursor-not-allowed' : 'bg-slate-800 text-white hover:bg-slate-700 shadow-md hover:shadow-lg'}\`}
          >
            {isCheckedInToday ? 'Đã điểm danh' : 'Điểm danh'}
          </button>
        </div>
      </header>`;

content = content.replace(oldHeader, newHeader);
fs.writeFileSync('src/Dashboard.jsx', content, 'utf8');
console.log('Done fixing colors!');
