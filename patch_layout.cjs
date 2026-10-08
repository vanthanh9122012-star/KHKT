const fs = require('fs');
let content = fs.readFileSync('src/TownBuilder.jsx', 'utf8');

const stateLineIdx = content.indexOf('const [activeHouseIndex, setActiveHouseIndex] = useState(0);');
if (!content.includes('isPlanetDetailView')) {
  content = content.slice(0, stateLineIdx) + 
            'const [activeHouseIndex, setActiveHouseIndex] = useState(0);\n  const [isPlanetDetailView, setIsPlanetDetailView] = useState(false);\n' + 
            content.slice(stateLineIdx + 60);
}

content = content.replace(/onClick=\{\(\) => unlocked && setActiveHouseIndex\(index\)\}/g, 
  'onClick={() => { if (unlocked) { setActiveHouseIndex(index); setIsPlanetDetailView(true); } }}');


const idxHeader = content.indexOf('{/* HEADER */}');
const idxMindmap = content.indexOf('{/* Mindmap Town View */}');
const idxRooms = content.indexOf('{/* Inside the House: 8 Rooms */}');
const idxQuiz = content.indexOf('{activeQuizRoom && (');

if (idxHeader !== -1 && idxMindmap !== -1 && idxRooms !== -1 && idxQuiz !== -1) {
  const header = content.substring(idxHeader, idxMindmap);
  const mindmap = content.substring(idxMindmap, idxRooms);
  const rooms = content.substring(idxRooms, idxQuiz);
  
  // Find the end of the return block. The quiz block ends near the end of the component.
  // Actually, I can just replace the whole return block.
  const idxReturn = content.indexOf('return (');
  const beforeReturn = content.substring(0, idxReturn);
  const quizAndAfter = content.substring(idxQuiz);
  
  const newReturn = `return (
    <div className="space-y-6 animate-fade-in pb-10 h-full min-h-screen">
      {!isPlanetDetailView ? (
        <>
          ${header}
          ${mindmap}
        </>
      ) : (
        <div className="flex flex-col xl:flex-row gap-8 mt-6 relative min-h-screen">
          <button 
            onClick={() => setIsPlanetDetailView(false)}
            className="absolute -top-4 left-0 z-50 flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg font-black text-slate-700 hover:text-sky-600 hover:shadow-xl transition-all border-2 border-slate-100"
          >
            <Compass size={24} /> Trở về Hệ Mặt Trời
          </button>
          
          {/* Big 3D Planet Display */}
          <div className="w-full xl:w-5/12 flex flex-col items-center justify-center bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl border-4 border-slate-800 min-h-[500px] mt-16 xl:mt-0 xl:sticky xl:top-10 h-[calc(100vh-80px)]">
            <div className="absolute inset-0 z-10 w-[180%] h-[180%] -top-[40%] -left-[40%]">
               <InteractivePlanet3D completed={completedRooms} total={totalRooms} index={activeHouseIndex} />
            </div>
            
            <div className="absolute bottom-10 z-20 text-center bg-slate-900/80 backdrop-blur-md p-8 rounded-[2rem] border-2 border-slate-700 shadow-2xl w-[90%]">
              <h2 className="text-4xl font-black text-white mb-3">{activeHouse ? activeHouse.title : houses[0].title}</h2>
              <div className="text-lg font-bold text-sky-400 bg-sky-950/80 inline-block px-6 py-2 rounded-full border-2 border-sky-800 uppercase tracking-widest">
                {getPhaseName(completedRooms, totalRooms)}
              </div>
            </div>
          </div>
          
          {/* Rooms List */}
          <div className="w-full xl:w-7/12 mt-8 xl:mt-0">
            ${rooms.replace('mt-8', 'mt-0')}
          </div>
        </div>
      )}
      
      ${quizAndAfter}`;

  const finalContent = beforeReturn + newReturn;
  fs.writeFileSync('src/TownBuilder.jsx', finalContent, 'utf8');
  console.log('Successfully refactored layout!');
} else {
  console.log('Failed to match sections!');
}
