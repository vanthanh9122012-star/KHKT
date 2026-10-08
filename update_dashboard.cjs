const fs = require('fs');
let content = fs.readFileSync('src/Dashboard.jsx', 'utf8');

// 1. Add missing import if needed (useEffect)
if (!content.includes('useEffect')) {
  content = content.replace('import { useState } from \'react\';', 'import { useState, useEffect } from \'react\';');
}

// 2. Insert studyStats state and useEffect right after streakData
const statsLogic = `
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
  const todayKey = \`\${todayDate.getFullYear()}-\${String(todayDate.getMonth()+1).padStart(2, '0')}-\${String(todayDate.getDate()).padStart(2, '0')}\`;
  const todaySeconds = studyStats[todayKey] || 0;
  const todayHours = Math.floor(todaySeconds / 3600);
  const todayMinutes = Math.floor((todaySeconds % 3600) / 60);

  const getDayStat = (dayOffset) => {
    const d = new Date();
    const day = d.getDay(); 
    const diff = d.getDate() - day + (day === 0 ? -6 : 1) + dayOffset;
    const targetDate = new Date(d.setDate(diff));
    const key = \`\${targetDate.getFullYear()}-\${String(targetDate.getMonth()+1).padStart(2, '0')}-\${String(targetDate.getDate()).padStart(2, '0')}\`;
    return studyStats[key] || 0;
  };

  const chartHeights = [0, 1, 2, 3, 4, 5, 6].map(i => {
    const seconds = getDayStat(i);
    const maxTime = 7200; // 2 hours
    return Math.min(100, (seconds / maxTime) * 100);
  });
`;

if (!content.includes('const [studyStats, setStudyStats]')) {
  content = content.replace(
    'return { count: 3, lastCheckIn: null };\n  });',
    'return { count: 3, lastCheckIn: null };\n  });\n' + statsLogic
  );
}

// 3. Replace static hours and minutes with dynamic ones
const staticTimeDiv = '<div>\n            <div className="text-4xl font-black text-indigo-700 tracking-tight">2<span className="text-2xl font-bold text-indigo-400">h</span> 45<span className="text-2xl font-bold text-indigo-400">m</span></div>\n            <div className="text-sm text-teal-600 mt-2 font-semibold flex items-center gap-1">\n              <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded text-xs">+15%</span> so với hôm qua\n            </div>\n          </div>';

const dynamicTimeDiv = `<div>
            <div className="text-4xl font-black text-indigo-700 tracking-tight">{todayHours}<span className="text-2xl font-bold text-indigo-400">h</span> {todayMinutes}<span className="text-2xl font-bold text-indigo-400">m</span></div>
            <div className="text-sm text-teal-600 mt-2 font-semibold flex items-center gap-1">
              <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded text-xs">Trực tiếp</span> Đang ghi nhận
            </div>
          </div>`;

content = content.replace(staticTimeDiv, dynamicTimeDiv);

// 4. Replace static chart array
content = content.replace(
  '[40, 70, 45, 90, 65, 30, 80].map((h, i) => (',
  'chartHeights.map((h, i) => ('
);

fs.writeFileSync('src/Dashboard.jsx', content, 'utf8');
console.log('Dashboard updated');
