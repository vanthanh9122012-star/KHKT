const fs = require('fs');
let content = fs.readFileSync('src/Dashboard.jsx', 'utf8');
content = content.replace("import { MOMENTUM_QUOTES } from './App';", "");
fs.writeFileSync('src/Dashboard.jsx', content, 'utf8');
console.log('Fixed Dashboard.jsx import');
