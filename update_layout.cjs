const fs = require('fs');
let content = fs.readFileSync('src/TownBuilder.jsx', 'utf8');

// Find the layout wrapper: <div className="flex flex-col xl:flex-row gap-8 mt-6 relative min-h-screen">
const oldWrapper = 'className="flex flex-col xl:flex-row gap-8 mt-6 relative min-h-screen"';
const newWrapper = 'className="flex flex-col gap-8 mt-6 relative min-h-screen"';
content = content.replace(oldWrapper, newWrapper);

// Find the Planet container: <div className="w-full xl:w-5/12 flex flex-col items-center justify-center bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl border-4 border-slate-800 min-h-[500px] mt-16 xl:mt-0 xl:sticky xl:top-10 h-[calc(100vh-80px)]">
const oldPlanet = 'className="w-full xl:w-5/12 flex flex-col items-center justify-center bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl border-4 border-slate-800 min-h-[500px] mt-16 xl:mt-0 xl:sticky xl:top-10 h-[calc(100vh-80px)]"';
const newPlanet = 'className="w-full flex flex-col items-center justify-center bg-slate-900 rounded-[3rem] p-6 sm:p-10 relative overflow-hidden shadow-2xl border-4 border-slate-800 h-[350px] md:h-[450px] mt-12 xl:mt-0"';
content = content.replace(oldPlanet, newPlanet);

// Find the Rooms container: <div className="w-full xl:w-7/12 mt-8 xl:mt-0">
const oldRooms = 'className="w-full xl:w-7/12 mt-8 xl:mt-0"';
const newRooms = 'className="w-full mt-2"';
content = content.replace(oldRooms, newRooms);

fs.writeFileSync('src/TownBuilder.jsx', content, 'utf8');
console.log('Layout updated to flex-col');
