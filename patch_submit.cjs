const fs = require('fs');

let content = fs.readFileSync('src/TownBuilder.jsx', 'utf8');

const submitQuizPatch = `  const submitQuiz = () => {
    let newScore = 0;
    let newMistakes = [];
    activeQuizRoom.questions.forEach(q => {
      const uAns = userAnswers[q.id];
      if (!uAns) {
        newMistakes.push({ ...q, subject: q.subject || activeQuizRoom.subject || 'Tổng hợp', userAnswer: 'Không trả lời', timestamp: new Date().toISOString() });
        return;
      }
      
      let isCorrect = false;
      if ((q.type === 'mcq' || q.type === 'true_false') && uAns === q.correct) {
        isCorrect = true;
      } else if (q.type === 'fill_blank' && uAns.trim().toLowerCase() === q.correct.toLowerCase()) {
        isCorrect = true;
      }
      
      if (isCorrect) {
        newScore += 1;
      } else {
        newMistakes.push({ ...q, subject: q.subject || activeQuizRoom.subject || 'Tổng hợp', userAnswer: uAns, timestamp: new Date().toISOString() });
      }
    });
    
    // Lưu lỗi sai
    if (newMistakes.length > 0) {
      const existing = JSON.parse(localStorage.getItem('studyflow_quiz_mistakes') || '[]');
      localStorage.setItem('studyflow_quiz_mistakes', JSON.stringify([...existing, ...newMistakes]));
    }
    
    setScore(newScore);
    setIsSubmitted(true);
  };`;

content = content.replace(/  const submitQuiz = \(\) => \{[\s\S]*?setIsSubmitted\(true\);\n  \};/, submitQuizPatch);
fs.writeFileSync('src/TownBuilder.jsx', content, 'utf8');

let contentQ = fs.readFileSync('src/QuizManager.jsx', 'utf8');
const submitQuizPatchQ = `  const submitQuiz = () => {
    let newScore = 0;
    let newMistakes = [];
    currentQuiz.questions.forEach(q => {
      const uAns = userAnswers[q.id];
      if (!uAns) {
        newMistakes.push({ ...q, subject: q.subject || currentQuiz.subject || 'Tổng hợp', userAnswer: 'Không trả lời', timestamp: new Date().toISOString() });
        return;
      }
      let isCorrect = false;
      if ((q.type === 'mcq' || q.type === 'true_false') && uAns === q.correct) {
        isCorrect = true;
      } else if (q.type === 'fill_blank' && uAns.trim().toLowerCase() === q.correct.toLowerCase()) {
        isCorrect = true;
      }
      if (isCorrect) {
        newScore += 1;
      } else {
        newMistakes.push({ ...q, subject: q.subject || currentQuiz.subject || 'Tổng hợp', userAnswer: uAns, timestamp: new Date().toISOString() });
      }
    });
    
    if (newMistakes.length > 0) {
      const existing = JSON.parse(localStorage.getItem('studyflow_quiz_mistakes') || '[]');
      localStorage.setItem('studyflow_quiz_mistakes', JSON.stringify([...existing, ...newMistakes]));
    }
    
    setScore(newScore);
    setIsSubmitted(true);
  };`;

contentQ = contentQ.replace(/  const submitQuiz = \(\) => \{[\s\S]*?setIsSubmitted\(true\);\n  \};/, submitQuizPatchQ);
fs.writeFileSync('src/QuizManager.jsx', contentQ, 'utf8');
console.log('Patched submitQuiz in both files.');
