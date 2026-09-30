import React, { useState } from 'react';
import { FlaskConical, Atom, RefreshCw, Sparkles, BookOpen, Lightbulb, Zap } from 'lucide-react';

export default function ScienceLab({ addReward }) {
  const [slot1, setSlot1] = useState(null);
  const [slot2, setSlot2] = useState(null);
  const [result, setResult] = useState(null);
  const [isExploding, setIsExploding] = useState(false);

  const elements = [
    { id: 'water', icon: '💧', name: 'Nước (H2O)', color: 'bg-blue-100 text-blue-600 border-blue-200' },
    { id: 'heat', icon: '🔥', name: 'Nhiệt độ (t°)', color: 'bg-orange-100 text-orange-600 border-orange-200' },
    { id: 'vinegar', icon: '🍷', name: 'Giấm (CH3COOH)', color: 'bg-rose-100 text-rose-600 border-rose-200' },
    { id: 'baking_soda', icon: '🧂', name: 'Baking Soda', color: 'bg-slate-100 text-slate-600 border-slate-200' },
    { id: 'seed', icon: '🌱', name: 'Hạt giống', color: 'bg-emerald-100 text-emerald-600 border-emerald-200' },
    { id: 'light', icon: '☀️', name: 'Ánh sáng', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
    { id: 'acid', icon: '🧪', name: 'Axit (HCl/H2SO4)', color: 'bg-teal-100 text-teal-600 border-teal-200' },
    { id: 'metal', icon: '🔩', name: 'Kim loại (Fe, Zn)', color: 'bg-gray-200 text-gray-700 border-gray-300' },
    // 5 New Elements
    { id: 'oxygen', icon: '💨', name: 'Oxi (O2)', color: 'bg-sky-100 text-sky-600 border-sky-200' },
    { id: 'sugar', icon: '🧊', name: 'Đường (C6H12O6)', color: 'bg-pink-100 text-pink-600 border-pink-200' },
    { id: 'yeast', icon: '🦠', name: 'Men vi sinh', color: 'bg-lime-100 text-lime-700 border-lime-200' },
    { id: 'soil', icon: '🪨', name: 'Đất mu mỡ', color: 'bg-amber-100 text-amber-800 border-amber-200' },
    { id: 'electricity', icon: '⚡', name: 'Dòng điện', color: 'bg-indigo-100 text-indigo-600 border-indigo-200' },
  ];

  const combos = {
    'water+heat': { 
      icon: '☁️', name: 'Sự bay hơi (Vt lý)', 
      reaction: 'H2O (lỏng) + Nhiệt → H2O (kh)',
      desc: 'Khi nước được đun nóng đến 100°C, nó nhận động năng lớn v chuyển từ thể lỏng sang thể kh.',
      explain: 'Nhiệt độ cung cấp năng lượng làm đứt gãy các liên kết hydro giữa các phân t nước. Khi năng lượng vượt qua áp suất của khí quyển, nước sẽ sôi và bốc hơi, gọi là hiện tượng bay hơi.'
    },
    'vinegar+baking_soda': { 
      icon: '🌋', name: 'Phản ứng tạo kh sủi bọt (Hóa học)', 
      reaction: 'CH3COOH + NaHCO3 → CH3COONa + H2O + CO2↑',
      desc: 'Giấm (Axit Axetic) phản ứng với Baking Soda (Natri Bicacbonat) tạo ra kh CO2 thoát ra mạnh mẽ.',
      explain: 'Đây là phản ứng axit - bazơ. Axit axetic nhường ion H+ cho ion HCO3- tạo thành axit cacbonic (H2CO3) không bền. Axit này lập tức phân hủy thành nước (H2O) và khí cacbonic (CO2) bay lên gây sủi bọt.'
    },
    'seed+light': { 
      icon: '🌿', name: 'Quang hợp & Nảy mầm (Sinh học)', 
      reaction: '6CO2 + 6H2O + Ánh sáng → C6H12O6 + 6O2',
      desc: 'Cây s dụng ánh sáng mặt trời để tổng hợp chất hữu cơ nuôi cây phát triển.',
      explain: 'Chất diệp lục trong lá cây hấp thụ năng lượng quang tử từ ánh sáng mặt trời. Năng lượng này được dùng để bẻ gãy phân t nước v kết hợp với CO2 lấy từ không kh, tổng hợp nên đường (Glucose) cung cấp năng lượng cho cây mọc lá và lớn lên.'
    },
    'acid+metal': { 
      icon: '💥', name: 'Phản ứng giải phóng H2 (Hóa học)', 
      reaction: 'Zn + 2HCl → ZnCl2 + H2↑',
      desc: 'Axit tác dụng với kim loại giải phóng kh Hydro dễ cháy.',
      explain: 'Trong dãy hoạt động hóa học, các kim loại đứng trước Hydro (như Zn, Fe, Mg...) có tính khử mạnh hơn sẽ đẩy ion H+ ra khỏi dung dịch axit. Ion H+ nhận electron biến thnh kh H2 thoát ra ngoài.'
    },
    // New Combinations
    'oxygen+metal': {
      icon: '🟤', name: 'Sự Oxi hóa (Rỉ sét)',
      reaction: '4Fe + 3O2 + xH2O → 2Fe2O3·xH2O',
      desc: 'Kim loại tiếp xúc lâu với Oxi tạo ra lớp oxit (rỉ sét) làm hỏng bề mặt.',
      explain: 'Oxi trong không khí đóng vai trò chất oxi hóa mạnh. Nó nhận electron từ kim loại (như Sắt) ở điều kiện có độ ẩm. Phản ứng điện hóa này tạo ra sắt (III) oxit ngậm nước, có màu nâu đỏ, xốp và giòn, làm kim loại bị ăn mòn dần.'
    },
    'sugar+yeast': {
      icon: '🍾', name: 'Lên men rượu (Sinh học)',
      reaction: 'C6H12O6 (có men) → 2C2H5OH + 2CO2↑',
      desc: 'Nấm men tiêu thụ đường trong điều kiện kỵ kh tạo ra cồn (rượu) v kh CO2.',
      explain: 'Các vi sinh vật như nấm men có enzyme zymase phân giải đường glucose để lấy năng lượng (ATP) sinh tồn. Quá trình trao đổi chất này không cần Oxi (kỵ khí), và sản phẩm phụ sinh ra là etanol (cồn) và khí CO2. Đây là nguyên lý sản xuất bia, rượu và làm bánh mì nở.'
    },
    'seed+soil': {
      icon: '🌱', name: 'Sự nảy mầm (Sinh học)',
      reaction: 'Hạt + Nước/Dinh dưỡng (đất) → Cây mầm',
      desc: 'Hạt giống hút ẩm và dinh dưỡng từ đất màu mỡ để phá vỏ nảy mầm.',
      explain: 'Đất cung cấp độ ẩm cần thiết giúp hạt trương nước, làm nứt vỏ hạt v kích hoạt các enzyme phân giải chất dinh dưỡng dự trữ trong phôi. Cùng với khoáng chất có trong đất, mầm cây lấy đà chọc qua lớp vỏ v đâm rễ.'
    },
    'electricity+water': {
      icon: '⚡', name: 'Điện phân nước (Hóa/Lý)',
      reaction: '2H2O (điện phân) → 2H2↑ + O2↑',
      desc: 'Dòng điện bẻ gãy phân t nước thnh kh Hydro v kh Oxi.',
      explain: 'Khi cho dòng điện một chiều đi qua nước (thường pha thêm một ít muối hoặc axit để dẫn điện tốt), năng lượng điện làm các phân t H2O phân ly. Tại cực âm (catot), H+ nhận electron sinh ra H2. Tại cực dương (anot), H2O nhường electron sinh ra O2.'
    },
    'sugar+heat': {
      icon: '🍮', name: 'Phản ứng Caramel hóa',
      reaction: 'C12H22O11 + t° → Hỗn hợp Polyme phức tạp',
      desc: 'Đường bị nhiệt phân tạo ra kẹo đắng (caramel) có mu nâu v mùi thơm đặc trưng.',
      explain: 'Khi đun nóng trên 160°C, các phân t đường bị loại nước (dehydration) và trải qua hàng loạt phản ứng trùng hợp. Sự phá vỡ các liên kết và tạo thành các hợp chất thơm mới (furan, maltol) tạo ra hương vị và màu nâu óng ánh của Caramel.'
    }
  };

  const getCombination = (id1, id2) => combos[`${id1}+${id2}`] || combos[`${id2}+${id1}`];

  const handleSelect = (el) => {
    if (result) {
      // If there's already a result, reset first
      setSlot1(el);
      setSlot2(null);
      setResult(null);
      setIsExploding(false);
      return;
    }

    if (!slot1) {
      setSlot1(el);
    } else if (!slot2 && el.id !== slot1.id) {
      setSlot2(el);
      setIsExploding(true);
      setTimeout(() => {
        const combo = getCombination(slot1.id, el.id);
        if (combo) {
          setResult(combo);
          if (addReward) addReward(20, 5); // More rewards for discovering advanced combos
        } else {
          setResult({ 
            icon: '❓', 
            name: 'Thất bại!', 
            reaction: 'Không có phản ứng',
            desc: 'Hai chất này không phản ứng với nhau.', 
            explain: 'Mỗi nguyên liệu chỉ phản ứng trong các điều kiện hoặc môi trường hóa học/sinh học cụ thể. Hãy thử thay đổi đối tượng tương tác xem sao!' 
          });
        }
        setIsExploding(false);
      }, 800);
    }
  };

  const reset = () => {
    setSlot1(null);
    setSlot2(null);
    setResult(null);
    setIsExploding(false);
  };

  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-700 max-w-5xl mx-auto animate-fade-in relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-cyan-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-4 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <FlaskConical size={32} className="text-cyan-400" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 tracking-wide">PHÒNG THÍ NGHIỆM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">VIRTUAL LAB</span></h2>
          <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">Nơi mô phỏng các phản ứng khoa học kì thú. Kết hợp các nguyên tố v môi trường để khám phá định luật vạn vt!</p>
        </header>

        {/* Experiment Workstation */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl mb-10 shadow-inner">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center min-h-[16rem]">
            
            {/* Slot 1 */}
            <div className={`w-36 h-36 rounded-[2rem] border-2 flex items-center justify-center text-6xl shadow-2xl transition-all duration-300 ${slot1 ? 'bg-slate-800 border-cyan-500 shadow-cyan-500/20' : 'bg-slate-800/30 border-slate-600 border-dashed hover:border-slate-500 hover:bg-slate-800/60'} relative group`}>
              {slot1 ? (
                <div className="animate-pop-in relative z-10">{slot1.icon}</div>
              ) : (
                <span className="text-slate-600 font-black opacity-30">1</span>
              )}
              {slot1 && <div className="absolute -bottom-10 text-sm font-bold text-cyan-200 bg-slate-900/80 px-3 py-1 rounded-full whitespace-nowrap">{slot1.name}</div>}
              {isExploding && slot1 && <div className="absolute inset-0 border-4 border-cyan-400 rounded-[2rem] animate-ping opacity-50"></div>}
            </div>
            
            <Zap className={`text-slate-500 ${isExploding ? 'animate-pulse text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]' : ''}`} size={40} />
            
            {/* Slot 2 */}
            <div className={`w-36 h-36 rounded-[2rem] border-2 flex items-center justify-center text-6xl shadow-2xl transition-all duration-300 ${slot2 ? 'bg-slate-800 border-indigo-500 shadow-indigo-500/20' : 'bg-slate-800/30 border-slate-600 border-dashed hover:border-slate-500 hover:bg-slate-800/60'} relative`}>
              {slot2 ? (
                <div className="animate-pop-in relative z-10">{slot2.icon}</div>
              ) : (
                <span className="text-slate-600 font-black opacity-30">2</span>
              )}
              {slot2 && <div className="absolute -bottom-10 text-sm font-bold text-indigo-200 bg-slate-900/80 px-3 py-1 rounded-full whitespace-nowrap">{slot2.name}</div>}
              {isExploding && slot2 && <div className="absolute inset-0 border-4 border-indigo-400 rounded-[2rem] animate-ping opacity-50"></div>}
            </div>

            <span className="text-5xl font-black text-slate-600 hidden md:block">=</span>
            
            {/* Result Slot */}
            <div className={`w-full md:w-[28rem] min-h-[16rem] rounded-[2rem] border-2 p-6 flex flex-col justify-center transition-all duration-500 ${
              result 
                ? (result.name === 'Thất bại!' ? 'bg-slate-800 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.1)]' : 'bg-slate-800 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.2)]')
                : 'bg-slate-900/30 border-slate-700 border-dashed'
            } relative overflow-hidden group`}>
              
              {isExploding && !result && (
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                  <Atom className="animate-spin text-cyan-400" size={48} />
                  <span className="text-cyan-400 font-bold animate-pulse tracking-widest uppercase text-sm">Đang tổng hợp...</span>
                </div>
              )}

              {result && (
                <div className="animate-fade-in z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl bg-slate-700/50 p-4 rounded-2xl border border-white/5">{result.icon}</div>
                    <div>
                      <h3 className={`text-xl font-black ${result.name === 'Thất bại!' ? 'text-red-400' : 'text-emerald-400'}`}>{result.name}</h3>
                      <div className="text-slate-300 font-mono text-sm mt-1 bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-700 inline-block">{result.reaction}</div>
                    </div>
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed mb-4 text-sm bg-white/5 p-3 rounded-xl border border-white/5">{result.desc}</p>
                  
                  <div className="mt-auto bg-indigo-900/30 border border-indigo-500/30 p-4 rounded-xl">
                    <h4 className="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-wider mb-2">
                      <BookOpen size={14} /> Giải mã khoa học
                    </h4>
                    <p className="text-indigo-100 text-sm leading-relaxed">{result.explain}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button 
              onClick={reset}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-all shadow-md active:scale-95 border border-slate-600 hover:border-slate-400"
            >
              <RefreshCw size={18} /> Làm sạch Bàn Thí Nghiệm
            </button>
          </div>
        </div>

        {/* Elements Inventory */}
        <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-[2rem] border border-slate-700">
          <div className="flex items-center gap-2 text-slate-300 font-bold mb-4 uppercase tracking-wider text-sm">
            <Sparkles size={16} className="text-yellow-400"/> Tủ hóa chất & nguyên liệu
          </div>
          <div className="flex flex-wrap gap-3">
            {elements.map(el => (
              <button 
                key={el.id}
                onClick={() => handleSelect(el)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all transform hover:-translate-y-1 active:scale-95 border-2 shadow-sm
                  ${(slot1?.id === el.id || slot2?.id === el.id) ? 'bg-slate-700 border-slate-500 text-white opacity-50 cursor-not-allowed scale-95' : `bg-white ${el.color} hover:shadow-lg`}
                `}
                disabled={slot1?.id === el.id || slot2?.id === el.id || isExploding}
              >
                <span className="text-2xl drop-shadow-sm">{el.icon}</span> 
                <span>{el.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
