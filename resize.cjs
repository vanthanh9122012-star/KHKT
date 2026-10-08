const fs = require('fs');
let content = fs.readFileSync('src/TownBuilder.jsx', 'utf8');

// Fix Solar System view planet size (w-[150%])
content = content.replace(
  'className="absolute inset-0 z-10 w-[150%] h-[150%] -top-[25%] -left-[25%]"',
  'className="absolute inset-0 z-10 w-[110%] h-[110%] -top-[5%] -left-[5%]"'
);

// Fix Planet Detail view planet size (w-[180%])
content = content.replace(
  'className="absolute inset-0 z-10 w-[180%] h-[180%] -top-[40%] -left-[40%]"',
  'className="absolute inset-0 z-10 w-[110%] h-[110%] -top-[5%] -left-[5%]"'
);

fs.writeFileSync('src/TownBuilder.jsx', content, 'utf8');
console.log('Fixed planet sizes');
