const fs = require('fs');
let appContent = fs.readFileSync('src/App.jsx', 'utf8');

// Insert tracker in App.jsx inside the App component, right after currentUser state
const trackerCode = `
  useEffect(() => {
    if (!currentUser) return;
    const interval = setInterval(() => {
      const today = new Date();
      const dateKey = \`\${today.getFullYear()}-\${String(today.getMonth()+1).padStart(2, '0')}-\${String(today.getDate()).padStart(2, '0')}\`;
      const stats = JSON.parse(localStorage.getItem('study_time_stats') || '{}');
      stats[dateKey] = (stats[dateKey] || 0) + 10;
      localStorage.setItem('study_time_stats', JSON.stringify(stats));
    }, 10000);
    return () => clearInterval(interval);
  }, [currentUser]);
`;
if (!appContent.includes('localStorage.getItem(\'study_time_stats\')')) {
  appContent = appContent.replace('const [currentUser, setCurrentUser] = useState(null);', 'const [currentUser, setCurrentUser] = useState(null);\n' + trackerCode);
  fs.writeFileSync('src/App.jsx', appContent, 'utf8');
}
