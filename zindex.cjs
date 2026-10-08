const fs = require('fs');
let content = fs.readFileSync('src/TownBuilder.jsx', 'utf8');

// 1. Add relative z-30 to the text box in the Solar System View
content = content.replace(
  '<div className={`mt-2 text-center p-3 rounded-2xl w-48 transition-all duration-300 ${isActive ? \'bg-white shadow-xl border-2 border-sky-400\' : \'bg-white/50 backdrop-blur-sm shadow-sm border border-transparent\'}`}>',
  '<div className={`relative z-30 mt-2 text-center p-3 rounded-2xl w-48 transition-all duration-300 ${isActive ? \'bg-white shadow-xl border-2 border-sky-400\' : \'bg-white/50 backdrop-blur-sm shadow-sm border border-transparent\'}`}>'
);

// 2. Restore the epic large planet sizes that the user liked (but now properly layered behind the text)
// Solar System view: 110% -> 150%
content = content.replace(
  'className="absolute inset-0 z-10 w-[110%] h-[110%] -top-[5%] -left-[5%]"',
  'className="absolute inset-0 z-10 w-[150%] h-[150%] -top-[25%] -left-[25%]"'
);

// Detail view: 110% -> 180% (actually wait, let me just replace the specific string for detail view)
// Let me look at how I replaced it.
// I replaced the Detail View planet size string directly. Let's find the current one.
// The detail view planet is currently: 'className="absolute inset-0 z-10 w-[110%] h-[110%] -top-[5%] -left-[5%]"'
// Oh wait, I replaced BOTH with the exact same 110% string.
// So there are two instances of `w-[110%] h-[110%] -top-[5%] -left-[5%]`.
// Let's replace the first one with 150%, and the second one with 160% (since 180% might be too big).
let occurrences = 0;
content = content.replace(/className="absolute inset-0 z-10 w-\[110%\] h-\[110%\] -top-\[5%\] -left-\[5%\]"/g, () => {
  occurrences++;
  if (occurrences === 1) {
    return 'className="absolute inset-0 z-10 w-[150%] h-[150%] -top-[25%] -left-[25%]"';
  } else {
    return 'className="absolute inset-0 z-10 w-[160%] h-[160%] -top-[30%] -left-[30%]"';
  }
});

fs.writeFileSync('src/TownBuilder.jsx', content, 'utf8');
console.log('Fixed Z-index and restored planet size!');
