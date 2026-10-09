import React, { useState } from 'react';
import { FlaskConical, Atom, RefreshCw, Zap, BookOpen, Sparkles } from 'lucide-react';

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
    { id: 'oxygen', icon: '💨', name: 'Oxi (O2)', color: 'bg-sky-100 text-sky-600 border-sky-200' },
    { id: 'sugar', icon: '🧊', name: 'Đường (C6H12O6)', color: 'bg-pink-100 text-pink-600 border-pink-200' },
    { id: 'yeast', icon: '🦠', name: 'Men vi sinh', color: 'bg-lime-100 text-lime-700 border-lime-200' },
    { id: 'soil', icon: '🪨', name: 'Đất màu mỡ', color: 'bg-amber-100 text-amber-800 border-amber-200' },
    { id: 'electricity', icon: '⚡', name: 'Dòng điện', color: 'bg-indigo-100 text-indigo-600 border-indigo-200' },
    // Familiar everyday elements
    { id: 'salt', icon: '🧂', name: 'Muối ăn (NaCl)', color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
    { id: 'soap', icon: '🫧', name: 'Xà phòng', color: 'bg-purple-100 text-purple-600 border-purple-200' },
    { id: 'oil', icon: '🛢️', name: 'Dầu ăn', color: 'bg-yellow-200 text-yellow-800 border-yellow-300' },
    { id: 'milk', icon: '🥛', name: 'Sữa tươi', color: 'bg-white text-slate-600 border-slate-300' },
  ];

  const combos = {
    'milk+heat': {
      icon: '☕', name: 'Hiện tượng tạo váng và trào sữa (Vật lý/Hóa học)',
      reaction: 'Lactalbumin + Casein + t° → Màng váng Protein',
      desc: 'Sữa đóng một lớp váng mỏng trên bề mặt. Nếu đun sôi, sữa rất dễ bùng trào ra ngoài.',
      explain: 'Nhiệt độ làm các protein (lactalbumin) đông tụ tạo thành lớp váng trên mặt. Lớp váng này ngăn hơi nước bay hơi. Khi áp suất hơi nước bên dưới đủ lớn sẽ phá vỡ lớp váng đẩy bọt sữa trào ra ngoài.'
    },
    'milk+acid': {
      icon: '🧀', name: 'Đông tụ Protein (Hóa sinh)',
      reaction: 'Casein(mang điện âm) + H⁺ (từ HCl/H2SO4) → Casein (trung hòa)↓',
      desc: 'Sữa lập tức bị vón cục mạnh, tách thành phần rắn (sữa đông) và phần nước trong (whey).',
      explain: 'Axit mạnh (HCl, H2SO4) làm giảm pH của sữa đột ngột xuống dưới điểm đẳng điện của protein Casein (pH 4.6), triệt tiêu lực đẩy tĩnh điện khiến các hạt casein kết tụ lại với nhau.'
    },
    'milk+baking_soda': {
      icon: '🧪', name: 'Trung hòa axit (Hóa học)',
      reaction: 'Axit lactic + NaHCO3 → Muối + CO2 + H2O',
      desc: 'Giảm độ chua của sữa, ngăn sữa bị kết tủa khi đun nóng.',
      explain: 'Sữa (nhất là sữa cũ) có tính axit nhẹ do vi khuẩn sinh axit lactic. Baking soda có tính kiềm sẽ trung hòa axit này, bảo vệ cấu trúc hệ nhũ tương của sữa không bị phá vỡ khi gặp nhiệt độ cao.'
    },
    'milk+yeast': {
      icon: '🍧', name: 'Lên men Lactic (Làm sữa chua)',
      reaction: 'Lactose + Vi khuẩn Lactic → Axit Lactic',
      desc: 'Sữa đặc lại, có vị chua nhẹ (Sữa chua / Yogurt).',
      explain: 'Men vi sinh (vi khuẩn lactic) tiêu thụ đường lactose trong sữa và thải ra axit lactic. Axit này làm giảm pH của sữa, khiến protein casein đông tụ lại tạo thành kết cấu đặc mịn của sữa chua.'
    },
    'milk+sugar': {
      icon: '🍮', name: 'Tăng áp suất thẩm thấu / Phản ứng Maillard',
      reaction: 'Protein + Đường + Nhiệt → Hợp chất màu nâu',
      desc: 'Sữa ngọt hơn. Nếu đun nóng lâu, sữa có thể chuyển sang màu nâu caramel.',
      explain: 'Ở nhiệt độ cao, đường sẽ phản ứng với các axit amin trong protein sữa (Phản ứng Maillard) tạo ra các hợp chất có mùi thơm và màu nâu đặc trưng (giống màu kẹo karamel hay vỏ bánh mì).'
    },
    'milk+light': {
      icon: '☀️', name: 'Oxy hóa quang hóa (Photo-oxidation)',
      reaction: 'Riboflavin + UV + O2 → Phá hủy vitamin',
      desc: 'Sữa giảm chất lượng dinh dưỡng và xuất hiện mùi hôi khó chịu.',
      explain: 'Ánh sáng (nhất là tia UV) kích thích Riboflavin (Vitamin B2) trong sữa, tạo ra các gốc tự do phản ứng với chất béo và protein, sinh ra mùi "sunlight flavor" (mùi cháy khét do ánh sáng).'
    },
    'milk+oxygen': {
      icon: '💨', name: 'Oxy hóa Lipid (Hóa học)',
      reaction: 'O2 + Chất béo sữa → Peroxide',
      desc: 'Sữa bị ôi thiu, mất vị thơm ngon ban đầu.',
      explain: 'Oxy trong không khí từ từ phản ứng với các liên kết đôi của axit béo chưa no có trong chất béo của sữa, làm đứt gãy chuỗi carbon và tạo ra các hợp chất có mùi ôi khét.'
    },
    'milk+metal': {
      icon: '🔩', name: 'Xúc tác oxy hóa',
      reaction: 'Ion kim loại (Cu²⁺, Fe³⁺) xúc tác oxy hóa',
      desc: 'Đẩy nhanh quá trình hỏng và ôi khét của sữa.',
      explain: 'Các ion kim loại (như Sắt, Đồng) đóng vai trò là chất xúc tác cực mạnh, làm tăng tốc độ phản ứng oxy hóa chất béo và phá hủy vitamin C trong sữa, khiến sữa hỏng rất nhanh.'
    },
    'milk+salt': {
      icon: '🧂', name: 'Kết tủa muối (Salting out)',
      reaction: 'Casein(H2O)n + NaCl (nồng độ cao) → Casein↓ + Na⁺(H2O) + Cl⁻(H2O)',
      desc: 'Nếu cho quá nhiều muối, protein trong sữa có thể bị kết tủa.',
      explain: 'Ở nồng độ muối rất cao, các ion của muối sẽ "tranh giành" nước với các phân tử protein (Casein). Khi mất đi lớp vỏ bọc nước (lớp hydrat hóa), protein sẽ kết tụ lại và tách ra khỏi dung dịch.'
    },
    'milk+oil': {
      icon: '🛢️', name: 'Hệ nhũ tương không bền',
      reaction: 'Nhũ tương: (RCOO)3C3H5 + H2O (trong sữa) ⇌ Tách lớp',
      desc: 'Dầu nổi lên trên bề mặt sữa. Nếu đánh mạnh (có chất nhũ hóa) có thể tạo sốt.',
      explain: 'Sữa chứa nhiều nước nên đẩy dầu mỡ nổi lên trên. Tuy nhiên sữa có chứa một ít chất nhũ hóa tự nhiên (phospholipid). Nếu khuấy rất mạnh, dầu có thể bị phân tán tạm thời vào sữa.'
    },
    'milk+water': {
      icon: '💧', name: 'Pha loãng hệ nhũ tương (Vật lý)',
      reaction: 'Casein/Lactose + H2O (thêm vào) → Hệ keo pha loãng',
      desc: 'Sữa trở nên loãng hơn, bớt đục, ánh sáng truyền qua dễ dàng hơn.',
      explain: 'Việc thêm nước chỉ làm tăng khoảng cách giữa các hạt chất béo và protein phân tán trong hệ nhũ tương, không gây ra sự biến đổi hóa học nào.'
    },
    'milk+electricity': {
      icon: '⚡', name: 'Dẫn điện nhẹ',
      reaction: 'Ca²⁺, K⁺, Na⁺, Cl⁻ (trong sữa) + e⁻ → Dẫn điện (Di chuyển ion)',
      desc: 'Dòng điện có thể đi qua sữa.',
      explain: 'Sữa không phải là nước tinh khiết mà chứa rất nhiều khoáng chất hòa tan (như Canxi, Kali, Natri, Clo...) dưới dạng ion. Các ion này giúp sữa có khả năng dẫn điện nhẹ.'
    },

    'soap+milk': {
      icon: '🎨', name: 'Giảm sức căng bề mặt (Magic Milk)',
      reaction: 'R-COONa + Triglyceride/Casein → Hạt Mixen',
      desc: 'Tạo hiện tượng các vệt màu chuyển động linh hoạt. Có thể gây đông tụ một phần protein sữa.',
      explain: 'Xà phòng phá vỡ sức căng bề mặt của nước và liên kết với phân tử chất béo/protein trong sữa, làm chúng di chuyển xáo trộn mạnh mẽ. Môi trường kiềm nhẹ của xà phòng làm biến tính màng protein bọc giọt chất béo.'
    },
    'soap+baking_soda': {
      icon: '🫧', name: 'Tăng cường tẩy rửa (Hệ đệm kiềm)',
      reaction: 'RCOONa + NaHCO3 → Hệ đệm kiềm ổn định',
      desc: 'Không xảy ra phản ứng hóa học rõ rệt, nhưng làm tăng khả năng tẩy rửa và tạo môi trường đệm kiềm ổn định.',
      explain: 'Cả xà phòng và NaHCO3 đều có tính kiềm nhẹ. NaHCO3 cung cấp ion bicarbonate hỗ trợ trung hòa các vết bẩn có tính axit và làm mềm nước.'
    },
    'soap+sugar': {
      icon: '🎈', name: 'Tăng độ bền bong bóng (Vật lý)',
      reaction: 'RCOONa + C6H12O6 (Đường) + H2O → Dung dịch đồng nhất (tăng độ nhớt)',
      desc: 'Không phản ứng hóa học. Tuy nhiên dung dịch xà phòng sẽ có độ nhớt cao hơn, bong bóng xà phòng lâu tan hơn.',
      explain: 'Phân tử đường (C6H12O6) hòa tan vào nước giữa các màng xà phòng, làm chậm quá trình bay hơi của nước, giúp màng bong bóng bền vững hơn và khó vỡ hơn.'
    },
    'soap+heat': {
      icon: '🔥', name: 'Tăng tốc độ nhũ tương hóa (Vật lý)',
      reaction: 'RCOONa (ít tan) + t° → RCOONa (hòa tan hoàn toàn)',
      desc: 'Xà phòng tan nhanh hơn, nhũ tương hóa và đánh bay vết bẩn dầu mỡ nhanh và mạnh hơn.',
      explain: 'Nhiệt độ cao làm tăng độ tan của xà phòng trong nước và tăng chuyển động nhiệt của các phân tử, giúp đuôi kị nước của xà phòng đâm vào chất béo nhanh hơn.'
    },
    'soap+oxygen': {
      icon: '💨', name: 'Oxy hóa chậm (Hóa học)',
      reaction: 'O2 + Gốc axit béo chưa no → Hợp chất ôi khét',
      desc: 'Ở điều kiện thường không phản ứng. Về lâu dài có thể làm xà phòng bị gắt dầu hoặc ôi.',
      explain: 'Khí Oxi trong không khí từ từ oxy hóa các gốc axit béo chưa no (chứa liên kết đôi C=C) có trong xà phòng, làm thay đổi cấu trúc và gây mùi khó chịu.'
    },
    'soap+light': {
      icon: '☀️', name: 'Xúc tác oxy hóa',
      reaction: 'Ánh sáng UV xúc tác phản ứng oxy hóa',
      desc: 'Xúc tác quá trình làm hỏng, ôi khét xà phòng khi tiếp xúc không khí lâu ngày.',
      explain: 'Ánh sáng (đặc biệt là tia UV) kết hợp với Oxi sẽ đẩy nhanh tốc độ phân hủy và oxy hóa gốc axit béo chưa no trong xà phòng.'
    },
    'soap+electricity': {
      icon: '⚡', name: 'Điện phân dung dịch (Hóa học)',
      reaction: '2RCOONa + 2H2O (điện phân) → R-R + 2CO2↑ + 2NaOH + H2↑',
      desc: 'Xảy ra quá trình điện phân dung dịch điện ly.',
      explain: 'Xà phòng là muối phân ly ra ion RCOO⁻ và Na⁺. Dòng điện đi qua sẽ gây ra các phản ứng điện phân tại các điện cực sinh ra khí (H2, O2).'
    },
    'soap+yeast': {
      icon: '🦠', name: 'Ức chế vi sinh vật (Sinh học)',
      reaction: 'RCOONa + Tế bào men → Phá vỡ màng Lipid tế bào',
      desc: 'Không có phản ứng hóa học tạo chất mới, nhưng xà phòng sẽ diệt hoặc ức chế men vi sinh.',
      explain: 'Tính tẩy rửa và nhũ tương hóa của xà phòng sẽ hòa tan lớp màng lipid bảo vệ của tế bào men vi sinh, làm hỏng màng và tiêu diệt chúng.'
    },
    'soap+seed': {
      icon: '🌱', name: 'Ức chế nảy mầm (Sinh học)',
      reaction: 'RCOONa + Hạt giống → Phá hủy màng tế bào hạt',
      desc: 'Xà phòng nồng độ cao làm hạt giống không thể nảy mầm.',
      explain: 'Chất hoạt động bề mặt phá hủy lớp màng bảo vệ tự nhiên của hạt, gây độc tính hoặc ức chế quá trình hô hấp, hút nước nảy mầm của hạt giống.'
    },
    'soap+soil': {
      icon: '🪨', name: 'Phân tán hạt đất (Hóa lý)',
      reaction: 'RCOONa + Hạt sét (SiO2/Al2O3) → Mixen lơ lửng',
      desc: 'Không phản ứng hóa học đặc trưng, xà phòng giúp rửa trôi bùn đất nhanh hơn.',
      explain: 'Các phân tử xà phòng làm giảm sức căng bề mặt của nước, len lỏi vào các khe hở của đất và bọc lấy các hạt sét, hạt mùn, giúp chúng lơ lửng và dễ bị rửa trôi.'
    },
    'soap+metal': {
      icon: '🔩', name: 'Làm sạch bề mặt kim loại',
      reaction: 'RCOONa + Fe/Zn → Không phản ứng hóa học (Chỉ rửa trôi dầu mỡ)',
      desc: 'Không phản ứng hóa học trực tiếp với kim loại ở điều kiện thường.',
      explain: 'Xà phòng chỉ có tác dụng nhũ tương hóa và cuốn trôi các lớp dầu mỡ công nghiệp bám trên bề mặt kim loại chứ không tác dụng trực tiếp với Fe, Zn.'
    },

    'soap+vinegar': {
      icon: '🌫️', name: 'Mất khả năng tẩy rửa (Hóa học)',
      reaction: 'RCOONa + CH3COOH → RCOOH↓ + CH3COONa',
      desc: 'Dung dịch bị đục, xuất hiện kết tủa dạng keo hoặc váng mỡ nổi lên trên bề mặt.',
      explain: 'Giấm chứa axit axetic (CH3COOH) mạnh hơn axit béo tự do. Nó đẩy axit béo ra khỏi muối của xà phòng. Axit béo (RCOOH) sinh ra không tan trong nước tạo thành váng đục, làm xà phòng mất khả năng tạo bọt và tẩy rửa.'
    },
    'acid+soap': {
      icon: '☁️', name: 'Phá hủy xà phòng (Hóa học)',
      reaction: 'RCOONa + HCl → RCOOH↓ + NaCl',
      desc: 'Dung dịch đục ngay lập tức, kết tủa axit béo đóng vón mạnh mẽ nổi lên trên mặt nước.',
      explain: 'Các axit vô cơ mạnh (HCl, H2SO4) phản ứng mãnh liệt với xà phòng tạo thành axit béo tự do (RCOOH) không tan trong nước. Phản ứng này vô hiệu hóa hoàn toàn tính tẩy rửa của xà phòng.'
    },
    'oil+soap': {
      icon: '🫧', name: 'Sự nhũ tương hóa (Hóa lý)',
      reaction: 'RCOONa + (R-COO)3C3H5 → Mixen nhũ tương lơ lửng',
      desc: 'Dầu ăn bị phân tán thành các giọt lơ lửng, tạo hệ nhũ tương bền vững (nước đục như sữa).',
      explain: 'Phân tử xà phòng có đầu phân cực (-COONa) ưa nước và đuôi hidrocacbon kị nước nhưng ưa dầu. Đuôi kị nước cắm vào giọt dầu, đầu ưa nước quay ra ngoài dung dịch tạo thành các micelle. Micelle ngăn giọt dầu gom lại, giúp dầu bị cuốn trôi.'
    },
    'salt+soap': {
      icon: '❄️', name: 'Hiện tượng xát muối xà phòng (Salting out)',
      reaction: 'RCOONa ⇌ RCOO⁻ + Na⁺',
      desc: 'Xuất hiện kết tủa xà phòng màu trắng tách ra khỏi dung dịch và nổi lên trên.',
      explain: 'Khi thêm NaCl, nồng độ ion Na⁺ tăng vọt. Theo nguyên lý chuyển dịch cân bằng Le Chatelier, cân bằng dịch chuyển về bên trái, làm độ tan của xà phòng giảm mạnh dẫn đến kết tinh. Đây là phương pháp thu hồi xà phòng trong công nghiệp nấu xà phòng.'
    },
    'water+soap': {
      icon: '🧽', name: 'Sự thủy phân tạo kiềm (Hóa học)',
      reaction: 'RCOO⁻ + H2O ⇌ RCOOH + OH⁻',
      desc: 'Xà phòng tan một phần, tạo cảm giác nhờn, tạo bọt khi khuấy và làm xanh quỳ tím (kiềm nhẹ).',
      explain: 'Xà phòng là muối của axit yếu và bazo mạnh nên bị thủy phân một phần trong nước. Sự xuất hiện của ion OH⁻ làm cho dung dịch xà phòng có tính kiềm nhẹ (pH ≈ 9 - 10).'
    },

    // Existing combos with upgraded educational info
    'water+heat': { 
      icon: '☁️', name: 'Sự bay hơi (Vật lý)', 
      reaction: 'H2O (lỏng) + Nhiệt → H2O (khí)',
      desc: 'Nước được đun nóng đến 100°C sẽ chuyển từ thể lỏng sang thể khí.',
      explain: 'Nhiệt độ cung cấp động năng cực lớn làm đứt gãy hoàn toàn các liên kết hydro yếu giữa các phân tử nước. Khi áp suất hơi nước vượt qua áp suất của khí quyển, nước sẽ sôi và bốc hơi. Đây là nền tảng của vòng tuần hoàn nước trong tự nhiên.'
    },
    'vinegar+baking_soda': { 
      icon: '🌋', name: 'Phản ứng tạo bọt khí (Hóa học)', 
      reaction: 'CH3COOH + NaHCO3 → CH3COONa + H2O + CO2↑',
      desc: 'Giấm phản ứng với Baking Soda sinh ra lượng lớn khí CO2 tạo bọt.',
      explain: 'Đây là phản ứng axit - bazơ kinh điển. Axit axetic (Giấm) nhường ion H+ cho ion HCO3- tạo thành axit cacbonic (H2CO3) không bền. H2CO3 lập tức phân hủy thành nước (H2O) và khí cacbonic (CO2) bay lên. Thường được ứng dụng làm mô hình núi lửa hoặc thông tắc bồn cầu.'
    },
    'seed+light': { 
      icon: '🌿', name: 'Quang hợp (Sinh học)', 
      reaction: '6CO2 + 6H2O + Ánh sáng → C6H12O6 + 6O2',
      desc: 'Cây sử dụng ánh sáng để tổng hợp chất hữu cơ nuôi cơ thể.',
      explain: 'Chất diệp lục trong lá cây hấp thụ năng lượng quang tử từ ánh sáng mặt trời. Năng lượng này bẻ gãy phân tử H2O, kết hợp với CO2 từ không khí để tổng hợp nên glucose (đường) - nguồn năng lượng chính cho cây, đồng thời giải phóng Oxi ra môi trường.'
    },
    'acid+metal': { 
      icon: '💥', name: 'Phản ứng thế (Hóa học)', 
      reaction: 'Zn + 2HCl → ZnCl2 + H2↑',
      desc: 'Axit ăn mòn kim loại và giải phóng khí Hydro dễ cháy.',
      explain: 'Các kim loại đứng trước Hydro trong dãy hoạt động hóa học (như Zn, Fe, Mg...) có tính khử mạnh, sẽ đẩy ion H+ ra khỏi dung dịch axit. Ion H+ nhận electron biến thành khí H2 thoát ra ngoài. Đây là phương pháp phổ biến để điều chế khí Hydro trong phòng thí nghiệm.'
    },
    'oxygen+metal': {
      icon: '🟤', name: 'Sự Oxi hóa - Rỉ sét (Hóa học)',
      reaction: '4Fe + 3O2 + xH2O → 2Fe2O3·xH2O',
      desc: 'Kim loại tiếp xúc lâu với Oxi và độ ẩm sẽ tạo ra lớp oxit (rỉ sét).',
      explain: 'Oxi đóng vai trò chất oxi hóa mạnh, nhận electron từ kim loại ở điều kiện có độ ẩm. Phản ứng điện hóa này tạo ra Sắt (III) oxit ngậm nước (có màu nâu đỏ, xốp và giòn), phá hủy từ từ bề mặt kim loại. Để ngăn ngừa, người ta thường sơn chống rỉ hoặc mạ kẽm.'
    },
    'sugar+yeast': {
      icon: '🍾', name: 'Lên men rượu (Sinh học)',
      reaction: 'C6H12O6 (men) → 2C2H5OH + 2CO2↑',
      desc: 'Nấm men tiêu thụ đường sinh ra cồn và khí CO2 trong điều kiện không có Oxi.',
      explain: 'Nấm men có chứa enzyme zymase đặc biệt giúp phân giải đường glucose để lấy năng lượng (ATP). Quá trình kỵ khí này sinh ra sản phẩm phụ là etanol (cồn) và khí CO2. Nguyên lý này được con người ứng dụng hàng ngàn năm nay để ủ rượu, làm bia và làm bánh mì nở xốp.'
    },
    'seed+soil': {
      icon: '🌱', name: 'Sự nảy mầm (Sinh học)',
      reaction: 'Hạt + Nước/Dinh dưỡng → Cây mầm',
      desc: 'Hạt giống hút ẩm và khoáng chất từ đất để phá vỏ nảy mầm.',
      explain: 'Đất cung cấp độ ẩm giúp hạt trương nước, làm nứt vỏ và kích hoạt các enzyme phân giải chất dự trữ trong phôi hạt. Cùng với lượng muối khoáng đa lượng (N, P, K) trong đất màu mỡ, mầm cây non được tiếp sức để chọc qua lớp vỏ và đâm rễ vững chắc.'
    },
    'electricity+water': {
      icon: '⚡', name: 'Điện phân nước (Hóa học)',
      reaction: '2H2O (điện phân) → 2H2↑ + O2↑',
      desc: 'Dòng điện bẻ gãy phân tử nước thành hai chất khí cơ bản.',
      explain: 'Khi cho dòng điện một chiều đi qua dung dịch nước (thường pha thêm chất điện li), năng lượng điện làm các phân tử H2O phân ly. Tại cực âm (catot), ion H+ nhận electron sinh ra H2. Tại cực dương (anot), H2O nhường electron sinh ra O2. Ứng dụng để sản xuất năng lượng sạch Hydro.'
    },
    'sugar+heat': {
      icon: '🍮', name: 'Phản ứng Caramel hóa (Hóa học)',
      reaction: 'C12H22O11 + t° → Hỗn hợp Polyme phức tạp',
      desc: 'Đường bị nhiệt phân tạo ra kẹo đắng (caramel) có màu nâu và mùi thơm.',
      explain: 'Khi đun nóng trên 160°C, các phân tử đường bị loại nước (dehydration) và trải qua hàng loạt phản ứng trùng hợp phức tạp. Sự phá vỡ các liên kết và tạo thành các hợp chất thơm mới (furan, maltol) mang lại hương vị nướng và màu nâu óng ánh cho món Caramel ăn kèm bánh Flan.'
    },
    'water+light': {
      icon: '🌤️', name: 'Sự bay hơi (Vật lý)',
      reaction: 'H2O (lỏng) + Ánh sáng → H2O (khí)',
      desc: 'Ánh sáng mặt trời cung cấp nhiệt lượng làm nước bay hơi từ từ.',
      explain: 'Năng lượng từ bức xạ mặt trời truyền vào các phân tử nước ở lớp bề mặt, làm chúng dao động mạnh và bứt khỏi bề mặt lỏng để bay vào không khí. Đây là quá trình thu nhiệt và là động cơ chính điều hòa khí hậu toàn cầu thông qua chu trình nước.'
    },
    'vinegar+light': {
      icon: '📉', name: 'Bay hơi dung dịch (Vật lý)',
      reaction: 'Dung dịch + Ánh sáng → Dung dịch đặc hơn',
      desc: 'Ánh sáng làm dung môi (nước) bay hơi, thay đổi thể tích nhưng không thay đổi cấu trúc chất tan.',
      explain: 'Khi dung dịch như Giấm (Axit axetic pha loãng) phơi dưới ánh sáng, phần nước sẽ bay hơi dần. Quá trình này chỉ làm giảm thể tích dung môi và tăng nồng độ phần trăm của dung dịch, hoàn toàn không phá vỡ liên kết phân tử của axit axetic bên trong.'
    },
    'acid+vinegar': {
      icon: '🧫', name: 'Hỗn hợp Axit (Không phản ứng)',
      reaction: 'HCl/H2SO4 + CH3COOH → Hỗn hợp hai axit (Không PƯ)',
      desc: 'Hai axit kết hợp với nhau không sinh ra phản ứng hóa học mà chỉ hòa trộn vật lý.',
      explain: 'Cả Axit vô cơ và Giấm đều mang tính axit (chuyên nhường ion H+). Vì chúng có cùng bản chất hóa học, khi trộn lẫn sẽ không xảy ra phản ứng trao đổi hay oxi hóa khử. Thay vào đó, chúng chỉ hòa quyện tạo thành một dung dịch có tính axit tổng hợp mạnh hơn.'
    },
    'electricity+metal': {
      icon: '💡', name: 'Sự dẫn điện & Tỏa nhiệt (Vật lý)',
      reaction: 'Fe/Zn + e⁻ (Dòng điện) → Dẫn điện + Nhiệt lượng (t°)',
      desc: 'Kim loại cho dòng điện đi qua dễ dàng nhờ mạng lưới electron tự do.',
      explain: 'Kim loại có mạng tinh thể chứa vô số các electron tự do. Khi có hiệu điện thế, các electron di chuyển thành dòng có hướng. Tuy nhiên, sự va chạm của chúng với các ion dương ở nút mạng tinh thể sẽ cản trở dòng điện (điện trở) và biến điện năng thành nhiệt năng (nguyên lý của dây tóc bóng đèn).'
    },

    // New Everyday Combos
    'water+salt': {
      icon: '🌊', name: 'Sự hòa tan - Nước muối (Vật lý)',
      reaction: 'NaCl (rắn) + H2O → Na+ + Cl- (dung dịch)',
      desc: 'Muối tan hoàn toàn trong nước tạo thành dung dịch có khả năng dẫn điện.',
      explain: 'Các phân tử nước có tính phân cực (đầu Oxi mang điện âm, đầu Hydro mang điện dương) sẽ vây quanh và kéo các ion Na+ và Cl- ra khỏi mạng tinh thể muối. Dung dịch nước muối này có các ion tự do di chuyển, do đó nó có thể dẫn điện rất tốt so với nước tinh khiết.'
    },
    'water+oil': {
      icon: '🥗', name: 'Sự phân tách lớp (Vật lý)',
      reaction: 'H2O + (RCOO)3C3H5 → Không phản ứng (Phân lớp do khối lượng riêng)',
      desc: 'Dầu ăn không tan trong nước và nổi lên trên bề mặt do nhẹ hơn.',
      explain: 'Phân tử nước có tính phân cực cao (ưa nước), trong khi dầu ăn cấu tạo từ các hydrocarbon không phân cực (kỵ nước). Do nguyên tắc "đồng thanh tương ứng" trong dung môi, chúng đẩy nhau. Hơn nữa, khối lượng riêng của dầu nhẹ hơn nước nên dầu luôn nổi lên trên tạo thành hai lớp rõ rệt.'
    },
    
    'milk+vinegar': {
      icon: '🧀', name: 'Sự đông tụ Protein (Sinh hóa)',
      reaction: 'Casein(mang điện âm) + CH3COOH → Casein↓ + CH3COO⁻',
      desc: 'Giấm làm sữa bị tách nước và vón cục lại thành phô mai tươi.',
      explain: 'Sữa chứa nhiều protein dạng keo gọi là casein mang điện tích âm, giúp chúng đẩy nhau và lơ lửng trong nước. Khi thêm axit (Giấm), ion H+ trung hòa điện tích này. Các phân tử casein mất lực đẩy, kết dính lại với nhau thành các cục vón màu trắng. Đây là nguyên lý cơ bản để làm phô mai, sữa chua hoặc đậu hũ.'
    },
    'baking_soda+heat': {
      icon: '🧁', name: 'Phân hủy nhiệt (Hóa học)',
      reaction: '2NaHCO3 + t° → Na2CO3 + H2O + CO2↑',
      desc: 'Nhiệt độ làm Baking soda phân hủy sinh ra khí làm xốp bánh.',
      explain: 'Baking soda (Natri Bicacbonat) khi bị nướng ở nhiệt độ cao (trên 80°C) sẽ trải qua phản ứng nhiệt phân. Nó vỡ ra tạo thành muối natri cacbonat, hơi nước và đặc biệt là khí CO2. Các bong bóng khí CO2 bị kẹp lại trong bột mì sẽ giãn nở, giúp bánh bông lan, bánh quy trở nên phồng và xốp mềm.'
    }
,

    
    'salt+heat': {
      icon: '🔥', name: 'Sự nóng chảy (Vật lý)',
      reaction: 'NaCl (rắn) + 801°C → NaCl (lỏng)',
      desc: 'Cần nhiệt độ cực cao (hơn 800 độ) để muối ăn chuyển sang trạng thái lỏng.',
      explain: 'Khác với đường rất dễ cháy khét, muối ăn (NaCl) có liên kết ion cực kỳ bền vững. Phải nung ở nhiệt độ lên đến 801°C, lưới tinh thể ion mới bắt đầu bị bẻ gãy và muối chuyển sang trạng thái lỏng. Ở điều kiện đun nấu bình thường trên bếp, muối chỉ nóng lên chứ không hề bị nóng chảy.'
    },
    'soil+water': {
      icon: '🟤', name: 'Hỗn hợp huyền phù (Vật lý)',
      reaction: 'SiO2, Mùn hữu cơ + H2O → Huyền phù (Bùn đục)',
      desc: 'Đất hòa với nước tạo thành bùn, hòa tan các khoáng chất vi lượng.',
      explain: 'Đất chứa hạt sét, cát, xác hữu cơ và chất khoáng. Khi trộn với nước, các hạt nhẹ lơ lửng tạo thành "huyền phù" làm nước đục, hạt nặng (cát) chìm xuống đáy. Đồng thời nước sẽ hòa tan các muối khoáng có trong đất (N, P, K), biến thành dạng dinh dưỡng lỏng rễ cây hút được.'
    },
    'yeast+heat': {
      icon: '☠️', name: 'Sự ức chế / Chết men (Sinh học)',
      reaction: 'Men vi sinh + t°(>50°C) → Biến tính protein (Men chết)',
      desc: 'Nhiệt độ quá cao (trên 50°C) sẽ làm hỏng tế bào và tiêu diệt nấm men.',
      explain: 'Men vi sinh là các cơ thể sống vi mô. Chúng chỉ sinh sôi và hoạt động tốt ở nhiệt độ ấm (khoảng 30-35°C). Nếu tăng nhiệt độ lên quá cao (như dội nước sôi), các enzyme và protein trong tế bào men sẽ bị biến tính (chín), dẫn đến men bị tiêu diệt và mất hoàn toàn khả năng lên men bột bánh mì.'
    },
    'yeast+soil': {
      icon: '🍄', name: 'Phân giải mùn hữu cơ (Sinh học)',
      reaction: 'Vi sinh vật + Hữu cơ → Mùn + Khoáng vô cơ + CO2↑',
      desc: 'Men và vi sinh vật giúp phân hủy xác thực vật làm đất màu mỡ hơn.',
      explain: 'Trong đất tự nhiên luôn chứa hệ vi sinh vật và nấm men khổng lồ. Chúng hoạt động như những nhà máy tái chế, tiết enzyme phân giải các tàn dư hữu cơ (lá rụng, xác chết) thành mùn và khoáng chất vô cơ. Nhờ đó đất trở nên tơi xốp, giữ ẩm tốt và trả lại dinh dưỡng cho chu trình tự nhiên.'
    },
    'sugar+water': {
      icon: '🥤', name: 'Sự hòa tan không điện ly (Vật lý)',
      reaction: 'C12H22O11 (rắn) + H2O → C12H22O11 (aq)',
      desc: 'Các tinh thể đường khuếch tán đều trong nước nhưng không dẫn điện.',
      explain: 'Phân tử đường (Sucrose) chứa nhiều nhóm -OH phân cực, nên rất dễ bị các phân tử nước kéo bứt ra khỏi tinh thể hạt đường. Khi hòa tan, đường len lỏi đều vào khoảng trống giữa các phân tử nước. Tuy nhiên, đường không phân ly thành các ion tích điện (như muối), nên nước đường hoàn toàn không dẫn điện.'
    },
    'oil+heat': {
      icon: '🔥', name: 'Điểm khói / Sự cháy (Hóa học)',
      reaction: '(C17H33COO)3C3H5 + t° → C3H4O (Acrolein) + 3 C17H33COOH',
      desc: 'Đun nóng dầu quá mức (Điểm khói) sẽ làm dầu bị phân hủy sinh ra khói.',
      explain: 'Khi đun dầu ăn quá nhiệt (khoảng 200-250°C tùy loại), các phân tử axit béo bị bẻ gãy và phân hủy (oxy hóa) sinh ra khói trắng và các hợp chất độc hại như Aldehyde, Acrolein. Đây là lý do tại sao không nên chiên xào bằng dầu ở nhiệt độ bốc khói mịt mù.'
    }

  };

  const getCombination = (id1, id2) => combos[`${id1}+${id2}`] || combos[`${id2}+${id1}`];

  const handleSelect = (el) => {
    if (result) {
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
          if (addReward) addReward(20, 5); 
        } else {
          setResult({
            name: 'Thất bại!',
            icon: '❓',
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
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-cyan-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-4 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <FlaskConical size={32} className="text-cyan-400" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 tracking-wide">PHÒNG THÍ NGHIỆM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">VIRTUAL LAB</span></h2>
          <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">Nơi mô phỏng các phản ứng khoa học kì thú. Kết hợp các nguyên tố và môi trường để khám phá định luật vạn vật!</p>
        </header>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl mb-10 shadow-inner">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center min-h-[16rem]">
            
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
