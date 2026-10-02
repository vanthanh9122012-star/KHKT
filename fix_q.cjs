const fs = require('fs');

function fixQError(file) {
  let content = fs.readFileSync(file, 'utf8');
  // Both TownBuilder and QuizManager
  const regex = /\{\!\(isSubmitted \|\| submittedQuestions\[q\.id\]\) \? \(\n\s*<button \n\s*onClick=\{submitQuiz\}/g;
  content = content.replace(regex, '{!isSubmitted ? (\n                    <button \n                      onClick={submitQuiz}');
  
  fs.writeFileSync(file, content, 'utf8');
}

fixQError('src/TownBuilder.jsx');
fixQError('src/QuizManager.jsx');
console.log('Fixed q properly');
