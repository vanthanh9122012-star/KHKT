const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Add import
if (!content.includes('import PomodoroFocus from')) {
  content = content.replace(
    "import TimetableManager from './TimetableManager';",
    "import TimetableManager from './TimetableManager';\nimport PomodoroFocus from './PomodoroFocus';"
  );
}

// Remove inline PomodoroFocus
const start = content.indexOf('const PomodoroFocus = () => {');
if (start !== -1) {
  const end = content.indexOf('const StatsDashboard = () => {');
  if (end !== -1 && start < end) {
    const toRemove = content.substring(start, end);
    content = content.replace(toRemove, '');
  }
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('App.jsx fixed');
