import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { 
  CheckCircle2, X, Lightbulb, Sparkles, RotateCcw, 
  Moon, CalendarCheck, Trophy, Award, ArrowRight, 
  Check, Filter, BookOpenCheck, AlertCircle, HelpCircle,
  Brain, Zap, Gem
} from 'lucide-react';
import { QUIZ_DATA } from './data/quizData';
import { INITIAL_TOWN } from './data/townData';
import { INITIAL_FLASHCARDS } from './data/flashcardData';

// =========================================================================
// TẠO BẢNG TRA CỨU CÂU HỎI GỐC ĐỂ ĐỒNG BỘ NỘI DUNG VÀ PHƯƠNG ÁN CHUẨN XÁC
// =========================================================================
const QUESTION_MAP = {};
const SUBJECT_QUESTIONS = {};

// Thu nạp dữ liệu từ QUIZ_DATA
if (Array.isArray(QUIZ_DATA)) {
  QUIZ_DATA.forEach(quiz => {
    if (quiz && Array.isArray(quiz.questions)) {
      quiz.questions.forEach(q => {
        const fullQ = { 
          ...q, 
          subject: q.subject || quiz.subject || 'Toán', 
          quizTitle: quiz.title || `${quiz.subject} - Ôn tập` 
        };
        QUESTION_MAP[q.id] = fullQ;
        const subj = fullQ.subject;
        if (!SUBJECT_QUESTIONS[subj]) SUBJECT_QUESTIONS[subj] = [];
        SUBJECT_QUESTIONS[subj].push(fullQ);
      });
    }
  });
}

// Thu nạp dữ liệu từ INITIAL_TOWN
if (Array.isArray(INITIAL_TOWN)) {
  INITIAL_TOWN.forEach(house => {
    if (house && Array.isArray(house.rooms)) {
      house.rooms.forEach(room => {
        if (room && Array.isArray(room.questions)) {
          room.questions.forEach(q => {
            const fullQ = { 
              ...q, 
              subject: q.subject || room.subject || 'Toán', 
              quizTitle: room.title || `${room.subject} - Ôn tập` 
            };
            QUESTION_MAP[q.id] = fullQ;
            const subj = fullQ.subject;
            if (!SUBJECT_QUESTIONS[subj]) SUBJECT_QUESTIONS[subj] = [];
            SUBJECT_QUESTIONS[subj].push(fullQ);
          });
        }
      });
    }
  });
}

// =========================================================================
// CHUẨN HÓA DỮ LIỆU LỖI SAI (ĐẢM BẢO OPTIONS PHÙ HỢP 100% VỚI CÂU HỎI)
// =========================================================================
const normalizeMistake = (m) => {
  if (!m) return null;
  const original = QUESTION_MAP[m.id];
  const subject = m.subject || (original && original.subject) || 'Toán';
  const text = m.text || m.question || (original && (original.text || original.question)) || 'Nội dung câu hỏi';
  const correct = m.correctAnswer || m.correct || (original && original.correct) || '';
  
  // Xác định loại câu hỏi chuẩn xác
  let type = m.type || (original && original.type);
  if (!type) {
    if (correct === 'Đúng' || correct === 'Sai') {
      type = 'true_false';
    } else {
      type = 'mcq';
    }
  }

  // Đảm bảo phương án trả lời phù hợp với nội dung câu hỏi
  let options = [];
  if (type === 'true_false' || correct === 'Đúng' || correct === 'Sai') {
    // Câu hỏi Đúng/Sai thì chỉ có 2 phương án: Đúng hoặc Sai
    options = ['Đúng', 'Sai'];
  } else if (m.options && Array.isArray(m.options) && m.options.length >= 2) {
    options = m.options;
  } else if (original && original.options && Array.isArray(original.options) && original.options.length >= 2) {
    options = original.options;
  } else {
    // Nếu câu hỏi trắc nghiệm bị thiếu options, sinh phương án nhiễu cùng môn học
    const pool = (SUBJECT_QUESTIONS[subject] || [])
      .flatMap(q => (q.options || []).concat([q.correct]))
      .filter(val => val && typeof val === 'string' && val.trim() !== '' && val !== correct);
    const uniquePool = [...new Set(pool)];
    const distractors = [];
    while (distractors.length < 3 && uniquePool.length > 0) {
      const randIdx = Math.floor(Math.random() * uniquePool.length);
      distractors.push(uniquePool[randIdx]);
      uniquePool.splice(randIdx, 1);
    }
    options = [correct, ...distractors].sort(() => Math.random() - 0.5);
  }

  const explanation = m.explanation || (original && original.explanation) || 'Hãy xem lại lý thuyết của bài học nhé.';
  const quizTitle = m.quizTitle || (original && original.quizTitle) || `${subject} - Ôn tập`;
  const userAnswer = m.userAnswer || m.selected || '(Bỏ trống)';

  return {
    ...m,
    id: m.id || `mistake_${Math.random()}`,
    subject,
    text,
    question: text,
    type,
    options,
    correct,
    correctAnswer: correct,
    explanation,
    quizTitle,
    userAnswer
  };
};

// Cấu hình màu sắc & icon môn học
const getSubjectStyle = (subject) => {
  switch (subject) {
    case 'Toán': 
      return { 
        badge: 'text-blue-700 bg-blue-100 border-blue-300',
        activeChip: 'bg-blue-600 text-white shadow-md shadow-blue-200 border-blue-600',
        chip: 'text-blue-700 bg-blue-50/80 hover:bg-blue-100 border-blue-200'
      };
    case 'Ngữ Văn':
    case 'Văn': 
      return { 
        badge: 'text-pink-700 bg-pink-100 border-pink-300',
        activeChip: 'bg-pink-600 text-white shadow-md shadow-pink-200 border-pink-600',
        chip: 'text-pink-700 bg-pink-50/80 hover:bg-pink-100 border-pink-200'
      };
    case 'Tiếng Anh':
    case 'Anh': 
      return { 
        badge: 'text-emerald-700 bg-emerald-100 border-emerald-300',
        activeChip: 'bg-emerald-600 text-white shadow-md shadow-emerald-200 border-emerald-600',
        chip: 'text-emerald-700 bg-emerald-50/80 hover:bg-emerald-100 border-emerald-200'
      };
    case 'KHTN':
    case 'Vật lý':
    case 'Hóa học':
    case 'Sinh học': 
      return { 
        badge: 'text-cyan-700 bg-cyan-100 border-cyan-300',
        activeChip: 'bg-cyan-600 text-white shadow-md shadow-cyan-200 border-cyan-600',
        chip: 'text-cyan-700 bg-cyan-50/80 hover:bg-cyan-100 border-cyan-200'
      };
    case 'Lịch sử - Địa lí':
    case 'Sử':
    case 'Địa': 
      return { 
        badge: 'text-amber-700 bg-amber-100 border-amber-300',
        activeChip: 'bg-amber-600 text-white shadow-md shadow-amber-200 border-amber-600',
        chip: 'text-amber-700 bg-amber-50/80 hover:bg-amber-100 border-amber-200'
      };
    case 'GDCD': 
      return { 
        badge: 'text-purple-700 bg-purple-100 border-purple-300',
        activeChip: 'bg-purple-600 text-white shadow-md shadow-purple-200 border-purple-600',
        chip: 'text-purple-700 bg-purple-50/80 hover:bg-purple-100 border-purple-200'
      };
    case 'Tin học': 
      return { 
        badge: 'text-indigo-700 bg-indigo-100 border-indigo-300',
        activeChip: 'bg-indigo-600 text-white shadow-md shadow-indigo-200 border-indigo-600',
        chip: 'text-indigo-700 bg-indigo-50/80 hover:bg-indigo-100 border-indigo-200'
      };
    case 'Công nghệ': 
      return { 
        badge: 'text-teal-700 bg-teal-100 border-teal-300',
        activeChip: 'bg-teal-600 text-white shadow-md shadow-teal-200 border-teal-600',
        chip: 'text-teal-700 bg-teal-50/80 hover:bg-teal-100 border-teal-200'
      };
    default: 
      return { 
        badge: 'text-slate-700 bg-slate-100 border-slate-300',
        activeChip: 'bg-slate-700 text-white shadow-md border-slate-700',
        chip: 'text-slate-700 bg-slate-50 hover:bg-slate-100 border-slate-200'
      };
  }
};

export default function ReviewManager({ addReward }) {
  const [flashcardMistakes, setFlashcardMistakes] = useState([]);
  const [quizMistakes, setQuizMistakes] = useState([]);
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' | 'flashcard'
  
  // Phân loại theo môn học
  const [selectedSubject, setSelectedSubject] = useState('all');

  // Chế độ Bài Kiểm Tra Cuối Ngày (Daily Review Test)
  const [dailyTest, setDailyTest] = useState(null);
  
  // Modal làm lại 1 câu hỏi đơn lẻ
  const [reviewQuestion, setReviewQuestion] = useState(null);
  const [reviewAnswer, setReviewAnswer] = useState('');
  const [reviewFeedback, setReviewFeedback] = useState(null);

  // Load danh sách lỗi sai từ localStorage
  useEffect(() => {
    // Flashcard mistakes
    try {
      const savedFc = localStorage.getItem('studyflow_vocab');
      if (savedFc) {
        const parsed = JSON.parse(savedFc);
        const withMistakes = parsed.filter(item => item.mistakes > 0 || item.eFactor < 2.5);
        setFlashcardMistakes(withMistakes.sort((a, b) => (b.mistakes || 0) - (a.mistakes || 0)));
      }
    } catch (e) {
      console.error(e);
    }

    // Quiz mistakes
    try {
      const savedQuiz = localStorage.getItem('study_app_mistakes');
      if (savedQuiz) {
        const parsed = JSON.parse(savedQuiz);
        const normalized = parsed.map(normalizeMistake).filter(Boolean);
        setQuizMistakes(normalized);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Xóa câu sai khỏi danh sách
  const removeQuizMistake = (id) => {
    const updated = quizMistakes.filter(x => x.id !== id);
    setQuizMistakes(updated);
    try {
      localStorage.setItem('study_app_mistakes', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Danh sách các môn học có câu sai
  const availableSubjects = useMemo(() => {
    const list = activeTab === 'quiz' 
      ? quizMistakes.map(m => m.subject) 
      : flashcardMistakes.map(m => m.subject);
    const unique = [...new Set(list.filter(Boolean))];
    return ['all', ...unique];
  }, [activeTab, quizMistakes, flashcardMistakes]);

  // Đếm số lượng câu sai theo từng môn
  const getSubjectCount = (subj) => {
    if (activeTab === 'quiz') {
      if (subj === 'all') return quizMistakes.length;
      return quizMistakes.filter(m => m.subject === subj).length;
    } else {
      if (subj === 'all') return flashcardMistakes.length;
      return flashcardMistakes.filter(m => m.subject === subj).length;
    }
  };

  // Lọc danh sách câu sai theo môn đã chọn
  const filteredQuizMistakes = useMemo(() => {
    if (selectedSubject === 'all') return quizMistakes;
    return quizMistakes.filter(m => m.subject === selectedSubject);
  }, [quizMistakes, selectedSubject]);

  const filteredFlashcardMistakes = useMemo(() => {
    if (selectedSubject === 'all') return flashcardMistakes;
    return flashcardMistakes.filter(m => m.subject === selectedSubject);
  }, [flashcardMistakes, selectedSubject]);

  // Kiểm tra ngày hôm nay đã làm bài kiểm tra cuối ngày cho môn này chưa
  const todayStr = new Date().toISOString().split('T')[0];
  const isDailyTestCompletedToday = useMemo(() => {
    try {
      return localStorage.getItem(`studyflow_daily_review_${todayStr}_${selectedSubject}`) === 'true';
    } catch {
      return false;
    }
  }, [todayStr, selectedSubject]);

  // =========================================================================
  // BẮT ĐẦU BÀI KIỂM TRA CUỐI NGÀY ÔN TẬP LỖI SAI
  // =========================================================================
  const startDailyTest = () => {
    if (filteredQuizMistakes.length === 0) return;

    // Lấy danh sách câu hỏi kiểm tra (tối đa 10 câu hoặc toàn bộ câu sai của môn đó)
    const questionsToTest = [...filteredQuizMistakes]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    setDailyTest({
      subject: selectedSubject === 'all' ? 'Tổng Hợp Tất Cả Các Môn' : selectedSubject,
      questions: questionsToTest,
      currentIndex: 0,
      userAnswer: '',
      feedback: null,
      score: 0,
      correctedIds: [],
      status: 'testing' // 'testing' | 'completed'
    });
  };

  // Nộp câu trả lời trong Bài kiểm tra cuối ngày
  const handleDailyTestSubmit = () => {
    if (!dailyTest || !dailyTest.userAnswer) return;

    const currentQ = dailyTest.questions[dailyTest.currentIndex];
    let isCorrect = false;

    if (currentQ.type === 'mcq' || currentQ.type === 'true_false') {
      isCorrect = dailyTest.userAnswer.trim().toLowerCase() === currentQ.correct.trim().toLowerCase();
    } else {
      isCorrect = dailyTest.userAnswer.trim().toLowerCase() === currentQ.correct.trim().toLowerCase();
    }

    if (isCorrect) {
      if (addReward) addReward(10, 1);
      setDailyTest(prev => ({
        ...prev,
        score: prev.score + 1,
        correctedIds: [...prev.correctedIds, currentQ.id],
        feedback: {
          isCorrect: true,
          text: '🎉 Xuất sắc! Bạn đã khắc phục và ghi nhớ lỗi sai này thành công (+10 XP, +1 💎)!'
        }
      }));
    } else {
      setDailyTest(prev => ({
        ...prev,
        feedback: {
          isCorrect: false,
          text: `Chưa đúng rồi! Đáp án chính xác là: "${currentQ.correct}"`
        }
      }));
    }
  };

  // Chuyển sang câu hỏi tiếp theo trong Bài kiểm tra cuối ngày
  const handleDailyTestNext = () => {
    if (!dailyTest) return;

    if (dailyTest.currentIndex < dailyTest.questions.length - 1) {
      setDailyTest(prev => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        userAnswer: '',
        feedback: null
      }));
    } else {
      // Đã hoàn thành toàn bộ bài kiểm tra cuối ngày
      const updatedQuizMistakes = quizMistakes.filter(m => !dailyTest.correctedIds.includes(m.id));
      setQuizMistakes(updatedQuizMistakes);
      try {
        localStorage.setItem('study_app_mistakes', JSON.stringify(updatedQuizMistakes));
        localStorage.setItem(`studyflow_daily_review_${todayStr}_${selectedSubject}`, 'true');
      } catch (e) {
        console.error(e);
      }

      setDailyTest(prev => ({
        ...prev,
        status: 'completed'
      }));
    }
  };

  // =========================================================================
  // XỬ LÝ LÀM LẠI CÂU HỎI ĐƠN LẺ
  // =========================================================================
  const retryOriginalQuestion = (mistake) => {
    const normalized = normalizeMistake(mistake);
    setReviewQuestion({
      ...normalized,
      isFlashcard: false
    });
    setReviewAnswer('');
    setReviewFeedback(null);
  };

  const retryFlashcard = (card) => {
    setReviewQuestion({
      ...card,
      text: card.question,
      question: card.question,
      type: 'mcq',
      options: [card.answer, 'Phương án khác A', 'Phương án khác B', 'Phương án khác C'].sort(() => Math.random() - 0.5),
      correct: card.answer,
      explanation: 'Đây là nội dung kiến thức cốt lõi cần ghi nhớ của Flashcard.',
      isFlashcard: true
    });
    setReviewAnswer('');
    setReviewFeedback(null);
  };

  const handleReviewSubmit = () => {
    if (!reviewQuestion || !reviewAnswer) return;
    
    let isCorrect = reviewAnswer.trim().toLowerCase() === reviewQuestion.correct.trim().toLowerCase();

    if (isCorrect) {
      setReviewFeedback({ type: 'success', text: 'Chính xác! Lỗi sai này đã được xóa khỏi danh sách. +5 XP' });
      if (addReward) addReward(5, 0);

      if (reviewQuestion.isFlashcard) {
        try {
          const allVocab = JSON.parse(localStorage.getItem('studyflow_vocab') || '[]');
          const updatedVocab = allVocab.map(v => v.id === reviewQuestion.id ? { ...v, mistakes: 0, eFactor: 2.5 } : v);
          localStorage.setItem('studyflow_vocab', JSON.stringify(updatedVocab));
          setFlashcardMistakes(prev => prev.filter(c => c.id !== reviewQuestion.id));
        } catch (e) {
          console.error(e);
        }
      } else {
        removeQuizMistake(reviewQuestion.id);
      }
    } else {
      setReviewFeedback({ 
        type: 'error', 
        text: `Sai rồi! Đáp án đúng là: "${reviewQuestion.correct}". Hãy đọc kỹ giải thích bên dưới.` 
      });
    }
  };

  // =========================================================================
  // MÀN HÌNH BÀI KIỂM TRA CUỐI NGÀY ĐANG DIỄN RA
  // =========================================================================
  if (dailyTest) {
    if (dailyTest.status === 'completed') {
      return (
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white text-center max-w-3xl mx-auto animate-fade-in shadow-2xl border border-indigo-500/30">
          <div className="w-24 h-24 bg-gradient-to-tr from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(251,191,36,0.5)] border-4 border-white/20 animate-bounce">
            <Trophy size={48} className="text-slate-950" />
          </div>

          <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500/30 text-indigo-300 border border-indigo-400/40 mb-3 inline-block">
            Hoàn Thành Bài Kiểm Tra Cuối Ngày
          </span>

          <h2 className="text-3xl sm:text-4xl font-black mb-3">
            Xuất Sắc! Bạn Đã Ôn Tập Xong {dailyTest.subject}!
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Bạn đã nỗ lực củng cố lại các lỗ hổng kiến thức trước khi kết thúc một ngày học tập hiệu quả.
          </p>

          {/* Khối thống kê kết quả */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto bg-slate-800/80 rounded-2xl p-4 sm:p-6 mb-8 border border-slate-700">
            <div className="text-center">
              <span className="text-xs text-slate-400 font-bold block mb-1">Đã Khắc Phục</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                {dailyTest.score}/{dailyTest.questions.length}
              </span>
            </div>
            <div className="text-center border-x border-slate-700">
              <span className="text-xs text-slate-400 font-bold block mb-1">Kinh Nghiệm</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-400 flex items-center justify-center gap-1">
                <Zap size={22} className="fill-amber-400" /> +{dailyTest.score * 10}
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs text-slate-400 font-bold block mb-1">Kho Báu</span>
              <span className="text-2xl sm:text-3xl font-black text-purple-400 flex items-center justify-center gap-1">
                <Gem size={20} className="fill-purple-400" /> +{Math.floor(dailyTest.score / 2)}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setDailyTest(null)}
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg transition active:scale-95"
            >
              ← Quay Lại Danh Sách Ôn Tập
            </button>
            <button
              onClick={startDailyTest}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-2xl border border-slate-700 transition active:scale-95 flex items-center justify-center gap-2"
            >
              <RotateCcw size={18} /> Làm Lại Bài Này
            </button>
          </div>
        </div>
      );
    }

    const currentQ = dailyTest.questions[dailyTest.currentIndex];
    const isFeedbackShown = dailyTest.feedback !== null;

    return (
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto shadow-xl border border-slate-200 animate-fade-in space-y-6">
        
        {/* Header Bài Kiểm Tra */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Moon size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-slate-800 text-lg">Bài Kiểm Tra Cuối Ngày: {dailyTest.subject}</h3>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200">
                  Câu {dailyTest.currentIndex + 1}/{dailyTest.questions.length}
                </span>
              </div>
              <p className="text-xs text-slate-400">Ôn tập các câu bạn đã làm sai để ghi nhớ vững chắc</p>
            </div>
          </div>

          <button
            onClick={() => {
              if (window.confirm('Bạn có chắc muốn thoát bài kiểm tra cuối ngày này không?')) {
                setDailyTest(null);
              }
            }}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition"
            title="Thoát kiểm tra"
          >
            <X size={20} />
          </button>
        </div>

        {/* Thanh tiến độ */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full transition-all duration-300"
            style={{ width: `${((dailyTest.currentIndex + 1) / dailyTest.questions.length) * 100}%` }}
          />
        </div>

        {/* Thẻ câu hỏi */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-bold border px-2.5 py-1 rounded-md ${getSubjectStyle(currentQ.subject).badge}`}>
              {currentQ.subject}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {currentQ.quizTitle}
            </span>
          </div>

          <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed mb-6">
            {currentQ.text || currentQ.question}
          </h4>

          {/* Các lựa chọn trả lời phù hợp với câu hỏi */}
          {currentQ.type === 'true_false' ? (
            <div className="grid grid-cols-2 gap-4">
              {['Đúng', 'Sai'].map(opt => (
                <button
                  key={opt}
                  disabled={isFeedbackShown}
                  onClick={() => setDailyTest(prev => ({ ...prev, userAnswer: opt }))}
                  className={`py-4 px-6 rounded-2xl font-black text-lg transition-all border-2 flex items-center justify-center gap-2 cursor-pointer ${
                    dailyTest.userAnswer === opt 
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md transform scale-[1.02]' 
                      : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : currentQ.type === 'mcq' && Array.isArray(currentQ.options) && currentQ.options.length > 0 ? (
            <div className="space-y-3">
              {currentQ.options.map((opt, oIdx) => {
                const label = ['A', 'B', 'C', 'D'][oIdx] || String(oIdx + 1);
                const isSelected = dailyTest.userAnswer === opt;
                return (
                  <button
                    key={`${opt}-${oIdx}`}
                    disabled={isFeedbackShown}
                    onClick={() => setDailyTest(prev => ({ ...prev, userAnswer: opt }))}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-3 cursor-pointer ${
                      isSelected 
                        ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold shadow-sm' 
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 transition-colors ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {label}
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed">{opt}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div>
              <input
                type="text"
                disabled={isFeedbackShown}
                value={dailyTest.userAnswer}
                onChange={(e) => setDailyTest(prev => ({ ...prev, userAnswer: e.target.value }))}
                placeholder="Nhập câu trả lời chính xác của bạn..."
                className="w-full p-4 bg-white border-2 border-slate-200 focus:border-indigo-600 rounded-2xl text-slate-800 font-medium outline-none transition"
              />
            </div>
          )}
        </div>

        {/* Phản hồi & Giải thích sau khi nộp */}
        {dailyTest.feedback && (
          <div className={`p-4 rounded-2xl border animate-fade-in ${
            dailyTest.feedback.isCorrect 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}>
            <div className="flex items-center gap-2 font-black text-sm sm:text-base mb-1">
              {dailyTest.feedback.isCorrect ? <CheckCircle2 className="text-emerald-600" size={20} /> : <AlertCircle className="text-rose-600" size={20} />}
              <span>{dailyTest.feedback.text}</span>
            </div>
            {currentQ.explanation && (
              <div className="mt-2 text-xs sm:text-sm opacity-90 pl-7 leading-relaxed bg-white/70 p-3 rounded-xl border border-black/5">
                <strong>💡 Giải thích chi tiết: </strong>
                {currentQ.explanation}
              </div>
            )}
          </div>
        )}

        {/* Nút hành động */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-xs font-bold text-slate-400">
            {isFeedbackShown ? (
              dailyTest.feedback.isCorrect ? (
                <span className="text-emerald-600 font-bold">✓ Câu này đã được gỡ khỏi danh sách lỗi sai!</span>
              ) : (
                <span className="text-rose-600 font-bold">Lần sau hãy chú ý câu này nhé!</span>
              )
            ) : (
              <span>Chọn đáp án và bấm "Kiểm Tra"</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {!isFeedbackShown ? (
              <button
                onClick={handleDailyTestSubmit}
                disabled={!dailyTest.userAnswer}
                className="px-7 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-2xl transition shadow-lg shadow-indigo-600/20 active:scale-95 cursor-pointer"
              >
                Kiểm Tra Đáp Án
              </button>
            ) : (
              <button
                onClick={handleDailyTestNext}
                className="px-7 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black rounded-2xl transition shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>{dailyTest.currentIndex < dailyTest.questions.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả Cuối Ngày'}</span>
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>

      </div>
    );
  }

  // =========================================================================
  // GIAO DIỆN CHÍNH: ÔN TẬP LỖI SAI & PHÂN LOẠI MÔN HỌC
  // =========================================================================
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      
      {/* Tiêu đề trang */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 mb-2">Ôn tập lỗi sai</h1>
          <p className="text-slate-500 text-sm">Xem lại các thẻ Flashcard và bài kiểm tra bạn đã làm sai để củng cố kiến thức.</p>
        </div>
      </header>

      {/* Tabs chính: Lỗi sai bài kiểm tra vs Flashcard */}
      <div className="flex gap-4 border-b border-slate-200 pb-3">
        <button 
          onClick={() => { setActiveTab('quiz'); setSelectedSubject('all'); }}
          className={`font-black pb-2 text-sm sm:text-base transition-colors flex items-center gap-2 cursor-pointer ${
            activeTab === 'quiz' ? 'text-red-500 border-b-2 border-red-500' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          Lỗi sai bài kiểm tra
          {quizMistakes.length > 0 && (
            <span className="bg-red-500 text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
              {quizMistakes.length}
            </span>
          )}
        </button>

        <button 
          onClick={() => { setActiveTab('flashcard'); setSelectedSubject('all'); }}
          className={`font-black pb-2 text-sm sm:text-base transition-colors flex items-center gap-2 cursor-pointer ${
            activeTab === 'flashcard' ? 'text-primary border-b-2 border-primary' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          Flashcard quên nhiều
          {flashcardMistakes.length > 0 && (
            <span className="bg-primary text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
              {flashcardMistakes.length}
            </span>
          )}
        </button>
      </div>

      {/* =====================================================================
          BANNER BÀI KIỂM TRA CUỐI NGÀY ÔN TẬP LỖI SAI (THEO TỪNG MÔN)
          ===================================================================== */}
      {activeTab === 'quiz' && quizMistakes.length > 0 && (
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-7 shadow-xl text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-black uppercase tracking-wider">
                <Moon size={14} className="text-yellow-400" />
                Kiểm Tra Cuối Ngày
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                Bài Kiểm Tra Cuối Ngày: {selectedSubject === 'all' ? 'Tổng Hợp Lỗi Sai' : `Môn ${selectedSubject}`}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Tự động tạo đề kiểm tra từ các câu bạn đã làm sai hôm nay để rà soát kiến thức trước khi đi ngủ. Làm đúng sẽ tự động xóa câu khỏi danh sách lỗi sai!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={startDailyTest}
                disabled={filteredQuizMistakes.length === 0}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-black text-sm rounded-2xl shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <BookOpenCheck size={18} />
                <span>Bắt Đầu Kiểm Tra ({filteredQuizMistakes.length} câu)</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          PHẦN PHÂN LOẠI MÔN HỌC (SUBJECT FILTER BAR)
          ===================================================================== */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
          <span className="flex items-center gap-1.5">
            <Filter size={15} className="text-indigo-500" /> Phân loại theo môn học:
          </span>
          <span>
            Đang hiển thị: <strong className="text-slate-800">{filteredQuizMistakes.length} câu</strong>
          </span>
        </div>

        {/* Thanh chip lọc môn */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {availableSubjects.map(subj => {
            const isSelected = selectedSubject === subj;
            const count = getSubjectCount(subj);
            const style = getSubjectStyle(subj);
            const label = subj === 'all' ? 'Tất cả môn' : subj;

            return (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`px-3.5 py-1.5 rounded-xl font-black text-xs transition-all whitespace-nowrap border flex items-center gap-1.5 cursor-pointer ${
                  isSelected 
                    ? (subj === 'all' ? 'bg-slate-800 text-white border-slate-800 shadow-sm' : style.activeChip) 
                    : (subj === 'all' ? 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200' : style.chip)
                }`}
              >
                <span>{label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          DANH SÁCH LỖI SAI BÀI KIỂM TRA
          ===================================================================== */}
      {activeTab === 'quiz' && (
        <div className="space-y-4">
          {filteredQuizMistakes.length === 0 ? (
            <div className="text-center py-14 text-slate-400 font-medium bg-white rounded-3xl border border-slate-200/80 shadow-sm">
              <CheckCircle2 size={56} className="mx-auto mb-3 text-emerald-400" />
              <h4 className="text-slate-700 font-bold text-lg mb-1">
                {selectedSubject === 'all' ? 'Không có lỗi sai nào!' : `Môn ${selectedSubject} không có lỗi sai nào!`}
              </h4>
              <p className="text-xs text-slate-400">Bạn đã nắm rất vững kiến thức các bài kiểm tra.</p>
            </div>
          ) : (
            filteredQuizMistakes.map(m => {
              const subjStyle = getSubjectStyle(m.subject);
              const questionContent = m.text || m.question || 'Câu hỏi bài kiểm tra';

              return (
                <div key={m.id} className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
                  
                  {/* Header thẻ: Tên môn & Nút xóa */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black border px-2.5 py-1 rounded-lg ${subjStyle.badge}`}>
                        {m.subject}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{m.quizTitle}</span>
                    </div>
                    <button 
                      onClick={() => removeQuizMistake(m.id)} 
                      className="text-slate-300 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-xl transition" 
                      title="Xóa khỏi danh sách lỗi sai"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* NỘI DUNG CÂU HỎI (HIỆN RÕ RÀNG, ĐẬM NÉT) */}
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4 leading-relaxed">
                    {questionContent}
                  </h4>
                  
                  {/* So sánh: Bạn đã chọn vs Đáp án đúng */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div className="bg-red-50/70 p-3.5 rounded-2xl border border-red-200/60">
                      <p className="text-[11px] font-black text-red-500 uppercase tracking-wider mb-1">BẠN ĐÃ CHỌN</p>
                      <p className="text-red-900 font-bold line-through text-sm sm:text-base">{m.userAnswer || '(Bỏ trống)'}</p>
                    </div>

                    <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-200/60">
                      <p className="text-[11px] font-black text-emerald-600 uppercase tracking-wider mb-1">ĐÁP ÁN ĐÚNG</p>
                      <p className="text-emerald-950 font-black text-sm sm:text-base">{m.correctAnswer || m.correct}</p>
                    </div>
                  </div>
                  
                  {/* Lời giải thích */}
                  {m.explanation && (
                    <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/70 mb-4 text-xs sm:text-sm text-amber-950">
                      <p className="text-[11px] font-black text-amber-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Lightbulb size={13} className="text-amber-500 fill-amber-400" /> GIẢI THÍCH
                      </p>
                      <p className="font-medium leading-relaxed">{m.explanation}</p>
                    </div>
                  )}

                  {/* Nút hành động Làm lại câu này */}
                  <div className="flex justify-end pt-3 border-t border-slate-100">
                    <button 
                      onClick={() => retryOriginalQuestion(m)}
                      className="flex items-center gap-2 px-5 py-2 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer"
                    >
                      <RotateCcw size={16} /> Làm lại câu này
                    </button>
                  </div>

                </div>
              );
            })
          )}
        </div>
      )}

      {/* =====================================================================
          DANH SÁCH FLASHCARD QUÊN NHIỀU
          ===================================================================== */}
      {activeTab === 'flashcard' && (
        <div className="space-y-4">
          {filteredFlashcardMistakes.length === 0 ? (
            <div className="text-center py-14 text-slate-400 font-medium bg-white rounded-3xl border border-slate-200 shadow-sm">
              <CheckCircle2 size={56} className="mx-auto mb-3 text-emerald-400" />
              Không có flashcard nào bạn thường xuyên sai. Khá lắm!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredFlashcardMistakes.map(card => {
                const subjStyle = getSubjectStyle(card.subject);
                return (
                  <div key={card.id} className="bg-white rounded-3xl p-5 shadow-sm border border-red-100 relative overflow-hidden group hover:shadow-md transition">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-red-400"></div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex gap-2">
                        <span className={`text-xs font-black border px-2 py-0.5 rounded-lg ${subjStyle.badge}`}>{card.subject}</span>
                        {card.grade && <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-lg">{card.grade}</span>}
                      </div>
                      <div className="text-xs font-black text-red-500 bg-red-50 px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <X size={12} /> Sai {card.mistakes || 'nhiều'} lần
                      </div>
                    </div>
                    
                    <p className="text-xs text-slate-400 font-bold mb-1">CÂU HỎI THẺ:</p>
                    <h4 className="font-bold text-slate-800 mb-3 text-sm sm:text-base">{card.question}</h4>
                    
                    <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 mb-4">
                      <p className="text-[10px] font-black text-sky-600 uppercase mb-0.5">ĐÁP ÁN ĐÚNG</p>
                      <p className="font-bold text-sky-950 text-xs sm:text-sm">{card.answer}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex justify-end">
                      <button 
                        onClick={() => retryFlashcard(card)}
                        className="flex items-center gap-1.5 px-4 py-1.5 bg-sky-50 text-sky-700 font-bold text-xs rounded-xl hover:bg-sky-100 transition cursor-pointer"
                      >
                        <RotateCcw size={14} /> Ôn lại thẻ này
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          MODAL LÀM LẠI CÂU HỎI ĐƠN LẺ
          ===================================================================== */}
      {reviewQuestion && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 bg-slate-900/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl border border-slate-200">
            
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <RotateCcw size={20} />
                <h3 className="text-lg font-black">Làm Lại Câu Hỏi</h3>
              </div>
              <button 
                onClick={() => setReviewQuestion(null)} 
                className="hover:bg-white/20 p-1.5 rounded-full transition"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <span className={`text-xs font-black border px-2.5 py-0.5 rounded-md mb-2 inline-block ${getSubjectStyle(reviewQuestion.subject).badge}`}>
                  {reviewQuestion.subject}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                  {reviewQuestion.text || reviewQuestion.question}
                </h4>
              </div>

              {/* Phương án trả lời chuẩn xác */}
              {reviewQuestion.type === 'true_false' ? (
                <div className="grid grid-cols-2 gap-3">
                  {['Đúng', 'Sai'].map(opt => (
                    <button
                      key={opt}
                      disabled={reviewFeedback !== null}
                      onClick={() => setReviewAnswer(opt)}
                      className={`py-3.5 px-4 rounded-xl font-black text-base transition border-2 cursor-pointer ${
                        reviewAnswer === opt 
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : reviewQuestion.type === 'mcq' && Array.isArray(reviewQuestion.options) && reviewQuestion.options.length > 0 ? (
                <div className="space-y-2.5">
                  {reviewQuestion.options.map((opt, idx) => {
                    const label = ['A', 'B', 'C', 'D'][idx] || String(idx + 1);
                    const isSelected = reviewAnswer === opt;
                    return (
                      <button
                        key={`${opt}-${idx}`}
                        disabled={reviewFeedback !== null}
                        onClick={() => setReviewAnswer(opt)}
                        className={`w-full text-left p-3.5 rounded-xl border-2 transition flex items-center gap-3 cursor-pointer ${
                          isSelected 
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-bold' 
                            : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs ${
                          isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {label}
                        </span>
                        <span className="text-sm">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <input 
                  type="text"
                  value={reviewAnswer}
                  onChange={(e) => setReviewAnswer(e.target.value)}
                  disabled={reviewFeedback !== null}
                  placeholder="Nhập đáp án của bạn..."
                  className="w-full p-3.5 border-2 border-slate-200 focus:border-indigo-600 rounded-xl outline-none font-medium text-slate-800"
                />
              )}

              {/* Phản hồi */}
              {reviewFeedback && (
                <div className={`p-4 rounded-xl font-bold text-sm leading-relaxed ${
                  reviewFeedback.type === 'success' 
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}>
                  <p>{reviewFeedback.text}</p>
                  {reviewQuestion.explanation && (
                    <p className="text-xs font-medium mt-1.5 opacity-90 text-slate-700">
                      💡 <strong>Giải thích:</strong> {reviewQuestion.explanation}
                    </p>
                  )}
                </div>
              )}

              {/* Nút nộp / đóng */}
              <div className="flex justify-end gap-3 pt-2">
                <button 
                  onClick={() => setReviewQuestion(null)} 
                  className="px-5 py-2.5 font-bold text-xs text-slate-500 hover:bg-slate-100 rounded-xl transition"
                >
                  {reviewFeedback ? 'Hoàn tất' : 'Đóng'}
                </button>
                {!reviewFeedback && (
                  <button 
                    onClick={handleReviewSubmit}
                    disabled={!reviewAnswer}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    Kiểm Tra
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      , document.body)}

    </div>
  );
}