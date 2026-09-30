const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Add import
if (!content.includes('import QuizManager')) {
  content = content.replace(
    "import AIQuizGenerator from './AIQuizGenerator';",
    "import AIQuizGenerator from './AIQuizGenerator';\nimport QuizManager from './QuizManager';"
  );
}

// 1. Remove QUIZ_DATA
const quizDataStart = content.indexOf('const QUIZ_DATA = [');
const sidebarStart = content.indexOf('const Sidebar = ');
if (quizDataStart !== -1 && sidebarStart !== -1 && quizDataStart < sidebarStart) {
  const toRemove = content.substring(quizDataStart, sidebarStart);
  content = content.replace(toRemove, '');
}

// 2. Remove QuizManager
const qmStart = content.indexOf('const QuizManager = ({ addReward }) => {');
const tmStart = content.indexOf('const TimetableManager = () => {');
if (qmStart !== -1 && tmStart !== -1 && qmStart < tmStart) {
  const toRemove2 = content.substring(qmStart, tmStart);
  content = content.replace(toRemove2, '');
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('App.jsx fixed beautifully');
