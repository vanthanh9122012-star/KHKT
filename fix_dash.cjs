const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Add import
if (!content.includes('import Dashboard from')) {
  content = content.replace(
    "import PomodoroFocus from './PomodoroFocus';",
    "import PomodoroFocus from './PomodoroFocus';\nimport Dashboard from './Dashboard';"
  );
}

// Remove inline Dashboard
const start = content.indexOf('const Dashboard = ({ setActiveTab }) => {');
if (start !== -1) {
  const end = content.indexOf('const StatsDashboard = () => {');
  if (end !== -1 && start < end) {
    const toRemove = content.substring(start, end);
    content = content.replace(toRemove, '');
  }
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('App.jsx fixed');
