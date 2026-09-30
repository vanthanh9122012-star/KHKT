const fs = require('fs');
let content = fs.readFileSync('src/GamesManager.jsx', 'utf8');

// Add import
if (!content.includes('import ScienceLab from')) {
  content = content.replace(
    "import CatchWordGame from './CatchWordGame';",
    "import CatchWordGame from './CatchWordGame';\nimport ScienceLab from './ScienceLab';"
  );
}

// Remove inline ScienceLab
const start = content.indexOf('const ScienceLab = ({ addReward }) => {');
if (start !== -1) {
  // We need to find the end of ScienceLab. It's before `export default function GamesManager`
  const end = content.indexOf('export default function GamesManager');
  if (end !== -1 && start < end) {
    const toRemove = content.substring(start, end);
    content = content.replace(toRemove, '');
  }
}

fs.writeFileSync('src/GamesManager.jsx', content, 'utf8');
console.log('GamesManager.jsx fixed');
