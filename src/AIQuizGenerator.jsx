import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Upload, X, Loader2, FileText, Key, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import * as mammoth from 'mammoth';

export default function AIQuizGenerator({ onGenerated, onClose }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [subject, setSubject] = useState('Toán');
  const [apiKey, setApiKey] = useState('');

  const subjects = ['Toán', 'Lý', 'Hóa', 'Sinh', 'Văn', 'Sử', 'Địa', 'Anh', 'Tin học', 'Công nghệ', 'GDCD'];

  useEffect(() => {
    const savedKey = localStorage.getItem('study_app_gemini_key');
    if (savedKey) setApiKey(savedKey);
  }, []);

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

  const extractDocxText = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  };

  const generateQuiz = async () => {
    if (!file) {
      setError('Vui lòng chọn hoặc kéo thả một tài liệu!');
      return;
    }
    if (!apiKey.trim()) {
      setError('Vui lòng nhập Gemini API Key để AI có thể đọc file.');
      return;
    }

    localStorage.setItem('study_app_gemini_key', apiKey.trim());
    setLoading(true);
    setError('');

    try {
      const ai = new GoogleGenAI({ apiKey: apiKey.trim(), dangerouslyAllowBrowser: true });
      let contents = [];
      const promptText = `Bạn là một giáo viên xuất sắc. Dựa vào nội dung tài liệu đính kèm, hãy tạo một bài kiểm tra môn ${subject} thật hay và chính xác với kiến thức trong tài liệu. 
Bao gồm đúng 5 câu hỏi (trộn giữa Trắc nghiệm 4 đáp án, Đúng/Sai, Điền từ vào chỗ trống) và 2 câu tự luận (essay).
Tất cả kiến thức phải BÁM SÁT 100% nội dung tài liệu, KHÔNG được lấy kiến thức ngoài luồng.
Trả về DUY NHẤT một mảng JSON hợp lệ, không có thêm bất kỳ đoạn chữ nào khác, không dùng markdown code block.
Cấu trúc JSON yêu cầu:
[
  { "id": "q1", "type": "mcq", "text": "Câu hỏi trắc nghiệm?", "options": ["A","B","C","D"], "correct": "A", "explanation": "Giải thích" },
  { "id": "q2", "type": "true_false", "text": "Câu hỏi đúng sai?", "options": ["Đúng", "Sai"], "correct": "Đúng", "explanation": "Giải thích" },
  { "id": "q3", "type": "fill_blank", "text": "Câu điền khuyết...", "options": [], "correct": "Từ cần điền", "explanation": "Giải thích" },
  { "id": "e1", "type": "essay", "text": "Câu hỏi tự luận 1", "correct": "Hướng dẫn chấm điểm/Ý chính cần có" }
]`;

      if (file.name.endsWith('.docx')) {
        const text = await extractDocxText(file);
        contents = [{ role: 'user', parts: [{ text: promptText }, { text: 'NỘI DUNG TÀI LIỆU:\n' + text.substring(0, 30000) }] }];
      } else if (file.name.endsWith('.txt') || file.name.endsWith('.md')) {
        const text = await file.text();
        contents = [{ role: 'user', parts: [{ text: promptText }, { text: 'NỘI DUNG TÀI LIỆU:\n' + text.substring(0, 30000) }] }];
      } else if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        const b64 = await toBase64(file);
        contents = [{ role: 'user', parts: [{ text: promptText }, { inlineData: { data: b64, mimeType: file.type } }] }];
      } else {
        throw new Error('Định dạng file chưa được hỗ trợ tốt nhất. Hãy dùng .docx, .pdf, .txt hoặc hình ảnh.');
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: contents
      });

      let responseText = response.text || '';
      responseText = responseText.replace(/\s*```json/g, '').replace(/```\s*$/g, '').trim();
      
      const parsedQuestions = JSON.parse(responseText);
      
      if (!Array.isArray(parsedQuestions)) throw new Error("AI không trả về định dạng mảng.");

      const docName = file.name ? file.name.split('.')[0] : 'tài liệu';
      const quizData = {
        id: 'ai_' + Date.now(),
        title: 'Bài Test AI: ' + docName,
        subject: subject,
        questions: parsedQuestions.map((q, i) => ({
          ...q,
          id: 'ai_q' + i + '_' + Date.now()
        }))
      };
      
      if (onGenerated) onGenerated(quizData);
      
    } catch (err) {
      console.error(err);
      setError('Lỗi AI: ' + err.message + '. Vui lòng kiểm tra lại API Key hoặc định dạng file.');
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-fade-in flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Sparkles className="text-primary" /> Tạo Đề Thi bằng AI (Gemini)
            </h2>
            <p className="text-gray-500 text-sm mt-1">AI sẽ thực sự đọc nội dung tài liệu của bạn để tạo ra đề thi chính xác 100%.</p>
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

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
              <Key size={16} className="text-yellow-500" /> Gemini API Key
            </label>
            <input 
              type="password"
              placeholder="Nhập API Key của bạn (được lưu cục bộ)..."
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition"
            />
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
                <p className="text-gray-500 text-sm">Hỗ trợ PDF, Word (.docx), Txt, Hình ảnh (tối đa 10MB)</p>
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
            disabled={loading || !file || !apiKey.trim()}
            className="px-8 py-3 bg-gradient-to-r from-primary to-sky-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <><Loader2 className="animate-spin" size={20} /> AI đang đọc file...</>
            ) : (
              <><Sparkles size={20} /> Phân tích & Tạo Đề</>
            )}
          </button>
        </div>
      </div>
    </div>
  ,
    document.body
  );
}
