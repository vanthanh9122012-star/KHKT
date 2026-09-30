import React, { useState, useEffect } from 'react';
import { RotateCcw, Pause, Play, Edit3, Check, X } from 'lucide-react';

export default function PomodoroFocus() {
  const [initialTime, setInitialTime] = useState(25 * 60);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editMinutes, setEditMinutes] = useState(25);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft <= 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  // Calculate progress based on the initial time set by the user
  const progress = ((initialTime - timeLeft) / initialTime) * 100;

  const handleSaveEdit = () => {
    const newTime = Math.max(1, editMinutes) * 60; // Minimum 1 minute
    setInitialTime(newTime);
    setTimeLeft(newTime);
    setIsRunning(false);
    setIsEditing(false);
  };

  const startBreak = () => {
    setIsRunning(false);
    setInitialTime(5 * 60);
    setTimeLeft(5 * 60);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center animate-fade-in pb-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Phiên học tập trung (Pomodoro)</h2>
      <p className="text-gray-500 mb-8">Loại bỏ xao nhãng, tối đa năng suất</p>

      {isEditing ? (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-sky-100 flex flex-col items-center gap-4 mb-8">
          <label className="text-sm font-bold text-gray-600">Nhập thời gian (phút):</label>
          <input 
            type="number" 
            min="1" 
            max="120"
            value={editMinutes}
            onChange={(e) => setEditMinutes(parseInt(e.target.value) || 0)}
            className="w-24 text-center text-3xl font-bold p-2 border-2 border-sky-200 rounded-xl outline-none focus:border-sky-500 text-gray-800"
          />
          <div className="flex gap-2">
            <button 
              onClick={() => setIsEditing(false)} 
              className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
            >
              <X size={20} />
            </button>
            <button 
              onClick={handleSaveEdit} 
              className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition shadow-md shadow-sky-200"
            >
              <Check size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-72 h-72 mb-8 group">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#e0f2fe" strokeWidth="4" />
            <circle 
              cx="50" cy="50" r="45" 
              fill="none" 
              stroke="#0ea5e9" 
              strokeWidth="4" 
              strokeDasharray="283" 
              strokeDashoffset={isNaN(progress) ? 0 : 283 - (283 * progress / 100)} 
              strokeLinecap="round"
              className="transition-all duration-1000 ease-linear"
            />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-gray-800 tracking-tight">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
            <span className="text-sm text-gray-400 mt-2">Thời gian còn lại</span>
          </div>
        </div>
      )}

      {!isEditing && (
        <button 
          onClick={() => { setIsEditing(true); setEditMinutes(Math.floor(initialTime / 60)); }}
          className="flex items-center gap-2 mb-8 px-4 py-2 bg-sky-50 text-sky-600 font-bold rounded-full hover:bg-sky-100 transition shadow-sm border border-sky-100 text-sm"
        >
          <Edit3 size={16} /> Chỉnh sửa thời gian
        </button>
      )}

      <div className="flex items-center gap-6">
        <button 
          onClick={handleReset}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition shadow-sm"
          title="Làm mới lại bộ đếm"
        >
          <RotateCcw size={20} />
        </button>
        <button 
          onClick={() => setIsRunning(!isRunning)}
          disabled={isEditing}
          className={`w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white transition shadow-lg transform ${isEditing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-700 shadow-sky-300 hover:scale-105'}`}
        >
          {isRunning ? <Pause size={28} /> : <Play size={28} />}
        </button>
        <button 
          onClick={startBreak}
          disabled={isEditing}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition shadow-sm font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Nghỉ
        </button>
      </div>
    </div>
  );
}
