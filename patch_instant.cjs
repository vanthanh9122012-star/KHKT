const fs = require('fs');

function patchInstantFeedback(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Replace isSubmitted state
  content = content.replace(
    /const \[isSubmitted, setIsSubmitted\] = useState\(false\);/,
    'const [isSubmitted, setIsSubmitted] = useState(false);\n  const [submittedQuestions, setSubmittedQuestions] = useState({});'
  );
  
  // 2. Replace handleAnswerChange
  const newHandleAnswer = `  const handleAnswerChange = (q, val) => {
    if (submittedQuestions[q.id]) return;
    setUserAnswers(prev => ({ ...prev, [q.id]: val }));
    
    if (q.type === 'mcq' || q.type === 'true_false') {
      submitSingleQuestion(q, val);
    }
  };

  const submitSingleQuestion = (q, val) => {
    setSubmittedQuestions(prev => ({ ...prev, [q.id]: true }));
    let isCorrect = false;
    if (val.trim().toLowerCase() === q.correct.toLowerCase()) {
      isCorrect = true;
    }
    
    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      const newMistake = { ...q, subject: q.subject || (activeQuizRoom ? activeQuizRoom.subject : (typeof currentQuiz !== 'undefined' ? currentQuiz.subject : 'Tổng hợp')), userAnswer: val, timestamp: new Date().toISOString() };
      const existing = JSON.parse(localStorage.getItem('study_app_mistakes') || '[]');
      localStorage.setItem('study_app_mistakes', JSON.stringify([...existing, newMistake]));
    }
  };`;
  
  content = content.replace(/  const handleAnswerChange = \((qId|q), val\) => \{[\s\S]*?setUserAnswers\(prev => \(\{ \.\.\.prev, \[(qId|q\.id)\]: val \}\)\);\n  \};/, newHandleAnswer);
  
  // 3. Update onChange calls in UI
  content = content.replace(/onChange=\{\(\) => handleAnswerChange\(q\.id, opt\)\}/g, 'onChange={() => handleAnswerChange(q, opt)}');
  content = content.replace(/onChange=\{\(e\) => handleAnswerChange\(q\.id, e\.target\.value\)\}/g, 'onChange={(e) => handleAnswerChange(q, e.target.value)}');
  
  // 4. Change disabled and conditional checks from `isSubmitted` to `(isSubmitted || submittedQuestions[q.id])`
  content = content.replace(/disabled=\{isSubmitted\}/g, 'disabled={isSubmitted || submittedQuestions[q.id]}');
  // Need to be very careful replacing `isSubmitted &&` inside the JSX mapping
  content = content.replace(/isSubmitted &&/g, '(isSubmitted || submittedQuestions[q.id]) &&');
  content = content.replace(/!isSubmitted \?/g, '!(isSubmitted || submittedQuestions[q.id]) ?');
  
  // 5. Add a "Kiểm tra" button for fill_blank if it's not submitted
  const fillBlankCheckButton = ` />
                          {!(isSubmitted || submittedQuestions[q.id]) && (
                            <button onClick={() => submitSingleQuestion(q, userAnswers[q.id] || '')} className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-xl font-bold transition">Kiểm tra đáp án</button>
                          )}
                          {(isSubmitted || submittedQuestions[q.id]) && userAnswers[q.id]?.trim().toLowerCase() !== q.correct.toLowerCase() && (`;
  
  content = content.replace(/ \/>\n                          \{\(isSubmitted \|\| submittedQuestions\[q\.id\]\) && userAnswers\[q\.id\]\?\.trim\(\)\.toLowerCase\(\) !== q\.correct\.toLowerCase\(\) && \(/, fillBlankCheckButton);
  
  fs.writeFileSync(filePath, content, 'utf8');
}

patchInstantFeedback('src/TownBuilder.jsx');
patchInstantFeedback('src/QuizManager.jsx');
console.log('Patched for instant feedback!');
