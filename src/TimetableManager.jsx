import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Plus, Save, Loader2, Check, Trash2, Edit3, Smile, Sparkles, X } from 'lucide-react';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function TimetableManager() {
  const [schedule, setSchedule] = useState({
    timeslots: [
      { id: 'ts1', time: '07:30 - 09:00' },
      { id: 'ts2', time: '09:00 - 11:30' },
      { id: 'ts3', time: '13:30 - 17:00' },
      { id: 'ts4', time: '19:00 - 22:00' }
    ],
    entries: {}
  });
  
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Edit Mode & Stickers
  const [isEditMode, setIsEditMode] = useState(false);
  const [focusedCell, setFocusedCell] = useState(null); // { dayIdx, tsId }
  const textareaRefs = useRef({});

  const stickers = [
    '📚', '✍️', '🏃‍♂️', '🎨', '🎮', '🎬', '🌟', '💡', '🍔', '☕', 
    '😴', '🧠', '🎯', '🚀', '💻', '📱', '🎧', '🎸', '⚽', '🌿',
    '📝', '🔬', '📐', '🗣️', '💼', '🏆', '🔥', '✨', '🌈', '🌻'
  ];

  useEffect(() => {
    if (!auth.currentUser) return;
    const loadSchedule = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists() && userDoc.data().timetable) {
          setSchedule(userDoc.data().timetable);
        } else {
          const saved = localStorage.getItem('studyflow_timetable');
          if (saved) {
            setSchedule(JSON.parse(saved));
          }
        }
      } catch (err) {
        console.error("Lỗi tải thời gian biểu:", err);
      } finally {
        setIsLoaded(true);
      }
    };
    loadSchedule();
  }, []);

  const days = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'];
  const dayColors = ['bg-rose-50 text-rose-600 border-rose-100', 'bg-orange-50 text-orange-600 border-orange-100', 'bg-yellow-50 text-yellow-600 border-yellow-100', 'bg-emerald-50 text-emerald-600 border-emerald-100', 'bg-sky-50 text-sky-600 border-sky-100', 'bg-violet-50 text-violet-600 border-violet-100', 'bg-pink-50 text-pink-600 border-pink-100'];

  const handleEntryChange = (dayIdx, tsId, value) => {
    const newSchedule = { ...schedule, entries: { ...schedule.entries, [`${dayIdx}-${tsId}`]: value } };
    setSchedule(newSchedule);
    localStorage.setItem('studyflow_timetable', JSON.stringify(newSchedule));
  };

  const handleTimeChange = (tsId, newTime) => {
    const newTimeslots = schedule.timeslots.map(ts => ts.id === tsId ? { ...ts, time: newTime } : ts);
    const newSchedule = { ...schedule, timeslots: newTimeslots };
    setSchedule(newSchedule);
    localStorage.setItem('studyflow_timetable', JSON.stringify(newSchedule));
  };

  const addTimeslot = () => {
    const newId = 'ts' + Date.now();
    const newTimeslots = [...schedule.timeslots, { id: newId, time: 'hh:mm - hh:mm' }];
    const newSchedule = { ...schedule, timeslots: newTimeslots };
    setSchedule(newSchedule);
    localStorage.setItem('studyflow_timetable', JSON.stringify(newSchedule));
  };

  const removeTimeslot = (tsId) => {
    const newTimeslots = schedule.timeslots.filter(ts => ts.id !== tsId);
    const newSchedule = { ...schedule, timeslots: newTimeslots };
    setSchedule(newSchedule);
    localStorage.setItem('studyflow_timetable', JSON.stringify(newSchedule));
  };

  const handleSave = async () => {
    if (!auth.currentUser) return;
    setSaving(true);
    setSaveSuccess(false);
    try {
      await setDoc(doc(db, 'users', auth.currentUser.uid), {
        timetable: schedule
      }, { merge: true });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      console.error("Lỗi lưu thời gian biểu:", err);
    } finally {
      setSaving(false);
    }
  };

  const insertSticker = (sticker) => {
    if (focusedCell) {
      const { dayIdx, tsId } = focusedCell;
      const key = `${dayIdx}-${tsId}`;
      const currentVal = schedule.entries[key] || '';
      handleEntryChange(dayIdx, tsId, currentVal + sticker);
      
      // Auto-focus back to textarea
      setTimeout(() => {
        if (textareaRefs.current[key]) {
          textareaRefs.current[key].focus();
        }
      }, 50);
    } else {
      alert("Vui lòng nhấp vào một ô trên lịch học trước khi thêm Sticker!");
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="mb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Calendar className="text-pink-400" size={32} />
            Thời gian biểu
          </h1>
          <p className="text-gray-500">Thiết kế lịch học dễ thương và thanh lịch của riêng bạn ✨</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setIsEditMode(!isEditMode)} 
            className={`flex items-center gap-2 px-5 py-2 font-bold rounded-full transition shadow-sm border ${isEditMode ? 'bg-pink-500 text-white border-pink-600 shadow-pink-200' : 'bg-pink-50 text-pink-600 border-pink-100 hover:bg-pink-100'}`}
          >
            {isEditMode ? <X size={18} /> : <Edit3 size={18} />}
            {isEditMode ? 'Đóng Chỉnh sửa' : 'Chỉnh sửa'}
          </button>
          
          <button onClick={handleSave} disabled={saving || !isLoaded} className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-bold rounded-full hover:from-sky-500 hover:to-indigo-600 transition shadow-md shadow-sky-200 disabled:opacity-70">
            {saving ? <Loader2 className="animate-spin" size={18} /> : (saveSuccess ? <Check size={18} /> : <Save size={18} />)}
            {saving ? 'Đang lưu...' : (saveSuccess ? 'Đã lưu trên Cloud' : 'Lưu dữ liệu')}
          </button>
        </div>
      </header>

      {/* Edit Mode Toolbar */}
      <div className={`transition-all duration-300 overflow-hidden ${isEditMode ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-pink-100 space-y-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <h3 className="font-bold text-gray-700 flex items-center gap-2">
              <Sparkles size={18} className="text-pink-500"/> Chế độ Thiết kế & Decor
            </h3>
            <button onClick={addTimeslot} className="flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-600 font-bold rounded-full hover:bg-sky-100 transition shadow-sm border border-sky-100 text-sm">
              <Plus size={16} /> Thêm khung giờ mới
            </button>
          </div>
          
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
              <Smile size={16} /> Nhấp vào ô lịch, sau đó chọn Sticker để trang trí:
            </p>
            <div className="flex flex-wrap gap-2 bg-gray-50 p-4 rounded-2xl border border-gray-100 max-h-40 overflow-y-auto custom-scrollbar">
              {stickers.map((st, i) => (
                <button 
                  key={i} 
                  onClick={() => insertSticker(st)}
                  className="text-2xl w-10 h-10 flex items-center justify-center hover:bg-white hover:scale-110 rounded-xl hover:shadow-sm transition-transform cursor-pointer border border-transparent hover:border-gray-200"
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-pink-50 overflow-x-auto hide-scrollbar relative">
        <div className="min-w-[800px]">
          {/* Header Row */}
          <div className="flex gap-4 mb-4">
            <div className="w-32 shrink-0"></div>
            {days.map((day, idx) => (
              <div key={day} className={`flex-1 p-3 rounded-2xl text-center font-bold border shadow-sm ${dayColors[idx]}`}>
                {day}
              </div>
            ))}
          </div>

          {/* Timeslots */}
          <div className="space-y-4">
            {!isLoaded ? (
              <div className="py-20 flex justify-center items-center">
                <Loader2 className="animate-spin text-pink-400" size={40} />
              </div>
            ) : (
              schedule.timeslots.map(ts => (
                <div key={ts.id} className="flex gap-4 items-stretch group relative">
                  <div className={`w-32 shrink-0 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 p-2 relative transition shadow-sm ${isEditMode ? 'border-pink-200 shadow-pink-100' : 'group-hover:border-pink-200'}`}>
                    <input
                      type="text"
                      value={ts.time}
                      onChange={(e) => handleTimeChange(ts.id, e.target.value)}
                      disabled={!isEditMode}
                      className={`w-full text-center text-sm font-bold text-gray-600 bg-transparent outline-none transition ${isEditMode ? 'focus:text-pink-500' : 'cursor-default'}`}
                    />
                    {isEditMode && (
                      <button 
                        onClick={() => removeTimeslot(ts.id)}
                        className="absolute -left-3 top-1/2 -translate-y-1/2 p-1.5 bg-red-100 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-200 shadow-sm"
                        title="Xóa khung giờ"
                      >
                        <Trash2 size={12} />
                      </button>
                    )}
                  </div>

                  {days.map((day, idx) => {
                    const key = `${idx}-${ts.id}`;
                    return (
                      <div key={key} className="flex-1">
                        <textarea
                          ref={el => textareaRefs.current[key] = el}
                          value={schedule.entries[key] || ''}
                          onChange={(e) => handleEntryChange(idx, ts.id, e.target.value)}
                          onFocus={() => setFocusedCell({ dayIdx: idx, tsId: ts.id })}
                          placeholder="•"
                          className={`w-full h-full min-h-[80px] p-3 text-sm text-gray-700 bg-white border border-gray-100 rounded-2xl outline-none resize-none transition shadow-sm placeholder:text-gray-200 ${
                            isEditMode ? 'hover:border-pink-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-50' : 'focus:border-gray-300 focus:ring-2 focus:ring-gray-50'
                          } ${(focusedCell?.dayIdx === idx && focusedCell?.tsId === ts.id) && isEditMode ? 'border-pink-400 ring-4 ring-pink-50' : ''}`}
                        ></textarea>
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
