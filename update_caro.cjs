const fs = require('fs');
let content = fs.readFileSync('src/HistoryGeoCaro.jsx', 'utf8');

const newLandmarks = `const LANDMARKS = [
  { name: 'Vịnh Hạ Long', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/V%E1%BB%8Bnh_H%E1%BA%A1_Long_-_NKS.jpg/500px-V%E1%BB%8Bnh_H%E1%BA%A1_Long_-_NKS.jpg' },
  { name: 'Phố cổ Hội An', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/PhoCoHoiAn.jpg/500px-PhoCoHoiAn.jpg' },
  { name: 'Cố đô Huế', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Du_kh%C3%A1ch_vi%E1%BA%BFng_th%C4%83m_L%E1%BA%A7u_Ng%C5%A9_Ph%E1%BB%A5ng.JPG/500px-Du_kh%C3%A1ch_vi%E1%BA%BFng_th%C4%83m_L%E1%BA%A7u_Ng%C5%A9_Ph%E1%BB%A5ng.JPG' },
  { name: 'Tràng An', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Muaxuantamcoc.jpg/500px-Muaxuantamcoc.jpg' },
  { name: 'Đà Lạt', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Da_Lat_-_Viet_Nam.jpg/500px-Da_Lat_-_Viet_Nam.jpg' },
  { name: 'Phú Quốc', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Phu_Quoc%2C_Viet_Nam.jpg/500px-Phu_Quoc%2C_Viet_Nam.jpg' },
  { name: 'Chợ Bến Thành', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Ben_Thanh_market_2.jpg/500px-Ben_Thanh_market_2.jpg' },
  { name: 'Hồ Hoàn Kiếm', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Hoan_Kiem_10082026.jpg/500px-Hoan_Kiem_10082026.jpg' },
  { name: 'Thánh địa Mỹ Sơn', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/2024_-_M%E1%BB%B9_S%C6%A1n_Group_B%2C_C_and_D_-_img_23.jpg/500px-2024_-_M%E1%BB%B9_S%C6%A1n_Group_B%2C_C_and_D_-_img_23.jpg' },
  { name: 'Cầu Vàng', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/The_Golden_Bridge%2C_Ba_Na_Hills%2C_Vietnam.jpg/500px-The_Golden_Bridge%2C_Ba_Na_Hills%2C_Vietnam.jpg' },
  { name: 'Địa đạo Củ Chi', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/W_C%E1%BB%A7_Chi_%C4%90%E1%BB%8Ba_%C4%91%E1%BA%A1o_C%E1%BB%A7_Chi_ng%E1%BB%A5y_trang.JPG/500px-W_C%E1%BB%A7_Chi_%C4%90%E1%BB%8Ba_%C4%91%E1%BA%A1o_C%E1%BB%A7_Chi_ng%E1%BB%A5y_trang.JPG' },
  { name: 'Chợ nổi Cái Răng', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/M%E1%BB%99t_c%E1%BA%A3nh_%E1%BB%9F_ch%E1%BB%A3_n%E1%BB%95i_C%C3%A1i_R%C4%83ng.jpg/500px-M%E1%BB%99t_c%E1%BA%A3nh_%E1%BB%9F_ch%E1%BB%A3_n%E1%BB%95i_C%C3%A1i_R%C4%83ng.jpg' }
];`;

const oldLandmarksRegex = /const LANDMARKS = \[\s*[\s\S]*?\s*\];/;
content = content.replace(oldLandmarksRegex, newLandmarks);

// Update random selection logic
content = content.replace(
  /newBoard\[activeCell\] = \{ player: 'X', landmark: randomLandmark \};/g, 
  "newBoard[activeCell] = { player: 'X', landmark: randomLandmark.name, image: randomLandmark.image };"
);
content = content.replace(
  /newBoard\[botMove\] = \{ player: 'O', landmark: randomLandmark \};/g, 
  "newBoard[botMove] = { player: 'O', landmark: randomLandmark.name, image: randomLandmark.image };"
);

// Update cell rendering logic
const oldStyle = "style={{ minHeight: '3rem' }}";
const newStyle = "style={{ minHeight: '3.5rem', backgroundImage: cell ? `url(${cell.image})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}";
content = content.replace(oldStyle, newStyle);

const oldSpan = /{cell && \(\s*<span className={`text-center leading-tight \${cell.player === 'X' \? 'text-sky-600' : 'text-red-500'}`}>\s*<span className="block font-black text-sm md:text-lg mb-0.5">{cell.player}<\/span>\s*<span className="block text-\[8px\] md:text-\[10px\] uppercase truncate px-0.5 w-full">{cell.landmark}<\/span>\s*<\/span>\s*\)}/m;

const newSpan = `{cell && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-md p-0.5">
                    <span className={\`font-black text-lg md:text-xl drop-shadow-md \${cell.player === 'X' ? 'text-sky-300' : 'text-red-400'}\`}>
                      {cell.player}
                    </span>
                    <span className="text-[7px] md:text-[9px] text-white font-bold uppercase px-1 w-full text-center leading-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                      {cell.landmark}
                    </span>
                  </div>
                )}`;
content = content.replace(oldSpan, newSpan);

fs.writeFileSync('src/HistoryGeoCaro.jsx', content, 'utf8');
console.log('Done replacing');
