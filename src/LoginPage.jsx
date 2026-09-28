import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { Compass, Mail, Lock, LogIn, AlertCircle, Loader2, CheckSquare, Square } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Tự động điền nếu đã lưu trước đó
    const savedEmail = localStorage.getItem('studyflow_saved_email');
    const savedPassword = localStorage.getItem('studyflow_saved_password');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(atob(savedPassword)); // Giải mã mật khẩu cơ bản
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      // Xử lý ghi nhớ mật khẩu
      if (rememberMe) {
        localStorage.setItem('studyflow_saved_email', email);
        localStorage.setItem('studyflow_saved_password', btoa(password)); // Mã hóa cơ bản
      } else {
        localStorage.removeItem('studyflow_saved_email');
        localStorage.removeItem('studyflow_saved_password');
      }
      
      // Khi đăng nhập thành công, Firebase Auth onAuthStateChanged ở App.jsx sẽ tự động chuyển trang
    } catch (err) {
      console.error("Lỗi đăng nhập:", err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('Email hoặc mật khẩu không chính xác.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Định dạng email không hợp lệ.');
      } else {
        setError('Đã xảy ra lỗi khi đăng nhập. Vui lòng kiểm tra lại.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-indigo-100 p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-sky-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/50 relative z-10">
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-200 mb-6 transform -rotate-6">
            <Compass className="text-white" size={40} />
          </div>
          <h1 className="text-3xl font-black text-gray-800 text-center">Study<span className="text-sky-600">Flow</span></h1>
          <p className="text-gray-500 text-sm mt-2 text-center font-medium">Nền tảng học tập thông minh</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 animate-fade-in">
            <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email đăng nhập</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-sky-500" />
              </div>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-12 pr-4 py-3.5 bg-sky-50/50 border border-sky-100 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all font-medium"
                placeholder="ví dụ: hocsinh@gmail.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Mật khẩu</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-sky-500" />
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-12 pr-4 py-3.5 bg-sky-50/50 border border-sky-100 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all font-medium"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center mt-2 pl-1 cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>
            {rememberMe ? (
              <CheckSquare className="text-sky-500 mr-2" size={20} />
            ) : (
              <Square className="text-gray-400 mr-2" size={20} />
            )}
            <span className="text-sm font-medium text-gray-600 select-none">Ghi nhớ tài khoản & mật khẩu</span>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-sky-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <LogIn size={20} /> Đăng nhập hệ thống
              </>
            )}
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            Vui lòng sử dụng tài khoản đã được cấp để truy cập.
          </p>
        </div>
      </div>
    </div>
  );
}
