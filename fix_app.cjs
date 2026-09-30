const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Add import
if (!content.includes('import TimetableManager from')) {
  content = content.replace(
    "import ReviewManager from './ReviewManager';",
    "import ReviewManager from './ReviewManager';\nimport TimetableManager from './TimetableManager';"
  );
}

// Remove inline TimetableManager
const start = content.indexOf('const TimetableManager = () => {');
if (start !== -1) {
  const end = content.indexOf('const MOMENTUM_QUOTES');
  if (end !== -1 && start < end) {
    const toRemove = content.substring(start, end);
    content = content.replace(toRemove, '');
  }
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('App.jsx fixed');
