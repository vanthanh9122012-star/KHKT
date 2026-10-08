const fs = require('fs');
let content = fs.readFileSync('src/TownBuilder.jsx', 'utf8');

const firstReturn = content.indexOf('return (');
const idxIsPlanet = content.indexOf('{!isPlanetDetailView ? (', firstReturn);
const idxActiveQuiz = content.indexOf('{activeQuizRoom && (', idxIsPlanet);

if (firstReturn !== -1 && idxIsPlanet !== -1 && idxActiveQuiz !== -1) {
  const layoutStart = content.substring(idxIsPlanet, idxActiveQuiz);
  
  let quizContent = content.substring(idxActiveQuiz);
  
  // Find the exact matching closing brace for `{activeQuizRoom && (`
  // We can just find the LAST `)}` in the file.
  const lastClosing = quizContent.lastIndexOf(')}');
  if (lastClosing !== -1) {
    let quizDiv = quizContent.substring(20, lastClosing).trim();
    
    // Remove the fixed inset-0 class
    quizDiv = quizDiv.replace('fixed inset-0 z-[9999] bg-slate-50 overflow-y-auto animate-fade-in w-full h-full m-0 p-0', 'bg-slate-50 animate-fade-in w-full min-h-screen m-0 p-0');
    
    const beforeReturn = content.substring(0, firstReturn);
    
    const newReturn = `return (
    <div className="animate-fade-in w-full h-full min-h-screen">
      {activeQuizRoom ? (
        ${quizDiv}
      ) : (
        <div className="space-y-6 pb-10 p-8 h-full">
          ${layoutStart}
        </div>
      )}
    </div>
  );`;
  
    fs.writeFileSync('src/TownBuilder.jsx', beforeReturn + newReturn, 'utf8');
    console.log('Success');
  } else {
    console.log('Failed to find closing brace');
  }
} else {
  console.log('Failed to find markers', firstReturn, idxIsPlanet, idxActiveQuiz);
}
