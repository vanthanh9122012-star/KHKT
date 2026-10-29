import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, Layers, Play, Check, X, Search, Filter, Plus, Trash2, 
  Edit3, History, Cloud, Sparkles, Bot, Loader2, CheckCircle2, 
  RotateCcw, Calendar, Clock, ChevronRight, FileText, ArrowRight,
  Download, Eye, AlertCircle, Sparkle
} from 'lucide-react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { INITIAL_FLASHCARDS } from './data/flashcardData';

const SUBJECTS = ['Toán', 'Văn', 'Anh', 'KHTN', 'Sử', 'Địa', 'Vật lý', 'Hóa học', 'Sinh học', 'GDCD', 'Tin học', 'Công nghệ', 'Khác'];
const GRADES = ['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9', 'Tự do'];

const SUBJECT_COLORS = {
  'Tổng hợp': 'text-indigo-600 bg-indigo-50 border-indigo-200',
  'Toán': 'text-blue-600 bg-blue-50 border-blue-200',
  'Văn': 'text-pink-600 bg-pink-50 border-pink-200',
  'Anh': 'text-emerald-600 bg-emerald-50 border-emerald-200',
  'KHTN': 'text-teal-600 bg-teal-50 border-teal-200',
  'Sử': 'text-amber-600 bg-amber-50 border-amber-200',
  'Địa': 'text-orange-600 bg-orange-50 border-orange-200',
  'Vật lý': 'text-purple-600 bg-purple-50 border-purple-200',
  'Hóa học': 'text-cyan-600 bg-cyan-50 border-cyan-200',
  'Sinh học': 'text-lime-600 bg-lime-50 border-lime-200',
  'GDCD': 'text-rose-600 bg-rose-50 border-rose-200',
  'Tin học': 'text-violet-600 bg-violet-50 border-violet-200',
  'Công nghệ': 'text-yellow-600 bg-yellow-50 border-yellow-200',
  'Khác': 'text-gray-600 bg-gray-50 border-gray-200',
};

const getSubjectStyle = (subject) => SUBJECT_COLORS[subject] || 'text-sky-600 bg-sky-50 border-sky-200';

export default function FlashcardManager({ addReward, currentUser }) {
  // Xác định thông tin người dùng
  const uid = currentUser?.uid || auth.currentUser?.uid || 'guest';
  const userName = currentUser?.username || currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Học viên';
  
  // Danh sách thẻ
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSavingCloud, setIsSavingCloud] = useState(false);
  const [cloudSyncedTime, setCloudSyncedTime] = useState(null);
  const [notification, setNotification] = useState(null);

  // Tab điều hướng chính: 'study' (Ôn tập) | 'continuous' (Thêm liên tiếp) | 'batch' (Thêm hàng loạt) | 'manage' (Quản lý) | 'history' (Lịch sử chung)
  const [activeTab, setActiveTab] = useState('study');

  // Bộ lọc & Tìm kiếm
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Chế độ ôn tập
  const [dueList, setDueList] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isStudying, setIsStudying] = useState(false);

  // Thêm thẻ liên tiếp
  const [newCard, setNewCard] = useState({
    subject: 'Anh',
    grade: 'Lớp 9',
    question: '',
    answer: '',
    note: ''
  });
  const [sessionAddedCount, setSessionAddedCount] = useState(0);
  const questionInputRef = useRef(null);

  // Thêm hàng loạt (Batch Creator)
  const [batchRows, setBatchRows] = useState([
    { question: '', answer: '', subject: 'Anh', grade: 'Lớp 9' },
    { question: '', answer: '', subject: 'Anh', grade: 'Lớp 9' },
    { question: '', answer: '', subject: 'Anh', grade: 'Lớp 9' }
  ]);
  const [quickPasteText, setQuickPasteText] = useState('');
  const [showQuickPaste, setShowQuickPaste] = useState(false);

  // Modal chỉnh sửa thẻ
  const [editingCard, setEditingCard] = useState(null);

  // Modal xem lịch sử thẻ
  const [viewingHistoryCard, setViewingHistoryCard] = useState(null);

  // AI Generator
  const [isAIGeneratorOpen, setIsAIGeneratorOpen] = useState(false);
  const [aiMaterial, setAiMaterial] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Hiện thông báo toast
  const showToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  // 1. Tải Flashcards riêng biệt theo từng User
  useEffect(() => {
    const loadUserCards = async () => {
      setIsLoading(true);
      const storageKey = `studyflow_flashcards_${uid}`;
      let loaded = [];

      try {
        if (uid && uid !== 'guest') {
          // Tải từ Firebase Firestore của riêng user này
          const userDoc = await getDoc(doc(db, 'users', uid));
          if (userDoc.exists() && Array.isArray(userDoc.data().flashcards)) {
            loaded = userDoc.data().flashcards;
            setCloudSyncedTime(new Date().toLocaleTimeString('vi-VN'));
          } else {
            // Thử nạp từ LocalStorage của user này
            const localSaved = localStorage.getItem(storageKey);
            if (localSaved) {
              loaded = JSON.parse(localSaved);
            }
          }
        } else {
          const localSaved = localStorage.getItem(storageKey);
          if (localSaved) loaded = JSON.parse(localSaved);
        }
      } catch (err) {
        console.error('Lỗi khi tải flashcards người dùng:', err);
        const localSaved = localStorage.getItem(storageKey);
        if (localSaved) loaded = JSON.parse(localSaved);
      }

      // Làm sạch thẻ hợp lệ
      loaded = loaded.filter(c => c && c.question && c.question.trim() !== '');

      // Đảm bảo mỗi thẻ có cấu trúc chuẩn và trường history
      const formatted = loaded.map(c => ({
        ...c,
        interval: c.interval ?? 0,
        eFactor: c.eFactor ?? 2.5,
        nextReviewTime: c.nextReviewTime ?? Date.now(),
        mistakes: c.mistakes ?? 0,
        createdAt: c.createdAt || Date.now(),
        createdBy: c.createdBy || userName,
        history: Array.isArray(c.history) && c.history.length > 0 ? c.history : [
          {
            id: 'init_' + (c.id || Math.random()),
            action: 'Khởi tạo',
            timestamp: c.createdAt || Date.now(),
            dateFormatted: new Date(c.createdAt || Date.now()).toLocaleString('vi-VN'),
            user: c.createdBy || userName,
            changes: 'Tạo thẻ trong bộ sưu tập'
          }
        ]
      }));

      setCards(formatted);
      setIsLoading(false);
    };

    loadUserCards();
  }, [uid]);

  // 2. Đồng bộ Flashcards lên Firebase Firestore và LocalStorage
  const syncCards = async (newCards, notifyMessage = null) => {
    setCards(newCards);
    const storageKey = `studyflow_flashcards_${uid}`;
    
    // Lưu LocalStorage theo User
    try {
      localStorage.setItem(storageKey, JSON.stringify(newCards));
    } catch (e) {
      console.warn("Lỗi lưu localStorage:", e);
    }

    // Lưu Firebase Firestore nếu người dùng đã đăng nhập
    if (uid && uid !== 'guest') {
      setIsSavingCloud(true);
      try {
        await setDoc(doc(db, 'users', uid), { flashcards: newCards }, { merge: true });
        setCloudSyncedTime(new Date().toLocaleTimeString('vi-VN'));
        if (notifyMessage) {
          showToast(notifyMessage, 'success');
        }
      } catch (err) {
        console.error('Lỗi đồng bộ Firebase:', err);
        showToast('Đã lưu nội bộ (Không thể đồng bộ lên Firebase lúc này)', 'error');
      } finally {
        setIsSavingCloud(false);
      }
    } else {
      if (notifyMessage) {
        showToast(notifyMessage, 'info');
      }
    }
  };

  // 3. Nhập 80 thẻ SGK mẫu nếu người dùng muốn khởi tạo nhanh
  const handleImportSampleCards = () => {
    if (window.confirm("Bạn có muốn nhập 80 thẻ kiến thức SGK mẫu (Lớp 6-9) vào bộ sưu tập cá nhân của bạn không?")) {
      const now = Date.now();
      const sampleToAdd = INITIAL_FLASHCARDS.map((c, idx) => ({
        ...c,
        id: `sgk_${now}_${idx}`,
        interval: 0,
        eFactor: 2.5,
        nextReviewTime: now,
        mistakes: 0,
        createdAt: now,
        createdBy: 'SGK Kết nối tri thức',
        history: [
          {
            id: 'hist_' + now + '_' + idx,
            action: 'Nhập mẫu SGK',
            timestamp: now,
            dateFormatted: new Date(now).toLocaleString('vi-VN'),
            user: userName,
            changes: 'Nhập từ bộ bài học SGK mẫu'
          }
        ]
      }));

      // Lọc không trùng câu hỏi
      const existingQuestions = new Set(cards.map(c => c.question.trim().toLowerCase()));
      const uniqueSamples = sampleToAdd.filter(c => !existingQuestions.has(c.question.trim().toLowerCase()));

      const updated = [...cards, ...uniqueSamples];
      syncCards(updated, `✅ Đã nhập thành công ${uniqueSamples.length} thẻ SGK mẫu lên Firebase!`);
    }
  };

  // 4. Lọc và Tìm kiếm thẻ
  const filteredCards = cards.filter(c => {
    const matchSubject = !selectedSubject || c.subject === selectedSubject;
    const matchGrade = !selectedGrade || c.grade === selectedGrade;
    const matchSearch = !searchQuery.trim() || 
      c.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSubject && matchGrade && matchSearch;
  });

  const dueCards = filteredCards.filter(c => c.nextReviewTime <= Date.now());

  // 5. Thêm liên tiếp 1 thẻ (Giữ nguyên form, lưu ngay lên Firebase, auto focus)
  const handleAddCardContinuous = (e) => {
    if (e) e.preventDefault();
    if (!newCard.question.trim() || !newCard.answer.trim()) {
      showToast('Vui lòng nhập cả mặt trước và mặt sau của thẻ!', 'error');
      return;
    }

    const now = Date.now();
    const newId = `user_${now}_${Math.floor(Math.random() * 1000)}`;
    const cardItem = {
      id: newId,
      subject: newCard.subject,
      grade: newCard.grade,
      question: newCard.question.trim(),
      answer: newCard.answer.trim(),
      note: newCard.note?.trim() || '',
      interval: 0,
      eFactor: 2.5,
      nextReviewTime: now,
      mistakes: 0,
      createdAt: now,
      createdBy: userName,
      updatedAt: now,
      updatedBy: userName,
      history: [
        {
          id: 'hist_' + now,
          action: 'Tạo thẻ mới',
          timestamp: now,
          dateFormatted: new Date(now).toLocaleString('vi-VN'),
          user: userName,
          changes: `Thêm thẻ môn ${newCard.subject} (${newCard.grade})`
        }
      ]
    };

    const updated = [cardItem, ...cards];
    syncCards(updated, `✅ Đã lưu thẻ #${sessionAddedCount + 1} lên Firebase!`);
    
    // Tăng đếm phiên
    setSessionAddedCount(prev => prev + 1);

    // Reset nội dung mặt trước, mặt sau - giữ nguyên môn và lớp để nhập nhanh tiếp
    setNewCard(prev => ({ ...prev, question: '', answer: '', note: '' }));

    // Focus lại vào ô Mặt trước
    if (questionInputRef.current) {
      questionInputRef.current.focus();
    }
  };

  // Xử lý phím tắt Ctrl + Enter để lưu và thêm tiếp
  const handleKeyDownContinuous = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleAddCardContinuous();
    }
  };

  // 6. Thêm hàng loạt (Batch Creator)
  const handleAddBatchRow = () => {
    const lastRow = batchRows[batchRows.length - 1] || { subject: 'Anh', grade: 'Lớp 9' };
    setBatchRows([...batchRows, { question: '', answer: '', subject: lastRow.subject, grade: lastRow.grade }]);
  };

  const handleRemoveBatchRow = (index) => {
    if (batchRows.length <= 1) return;
    setBatchRows(batchRows.filter((_, idx) => idx !== index));
  };

  const handleBatchRowChange = (index, field, value) => {
    const updated = [...batchRows];
    updated[index][field] = value;
    setBatchRows(updated);
  };

  // Phân tích văn bản dán nhanh (Quick Paste: mỗi dòng dạng "Câu hỏi - Đáp án" hoặc ngăn cách bởi tab)
  const handleApplyQuickPaste = () => {
    if (!quickPasteText.trim()) return;
    const lines = quickPasteText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const parsedRows = [];

    lines.forEach(line => {
      let q = '', a = '';
      if (line.includes('\t')) {
        const parts = line.split('\t');
        q = parts[0]?.trim();
        a = parts.slice(1).join(' ')?.trim();
      } else if (line.includes(' - ')) {
        const parts = line.split(' - ');
        q = parts[0]?.trim();
        a = parts.slice(1).join(' ')?.trim();
      } else if (line.includes(':')) {
        const parts = line.split(':');
        q = parts[0]?.trim();
        a = parts.slice(1).join(':')?.trim();
      } else {
        q = line;
        a = '...';
      }

      if (q) {
        parsedRows.push({
          question: q,
          answer: a || '',
          subject: selectedSubject || 'Anh',
          grade: selectedGrade || 'Lớp 9'
        });
      }
    });

    if (parsedRows.length > 0) {
      setBatchRows(parsedRows);
      setShowQuickPaste(false);
      setQuickPasteText('');
      showToast(`Đã nhận dạng được ${parsedRows.length} dòng thẻ! Bạn có thể xem lại và bấm Lưu.`);
    }
  };

  // Lưu tất cả các thẻ trong bảng hàng loạt lên Firebase
  const handleSaveAllBatch = async () => {
    const validRows = batchRows.filter(r => r.question.trim() !== '' && r.answer.trim() !== '');
    if (validRows.length === 0) {
      showToast('Chưa có dòng thẻ hợp lệ nào có đầy đủ mặt trước và mặt sau!', 'error');
      return;
    }

    const now = Date.now();
    const newItems = validRows.map((r, idx) => ({
      id: `user_${now}_${idx}_${Math.floor(Math.random() * 1000)}`,
      subject: r.subject || 'Khác',
      grade: r.grade || 'Tự do',
      question: r.question.trim(),
      answer: r.answer.trim(),
      interval: 0,
      eFactor: 2.5,
      nextReviewTime: now,
      mistakes: 0,
      createdAt: now,
      createdBy: userName,
      updatedAt: now,
      updatedBy: userName,
      history: [
        {
          id: 'hist_' + now + '_' + idx,
          action: 'Tạo thẻ hàng loạt',
          timestamp: now,
          dateFormatted: new Date(now).toLocaleString('vi-VN'),
          user: userName,
          changes: `Tạo qua bảng nhập nhanh (${r.subject} - ${r.grade})`
        }
      ]
    }));

    const updated = [...newItems, ...cards];
    await syncCards(updated, `🎉 Đã lưu thành công ${newItems.length} thẻ mới lên Firebase!`);
    
    // Reset bảng
    setBatchRows([
      { question: '', answer: '', subject: 'Anh', grade: 'Lớp 9' },
      { question: '', answer: '', subject: 'Anh', grade: 'Lớp 9' }
    ]);
    setActiveTab('manage');
  };

  // 7. Chỉnh sửa thẻ & Lưu lịch sử thay đổi (Audit History)
  const handleSaveEditedCard = async (e) => {
    e.preventDefault();
    if (!editingCard || !editingCard.question.trim() || !editingCard.answer.trim()) return;

    const original = cards.find(c => c.id === editingCard.id);
    const now = Date.now();

    // Nhận diện các thay đổi
    const changeList = [];
    if (original) {
      if (original.question !== editingCard.question.trim()) changeList.push('Sửa mặt trước');
      if (original.answer !== editingCard.answer.trim()) changeList.push('Sửa mặt sau');
      if (original.subject !== editingCard.subject) changeList.push(`Đổi môn: ${original.subject} -> ${editingCard.subject}`);
      if (original.grade !== editingCard.grade) changeList.push(`Đổi khối: ${original.grade} -> ${editingCard.grade}`);
    }
    const changesDescription = changeList.length > 0 ? changeList.join(', ') : 'Cập nhật thông tin thẻ';

    const newHistoryEntry = {
      id: 'hist_' + now,
      action: 'Chỉnh sửa thẻ',
      timestamp: now,
      dateFormatted: new Date(now).toLocaleString('vi-VN'),
      user: userName,
      changes: changesDescription
    };

    const updated = cards.map(c => {
      if (c.id === editingCard.id) {
        return {
          ...c,
          question: editingCard.question.trim(),
          answer: editingCard.answer.trim(),
          subject: editingCard.subject,
          grade: editingCard.grade,
          note: editingCard.note?.trim() || '',
          updatedAt: now,
          updatedBy: userName,
          history: [newHistoryEntry, ...(c.history || [])]
        };
      }
      return c;
    });

    await syncCards(updated, '✅ Đã lưu cập nhật thẻ và lịch sử chỉnh sửa lên Firebase!');
    setEditingCard(null);
  };

  // 8. Xóa thẻ
  const handleDeleteCard = async (cardId) => {
    const cardToDelete = cards.find(c => c.id === cardId);
    if (!cardToDelete) return;
    if (window.confirm(`Bạn có chắc chắn muốn xóa thẻ "${cardToDelete.question}"? Hành động này sẽ được đồng bộ lên Firebase.`)) {
      const updated = cards.filter(c => c.id !== cardId);
      await syncCards(updated, '🗑️ Đã xóa thẻ và cập nhật lên Firebase!');
      if (editingCard?.id === cardId) setEditingCard(null);
      if (viewingHistoryCard?.id === cardId) setViewingHistoryCard(null);
    }
  };

  // 9. Chế độ học tập (SuperMemo SM-2)
  const startStudy = () => {
    const due = dueCards.length > 0 ? dueCards : filteredCards;
    if (due.length === 0) {
      showToast('Không có thẻ nào phù hợp để ôn tập!', 'info');
      return;
    }
    setDueList([...due].sort(() => Math.random() - 0.5));
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setIsStudying(true);
  };

  const handleAnswer = (isRemembered) => {
    const currentCard = dueList[currentCardIndex];
    if (!currentCard) return;

    let newInterval, newEFactor;
    if (isRemembered) {
      newInterval = currentCard.interval === 0 ? 1 : (currentCard.interval === 1 ? 2 : Math.ceil(currentCard.interval * currentCard.eFactor));
      newEFactor = currentCard.eFactor + 0.1;
      if (addReward) {
        addReward({ xp: 15, rubies: 1 });
      }
    } else {
      newInterval = 1;
      newEFactor = Math.max(1.3, currentCard.eFactor - 0.2);
    }

    const now = Date.now();
    const updated = cards.map(c => {
      if (c.id === currentCard.id) {
        return {
          ...c,
          interval: newInterval,
          eFactor: newEFactor,
          nextReviewTime: now + newInterval * 60 * 1000,
          mistakes: !isRemembered ? (c.mistakes || 0) + 1 : (c.mistakes || 0),
          lastReviewedAt: now
        };
      }
      return c;
    });

    syncCards(updated);

    if (currentCardIndex + 1 < dueList.length) {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      setIsStudying(false);
      showToast('🎉 Chúc mừng bạn đã hoàn thành phiên ôn tập này!', 'success');
    }
  };

  // 10. Tạo thẻ bằng AI
  const handleAIGenerate = async (e) => {
    e.preventDefault();
    if (!aiMaterial.trim()) return;

    setIsGenerating(true);
    try {
      await new Promise(r => setTimeout(r, 1600));

      const sentences = aiMaterial.split(/[.?!;\n]+/).filter(s => s.trim().length > 15);
      const generatedPairs = [];

      sentences.slice(0, 8).forEach(sentence => {
        const words = sentence.trim().split(' ');
        if (words.length >= 4) {
          const randIdx = Math.floor(Math.random() * (words.length - 2)) + 1;
          const answer = words.slice(randIdx, randIdx + 2).join(' ');
          const question = sentence.replace(answer, '___ (...) ___').trim();
          generatedPairs.push({ question, answer });
        }
      });

      if (generatedPairs.length === 0) {
        generatedPairs.push({
          question: `Nội dung cốt lõi của bài học: ${aiMaterial.slice(0, 50)}...`,
          answer: aiMaterial.slice(0, 100)
        });
      }

      const now = Date.now();
      const newAiCards = generatedPairs.map((p, idx) => ({
        id: `ai_${now}_${idx}`,
        subject: selectedSubject || 'Khác',
        grade: selectedGrade || 'Tự do',
        question: p.question,
        answer: p.answer,
        interval: 0,
        eFactor: 2.5,
        nextReviewTime: now,
        mistakes: 0,
        createdAt: now,
        createdBy: `${userName} (Trợ lý AI)`,
        history: [
          {
            id: 'hist_' + now + '_' + idx,
            action: 'Trợ lý AI trích xuất',
            timestamp: now,
            dateFormatted: new Date(now).toLocaleString('vi-VN'),
            user: `${userName} via AI`,
            changes: 'Trích xuất tự động từ tài liệu học tập'
          }
        ]
      }));

      const updated = [...newAiCards, ...cards];
      await syncCards(updated, `✨ Trợ lý AI đã trích xuất thành công ${newAiCards.length} thẻ và lưu lên Firebase!`);
      setAiMaterial('');
      setIsAIGeneratorOpen(false);
      setActiveTab('manage');
    } catch (err) {
      console.error(err);
      showToast('Có lỗi xảy ra khi tạo thẻ AI. Vui lòng thử lại!', 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  // Tổng hợp tất cả lịch sử hoạt động của người dùng
  const allHistoryEvents = [];
  cards.forEach(c => {
    if (Array.isArray(c.history)) {
      c.history.forEach(h => {
        allHistoryEvents.push({
          ...h,
          cardId: c.id,
          cardQuestion: c.question,
          cardSubject: c.subject,
          cardGrade: c.grade
        });
      });
    }
  });
  allHistoryEvents.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  // ====================== GIAO DIỆN HỌC TẬP (STUDY VIEW) ======================
  if (isStudying) {
    if (dueList.length === 0) return null;
    const currentCard = dueList[currentCardIndex];

    return (
      <div className="max-w-2xl mx-auto py-6 animate-fade-in flex flex-col h-full min-h-[550px]">
        <header className="mb-6 flex justify-between items-center bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-sky-100 shadow-sm">
          <button 
            onClick={() => setIsStudying(false)} 
            className="px-4 py-2 text-gray-600 hover:text-gray-900 font-semibold bg-gray-100 hover:bg-gray-200 rounded-xl transition flex items-center gap-1.5 text-sm"
          >
            &larr; Kết thúc ôn tập
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800">Ôn tập thẻ ghi nhớ</h1>
            <p className="text-primary font-bold text-xs mt-0.5">Thẻ {currentCardIndex + 1} / {dueList.length}</p>
          </div>
          <div className="w-24 text-right">
            <span className="text-xs bg-sky-100 text-sky-800 font-bold px-2.5 py-1 rounded-full">
              {currentCard?.grade}
            </span>
          </div>
        </header>

        {/* Thanh tiến độ */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-6 overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentCardIndex + 1) / dueList.length) * 100}%` }}
          />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center w-full perspective-1000">
          {/* Flashcard 3D */}
          <div 
            className={`relative w-full h-80 rounded-3xl transition-all duration-500 preserve-3d cursor-pointer shadow-xl ${isFlipped ? 'rotate-y-180' : ''}`}
            onClick={() => !isFlipped && setIsFlipped(true)}
          >
            {/* Mặt trước */}
            <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-white to-sky-50/50 rounded-3xl border-2 border-sky-200 flex flex-col items-center justify-center p-8 text-center select-none">
              <div className="absolute top-5 left-5 flex gap-2">
                <span className={`text-xs font-bold border px-2.5 py-1 rounded-lg ${getSubjectStyle(currentCard.subject)}`}>
                  {currentCard.subject}
                </span>
                <span className="text-xs font-bold text-gray-600 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-lg">
                  {currentCard.grade}
                </span>
              </div>
              <p className="text-sky-500 text-xs font-bold uppercase tracking-wider mb-3">Mặt trước • Câu hỏi / Từ vựng</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-snug px-4">
                {currentCard.question}
              </h2>
              {currentCard.note && (
                <p className="mt-4 text-xs text-gray-500 italic bg-white/80 px-3 py-1.5 rounded-lg border border-gray-100">
                  💡 Ghi chú: {currentCard.note}
                </p>
              )}
              {!isFlipped && (
                <div className="absolute bottom-6 flex items-center gap-1.5 text-sky-600 text-sm font-semibold animate-pulse bg-sky-100/70 px-4 py-1.5 rounded-full">
                  <Eye size={16} /> Nhấp để lật xem mặt sau
                </div>
              )}
            </div>

            {/* Mặt sau */}
            <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-sky-50 to-indigo-50 rounded-3xl border-2 border-sky-300 flex flex-col items-center justify-center p-8 text-center rotate-y-180 select-none">
              <div className="absolute top-5 left-5">
                <span className="text-xs font-bold text-sky-700 bg-sky-200/60 px-2.5 py-1 rounded-lg">
                  Mặt sau • Đáp án / Định nghĩa
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-sky-950 leading-snug px-4">
                {currentCard.answer}
              </h2>
              <div className="absolute bottom-6 text-xs text-gray-500">
                Lặp lại theo thuật toán Spaced Repetition SM-2
              </div>
            </div>
          </div>

          {/* Nút đánh giá sau khi lật */}
          <div className={`mt-8 flex gap-4 w-full max-w-md transition-all duration-300 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <button 
              onClick={() => handleAnswer(false)}
              className="flex-1 py-4 bg-white border-2 border-rose-200 text-rose-600 rounded-2xl font-bold hover:bg-rose-50 hover:border-rose-300 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <X size={20} /> Chưa nhớ (Lặp lại)
            </button>
            <button 
              onClick={() => handleAnswer(true)}
              className="flex-1 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-sky-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-200 hover:-translate-y-0.5"
            >
              <Check size={20} /> Đã nhớ tốt (+15 XP)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ====================== MÀN HÌNH CHÍNH FLASHCARD ======================
  return (
    <div className="space-y-6 animate-fade-in pb-16">
      {/* Toast Notification */}
      {notification && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-slide-in text-sm font-bold text-white transition-all ${
          notification.type === 'error' ? 'bg-red-500 shadow-red-200' : 
          notification.type === 'info' ? 'bg-sky-600 shadow-sky-200' : 'bg-emerald-600 shadow-emerald-200'
        }`}>
          {notification.type === 'error' ? <AlertCircle size={20} /> : <CheckCircle2 size={20} />}
          <span>{notification.message}</span>
        </div>
      )}

      {/* Header chính */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-sky-100 shadow-sm">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-sky-200">
              <Layers size={26} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 flex items-center gap-2">
                Bộ Sưu Tập Flashcard
              </h1>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mt-0.5">
                <span>Không gian của: <strong className="text-sky-700">{userName}</strong></span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Cloud size={14} className={isSavingCloud ? 'text-amber-500 animate-spin' : 'text-emerald-500'} />
                  {isSavingCloud ? 'Đang lưu lên Firebase...' : cloudSyncedTime ? `Đã đồng bộ (${cloudSyncedTime})` : 'Firebase Cloud'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thanh công cụ hành động nhanh */}
        <div className="flex flex-wrap items-center gap-2">
          {cards.length === 0 && (
            <button
              onClick={handleImportSampleCards}
              className="px-4 py-2.5 bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 rounded-xl text-sm font-bold transition flex items-center gap-2 shadow-sm"
              title="Nhập 80 thẻ SGK chuẩn có sẵn"
            >
              <Download size={16} /> Nhập 80 thẻ SGK mẫu
            </button>
          )}

          <button 
            onClick={() => setIsAIGeneratorOpen(!isAIGeneratorOpen)}
            className={`px-4 py-2.5 rounded-xl border text-sm font-bold transition flex items-center gap-2 shadow-sm ${
              isAIGeneratorOpen 
                ? 'bg-purple-100 text-purple-700 border-purple-300' 
                : 'bg-white text-purple-600 border-purple-200 hover:bg-purple-50'
            }`}
          >
            <Bot size={18} />
            <span>{isAIGeneratorOpen ? 'Đóng AI' : 'Tạo bằng AI'}</span>
          </button>

          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2.5 rounded-xl border text-sm font-bold transition flex items-center gap-2 shadow-sm ${
              showFilters || selectedSubject || selectedGrade
                ? 'bg-sky-500 text-white border-sky-500' 
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Filter size={18} />
            <span>Bộ lọc {(selectedSubject || selectedGrade) ? '(Đang bật)' : ''}</span>
          </button>
        </div>
      </header>

      {/* Tabs điều hướng các chế độ */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-3">
        <button
          onClick={() => setActiveTab('study')}
          className={`px-5 py-2.5 rounded-2xl text-sm font-extrabold transition-all flex items-center gap-2 ${
            activeTab === 'study'
              ? 'bg-primary text-white shadow-md shadow-sky-200 scale-105'
              : 'bg-white text-gray-600 hover:bg-sky-50 border border-gray-100'
          }`}
        >
          <Play size={16} /> Ôn tập ({dueCards.length} thẻ đến hạn)
        </button>

        <button
          onClick={() => setActiveTab('continuous')}
          className={`px-5 py-2.5 rounded-2xl text-sm font-extrabold transition-all flex items-center gap-2 ${
            activeTab === 'continuous'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200 scale-105'
              : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-100'
          }`}
        >
          <Plus size={16} /> Thêm thẻ liên tiếp
          {sessionAddedCount > 0 && (
            <span className="bg-white text-emerald-700 px-2 py-0.5 rounded-full text-xs font-black">
              +{sessionAddedCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('batch')}
          className={`px-5 py-2.5 rounded-2xl text-sm font-extrabold transition-all flex items-center gap-2 ${
            activeTab === 'batch'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105'
              : 'bg-white text-gray-600 hover:bg-indigo-50 border border-gray-100'
          }`}
        >
          <FileText size={16} /> Nhập hàng loạt (Batch)
        </button>

        <button
          onClick={() => setActiveTab('manage')}
          className={`px-5 py-2.5 rounded-2xl text-sm font-extrabold transition-all flex items-center gap-2 ${
            activeTab === 'manage'
              ? 'bg-sky-700 text-white shadow-md shadow-sky-300 scale-105'
              : 'bg-white text-gray-600 hover:bg-sky-50 border border-gray-100'
          }`}
        >
          <BookOpen size={16} /> Danh sách thẻ ({cards.length})
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`px-5 py-2.5 rounded-2xl text-sm font-extrabold transition-all flex items-center gap-2 ${
            activeTab === 'history'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-200 scale-105'
              : 'bg-white text-gray-600 hover:bg-amber-50 border border-gray-100'
          }`}
        >
          <History size={16} /> Lịch sử chỉnh sửa
        </button>
      </div>

      {/* Khung trợ lý AI Generator */}
      {isAIGeneratorOpen && (
        <form onSubmit={handleAIGenerate} className="bg-gradient-to-br from-purple-50 via-indigo-50 to-sky-50 rounded-3xl p-6 shadow-md border-2 border-indigo-200 animate-fade-in">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-extrabold text-indigo-950 flex items-center gap-2">
              <Bot className="text-indigo-600" size={24} /> Trợ lý AI tạo Flashcard tự động
            </h2>
            <button 
              type="button" 
              onClick={() => setIsAIGeneratorOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-indigo-800/80 text-sm mb-4">
            Dán nội dung bài học hoặc đoạn văn bạn muốn ghi nhớ. AI sẽ tự động phân tích và tạo thành các cặp thẻ hỏi - đáp lưu thẳng lên Firebase của bạn.
          </p>
          <textarea 
            value={aiMaterial}
            onChange={(e) => setAiMaterial(e.target.value)}
            placeholder="Ví dụ: Định luật bảo toàn năng lượng: Năng lượng không tự nhiên sinh ra cũng không tự nhiên mất đi, nó chỉ chuyển hoá từ dạng này sang dạng khác..."
            className="w-full p-4 bg-white/90 border border-indigo-200 rounded-2xl h-36 resize-none focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800 placeholder:text-gray-400 font-medium"
            required
          />
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-indigo-600 font-semibold">Tự động gắn môn học và khối lớp đang chọn</span>
            <button 
              type="submit"
              disabled={isGenerating || !aiMaterial.trim()}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold rounded-xl shadow-lg shadow-indigo-200 hover:opacity-95 transition flex items-center gap-2 disabled:opacity-50"
            >
              {isGenerating ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
              {isGenerating ? 'AI đang phân tích & lưu lên Firebase...' : 'Tạo Flashcard & Lưu lên Firebase'}
            </button>
          </div>
        </form>
      )}

      {/* Khung Bộ Lọc & Tìm Kiếm mở rộng */}
      {showFilters && (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-sky-100 space-y-5 animate-fade-in">
          {/* Ô tìm kiếm từ khóa */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm thẻ theo câu hỏi, định nghĩa, từ vựng..."
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Lọc theo Khối lớp */}
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Khối lớp:</span>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setSelectedGrade(null)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  !selectedGrade ? 'bg-pink-500 text-white shadow-sm' : 'bg-pink-50 text-pink-700 hover:bg-pink-100'
                }`}
              >
                Tất cả các lớp
              </button>
              {GRADES.map(grade => (
                <button 
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                    selectedGrade === grade ? 'bg-pink-500 text-white shadow-sm' : 'bg-pink-50 text-pink-700 hover:bg-pink-100'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>

          {/* Lọc theo Phân môn */}
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Phân môn:</span>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setSelectedSubject(null)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  !selectedSubject ? 'bg-primary text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tất cả môn ({cards.length})
              </button>
              {SUBJECTS.map(sub => {
                const count = cards.filter(c => c.subject === sub).length;
                if (count === 0 && sub !== 'Anh' && sub !== 'Toán') return null;
                return (
                  <button 
                    key={sub}
                    onClick={() => setSelectedSubject(sub)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                      selectedSubject === sub ? 'bg-primary text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {sub} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ====================== TAB 1: CHẾ ĐỘ ÔN TẬP (STUDY MODE DASHBOARD) ====================== */}
      {activeTab === 'study' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-sky-50 via-cyan-50 to-indigo-50 rounded-3xl p-8 border border-sky-100 shadow-sm text-center relative overflow-hidden">
            <div className="w-16 h-16 bg-white text-sky-500 rounded-3xl flex items-center justify-center mx-auto shadow-md mb-4">
              <Layers size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
              {selectedSubject ? `${selectedSubject} - ` : 'Tất cả môn - '}
              {selectedGrade ? selectedGrade : 'Tất cả lớp'}
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              Bạn đang có <strong className="text-primary text-xl font-black">{dueCards.length}</strong> thẻ đến hạn ôn tập hôm nay dựa theo phương pháp giãn cách Spaced Repetition.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {dueCards.length > 0 ? (
                <button 
                  onClick={startStudy}
                  className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-lg shadow-xl shadow-sky-300 hover:bg-sky-600 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Play size={22} /> Bắt đầu ôn tập ({dueCards.length} thẻ)
                </button>
              ) : filteredCards.length > 0 ? (
                <button 
                  onClick={startStudy}
                  className="px-6 py-3.5 bg-sky-100 text-sky-800 hover:bg-sky-200 rounded-2xl font-bold transition flex items-center gap-2"
                >
                  <RotateCcw size={18} /> Ôn tập lại toàn bộ ({filteredCards.length} thẻ)
                </button>
              ) : (
                <button
                  onClick={() => setActiveTab('continuous')}
                  className="px-6 py-3.5 bg-emerald-600 text-white rounded-2xl font-bold shadow-md hover:bg-emerald-700 transition flex items-center gap-2"
                >
                  <Plus size={18} /> Tự tạo thẻ flashcard đầu tiên ngay!
                </button>
              )}
            </div>

            {/* Thống kê nhanh */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-sky-200/50 text-left">
              <div className="bg-white/80 p-4 rounded-2xl border border-sky-100">
                <span className="text-xs text-gray-500 font-bold block">Tổng thẻ cá nhân</span>
                <span className="text-2xl font-black text-gray-800">{cards.length}</span>
              </div>
              <div className="bg-white/80 p-4 rounded-2xl border border-sky-100">
                <span className="text-xs text-amber-600 font-bold block">Cần ôn hôm nay</span>
                <span className="text-2xl font-black text-amber-600">{dueCards.length}</span>
              </div>
              <div className="bg-white/80 p-4 rounded-2xl border border-sky-100">
                <span className="text-xs text-emerald-600 font-bold block">Đã ghi nhớ tốt</span>
                <span className="text-2xl font-black text-emerald-600">{cards.filter(c => c.interval > 1).length}</span>
              </div>
              <div className="bg-white/80 p-4 rounded-2xl border border-sky-100">
                <span className="text-xs text-indigo-600 font-bold block">Đồng bộ Firebase</span>
                <span className="text-xs font-bold text-indigo-600 flex items-center gap-1 mt-1">
                  <CheckCircle2 size={16} /> Tài khoản: {userName}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================== TAB 2: THÊM LIÊN TIẾP NHIỀU THẺ (CONTINUOUS FAST ADD) ====================== */}
      {activeTab === 'continuous' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-sky-100 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-gray-100">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
                <Plus className="text-emerald-600" size={26} /> Thêm Thẻ Liên Tiếp (Tự động lưu Firebase)
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Bấm phím tắt <kbd className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded font-mono text-xs font-bold text-gray-700">Ctrl + Enter</kbd> để lưu ngay thẻ hiện tại lên Firebase và tiếp tục gõ thẻ tiếp theo mà không cần chạm chuột!
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-2xl text-sm font-bold flex items-center gap-2">
                <span>Đã thêm phiên này:</span>
                <span className="text-lg font-black text-emerald-800">{sessionAddedCount}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleAddCardContinuous} onKeyDown={handleKeyDownContinuous} className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                  Phân môn
                </label>
                <select 
                  value={newCard.subject}
                  onChange={(e) => setNewCard({ ...newCard, subject: e.target.value })}
                  className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl font-bold text-gray-800 focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                  Khối lớp
                </label>
                <select 
                  value={newCard.grade}
                  onChange={(e) => setNewCard({ ...newCard, grade: e.target.value })}
                  className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl font-bold text-gray-800 focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mặt trước */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-sky-700 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span> Mặt trước (Câu hỏi / Từ vựng / Thuật ngữ) *
                </label>
                <textarea 
                  ref={questionInputRef}
                  value={newCard.question}
                  onChange={(e) => setNewCard({ ...newCard, question: e.target.value })}
                  placeholder="Ví dụ: Công thức tính diện tích hình thang là gì?"
                  className="w-full p-4 bg-sky-50/40 border-2 border-sky-200 rounded-2xl h-36 resize-none focus:ring-2 focus:ring-sky-500 outline-none text-gray-800 placeholder:text-gray-400 font-medium"
                  required
                />
              </div>

              {/* Mặt sau */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Mặt sau (Đáp án / Định nghĩa / Giải thích) *
                </label>
                <textarea 
                  value={newCard.answer}
                  onChange={(e) => setNewCard({ ...newCard, answer: e.target.value })}
                  placeholder="Ví dụ: S = (a + b) * h / 2"
                  className="w-full p-4 bg-emerald-50/40 border-2 border-emerald-200 rounded-2xl h-36 resize-none focus:ring-2 focus:ring-emerald-500 outline-none text-gray-800 placeholder:text-gray-400 font-medium"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                Ghi chú thêm (Tùy chọn)
              </label>
              <input 
                type="text"
                value={newCard.note}
                onChange={(e) => setNewCard({ ...newCard, note: e.target.value })}
                placeholder="Ví dụ: Ghi nhớ mẹo tính nhanh..."
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            {/* Các nút lưu */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-500 flex items-center gap-1.5">
                <Cloud size={16} className="text-sky-500" />
                Mỗi khi bấm lưu, thẻ sẽ được đồng bộ ngay tức thì lên Firebase tài khoản của bạn.
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button 
                  type="button"
                  onClick={() => setActiveTab('manage')}
                  className="px-5 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold transition text-sm flex-1 sm:flex-none text-center"
                >
                  Xem danh sách ({cards.length})
                </button>

                <button 
                  type="submit"
                  className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl shadow-lg shadow-emerald-200 hover:-translate-y-0.5 transition flex items-center justify-center gap-2 flex-1 sm:flex-none"
                >
                  <Plus size={20} />
                  <span>Lưu & Thêm tiếp (Ctrl+Enter)</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* ====================== TAB 3: THÊM HÀNG LOẠT (BATCH CREATOR) ====================== */}
      {activeTab === 'batch' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-sky-100 animate-fade-in space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-gray-100">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
                <FileText className="text-indigo-600" size={26} /> Nhập Thẻ Hàng Loạt (Bảng Nhập Nhanh)
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Điền nhiều thẻ trên cùng một bảng hoặc dán danh sách từ vựng/kiến thức để lưu tất cả chỉ trong 1 lần bấm!
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowQuickPaste(!showQuickPaste)}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
              >
                <Sparkle size={16} /> {showQuickPaste ? 'Đóng Dán Nhanh' : 'Dán nhanh từ văn bản'}
              </button>
            </div>
          </div>

          {/* Hộp dán nhanh từ văn bản */}
          {showQuickPaste && (
            <div className="bg-indigo-50/70 p-5 rounded-2xl border border-indigo-200 space-y-3 animate-fade-in">
              <h3 className="text-sm font-extrabold text-indigo-900">
                Nhập danh sách theo dòng (Định dạng: Mặt trước - Mặt sau)
              </h3>
              <p className="text-xs text-indigo-700/80">
                Mỗi dòng là một thẻ. Phân tách câu hỏi và câu trả lời bằng dấu gạch nối ` - ` hoặc phím Tab.
              </p>
              <textarea 
                value={quickPasteText}
                onChange={(e) => setQuickPasteText(e.target.value)}
                placeholder={"Apple - Quả táo\nBanana - Quả chuối\nS = v * t - Công thức tính quãng đường"}
                className="w-full p-4 bg-white border border-indigo-200 rounded-xl h-32 resize-none text-sm font-mono focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <div className="flex justify-end gap-2">
                <button 
                  onClick={() => setShowQuickPaste(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg text-xs font-bold"
                >
                  Hủy
                </button>
                <button 
                  onClick={handleApplyQuickPaste}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold shadow-md shadow-indigo-200"
                >
                  Phân tích thành các dòng thẻ
                </button>
              </div>
            </div>
          )}

          {/* Bảng nhập hàng loạt */}
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                    <th className="py-3 px-2 w-10">STT</th>
                    <th className="py-3 px-3 w-1/3">Mặt trước (Câu hỏi / Từ vựng) *</th>
                    <th className="py-3 px-3 w-1/3">Mặt sau (Đáp án / Định nghĩa) *</th>
                    <th className="py-3 px-2 w-28">Môn</th>
                    <th className="py-3 px-2 w-28">Lớp</th>
                    <th className="py-3 px-2 w-12 text-center">Xóa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {batchRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3 px-2 text-xs font-bold text-gray-400 text-center">{idx + 1}</td>
                      <td className="py-3 px-3">
                        <input 
                          type="text"
                          value={row.question}
                          onChange={(e) => handleBatchRowChange(idx, 'question', e.target.value)}
                          placeholder="Mặt trước..."
                          className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-indigo-400 outline-none"
                        />
                      </td>
                      <td className="py-3 px-3">
                        <input 
                          type="text"
                          value={row.answer}
                          onChange={(e) => handleBatchRowChange(idx, 'answer', e.target.value)}
                          placeholder="Mặt sau..."
                          className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-indigo-400 outline-none"
                        />
                      </td>
                      <td className="py-3 px-2">
                        <select 
                          value={row.subject}
                          onChange={(e) => handleBatchRowChange(idx, 'subject', e.target.value)}
                          className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 outline-none"
                        >
                          {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                      <td className="py-3 px-2">
                        <select 
                          value={row.grade}
                          onChange={(e) => handleBatchRowChange(idx, 'grade', e.target.value)}
                          className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 outline-none"
                        >
                          {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </td>
                      <td className="py-3 px-2 text-center">
                        <button 
                          onClick={() => handleRemoveBatchRow(idx)}
                          disabled={batchRows.length <= 1}
                          className="p-2 text-gray-400 hover:text-red-500 rounded-lg transition disabled:opacity-30"
                          title="Xóa dòng này"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-100">
              <button 
                type="button"
                onClick={handleAddBatchRow}
                className="px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl font-bold text-sm transition flex items-center gap-2 border border-indigo-200"
              >
                <Plus size={18} /> Thêm dòng mới
              </button>

              <button 
                type="button"
                onClick={handleSaveAllBatch}
                className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl shadow-lg shadow-indigo-200 hover:-translate-y-0.5 transition flex items-center gap-2"
              >
                <Cloud size={20} />
                <span>Lưu tất cả {batchRows.filter(r => r.question.trim()).length} thẻ lên Firebase</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====================== TAB 4: DANH SÁCH & QUẢN LÝ THẺ (MANAGE MODE) ====================== */}
      {activeTab === 'manage' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl border border-sky-100 shadow-sm">
            <div>
              <h2 className="text-xl font-extrabold text-gray-800">
                Thư Viện Thẻ Của Bạn ({filteredCards.length} / {cards.length} thẻ)
              </h2>
              <p className="text-gray-500 text-xs mt-1">
                Nhấp chuột vào bất kỳ thẻ nào để lật xem đáp án, bấm Chỉnh sửa để sửa nội dung và lưu lịch sử.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveTab('continuous')}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-200 transition flex items-center gap-2"
              >
                <Plus size={16} /> Thêm thẻ mới
              </button>
            </div>
          </div>

          {filteredCards.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm space-y-4">
              <Layers size={48} className="mx-auto text-gray-300" />
              <h3 className="text-lg font-bold text-gray-700">Chưa tìm thấy thẻ nào phù hợp</h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Bạn có thể tự thêm thẻ ghi nhớ hoặc nhấn nút nạp 80 thẻ SGK mẫu để bắt đầu học ngay.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button 
                  onClick={() => setActiveTab('continuous')}
                  className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-md"
                >
                  Tạo thẻ ngay
                </button>
                <button 
                  onClick={handleImportSampleCards}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold text-sm"
                >
                  Nhập 80 thẻ SGK mẫu
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCards.map(card => (
                <div 
                  key={card.id}
                  className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-sky-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[11px] font-bold border px-2 py-0.5 rounded-md ${getSubjectStyle(card.subject)}`}>
                          {card.subject}
                        </span>
                        <span className="text-[11px] font-bold text-gray-600 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-md">
                          {card.grade}
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-400 font-medium">
                        {card.interval > 0 ? `Nhớ ${card.interval}d` : 'Chưa thuộc'}
                      </span>
                    </div>

                    {/* Nội dung câu hỏi */}
                    <div className="mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block mb-1">Mặt trước:</span>
                      <p className="text-gray-800 font-bold text-sm line-clamp-3">
                        {card.question}
                      </p>
                    </div>

                    {/* Nội dung đáp án */}
                    <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-100 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block mb-1">Mặt sau:</span>
                      <p className="text-sky-950 text-xs font-semibold line-clamp-3">
                        {card.answer}
                      </p>
                    </div>
                  </div>

                  {/* Thanh công cụ quản lý thẻ */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <button 
                      onClick={() => setViewingHistoryCard(card)}
                      className="text-amber-600 hover:text-amber-700 font-bold flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-amber-50 transition"
                      title="Xem lịch sử chỉnh sửa thẻ này"
                    >
                      <History size={14} /> Lịch sử ({card.history?.length || 1})
                    </button>

                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => setEditingCard({ ...card })}
                        className="p-1.5 text-gray-500 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition"
                        title="Chỉnh sửa nội dung thẻ"
                      >
                        <Edit3 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDeleteCard(card.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                        title="Xóa thẻ này"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ====================== TAB 5: LỊCH SỬ CHỈNH SỬA TOÀN BỘ (GLOBAL AUDIT LOG) ====================== */}
      {activeTab === 'history' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-sky-100 animate-fade-in space-y-6">
          <div className="flex justify-between items-center pb-6 border-b border-gray-100">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
                <History className="text-amber-600" size={26} /> Lịch Sử Cập Nhật & Chỉnh Sửa Flashcard
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Ghi nhận mọi thao tác thêm mới, sửa đổi, cập nhật thẻ của bạn trên hệ thống Firebase.
              </p>
            </div>
          </div>

          {allHistoryEvents.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-sm">
              Chưa có lịch sử thao tác nào được ghi nhận.
            </div>
          ) : (
            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gray-200">
              {allHistoryEvents.slice(0, 30).map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Điểm mốc trên dòng thời gian */}
                  <div className="absolute -left-[19px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-amber-500 group-hover:scale-125 transition-transform" />

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200/70 hover:border-amber-300 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 rounded-md text-xs font-black">
                          {item.action || 'Cập nhật'}
                        </span>
                        <span className="text-xs font-bold text-gray-700">
                          bởi <strong className="text-sky-700">{item.user || userName}</strong>
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                        <Clock size={13} /> {item.dateFormatted || new Date(item.timestamp).toLocaleString('vi-VN')}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 font-semibold mb-2">
                      Chi tiết: <span className="text-gray-800 font-bold">{item.changes}</span>
                    </p>

                    <div className="text-xs bg-white p-2.5 rounded-xl border border-gray-100 text-gray-600 line-clamp-1">
                      Thẻ: <strong className="text-gray-800 font-medium">{item.cardQuestion}</strong> ({item.cardSubject} - {item.cardGrade})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ====================== MODAL CHỈNH SỬA THẺ ====================== */}
      {editingCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <h3 className="text-xl font-extrabold text-gray-800 flex items-center gap-2">
                <Edit3 className="text-sky-600" size={22} /> Chỉnh Sửa Flashcard
              </h3>
              <button 
                onClick={() => setEditingCard(null)}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-xl hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveEditedCard} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Môn học</label>
                  <select 
                    value={editingCard.subject}
                    onChange={(e) => setEditingCard({ ...editingCard, subject: e.target.value })}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl font-bold text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Khối lớp</label>
                  <select 
                    value={editingCard.grade}
                    onChange={(e) => setEditingCard({ ...editingCard, grade: e.target.value })}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl font-bold text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-sky-700 uppercase mb-1">Mặt trước (Câu hỏi)</label>
                <textarea 
                  value={editingCard.question}
                  onChange={(e) => setEditingCard({ ...editingCard, question: e.target.value })}
                  className="w-full p-4 bg-sky-50/40 border border-sky-200 rounded-xl h-28 resize-none font-medium text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-emerald-700 uppercase mb-1">Mặt sau (Đáp án)</label>
                <textarea 
                  value={editingCard.answer}
                  onChange={(e) => setEditingCard({ ...editingCard, answer: e.target.value })}
                  className="w-full p-4 bg-emerald-50/40 border border-emerald-200 rounded-xl h-28 resize-none font-medium text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Ghi chú thêm</label>
                <input 
                  type="text"
                  value={editingCard.note || ''}
                  onChange={(e) => setEditingCard({ ...editingCard, note: e.target.value })}
                  placeholder="Ghi chú thêm..."
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <button 
                  type="button"
                  onClick={() => handleDeleteCard(editingCard.id)}
                  className="px-4 py-2.5 text-red-600 hover:bg-red-50 rounded-xl text-sm font-bold transition flex items-center gap-1.5"
                >
                  <Trash2 size={16} /> Xóa thẻ này
                </button>

                <div className="flex gap-2">
                  <button 
                    type="button"
                    onClick={() => setEditingCard(null)}
                    className="px-5 py-2.5 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-bold transition"
                  >
                    Hủy
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2.5 bg-primary text-white hover:bg-sky-600 rounded-xl text-sm font-extrabold shadow-md shadow-sky-200 transition flex items-center gap-2"
                  >
                    <Cloud size={16} /> Lưu lên Firebase
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ====================== MODAL XEM LỊCH SỬ TỪNG THẺ ====================== */}
      {viewingHistoryCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-lg p-6 md:p-8 space-y-5 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-extrabold text-gray-800 flex items-center gap-2">
                  <History className="text-amber-600" size={22} /> Lịch Sử Thay Đổi Thẻ
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">Mã thẻ: {viewingHistoryCard.id}</p>
              </div>
              <button 
                onClick={() => setViewingHistoryCard(null)}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-xl hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Xem nhanh nội dung thẻ */}
            <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700">Mặt trước:</span>
              <p className="text-sm font-bold text-gray-800">{viewingHistoryCard.question}</p>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 block pt-1">Mặt sau:</span>
              <p className="text-xs font-semibold text-sky-950">{viewingHistoryCard.answer}</p>
            </div>

            {/* Dòng thời gian sửa đổi */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Nhật ký chỉnh sửa ({viewingHistoryCard.history?.length || 1} lần):
              </h4>

              {Array.isArray(viewingHistoryCard.history) && viewingHistoryCard.history.length > 0 ? (
                <div className="space-y-3">
                  {viewingHistoryCard.history.map((h, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-200/80 text-xs space-y-1">
                      <div className="flex justify-between items-center font-bold">
                        <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          {h.action || 'Chỉnh sửa'}
                        </span>
                        <span className="text-gray-400 font-normal">
                          {h.dateFormatted || new Date(h.timestamp).toLocaleString('vi-VN')}
                        </span>
                      </div>
                      <p className="text-gray-700 pt-1">
                        Chi tiết: <strong>{h.changes}</strong>
                      </p>
                      <p className="text-gray-400 text-[11px]">
                        Thực hiện bởi: {h.user || userName}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-xs text-gray-400 text-center py-4">Chưa có bản ghi lịch sử</div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button 
                onClick={() => setViewingHistoryCard(null)}
                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
