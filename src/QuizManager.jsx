import React, { useState, useEffect } from 'react';
import { Book, CheckCircle2, X, AlertCircle, Award, Target, Sparkles, Lightbulb, Lock, Unlock } from 'lucide-react';
import { QUIZ_DATA } from './data/quizData';
import AIQuizGenerator from './AIQuizGenerator';
import { GoogleGenAI } from '@google/genai';

const getSubjectStyle = (subject) => {
  switch (subject) {
    case 'Toán': return 'text-blue-600 bg-blue-50 border-blue-200';
    case 'Văn': return 'text-pink-600 bg-pink-50 border-pink-200';
    case 'Anh': return 'text-green-600 bg-green-50 border-green-200';
    case 'Sử': return 'text-orange-600 bg-orange-50 border-orange-200';
    case 'Địa': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'Vật lý': return 'text-purple-600 bg-purple-50 border-purple-200';
    case 'Hóa học': return 'text-teal-600 bg-teal-50 border-teal-200';
    case 'Sinh học': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    default: return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};

export default function QuizManager({ addReward }) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedQuestions, setSubmittedQuestions] = useState({});
  const [score, setScore] = useState(0);
  
  const [showAIModal, setShowAIModal] = useState(false);
    const [completedQuizzes, setCompletedQuizzes] = useState(() => {
    return JSON.parse(localStorage.getItem('study_app_quiz_progress') || '[]');
  });

  const markQuizCompleted = (quizId) => {
    setCompletedQuizzes(prev => {
      if (!prev.includes(quizId)) {
        const updated = [...prev, quizId];
        localStorage.setItem('study_app_quiz_progress', JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  };
  const [customQuizzes, setCustomQuizzes] = useState([]);

  useEffect(() => {
    const savedCustom = localStorage.getItem('study_app_custom_quizzes');
    if (savedCustom) setCustomQuizzes(JSON.parse(savedCustom));
  }, []);

  const allQuizzes = [...customQuizzes, ...QUIZ_DATA];
  const filteredQuizzes = selectedSubject ? allQuizzes.filter(q => q.subject === selectedSubject) : allQuizzes;

  const handleStart = (quiz) => {
    setActiveQuiz(quiz);
    setUserAnswers({});
    setIsSubmitted(false);
    setSubmittedQuestions({});
    setScore(0);
  };

  const handleAnswerChange = (q, val) => {
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
  };

  const submitQuiz = () => {
    let newScore = 0;
    let newMistakes = [];
    
    activeQuiz.questions.forEach(q => {
      const uAns = userAnswers[q.id];
      if (!uAns) {
        newMistakes.push({ ...q, userAnswer: '', quizTitle: activeQuiz.title, subject: activeQuiz.subject, correctAnswer: q.correct });
        return;
      }
      
      let isCorrect = false;
      if ((q.type === 'mcq' || q.type === 'true_false') && uAns === q.correct) {
        isCorrect = true;
      } else if (q.type === 'fill_blank' && uAns.trim().toLowerCase() === q.correct.toLowerCase()) {
        isCorrect = true;
      } else if (q.type === 'essay') {
        isCorrect = false; 
      }

      if (isCorrect) newScore += 1;
      else {
        newMistakes.push({ ...q, userAnswer: uAns, quizTitle: activeQuiz.title, subject: activeQuiz.subject, correctAnswer: q.correct });
      }
    });

    setScore(newScore);
    setIsSubmitted(true);
    if (activeQuiz && activeQuiz.id) markQuizCompleted(activeQuiz.id);
    addReward(newScore * 2, 0); 
    
    if (newMistakes.length > 0) {
      const existing = JSON.parse(localStorage.getItem('study_app_mistakes') || '[]');
      const combined = [...newMistakes, ...existing];
      const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());
      localStorage.setItem('study_app_mistakes', JSON.stringify(unique));
    }
  };

  const handleAIGenerated = (newQuiz) => {
    let current = Array.isArray(customQuizzes) ? customQuizzes : [];
    const updated = [newQuiz, ...current];
    setCustomQuizzes(updated);
    localStorage.setItem('study_app_custom_quizzes', JSON.stringify(updated));
    setShowAIModal(false);
  };

  
  const isQuizLocked = (quiz) => {
    if (!quiz.chapter || quiz.chapter === 1) return false;
    const prevQuiz = allQuizzes.find(q => q.subject === quiz.subject && q.grade === quiz.grade && q.chapter === quiz.chapter - 1);
    if (!prevQuiz) return false;
    return !completedQuizzes.includes(prevQuiz.id);
  };

  if (activeQuiz) {
    return (
      <div className="fixed inset-0 z-[9999] bg-slate-50 overflow-y-auto animate-fade-in w-full h-full m-0 p-0">
        <div className="w-full min-h-screen flex flex-col bg-white">
          <header className="bg-gradient-to-r from-sky-600 to-indigo-700 p-6 sm:px-10 sm:py-8 text-white flex justify-between items-center sticky top-0 z-10 shadow-md">
            <div>
              <h1 className="text-2xl sm:text-4xl font-black mb-2 text-white">{activeQuiz.title}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full text-white">{activeQuiz.subject}</span>
                <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full text-white">{activeQuiz.questions.length} câu hỏi</span>
              </div>
            </div>
            <button onClick={() => setActiveQuiz(null)} className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition text-white backdrop-blur-sm shadow-sm">
              <X size={28} />
            </button>
          </header>

          <div className="flex-1 p-6 sm:p-10 max-w-5xl mx-auto w-full space-y-8 pb-32">
          {activeQuiz.questions.map((q, idx) => (
            <div key={q.id} className="bg-surface rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Câu {idx + 1}: {q.text}</h3>
              
              {(q.type === 'mcq' || q.type === 'true_false') ? (
                <div className="space-y-3">
                  {q.options.map(opt => (
                    <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                      userAnswers[q.id] === opt ? 'border-sky-500 bg-sky-50' : 'border-gray-100 hover:border-gray-200 bg-white'
                    } ${(isSubmitted || submittedQuestions[q.id]) && opt === q.correct ? 'border-green-500 bg-green-50' : ''}`}>
                      <input 
                        type="radio" 
                        name={`q-${q.id}`} 
                        value={opt} 
                        checked={userAnswers[q.id] === opt} 
                        onChange={() => handleAnswerChange(q, opt)}
                        disabled={isSubmitted || submittedQuestions[q.id]}
                        className="w-5 h-5 text-sky-500 border-gray-300 focus:ring-sky-500"
                      />
                      <span className={`font-medium ${(isSubmitted || submittedQuestions[q.id]) && opt === q.correct ? 'text-green-700' : 'text-gray-700'}`}>{opt}</span>
                      {(isSubmitted || submittedQuestions[q.id]) && opt === q.correct && <CheckCircle2 size={20} className="ml-auto text-green-500" />}
                      {(isSubmitted || submittedQuestions[q.id]) && userAnswers[q.id] === opt && opt !== q.correct && <X size={20} className="ml-auto text-red-500" />}
                    </label>
                  ))}
                  {(isSubmitted || submittedQuestions[q.id]) && userAnswers[q.id] !== q.correct && q.explanation && (
                    <div className="mt-4 text-sm bg-orange-50 text-orange-800 p-3 rounded-xl border border-orange-200 font-medium">
                      {q.explanation}
                    </div>
                  )}
                </div>
              ) : q.type === 'fill_blank' ? (
                <div className="space-y-3">
                  <input 
                    type="text"
                    value={userAnswers[q.id] || ''}
                    onChange={(e) => handleAnswerChange(q, e.target.value)}
                    disabled={isSubmitted || submittedQuestions[q.id]}
                    placeholder="Nhập đáp án của bạn..."
                    className={`w-full p-4 border-2 rounded-xl outline-none transition ${
                      !(isSubmitted || submittedQuestions[q.id]) ? 'border-gray-100 focus:border-sky-500' :
                      userAnswers[q.id]?.trim().toLowerCase() === q.correct.toLowerCase() ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-500 bg-red-50 text-red-800'
                    }`}
                  />
                  {(isSubmitted || submittedQuestions[q.id]) && userAnswers[q.id]?.trim().toLowerCase() !== q.correct.toLowerCase() && (
                    <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 mt-3">
                      <span className="text-xs font-bold text-sky-600 block mb-1">Đáp án đúng:</span>
                      <span className="font-bold text-gray-800">{q.correct}</span>
                      {q.explanation && <p className="text-sm text-gray-600 mt-1">{q.explanation}</p>}
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  <textarea 
                    value={userAnswers[q.id] || ''}
                    onChange={(e) => handleAnswerChange(q, e.target.value)}
                    disabled={isSubmitted || submittedQuestions[q.id]}
                    placeholder="Trình bày tự luận..."
                    className="w-full h-32 p-4 border-2 border-gray-100 rounded-xl focus:border-sky-500 outline-none transition resize-none"
                  ></textarea>
                  {(isSubmitted || submittedQuestions[q.id]) && (
                    <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 mt-3">
                      <span className="text-xs font-bold text-sky-600 block mb-1">Gợi ý / Bareme:</span>
                      <span className="font-medium text-gray-800">{q.correct}</span>
                      {q.explanation && <p className="text-sm text-gray-600 mt-1">{q.explanation}</p>}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center pb-12">
          {!isSubmitted ? (
                    <button 
                      onClick={submitQuiz}
              className="px-10 py-4 bg-primary text-white font-bold rounded-xl text-lg hover:bg-sky-600 transition shadow-lg"
            >
              Nộp bài
            </button>
          ) : (
            <div className="text-center w-full bg-surface p-8 rounded-3xl border border-gray-100 shadow-sm">
              <Target size={48} className="mx-auto text-primary mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Hoàn thành!</h2>
              <p className="text-xl text-gray-600 mb-4">Số điểm: <span className="font-black text-primary">{score}/{activeQuiz.questions.length}</span></p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => setActiveQuiz(null)}
                  className="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition"
                >
                  Về danh sách
                </button>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Luyện Thi & Trắc Nghiệm</h1>
          <p className="text-gray-500">Làm các bài test đa dạng để nhận XP.</p>
        </div>
        <button 
          onClick={() => setShowAIModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-primary to-sky-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform flex items-center gap-2"
        >
          <Sparkles size={20} /> Tạo Đề bằng AI
        </button>
      </header>

      {/* Filters */}
      <div className="bg-surface rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
          <Book size={18} className="text-primary" />
          <span>Lọc theo môn học</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setSelectedSubject(null)}
            className={`px-4 py-2 rounded-full font-medium text-sm transition ${!selectedSubject ? 'bg-sky-400 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Tất cả
          </button>
          {['Toán', 'Ngữ Văn', 'Tiếng Anh', 'KHTN', 'Lịch sử - Địa lí', 'GDCD', 'Tin học', 'Công nghệ'].map(sub => (
            <button 
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition ${selectedSubject === sub ? 'bg-sky-400 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredQuizzes.map((quiz) => (
          <div key={quiz.id} className={`bg-surface p-6 rounded-3xl border border-gray-100 shadow-sm transition group relative overflow-hidden ${isQuizLocked(quiz) ? 'opacity-70 grayscale cursor-not-allowed' : 'hover:shadow-md'}`}>
            {completedQuizzes.includes(quiz.id) && (
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-500 rounded-full flex items-end justify-start p-3 z-10 shadow-lg">
                <CheckCircle2 size={16} className="text-white" />
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold border px-2 py-1 rounded-md ${getSubjectStyle(quiz.subject)}`}>{quiz.subject}</span>
                {quiz.grade && <span className="text-xs font-bold text-gray-600 bg-gray-100 border border-gray-200 px-2 py-1 rounded">Lớp {quiz.grade}</span>}
                {quiz.chapter && <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-1 rounded">Chương {quiz.chapter}</span>}
                <span className="text-xs font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded">{quiz.questions.length} câu</span>
              </div>
              {isQuizLocked(quiz) && <Lock size={18} className="text-gray-400" />}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition">{quiz.title}</h3>
            <p className="text-gray-500 text-sm mb-6 line-clamp-2">Làm bài tập đa dạng (Trắc nghiệm, Tự luận, Đúng/Sai...) để nhận XP.</p>
            
            <button 
              onClick={() => { if(!isQuizLocked(quiz)) handleStart(quiz); }}
              disabled={isQuizLocked(quiz)}
              className={`w-full py-3 font-bold rounded-xl transition flex items-center justify-center gap-2 ${isQuizLocked(quiz) ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-50 hover:bg-sky-50 text-primary'}`}
            >
              {isQuizLocked(quiz) ? <><Lock size={18}/> Bị khóa (Cần hoàn thành Chương trước)</> : 'Bắt đầu làm bài'}
            </button>
          </div>
        ))}
        {filteredQuizzes.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-400 font-medium">
            Chưa có đề thi nào cho môn học này.
          </div>
        )}
      </div>

      {showAIModal && (
        <AIQuizGenerator 
          onClose={() => setShowAIModal(false)}
          onGenerated={handleAIGenerated}
        />
      )}
    </div>
  );
}
