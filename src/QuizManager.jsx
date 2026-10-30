import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  Book, CheckCircle2, X, AlertCircle, Award, Target, Sparkles, 
  Lightbulb, Lock, Unlock, Trash2, ArrowRight, RotateCcw, 
  BookOpenCheck, MessageSquare, Send, Brain, HelpCircle, 
  ChevronRight, Bookmark, Zap, GraduationCap, Check
} from 'lucide-react';
import { QUIZ_DATA } from './data/quizData';
import { getTheoryForQuiz } from './data/chapterTheoryData';
import { generateSimilarQuestionData } from './utils/similarQuestionGenerator';
import AIQuizGenerator from './AIQuizGenerator';
import { GoogleGenAI } from '@google/genai';

const getSubjectStyle = (subject) => {
  switch (subject) {
    case 'Toán': 
      return {
        badge: 'text-blue-700 bg-blue-50 border-blue-200',
        activeTab: 'bg-blue-600 text-white shadow-md shadow-blue-200',
        accent: 'from-blue-600 to-indigo-700'
      };
    case 'Ngữ Văn':
    case 'Văn': 
      return {
        badge: 'text-pink-700 bg-pink-50 border-pink-200',
        activeTab: 'bg-pink-600 text-white shadow-md shadow-pink-200',
        accent: 'from-pink-600 to-rose-700'
      };
    case 'Tiếng Anh':
    case 'Anh': 
      return {
        badge: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        activeTab: 'bg-emerald-600 text-white shadow-md shadow-emerald-200',
        accent: 'from-emerald-600 to-teal-700'
      };
    case 'KHTN':
    case 'Vật lý':
    case 'Hóa học':
    case 'Sinh học': 
      return {
        badge: 'text-cyan-700 bg-cyan-50 border-cyan-200',
        activeTab: 'bg-cyan-600 text-white shadow-md shadow-cyan-200',
        accent: 'from-cyan-600 to-blue-700'
      };
    case 'Lịch sử - Địa lí':
    case 'Sử':
    case 'Địa': 
      return {
        badge: 'text-amber-700 bg-amber-50 border-amber-200',
        activeTab: 'bg-amber-600 text-white shadow-md shadow-amber-200',
        accent: 'from-amber-600 to-orange-700'
      };
    case 'GDCD': 
      return {
        badge: 'text-purple-700 bg-purple-50 border-purple-200',
        activeTab: 'bg-purple-600 text-white shadow-md shadow-purple-200',
        accent: 'from-purple-600 to-indigo-700'
      };
    case 'Tin học': 
      return {
        badge: 'text-indigo-700 bg-indigo-50 border-indigo-200',
        activeTab: 'bg-indigo-600 text-white shadow-md shadow-indigo-200',
        accent: 'from-indigo-600 to-sky-700'
      };
    case 'Công nghệ': 
      return {
        badge: 'text-teal-700 bg-teal-50 border-teal-200',
        activeTab: 'bg-teal-600 text-white shadow-md shadow-teal-200',
        accent: 'from-teal-600 to-emerald-700'
      };
    default: 
      return {
        badge: 'text-slate-700 bg-slate-50 border-slate-200',
        activeTab: 'bg-slate-700 text-white shadow-md',
        accent: 'from-slate-700 to-slate-900'
      };
  }
};

export default function QuizManager({ addReward }) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  
  // Quản lý trạng thái xem: 'list' (Danh sách đề) | 'theory' (Trang Ôn Lý Thuyết Với AI) | 'testing' (Màn hình làm bài)
  const [viewMode, setViewMode] = useState('list');
  const [activeQuiz, setActiveQuiz] = useState(null);
  
  // Quản lý làm bài tập
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedQuestions, setSubmittedQuestions] = useState({});
  const [score, setScore] = useState(0);

  // Modal trợ lý AI khi học sinh gặp câu khó trong lúc làm bài
  const [questionHelpModal, setQuestionHelpModal] = useState(null);

  // Trợ lý AI trong Trang Ôn Lý Thuyết
  const [aiChatMessages, setAiChatMessages] = useState([]);
  const [aiChatInput, setAiChatInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const chatBottomRef = useRef(null);

  const [showAIModal, setShowAIModal] = useState(false);
  const [completedQuizzes, setCompletedQuizzes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('study_app_quiz_progress') || '[]');
    } catch {
      return [];
    }
  });

  const [customQuizzes, setCustomQuizzes] = useState([]);

  useEffect(() => {
    try {
      const savedCustom = localStorage.getItem('study_app_custom_quizzes');
      if (savedCustom) setCustomQuizzes(JSON.parse(savedCustom));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const allQuizzes = useMemo(() => [...customQuizzes, ...QUIZ_DATA], [customQuizzes]);
  const filteredQuizzes = useMemo(() => {
    return selectedSubject ? allQuizzes.filter(q => q.subject === selectedSubject) : allQuizzes;
  }, [allQuizzes, selectedSubject]);

  const markQuizCompleted = (quizId) => {
    setCompletedQuizzes(prev => {
      if (!prev.includes(quizId)) {
        const updated = [...prev, quizId];
        try {
          localStorage.setItem('study_app_quiz_progress', JSON.stringify(updated));
        } catch (e) {
          console.error(e);
        }
        return updated;
      }
      return prev;
    });
  };

  // Khởi động Trang Ôn Lý Thuyết với AI cho đề thi được chọn
  const handleStartTheory = (quiz) => {
    setActiveQuiz(quiz);
    setViewMode('theory');
    setUserAnswers({});
    setIsSubmitted(false);
    setSubmittedQuestions({});
    setScore(0);

    const theory = getTheoryForQuiz(quiz);
    // Khởi tạo lời chào của Trợ lý AI
    setAiChatMessages([
      {
        sender: 'ai',
        text: `Xin chào! Thầy/Cô AI đồng hành cùng bạn trong chuyên đề "${quiz.title}". Trước khi bắt đầu làm bài tập, hãy đọc kỹ tóm tắt lý thuyết cốt lõi bên dưới. Nếu có bất kỳ chỗ nào chưa hiểu, hãy hỏi tôi ngay nhé!`
      }
    ]);
  };

  // Chuyển từ Trang Lý Thuyết sang Màn hình làm bài tập
  const handleStartTesting = (quiz = activeQuiz) => {
    if (!quiz) return;
    setActiveQuiz(quiz);
    setViewMode('testing');
    setUserAnswers({});
    setIsSubmitted(false);
    setSubmittedQuestions({});
    setScore(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Xử lý gửi câu hỏi cho AI trong trang Ôn Lý Thuyết
  const handleSendAiQuestion = async (customPrompt = null) => {
    const questionText = customPrompt || aiChatInput;
    if (!questionText.trim() || aiLoading) return;

    const newMessages = [...aiChatMessages, { sender: 'user', text: questionText }];
    setAiChatMessages(newMessages);
    if (!customPrompt) setAiChatInput('');
    setAiLoading(true);

    try {
      const apiKey = localStorage.getItem('study_app_gemini_key');
      const theory = getTheoryForQuiz(activeQuiz);

      if (apiKey && apiKey.trim()) {
        const ai = new GoogleGenAI({ apiKey: apiKey.trim(), dangerouslyAllowBrowser: true });
        const prompt = `Bạn là một giáo viên sư phạm tận tâm và dễ hiểu của bộ sách Kết nối tri thức. 
Chuyên đề học sinh đang ôn tập: "${activeQuiz.title}" (Môn ${activeQuiz.subject}).
Tóm tắt lý thuyết chương:
${theory?.sections?.map(s => `${s.heading}:\n${s.content}`).join('\n\n')}

Học sinh hỏi: "${questionText}".
Hãy giải thích ngắn gọn, súc tích (dưới 150 từ), trực quan, dễ nhớ, có ví dụ cụ thể giúp học sinh hiểu ngay bản chất lý thuyết để chuẩn bị làm bài tập.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt
        });

        const reply = response.text || 'Thầy/Cô đã nhận được câu hỏi. Hãy nắm vững các công thức trọng tâm trước khi làm bài nhé!';
        setAiChatMessages(prev => [...prev, { sender: 'ai', text: reply }]);
      } else {
        // Phản hồi thông minh nếu chưa có API Key
        setTimeout(() => {
          let smartReply = `💡 Về câu hỏi "${questionText}": Trong chuyên đề ${activeQuiz.title}, điểm mấu chốt là bạn cần nhớ kỹ các quy tắc và thứ tự thực hiện. Hãy đọc phần tóm tắt lý thuyết ở cột bên trái và chú ý các bẫy thường gặp nhé!`;
          
          if (questionText.includes('ví dụ')) {
            smartReply = `📐 Ví dụ minh họa: Giả sử bài toán yêu cầu vận dụng kiến thức "${activeQuiz.title}". Bạn hãy phân tích giả thiết, gạch chân từ khóa và áp dụng đúng công thức cốt lõi đã nêu trong bài học.`;
          } else if (questionText.includes('bẫy') || questionText.includes('lỗi')) {
            smartReply = `⚠️ Bẫy phổ biến nhất: Học sinh thường nhầm lẫn giữa định nghĩa cơ bản và quy tắc dấu hoặc thứ tự tính toán. Hãy luôn kiểm tra lại kết quả trước khi chọn đáp án!`;
          }

          setAiChatMessages(prev => [...prev, { sender: 'ai', text: smartReply }]);
        }, 600);
      }
    } catch (error) {
      console.error(error);
      setAiChatMessages(prev => [
        ...prev, 
        { sender: 'ai', text: '💡 Để làm tốt dạng bài này, hãy nắm chắc định nghĩa cốt lõi và các công thức đóng khung trong bài học nhé!' }
      ]);
    } finally {
      setAiLoading(false);
      setTimeout(() => {
        chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Trợ giúp AI khi học sinh gặp câu khó: Sinh câu hỏi tương tự đổi số liệu và hướng dẫn giải chi tiết từng bước
  const handleOpenQuestionHelp = (q, idx) => {
    try {
      const similarData = generateSimilarQuestionData(q, activeQuiz?.subject, activeQuiz?.title);
      const theoryData = getTheoryForQuiz(activeQuiz);
      setQuestionHelpModal({
        questionIndex: idx + 1,
        question: q,
        similarData,
        theoryData,
        selectedOption: null,
        activeTab: 'similar', // 'similar' | 'theory' | 'ask_ai'
        isAiGenerating: false,
        aiQuestion: '',
        aiChatList: [],
        isAskingAi: false
      });
    } catch (e) {
      console.error("Error opening question help:", e);
    }
  };

  // Tạo thêm 1 bài tập tương tự khác bằng AI
  const handleGenerateAnotherAiExample = async () => {
    if (!questionHelpModal || questionHelpModal.isAiGenerating) return;
    setQuestionHelpModal(prev => ({ ...prev, isAiGenerating: true, selectedOption: null }));

    try {
      const apiKey = localStorage.getItem('study_app_gemini_key');
      const q = questionHelpModal.question;
      const qText = q.text || q.question || '';

      if (apiKey && apiKey.trim()) {
        const ai = new GoogleGenAI({ apiKey: apiKey.trim(), dangerouslyAllowBrowser: true });
        const prompt = `Bạn là giáo viên dạy giỏi môn ${activeQuiz?.subject || 'Toán'}.
Học sinh đang gặp khó khăn ở câu hỏi sau: "${qText}".
Hãy tạo:
1. Một câu hỏi tương tự CÙNG DẠNG nhưng THAY ĐỔI SỐ LIỆU và ngữ cảnh (dạng bài tập mẫu).
2. Hướng dẫn giải chi tiết từng bước cho câu hỏi tương tự đó (Bước 1, Bước 2, Bước 3, Kết luận).
3. Mẹo áp dụng để học sinh tự giải được câu hỏi gốc của mình mà không bị lộ đáp án.
Trích xuất JSON thuần túy theo mẫu sau:
{
  "topic": "Tên dạng bài",
  "similarQuestion": "Câu hỏi tương tự đã đổi số liệu...",
  "similarOptions": ["Phương án A", "Phương án B", "Phương án C", "Phương án D"],
  "similarCorrect": "Phương án đúng của câu tương tự",
  "steps": [
    { "stepNumber": 1, "title": "Bước 1: ...", "detail": "..." },
    { "stepNumber": 2, "title": "Bước 2: ...", "detail": "..." },
    { "stepNumber": 3, "title": "Bước 3: ...", "detail": "..." },
    { "stepNumber": 4, "title": "Kết luận", "detail": "..." }
  ],
  "tipForOriginal": "Mẹo áp dụng cho câu của bạn..."
}
Chỉ trả về JSON thuần túy, không có chữ thừa, không dùng markdown.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt
        });

        let jsonStr = response.text || '';
        jsonStr = jsonStr.replace(/\s*```json/g, '').replace(/```\s*$/g, '').trim();
        const parsed = JSON.parse(jsonStr);
        setQuestionHelpModal(prev => ({
          ...prev,
          similarData: {
            ...parsed,
            originalText: qText
          },
          isAiGenerating: false,
          selectedOption: null
        }));
      } else {
        setTimeout(() => {
          const freshData = generateSimilarQuestionData(q, activeQuiz?.subject, activeQuiz?.title, true);
          setQuestionHelpModal(prev => ({
            ...prev,
            similarData: freshData,
            isAiGenerating: false,
            selectedOption: null
          }));
        }, 350);
      }
    } catch (e) {
      console.error(e);
      setQuestionHelpModal(prev => ({ ...prev, isAiGenerating: false }));
    }
  };

  // Hỏi thêm gia sư AI về câu hỏi này mà không làm lộ đáp án bài thi
  const handleAskAiAboutQuestion = async (customPrompt) => {
    if (!questionHelpModal) return;
    const promptText = (customPrompt || questionHelpModal.aiQuestion || '').trim();
    if (!promptText || questionHelpModal.isAskingAi) return;

    const currentQ = questionHelpModal.question;
    const qText = currentQ.text || currentQ.question || '';

    setQuestionHelpModal(prev => ({
      ...prev,
      isAskingAi: true,
      aiChatList: [...(prev.aiChatList || []), { sender: 'user', text: promptText }],
      aiQuestion: ''
    }));

    try {
      const apiKey = localStorage.getItem('study_app_gemini_key');
      if (apiKey && apiKey.trim()) {
        const ai = new GoogleGenAI({ apiKey: apiKey.trim(), dangerouslyAllowBrowser: true });
        const systemPrompt = `Bạn là gia sư AI dạy giỏi môn ${activeQuiz?.subject || 'Toán'}.
Học sinh đang làm câu hỏi sau: "${qText}".
Học sinh hỏi: "${promptText}".
Hãy trả lời ngắn gọn (3-4 câu), thân thiện, sư phạm, giải thích bản chất tư duy hoặc công thức.
TUYỆT ĐỐI KHÔNG NÓI TRỰC TIẾP ĐÁP ÁN của câu hỏi bài thi để học sinh tự làm.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: systemPrompt
        });
        const reply = response.text || 'Thầy/Cô đã nhận được câu hỏi. Hãy áp dụng đúng công thức và loại trừ phương án sai nhé!';
        setQuestionHelpModal(prev => ({
          ...prev,
          isAskingAi: false,
          aiChatList: [...(prev.aiChatList || []), { sender: 'ai', text: reply }]
        }));
      } else {
        setTimeout(() => {
          let reply = `💡 Về câu hỏi "${promptText}": Để giải quyết tốt câu này, mấu chốt là em cần xác định đúng từ khóa chính trong câu hỏi, áp dụng công thức tương ứng và kiểm tra lại phép tính. Hãy đọc các bước giải mẫu ở tab "Bài tập tương tự" nhé!`;
          if (promptText.toLowerCase().includes('mẹo') || promptText.toLowerCase().includes('nhanh')) {
            reply = `✨ Mẹo hay: ${questionHelpModal.similarData?.tipForOriginal || 'Hãy dùng phương pháp loại trừ các phương án vô lý trước khi tính toán!'}`;
          } else if (promptText.toLowerCase().includes('công thức')) {
            reply = `📐 Công thức cốt lõi: Hãy nhớ lại định nghĩa cơ bản và quy tắc đã đóng khung trong bài học. Em có thể bấm tab "Tóm tắt lý thuyết" ở trên để xem lại đầy đủ nhé!`;
          }
          setQuestionHelpModal(prev => ({
            ...prev,
            isAskingAi: false,
            aiChatList: [...(prev.aiChatList || []), { sender: 'ai', text: reply }]
          }));
        }, 500);
      }
    } catch (e) {
      console.error(e);
      setQuestionHelpModal(prev => ({
        ...prev,
        isAskingAi: false,
        aiChatList: [...(prev.aiChatList || []), { sender: 'ai', text: '💡 Để làm câu này, hãy bám sát định nghĩa trong sách và thử áp dụng theo bài tập tương tự nhé!' }]
      }));
    }
  };

  // Xử lý nộp câu hỏi đơn lẻ
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
    if (q.type === 'mcq' || q.type === 'true_false') {
      isCorrect = val.trim().toLowerCase() === q.correct.toLowerCase();
    } else if (q.type === 'fill_blank' || q.type === 'short_answer') {
      isCorrect = val.trim().toLowerCase() === q.correct.toLowerCase();
    } else if (q.type === 'essay') {
      isCorrect = val.trim().length >= 10;
    }
    
    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      const newMistake = { 
        ...q, 
        subject: q.subject || (activeQuiz ? activeQuiz.subject : 'Tổng hợp'), 
        quizTitle: activeQuiz ? activeQuiz.title : '',
        userAnswer: val, 
        timestamp: new Date().toISOString() 
      };
      try {
        const existing = JSON.parse(localStorage.getItem('study_app_mistakes') || '[]');
        localStorage.setItem('study_app_mistakes', JSON.stringify([...existing, newMistake]));
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Nộp toàn bộ bài kiểm tra
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
      } else if ((q.type === 'fill_blank' || q.type === 'short_answer') && uAns.trim().toLowerCase() === q.correct.toLowerCase()) {
        isCorrect = true;
      } else if (q.type === 'essay') {
        isCorrect = uAns.trim().length >= 10;
      }

      if (isCorrect) newScore += 1;
      else {
        newMistakes.push({ ...q, userAnswer: uAns, quizTitle: activeQuiz.title, subject: activeQuiz.subject, correctAnswer: q.correct });
      }
    });

    setScore(newScore);
    setIsSubmitted(true);
    if (activeQuiz && activeQuiz.id) markQuizCompleted(activeQuiz.id);
    if (addReward) addReward(newScore * 2, 0); 
    
    if (newMistakes.length > 0) {
      try {
        const existing = JSON.parse(localStorage.getItem('study_app_mistakes') || '[]');
        const combined = [...newMistakes, ...existing];
        const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());
        localStorage.setItem('study_app_mistakes', JSON.stringify(unique));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleAIGenerated = (newQuiz) => {
    let current = Array.isArray(customQuizzes) ? customQuizzes : [];
    const updated = [newQuiz, ...current];
    setCustomQuizzes(updated);
    try {
      localStorage.setItem('study_app_custom_quizzes', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setShowAIModal(false);
  };
  
  const deleteCustomQuiz = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa bài test này?')) {
      const updated = customQuizzes.filter(q => q.id !== id);
      setCustomQuizzes(updated);
      try {
        localStorage.setItem('study_app_custom_quizzes', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
    }
  };
    
  const isQuizLocked = (quiz) => {
    if (!quiz.chapter || quiz.chapter === 1) return false;
    const prevQuiz = allQuizzes.find(q => q.subject === quiz.subject && q.grade === quiz.grade && q.chapter === quiz.chapter - 1);
    if (!prevQuiz) return false;
    return !completedQuizzes.includes(prevQuiz.id);
  };

  // =========================================================================
  // VIEW 1: TRANG ÔN LÝ THUYẾT VỚI AI TRƯỚC KHI BẮT ĐẦU BÀI TEST
  // =========================================================================
  if (viewMode === 'theory' && activeQuiz) {
    const theory = getTheoryForQuiz(activeQuiz);
    const subjStyle = getSubjectStyle(activeQuiz.subject);

    return (
      <div className="min-h-screen bg-slate-50/70 pb-20 animate-fade-in">
        
        {/* Header Trang Lý Thuyết */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => { setViewMode('list'); setActiveQuiz(null); }}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-slate-800 transition py-2 px-3 rounded-xl hover:bg-slate-100 cursor-pointer"
            >
              ← Quay lại danh sách đề thi
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleStartTesting(activeQuiz)}
                className="px-6 py-2.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Bắt Đầu Làm Bài Tập ({activeQuiz.questions.length} câu)</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Nội dung chính: Tóm tắt lý thuyết + Khung Chat Trợ lý AI */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-6 space-y-6">
          
          {/* Banner Giới Thiệu Chuyên Đề */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-indigo-500/30">
            <div className="relative z-10 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-indigo-500/30 text-indigo-300 border border-indigo-400/40">
                  {activeQuiz.subject}
                </span>
                {activeQuiz.grade && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/15">
                    Lớp {activeQuiz.grade}
                  </span>
                )}
                {activeQuiz.chapter && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/15">
                    Chương {activeQuiz.chapter}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  {activeQuiz.questions.length} câu bài tập đa dạng
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white">
                {activeQuiz.title}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                {theory?.summary || 'Nắm vững lý thuyết cốt lõi trước khi bước vào phòng thi để đạt kết quả xuất sắc nhất.'}
              </p>
            </div>
          </div>

          {/* Grid: 2 Cột (Cột trái: Bảng tóm tắt lý thuyết - Cột phải: Chat Ôn với AI) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* CỘT TRÁI (7 phần): TÓM TẮT LÝ THUYẾT CHUYÊN ĐỀ */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-slate-800 font-black text-lg">
                <BookOpenCheck size={22} className="text-indigo-600" />
                <h2>Kiến Thức Cốt Lõi Cần Nắm</h2>
              </div>

              {theory?.sections?.map((sec, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-3">
                  <h3 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                    {sec.heading}
                  </h3>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-medium bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>

            {/* CỘT PHẢI (5 phần): TRỢ LÝ AI ÔN LÝ THUYẾT TRỰC TUYẾN */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl border-2 border-indigo-200 shadow-md p-5 sm:p-6 space-y-4">
                
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-md">
                    <Brain size={22} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-800 text-base flex items-center gap-1.5">
                      Trợ Lý AI Ôn Lý Thuyết <Sparkles size={16} className="text-amber-500 fill-amber-400" />
                    </h3>
                    <p className="text-xs text-slate-400">Hỏi đáp & gỡ rối mọi thắc mắc trước khi làm bài</p>
                  </div>
                </div>

                {/* Gợi ý câu hỏi nhanh (Quick Prompts) */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">
                    Gợi ý hỏi nhanh:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {theory?.aiPrompts?.map((prompt, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => handleSendAiQuestion(prompt)}
                        className="text-left text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-800 font-bold px-3 py-1.5 rounded-xl border border-indigo-200 transition cursor-pointer"
                      >
                        💡 {prompt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hộp thoại tin nhắn AI */}
                <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-200 max-h-80 overflow-y-auto space-y-3">
                  {aiChatMessages.map((msg, mIdx) => (
                    <div 
                      key={mIdx}
                      className={`flex flex-col text-xs sm:text-sm leading-relaxed p-3 rounded-2xl ${
                        msg.sender === 'user' 
                          ? 'bg-indigo-600 text-white ml-6' 
                          : 'bg-white text-slate-800 shadow-sm border border-slate-200 mr-6'
                      }`}
                    >
                      <span className={`text-[10px] font-bold uppercase mb-1 ${msg.sender === 'user' ? 'text-indigo-200' : 'text-indigo-600'}`}>
                        {msg.sender === 'user' ? 'Bạn' : 'Thầy/Cô AI'}
                      </span>
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>
                  ))}

                  {aiLoading && (
                    <div className="flex items-center gap-2 text-xs text-slate-500 italic p-2 bg-white rounded-xl shadow-sm border border-slate-100 mr-6">
                      <Sparkles size={14} className="animate-spin text-indigo-500" />
                      AI đang suy nghĩ lời giải thích ngắn gọn nhất...
                    </div>
                  )}
                  <div ref={chatBottomRef} />
                </div>

                {/* Ô nhập câu hỏi cho AI */}
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSendAiQuestion(); }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={aiChatInput}
                    onChange={(e) => setAiChatInput(e.target.value)}
                    placeholder="Hỏi AI bất kỳ điều gì về bài này..."
                    className="flex-1 p-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    disabled={!aiChatInput.trim() || aiLoading}
                    className="p-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl transition cursor-pointer"
                  >
                    <Send size={16} />
                  </button>
                </form>

              </div>
            </div>

          </div>

          {/* THANH CHUYỂN TIẾP CUỐI TRANG: SANG LÀM BÀI TẬP */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div>
              <h3 className="text-lg font-black text-slate-800">Bạn đã sẵn sàng thử thách?</h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Làm bài tập đa dạng (Trắc nghiệm 4 đáp án, Đúng/Sai, Điền khuyết, Tự luận) để nhận thưởng XP và Ruby!
              </p>
            </div>

            <button
              onClick={() => handleStartTesting(activeQuiz)}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:brightness-110 text-white font-black text-base rounded-2xl shadow-xl shadow-emerald-500/25 transition transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Bắt Đầu Làm Bài Tập Ngay</span>
              <ArrowRight size={20} />
            </button>
          </div>

        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW 2: MÀN HÌNH LÀM BÀI TẬP (GIỮ NGUYÊN ĐẦY ĐỦ CÁC DẠNG BÀI NHƯ TRƯỚC)
  // =========================================================================
  if (viewMode === 'testing' && activeQuiz) {
    return (
      <div className="fixed inset-0 z-[9999] bg-slate-50 overflow-y-auto animate-fade-in w-full h-full m-0 p-0">
        <div className="w-full min-h-screen flex flex-col bg-white">
          
          {/* Header Phòng Thi */}
          <header className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-700 p-5 sm:px-10 sm:py-6 text-white flex justify-between items-center sticky top-0 z-20 shadow-md">
            <div>
              <h1 className="text-xl sm:text-3xl font-black mb-1 text-white">{activeQuiz.title}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold bg-white/20 px-3 py-0.5 rounded-full text-white">{activeQuiz.subject}</span>
                <span className="text-xs font-bold bg-white/20 px-3 py-0.5 rounded-full text-white">{activeQuiz.questions.length} câu hỏi</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setViewMode('theory')}
                className="px-4 py-2 bg-white/15 hover:bg-white/25 rounded-xl transition text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm cursor-pointer"
                title="Xem lại tóm tắt lý thuyết chương"
              >
                <BookOpenCheck size={16} />
                <span className="hidden sm:inline">Ôn Lý Thuyết Với AI</span>
              </button>

              <button 
                onClick={() => { setViewMode('list'); setActiveQuiz(null); }} 
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition text-white backdrop-blur-sm cursor-pointer"
                title="Đóng bài thi"
              >
                <X size={24} />
              </button>
            </div>
          </header>

          {/* Danh sách các câu hỏi trong đề */}
          <div className="flex-1 p-4 sm:p-10 max-w-5xl mx-auto w-full space-y-8 pb-32">
            {activeQuiz.questions.map((q, idx) => (
              <div key={q.id} className="bg-surface rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition">
                
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-gray-800 text-lg">Câu {idx + 1}</span>
                    {q.type === 'mcq' && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        Trắc nghiệm 4 đáp án
                      </span>
                    )}
                    {q.type === 'true_false' && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Đúng / Sai
                      </span>
                    )}
                    {q.type === 'fill_blank' && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        Điền khuyết
                      </span>
                    )}
                    {q.type === 'short_answer' && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                        Câu trả lời ngắn
                      </span>
                    )}
                    {q.type === 'essay' && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                        Tự luận
                      </span>
                    )}
                  </div>

                  {/* NÚT TÍCH HỢP: ÔN LÝ THUYẾT VỚI AI KHI GẶP CÂU KHÓ */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenQuestionHelp(q, idx);
                    }}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-200 transition-all cursor-pointer active:scale-95 shadow-sm"
                    title="Gặp câu khó? Nhấn để ôn lại lý thuyết và xem bài tập tương tự đổi số liệu!"
                  >
                    <Lightbulb size={14} className="text-amber-500 fill-amber-400" />
                    <span>Gặp khó? Ôn lý thuyết với AI</span>
                  </button>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-5 leading-relaxed">{q.text}</h3>
                
                {/* Dạng 1 & 2: Trắc nghiệm 4 đáp án & Đúng/Sai */}
                {(q.type === 'mcq' || q.type === 'true_false') ? (
                  <div className="space-y-3">
                    {(q.options || ['Đúng', 'Sai']).map(opt => (
                      <label key={opt} className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                        userAnswers[q.id] === opt ? 'border-sky-500 bg-sky-50/50 shadow-sm' : 'border-gray-100 hover:border-gray-200 bg-white'
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
                        <span className={`font-medium ${(isSubmitted || submittedQuestions[q.id]) && opt === q.correct ? 'text-green-800 font-bold' : 'text-gray-700'}`}>{opt}</span>
                        {(isSubmitted || submittedQuestions[q.id]) && opt === q.correct && <CheckCircle2 size={20} className="ml-auto text-green-500" />}
                        {(isSubmitted || submittedQuestions[q.id]) && userAnswers[q.id] === opt && opt !== q.correct && <X size={20} className="ml-auto text-red-500" />}
                      </label>
                    ))}
                    {(isSubmitted || submittedQuestions[q.id]) && userAnswers[q.id] !== q.correct && q.explanation && (
                      <div className="mt-4 text-sm bg-orange-50 text-orange-800 p-3.5 rounded-xl border border-orange-200 font-medium">
                        💡 <strong>Giải thích:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                ) : (q.type === 'fill_blank' || q.type === 'short_answer') ? (
                  <div className="space-y-3">
                    <input 
                      type="text"
                      value={userAnswers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q, e.target.value)}
                      disabled={isSubmitted || submittedQuestions[q.id]}
                      placeholder={q.type === 'fill_blank' ? "Nhập từ hoặc cụm từ điền vào chỗ trống..." : "Nhập câu trả lời ngắn (số hoặc từ khóa)..."}
                      className={`w-full p-4 border-2 rounded-2xl outline-none transition font-medium ${
                        !(isSubmitted || submittedQuestions[q.id]) ? 'border-gray-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100' :
                        userAnswers[q.id]?.trim().toLowerCase() === q.correct.toLowerCase() ? 'border-green-500 bg-green-50 text-green-800 font-bold' : 'border-red-500 bg-red-50 text-red-800'
                      }`}
                    />
                    {(isSubmitted || submittedQuestions[q.id]) && (
                      <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 mt-3">
                        <span className="text-xs font-bold text-sky-600 block mb-1">Đáp án đúng chuẩn:</span>
                        <span className="font-bold text-gray-800 text-base">{q.correct}</span>
                        {q.explanation && <p className="text-sm text-gray-600 mt-1.5">💡 <strong>Giải thích:</strong> {q.explanation}</p>}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <textarea 
                      value={userAnswers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q, e.target.value)}
                      disabled={isSubmitted || submittedQuestions[q.id]}
                      placeholder="Trình bày bài làm tự luận của bạn..."
                      className="w-full h-32 p-4 border-2 border-gray-200 rounded-2xl focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none transition resize-none font-medium leading-relaxed"
                    ></textarea>
                    {(isSubmitted || submittedQuestions[q.id]) && (
                      <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 mt-3">
                        <span className="text-xs font-bold text-purple-700 block mb-1">✨ Gợi ý chấm điểm / Đáp án mẫu (Bareme):</span>
                        <p className="font-medium text-gray-800 text-sm leading-relaxed">{q.correct}</p>
                        {q.explanation && <p className="text-sm text-gray-600 mt-2">💡 <strong>Hướng dẫn:</strong> {q.explanation}</p>}
                      </div>
                    )}
                  </div>
                )}

              </div>
            ))}
          </div>
          
          {/* Nút nộp bài & Tổng kết */}
          <div className="mt-8 flex justify-center pb-12">
            {!isSubmitted ? (
              <button 
                onClick={submitQuiz}
                className="px-10 py-4 bg-primary text-white font-bold rounded-xl text-lg hover:bg-sky-600 transition shadow-lg cursor-pointer"
              >
                Nộp bài thi
              </button>
            ) : (
              <div className="text-center w-full max-w-xl mx-auto bg-surface p-8 rounded-3xl border border-gray-100 shadow-sm animate-fade-in">
                <Target size={48} className="mx-auto text-primary mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Hoàn thành bài tập!</h2>
                <p className="text-xl text-gray-600 mb-4">Số điểm: <span className="font-black text-primary">{score}/{activeQuiz.questions.length}</span> (+{score * 2} XP)</p>
                <div className="flex justify-center gap-3">
                  <button 
                    onClick={() => { setViewMode('list'); setActiveQuiz(null); }}
                    className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition cursor-pointer"
                  >
                    Về danh sách đề thi
                  </button>
                  <button 
                    onClick={() => setViewMode('theory')}
                    className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition cursor-pointer flex items-center gap-1.5"
                  >
                    <BookOpenCheck size={18} /> Ôn lại lý thuyết chương
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* MODAL GỢI Ý: BÀI TẬP TƯƠNG TỰ ĐỔI SỐ LIỆU & HƯỚNG DẪN GIẢI CHI TIẾT (RENDER VIA PORTAL) */}
        {questionHelpModal && typeof document !== 'undefined' && createPortal(
          <div 
            className="fixed inset-0 z-[999999] bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setQuestionHelpModal(null);
            }}
          >
            <div 
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Modal */}
              <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white p-4 sm:px-7 sm:py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 text-amber-300 flex items-center justify-center font-black shadow-inner flex-shrink-0">
                    <Lightbulb size={24} className="fill-amber-300 text-amber-200" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-indigo-100">
                        Câu {questionHelpModal.questionIndex}
                      </span>
                      <span className="text-xs font-semibold text-indigo-200">
                        {activeQuiz?.subject} • {questionHelpModal.similarData?.topic || activeQuiz?.title}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                      Ôn Lý Thuyết & Hướng Dẫn Giải Bài Cụ Thể Với AI
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setQuestionHelpModal(null)}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-2xl transition cursor-pointer"
                >
                  <X size={22} />
                </button>
              </div>

              {/* NAVIGATION TABS */}
              <div className="bg-slate-100 p-1.5 flex gap-1 border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setQuestionHelpModal(prev => ({ ...prev, activeTab: 'similar' }))}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    questionHelpModal.activeTab === 'similar' 
                      ? 'bg-white text-indigo-700 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Sparkles size={15} className="text-amber-500" />
                  <span>⭐ Bài Tập Tương Tự & Giải Mẫu</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQuestionHelpModal(prev => ({ ...prev, activeTab: 'theory' }))}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    questionHelpModal.activeTab === 'theory' 
                      ? 'bg-white text-indigo-700 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <BookOpenCheck size={15} className="text-indigo-600" />
                  <span>📖 Lý Thuyết Chương</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQuestionHelpModal(prev => ({ ...prev, activeTab: 'ask_ai' }))}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    questionHelpModal.activeTab === 'ask_ai' 
                      ? 'bg-white text-indigo-700 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <MessageSquare size={15} className="text-purple-600" />
                  <span>💬 Hỏi Trợ Lý AI</span>
                </button>
              </div>

              {/* SCROLLABLE BODY */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
                
                {/* TAB 1: BÀI TẬP TƯƠNG TỰ CÙNG DẠNG & BÀI GIẢI MẪU */}
                {questionHelpModal.activeTab === 'similar' && (() => {
                  const sim = questionHelpModal.similarData;
                  const originalQText = questionHelpModal.question.text || questionHelpModal.question.question || '';
                  
                  return (
                    <div className="space-y-4 animate-fade-in">
                      {/* KHUNG 1: CÂU HỎI TRONG BÀI THI */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                            📌 Câu hỏi trong bài thi của bạn:
                          </span>
                          <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-lg">
                            Đang làm dở
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed pt-1">
                          {originalQText}
                        </p>
                      </div>

                      {/* KHUNG 2: BÀI TẬP TƯƠNG TỰ CÙNG DẠNG (ĐÃ THAY ĐỔI SỐ LIỆU) */}
                      {sim && (
                        <div className="bg-gradient-to-br from-indigo-50/80 via-purple-50/50 to-sky-50/60 p-4 sm:p-5 rounded-2xl border-2 border-indigo-200 shadow-sm space-y-3">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-600 text-white shadow-sm">
                              <Sparkles size={13} className="text-yellow-300" />
                              ⭐ BÀI TẬP TƯƠNG TỰ CÙNG DẠNG (ĐÃ ĐỔI SỐ LIỆU)
                            </span>
                            <span className="text-[11px] font-bold text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-lg">
                              {sim.topic}
                            </span>
                          </div>

                          <h4 className="text-sm sm:text-base font-black text-indigo-950 leading-relaxed pt-1">
                            {sim.similarQuestion}
                          </h4>

                          {/* Chọn thử phương án để luyện tập câu tương tự */}
                          {sim.similarOptions && Array.isArray(sim.similarOptions) && sim.similarOptions.length > 0 && (
                            <div className="space-y-2 pt-1">
                              <div className="text-[11px] font-bold text-indigo-800 flex items-center gap-1">
                                <span>👇 Hãy bấm chọn thử đáp án để xem bạn đã nắm được phương pháp chưa:</span>
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {sim.similarOptions.map((opt, oIdx) => {
                                  const isSelected = questionHelpModal.selectedOption === opt;
                                  const isCorrect = opt === sim.similarCorrect;
                                  let btnStyle = "bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50";
                                  if (questionHelpModal.selectedOption) {
                                    if (isCorrect) {
                                      btnStyle = "bg-emerald-100 text-emerald-900 border-emerald-400 ring-2 ring-emerald-300 font-black";
                                    } else if (isSelected) {
                                      btnStyle = "bg-red-50 text-red-800 border-red-300";
                                    } else {
                                      btnStyle = "bg-white/70 text-slate-400 border-slate-100 opacity-60";
                                    }
                                  }

                                  return (
                                    <button
                                      key={oIdx}
                                      type="button"
                                      onClick={() => setQuestionHelpModal(prev => ({ ...prev, selectedOption: opt }))}
                                      className={`p-2.5 rounded-xl text-xs font-bold text-center border-2 transition-all cursor-pointer ${btnStyle}`}
                                    >
                                      <span className="opacity-60 mr-1">{['A', 'B', 'C', 'D'][oIdx] || ''}.</span>
                                      <span>{opt}</span>
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Thông báo kết quả khi học sinh thử làm câu tương tự */}
                              {questionHelpModal.selectedOption && (
                                <div className={`p-3 rounded-xl border text-xs font-bold flex items-center gap-2 animate-fade-in ${
                                  questionHelpModal.selectedOption === sim.similarCorrect 
                                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                                    : 'bg-amber-50 text-amber-800 border-amber-300'
                                }`}>
                                  {questionHelpModal.selectedOption === sim.similarCorrect ? (
                                    <>
                                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                                      <span>🎉 Chính xác! Bạn đã hiểu đúng phương pháp rồi đấy. Hãy quay lại tự tin làm câu trong bài nhé!</span>
                                    </>
                                  ) : (
                                    <>
                                      <AlertCircle size={16} className="text-amber-600 flex-shrink-0" />
                                      <span>⚠️ Chưa chính xác. Đừng lo, hãy đọc kỹ bài giải mẫu từng bước ngay bên dưới nhé!</span>
                                    </>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* KHUNG 3: HƯỚNG DẪN GIẢI CHI TIẾT TỪNG BƯỚC CHO BÀI TẬP TƯƠNG TỰ */}
                      {sim?.steps && (
                        <div className="bg-emerald-50/70 p-4 sm:p-5 rounded-2xl border border-emerald-200/80 space-y-3">
                          <div className="flex items-center gap-2 text-emerald-900 font-black text-xs sm:text-sm">
                            <BookOpenCheck size={18} className="text-emerald-600" />
                            <span>📝 Hướng dẫn cách giải bài cụ thể từng bước (Bài giải mẫu):</span>
                          </div>

                          <div className="space-y-2.5">
                            {sim.steps.map((st, sIdx) => (
                              <div key={sIdx} className="bg-white/95 p-3 rounded-xl border border-emerald-100 shadow-sm flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-black text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                                  {st.stepNumber || sIdx + 1}
                                </span>
                                <div className="text-xs leading-relaxed space-y-0.5">
                                  <strong className="text-emerald-950 font-bold block">{st.title}</strong>
                                  <p className="text-slate-700 font-medium whitespace-pre-line">{st.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* KHUNG 4: MẸO ÁP DỤNG NGAY CHO CÂU HỎI TRONG BÀI THI */}
                      {sim?.tipForOriginal && (
                        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs leading-relaxed text-amber-950 shadow-sm">
                          <div className="font-black text-amber-900 flex items-center gap-1.5 mb-1 text-xs sm:text-sm">
                            <Zap size={16} className="text-amber-600 fill-amber-500" />
                            <span>Mẹo áp dụng trực tiếp cho câu hỏi của bạn:</span>
                          </div>
                          <p className="font-medium pl-5">{sim.tipForOriginal}</p>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* TAB 2: TÓM TẮT LÝ THUYẾT CHƯƠNG */}
                {questionHelpModal.activeTab === 'theory' && (() => {
                  const theory = questionHelpModal.theoryData;
                  return (
                    <div className="space-y-4 animate-fade-in">
                      <div className="bg-indigo-50/80 p-4 rounded-2xl border border-indigo-200">
                        <h4 className="text-sm font-black text-indigo-950 mb-1">{theory?.title || activeQuiz?.title}</h4>
                        <p className="text-xs text-indigo-800 font-medium leading-relaxed">{theory?.summary}</p>
                      </div>

                      {theory?.sections && (
                        <div className="space-y-3">
                          {theory.sections.map((sec, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                              <h5 className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                                <span className="w-5 h-5 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center">
                                  {idx + 1}
                                </span>
                                {sec.heading}
                              </h5>
                              <p className="text-xs text-slate-600 leading-relaxed font-medium whitespace-pre-line pl-7">
                                {sec.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* TAB 3: HỎI NHANH TRỢ LÝ AI */}
                {questionHelpModal.activeTab === 'ask_ai' && (() => {
                  return (
                    <div className="space-y-4 animate-fade-in">
                      <div className="bg-purple-50 p-4 rounded-2xl border border-purple-200 text-xs text-purple-900 space-y-1">
                        <div className="font-bold flex items-center gap-1.5">
                          <Brain size={16} className="text-purple-600" />
                          <span>Gia sư AI luôn đồng hành cùng bạn</span>
                        </div>
                        <p className="text-purple-700">
                          Bạn có thể hỏi bất kỳ thắc mắc nào về phương pháp hoặc công thức. AI sẽ giải thích tư duy từng bước mà không làm lộ đáp án bài thi!
                        </p>
                      </div>

                      {/* Gợi ý các câu hỏi nhanh */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Câu hỏi nhanh:</span>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Giải thích lại cho em công thức cốt lõi',
                            'Mẹo nhớ nhanh dạng bài này là gì?',
                            'Làm sao tránh bẫy ở câu hỏi này?'
                          ].map((suggest, sIdx) => (
                            <button
                              key={sIdx}
                              type="button"
                              onClick={() => handleAskAiAboutQuestion(suggest)}
                              className="text-xs px-3 py-1.5 bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 font-bold rounded-xl border border-slate-200 transition cursor-pointer"
                            >
                              💡 {suggest}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Danh sách tin nhắn chat trong modal */}
                      <div className="space-y-3 min-h-[140px] max-h-[260px] overflow-y-auto p-3 bg-slate-50 rounded-2xl border border-slate-200">
                        {(!questionHelpModal.aiChatList || questionHelpModal.aiChatList.length === 0) ? (
                          <div className="text-center py-6 text-slate-400 text-xs">
                            Chưa có câu hỏi nào. Hãy gõ thắc mắc của bạn bên dưới!
                          </div>
                        ) : (
                          questionHelpModal.aiChatList.map((msg, mIdx) => (
                            <div key={mIdx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[85%] p-3 rounded-2xl text-xs font-medium leading-relaxed ${
                                msg.sender === 'user' 
                                  ? 'bg-indigo-600 text-white rounded-br-none shadow-sm' 
                                  : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                              }`}>
                                {msg.sender === 'ai' && <strong className="text-indigo-600 block mb-1">🤖 Gia sư AI:</strong>}
                                <p className="whitespace-pre-line">{msg.text}</p>
                              </div>
                            </div>
                          ))
                        )}
                        {questionHelpModal.isAskingAi && (
                          <div className="flex justify-start">
                            <div className="bg-white p-3 rounded-2xl border border-slate-200 text-xs text-indigo-600 font-bold flex items-center gap-2">
                              <Sparkles size={14} className="animate-spin text-amber-500" />
                              <span>AI đang suy nghĩ lời giải thích...</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Ô nhập câu hỏi */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleAskAiAboutQuestion();
                        }}
                        className="flex gap-2"
                      >
                        <input
                          type="text"
                          value={questionHelpModal.aiQuestion || ''}
                          onChange={(e) => setQuestionHelpModal(prev => ({ ...prev, aiQuestion: e.target.value }))}
                          placeholder="Nhập thắc mắc của bạn về câu hỏi này..."
                          disabled={questionHelpModal.isAskingAi}
                          className="flex-1 p-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 font-medium"
                        />
                        <button
                          type="submit"
                          disabled={questionHelpModal.isAskingAi || !(questionHelpModal.aiQuestion || '').trim()}
                          className="px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
                        >
                          <Send size={14} />
                          <span>Gửi</span>
                        </button>
                      </form>
                    </div>
                  );
                })()}

              </div>

              {/* FOOTER ACTION BAR */}
              <div className="p-3 sm:px-6 sm:py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                {questionHelpModal.activeTab === 'similar' ? (
                  <button
                    type="button"
                    onClick={handleGenerateAnotherAiExample}
                    disabled={questionHelpModal.isAiGenerating}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 py-1.5 px-3 rounded-xl hover:bg-indigo-100/60 transition cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles size={15} className={questionHelpModal.isAiGenerating ? "animate-spin text-amber-500" : "text-amber-500"} />
                    <span>{questionHelpModal.isAiGenerating ? 'AI đang tạo câu mới...' : '✨ Nhờ AI sinh thêm 1 ví dụ tương tự khác'}</span>
                  </button>
                ) : (
                  <div className="text-[11px] text-slate-500">
                    💡 Nắm chắc phương pháp để tự tin làm chủ câu hỏi trong bài thi!
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setQuestionHelpModal(null)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:brightness-110 text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Em Đã Hiểu Cách Giải! Quay Lại Làm Câu Này</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>,
          document.body
        )}

      </div>
    );
  }

  // =========================================================================
  // VIEW 3: DANH SÁCH TỔNG QUAN CÁC ĐỀ THI
  // =========================================================================
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      
      {/* Header Danh Sách */}
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-800 mb-2">Luyện Thi & Trắc Nghiệm</h1>
          <p className="text-gray-500">Ôn tập lý thuyết thông minh cùng AI trước khi làm các bài test đa dạng để nhận XP.</p>
        </div>
        <button 
          onClick={() => setShowAIModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-primary to-sky-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform flex items-center gap-2 cursor-pointer"
        >
          <Sparkles size={20} /> Tạo Đề bằng AI
        </button>
      </header>

      {/* Bộ Lọc Môn Học */}
      <div className="bg-surface rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
          <Book size={18} className="text-primary" />
          <span>Lọc theo môn học</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setSelectedSubject(null)}
            className={`px-4 py-2 rounded-full font-bold text-sm transition cursor-pointer ${!selectedSubject ? 'bg-sky-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Tất cả
          </button>
          {['Toán', 'Ngữ Văn', 'Tiếng Anh', 'KHTN', 'Lịch sử - Địa lí', 'GDCD', 'Tin học', 'Công nghệ'].map(sub => (
            <button 
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition cursor-pointer ${selectedSubject === sub ? 'bg-sky-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Danh Sách Đề Thi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredQuizzes.map((quiz) => {
          const isLocked = isQuizLocked(quiz);
          const subjStyle = getSubjectStyle(quiz.subject);

          return (
            <div 
              key={quiz.id} 
              className={`bg-surface p-6 rounded-3xl border border-gray-100 shadow-sm transition group relative overflow-hidden flex flex-col justify-between ${
                isLocked ? 'opacity-70 grayscale cursor-not-allowed' : 'hover:shadow-md'
              }`}
            >
              {completedQuizzes.includes(quiz.id) && (
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-500 rounded-full flex items-end justify-start p-3 z-10 shadow-lg">
                  <CheckCircle2 size={16} className="text-white" />
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-bold border px-2 py-1 rounded-md ${subjStyle.badge}`}>{quiz.subject}</span>
                    {quiz.grade && <span className="text-xs font-bold text-gray-600 bg-gray-100 border border-gray-200 px-2 py-1 rounded">Lớp {quiz.grade}</span>}
                    {quiz.chapter && <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-1 rounded">Chương {quiz.chapter}</span>}
                    <span className="text-xs font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded">{quiz.questions.length} câu</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {quiz.id.startsWith('ai_') && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); deleteCustomQuiz(quiz.id); }} 
                        className="text-red-400 hover:text-red-600 transition p-1" 
                        title="Xóa đề này"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                    {isLocked && <Lock size={18} className="text-gray-400" />}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition">{quiz.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">Làm bài tập đa dạng (Trắc nghiệm, Tự luận, Đúng/Sai...) để nhận XP.</p>
              </div>
              
              {/* CÁC NÚT BẤM: ÔN LÝ THUYẾT VỚI AI & LÀM BÀI NGAY */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <button 
                  onClick={() => { if (!isLocked) handleStartTheory(quiz); }}
                  disabled={isLocked}
                  className={`w-full py-3.5 px-4 font-black rounded-2xl transition flex items-center justify-center gap-2 text-sm shadow-sm cursor-pointer ${
                    isLocked 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:brightness-110 text-white shadow-sky-500/20 active:scale-95'
                  }`}
                >
                  {isLocked ? (
                    <><Lock size={16} /> Bị khóa (Cần hoàn thành Chương trước)</>
                  ) : (
                    <><BookOpenCheck size={18} /> Ôn Lý Thuyết Với AI & Làm Bài</>
                  )}
                </button>

                {!isLocked && (
                  <button
                    onClick={() => handleStartTesting(quiz)}
                    className="w-full text-center text-xs font-bold text-slate-400 hover:text-sky-600 transition py-1 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Làm bài tập ngay (Bỏ qua lý thuyết)</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>

            </div>
          );
        })}

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
