const fs = require('fs');

const file = 'src/TownBuilder.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div className="bg-gradient-to-r from-sky-600 to-indigo-700[\s\S]*?<\/button>\s*<\/div>/;
const replacement = `<div className="flex justify-end p-4 sm:px-8 sm:py-6 sticky top-0 z-10 bg-white/90 backdrop-blur-md">
                <button onClick={() => setActiveQuizRoom(null)} className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition shadow-sm font-bold flex items-center gap-2">
                  <X size={24} /> Đóng
                </button>
              </div>`;

content = content.replace(regex, replacement);

fs.writeFileSync(file, content, 'utf8');
console.log('Done');
