const fs = require('fs');
let content = fs.readFileSync('src/Dashboard.jsx', 'utf8');
content = content.replace(/\\\`/g, '`');
content = content.replace(/\\\$/g, '$');
fs.writeFileSync('src/Dashboard.jsx', content, 'utf8');
console.log('Fixed escaping');
