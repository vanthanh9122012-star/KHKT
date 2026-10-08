import React, { useState } from 'react';
import { Upload, X, Loader2, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export default function AIQuizGenerator({ onQuizGenerated, onClose, addReward }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [subject, setSubject] = useState('Toán');

  const subjects = ['Toán', 'Lý', 'Hóa', 'Sinh', 'Văn', 'Sử', 'Địa', 'Anh'];

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      if (selected.size > 10 * 1024 * 1024) {
        setError('Kích thước file không được vượt quá 10MB.');
        return;
      }
      setFile(selected);
      setError('');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped) {
      if (dropped.size > 10 * 1024 * 1024) {
        setError('Kích thước file không được vượt quá 10MB.');
        return;
      }
      setFile(dropped);
      setError('');
    }
  };

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });

  const generateQuiz = async () => {
    if (!file) {
      setError('Vui lòng chọn hoặc kéo thả một tài liệu!');
      return;
    }

    const apiKeyInput = document.getElementById('gemini_api_key_input');
    const apiKey = apiKeyInput ? apiKeyInput.value.trim() : '';

    if (!apiKey) {
      setError('Bạn chưa nhập Gemini API Key ở trang Cài đặt (phần Flashcard)! Vui lòng điền API Key để sử dụng tính năng AI.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const base64Data = await toBase64(file);
      const mimeType = file.type || 'application/pdf'; // fallback

      const ai = new GoogleGenAI({ apiKey });

      const prompt = `Bạn là một giáo viên chuyên gia biên soạn đề thi môn ${subject}. 
Hãy đọc tài liệu được đính kèm và tạo ra một bộ câu hỏi ôn tập (quiz) bao gồm:
- 5 câu hỏi trắc nghiệm (mỗi câu có 4 đáp án A, B, C, D, chỉ 1 đáp án đúng).
- 2 câu hỏi tự luận ngắn gọn, trọng tâm để kiểm tra độ hiểu sâu của học sinh.

Trả về duy nhất định dạng JSON theo cấu trúc sau (không kèm theo markdown json block, không kèm chữ thừa):
{
  "title": "Bài Test AI: [Tên chủ đề ngắn gọn dựa trên tài liệu]",
  "subject": "${subject}",
  "questions": [
    {
      "id": "q1",
      "type": "mcq",
      "text": "Nội dung câu hỏi trắc nghiệm?",
      "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
      "correct": "Đáp án A"
    },
    {
      "id": "q6",
      "type": "essay",
      "text": "Nội dung câu hỏi tự luận?",
      "correct": "Hướng dẫn trả lời chuẩn hoặc từ khóa quan trọng cần có."
    }
  ]
}`;

      const response = await ai.interactions.create({
        model: 'gemini-3.8-flash',
        input: [
          prompt,
          { data: base64Data, mime_type: mimeType }
        ]
      });

      let jsonText = response.output_text;
      jsonText = jsonText.replace(/```json/g, '').replace(/```/g, '').trim();
      const quizData = JSON.parse(jsonText);
      
      // Thêm ID độc nhất
      quizData.id = 'ai_' + Date.now();
      
      onQuizGenerated(quizData);
      
    } catch (err) {
      console.error(err);
      setError('Đã xảy ra lỗi khi AI xử lý tài liệu. Đảm bảo API Key hợp lệ và file có thể đọc được bằng văn bản.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-fade-in flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Sparkles className="text-primary" /> Tạo Đề Thi bằng AI
            </h2>
            <p className="text-gray-500 text-sm mt-1">Upload tài liệu bài giảng, sách, hoặc ghi chú để tạo bộ câu hỏi tự động.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full text-gray-500 transition">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto">
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl font-medium border border-red-100">
              {error}
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">Chọn môn học</label>
            <div className="flex flex-wrap gap-2">
              {subjects.map(s => (
                <button
                  key={s}
                  onClick={() => setSubject(s)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition ${subject === s ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div 
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-3xl p-10 flex flex-col items-center justify-center transition-colors cursor-pointer text-center
              ${file ? 'bg-sky-50 border-sky-300' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'}
            `}
            onClick={() => document.getElementById('fileUpload').click()}
          >
            <input 
              id="fileUpload" 
              type="file" 
              className="hidden" 
              accept=".txt,.pdf,.md,.doc,.docx,image/*" 
              onChange={handleFileChange} 
            />
            
            {file ? (
              <>
                <FileText size={48} className="text-sky-500 mb-4" />
                <h3 className="font-bold text-gray-800 text-lg mb-1">{file.name}</h3>
                <p className="text-gray-500 text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                <div className="mt-4 text-primary text-sm font-bold">Nhấn để đổi file khác</div>
              </>
            ) : (
              <>
                <Upload size={48} className="text-gray-400 mb-4" />
                <h3 className="font-bold text-gray-800 text-lg mb-2">Kéo thả tài liệu vào đây</h3>
                <p className="text-gray-500 text-sm">Hỗ trợ PDF, Word, Txt, Hình ảnh (tối đa 10MB)</p>
                <div className="mt-6 px-6 py-2 bg-white border shadow-sm rounded-xl text-gray-700 font-bold hover:bg-gray-50">
                  Chọn file từ máy
                </div>
              </>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-3 text-gray-600 font-bold hover:bg-gray-200 rounded-xl transition"
          >
            Hủy bỏ
          </button>
          <button 
            onClick={generateQuiz}
            disabled={loading || !file}
            className="px-8 py-3 bg-gradient-to-r from-primary to-sky-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <><Loader2 className="animate-spin" size={20} /> AI đang phân tích...</>
            ) : (
              <><Sparkles size={20} /> Bắt đầu Tạo</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
