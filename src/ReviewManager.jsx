import React, { useState, useEffect } from 'react';
import {  CheckCircle2, X, Lightbulb, Sparkles , RotateCcw } from 'lucide-react';
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

export default function ReviewManager({ addReward }) {
  const [flashcardMistakes, setFlashcardMistakes] = useState([]);
  const [quizMistakes, setQuizMistakes] = useState([]);
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' or 'flashcard'
  
  // AI Modal States
  const [reviewQuestion, setReviewQuestion] = useState(null);
  const [reviewAnswer, setReviewAnswer] = useState('');
  const [reviewFeedback, setReviewFeedback] = useState(null);
  

  useEffect(() => {
    // Load flashcard mistakes
    const savedFc = localStorage.getItem('studyflow_vocab');
    if (savedFc) {
      const parsed = JSON.parse(savedFc);
      const withMistakes = parsed.filter(item => item.mistakes > 0 || item.eFactor < 2.5);
      setFlashcardMistakes(withMistakes.sort((a, b) => (b.mistakes || 0) - (a.mistakes || 0)));
    }

    // Load quiz mistakes
    const savedQuiz = localStorage.getItem('study_app_mistakes');
    if (savedQuiz) {
      setQuizMistakes(JSON.parse(savedQuiz));
    }
  }, []);

  const removeQuizMistake = (id) => {
    const updated = quizMistakes.filter(x => x.id !== id);
    setQuizMistakes(updated);
    localStorage.setItem('study_app_mistakes', JSON.stringify(updated));
  };

  

  
  const generateDistractors = (correctAnswer) => {
    let allFlashcards = [];
    try {
      allFlashcards = JSON.parse(localStorage.getItem('studyflow_vocab') || '[]');
    } catch(e) {}
    let pool = allFlashcards.map(c => c.answer).filter(a => a && a.trim() !== '' && a !== correctAnswer);
    let options = [correctAnswer];
    for (let i = 0; i < 3; i++) {
      if (pool.length > 0) {
        const randIdx = Math.floor(Math.random() * pool.length);
        options.push(pool[randIdx]);
        pool.splice(randIdx, 1);
      } else {
        options.push('Phương án nhiễu ' + (i + 1));
      }
    }
    return options.sort(() => Math.random() - 0.5);
  };

  const retryOriginalQuestion = (mistake) => {
    let options = mistake.options || [];
    if (options.length < 2) {
      options = generateDistractors(mistake.correctAnswer || mistake.correct);
    }
    setReviewQuestion({
      ...mistake,
      text: mistake.question || mistake.text,
      type: 'mcq',
      options: options,
      correct: mistake.correctAnswer || mistake.correct,
      explanation: mistake.explanation || 'Hãy đọc kĩ lại bài nhé.',
      isAi: false,
      originalMistake: mistake,
      isFlashcard: false
    });
    setReviewAnswer('');
    setReviewFeedback(null);
  };

  const retryFlashcard = (card) => {
    setReviewQuestion({
      ...card,
      text: card.question,
      type: 'mcq',
      options: generateDistractors(card.answer),
      correct: card.answer,
      explanation: 'Đây là nội dung ghi nhớ.',
      isAi: false,
      originalMistake: card,
      isFlashcard: true
    });
    setReviewAnswer('');
    setReviewFeedback(null);
  };

  const handleReviewSubmit = () => {
    if (!reviewQuestion || !reviewAnswer) return;
    
    let isCorrect = (reviewQuestion.type === 'mcq' || reviewQuestion.type === 'true_false') 
      ? reviewAnswer === reviewQuestion.correct 
      : reviewAnswer.trim().toLowerCase() === reviewQuestion.correct.toLowerCase();

    if (isCorrect) {
      setReviewFeedback({ type: 'success', text: 'Chính xác! Lỗi sai này đã được xóa khỏi danh sách. +5 XP' });
      if (addReward) addReward(5, 0);

      // Remove from lists
      if (reviewQuestion.isFlashcard) {
        const allVocab = JSON.parse(localStorage.getItem('studyflow_vocab') || '[]');
        const updatedVocab = allVocab.map(v => v.id === reviewQuestion.originalMistake.id ? { ...v, mistakes: 0, eFactor: 2.5 } : v);
        localStorage.setItem('studyflow_vocab', JSON.stringify(updatedVocab));
        setFlashcardMistakes(prev => prev.filter(c => c.id !== reviewQuestion.originalMistake.id));
      } else {
        const updated = quizMistakes.filter(m => m.id !== reviewQuestion.originalMistake.id);
        setQuizMistakes(updated);
        localStorage.setItem('study_app_mistakes', JSON.stringify(updated));
      }
    } else {
      setReviewFeedback({ type: 'error', text: 'Sai rồi. Xem lại phần giải thích. Câu này sẽ bị bỏ qua và chuyển xuống cuối danh sách!' });
      
      // Move to end of list
      if (reviewQuestion.isFlashcard) {
        setFlashcardMistakes(prev => {
          const remaining = prev.filter(c => c.id !== reviewQuestion.originalMistake.id);
          return [...remaining, reviewQuestion.originalMistake];
        });
      } else {
        const remaining = quizMistakes.filter(m => m.id !== reviewQuestion.originalMistake.id);
        const updated = [...remaining, reviewQuestion.originalMistake];
        setQuizMistakes(updated);
        localStorage.setItem('study_app_mistakes', JSON.stringify(updated));
      }
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Ôn tập lỗi sai</h1>
          <p className="text-gray-500">Xem lại các thẻ Flashcard và bài kiểm tra bạn đã làm sai để củng cố kiến thức.</p>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200 pb-4">
        <button 
          onClick={() => setActiveTab('quiz')}
          className={`font-bold pb-2 transition-colors flex items-center gap-2 ${activeTab === 'quiz' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-gray-600'}`}
        >
          Lỗi sai bài kiểm tra
          {quizMistakes.length > 0 && <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">{quizMistakes.length}</span>}
        </button>
        <button 
          onClick={() => setActiveTab('flashcard')}
          className={`font-bold pb-2 transition-colors flex items-center gap-2 ${activeTab === 'flashcard' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-gray-600'}`}
        >
          Flashcard quên nhiều
          {flashcardMistakes.length > 0 && <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">{flashcardMistakes.length}</span>}
        </button>
      </div>

      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {quizMistakes.length === 0 ? (
            <div className="text-center py-12 text-gray-400 font-medium bg-surface rounded-3xl border border-gray-100 shadow-sm">
              <CheckCircle2 size={64} className="mx-auto mb-4 text-green-400 opacity-80" />
              Bạn chưa có lỗi sai nào trong phần bài kiểm tra. Chúc mừng!
            </div>
          ) : (
            quizMistakes.map(m => (
              <div key={m.id} className="bg-surface border border-red-100 rounded-3xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`text-xs font-bold border px-2 py-1 rounded-md ${getSubjectStyle(m.subject)}`}>{m.subject}</span>
                    <span className="text-xs text-gray-400 ml-2">{m.quizTitle}</span>
                  </div>
                  <button onClick={() => removeQuizMistake(m.id)} className="text-red-400 hover:text-red-600 bg-red-50 p-1.5 rounded-full transition" title="Xóa khỏi danh sách">
                    <X size={20} />
                  </button>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">{m.question}</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="text-xs font-bold text-red-500 uppercase mb-1">Bạn đã chọn</p>
                    <p className="text-red-800 font-medium line-through">{m.userAnswer || '(Bỏ trống)'}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="text-xs font-bold text-green-600 uppercase mb-1">Đáp án đúng</p>
                    <p className="text-green-800 font-bold">{m.correctAnswer}</p>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 mb-4">
                  <p className="text-xs font-bold text-orange-600 uppercase mb-1 flex items-center gap-1"><Lightbulb size={14}/> Giải thích</p>
                  <p className="text-orange-900 font-medium text-sm">{m.explanation}</p>
                </div>

                <div className="flex flex-wrap justify-end gap-3 mt-4 pt-4 border-t border-gray-100">
                    <button 
                      onClick={() => retryOriginalQuestion(m)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition shadow-sm"
                    >
                      <RotateCcw size={18} /> Làm lại câu này
                    </button>
                    
                  </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'flashcard' && (
        <div className="space-y-6">
          {flashcardMistakes.length === 0 ? (
            <div className="text-center py-12 text-gray-400 font-medium bg-surface rounded-3xl border border-gray-100 shadow-sm">
              <CheckCircle2 size={64} className="mx-auto mb-4 text-green-400 opacity-80" />
              Không có flashcard nào bạn thường xuyên sai. Khá lắm!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {flashcardMistakes.map(card => (
                <div key={card.id} className="bg-surface rounded-3xl p-6 shadow-sm border border-red-100 relative overflow-hidden group hover:-translate-y-1 transition transform">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-red-400"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      <span className={`text-xs font-bold border px-2 py-1 rounded ${getSubjectStyle(card.subject)}`}>{card.subject}</span>
                      <span className="text-xs font-bold text-gray-600 bg-gray-100 border border-gray-200 px-2 py-1 rounded">{card.grade}</span>
                    </div>
                    <div className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded flex items-center gap-1">
                      <X size={12} /> Sai {card.mistakes || 'nhiều'} lần
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">Câu hỏi:</p>
                  <h3 className="font-bold text-gray-800 mb-4">{card.question}</h3>
                  <div className="p-3 bg-sky-50 rounded-xl border border-sky-100">
                    <p className="text-xs font-bold text-sky-600 mb-1">ĐÁP ÁN ĐÚNG</p>
                    <p className="font-medium text-sky-900">{card.answer}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-red-100/50 flex justify-end">
                      <button 
                        onClick={() => retryFlashcard(card)}
                        className="flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-700 font-bold rounded-xl hover:bg-sky-100 transition"
                      >
                        <RotateCcw size={16} /> Ôn lại thẻ này
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal for Review Question generated by AI */}
      {reviewQuestion && (
        <div className="fixed inset-0 bg-slate-900/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white flex justify-between items-center">
              <h2 className="text-2xl font-bold flex items-center gap-2">{reviewQuestion.isAi ? <><Sparkles /> Câu hỏi luyện tập AI</> : <><RotateCcw /> Làm lại câu hỏi</>}</h2>
              <button onClick={() => setReviewQuestion(null)} className="hover:bg-white/20 p-2 rounded-full transition"><X /></button>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{reviewQuestion.text}</h3>
              
              {(reviewQuestion.type === 'mcq' || reviewQuestion.type === 'true_false') ? (
                <div className="space-y-3 mb-6">
                  {reviewQuestion.options.map(opt => (
                    <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                      reviewAnswer === opt ? 'border-indigo-500 bg-indigo-50' : 'border-gray-100 hover:border-gray-200'
                    }`}>
                      <input 
                        type="radio" 
                        name="ai-review" 
                        value={opt} 
                        checked={reviewAnswer === opt} 
                        onChange={(e) => setReviewAnswer(e.target.value)}
                        disabled={reviewFeedback !== null}
                        className="w-5 h-5 text-indigo-500 border-gray-300 focus:ring-indigo-500"
                      />
                      <span className="font-medium text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="mb-6">
                  <input 
                    type="text"
                    value={reviewAnswer}
                    onChange={(e) => setReviewAnswer(e.target.value)}
                    disabled={reviewFeedback !== null}
                    placeholder="Nhập đáp án của bạn..."
                    className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-indigo-500 outline-none transition"
                  />
                </div>
              )}

              {reviewFeedback && (
                <div className={`p-4 rounded-xl mb-6 font-bold ${reviewFeedback.type === 'success' ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                  {reviewFeedback.text}
                  {reviewFeedback.type === 'error' && (
                    <p className="text-sm font-medium mt-2 text-gray-700">Gợi ý: {reviewQuestion.explanation}</p>
                  )}
                </div>
              )}

              <div className="flex justify-end gap-3">
                <button onClick={() => setReviewQuestion(null)} className="px-6 py-3 font-bold text-gray-500 hover:bg-gray-100 rounded-xl transition">
                  Đóng
                </button>
                {!reviewFeedback && (
                  <button 
                    onClick={handleReviewSubmit}
                    disabled={!reviewAnswer}
                    className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 disabled:opacity-50 transition"
                  >
                    Kiểm tra
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
