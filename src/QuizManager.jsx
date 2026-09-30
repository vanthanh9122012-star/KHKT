import React, { useState, useEffect } from 'react';
import { Book, CheckCircle2, X, Trophy, Sparkles, Gem, AlertTriangle, ArrowRight, Lightbulb } from 'lucide-react';
import AIQuizGenerator from './AIQuizGenerator';
import { QUIZ_DATA as initialQuizData } from './data/quizData';
import { GoogleGenAI } from '@google/genai';

const MISTAKES_STORAGE_KEY = 'study_app_mistakes';

export default function QuizManager({ addReward }) {
  const [quizData, setQuizData] = useState(initialQuizData);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showAIModal, setShowAIModal] = useState(false);
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'mistakes'
  const [mistakes, setMistakes] = useState(() => JSON.parse(localStorage.getItem(MISTAKES_STORAGE_KEY)) || []);
  const [reviewQuestion, setReviewQuestion] = useState(null); // The AI generated review question
  const [reviewAnswer, setReviewAnswer] = useState('');
  const [reviewFeedback, setReviewFeedback] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    localStorage.setItem(MISTAKES_STORAGE_KEY, JSON.stringify(mistakes));
  }, [mistakes]);

  const handleAIGenerated = (newQuizData) => {
    setQuizData([newQuizData, ...quizData]);
    setShowAIModal(false);
    handleStart(newQuizData);
  };

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

  const filteredQuizzes = selectedSubject ? quizData.filter(q => q.subject === selectedSubject) : quizData;
  const filteredMistakes = selectedSubject ? mistakes.filter(m => m.subject === selectedSubject) : mistakes;

  const handleStart = (quiz) => {
    setActiveQuiz(quiz);
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
  };

  const handleAnswerChange = (qId, val) => {
    setUserAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    const newMistakes = [];

    activeQuiz.questions.forEach(q => {
      let isCorrect = false;
      const uAns = userAnswers[q.id];
      if (!uAns) return;

      if ((q.type === 'mcq' || q.type === 'true_false') && uAns === q.correct) {
        isCorrect = true;
      } else if (q.type === 'fill_blank' && uAns.trim().toLowerCase() === q.correct.toLowerCase()) {
        isCorrect = true;
      }

      if (isCorrect) {
        newScore += 1;
      } else if (q.type !== 'essay') {
        newMistakes.push({
          id: Date.now() + Math.random(),
          quizTitle: activeQuiz.title,
          subject: activeQuiz.subject,
          question: q.text,
          userAnswer: uAns,
          correctAnswer: q.correct,
          explanation: q.explanation || 'Hãy ôn tập kỹ hơn về phần kiến thức này.',
          type: q.type,
          options: q.options
        });
      }
    });

    setScore(newScore);
    setIsSubmitted(true);
    setMistakes(prev => [...newMistakes, ...prev]);

    const completedEssays = activeQuiz.questions.filter(q => q.type === 'essay' && userAnswers[q.id]?.length > 5).length;
    const xpEarned = newScore * 10 + completedEssays * 15;
    const rubyEarned = newScore * 10;
    if ((xpEarned > 0 || rubyEarned > 0) && addReward) {
      addReward(xpEarned, rubyEarned);
    }
  };

  const generateSimilarQuestion = async (mistake) => {
    const apiKey = document.getElementById('gemini_api_key_input')?.value;
    if (!apiKey) {
      alert("Vui lòng nhập API Key của Gemini trong Cài đặt chung (ở góc trái Flashcard) để sử dụng AI.");
      return;
    }
    setIsGenerating(true);
    setReviewQuestion(null);
    setReviewAnswer('');
    setReviewFeedback(null);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Bạn là một giáo viên dạy môn ${mistake.subject} cấp THCS.
Học sinh vừa làm sai câu hỏi sau: "${mistake.question}"
Đáp án học sinh chọn: "${mistake.userAnswer}"
Đáp án đúng: "${mistake.correctAnswer}"

Hãy tạo ra MỘT câu hỏi MỚI hoàn toàn nhưng có cùng form (cùng loại ${mistake.type}) và kiểm tra cùng một mảng kiến thức để học sinh làm lại.
Trả về định dạng JSON thuần túy (không bọc trong markdown) với cấu trúc sau:
{
  "text": "Câu hỏi mới...",
  "type": "${mistake.type}",
  "options": ["A", "B", "C", "D"] (nếu là trắc nghiệm hoặc true_false),
  "correct": "Đáp án đúng",
  "explanation": "Giải thích tại sao"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      const jsonStr = response.text.replace(/```json/g, '').replace(/```/g, '').trim();
      setReviewQuestion(JSON.parse(jsonStr));
    } catch (err) {
      alert("Lỗi tạo câu hỏi: " + err.message);
    }
    setIsGenerating(false);
  };

  const handleReviewSubmit = () => {
    if (!reviewQuestion || !reviewAnswer) return;
    
    let isCorrect = false;
    if ((reviewQuestion.type === 'mcq' || reviewQuestion.type === 'true_false') && reviewAnswer === reviewQuestion.correct) {
      isCorrect = true;
    } else if (reviewQuestion.type === 'fill_blank' && reviewAnswer.trim().toLowerCase() === reviewQuestion.correct.toLowerCase()) {
      isCorrect = true;
    }

    if (isCorrect) {
      setReviewFeedback({ type: 'success', text: 'Chính xác! Bạn đã hiểu bài rồi đó! +5 XP' });
      addReward(5, 0);
    } else {
      setReviewFeedback({ type: 'error', text: 'Sai rồi. Hãy xem lại phần giải thích nhé!' });
    }
  };

  if (activeQuiz) {
    return (
      <div className="space-y-6 animate-fade-in pb-10">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{activeQuiz.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className={`text-xs font-bold border px-2.5 py-1 rounded-md ${getSubjectStyle(activeQuiz.subject)}`}>{activeQuiz.subject}</span>
              <span className="text-sm font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded">{activeQuiz.questions.length} câu hỏi</span>
            </div>
          </div>
          <button onClick={() => setActiveQuiz(null)} className="text-gray-500 hover:text-gray-800 font-medium bg-gray-100 px-4 py-2 rounded-xl transition">
            Thoát
          </button>
        </header>

        <div className="space-y-8">
          {activeQuiz.questions.map((q, idx) => (
            <div key={q.id} className="bg-surface rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Câu {idx + 1}: {q.text}</h3>
              
              {(q.type === 'mcq' || q.type === 'true_false') ? (
                <div className="space-y-3">
                  {q.options.map(opt => (
                    <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                      userAnswers[q.id] === opt ? 'border-sky-500 bg-sky-50' : 'border-gray-100 hover:border-gray-200 bg-white'
                    } ${isSubmitted && opt === q.correct ? 'border-green-500 bg-green-50' : ''}`}>
                      <input 
                        type="radio" 
                        name={`q-${q.id}`} 
                        value={opt} 
                        checked={userAnswers[q.id] === opt} 
                        onChange={() => handleAnswerChange(q.id, opt)}
                        disabled={isSubmitted}
                        className="w-5 h-5 text-sky-500 border-gray-300 focus:ring-sky-500"
                      />
                      <span className={`font-medium ${isSubmitted && opt === q.correct ? 'text-green-700' : 'text-gray-700'}`}>{opt}</span>
                      {isSubmitted && opt === q.correct && <CheckCircle2 size={20} className="ml-auto text-green-500" />}
                      {isSubmitted && userAnswers[q.id] === opt && opt !== q.correct && <X size={20} className="ml-auto text-red-500" />}
                    </label>
                  ))}
                  {isSubmitted && userAnswers[q.id] !== q.correct && q.explanation && (
                    <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-xl text-orange-800 text-sm font-medium">
                      <Lightbulb size={16} className="inline mr-2" />
                      {q.explanation}
                    </div>
                  )}
                </div>
              ) : q.type === 'fill_blank' ? (
                <div className="space-y-3">
                  <div className="relative">
                    <input 
                      type="text"
                      value={userAnswers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      disabled={isSubmitted}
                      placeholder="Nhập đáp án của bạn..."
                      className={`w-full p-4 pr-12 border-2 rounded-xl focus:ring-0 outline-none transition text-gray-700 ${
                        !isSubmitted ? 'border-gray-100 focus:border-sky-500' :
                        userAnswers[q.id]?.trim().toLowerCase() === q.correct.toLowerCase() ? 'border-green-500 bg-green-50 text-green-800 font-medium' : 'border-red-500 bg-red-50 text-red-800 font-medium'
                      }`}
                    />
                    {isSubmitted && userAnswers[q.id]?.trim().toLowerCase() === q.correct.toLowerCase() && (
                      <CheckCircle2 size={24} className="absolute right-4 top-4 text-green-500" />
                    )}
                    {isSubmitted && userAnswers[q.id]?.trim().toLowerCase() !== q.correct.toLowerCase() && (
                      <X size={24} className="absolute right-4 top-4 text-red-500" />
                    )}
                  </div>
                  {isSubmitted && userAnswers[q.id]?.trim().toLowerCase() !== q.correct.toLowerCase() && (
                    <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 mt-2">
                      <p className="text-xs font-bold text-sky-600 mb-1 uppercase tracking-wider">Đáp án đúng</p>
                      <p className="text-gray-800 font-medium">{q.correct}</p>
                      {q.explanation && <p className="text-gray-600 mt-2 text-sm">{q.explanation}</p>}
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  <textarea 
                    value={userAnswers[q.id] || ''}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    disabled={isSubmitted}
                    placeholder="Nhập câu trả lời tự luận của bạn..."
                    className="w-full h-32 p-4 border-2 border-gray-100 rounded-xl focus:border-sky-500 focus:ring-0 outline-none transition resize-none text-gray-700"
                  ></textarea>
                  {isSubmitted && (
                    <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 mt-4">
                      <p className="text-xs font-bold text-sky-600 mb-1 uppercase tracking-wider">Đáp án / Gợi ý chuẩn</p>
                      <p className="text-gray-800 whitespace-pre-line">{q.correct}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {!isSubmitted ? (
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleSubmit}
              disabled={Object.keys(userAnswers).length === 0}
              className="px-10 py-4 bg-primary text-white font-bold rounded-full text-lg shadow-lg shadow-sky-200 hover:-translate-y-1 hover:bg-sky-600 transition-all disabled:opacity-50 disabled:hover:translate-y-0"
            >
              Nộp bài
            </button>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-8 text-white text-center mt-8 shadow-xl shadow-green-200 animate-fade-in">
            <Trophy size={48} className="mx-auto mb-4 text-green-100" />
            <h2 className="text-3xl font-bold mb-2">Đã nộp bài!</h2>
            <p className="text-green-50 text-lg mb-4">Bạn đã làm đúng {score} / {activeQuiz.questions.filter(q => q.type !== 'essay').length} câu trắc nghiệm & điền từ.</p>
            <div className="flex justify-center gap-4 mb-8">
              <div className="bg-white/20 px-4 py-2 rounded-xl flex items-center gap-2">
                <span className="font-bold">+{score * 10 + (activeQuiz.questions.filter(q => q.type === 'essay' && userAnswers[q.id]?.length > 5).length * 15)} XP</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-xl flex items-center gap-2">
                <Gem size={18} className="text-red-300" />
                <span className="font-bold">+{score * 10} Ruby</span>
              </div>
            </div>
            <button 
              onClick={() => setActiveQuiz(null)}
              className="px-8 py-3 bg-white text-green-600 font-bold rounded-full hover:bg-green-50 transition shadow-md"
            >
              Quay lại danh sách
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Luyện Thi & Trắc Nghiệm</h1>
          <p className="text-gray-500">Làm các bài test đa dạng để nhận XP hoặc ôn lại lỗi sai.</p>
        </div>
        <button 
          onClick={() => setShowAIModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-primary to-sky-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform flex items-center gap-2"
        >
          <Sparkles size={20} /> Tạo Đề bằng AI
        </button>
      </header>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200 pb-4">
        <button 
          onClick={() => setActiveTab('list')}
          className={`font-bold pb-2 transition-colors ${activeTab === 'list' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-gray-600'}`}
        >
          Danh sách Đề thi
        </button>
        <button 
          onClick={() => setActiveTab('mistakes')}
          className={`font-bold pb-2 transition-colors flex items-center gap-2 ${activeTab === 'mistakes' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-gray-600'}`}
        >
          Ôn tập lỗi sai 
          {mistakes.length > 0 && <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">{mistakes.length}</span>}
        </button>
      </div>

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
          {['Toán', 'Văn', 'Anh', 'Sử', 'Địa', 'Vật lý', 'Hóa học', 'Sinh học'].map(sub => (
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

      {activeTab === 'list' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredQuizzes.map((quiz) => (
            <div key={quiz.id} className="bg-surface p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition group">
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-bold border px-2 py-1 rounded-md ${getSubjectStyle(quiz.subject)}`}>{quiz.subject}</span>
                <span className="text-xs font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded">{quiz.questions.length} câu</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition">{quiz.title}</h3>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2">Làm bài tập đa dạng (Trắc nghiệm, Tự luận, Đúng/Sai...) để nhận XP.</p>
              
              <button 
                onClick={() => handleStart(quiz)}
                className="w-full py-3 bg-gray-50 hover:bg-sky-50 text-primary font-bold rounded-xl transition"
              >
                Bắt đầu làm bài
              </button>
            </div>
          ))}
          {filteredQuizzes.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-400 font-medium">
              Chưa có đề thi nào cho môn học này.
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {filteredMistakes.length === 0 ? (
            <div className="text-center py-12 text-gray-400 font-medium">
              Bạn chưa có lỗi sai nào ở môn này. Chúc mừng!
            </div>
          ) : (
            filteredMistakes.map(m => (
              <div key={m.id} className="bg-surface border border-red-100 rounded-3xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`text-xs font-bold border px-2 py-1 rounded-md ${getSubjectStyle(m.subject)}`}>{m.subject}</span>
                    <span className="text-xs text-gray-400 ml-2">{m.quizTitle}</span>
                  </div>
                  <button onClick={() => setMistakes(mistakes.filter(x => x.id !== m.id))} className="text-red-400 hover:text-red-600" title="Xóa khỏi danh sách">
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

                <div className="flex justify-end">
                  <button 
                    onClick={() => generateSimilarQuestion(m)}
                    disabled={isGenerating}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 font-bold rounded-lg hover:bg-indigo-100 transition"
                  >
                    <Sparkles size={16} /> Làm 1 câu tương tự bằng AI
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Modal for Review Question generated by AI */}
          {reviewQuestion && (
            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
              <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white flex justify-between items-center">
                  <h2 className="text-2xl font-bold flex items-center gap-2"><Sparkles /> Câu hỏi luyện tập AI</h2>
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
      )}

      {showAIModal && (
        <AIQuizGenerator 
          onClose={() => setShowAIModal(false)}
          onGenerated={handleAIGenerated}
        />
      )}
    </div>
  );
}
