import React, { useState } from 'react';
import { Target, CheckCircle2, Circle, X, Trophy, Gem, Sparkles, BookOpen, Clock } from 'lucide-react';

const ASSESSMENT_TESTS = [
  {
    id: 'a6',
    title: 'Đánh giá năng lực đầu vào - Lớp 6',
    grade: 'Lớp 6',
    subject: 'Tổng hợp',
    description: 'Đánh giá toàn diện kiến thức Toán, Tiếng Việt cơ bản để xếp lớp.',
    questions: [
      { id: 'q6_1', type: 'mcq', text: 'Toán: Kết quả của phép tính 15 + 25 x 2 là:', options: ['80', '65', '40', '50'], correct: '65' },
      { id: 'q6_2', type: 'mcq', text: 'Tiếng Việt: Từ nào viết đúng chính tả?', options: ['Xuất sắc', 'Suất xắc', 'Xuất xắc', 'Suất sắc'], correct: 'Xuất sắc' }
    ]
  },
  {
    id: 'a7',
    title: 'Đánh giá năng lực đầu vào - Lớp 7',
    grade: 'Lớp 7',
    subject: 'Tổng hợp',
    description: 'Khảo sát chất lượng môn Khoa học Tự nhiên, Toán và Tiếng Anh.',
    questions: [
      { id: 'q7_1', type: 'mcq', text: 'Toán: Số nguyên tố chẵn duy nhất là số mấy?', options: ['0', '2', '4', 'Không có số nào'], correct: '2' },
      { id: 'q7_2', type: 'fill_blank', text: 'Anh: "She _____ (go) to school everyday."', correct: 'goes' }
    ]
  },
  {
    id: 'a8',
    title: 'Đánh giá năng lực đầu vào - Lớp 8',
    grade: 'Lớp 8',
    subject: 'Tổng hợp',
    description: 'Kiểm tra nền tảng tư duy logic, Đại số và Hóa học cơ bản.',
    questions: [
      { id: 'q8_1', type: 'mcq', text: 'Hóa học: Công thức hóa học của nước là?', options: ['HO2', 'H2O', 'H2O2', 'O2H'], correct: 'H2O' },
      { id: 'q8_2', type: 'mcq', text: 'Toán: Hằng đẳng thức (a+b)² bằng?', options: ['a²+b²', 'a²-2ab+b²', 'a²+2ab+b²', 'a²-b²'], correct: 'a²+2ab+b²' }
    ]
  },
  {
    id: 'a9',
    title: 'Đánh giá năng lực đầu vào - Lớp 9',
    grade: 'Lớp 9',
    subject: 'Tổng hợp',
    description: 'Đánh giá chuyên sâu chuẩn bị lộ trình ôn thi vào lớp 10.',
    questions: [
      { id: 'q9_1', type: 'mcq', text: 'Toán: Đồ thị hàm số y = ax + b đi qua gốc tọa độ khi:', options: ['a = 0', 'b = 0', 'a = 1', 'b = 1'], correct: 'b = 0' },
      { id: 'q9_2', type: 'mcq', text: 'Văn: "Chí Phèo" là tác phẩm của nhà văn nào?', options: ['Ngô Tất Tố', 'Nam Cao', 'Vũ Trọng Phụng', 'Kim Lân'], correct: 'Nam Cao' },
      { id: 'q9_3', type: 'mcq', text: 'Lý: Vận tốc chạm đất của vật rơi tự do tỉ lệ thuận với:', options: ['Bình phương độ cao', 'Căn bậc hai độ cao', 'Khối lượng', 'Thời gian rơi bình phương'], correct: 'Căn bậc hai độ cao' }
    ]
  }
];

export default function AssessmentManager({ addReward }) {
  const [selectedGrade, setSelectedGrade] = useState('Lớp 9');
  const [activeTest, setActiveTest] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const filteredTests = ASSESSMENT_TESTS.filter(t => t.grade === selectedGrade);

  const handleStart = (test) => {
    setActiveTest(test);
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
  };

  const handleAnswerChange = (qId, val) => {
    setUserAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    activeTest.questions.forEach(q => {
      if (q.type === 'mcq' && userAnswers[q.id] === q.correct) {
        newScore += 1;
      } else if (q.type === 'fill_blank' && userAnswers[q.id]?.trim().toLowerCase() === q.correct.toLowerCase()) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setIsSubmitted(true);
    
    const xpEarned = newScore * 15; // 15 XP per correct answer for assessment
    if (xpEarned > 0 && addReward) {
      addReward(xpEarned, newScore * 5); // 5 rubies
    }
  };

  if (activeTest) {
    return (
      <div className="space-y-6 animate-fade-in pb-10">
        <header className="mb-8 flex justify-between items-center bg-gradient-to-r from-indigo-50 to-white p-6 rounded-3xl border border-indigo-100">
          <div>
            <h1 className="text-2xl font-bold text-indigo-900 mb-2">{activeTest.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">{activeTest.grade}</span>
              <span className="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{activeTest.questions.length} câu hỏi</span>
            </div>
          </div>
          <button onClick={() => setActiveTest(null)} className="text-gray-500 hover:text-gray-800 font-medium bg-white border border-gray-200 px-6 py-2 rounded-xl transition shadow-sm hover:shadow">
            Thoát bài thi
          </button>
        </header>

        <div className="space-y-8">
          {activeTest.questions.map((q, idx) => (
            <div key={q.id} className="bg-surface rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Câu {idx + 1}: {q.text}</h3>
              
              {q.type === 'mcq' ? (
                <div className="space-y-3">
                  {q.options.map(opt => (
                    <label key={opt} className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      userAnswers[q.id] === opt ? 'border-indigo-500 bg-indigo-50' : 'border-gray-100 hover:border-gray-200 bg-white'
                    } ${isSubmitted && opt === q.correct ? 'border-green-500 bg-green-50' : ''}`}>
                      <input 
                        type="radio" 
                        name={`q-${q.id}`} 
                        value={opt} 
                        checked={userAnswers[q.id] === opt} 
                        onChange={() => handleAnswerChange(q.id, opt)}
                        disabled={isSubmitted}
                        className="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <span className={`font-medium ${isSubmitted && opt === q.correct ? 'text-green-700' : 'text-gray-700'}`}>{opt}</span>
                      {isSubmitted && opt === q.correct && <CheckCircle2 size={20} className="ml-auto text-green-500" />}
                      {isSubmitted && userAnswers[q.id] === opt && opt !== q.correct && <X size={20} className="ml-auto text-red-500" />}
                    </label>
                  ))}
                </div>
              ) : (
                <div className="relative">
                  <input 
                    type="text"
                    value={userAnswers[q.id] || ''}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    disabled={isSubmitted}
                    placeholder="Nhập đáp án của bạn..."
                    className={`w-full p-4 border-2 rounded-xl focus:ring-0 outline-none transition text-gray-700 font-medium ${
                      !isSubmitted ? 'border-gray-100 focus:border-indigo-500' :
                      userAnswers[q.id]?.trim().toLowerCase() === q.correct.toLowerCase() ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-500 bg-red-50 text-red-800'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {!isSubmitted ? (
          <div className="flex justify-center mt-10">
            <button 
              onClick={handleSubmit}
              disabled={Object.keys(userAnswers).length === 0}
              className="px-12 py-4 bg-indigo-600 text-white font-bold rounded-xl text-lg shadow-lg shadow-indigo-200 hover:-translate-y-1 hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:hover:translate-y-0 flex items-center gap-2"
            >
              Nộp bài đánh giá <Sparkles size={20}/>
            </button>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-10 text-white text-center mt-8 shadow-xl shadow-indigo-200 animate-fade-in relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <Trophy size={64} className="mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-3 relative z-10">Hoàn thành bài thi!</h2>
            <p className="text-indigo-100 text-lg mb-8 relative z-10">Bạn đã làm đúng {score} / {activeTest.questions.length} câu hỏi. Lộ trình của bạn đã được lưu lại.</p>
            <div className="flex justify-center gap-6 mb-10 relative z-10">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl flex items-center gap-2 border border-white/30">
                <span className="font-bold text-xl">+{score * 15} XP</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl flex items-center gap-2 border border-white/30">
                <Gem size={24} className="text-rose-300" />
                <span className="font-bold text-xl">+{score * 5} Ruby</span>
              </div>
            </div>
            <button 
              onClick={() => setActiveTest(null)}
              className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition shadow-lg relative z-10 hover:scale-105"
            >
              Quay lại danh sách
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Đánh giá Năng lực</h1>
        <p className="text-gray-500">Phân loại và khảo sát năng lực đầu vào theo từng khối lớp.</p>
      </header>

      {/* Class/Grade Tabs */}
      <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 inline-flex flex-wrap gap-2 mb-4">
        {['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9'].map(grade => (
          <button
            key={grade}
            onClick={() => setSelectedGrade(grade)}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${
              selectedGrade === grade 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {grade}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTests.map(test => (
          <div key={test.id} className="bg-surface rounded-3xl p-8 shadow-sm border border-gray-100 hover:border-indigo-200 transition-colors group cursor-pointer" onClick={() => handleStart(test)}>
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target size={32} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">{test.title}</h3>
            <p className="text-gray-500 mb-6">{test.description}</p>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                {test.subject}
              </span>
              <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                <BookOpen size={14} /> {test.questions.length} câu hỏi
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {filteredTests.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100 border-dashed">
          <Clock size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-bold text-gray-500 mb-2">Đang cập nhật bài thi</h3>
          <p className="text-gray-400">Các bài thi đánh giá cho {selectedGrade} sẽ sớm ra mắt.</p>
        </div>
      )}
    </div>
  );
}
