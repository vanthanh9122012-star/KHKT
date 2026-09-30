const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Add import
if (!content.includes('import ReviewManager from')) {
  content = content.replace(
    "import QuizManager from './QuizManager';",
    "import QuizManager from './QuizManager';\nimport ReviewManager from './ReviewManager';"
  );
}

// Remove inline ReviewManager
const start = content.indexOf('const ReviewManager = () => {');
if (start !== -1) {
  // It stops right before const TimetableManager
  const end = content.indexOf('const TimetableManager = () => {');
  if (end !== -1 && start < end) {
    const toRemove = content.substring(start, end);
    content = content.replace(toRemove, '');
  }
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('App.jsx fixed');
