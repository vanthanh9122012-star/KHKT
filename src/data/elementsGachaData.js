// Dataset of Periodic Table Elements for Gacha Nguyên Tố
// 3 Rarity Tiers:
// - legendary ("Cực hiếm"): 3% drop rate
// - rare ("Hiếm vừa"): 10% drop rate
// - common ("Phổ biến"): 87% drop rate

export const GACHA_ELEMENTS = [
  // ==================== CỰC HIẾM (LEGENDARY - 3%) ====================
  {
    id: 'au',
    symbol: 'Au',
    name: 'Vàng',
    enName: 'Gold',
    atomicNumber: 79,
    atomicMass: '196.97 u',
    rarity: 'legendary',
    rarityLabel: 'Cực hiếm (3%)',
    stars: 5,
    category: 'Kim loại quý',
    groupPeriod: 'Nhóm 11 - Chu kỳ 6',
    electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹',
    theme: {
      border: 'border-yellow-400',
      badgeBg: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
      glow: 'shadow-[0_0_35px_rgba(234,179,8,0.6)]',
      ballGrad: 'from-amber-300 via-yellow-400 to-amber-600',
      textColor: 'text-yellow-400'
    },
    description: 'Kim loại quý vĩnh cửu, không bao giờ bị oxy hóa hay gỉ sét bởi nước và không khí. Có tính dẻo phi thường: 1 gram vàng có thể kéo thành sợi mảnh dài 2 km.',
    funFact: 'Tất cả các phi hành gia ngoài không gian đều có mũ bảo hộ tráng một lớp mỏng vàng ròng để ngăn chặn bức xạ mặt trời nguy hiểm!'
  },
  {
    id: 'pt',
    symbol: 'Pt',
    name: 'Bạch kim',
    enName: 'Platinum',
    atomicNumber: 78,
    atomicMass: '195.08 u',
    rarity: 'legendary',
    rarityLabel: 'Cực hiếm (3%)',
    stars: 5,
    category: 'Kim loại quý chuyển tiếp',
    groupPeriod: 'Nhóm 10 - Chu kỳ 6',
    electronConfig: '[Xe] 4f¹⁴ 5d⁹ 6s¹',
    theme: {
      border: 'border-cyan-300',
      badgeBg: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/40',
      glow: 'shadow-[0_0_35px_rgba(103,232,249,0.6)]',
      ballGrad: 'from-cyan-200 via-slate-100 to-teal-400',
      textColor: 'text-cyan-300'
    },
    description: 'Một trong những kim loại quý hiếm nhất hành tinh, có khả năng xúc tác hóa học phi thường và chống ăn mòn tuyệt đối ngay cả ở nhiệt độ cao hàng nghìn độ C.',
    funFact: 'Toàn bộ lượng bạch kim từng được con người khai thác trong lịch sử chỉ đủ lấp đầy một căn phòng khách nhỏ!'
  },
  {
    id: 'u',
    symbol: 'U',
    name: 'Urani',
    enName: 'Uranium',
    atomicNumber: 92,
    atomicMass: '238.03 u',
    rarity: 'legendary',
    rarityLabel: 'Cực hiếm (3%)',
    stars: 5,
    category: 'Actinit - Phóng xạ',
    groupPeriod: 'Họ Actinit - Chu kỳ 7',
    electronConfig: '[Rn] 5f³ 6d¹ 7s²',
    theme: {
      border: 'border-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      glow: 'shadow-[0_0_35px_rgba(52,211,153,0.7)]',
      ballGrad: 'from-lime-300 via-emerald-400 to-green-700',
      textColor: 'text-emerald-400'
    },
    description: 'Nguyên tố phóng xạ tự nhiên nặng nhất trong bảng tuần hoàn. Đồng vị U-235 là nguồn nhiên liệu hạt nhân phân hạch tạo ra lượng năng lượng khổng lồ cho các nhà máy điện nguyên tử.',
    funFact: '1 viên nhiên liệu Urani bằng đầu ngón tay tạo ra lượng điện năng tương đương với việc đốt cháy 1 tấn than đá hoặc 560 lít dầu mỏ!'
  },
  {
    id: 'pu',
    symbol: 'Pu',
    name: 'Plutoni',
    enName: 'Plutonium',
    atomicNumber: 94,
    atomicMass: '244 u',
    rarity: 'legendary',
    rarityLabel: 'Cực hiếm (3%)',
    stars: 5,
    category: 'Actinit - Phóng xạ nhân tạo',
    groupPeriod: 'Họ Actinit - Chu kỳ 7',
    electronConfig: '[Rn] 5f⁶ 7s²',
    theme: {
      border: 'border-fuchsia-400',
      badgeBg: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40',
      glow: 'shadow-[0_0_35px_rgba(232,121,249,0.7)]',
      ballGrad: 'from-pink-400 via-fuchsia-500 to-purple-800',
      textColor: 'text-fuchsia-400'
    },
    description: 'Nguyên tố phóng xạ siêu mạnh sinh nhiệt liên tục. Được đặt tên theo sao Diêm Vương (Pluto). Là nguồn năng lượng cho các máy phát điện nhiệt hạt nhân trên tàu vũ trụ.',
    funFact: 'Tàu thám hiểm sao Hỏa Curiosity và tàu vũ trụ Voyager đang bay ngoài rìa hệ Mặt Trời đều được cấp điện nhờ năng lượng nhiệt từ Plutoni-238!'
  },
  {
    id: 'fr',
    symbol: 'Fr',
    name: 'Franci',
    enName: 'Francium',
    atomicNumber: 87,
    atomicMass: '223 u',
    rarity: 'legendary',
    rarityLabel: 'Cực hiếm (3%)',
    stars: 5,
    category: 'Kim loại kiềm phóng xạ',
    groupPeriod: 'Nhóm 1 - Chu kỳ 7',
    electronConfig: '[Rn] 7s¹',
    theme: {
      border: 'border-red-400',
      badgeBg: 'bg-red-500/20 text-red-300 border-red-500/40',
      glow: 'shadow-[0_0_35px_rgba(248,113,113,0.7)]',
      ballGrad: 'from-orange-400 via-red-500 to-rose-700',
      textColor: 'text-red-400'
    },
    description: 'Nguyên tố tự nhiên hiếm nhất trên bề mặt Trái Đất. Tại bất kỳ thời điểm nào, toàn bộ vỏ Trái Đất ước tính chỉ có không quá 20 - 30 gram Franci do chu kỳ bán rã chỉ 22 phút.',
    funFact: 'Do quá phóng xạ và phân rã chớp nhoáng, chưa từng có ai có thể gom đủ một lượng Franci nhìn thấy bằng mắt thường mà không bị sức nóng của nó làm bay hơi ngay lập tức!'
  },
  {
    id: 'og',
    symbol: 'Og',
    name: 'Oganesson',
    enName: 'Oganesson',
    atomicNumber: 118,
    atomicMass: '294 u',
    rarity: 'legendary',
    rarityLabel: 'Cực hiếm (3%)',
    stars: 5,
    category: 'Khí hiếm siêu nặng',
    groupPeriod: 'Nhóm 18 - Chu kỳ 7',
    electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
    theme: {
      border: 'border-violet-400',
      badgeBg: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
      glow: 'shadow-[0_0_40px_rgba(167,139,250,0.8)]',
      ballGrad: 'from-indigo-400 via-purple-600 to-violet-900',
      textColor: 'text-violet-300'
    },
    description: 'Nguyên tố có số hiệu nguyên tử lớn nhất từng được nhân loại tổng hợp thành công (Z=118), hoàn thiện hàng thứ 7 của Bảng tuần hoàn Mendeleev.',
    funFact: 'Chỉ có khoảng một vài nguyên tử Oganesson từng được tạo ra trên toàn thế giới thông qua máy gia tốc hạt năng lượng cao và chúng chỉ tồn tại chưa đầy 1 phần nghìn giây!'
  },
  {
    id: 'cf',
    symbol: 'Cf',
    name: 'Californi',
    enName: 'Californium',
    atomicNumber: 98,
    atomicMass: '251 u',
    rarity: 'legendary',
    rarityLabel: 'Cực hiếm (3%)',
    stars: 5,
    category: 'Actinit siêu hiếm',
    groupPeriod: 'Họ Actinit - Chu kỳ 7',
    electronConfig: '[Rn] 5f¹⁰ 7s²',
    theme: {
      border: 'border-amber-300',
      badgeBg: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
      glow: 'shadow-[0_0_35px_rgba(251,191,36,0.7)]',
      ballGrad: 'from-yellow-300 via-amber-500 to-orange-700',
      textColor: 'text-amber-300'
    },
    description: 'Một trong những chất đắt đỏ nhất thế giới với giá trị lên tới 27 triệu USD cho 1 gram. Là nguồn phát chùm neutron cực mạnh để dò tìm mỏ dầu và khởi động lò hạt nhân.',
    funFact: 'Chỉ 1 microgram Californi-252 có thể giải phóng 170 triệu hạt neutron mỗi phút!'
  },
  {
    id: 'bi',
    symbol: 'Bi',
    name: 'Bismut',
    enName: 'Bismuth',
    atomicNumber: 83,
    atomicMass: '208.98 u',
    rarity: 'legendary',
    rarityLabel: 'Cực hiếm (3%)',
    stars: 5,
    category: 'Kim loại yếu đặc biệt',
    groupPeriod: 'Nhóm 15 - Chu kỳ 6',
    electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',
    theme: {
      border: 'border-pink-300',
      badgeBg: 'bg-gradient-to-r from-pink-500/20 to-teal-500/20 text-pink-300 border-pink-400/40',
      glow: 'shadow-[0_0_35px_rgba(244,114,182,0.7)]',
      ballGrad: 'from-pink-400 via-teal-300 to-indigo-600',
      textColor: 'text-pink-300'
    },
    description: 'Kim loại nổi tiếng với các tinh thể hình học bậc thang phản chiếu ánh sáng cầu vồng ngũ sắc lộng lẫy do lớp oxit mỏng trên bề mặt giao thoa ánh sáng.',
    funFact: 'Mặc dù là kim loại nặng đứng cạnh Chì, Bismut lại gần như vô hại với cơ thể người và là thành phần chính của thuốc dạ dày Pepto-Bismol!'
  },

  // ==================== HIẾM VỪA (RARE - 10%) ====================
  {
    id: 'ag',
    symbol: 'Ag',
    name: 'Bạc',
    enName: 'Silver',
    atomicNumber: 47,
    atomicMass: '107.87 u',
    rarity: 'rare',
    rarityLabel: 'Hiếm vừa (10%)',
    stars: 4,
    category: 'Kim loại quý',
    groupPeriod: 'Nhóm 11 - Chu kỳ 5',
    electronConfig: '[Kr] 4d¹⁰ 5s¹',
    theme: {
      border: 'border-slate-300',
      badgeBg: 'bg-slate-400/20 text-slate-200 border-slate-300/40',
      glow: 'shadow-[0_0_25px_rgba(203,213,225,0.5)]',
      ballGrad: 'from-slate-100 via-slate-300 to-slate-500',
      textColor: 'text-slate-200'
    },
    description: 'Quán quân dẫn điện và dẫn nhiệt của toàn bộ bảng tuần hoàn (vượt trội hơn cả đồng và vàng). Có tính kháng khuẩn tự nhiên rất mạnh.',
    funFact: 'Gương soi trong kính viễn vọng không gian James Webb và gương dân dụng tốt nhất đều được tráng một lớp bạc phản xạ ánh sáng siêu nét!'
  },
  {
    id: 'ti',
    symbol: 'Ti',
    name: 'Titan',
    enName: 'Titanium',
    atomicNumber: 22,
    atomicMass: '47.87 u',
    rarity: 'rare',
    rarityLabel: 'Hiếm vừa (10%)',
    stars: 4,
    category: 'Kim loại chuyển tiếp',
    groupPeriod: 'Nhóm 4 - Chu kỳ 4',
    electronConfig: '[Ar] 3d² 4s²',
    theme: {
      border: 'border-blue-400',
      badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-400/40',
      glow: 'shadow-[0_0_25px_rgba(96,165,250,0.5)]',
      ballGrad: 'from-sky-300 via-blue-500 to-indigo-700',
      textColor: 'text-blue-300'
    },
    description: 'Kim loại của kỷ nguyên hàng không vũ trụ: cứng như thép nhưng nhẹ hơn thép tới 45%, chịu lực phi thường và không bị nước biển ăn mòn.',
    funFact: 'Titan hoàn toàn tương thích sinh học với cơ thể người, vì vậy xương nhân tạo và các trụ cấy ghép nha khoa răng implant đều làm từ Titan!'
  },
  {
    id: 'w',
    symbol: 'W',
    name: 'Wolfram',
    enName: 'Tungsten',
    atomicNumber: 74,
    atomicMass: '183.84 u',
    rarity: 'rare',
    rarityLabel: 'Hiếm vừa (10%)',
    stars: 4,
    category: 'Kim loại siêu cứng',
    groupPeriod: 'Nhóm 6 - Chu kỳ 6',
    electronConfig: '[Xe] 4f¹⁴ 5d⁴ 6s²',
    theme: {
      border: 'border-orange-400',
      badgeBg: 'bg-orange-500/20 text-orange-300 border-orange-400/40',
      glow: 'shadow-[0_0_25px_rgba(251,146,60,0.5)]',
      ballGrad: 'from-amber-300 via-orange-500 to-red-800',
      textColor: 'text-orange-300'
    },
    description: 'Giữ kỷ lục về nhiệt độ nóng chảy cao nhất trong số tất cả kim loại (3.422 °C), bền vững trong các môi trường khắc nghiệt nhất.',
    funFact: 'Nếu bạn đưa một thỏi Wolfram vào tâm lò đúc thép, thép sẽ chảy lỏng hoàn toàn trong khi Wolfram vẫn giữ nguyên dạng khối rắn!'
  },
  {
    id: 'ne',
    symbol: 'Ne',
    name: 'Neon',
    enName: 'Neon',
    atomicNumber: 10,
    atomicMass: '20.18 u',
    rarity: 'rare',
    rarityLabel: 'Hiếm vừa (10%)',
    stars: 4,
    category: 'Khí hiếm',
    groupPeriod: 'Nhóm 18 - Chu kỳ 2',
    electronConfig: '[He] 2s² 2p⁶',
    theme: {
      border: 'border-red-400',
      badgeBg: 'bg-red-500/20 text-red-300 border-red-400/40',
      glow: 'shadow-[0_0_25px_rgba(239,68,68,0.6)]',
      ballGrad: 'from-rose-400 via-red-500 to-amber-600',
      textColor: 'text-red-400'
    },
    description: 'Khí hiếm trơ tuyệt đối. Khi có điện cao thế chạy qua ống chân không chứa khí Neon, nó phát ra ánh sáng đỏ cam rực rỡ huyền thoại trên các đại lộ đêm.',
    funFact: 'Ánh sáng đèn neon màu đỏ có khả năng xuyên qua sương mù dày đặc tốt hơn bất kỳ loại ánh sáng màu nào khác!'
  },
  {
    id: 'he',
    symbol: 'He',
    name: 'Heli',
    enName: 'Helium',
    atomicNumber: 2,
    atomicMass: '4.00 u',
    rarity: 'rare',
    rarityLabel: 'Hiếm vừa (10%)',
    stars: 4,
    category: 'Khí hiếm',
    groupPeriod: 'Nhóm 18 - Chu kỳ 1',
    electronConfig: '1s²',
    theme: {
      border: 'border-yellow-300',
      badgeBg: 'bg-yellow-400/20 text-yellow-200 border-yellow-300/40',
      glow: 'shadow-[0_0_25px_rgba(253,224,71,0.5)]',
      ballGrad: 'from-amber-200 via-yellow-300 to-amber-500',
      textColor: 'text-yellow-300'
    },
    description: 'Nguyên tố nhẹ thứ hai trong vũ trụ. Không cháy, an toàn tuyệt đối, dùng để nâng các khí cầu khổng lồ và làm lạnh nam châm siêu dẫn máy quét MRI.',
    funFact: 'Heli là nguyên tố duy nhất được phát hiện ngoài không gian (trên Mặt Trời thông qua quang phổ học) trước khi con người tìm thấy nó trên Trái Đất!'
  },
  {
    id: 'hg',
    symbol: 'Hg',
    name: 'Thủy ngân',
    enName: 'Mercury',
    atomicNumber: 80,
    atomicMass: '200.59 u',
    rarity: 'rare',
    rarityLabel: 'Hiếm vừa (10%)',
    stars: 4,
    category: 'Kim loại lỏng',
    groupPeriod: 'Nhóm 12 - Chu kỳ 6',
    electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s²',
    theme: {
      border: 'border-teal-300',
      badgeBg: 'bg-teal-500/20 text-teal-200 border-teal-400/40',
      glow: 'shadow-[0_0_25px_rgba(45,212,191,0.5)]',
      ballGrad: 'from-slate-200 via-teal-400 to-slate-600',
      textColor: 'text-teal-300'
    },
    description: 'Kim loại duy nhất ở thể lỏng ở điều kiện phòng bình thường, sáng bóng như gương và nặng đến mức một khối sắt hay đá granite có thể nổi bồng bềnh trên bề mặt của nó.',
    funFact: 'Các nhà giả kim thuật cổ đại từng coi Thủy ngân là "chất lỏng ma thuật" kết nối giữa thế giới kim loại và linh hồn!'
  },
  {
    id: 'li',
    symbol: 'Li',
    name: 'Liti',
    enName: 'Lithium',
    atomicNumber: 3,
    atomicMass: '6.94 u',
    rarity: 'rare',
    rarityLabel: 'Hiếm vừa (10%)',
    stars: 4,
    category: 'Kim loại kiềm nhẹ',
    groupPeriod: 'Nhóm 1 - Chu kỳ 2',
    electronConfig: '[He] 2s¹',
    theme: {
      border: 'border-pink-400',
      badgeBg: 'bg-pink-500/20 text-pink-300 border-pink-400/40',
      glow: 'shadow-[0_0_25px_rgba(244,114,182,0.5)]',
      ballGrad: 'from-pink-300 via-rose-400 to-red-600',
      textColor: 'text-pink-300'
    },
    description: '"Vàng trắng" của cuộc cách mạng năng lượng xanh, kim loại nhẹ nhất có thể nổi trên dầu hỏa, thành phần cốt lõi của pin Li-ion trong điện thoại và xe điện.',
    funFact: 'Mật độ của Liti nhẹ chỉ bằng một nửa nước, bạn có thể dễ dàng dùng một con dao bơ bằng nhựa để cắt đứt một thỏi kim loại Liti nguyên chất!'
  },
  {
    id: 'cr',
    symbol: 'Cr',
    name: 'Crom',
    enName: 'Chromium',
    atomicNumber: 24,
    atomicMass: '51.996 u',
    rarity: 'rare',
    rarityLabel: 'Hiếm vừa (10%)',
    stars: 4,
    category: 'Kim loại chuyển tiếp siêu cứng',
    groupPeriod: 'Nhóm 6 - Chu kỳ 4',
    electronConfig: '[Ar] 3d⁵ 4s¹',
    theme: {
      border: 'border-indigo-400',
      badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
      glow: 'shadow-[0_0_25px_rgba(129,140,248,0.5)]',
      ballGrad: 'from-blue-300 via-indigo-500 to-purple-700',
      textColor: 'text-indigo-300'
    },
    description: 'Kim loại tự nhiên cứng nhất trong toàn bộ bảng tuần hoàn, dùng để mạ bảo vệ bề mặt xe máy, ô tô chống xước và là thành phần bắt buộc để tạo ra thép không gỉ (Inox).',
    funFact: 'Màu đỏ rực của đá quý Hồng ngọc (Ruby) và màu xanh lục ngọc của Ngọc lục bảo (Emerald) đều do các ion Crom tạo nên!'
  },

  // ==================== PHỔ BIẾN (COMMON - 87%) ====================
  {
    id: 'h',
    symbol: 'H',
    name: 'Hiđro',
    enName: 'Hydrogen',
    atomicNumber: 1,
    atomicMass: '1.008 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Phi kim cơ bản',
    groupPeriod: 'Nhóm 1 - Chu kỳ 1',
    electronConfig: '1s¹',
    theme: {
      border: 'border-sky-400',
      badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-400/30',
      glow: 'shadow-[0_0_15px_rgba(56,189,248,0.3)]',
      ballGrad: 'from-sky-300 via-blue-400 to-cyan-600',
      textColor: 'text-sky-400'
    },
    description: 'Nguyên tố khởi nguồn của vũ trụ, chiếm khoảng 75% khối lượng của tất cả vật chất trong vũ trụ quan sát được. Nhiên liệu phản ứng nhiệt hạch nuôi sống Mặt Trời.',
    funFact: 'Nước (H2O) mà chúng ta uống mỗi ngày chứa hai nguyên tử Hiđro có tuổi thọ cổ xưa bằng chính tuổi của vũ trụ (khoảng 13.8 tỷ năm)!'
  },
  {
    id: 'o',
    symbol: 'O',
    name: 'Oxi',
    enName: 'Oxygen',
    atomicNumber: 8,
    atomicMass: '15.999 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Phi kim dưỡng khí',
    groupPeriod: 'Nhóm 16 - Chu kỳ 2',
    electronConfig: '[He] 2s² 2p⁴',
    theme: {
      border: 'border-blue-400',
      badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
      glow: 'shadow-[0_0_15px_rgba(59,130,246,0.3)]',
      ballGrad: 'from-blue-300 via-sky-400 to-indigo-600',
      textColor: 'text-blue-400'
    },
    description: 'Chất khí duy trì sự hô hấp của sinh vật và sự cháy. Chiếm 21% khí quyển và gần 50% khối lượng vỏ Trái Đất dưới dạng các khoáng vật oxit.',
    funFact: 'Oxi ở dạng khí không có màu, nhưng khi làm lạnh thành chất lỏng ở -183°C, nó biến thành một chất lỏng màu xanh lam tuyệt đẹp và bị nam châm hút!'
  },
  {
    id: 'c',
    symbol: 'C',
    name: 'Cacbon',
    enName: 'Carbon',
    atomicNumber: 6,
    atomicMass: '12.011 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Phi kim của sự sống',
    groupPeriod: 'Nhóm 14 - Chu kỳ 2',
    electronConfig: '[He] 2s² 2p²',
    theme: {
      border: 'border-slate-400',
      badgeBg: 'bg-slate-500/20 text-slate-300 border-slate-400/30',
      glow: 'shadow-[0_0_15px_rgba(148,163,184,0.3)]',
      ballGrad: 'from-slate-400 via-gray-600 to-zinc-800',
      textColor: 'text-slate-300'
    },
    description: 'Xương sống hóa học của tất cả các dạng sống hữu cơ. Có khả năng tạo hàng triệu hợp chất đa dạng, tồn tại từ than chì mềm mại đến kim cương cứng nhất.',
    funFact: 'Cả đầu bút chì đen và viên kim cương lấp lánh đắt giá đều được làm từ 100% nguyên tử Cacbon, điểm khác biệt duy nhất là cách các nguyên tử liên kết với nhau!'
  },
  {
    id: 'n',
    symbol: 'N',
    name: 'Nitơ',
    enName: 'Nitrogen',
    atomicNumber: 7,
    atomicMass: '14.007 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Phi kim khí quyển',
    groupPeriod: 'Nhóm 15 - Chu kỳ 2',
    electronConfig: '[He] 2s² 2p³',
    theme: {
      border: 'border-indigo-400',
      badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30',
      glow: 'shadow-[0_0_15px_rgba(99,102,241,0.3)]',
      ballGrad: 'from-indigo-300 via-blue-500 to-violet-700',
      textColor: 'text-indigo-400'
    },
    description: 'Thành phần khí chiếm ưu thế áp đảo trong bầu không khí Trái Đất (78%). Là khối xây dựng cấu tạo nên axit amin, protein và chuỗi xoắn kép di truyền DNA.',
    funFact: 'Nitơ lỏng sôi ở -196°C, có thể đóng băng tức thì một bông hoa hồng đến mức nó vỡ vụn như thủy tinh khi chạm vào!'
  },
  {
    id: 'fe',
    symbol: 'Fe',
    name: 'Sắt',
    enName: 'Iron',
    atomicNumber: 26,
    atomicMass: '55.845 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Kim loại chuyển tiếp thiết yếu',
    groupPeriod: 'Nhóm 8 - Chu kỳ 4',
    electronConfig: '[Ar] 3d⁶ 4s²',
    theme: {
      border: 'border-orange-400',
      badgeBg: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
      glow: 'shadow-[0_0_15px_rgba(249,115,22,0.3)]',
      ballGrad: 'from-amber-400 via-orange-600 to-red-800',
      textColor: 'text-orange-400'
    },
    description: 'Kim loại trụ cột dựng xây nên nền văn minh nhân loại (chiếm 95% tổng sản lượng kim loại thế giới). Đóng vai trò trung tâm vận chuyển oxy trong hồng cầu máu.',
    funFact: 'Màu đỏ của máu động vật và màu đỏ của đất bề mặt sao Hỏa đều bắt nguồn từ cùng một nguyên nhân: các oxit của Sắt!'
  },
  {
    id: 'cu',
    symbol: 'Cu',
    name: 'Đồng',
    enName: 'Copper',
    atomicNumber: 29,
    atomicMass: '63.546 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Kim loại truyền dẫn',
    groupPeriod: 'Nhóm 11 - Chu kỳ 4',
    electronConfig: '[Ar] 3d¹⁰ 4s¹',
    theme: {
      border: 'border-amber-500',
      badgeBg: 'bg-amber-600/20 text-amber-300 border-amber-500/30',
      glow: 'shadow-[0_0_15px_rgba(217,119,6,0.3)]',
      ballGrad: 'from-amber-400 via-orange-500 to-stone-700',
      textColor: 'text-amber-400'
    },
    description: 'Một trong những kim loại đầu tiên con người phát hiện và rèn đúc từ 10.000 năm trước. Dẫn điện xuất sắc, là mạch máu của toàn bộ lưới điện toàn cầu.',
    funFact: 'Tượng Nữ thần Tự do ở New York ban đầu có màu đồng nâu đỏ sáng bóng, nhưng theo thời gian đã bị oxy hóa tự nhiên tạo nên lớp gỉ đồng màu xanh ngọc bích như ngày nay!'
  },
  {
    id: 'al',
    symbol: 'Al',
    name: 'Nhôm',
    enName: 'Aluminium',
    atomicNumber: 13,
    atomicMass: '26.982 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Kim loại nhẹ bền',
    groupPeriod: 'Nhóm 13 - Chu kỳ 3',
    electronConfig: '[Ne] 3s² 3p¹',
    theme: {
      border: 'border-slate-300',
      badgeBg: 'bg-slate-400/20 text-slate-200 border-slate-300/30',
      glow: 'shadow-[0_0_15px_rgba(203,213,225,0.3)]',
      ballGrad: 'from-slate-200 via-gray-300 to-slate-500',
      textColor: 'text-slate-200'
    },
    description: 'Kim loại dồi dào nhất trong vỏ Trái Đất (chiếm 8% vỏ Trái Đất). Trọng lượng nhẹ, tạo lớp màng oxit tự bảo vệ bền vững, có thể tái chế 100% vô hạn lần.',
    funFact: 'Vào thế kỷ 19, trước khi tìm ra phương pháp điện phân Hall-Héroult, nhôm còn đắt hơn cả vàng và được Hoàng đế Napoleon III dùng làm bộ dao dĩa quý nhất chiêu đãi khách VIP!'
  },
  {
    id: 'zn',
    symbol: 'Zn',
    name: 'Kẽm',
    enName: 'Zinc',
    atomicNumber: 30,
    atomicMass: '65.38 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Kim loại chuyển tiếp',
    groupPeriod: 'Nhóm 12 - Chu kỳ 4',
    electronConfig: '[Ar] 3d¹⁰ 4s²',
    theme: {
      border: 'border-cyan-400',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
      glow: 'shadow-[0_0_15px_rgba(34,211,238,0.3)]',
      ballGrad: 'from-teal-300 via-cyan-500 to-blue-700',
      textColor: 'text-cyan-400'
    },
    description: 'Chuyên gia bảo vệ chống gỉ (tôn mạ kẽm). Khoáng chất vi lượng thiết yếu bậc nhất kích hoạt hơn 300 enzyme sinh học giúp trẻ em phát triển chiều cao và tăng đề kháng.',
    funFact: 'Cơ thể người không tự dự trữ được kẽm, vì vậy chúng ta cần bổ sung vi chất này đều đặn qua các thực phẩm như hải sản, các loại hạt và thịt nạc.'
  },
  {
    id: 'ca',
    symbol: 'Ca',
    name: 'Canxi',
    enName: 'Calcium',
    atomicNumber: 20,
    atomicMass: '40.078 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Kim loại kiềm thổ',
    groupPeriod: 'Nhóm 2 - Chu kỳ 4',
    electronConfig: '[Ar] 4s²',
    theme: {
      border: 'border-stone-300',
      badgeBg: 'bg-stone-400/20 text-stone-200 border-stone-300/30',
      glow: 'shadow-[0_0_15px_rgba(214,211,209,0.3)]',
      ballGrad: 'from-stone-100 via-amber-100 to-stone-400',
      textColor: 'text-stone-200'
    },
    description: 'Kim loại dồi dào thứ 5 trong cơ thể người, tạo nên độ vững chắc cho toàn bộ khung xương, men răng, vỏ trứng gia cầm và các rạn san hô đại dương.',
    funFact: '99% lượng Canxi trong cơ thể người nằm ở xương và răng, 1% còn lại lưu thông trong máu để điều khiển từng nhịp co bóp của trái tim!'
  },
  {
    id: 'na',
    symbol: 'Na',
    name: 'Natri',
    enName: 'Sodium',
    atomicNumber: 11,
    atomicMass: '22.990 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Kim loại kiềm hoạt động mạnh',
    groupPeriod: 'Nhóm 1 - Chu kỳ 3',
    electronConfig: '[Ne] 3s¹',
    theme: {
      border: 'border-yellow-400',
      badgeBg: 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
      glow: 'shadow-[0_0_15px_rgba(250,204,21,0.3)]',
      ballGrad: 'from-yellow-200 via-amber-400 to-orange-600',
      textColor: 'text-yellow-400'
    },
    description: 'Kim loại kiềm mềm như bơ, phản ứng nổ dữ dội khi chạm nước. Khi kết hợp với khí độc Clo lại tạo thành Muối ăn (NaCl) vô hại nuôi dưỡng sự sống muôn loài.',
    funFact: 'Ion Natri đóng vai trò như các xung điện thần kinh truyền tín hiệu từ não bộ tới các cơ bắp trong từng mili-giây!'
  },
  {
    id: 'cl',
    symbol: 'Cl',
    name: 'Clo',
    enName: 'Chlorine',
    atomicNumber: 17,
    atomicMass: '35.45 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Halogen khử khuẩn',
    groupPeriod: 'Nhóm 17 - Chu kỳ 3',
    electronConfig: '[Ne] 3s² 3p⁵',
    theme: {
      border: 'border-lime-400',
      badgeBg: 'bg-lime-500/20 text-lime-300 border-lime-400/30',
      glow: 'shadow-[0_0_15px_rgba(163,230,53,0.3)]',
      ballGrad: 'from-lime-200 via-green-400 to-emerald-700',
      textColor: 'text-lime-400'
    },
    description: 'Khí màu vàng lục có mùi hắc đặc trưng. Có tính oxy hóa cực mạnh, được sử dụng trong hệ thống xử lý nước máy đô thị và bể bơi để tiêu diệt 99.9% mầm bệnh.',
    funFact: 'Việc ứng dụng Clo để khử trùng nước uống vào đầu thế kỷ 20 được các nhà khoa học đánh giá là một trong những thành tựu y tế cộng đồng vĩ đại nhất lịch sử loài người!'
  },
  {
    id: 'mg',
    symbol: 'Mg',
    name: 'Magie',
    enName: 'Magnesium',
    atomicNumber: 12,
    atomicMass: '24.305 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Kim loại kiềm thổ',
    groupPeriod: 'Nhóm 2 - Chu kỳ 3',
    electronConfig: '[Ne] 3s²',
    theme: {
      border: 'border-emerald-300',
      badgeBg: 'bg-emerald-400/20 text-emerald-200 border-emerald-300/30',
      glow: 'shadow-[0_0_15px_rgba(110,231,183,0.3)]',
      ballGrad: 'from-emerald-200 via-teal-400 to-green-600',
      textColor: 'text-emerald-300'
    },
    description: 'Cháy với ngọn lửa trắng chói lòa phát ra tia cực tím. Đóng vai trò là nguyên tử trung tâm trong phân tử chất diệp lục (chlorophyll) giúp cây xanh quang hợp.',
    funFact: 'Nếu không có một nguyên tử Magie nằm ngay chính giữa mỗi phân tử diệp lục, cây xanh sẽ không thể hấp thụ ánh sáng mặt trời và sự sống trên Trái Đất sẽ không thể tồn tại!'
  },
  {
    id: 'si',
    symbol: 'Si',
    name: 'Silic',
    enName: 'Silicon',
    atomicNumber: 14,
    atomicMass: '28.085 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Á kim bán dẫn',
    groupPeriod: 'Nhóm 14 - Chu kỳ 3',
    electronConfig: '[Ne] 3s² 3p²',
    theme: {
      border: 'border-blue-400',
      badgeBg: 'bg-blue-500/20 text-blue-200 border-blue-400/30',
      glow: 'shadow-[0_0_15px_rgba(96,165,250,0.3)]',
      ballGrad: 'from-blue-300 via-slate-500 to-indigo-800',
      textColor: 'text-blue-300'
    },
    description: 'Trái tim của kỷ nguyên thông tin hiện đại. Thành phần chính của hạt cát thạch anh (SiO2), được tinh chế với độ tinh khiết 99.9999999% để làm vi xử lý CPU máy tính.',
    funFact: 'Thung lũng Silicon (Silicon Valley) tại California được đặt theo tên của nguyên tố Silic vì nó là nền móng của toàn bộ ngành công nghiệp vi mạch bán dẫn máy tính!'
  },
  {
    id: 's',
    symbol: 'S',
    name: 'Lưu huỳnh',
    enName: 'Sulfur',
    atomicNumber: 16,
    atomicMass: '32.06 u',
    rarity: 'common',
    rarityLabel: 'Phổ biến (87%)',
    stars: 3,
    category: 'Phi kim núi lửa',
    groupPeriod: 'Nhóm 16 - Chu kỳ 3',
    electronConfig: '[Ne] 3s² 3p⁴',
    theme: {
      border: 'border-yellow-400',
      badgeBg: 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30',
      glow: 'shadow-[0_0_15px_rgba(234,179,8,0.3)]',
      ballGrad: 'from-yellow-300 via-amber-400 to-yellow-600',
      textColor: 'text-yellow-300'
    },
    description: 'Bột màu vàng tươi đọng quanh miệng các miệng núi lửa cổ xưa. Dùng để lưu hóa cao su giúp lốp xe không bị chảy trong ngày hè và sản xuất axit sulfuric H2SO4.',
    funFact: 'Mùi cay nồng khiến bạn chảy nước mắt mỗi khi thái hành tây là do các hợp chất chứa lưu huỳnh được giải phóng vào không khí!'
  }
];

// Helper to pull random element with exact specified probabilities:
// - "Cực hiếm" (legendary): 3%
// - "Hiếm vừa" (rare): 10%
// - "Phổ biến" (common): 87%
export function pullRandomElement() {
  const rand = Math.random(); // 0 <= rand < 1

  let chosenRarity = 'common';
  if (rand < 0.03) {
    chosenRarity = 'legendary'; // Exactly 3%
  } else if (rand < 0.13) {
    chosenRarity = 'rare';      // Exactly 10% (0.03 to 0.13)
  } else {
    chosenRarity = 'common';    // Exactly 87% (0.13 to 1.00)
  }

  const pool = GACHA_ELEMENTS.filter(el => el.rarity === chosenRarity);
  const element = pool[Math.floor(Math.random() * pool.length)];

  return {
    element,
    rarity: chosenRarity,
    isNew: false // Will be determined by collection logic
  };
}
