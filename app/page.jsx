"use client";

import { useState, useEffect, useRef } from "react";

// ==================== LOGO SVG COMPONENT ====================
function BaanBotLogo({ width = 260, style = {} }) {
  const height = Math.round(width * 200 / 520);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200" width={width} height={height} style={style}>
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#0D1B2A"}}/>
          <stop offset="100%" style={{stopColor:"#1A2744"}}/>
        </linearGradient>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#00D2FF"}}/>
          <stop offset="100%" style={{stopColor:"#0077FF"}}/>
        </linearGradient>
        <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#7DF9FF"}}/>
          <stop offset="100%" style={{stopColor:"#00BFFF"}}/>
        </linearGradient>
        <radialGradient id="glowYellow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{stopColor:"#FFE94D",stopOpacity:1}}/>
          <stop offset="100%" style={{stopColor:"#FF9500",stopOpacity:0.3}}/>
        </radialGradient>
        <linearGradient id="textGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"#FF6B6B"}}/>
          <stop offset="35%" style={{stopColor:"#FFD93D"}}/>
          <stop offset="70%" style={{stopColor:"#6BCB77"}}/>
          <stop offset="100%" style={{stopColor:"#4ECDC4"}}/>
        </linearGradient>
        <linearGradient id="textGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"#FF9500"}}/>
          <stop offset="100%" style={{stopColor:"#FFE94D"}}/>
        </linearGradient>
        <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{stopColor:"#FFFFFF"}}/>
          <stop offset="40%" style={{stopColor:"#7DF9FF"}}/>
          <stop offset="100%" style={{stopColor:"#0077FF",stopOpacity:0}}/>
        </radialGradient>
        <filter id="dropShadowL" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00D2FF" floodOpacity="0.4"/>
        </filter>
        <filter id="glowFilterL" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="textGlowL" x="-5%" y="-20%" width="110%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="strongGlowL" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <style>{`
          @keyframes bbPulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
          @keyframes bbBlink { 0%,90%,100%{transform:scaleY(1)} 95%{transform:scaleY(0.1)} }
          @keyframes bbFloat { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-4px)} }
          .bb-robot { animation: bbFloat 3s ease-in-out infinite; transform-origin: 90px 100px; }
          .bb-eye-l { animation: bbBlink 4s ease-in-out infinite; transform-origin: 75px 87px; }
          .bb-eye-r { animation: bbBlink 4s ease-in-out infinite 0.1s; transform-origin: 103px 87px; }
          .bb-ant   { animation: bbPulse 1.5s ease-in-out infinite; }
          .bb-ring  { animation: bbPulse 1.5s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Background */}
      <rect x="0" y="0" width="520" height="200" rx="24" fill="url(#bgGrad)"/>
      <pattern id="bbGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
      </pattern>
      <rect x="0" y="0" width="520" height="200" rx="24" fill="url(#bbGrid)"/>
      <path d="M 0 80 Q 30 20 90 10" fill="none" stroke="url(#textGrad1)" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
      <path d="M 520 120 Q 490 180 430 192" fill="none" stroke="url(#textGrad1)" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>

      {/* Robot */}
      <g className="bb-robot">
        <rect x="88" y="28" width="4" height="20" rx="2" fill="#4ECDC4"/>
        <circle cx="90" cy="25" r="10" fill="#FFE94D" opacity="0.15" filter="url(#strongGlowL)"/>
        <circle cx="90" cy="25" r="7" fill="url(#glowYellow)" filter="url(#strongGlowL)" className="bb-ant"/>
        <circle cx="90" cy="25" r="4" fill="#FFFFFF" opacity="0.6"/>
        <circle cx="90" cy="25" r="13" fill="none" stroke="#FFE94D" strokeWidth="1.5" opacity="0.3" className="bb-ring"/>
        <circle cx="90" cy="25" r="18" fill="none" stroke="#FFE94D" strokeWidth="1" opacity="0.15" className="bb-ring" style={{animationDelay:"0.3s"}}/>
        <rect x="62" y="48" width="56" height="50" rx="14" fill="url(#headGrad)" filter="url(#dropShadowL)"/>
        <rect x="68" y="52" width="24" height="8" rx="4" fill="rgba(255,255,255,0.35)"/>
        <ellipse cx="75" cy="72" rx="10" ry="10" fill="#0A1628"/>
        <ellipse cx="105" cy="72" rx="10" ry="10" fill="#0A1628"/>
        <ellipse cx="75" cy="72" rx="12" ry="12" fill="url(#eyeGlow)" opacity="0.5"/>
        <ellipse cx="105" cy="72" rx="12" ry="12" fill="url(#eyeGlow)" opacity="0.5"/>
        <ellipse cx="75" cy="72" rx="7" ry="7" fill="#7DF9FF" className="bb-eye-l"/>
        <ellipse cx="105" cy="72" rx="7" ry="7" fill="#7DF9FF" className="bb-eye-r"/>
        <circle cx="77" cy="71" r="3" fill="#001833" className="bb-eye-l"/>
        <circle cx="107" cy="71" r="3" fill="#001833" className="bb-eye-r"/>
        <circle cx="79" cy="69" r="1.5" fill="white" opacity="0.9"/>
        <circle cx="109" cy="69" r="1.5" fill="white" opacity="0.9"/>
        <path d="M 76 88 Q 90 97 104 88" fill="none" stroke="#0A3050" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 77 88 Q 90 96 103 88" fill="none" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="68" cy="84" rx="6" ry="4" fill="#FF6B9D" opacity="0.45"/>
        <ellipse cx="112" cy="84" rx="6" ry="4" fill="#FF6B9D" opacity="0.45"/>
        <rect x="82" y="97" width="16" height="8" rx="3" fill="#0077FF"/>
        <rect x="55" y="104" width="70" height="52" rx="16" fill="url(#bodyGrad)" filter="url(#dropShadowL)"/>
        <rect x="67" y="112" width="46" height="28" rx="8" fill="rgba(0,10,30,0.35)"/>
        <circle cx="76" cy="120" r="4" fill="#FF6B6B" filter="url(#glowFilterL)"/>
        <circle cx="90" cy="120" r="4" fill="#FFD93D" filter="url(#glowFilterL)"/>
        <circle cx="104" cy="120" r="4" fill="#6BCB77" filter="url(#glowFilterL)"/>
        <rect x="72" y="128" width="36" height="8" rx="3" fill="#001833"/>
        <rect x="73" y="129" width="20" height="6" rx="2" fill="#4ECDC4" opacity="0.7"/>
        <rect x="30" y="107" width="22" height="38" rx="11" fill="url(#bodyGrad)"/>
        <circle cx="41" cy="150" r="9" fill="#00BFFF"/>
        <circle cx="35" cy="148" r="3.5" fill="#7DF9FF" opacity="0.8"/>
        <circle cx="41" cy="145" r="3.5" fill="#7DF9FF" opacity="0.8"/>
        <circle cx="47" cy="148" r="3.5" fill="#7DF9FF" opacity="0.8"/>
        <rect x="128" y="104" width="22" height="36" rx="11" fill="url(#bodyGrad)" transform="rotate(-15, 139, 122)"/>
        <circle cx="155" cy="130" r="9" fill="#00BFFF" transform="rotate(-15, 139, 122)"/>
        <circle cx="149" cy="127" r="3.5" fill="#7DF9FF" opacity="0.8" transform="rotate(-15, 139, 122)"/>
        <circle cx="155" cy="124" r="3.5" fill="#7DF9FF" opacity="0.8" transform="rotate(-15, 139, 122)"/>
        <circle cx="161" cy="127" r="3.5" fill="#7DF9FF" opacity="0.8" transform="rotate(-15, 139, 122)"/>
        <rect x="66" y="155" width="22" height="30" rx="11" fill="#0077FF"/>
        <rect x="92" y="155" width="22" height="30" rx="11" fill="#0077FF"/>
        <rect x="60" y="180" width="32" height="14" rx="7" fill="#005FCC"/>
        <rect x="86" y="180" width="32" height="14" rx="7" fill="#005FCC"/>
        <rect x="64" y="181" width="14" height="5" rx="2.5" fill="rgba(255,255,255,0.25)"/>
        <rect x="90" y="181" width="14" height="5" rx="2.5" fill="rgba(255,255,255,0.25)"/>
      </g>

      {/* Text */}
      <text x="188" y="102" fontFamily="'Trebuchet MS','Segoe UI',sans-serif" fontWeight="900" fontSize="68" fill="url(#textGrad1)" filter="url(#textGlowL)" letterSpacing="-1">BaanBot</text>
      <text x="188" y="102" fontFamily="'Trebuchet MS','Segoe UI',sans-serif" fontWeight="900" fontSize="68" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" letterSpacing="-1">BaanBot</text>
      <line x1="190" y1="116" x2="495" y2="116" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      <circle cx="195" cy="116" r="2.5" fill="#FF6B6B"/>
      <circle cx="207" cy="116" r="2.5" fill="#FFD93D"/>
      <circle cx="219" cy="116" r="2.5" fill="#6BCB77"/>
      <circle cx="231" cy="116" r="2.5" fill="#4ECDC4"/>
      <text x="190" y="145" fontFamily="'Trebuchet MS','Segoe UI',sans-serif" fontWeight="700" fontSize="26" fill="url(#textGrad2)" letterSpacing="8">CHANTHABURI</text>
      <text x="190" y="170" fontFamily="'Tahoma','Segoe UI',sans-serif" fontWeight="400" fontSize="14" fill="rgba(255,255,255,0.45)" letterSpacing="1">เนเธฃเธเน€เธฃเธตเธขเธเธชเธญเธเธซเธธเนเธเธขเธเธ•เน โ€ข เธเธฑเธเธซเธงเธฑเธ”เธเธฑเธเธ—เธเธธเธฃเธต</text>

      {/* Decorations */}
      <circle cx="178" cy="35" r="3" fill="#6BCB77" opacity="0.6"/>
      <circle cx="168" cy="48" r="2" fill="#FFD93D" opacity="0.5"/>
      <circle cx="500" cy="165" r="3" fill="#FF6B6B" opacity="0.5"/>
      <circle cx="510" cy="150" r="2" fill="#4ECDC4" opacity="0.4"/>
    </svg>
  );
}

// ==================== MOCK DATA ====================
const MOCK_NEWS = [
  {
    id: 1,
    title: "เธซเธธเนเธเธขเธเธ•เน AI เธฃเธธเนเธเนเธซเธกเนเธชเธฒเธกเธฒเธฃเธ–เน€เธฃเธตเธขเธเธฃเธนเนเธ—เธฑเธเธฉเธฐเธกเธเธธเธฉเธขเนเนเธ”เนเน€เธฃเนเธงเธเธงเนเธฒเน€เธ”เธดเธก 10 เน€เธ—เนเธฒ",
    summary: "เธเธฑเธเธงเธดเธเธฑเธขเธเธฒเธ MIT เนเธ”เนเธเธฑเธ’เธเธฒเธซเธธเนเธเธขเธเธ•เนเธ—เธตเนเนเธเนเธฃเธฐเธเธ AI เธเธฑเนเธเธชเธนเธเธชเธฒเธกเธฒเธฃเธ–เน€เธฃเธตเธขเธเธฃเธนเนเธเธฒเธฃเน€เธเธฅเธทเนเธญเธเนเธซเธงเนเธฅเธฐเธ—เธฑเธเธฉเธฐเธ•เนเธฒเธ เน เนเธ”เนเธญเธขเนเธฒเธเธฃเธงเธ”เน€เธฃเนเธง เน€เธเธดเธ”เนเธญเธเธฒเธชเนเธซเธกเนเธชเธณเธซเธฃเธฑเธเธเธฒเธฃเธเธฃเธฐเธขเธธเธเธ•เนเนเธเนเนเธเธเธตเธงเธดเธ•เธเธฃเธฐเธเธณเธงเธฑเธ",
    date: "25 เธ.เธ. 2569",
    tag: "AI & เธซเธธเนเธเธขเธเธ•เน",
    source: "MIT News"
  },
  {
    id: 2,
    title: "เธเธฒเธฃเนเธเนเธเธเธฑเธเธซเธธเนเธเธขเธเธ•เนเนเธญเธฅเธดเธกเธเธดเธเธฃเธฐเธ”เธฑเธเธเธฒเธเธฒเธเธฒเธ•เธด 2025 เธเธฃเธฐเธเธฒเธจเธฃเธฒเธขเธเธทเนเธญเธเธฃเธฐเน€เธ—เธจเธ—เธตเนเน€เธเนเธฒเธฃเนเธงเธก",
    summary: "เธเธงเนเธฒ 50 เธเธฃเธฐเน€เธ—เธจเธ—เธฑเนเธงเนเธฅเธเนเธ”เนเธฅเธเธ—เธฐเน€เธเธตเธขเธเน€เธเนเธฒเธฃเนเธงเธกเธเธฒเธฃเนเธเนเธเธเธฑเธเธซเธธเนเธเธขเธเธ•เนเธฃเธฐเธ”เธฑเธเนเธฅเธเธเธฃเธฑเนเธเธขเธดเนเธเนเธซเธเน เนเธ”เธขเธเธฃเธฐเน€เธ—เธจเนเธ—เธขเธชเนเธเธ—เธตเธกเธเธณเธเธงเธ 3 เธ—เธตเธกเน€เธเนเธฒเธฃเนเธงเธกเธเธดเธเธเธฑเธข",
    date: "23 เธ.เธ. 2569",
    tag: "เธเธฒเธฃเนเธเนเธเธเธฑเธ",
    source: "WRO Official"
  },
  {
    id: 3,
    title: "LEGO Mindstorms เธฃเธธเนเธเนเธซเธกเน EV5 เน€เธเธดเธ”เธ•เธฑเธงเธเธฃเนเธญเธกเธเธดเธ AI เนเธเธ•เธฑเธง",
    summary: "LEGO เธเธฃเธฐเธเธฒเธจเน€เธเธดเธ”เธ•เธฑเธงเธเธธเธ”เธซเธธเนเธเธขเธเธ•เนเธฃเธธเนเธเนเธซเธกเนเธฅเนเธฒเธชเธธเธ”เธ—เธตเนเธกเธฒเธเธฃเนเธญเธกเธเธฑเธเธเธงเธฒเธกเธชเธฒเธกเธฒเธฃเธ–เธ”เนเธฒเธ AI เนเธฅเธฐ Machine Learning เนเธเธ•เธฑเธง เน€เธซเธกเธฒเธฐเธชเธณเธซเธฃเธฑเธเน€เธ”เนเธเธญเธฒเธขเธธ 8 เธเธตเธเธถเนเธเนเธ",
    date: "20 เธ.เธ. 2569",
    tag: "เน€เธ—เธเนเธเนเธฅเธขเธต",
    source: "LEGO Education"
  },
];

const TIME_SLOTS = [
  { id: 1, time: "08:30 - 10:30", label: "เธฃเธญเธเน€เธเนเธฒ 1" },
  { id: 2, time: "10:30 - 12:30", label: "เธฃเธญเธเน€เธเนเธฒ 2" },
  { id: 3, time: "13:00 - 15:00", label: "เธฃเธญเธเธเนเธฒเธข 1" },
  { id: 4, time: "15:00 - 17:00", label: "เธฃเธญเธเธเนเธฒเธข 2" },
  { id: 5, time: "17:00 - 19:00", label: "เธฃเธญเธเน€เธขเนเธ" },
];

const MOCK_BOOKINGS = {
  "2026-02-26": { 1: true, 3: true },
  "2026-02-27": { 2: true, 5: true },
  "2026-02-28": { 1: true, 2: true, 4: true },
};

const GALLERY_IMAGES = [
  { id: 1, url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop", caption: "เธเนเธญเธเน เธเธณเธฅเธฑเธเธชเธฃเนเธฒเธเธซเธธเนเธเธขเธเธ•เน LEGO" },
  { id: 2, url: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&h=300&fit=crop", caption: "เธเธฒเธฃเนเธเนเธเธเธฑเธเธซเธธเนเธเธขเธเธ•เนเธ เธฒเธขเนเธ" },
  { id: 3, url: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=400&h=300&fit=crop", caption: "เน€เธฃเธตเธขเธเธฃเธนเนเธเธฒเธฃเน€เธเธตเธขเธเนเธเธฃเนเธเธฃเธก" },
  { id: 4, url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop", caption: "เธ—เธ”เธชเธญเธเธซเธธเนเธเธขเธเธ•เนเธเธเธชเธเธฒเธก" },
  { id: 5, url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", caption: "เธเธฑเธเน€เธฃเธตเธขเธเธฃเธฐเธ”เธฑเธเธชเธนเธ" },
  { id: 6, url: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=300&fit=crop", caption: "เธเธดเธเธเธฃเธฃเธก Open House" },
];

// ==================== HELPERS ====================
const getDayName = (dateStr) => {
  const days = ["เธญเธฒเธ—เธดเธ•เธขเน","เธเธฑเธเธ—เธฃเน","เธญเธฑเธเธเธฒเธฃ","เธเธธเธ","เธเธคเธซเธฑเธชเธเธ”เธต","เธจเธธเธเธฃเน","เน€เธชเธฒเธฃเน"];
  return days[new Date(dateStr).getDay()];
};
const isMonday = (dateStr) => new Date(dateStr).getDay() === 1;
const formatThaiDate = (dateStr) => {
  const d = new Date(dateStr);
  const months = ["เธก.เธ.","เธ.เธ.","เธกเธต.เธ.","เน€เธก.เธข.","เธ.เธ.","เธกเธด.เธข.","เธ.เธ.","เธช.เธ.","เธ.เธข.","เธ•.เธ.","เธ.เธข.","เธ.เธ."];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear() + 543}`;
};
const getNext14Days = () => {
  const days = [];
  for (let i = 0; i < 14; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push(d.toISOString().split("T")[0]);
  }
  return days;
};
// set เธเธญเธเธงเธฑเธเธ—เธตเนเธเธญเธเนเธ”เน (เธงเธฑเธเธเธตเน โ’ +30 เธงเธฑเธ)
const getBookableDateSet = () => {
  const set = new Set();
  const today = new Date(); today.setHours(0,0,0,0);
  for (let i = 0; i <= 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    set.add(d.toISOString().split("T")[0]);
  }
  return set;
};

// ==================== COMPONENTS ====================

function NavBar({ page, setPage, user, setUser }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { id: "home", label: "เธซเธเนเธฒเธซเธฅเธฑเธ" },
    { id: "skilltree", label: "๐—บ๏ธ Learning Map" },
    { id: "tournament", label: "๐ เนเธเนเธเธเธฑเธ" },
    { id: "credits", label: "โญ Credits" },
    { id: "copilot", label: "๐ค– AI Copilot" },
    { id: "booking", label: "เธเธญเธเน€เธฃเธตเธขเธ" },
    { id: "gallery", label: "เธเธฅเธฑเธเธ เธฒเธ" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,165,0,0.15)",
      padding: "0 24px", height: 64,
      display: "flex", alignItems: "center", justifyContent: "space-between"
    }}>
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => setPage("home")}>
        <BaanBotLogo width={150} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {navItems.map(item => (
          <button key={item.id} onClick={() => setPage(item.id)} style={{
            background: page === item.id ? "rgba(255,140,0,0.15)" : "transparent",
            border: "none", color: page === item.id ? "#FFD700" : "#aaa",
            padding: "8px 16px", borderRadius: 8, cursor: "pointer",
            fontFamily: "'Kanit', sans-serif", fontSize: 14,
            fontWeight: page === item.id ? 600 : 400,
            transition: "all 0.2s"
          }}>{item.label}</button>
        ))}
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 8 }}>
            <div style={{
              background: "linear-gradient(135deg, #FF8C00, #FFD700)",
              borderRadius: "50%", width: 32, height: 32,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700, color: "#0a0c14",
              fontFamily: "'Kanit', sans-serif"
            }}>{user.name[0]}</div>
            <button onClick={() => setUser(null)} style={{
              background: "rgba(255,50,50,0.15)", border: "1px solid rgba(255,50,50,0.3)",
              color: "#ff6b6b", padding: "5px 12px", borderRadius: 6, cursor: "pointer",
              fontFamily: "'Kanit', sans-serif", fontSize: 12
            }}>เธญเธญเธเธเธฒเธเธฃเธฐเธเธ</button>
          </div>
        ) : (
          <button onClick={() => setPage("login")} style={{
            background: "linear-gradient(135deg, #FF8C00, #FFD700)",
            border: "none", color: "#0a0c14", padding: "8px 18px", borderRadius: 8,
            cursor: "pointer", fontFamily: "'Kanit', sans-serif", fontSize: 14,
            fontWeight: 700, marginLeft: 8
          }}>เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ</button>
        )}
      </div>
    </nav>
  );
}

// ==================== HOME PAGE ====================
function HomePage({ setPage }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
        background: "radial-gradient(ellipse at 60% 50%, rgba(255,140,0,0.08) 0%, transparent 70%), #0a0c14"
      }}>
        {/* Animated grid */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "linear-gradient(rgba(255,140,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,0,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        {/* Floating orbs */}
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            width: [300, 200, 150][i], height: [300, 200, 150][i],
            borderRadius: "50%",
            background: ["rgba(255,140,0,0.06)", "rgba(255,215,0,0.04)", "rgba(255,100,0,0.05)"][i],
            left: ["10%", "70%", "40%"][i], top: ["20%", "60%", "80%"][i],
            filter: "blur(60px)",
            animation: `float${i} ${[8, 12, 10][i]}s ease-in-out infinite`
          }} />
        ))}

        <div style={{
          textAlign: "center", maxWidth: 800, padding: "0 24px", position: "relative", zIndex: 1,
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)"
        }}>
          <div style={{
            display: "inline-block",
            background: "rgba(255,140,0,0.1)", border: "1px solid rgba(255,140,0,0.3)",
            borderRadius: 100, padding: "6px 20px", marginBottom: 32,
            fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "#FF8C00", letterSpacing: 3
          }}>๐ค– เนเธฃเธเน€เธฃเธตเธขเธเธชเธญเธเธซเธธเนเธเธขเธเธ•เน โ€ข เธเธฑเธเธ—เธเธธเธฃเธต</div>

          {/* Big Logo in Hero */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <BaanBotLogo width={440} style={{ filter: "drop-shadow(0 8px 40px rgba(0,210,255,0.25))" }} />
          </div>

          <p style={{
            fontFamily: "'Kanit', sans-serif", fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 48,
            maxWidth: 560, margin: "0 auto 48px"
          }}>เธเธฅเธนเธเธเธฑเธเธ—เธฑเธเธฉเธฐเธญเธเธฒเธเธ•เนเธซเนเธเธฑเธเน€เธ”เนเธเน เธเนเธฒเธเธเธฒเธฃเน€เธฃเธตเธขเธเธฃเธนเนเธซเธธเนเธเธขเธเธ•เนเนเธฅเธฐเธเธฒเธฃเน€เธเธตเธขเธเนเธเธฃเนเธเธฃเธก เธญเธขเนเธฒเธเธชเธเธธเธเธชเธเธฒเธ</p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setPage("booking")} style={{
              background: "linear-gradient(135deg, #FF8C00, #FFD700)",
              border: "none", color: "#0a0c14",
              padding: "16px 36px", borderRadius: 12, cursor: "pointer",
              fontFamily: "'Kanit', sans-serif", fontSize: 16, fontWeight: 700,
              boxShadow: "0 8px 32px rgba(255,140,0,0.4)",
              transition: "all 0.2s"
            }}>๐“… เธเธญเธเน€เธงเธฅเธฒเน€เธฃเธตเธขเธ</button>
            <button onClick={() => setPage("news")} style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", padding: "16px 36px", borderRadius: 12, cursor: "pointer",
              fontFamily: "'Kanit', sans-serif", fontSize: 16, fontWeight: 600,
              transition: "all 0.2s"
            }}>๐“ฐ เธเนเธฒเธงเธชเธฒเธฃ</button>
          </div>
        </div>
      </section>

      {/* Facebook Feed Section */}
      <section style={{ padding: "80px 24px", background: "#0d0f1a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader icon="๐“ฑ" title="เธ•เธดเธ”เธ•เธฒเธกเธเนเธฒเธงเธชเธฒเธฃเธเธฒเธ Facebook" sub="เธญเธฑเธเน€เธ”เธ•เธฅเนเธฒเธชเธธเธ”เธเธฒเธเน€เธเธ iBot Academy Chanthaburi" />
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
            "@media(max-width:640px)": { gridTemplateColumns: "1fr" }
          }}>
            <div style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20, overflow: "hidden"
            }}>
              <div style={{
                background: "#1877F2", padding: "16px 20px",
                display: "flex", alignItems: "center", gap: 12
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", background: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, fontWeight: 900, color: "#1877F2"
                }}>f</div>
                <div>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, color: "#fff", fontSize: 14 }}>iBot Academy Chanthaburi</div>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.7)" }}>@ibotacademychanthaburi</div>
                </div>
              </div>
              <div style={{ padding: 20 }}>
                {[
                  { text: "๐ เธขเธดเธเธ”เธตเธ•เนเธญเธเธฃเธฑเธเธเนเธญเธเน เธเธฑเธเน€เธฃเธตเธขเธเนเธซเธกเนเธเธฃเธฐเธเธณเน€เธ”เธทเธญเธเธเธธเธกเธ เธฒเธเธฑเธเธเน! เธงเธฑเธเธเธตเนเธกเธตเธเนเธญเธเนเธซเธกเนเธกเธฒเน€เธฃเธตเธขเธเธซเธธเนเธเธขเธเธ•เน LEGO Mindstorms เธ–เธถเธ 5 เธเธ เธเธญเน€เธเนเธเธเธณเธฅเธฑเธเนเธเนเธซเนเธ—เธธเธเธเธเธเธฐเธเธฃเธฑเธ ๐’ช", time: "2 เธเธฑเนเธงเนเธกเธเธ—เธตเนเนเธฅเนเธง", likes: 47 },
                  { text: "๐“ข เนเธเนเธเธ•เธฒเธฃเธฒเธเน€เธฃเธตเธขเธ: เธชเธฑเธเธ”เธฒเธซเนเธซเธเนเธฒเธเธฐเธกเธตเธเธฒเธฃเธ—เธ”เธชเธญเธเธเธฑเนเธเธเธฅเธฒเธ เธชเธณเธซเธฃเธฑเธเธเนเธญเธเน เธฃเธฐเธ”เธฑเธ Intermediate เธเธญเนเธซเนเธเนเธญเธกเนเธเธฃเนเธเธฃเธกเธเธฒเธฃเน€เธเธฅเธทเนเธญเธเธ—เธตเนเธเธทเนเธเธเธฒเธเธ”เนเธงเธขเธเธฐเธเธฃเธฑเธ", time: "1 เธงเธฑเธเธ—เธตเนเนเธฅเนเธง", likes: 23 },
                ].map((post, i) => (
                  <div key={i} style={{
                    padding: "16px 0",
                    borderBottom: i === 0 ? "1px solid rgba(255,255,255,0.06)" : "none"
                  }}>
                    <p style={{ fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, margin: "0 0 10px" }}>{post.text}</p>
                    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'Kanit', sans-serif" }}>{post.time}</span>
                      <span style={{ fontSize: 12, color: "#1877F2", fontFamily: "'Kanit', sans-serif" }}>๐‘ {post.likes}</span>
                    </div>
                  </div>
                ))}
                <a href="https://www.facebook.com/ibotacademychanthaburi/" target="_blank" rel="noopener noreferrer" style={{
                  display: "block", textAlign: "center", marginTop: 16,
                  background: "rgba(24,119,242,0.1)", border: "1px solid rgba(24,119,242,0.3)",
                  borderRadius: 8, padding: "10px", color: "#1877F2",
                  textDecoration: "none", fontFamily: "'Kanit', sans-serif", fontSize: 13, fontWeight: 600
                }}>เธ”เธนเน€เธเธดเนเธกเน€เธ•เธดเธกเธเธ Facebook โ’</a>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "๐ค–", num: "500+", label: "เธเธฑเธเน€เธฃเธตเธขเธเธ—เธตเนเธเนเธฒเธเธซเธฅเธฑเธเธชเธนเธ•เธฃ" },
                { icon: "๐", num: "28", label: "เธฃเธฒเธเธงเธฑเธฅเธเธฒเธเธเธฒเธฃเนเธเนเธเธเธฑเธ" },
                { icon: "๐“", num: "5", label: "เธซเธฅเธฑเธเธชเธนเธ•เธฃเธ—เธตเนเน€เธเธดเธ”เธชเธญเธ" },
                { icon: "โญ", num: "4.9", label: "เธเธฐเนเธเธเธเธงเธฒเธกเธเธถเธเธเธญเนเธ" },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16, padding: "20px 24px",
                  display: "flex", alignItems: "center", gap: 20
                }}>
                  <div style={{ fontSize: 32 }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 28, color: "#FFD700" }}>{stat.num}</div>
                    <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Features Showcase */}
      <section style={{ padding: "80px 24px", background: "#0a0c14" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader icon="โจ" title="เธเธตเน€เธเธญเธฃเนเนเธซเธกเนเธเธญเธ BaanBot" sub="เธฃเธฐเธเธเธเธดเน€เธงเธจเธเธฒเธฃเน€เธฃเธตเธขเธเธฃเธนเนเธ—เธตเนเธชเธกเธเธนเธฃเธ“เนเนเธเธเธชเธณเธซเธฃเธฑเธเธเธฑเธเน€เธฃเธตเธขเธเนเธฅเธฐเธเธนเนเธเธเธเธฃเธญเธ" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 18 }}>
            {[
              {
                page: "skilltree", icon: "๐—บ๏ธ", color: "#37B6F6", accent: "#2FD463",
                title: "Learning Map", subtitle: "Skill Tree RPG-style",
                desc: "เธ•เธดเธ”เธ•เธฒเธกเธเธงเธฒเธกเธเนเธฒเธงเธซเธเนเธฒเธเธฒเธฃเน€เธฃเธตเธขเธเธฃเธนเนเนเธเธเนเธเธเธเธฑเธเน€เธเธก RPG เธเธฅเธ”เธฅเนเธญเธเธ—เธฑเธเธฉเธฐเนเธซเธกเนเธเธฃเนเธญเธกเธชเธฐเธชเธก XP"
              },
              {
                page: "tournament", icon: "๐", color: "#F99D07", accent: "#882FF6",
                title: "Tournament Hub", subtitle: "เธ•เธฒเธฃเธฒเธเนเธเนเธเธเธฑเธ 2025",
                desc: "เธฃเธงเธกเธเธฒเธฃเนเธเนเธเธเธฑเธเธซเธธเนเธเธขเธเธ•เนเนเธเนเธ—เธขเนเธฅเธฐเธฃเธฐเธ”เธฑเธเนเธฅเธ เธเนเธเธซเธฒเธ—เธตเธก เน€เธ•เธฃเธตเธขเธกเธเธฃเนเธญเธกเธเนเธญเธเธงเธฑเธเนเธเนเธ"
              },
              {
                page: "credits", icon: "โญ", color: "#F99D07", accent: "#2FD463",
                title: "RoboCredits", subtitle: "เธชเธฐเธชเธกเนเธ•เนเธก + Referral",
                desc: "เธชเธฐเธชเธกเนเธ•เนเธกเธเธฒเธเธเธฒเธฃเน€เธฃเธตเธขเธ เนเธเธฐเธเธณเน€เธเธทเนเธญเธเธฃเธฑเธ 200 credits เนเธฅเธเธฃเธฒเธเธงเธฑเธฅเนเธฅเธฐเธชเนเธงเธเธฅเธ”เธเนเธฒเน€เธฃเธตเธขเธ"
              },
              {
                page: "copilot", icon: "๐ค–", color: "#882FF6", accent: "#37B6F6",
                title: "AI Copilot", subtitle: "เธเธนเนเธเนเธงเธข Debug เนเธเนเธ”",
                desc: "AI เธเนเธงเธขเนเธเธฐเธเธณเธเธฒเธฃ debug เนเธฅเธฐเธญเธญเธเนเธเธเธซเธธเนเธเธขเธเธ•เน เธ•เธฑเนเธเธเธณเธ–เธฒเธกเธเธณเนเธซเนเธเธดเธ”เนเธเนเธเธฑเธเธซเธฒเธ”เนเธงเธขเธ•เธฑเธงเน€เธญเธ"
              },
            ].map((f, i) => (
              <div key={i} onClick={() => setPage(f.page)} style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid " + f.color + "22",
                borderRadius: 20, padding: 24, cursor: "pointer",
                transition: "all 0.25s",
                position: "relative", overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute", top: -30, right: -30,
                  width: 120, height: 120, borderRadius: "50%",
                  background: f.color + "08"
                }} />
                <div style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 52, height: 52, borderRadius: 14,
                  background: "linear-gradient(135deg," + f.color + "30," + f.accent + "20)",
                  fontSize: 26, marginBottom: 14
                }}>{f.icon}</div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 800, fontSize: 17, color: "#fff", marginBottom: 4 }}>{f.title}</div>
                <div style={{
                  display: "inline-block", background: f.color + "18", color: f.color,
                  borderRadius: 100, padding: "2px 10px", fontSize: 11,
                  fontFamily: "'Kanit',sans-serif", marginBottom: 10, fontWeight: 600
                }}>{f.subtitle}</div>
                <p style={{ fontFamily: "'Kanit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                <div style={{ marginTop: 16, fontFamily: "'Kanit',sans-serif", fontSize: 12, color: f.color, fontWeight: 700 }}>
                  เน€เธเนเธฒเนเธเนเธเธฒเธ โ’
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section style={{ padding: "80px 24px", background: "#0a0c14" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader icon="๐“" title="เธซเธฅเธฑเธเธชเธนเธ•เธฃเธเธญเธเน€เธฃเธฒ" sub="เน€เธฃเธตเธขเธเธฃเธนเนเธญเธขเนเธฒเธเน€เธเนเธเธเธฑเนเธเธ•เธญเธ เน€เธซเธกเธฒเธฐเธชเธณเธซเธฃเธฑเธเธ—เธธเธเธฃเธฐเธ”เธฑเธ" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {[
              { level: "เน€เธฃเธดเนเธกเธ•เนเธ", age: "เธญเธฒเธขเธธ 6-8 เธเธต", color: "#4ECDC4", icon: "๐ฑ", desc: "เน€เธฃเธตเธขเธเธฃเธนเนเธเธฒเธฃเธ•เนเธญ LEGO WeDo เนเธฅเธฐเธเธฒเธฃเน€เธเธตเธขเธเนเธเธฃเนเธเธฃเธกเธ”เนเธงเธข Scratch เน€เธเธทเนเธญเธเธ•เนเธ" },
              { level: "เธฃเธฐเธ”เธฑเธเธเธฅเธฒเธ", age: "เธญเธฒเธขเธธ 9-12 เธเธต", color: "#FF8C00", icon: "โก", desc: "LEGO Mindstorms EV3 เนเธฅเธฐเธเธฒเธฃเน€เธเธตเธขเธเนเธเธฃเนเธเธฃเธก Python เน€เธเธทเนเธญเธเธ•เนเธ" },
              { level: "เธเธฑเนเธเธชเธนเธ", age: "เธญเธฒเธขเธธ 13+ เธเธต", color: "#FF4757", icon: "๐€", desc: "Arduino, Raspberry Pi เนเธฅเธฐเธเธฒเธฃเธเธฑเธ’เธเธฒ AI เธชเธณเธซเธฃเธฑเธเธซเธธเนเธเธขเธเธ•เน" },
            ].map((c, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)", border: `1px solid ${c.color}22`,
                borderRadius: 20, padding: 28, position: "relative", overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute", top: -20, right: -20,
                  width: 100, height: 100, borderRadius: "50%",
                  background: `${c.color}08`
                }} />
                <div style={{ fontSize: 36, marginBottom: 16 }}>{c.icon}</div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 4 }}>{c.level}</div>
                <div style={{
                  display: "inline-block", background: `${c.color}20`, color: c.color,
                  borderRadius: 100, padding: "3px 12px", fontSize: 12,
                  fontFamily: "'Kanit', sans-serif", marginBottom: 12
                }}>{c.age}</div>
                <p style={{ fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ icon, title, sub }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
      <h2 style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 36, color: "#fff", margin: "0 0 12px" }}>{title}</h2>
      <p style={{ fontFamily: "'Kanit', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.5)", margin: 0 }}>{sub}</p>
    </div>
  );
}

// ==================== NEWS PAGE ====================
function NewsPage() {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [url, setUrl] = useState("");

  const handleTranslate = async () => {
    if (!url) return;
    setLoading(true);
    setAiResult(null);
    try {
      const res = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "news",
          url: url
        })
      });
      const data = await res.json();
      const text = (data.content && data.content[0] && data.content[0].text) || "";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setAiResult(parsed);
    } catch {
      setAiResult({ title: "เธเนเธฒเธงเธซเธธเนเธเธขเธเธ•เนเนเธซเธกเนเธเธฒเธเธญเธดเธเน€เธ—เธญเธฃเนเน€เธเนเธ•", summary: "เธฃเธฐเธเธเธชเธฃเธธเธเธเนเธฒเธงเธ”เนเธงเธข AI เธเธฃเนเธญเธกเนเธเนเธเธฒเธเนเธฅเนเธง เธเธฃเธธเธ“เธฒเธฅเธญเธเนเธชเน URL เธเนเธฒเธงเธ เธฒเธฉเธฒเธญเธฑเธเธเธคเธฉเน€เธเธทเนเธญเนเธซเนเธฃเธฐเธเธเนเธเธฅเนเธฅเธฐเธชเธฃเธธเธเนเธซเน", tag: "เธ—เธฑเนเธงเนเธ" });
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "100px 24px 80px", background: "#0a0c14", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader icon="๐“ฐ" title="เธเนเธฒเธงเธชเธฒเธฃเธซเธธเนเธเธขเธเธ•เน" sub="เธญเธฑเธเน€เธ”เธ•เธเธงเธฒเธกเน€เธเธฅเธทเนเธญเธเนเธซเธงเธเธฒเธเธงเธเธเธฒเธฃเธซเธธเนเธเธขเธเธ•เนเธ—เธฑเนเธงเนเธฅเธ" />

        {/* AI Translator */}
        <div style={{
          background: "rgba(255,140,0,0.05)", border: "1px solid rgba(255,140,0,0.2)",
          borderRadius: 20, padding: 28, marginBottom: 48
        }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 24 }}>๐ค–</div>
            <div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: "#FFD700" }}>เนเธเธฅเธเนเธฒเธงเธ”เนเธงเธข AI</div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>เนเธชเน URL เธเนเธฒเธงเธ เธฒเธฉเธฒเธญเธฑเธเธเธคเธฉ เนเธฅเนเธง AI เธเธฐเธชเธฃเธธเธเนเธฅเธฐเนเธเธฅเน€เธเนเธเธ เธฒเธฉเธฒเนเธ—เธขเนเธซเนเธญเธฑเธ•เนเธเธกเธฑเธ•เธด</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <input value={url} onChange={e => setUrl(e.target.value)}
              placeholder="https://www.techcrunch.com/robotics-news..."
              style={{
                flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10, padding: "12px 16px", color: "#fff",
                fontFamily: "'Kanit', sans-serif", fontSize: 14, outline: "none"
              }} />
            <button onClick={handleTranslate} disabled={loading} style={{
              background: loading ? "rgba(255,140,0,0.4)" : "linear-gradient(135deg,#FF8C00,#FFD700)",
              border: "none", color: "#0a0c14", padding: "12px 24px", borderRadius: 10,
              cursor: loading ? "not-allowed" : "pointer",
              fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 14, whiteSpace: "nowrap"
            }}>{loading ? "เธเธณเธฅเธฑเธเนเธเธฅ..." : "เนเธเธฅเธเนเธฒเธง โจ"}</button>
          </div>
          {aiResult && (
            <div style={{
              marginTop: 20, background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: 20,
              border: "1px solid rgba(255,215,0,0.15)"
            }}>
              <div style={{
                display: "inline-block", background: "rgba(255,215,0,0.15)", color: "#FFD700",
                borderRadius: 100, padding: "3px 12px", fontSize: 11, fontFamily: "'Kanit', sans-serif", marginBottom: 8
              }}>{aiResult.tag}</div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 8 }}>{aiResult.title}</div>
              <p style={{ fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>{aiResult.summary}</p>
            </div>
          )}
        </div>

        {/* News Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
          {MOCK_NEWS.map(n => (
            <div key={n.id} onClick={() => setSelected(selected && selected.id === n.id ? null : n)} style={{
              background: "rgba(255,255,255,0.03)", border: selected && selected.id === n.id ? "1px solid rgba(255,215,0,0.4)" : "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20, padding: 24, cursor: "pointer",
              transition: "all 0.2s",
              transform: selected && selected.id === n.id ? "scale(1.01)" : "scale(1)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{
                  background: "rgba(255,140,0,0.15)", color: "#FF8C00",
                  borderRadius: 100, padding: "3px 12px", fontSize: 11, fontFamily: "'Kanit', sans-serif"
                }}>{n.tag}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'Kanit', sans-serif" }}>{n.date}</span>
              </div>
              <h3 style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", margin: "0 0 10px", lineHeight: 1.5 }}>{n.title}</h3>
              {selected && selected.id === n.id && (
                <p style={{ fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 12px" }}>{n.summary}</p>
              )}
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'Kanit', sans-serif" }}>เนเธซเธฅเนเธเธเนเธฒเธง: {n.source}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// ==================== BOOKING PAGE ====================
// เธ—เธธเธเธเธเน€เธซเนเธเธ•เธฒเธฃเธฒเธเธงเนเธฒเธ/เนเธกเนเธงเนเธฒเธเนเธ”เน โ€” เธกเธต 2 เนเธซเธกเธ”: เธเธญเธเธเธเธ•เธด (2 เธเธก.) เนเธฅเธฐเธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธ (1 เธเธก.)
function BookingPage({ user, setPage }) {
  const today = new Date(); today.setHours(0,0,0,0);
  const todayStr = today.toISOString().split("T")[0];

  const [bookingMode, setBookingMode] = useState("regular");
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth()); // 0-indexed
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTrialHour, setSelectedTrialHour] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", childAge: "", note: "" });
  const [bookings, setBookings] = useState(MOCK_BOOKINGS);
  const [trialBookings, setTrialBookings] = useState({});
  const [success, setSuccess] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // bookable window: today โ’ +30 days
  const bookableSet = getBookableDateSet();

  // Max navigable month = month of today+30
  const maxDate = new Date(today); maxDate.setDate(today.getDate() + 30);
  const minMonthKey = `${today.getFullYear()}-${today.getMonth()}`;
  const maxMonthKey = `${maxDate.getFullYear()}-${maxDate.getMonth()}`;
  const curMonthKey = `${calYear}-${calMonth}`;
  const canGoPrev = curMonthKey > minMonthKey;
  const canGoNext = curMonthKey < maxMonthKey;

  const goMonth = (dir) => {
    let m = calMonth + dir;
    let y = calYear;
    if (m < 0) { m = 11; y--; }
    if (m > 11) { m = 0; y++; }
    setCalMonth(m); setCalYear(y);
  };

  // Build calendar grid for current month
  const buildCalGrid = () => {
    const firstDay = new Date(calYear, calMonth, 1).getDay(); // 0=Sun
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const dt = new Date(calYear, calMonth, d);
      cells.push(dt.toISOString().split("T")[0]);
    }
    // pad to complete last row
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  };

  const thMonthNames = ["เธกเธเธฃเธฒเธเธก","เธเธธเธกเธ เธฒเธเธฑเธเธเน","เธกเธตเธเธฒเธเธก","เน€เธกเธฉเธฒเธขเธ","เธเธคเธฉเธ เธฒเธเธก","เธกเธดเธ–เธธเธเธฒเธขเธ","เธเธฃเธเธเธฒเธเธก","เธชเธดเธเธซเธฒเธเธก","เธเธฑเธเธขเธฒเธขเธ","เธ•เธธเธฅเธฒเธเธก","เธเธคเธจเธเธดเธเธฒเธขเธ","เธเธฑเธเธงเธฒเธเธก"];
  const dayHeaders = ["เธญเธฒ","เธ","เธญ","เธ","เธเธค","เธจ","เธช"];

  const getOccupancyForDate = (d) => {
    if (isMonday(d)) return -1;
    return Object.keys(bookings[d] || {}).length;
  };

  // เนเธ•เนเธฅเธฐ slot = 2 เธเธก. เนเธเนเธเน€เธเนเธ 2 เธเนเธงเธ 1 เธเธก. เธชเธณเธซเธฃเธฑเธเธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธ
  const getTrialHours = (slot) => {
    const parts = slot.time.split(" - ");
    const [sh, sm] = parts[0].split(":").map(Number);
    const [eh, em] = parts[1].split(":").map(Number);
    const midH = sh + 1;
    return [
      { key: "first",  label: "เธเธฑเนเธงเนเธกเธเนเธฃเธ",  time: `${String(sh).padStart(2,"0")}:${String(sm).padStart(2,"0")} - ${String(midH).padStart(2,"0")}:${String(sm).padStart(2,"0")}` },
      { key: "second", label: "เธเธฑเนเธงเนเธกเธเธซเธฅเธฑเธ", time: `${String(midH).padStart(2,"0")}:${String(sm).padStart(2,"0")} - ${String(eh).padStart(2,"0")}:${String(em).padStart(2,"0")}` },
    ];
  };

  const isTrialBooked = (date, slotId, hourKey) =>
    !!(trialBookings[date] && trialBookings[date][`${slotId}_${hourKey}`]);

  const isSlotFullyBooked = (date, slotId) =>
    !!(bookings[date] && bookings[date][slotId]);

  const handleModeChange = (mode) => {
    setBookingMode(mode);
    setSelectedSlot(null);
    setSelectedTrialHour(null);
    setShowLoginPrompt(false);
  };

  const handleSlotClick = (slotId) => {
    if (isSlotFullyBooked(selectedDate, slotId)) return;
    if (!user) { setShowLoginPrompt(true); return; }
    setShowLoginPrompt(false);
    if (selectedSlot === slotId) {
      setSelectedSlot(null);
      setSelectedTrialHour(null);
    } else {
      setSelectedSlot(slotId);
      setSelectedTrialHour(null);
    }
  };

  const handleBook = () => {
    if (!form.name || !form.phone) return;
    if (bookingMode === "regular") {
      setBookings(prev => ({
        ...prev,
        [selectedDate]: { ...(prev[selectedDate] || {}), [selectedSlot]: { type: "regular", name: form.name } }
      }));
      setSuccess("regular");
    } else {
      if (!selectedTrialHour) return;
      setTrialBookings(prev => ({
        ...prev,
        [selectedDate]: {
          ...(prev[selectedDate] || {}),
          [`${selectedSlot}_${selectedTrialHour}`]: { type: "trial", name: form.name }
        }
      }));
      setSuccess("trial");
    }
    setSelectedSlot(null);
    setSelectedTrialHour(null);
    setForm({ name: "", phone: "", childAge: "", note: "" });
    setTimeout(() => setSuccess(null), 5000);
  };

  const iS = { // inputStyle shorthand
    width: "100%", background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10,
    padding: "11px 14px", color: "#fff",
    fontFamily: "'Kanit', sans-serif", fontSize: 14,
    outline: "none", boxSizing: "border-box"
  };

  const canSubmit = form.name && form.phone && (bookingMode === "regular" || selectedTrialHour);

  return (
    <div style={{ padding: "100px 24px 80px", background: "#0a0c14", minHeight: "100vh" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader icon="๐“…" title="เธเธญเธเน€เธงเธฅเธฒเน€เธฃเธตเธขเธ" sub="เธ”เธนเธ•เธฒเธฃเธฒเธเธงเนเธฒเธเนเธ”เนเธ—เธธเธเธเธ โ€” เนเธกเนเธ•เนเธญเธเน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเธเนเน€เธซเนเธเนเธ”เน" />

        {/* โ”€โ”€ Mode Selector Cards โ”€โ”€ */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 28 }}>
          {[
            {
              id: "regular", icon: "๐“", title: "เธเธญเธเน€เธฃเธตเธขเธเธเธเธ•เธด",
              desc: "เธชเธณเธซเธฃเธฑเธเธเธฑเธเน€เธฃเธตเธขเธเธ—เธตเนเน€เธเนเธเธชเธกเธฒเธเธดเธเนเธฅเนเธง",
              duration: "2 เธเธฑเนเธงเนเธกเธ / เธฃเธญเธ", color: "#4ECDC4", badge: null
            },
            {
              id: "trial", icon: "๐ฏ", title: "เธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธเธเธฃเธต",
              desc: "เธชเธณเธซเธฃเธฑเธเธเธนเนเธเธเธเธฃเธญเธเธ—เธตเนเธชเธเนเธเธชเธกเธฑเธเธฃ",
              duration: "1 เธเธฑเนเธงเนเธกเธ / เธเธฃเธฑเนเธ", color: "#FF8C00", badge: "เธเธฃเธต!"
            }
          ].map(m => (
            <button key={m.id} onClick={() => handleModeChange(m.id)} style={{
              padding: "20px 22px", borderRadius: 20, textAlign: "left", cursor: "pointer",
              background: bookingMode === m.id ? `${m.color}10` : "rgba(255,255,255,0.03)",
              border: `${bookingMode === m.id ? "2px" : "1px"} solid ${bookingMode === m.id ? m.color : "rgba(255,255,255,0.08)"}`,
              transition: "all 0.2s", position: "relative"
            }}>
              {m.badge && (
                <div style={{
                  position: "absolute", top: 12, right: 12,
                  background: "linear-gradient(135deg,#FF8C00,#FFD700)",
                  color: "#0a0c14", fontFamily: "'Kanit', sans-serif",
                  fontWeight: 800, fontSize: 11, borderRadius: 100, padding: "2px 9px"
                }}>{m.badge}</div>
              )}
              <div style={{ fontSize: 26, marginBottom: 8 }}>{m.icon}</div>
              <div style={{
                fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 16,
                color: bookingMode === m.id ? m.color : "#fff", marginBottom: 3
              }}>{m.title}</div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 10 }}>{m.desc}</div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                background: bookingMode === m.id ? `${m.color}18` : "rgba(255,255,255,0.05)",
                borderRadius: 100, padding: "3px 12px"
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: bookingMode === m.id ? m.color : "rgba(255,255,255,0.25)" }} />
                <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: bookingMode === m.id ? m.color : "rgba(255,255,255,0.35)", fontWeight: 600 }}>
                  โฑ {m.duration}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Trial info box */}
        {bookingMode === "trial" && (
          <div style={{
            background: "rgba(255,140,0,0.05)", border: "1px solid rgba(255,140,0,0.2)",
            borderRadius: 16, padding: "16px 20px", marginBottom: 24,
            display: "flex", gap: 14
          }}>
            <div style={{ fontSize: 26, flexShrink: 0 }}>๐</div>
            <div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, color: "#FFD700", fontSize: 14, marginBottom: 6 }}>
                เน€เธเธตเนเธขเธงเธเธฑเธเธเธฒเธฃเธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธ
              </div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>
                โ€ข เธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธเนเธ”เน <strong style={{ color: "#FF8C00" }}>1 เธเธฑเนเธงเนเธกเธ</strong> เนเธ”เธขเนเธกเนเธกเธตเธเนเธฒเนเธเนเธเนเธฒเธขเนเธ”เน<br />
                โ€ข เน€เธฅเธทเธญเธเธเธฑเนเธงเนเธกเธเนเธฃเธ เธซเธฃเธทเธญเธเธฑเนเธงเนเธกเธเธซเธฅเธฑเธเธเธญเธเนเธ•เนเธฅเธฐเธฃเธญเธเนเธ”เนเน€เธฅเธข<br />
                โ€ข เธ—เธตเธกเธเธฒเธเธเธฐเนเธ—เธฃเธขเธทเธเธขเธฑเธเธเธฑเธ”เธ เธฒเธขเนเธ 24 เธเธฑเนเธงเนเธกเธ<br />
                โ€ข เธชเธฒเธกเธฒเธฃเธ–เธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธเนเธ”เน <strong style={{ color: "#FF8C00" }}>1 เธเธฃเธฑเนเธเธ•เนเธญเธเธฃเธญเธเธเธฃเธฑเธง</strong>
              </div>
            </div>
          </div>
        )}

        {/* Success banner */}
        {success && (
          <div style={{
            background: success === "trial" ? "rgba(255,140,0,0.08)" : "rgba(78,205,196,0.08)",
            border: `1px solid ${success === "trial" ? "rgba(255,140,0,0.4)" : "rgba(78,205,196,0.4)"}`,
            borderRadius: 14, padding: "18px 22px", marginBottom: 24,
            display: "flex", alignItems: "center", gap: 14
          }}>
            <div style={{ fontSize: 32 }}>{success === "trial" ? "๐" : "โ…"}</div>
            <div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: success === "trial" ? "#FFD700" : "#4ECDC4" }}>
                {success === "trial" ? "เธเธญเธเธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธเธชเธณเน€เธฃเนเธ!" : "เธเธญเธเน€เธงเธฅเธฒเน€เธฃเธตเธขเธเธชเธณเน€เธฃเนเธ!"}
              </div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                {success === "trial"
                  ? "เธ—เธตเธกเธเธฒเธเธเธฐเนเธ—เธฃเธขเธทเธเธขเธฑเธเธเธฑเธ”เธซเธกเธฒเธขเธ เธฒเธขเนเธ 24 เธเธฑเนเธงเนเธกเธ เธเธญเธเธเธธเธ“เธ—เธตเนเธชเธเนเธ BaanBot Chanthaburi!"
                  : "เธ—เธตเธกเธเธฒเธเธเธฐเธ•เธดเธ”เธ•เนเธญเธขเธทเธเธขเธฑเธเธเนเธฒเธเน€เธเธญเธฃเนเนเธ—เธฃเธ—เธตเนเนเธซเนเนเธงเน"}
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div style={{ display: "flex", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
          {[
            { dot: "#4ECDC4", label: "เธงเนเธฒเธ (เน€เธฃเธตเธขเธเธเธเธ•เธด)" },
            { dot: "#FF8C00", label: "เธกเธตเธ—เธตเนเธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธ" },
            { dot: "#FF6B6B", label: "เน€เธ•เนเธกเนเธฅเนเธง" },
            { dot: "rgba(255,255,255,0.2)", label: "เธเธดเธ”เธ—เธณเธเธฒเธฃ (เธเธฑเธเธ—เธฃเน)" },
          ].map((l, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: l.dot, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{l.label}</span>
            </div>
          ))}
        </div>

        {/* โ”€โ”€ Monthly Calendar โ”€โ”€ */}
        <div style={{ marginBottom: 28 }}>
          {/* Month navigation header */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            marginBottom: 16
          }}>
            <button onClick={() => goMonth(-1)} disabled={!canGoPrev} style={{
              width: 36, height: 36, borderRadius: 10,
              background: canGoPrev ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.1)", color: canGoPrev ? "#fff" : "rgba(255,255,255,0.15)",
              fontSize: 16, cursor: canGoPrev ? "pointer" : "not-allowed", fontFamily: "'Kanit', sans-serif"
            }}>โ€น</button>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 18, color: "#fff" }}>
                {thMonthNames[calMonth]}
              </div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>
                เธ.เธจ. {calYear + 543}
              </div>
            </div>

            <button onClick={() => goMonth(1)} disabled={!canGoNext} style={{
              width: 36, height: 36, borderRadius: 10,
              background: canGoNext ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.1)", color: canGoNext ? "#fff" : "rgba(255,255,255,0.15)",
              fontSize: 16, cursor: canGoNext ? "pointer" : "not-allowed", fontFamily: "'Kanit', sans-serif"
            }}>โ€บ</button>
          </div>

          {/* Day-of-week headers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 4 }}>
            {dayHeaders.map((d, i) => (
              <div key={d} style={{
                textAlign: "center", padding: "6px 0",
                fontFamily: "'Kanit', sans-serif", fontSize: 11, fontWeight: 700,
                color: i === 0 ? "rgba(255,107,107,0.6)" : i === 1 ? "rgba(255,107,107,0.45)" : "rgba(255,255,255,0.3)",
                letterSpacing: 0.5
              }}>{d}</div>
            ))}
          </div>

          {/* Calendar cells */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
            {buildCalGrid().map((dateStr, idx) => {
              if (!dateStr) return <div key={idx} />;

              const mon = isMonday(dateStr);
              const inRange = bookableSet.has(dateStr);
              const isPast = dateStr < todayStr;
              const isDisabled = mon || isPast || !inRange;
              const isSel = selectedDate === dateStr;
              const isToday = dateStr === todayStr;
              const occ = inRange && !mon ? getOccupancyForDate(dateStr) : -1;

              // dot color by occupancy
              const dotColor = occ < 0 ? null
                : occ === 0 ? "#4ECDC4"
                : occ < 3 ? "#6BCB77"
                : occ < 5 ? "#FF8C00"
                : "#FF6B6B";

              return (
                <button
                  key={dateStr}
                  onClick={() => {
                    if (isDisabled) return;
                    setSelectedDate(dateStr);
                    setSelectedSlot(null);
                    setSelectedTrialHour(null);
                    setShowLoginPrompt(false);
                  }}
                  style={{
                    padding: "8px 4px 6px",
                    borderRadius: 10,
                    border: isSel
                      ? "2px solid #FFD700"
                      : isToday
                        ? "1px solid rgba(255,215,0,0.35)"
                        : "1px solid transparent",
                    background: isSel
                      ? "linear-gradient(135deg,#FF8C00,#FFD700)"
                      : isToday
                        ? "rgba(255,215,0,0.07)"
                        : isDisabled
                          ? "transparent"
                          : "rgba(255,255,255,0.04)",
                    color: isSel ? "#0a0c14"
                      : isDisabled ? "rgba(255,255,255,0.15)"
                      : "#fff",
                    cursor: isDisabled ? "default" : "pointer",
                    fontFamily: "'Kanit', sans-serif",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
                    transition: "all 0.12s",
                    opacity: isPast ? 0.3 : 1
                  }}
                  onMouseEnter={e => { if (!isDisabled && !isSel) e.currentTarget.style.background = "rgba(255,255,255,0.09)"; }}
                  onMouseLeave={e => { if (!isDisabled && !isSel) e.currentTarget.style.background = isToday ? "rgba(255,215,0,0.07)" : "rgba(255,255,255,0.04)"; }}
                >
                  <div style={{ fontSize: 14, fontWeight: isSel || isToday ? 800 : 500, lineHeight: 1 }}>
                    {new Date(dateStr).getDate()}
                  </div>
                  {/* Status dot */}
                  <div style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: isSel ? "#0a0c14"
                      : mon ? "rgba(255,107,107,0.35)"
                      : !inRange || isPast ? "transparent"
                      : dotColor || "rgba(255,255,255,0.2)",
                    flexShrink: 0
                  }} />
                  {/* เธเธดเธ” label for monday in range */}
                  {mon && inRange && !isPast && (
                    <div style={{ fontSize: 8, color: "rgba(255,107,107,0.5)", lineHeight: 1 }}>เธเธดเธ”</div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Calendar legend */}
          <div style={{ display: "flex", gap: 16, marginTop: 14, flexWrap: "wrap" }}>
            {[
              { dot: "#4ECDC4", label: "เธงเนเธฒเธเธกเธฒเธ" },
              { dot: "#FFD700", label: "เธงเนเธฒเธเธเธฒเธเธเธฅเธฒเธ" },
              { dot: "#FF8C00", label: "เน€เธซเธฅเธทเธญเธเนเธญเธข" },
              { dot: "#FF6B6B", label: "เน€เธ•เนเธกเนเธฅเนเธง" },
              { dot: "rgba(255,107,107,0.35)", label: "เธเธดเธ”เธ—เธณเธเธฒเธฃ" },
            ].map((l, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: l.dot, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 12, letterSpacing: 1, fontWeight: 600 }}>
            เธฃเธญเธเน€เธงเธฅเธฒ โ€” {formatThaiDate(selectedDate)} ({getDayName(selectedDate)})
            {isMonday(selectedDate) && <span style={{ marginLeft: 10, color: "#FF6B6B" }}>เธเธดเธ”เธ—เธณเธเธฒเธฃเธงเธฑเธเธเธตเน</span>}
          </div>

          {isMonday(selectedDate) ? (
            <div style={{ background: "rgba(255,107,107,0.04)", border: "1px solid rgba(255,107,107,0.15)", borderRadius: 16, padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>๐ซ</div>
              <div style={{ fontFamily: "'Kanit', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 14 }}>เธเธดเธ”เธ—เธณเธเธฒเธฃเธ—เธธเธเธงเธฑเธเธเธฑเธเธ—เธฃเน</div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {TIME_SLOTS.map(slot => {
                const fullyBooked = isSlotFullyBooked(selectedDate, slot.id);
                const isSelSlot = selectedSlot === slot.id;
                const trialHours = getTrialHours(slot);
                const t1Booked = isTrialBooked(selectedDate, slot.id, "first");
                const t2Booked = isTrialBooked(selectedDate, slot.id, "second");
                const hasTrialSpace = !fullyBooked && (!t1Booked || !t2Booked);

                const accentColor = fullyBooked ? "#FF6B6B"
                  : isSelSlot ? (bookingMode === "trial" ? "#FF8C00" : "#4ECDC4")
                  : (!t1Booked || !t2Booked) ? "#FF8C0055" : "#4ECDC455";

                return (
                  <div key={slot.id} style={{
                    borderRadius: 16, overflow: "hidden",
                    border: `1.5px solid ${fullyBooked ? "rgba(255,107,107,0.25)"
                      : isSelSlot ? (bookingMode === "trial" ? "rgba(255,140,0,0.6)" : "rgba(78,205,196,0.6)")
                      : "rgba(255,255,255,0.09)"}`,
                    background: fullyBooked ? "rgba(255,107,107,0.04)"
                      : isSelSlot ? (bookingMode === "trial" ? "rgba(255,140,0,0.07)" : "rgba(78,205,196,0.07)")
                      : "rgba(255,255,255,0.025)",
                    transition: "all 0.2s"
                  }}>

                    {/* Slot header โ€” clickable row */}
                    <button onClick={() => handleSlotClick(slot.id)}
                      disabled={fullyBooked}
                      style={{
                        width: "100%", background: "transparent", border: "none",
                        padding: "16px 20px", cursor: fullyBooked ? "not-allowed" : "pointer",
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        fontFamily: "'Kanit', sans-serif", color: "#fff", textAlign: "left"
                      }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        {/* Traffic light dot */}
                        <div style={{
                          width: 11, height: 11, borderRadius: "50%", flexShrink: 0,
                          background: fullyBooked ? "#FF6B6B" : hasTrialSpace && !fullyBooked ? "#FF8C00" : "#4ECDC4",
                          boxShadow: `0 0 8px ${fullyBooked ? "#FF6B6B" : hasTrialSpace ? "#FF8C00" : "#4ECDC4"}`
                        }} />
                        <div>
                          <div style={{ fontWeight: 800, fontSize: 15 }}>{slot.label}</div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 1 }}>{slot.time} โ€ข 2 เธเธฑเนเธงเนเธกเธ</div>
                        </div>
                      </div>

                      {/* Right side badges */}
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {fullyBooked && (
                          <span style={{ background: "rgba(255,107,107,0.15)", color: "#FF6B6B", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>เน€เธ•เนเธกเนเธฅเนเธง</span>
                        )}
                        {!fullyBooked && bookingMode === "regular" && (
                          <span style={{ background: isSelSlot ? "rgba(78,205,196,0.2)" : "rgba(78,205,196,0.08)", color: "#4ECDC4", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>
                            {isSelSlot ? "โ“ เน€เธฅเธทเธญเธเนเธฅเนเธง" : "เธงเนเธฒเธ"}
                          </span>
                        )}
                        {!fullyBooked && bookingMode === "trial" && (
                          <span style={{ background: isSelSlot ? "rgba(255,140,0,0.2)" : "rgba(255,140,0,0.08)", color: "#FF8C00", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>
                            {isSelSlot ? "เน€เธฅเธทเธญเธเธเธฑเนเธงเนเธกเธ โ“" : "เน€เธฅเธทเธญเธเธฃเธญเธเธเธตเน"}
                          </span>
                        )}
                        {!fullyBooked && (
                          <div style={{ color: "rgba(255,255,255,0.25)", fontSize: 14, transition: "transform 0.2s", transform: isSelSlot ? "rotate(180deg)" : "rotate(0deg)" }}>โ–พ</div>
                        )}
                      </div>
                    </button>

                    {/* โ”€โ”€ Trial hour picker (expands when slot selected in trial mode) โ”€โ”€ */}
                    {isSelSlot && bookingMode === "trial" && !fullyBooked && (
                      <div style={{
                        borderTop: "1px solid rgba(255,140,0,0.15)",
                        padding: "14px 20px 18px",
                        background: "rgba(255,140,0,0.03)"
                      }}>
                        <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,140,0,0.8)", marginBottom: 12, fontWeight: 700, letterSpacing: 0.5 }}>
                          ๐• เน€เธฅเธทเธญเธเธเนเธงเธเน€เธงเธฅเธฒ 1 เธเธฑเนเธงเนเธกเธเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธ
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                          {trialHours.map(th => {
                            const tbk = isTrialBooked(selectedDate, slot.id, th.key);
                            const tsel = selectedTrialHour === th.key;
                            return (
                              <button key={th.key} onClick={() => { if (!tbk) setSelectedTrialHour(tsel ? null : th.key); }}
                                disabled={tbk} style={{
                                  padding: "14px 16px", borderRadius: 12, textAlign: "center",
                                  background: tbk ? "rgba(255,107,107,0.05)"
                                    : tsel ? "linear-gradient(135deg,#FF8C00,#FFD700)"
                                    : "rgba(255,255,255,0.05)",
                                  border: tbk ? "1px solid rgba(255,107,107,0.2)"
                                    : tsel ? "none"
                                    : "1px solid rgba(255,140,0,0.25)",
                                  color: tbk ? "rgba(255,107,107,0.5)" : tsel ? "#0a0c14" : "#fff",
                                  cursor: tbk ? "not-allowed" : "pointer",
                                  fontFamily: "'Kanit', sans-serif", transition: "all 0.15s"
                                }}>
                                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 5 }}>{th.label}</div>
                                <div style={{ fontSize: 13, opacity: 0.85, marginBottom: 8 }}>{th.time}</div>
                                <div style={{
                                  display: "inline-block", borderRadius: 100, padding: "2px 10px", fontSize: 11, fontWeight: 600,
                                  background: tbk ? "rgba(255,107,107,0.15)" : tsel ? "rgba(0,0,0,0.15)" : "rgba(255,140,0,0.12)",
                                  color: tbk ? "#FF6B6B" : tsel ? "#0a0c14" : "#FF8C00"
                                }}>
                                  {tbk ? "เธกเธตเธเธนเนเธเธญเธเนเธฅเนเธง" : tsel ? "โ“ เน€เธฅเธทเธญเธเนเธฅเนเธง" : "เธงเนเธฒเธ"}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Login Prompt */}
        {showLoginPrompt && !user && (
          <div style={{
            background: "rgba(255,140,0,0.06)", border: "1px solid rgba(255,140,0,0.25)",
            borderRadius: 16, padding: "18px 22px", marginBottom: 24,
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14
          }}>
            <div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, color: "#FFD700", fontSize: 15, marginBottom: 4 }}>๐”’ เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเธเนเธญเธเธเธญเธ</div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธเธเธฃเธตเธซเธฃเธทเธญเนเธเน Google Account เนเธ”เนเน€เธฅเธข</div>
            </div>
            <button onClick={() => setPage("login")} style={{
              background: "linear-gradient(135deg,#FF8C00,#FFD700)", border: "none",
              color: "#0a0c14", padding: "10px 22px", borderRadius: 10,
              fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer"
            }}>เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ / เธชเธกเธฑเธเธฃ</button>
          </div>
        )}

        {/* Booking Form */}
        {user && selectedSlot && !isMonday(selectedDate) && (bookingMode === "regular" || (bookingMode === "trial" && selectedTrialHour)) && (
          <div style={{
            background: bookingMode === "trial" ? "rgba(255,140,0,0.05)" : "rgba(78,205,196,0.05)",
            border: `1.5px solid ${bookingMode === "trial" ? "rgba(255,140,0,0.3)" : "rgba(78,205,196,0.3)"}`,
            borderRadius: 20, padding: 28
          }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 20 }}>
              <div style={{ fontSize: 28 }}>{bookingMode === "trial" ? "๐ฏ" : "๐“"}</div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 18, color: bookingMode === "trial" ? "#FFD700" : "#4ECDC4" }}>
                  {bookingMode === "trial" ? "เธขเธทเธเธขเธฑเธเธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธ" : "เธขเธทเธเธขเธฑเธเธเธฒเธฃเธเธญเธ"}
                </div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>
                  {formatThaiDate(selectedDate)} โ€ข{" "}
                  {(TIME_SLOTS.find(s => s.id === selectedSlot) || {}).label}{" "}
                  {bookingMode === "trial"
                    ? `(${(getTrialHours(TIME_SLOTS.find(s => s.id === selectedSlot)).find(h => h.key === selectedTrialHour) || {}).time})`
                    : `(${(TIME_SLOTS.find(s => s.id === selectedSlot) || {}).time})`}
                </div>
                {/* Duration pill */}
                <div style={{
                  marginTop: 8, display: "inline-flex", alignItems: "center", gap: 5,
                  background: bookingMode === "trial" ? "rgba(255,140,0,0.12)" : "rgba(78,205,196,0.12)",
                  borderRadius: 100, padding: "4px 12px"
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: bookingMode === "trial" ? "#FF8C00" : "#4ECDC4" }} />
                  <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: bookingMode === "trial" ? "#FF8C00" : "#4ECDC4", fontWeight: 700 }}>
                    {bookingMode === "trial" ? "โฑ เธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธ 1 เธเธฑเนเธงเนเธกเธ (เธเธฃเธต)" : "โฑ เน€เธฃเธตเธขเธเธเธเธ•เธด 2 เธเธฑเนเธงเนเธกเธ"}
                  </span>
                </div>
              </div>
            </div>

            {/* Form fields */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>
                  {bookingMode === "trial" ? "เธเธทเนเธญเธเธนเนเธเธเธเธฃเธญเธ *" : "เธเธทเนเธญ-เธเธฒเธกเธชเธเธธเธฅเธเธนเนเน€เธฃเธตเธขเธ *"}
                </div>
                <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder={bookingMode === "trial" ? "เธเธทเนเธญ-เธเธฒเธกเธชเธเธธเธฅเธเธนเนเธเธเธเธฃเธญเธ" : "เธเธทเนเธญ-เธเธฒเธกเธชเธเธธเธฅเธเธฑเธเน€เธฃเธตเธขเธ"}
                  style={iS} />
              </div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>เน€เธเธญเธฃเนเนเธ—เธฃเธจเธฑเธเธ—เน *</div>
                <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  placeholder="08x-xxx-xxxx" style={iS} />
              </div>
              {bookingMode === "trial" && (
                <>
                  <div>
                    <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>เธญเธฒเธขเธธเน€เธ”เนเธ</div>
                    <input value={form.childAge} onChange={e => setForm(p => ({ ...p, childAge: e.target.value }))}
                      placeholder="เน€เธเนเธ 9 เธเธต" style={iS} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>เธเนเธญเธเธงเธฒเธกเธ–เธถเธเธ—เธตเธกเธเธฒเธ</div>
                    <input value={form.note} onChange={e => setForm(p => ({ ...p, note: e.target.value }))}
                      placeholder="เน€เธเนเธ เธชเธเนเธเธซเธฅเธฑเธเธชเธนเธ•เธฃเธญเธฐเนเธฃ" style={iS} />
                  </div>
                </>
              )}
            </div>

            {/* Trial extra note */}
            {bookingMode === "trial" && (
              <div style={{
                background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.12)",
                borderRadius: 10, padding: "10px 14px", marginBottom: 14,
                fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.8
              }}>
                ๐“ เธ—เธตเธกเธเธฒเธเธเธฐเนเธ—เธฃเธขเธทเธเธขเธฑเธเธ เธฒเธขเนเธ 24 เธเธฑเนเธงเนเธกเธ เธซเธฒเธเนเธกเนเนเธ”เนเธฃเธฑเธเนเธ—เธฃเธจเธฑเธเธ—เน เธเธฃเธธเธ“เธฒเธ•เธดเธ”เธ•เนเธญเธเนเธฒเธ Facebook
              </div>
            )}

            <div style={{
              background: "rgba(255,255,255,0.025)", borderRadius: 10, padding: "10px 14px", marginBottom: 20,
              fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)"
            }}>
              ๐”’ เธเนเธญเธกเธนเธฅเธชเนเธงเธเธ•เธฑเธงเนเธ”เนเธฃเธฑเธเธเธฒเธฃเธเธเธเนเธญเธเธ•เธฒเธก PDPA โ€” เน€เธเธเธฒเธฐ Admin เน€เธ—เนเธฒเธเธฑเนเธเธ—เธตเนเน€เธซเนเธเธเนเธญเธกเธนเธฅเธชเนเธงเธเธ•เธฑเธง
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={handleBook} disabled={!canSubmit} style={{
                background: canSubmit
                  ? bookingMode === "trial" ? "linear-gradient(135deg,#FF8C00,#FFD700)" : "linear-gradient(135deg,#4ECDC4,#44B8B8)"
                  : "rgba(255,255,255,0.07)",
                border: "none",
                color: canSubmit ? "#0a0c14" : "rgba(255,255,255,0.2)",
                padding: "13px 32px", borderRadius: 12,
                fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15,
                cursor: canSubmit ? "pointer" : "not-allowed"
              }}>
                {bookingMode === "trial" ? "๐ฏ เธขเธทเธเธขเธฑเธเธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธ" : "โ“ เธขเธทเธเธขเธฑเธเธเธฒเธฃเธเธญเธ"}
              </button>
              <button onClick={() => { setSelectedSlot(null); setSelectedTrialHour(null); }} style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.4)", padding: "13px 22px", borderRadius: 12,
                fontFamily: "'Kanit', sans-serif", fontSize: 14, cursor: "pointer"
              }}>เธขเธเน€เธฅเธดเธ</button>
            </div>
          </div>
        )}

        {/* Bar chart summary */}
        <div style={{ marginTop: 48, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: 28 }}>
          <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 20 }}>๐“ เธ เธฒเธเธฃเธงเธกเธเธฒเธฃเธเธญเธ 30 เธงเธฑเธเธเนเธฒเธเธซเธเนเธฒ</div>
          <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 72, overflowX: "auto" }}>
            {Array.from(getBookableDateSet()).sort().map(d => {
              const mon = isMonday(d);
              const occ = mon ? 0 : getOccupancyForDate(d);
              const pct = occ / 5;
              const barColor = occ === 0 ? "#4ECDC4" : occ < 3 ? "#FFD700" : occ < 5 ? "#FF8C00" : "#FF6B6B";
              const isSel = d === selectedDate;
              return (
                <div key={d} onClick={() => { if (!mon && bookableSet.has(d)) { setSelectedDate(d); setSelectedSlot(null); setSelectedTrialHour(null); const dt = new Date(d); setCalYear(dt.getFullYear()); setCalMonth(dt.getMonth()); } }}
                  title={d}
                  style={{ flex: "0 0 auto", width: 14, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, cursor: mon ? "default" : "pointer" }}>
                  <div style={{
                    width: "100%", borderRadius: "3px 3px 0 0",
                    height: mon ? 3 : Math.max(3, pct * 56),
                    background: mon ? "rgba(255,255,255,0.04)" : isSel ? "#FFD700" : barColor,
                    opacity: mon ? 0.2 : 1, transition: "height 0.3s",
                    boxShadow: isSel ? "0 0 8px rgba(255,215,0,0.5)" : "none"
                  }} />
                  {isSel && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#FFD700" }} />}
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.2)" }}>เธงเธฑเธเธเธตเน</span>
            <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.2)" }}>+30 เธงเธฑเธ</span>
          </div>
        </div>

      </div>
    </div>
  );
}


// ==================== MOCK GALLERY DATA with timeline ====================
const MOCK_STUDENTS = [
  {
    id: "s001", name: "เธ”.เธ.เธเธงเธดเธ เธชเธธเธเนเธ", avatar: "เธเธง",
    startDate: "2024-06-01", level: "Intermediate",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=400&fit=crop", caption: "เธงเธฑเธเนเธฃเธเธ—เธตเนเธกเธฒเน€เธฃเธตเธขเธ! ๐", date: "2024-06-01", tag: "เน€เธฃเธดเนเธกเน€เธฃเธตเธขเธ", milestone: true },
      { id: 2, url: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&h=400&fit=crop", caption: "เธ•เนเธญเธซเธธเนเธเธขเธเธ•เน LEGO เธเธดเนเธเนเธฃเธ", date: "2024-06-15", tag: "เธเธดเธเธเธฃเธฃเธก", milestone: false },
      { id: 3, url: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=500&h=400&fit=crop", caption: "เน€เธเธตเธขเธเนเธเธฃเนเธเธฃเธกเนเธ”เนเนเธฅเนเธง ๐’ป", date: "2024-07-10", tag: "เธเธงเธฒเธกเธชเธณเน€เธฃเนเธ", milestone: true },
      { id: 4, url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop", caption: "เธ—เธ”เธชเธญเธเธซเธธเนเธเธขเธเธ•เนเธเธเธชเธเธฒเธก", date: "2024-08-05", tag: "เธเธดเธเธเธฃเธฃเธก", milestone: false },
      { id: 5, url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop", caption: "๐ เนเธ”เนเธฃเธฑเธเธฃเธฒเธเธงเธฑเธฅเธเธเธฐเน€เธฅเธดเธจ!", date: "2024-09-20", tag: "เธฃเธฒเธเธงเธฑเธฅ", milestone: true },
      { id: 6, url: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&h=400&fit=crop", caption: "Open House เธเธณเน€เธชเธเธญเธเธฅเธเธฒเธ", date: "2024-11-01", tag: "เธเธดเธเธเธฃเธฃเธก", milestone: false },
    ]
  },
  {
    id: "s002", name: "เธ”.เธ.เธกเธดเธเธ•เธฃเธฒ เธงเธเธจเนเธ—เธญเธ", avatar: "เธกเธด",
    startDate: "2024-08-15", level: "Beginner",
    photos: [
      { id: 7, url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=400&fit=crop&sig=1", caption: "เธขเธดเธเธ”เธตเธ•เนเธญเธเธฃเธฑเธเธชเธกเธฒเธเธดเธเนเธซเธกเน ๐", date: "2024-08-15", tag: "เน€เธฃเธดเนเธกเน€เธฃเธตเธขเธ", milestone: true },
      { id: 8, url: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&h=400&fit=crop&sig=2", caption: "เน€เธฃเธตเธขเธเธฃเธนเน Scratch เธเธฑเธเน€เธเธทเนเธญเธ", date: "2024-09-01", tag: "เธเธดเธเธเธฃเธฃเธก", milestone: false },
      { id: 9, url: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=500&h=400&fit=crop&sig=3", caption: "เธเนเธฒเธเธ—เธ”เธชเธญเธเธฃเธฐเธ”เธฑเธเน€เธฃเธดเนเธกเธ•เนเธ โ…", date: "2024-10-10", tag: "เธเธงเธฒเธกเธชเธณเน€เธฃเนเธ", milestone: true },
    ]
  },
];

// ==================== GALLERY PAGE ====================
function GalleryPage({ user, setPage }) {
  const [viewMode, setViewMode] = useState("timeline"); // "timeline" | "grid"
  const [selectedStudent, setSelectedStudent] = useState(MOCK_STUDENTS[0]);
  const [lightbox, setLightbox] = useState(null);
  const [filterTag, setFilterTag] = useState("เธ—เธฑเนเธเธซเธกเธ”");

  const allTags = ["เธ—เธฑเนเธเธซเธกเธ”", "เน€เธฃเธดเนเธกเน€เธฃเธตเธขเธ", "เธเธดเธเธเธฃเธฃเธก", "เธเธงเธฒเธกเธชเธณเน€เธฃเนเธ", "เธฃเธฒเธเธงเธฑเธฅ"];

  const filteredPhotos = (selectedStudent && selectedStudent.photos).filter(p =>
    filterTag === "เธ—เธฑเนเธเธซเธกเธ”" || p.tag === filterTag
  ) || [];

  // เธเธณเธเธงเธ“เธฃเธฐเธขเธฐเน€เธงเธฅเธฒเธ—เธตเนเน€เธฃเธตเธขเธเธกเธฒ
  const getDuration = (start) => {
    const s = new Date(start);
    const now = new Date("2026-02-25");
    const months = (now.getFullYear() - s.getFullYear()) * 12 + now.getMonth() - s.getMonth();
    if (months < 1) return "เธเนเธญเธขเธเธงเนเธฒ 1 เน€เธ”เธทเธญเธ";
    if (months < 12) return `${months} เน€เธ”เธทเธญเธ`;
    return `${Math.floor(months / 12)} เธเธต ${months % 12} เน€เธ”เธทเธญเธ`;
  };

  const formatDate = (d) => {
    const dt = new Date(d);
    const months = ["เธก.เธ.","เธ.เธ.","เธกเธต.เธ.","เน€เธก.เธข.","เธ.เธ.","เธกเธด.เธข.","เธ.เธ.","เธช.เธ.","เธ.เธข.","เธ•.เธ.","เธ.เธข.","เธ.เธ."];
    return `${dt.getDate()} ${months[dt.getMonth()]} ${dt.getFullYear() + 543}`;
  };

  const tagColor = { "เน€เธฃเธดเนเธกเน€เธฃเธตเธขเธ": "#4ECDC4", "เธเธดเธเธเธฃเธฃเธก": "#FFD700", "เธเธงเธฒเธกเธชเธณเน€เธฃเนเธ": "#6BCB77", "เธฃเธฒเธเธงเธฑเธฅ": "#FF8C00" };

  if (!user) return (
    <div style={{ padding: "120px 24px", textAlign: "center", background: "#0a0c14", minHeight: "100vh" }}>
      <div style={{ fontSize: 64, marginBottom: 24 }}>๐–ผ๏ธ</div>
      <h2 style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 16 }}>เธเธฅเธฑเธเธ เธฒเธเธชเนเธงเธเธ•เธฑเธง</h2>
      <p style={{ fontFamily: "'Kanit', sans-serif", color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเน€เธเธทเนเธญเธ”เธนเธ เธฒเธ timeline เธเธฒเธฃเน€เธฃเธตเธขเธเธเธญเธเธเธธเธ“</p>
      <button onClick={() => setPage("login")} style={{
        background: "linear-gradient(135deg,#FF8C00,#FFD700)", border: "none",
        color: "#0a0c14", padding: "14px 36px", borderRadius: 12,
        fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, cursor: "pointer"
      }}>เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ</button>
    </div>
  );

  return (
    <div style={{ padding: "100px 24px 80px", background: "#0a0c14", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader icon="๐–ผ๏ธ" title="เธเธฅเธฑเธเธ เธฒเธเธชเนเธงเธเธ•เธฑเธง" sub="เธ•เธดเธ”เธ•เธฒเธก Timeline เธเธฒเธฃเน€เธฃเธตเธขเธเธฃเธนเนเธเธญเธเธเธฑเธเน€เธฃเธตเธขเธ" />

        {/* Student selector (admin เน€เธซเนเธเธ—เธธเธเธเธ, student เน€เธซเนเธเธ•เธฑเธงเน€เธญเธ) */}
        {user.role === "admin" && (
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 10, letterSpacing: 1 }}>เน€เธฅเธทเธญเธเธเธฑเธเน€เธฃเธตเธขเธ</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {MOCK_STUDENTS.map(s => (
                <button key={s.id} onClick={() => setSelectedStudent(s)} style={{
                  background: (selectedStudent && selectedStudent.id) === s.id ? "linear-gradient(135deg,#FF8C00,#FFD700)" : "rgba(255,255,255,0.05)",
                  border: "1px solid " + ((selectedStudent && selectedStudent.id) === s.id ? "transparent" : "rgba(255,255,255,0.1)"),
                  color: (selectedStudent && selectedStudent.id) === s.id ? "#0a0c14" : "#fff",
                  padding: "10px 20px", borderRadius: 12, cursor: "pointer",
                  fontFamily: "'Kanit', sans-serif", fontWeight: 600, fontSize: 14,
                  display: "flex", alignItems: "center", gap: 10
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: (selectedStudent && selectedStudent.id) === s.id ? "rgba(0,0,0,0.2)" : "rgba(255,140,0,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 800
                  }}>{s.avatar}</div>
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedStudent && (
          <>
            {/* Student profile card */}
            <div style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20, padding: 24, marginBottom: 32,
              display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap"
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "linear-gradient(135deg,#FF8C00,#FFD700)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, fontWeight: 800, color: "#0a0c14", flexShrink: 0
              }}>{selectedStudent.avatar}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 20, color: "#fff", marginBottom: 4 }}>{selectedStudent.name}</div>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>๐“ เธฃเธฐเธ”เธฑเธ: <span style={{ color: "#FFD700" }}>{selectedStudent.level}</span></span>
                  <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>๐“… เน€เธฃเธดเนเธกเน€เธฃเธตเธขเธ: <span style={{ color: "#4ECDC4" }}>{formatDate(selectedStudent.startDate)}</span></span>
                  <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>โฑ๏ธ เน€เธฃเธตเธขเธเธกเธฒ: <span style={{ color: "#6BCB77" }}>{getDuration(selectedStudent.startDate)}</span></span>
                  <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>๐–ผ๏ธ เธ เธฒเธเธ—เธฑเนเธเธซเธกเธ”: <span style={{ color: "#FF8C00" }}>{selectedStudent.photos.length} เธ เธฒเธ</span></span>
                </div>
              </div>
              {/* View mode toggle */}
              <div style={{ display: "flex", background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 4, gap: 4 }}>
                {[{ id: "timeline", icon: "๐“", label: "Timeline" }, { id: "grid", icon: "โ", label: "Grid" }].map(m => (
                  <button key={m.id} onClick={() => setViewMode(m.id)} style={{
                    background: viewMode === m.id ? "rgba(255,140,0,0.2)" : "transparent",
                    border: viewMode === m.id ? "1px solid rgba(255,140,0,0.4)" : "1px solid transparent",
                    color: viewMode === m.id ? "#FFD700" : "rgba(255,255,255,0.4)",
                    padding: "6px 14px", borderRadius: 8, cursor: "pointer",
                    fontFamily: "'Kanit', sans-serif", fontSize: 13
                  }}>{m.icon} {m.label}</button>
                ))}
              </div>
            </div>

            {/* Tag filter */}
            <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
              {allTags.map(tag => (
                <button key={tag} onClick={() => setFilterTag(tag)} style={{
                  background: filterTag === tag ? (tagColor[tag] ? `${tagColor[tag]}25` : "rgba(255,255,255,0.12)") : "rgba(255,255,255,0.04)",
                  border: `1px solid ${filterTag === tag ? (tagColor[tag] || "rgba(255,255,255,0.3)") : "rgba(255,255,255,0.08)"}`,
                  color: filterTag === tag ? (tagColor[tag] || "#fff") : "rgba(255,255,255,0.5)",
                  padding: "6px 16px", borderRadius: 100, cursor: "pointer",
                  fontFamily: "'Kanit', sans-serif", fontSize: 13, fontWeight: filterTag === tag ? 700 : 400
                }}>{tag}</button>
              ))}
            </div>

            {/* โ•โ•โ•โ•โ•โ• TIMELINE VIEW โ•โ•โ•โ•โ•โ• */}
            {viewMode === "timeline" && (
              <div style={{ position: "relative" }}>
                {/* Vertical line */}
                <div style={{
                  position: "absolute", left: 28, top: 0, bottom: 0,
                  width: 2, background: "linear-gradient(to bottom, #FF8C00, rgba(255,140,0,0.1))"
                }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {filteredPhotos.map((photo, i) => (
                    <div key={photo.id} style={{ display: "flex", gap: 24, position: "relative", paddingBottom: 40 }}>
                      {/* Dot on line */}
                      <div style={{ flexShrink: 0, width: 56, display: "flex", justifyContent: "center" }}>
                        <div style={{
                          width: photo.milestone ? 22 : 14, height: photo.milestone ? 22 : 14,
                          borderRadius: "50%", marginTop: 20,
                          background: photo.milestone
                            ? "linear-gradient(135deg,#FF8C00,#FFD700)"
                            : "rgba(255,255,255,0.15)",
                          border: photo.milestone ? "3px solid #FFD700" : "2px solid rgba(255,255,255,0.3)",
                          boxShadow: photo.milestone ? "0 0 16px rgba(255,215,0,0.5)" : "none",
                          zIndex: 1, position: "relative",
                          flexShrink: 0
                        }} />
                      </div>

                      {/* Card */}
                      <div style={{
                        flex: 1, background: photo.milestone ? "rgba(255,140,0,0.05)" : "rgba(255,255,255,0.03)",
                        border: photo.milestone ? "1px solid rgba(255,215,0,0.2)" : "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 18, overflow: "hidden",
                        display: "flex", gap: 0, flexDirection: "row",
                        cursor: "pointer", transition: "all 0.2s",
                        boxShadow: photo.milestone ? "0 4px 24px rgba(255,140,0,0.1)" : "none"
                      }}
                        onClick={() => setLightbox(photo)}
                        onMouseEnter={e => e.currentTarget.style.transform = "translateX(4px)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
                      >
                        <div style={{ width: 200, height: 150, flexShrink: 0, position: "relative" }}>
                          <img src={photo.url} alt={photo.caption} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                          {photo.milestone && (
                            <div style={{
                              position: "absolute", top: 8, left: 8,
                              background: "linear-gradient(135deg,#FF8C00,#FFD700)",
                              borderRadius: 6, padding: "2px 8px",
                              fontFamily: "'Kanit', sans-serif", fontSize: 11, fontWeight: 700, color: "#0a0c14"
                            }}>โญ Milestone</div>
                          )}
                        </div>
                        <div style={{ padding: "16px 20px", flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                            <span style={{
                              background: `${tagColor[photo.tag] || "#aaa"}20`,
                              color: tagColor[photo.tag] || "#aaa",
                              borderRadius: 100, padding: "2px 10px", fontSize: 11,
                              fontFamily: "'Kanit', sans-serif", fontWeight: 600
                            }}>{photo.tag}</span>
                            <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{formatDate(photo.date)}</span>
                          </div>
                          <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", lineHeight: 1.5 }}>{photo.caption}</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* End cap */}
                  <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                    <div style={{ width: 56, display: "flex", justifyContent: "center" }}>
                      <div style={{
                        width: 30, height: 30, borderRadius: "50%",
                        background: "rgba(78,205,196,0.15)",
                        border: "2px dashed rgba(78,205,196,0.5)",
                        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14
                      }}>๐€</div>
                    </div>
                    <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(78,205,196,0.7)" }}>เธเธณเธฅเธฑเธเน€เธ”เธดเธเธซเธเนเธฒเธ•เนเธญ...</div>
                  </div>
                </div>
              </div>
            )}

            {/* โ•โ•โ•โ•โ•โ• GRID VIEW โ•โ•โ•โ•โ•โ• */}
            {viewMode === "grid" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 18 }}>
                {filteredPhotos.map(photo => (
                  <div key={photo.id} onClick={() => setLightbox(photo)} style={{
                    borderRadius: 16, overflow: "hidden", cursor: "pointer",
                    position: "relative", aspectRatio: "4/3",
                    border: photo.milestone ? "2px solid rgba(255,215,0,0.4)" : "1px solid rgba(255,255,255,0.07)",
                    transition: "transform 0.2s"
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  >
                    <img src={photo.url} alt={photo.caption} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    {photo.milestone && (
                      <div style={{
                        position: "absolute", top: 10, left: 10,
                        background: "linear-gradient(135deg,#FF8C00,#FFD700)",
                        borderRadius: 6, padding: "3px 10px",
                        fontFamily: "'Kanit', sans-serif", fontSize: 11, fontWeight: 700, color: "#0a0c14"
                      }}>โญ Milestone</div>
                    )}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)",
                      display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 14
                    }}>
                      <div style={{
                        display: "inline-block", marginBottom: 6, alignSelf: "flex-start",
                        background: `${tagColor[photo.tag] || "#aaa"}30`,
                        color: tagColor[photo.tag] || "#aaa",
                        borderRadius: 100, padding: "2px 10px", fontSize: 10,
                        fontFamily: "'Kanit', sans-serif", fontWeight: 600
                      }}>{photo.tag}</div>
                      <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "#fff", fontWeight: 600, lineHeight: 1.4 }}>{photo.caption}</div>
                      <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{formatDate(photo.date)}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.93)",
          zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24
        }}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 700, width: "100%", borderRadius: 20, overflow: "hidden", background: "#111" }}>
            <img src={lightbox.url} alt={lightbox.caption} style={{ width: "100%", display: "block", maxHeight: "70vh", objectFit: "contain", background: "#000" }} />
            <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, color: "#fff", fontSize: 16, marginBottom: 4 }}>{lightbox.caption}</div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{new Date(lightbox.date).toLocaleDateString("th-TH")} โ€ข {lightbox.tag}</div>
              </div>
              <button onClick={() => setLightbox(null)} style={{
                background: "rgba(255,255,255,0.08)", border: "none", color: "#fff",
                width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: 18
              }}>ร—</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== LOGIN PAGE ====================
function LoginPage({ setUser, setPage }) {
  const [tab, setTab] = useState("login"); // "login" | "register"
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", childName: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  // โ”€โ”€ เธเธณเธฅเธญเธ Google OAuth popup โ”€โ”€
  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError("");
    await new Promise(r => setTimeout(r, 1400));
    // เธเธณเธฅเธญเธ: Google เธชเนเธเธเนเธญเธกเธนเธฅเธเธฅเธฑเธเธกเธฒ
    const mockGoogleUser = {
      name: "เธเธนเนเธเธเธเธฃเธญเธ Google",
      email: "parent@gmail.com",
      avatar: "https://lh3.googleusercontent.com/a/default-user",
      role: "student",
      provider: "google",
    };
    setUser(mockGoogleUser);
    setGoogleLoading(false);
    setPage("home");
  };

  // โ”€โ”€ Login เธ”เนเธงเธข email/password โ”€โ”€
  const handleLogin = async () => {
    setError("");
    if (!form.email || !form.password) { setError("เธเธฃเธธเธ“เธฒเธเธฃเธญเธเธญเธตเน€เธกเธฅเนเธฅเธฐเธฃเธซเธฑเธชเธเนเธฒเธ"); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    const e = form.email.toLowerCase();
    if (e.includes("superadmin") || e.includes("super_admin")) {
      setUser({ name: "Super Admin", role: "super_admin", email: form.email, provider: "email" });
    } else if (e.includes("admin")) {
      setUser({ name: "Admin BaanBot", role: "admin", email: form.email, provider: "email" });
    } else if (e.includes("teacher") || e.includes("เธเธฃเธน")) {
      setUser({ name: "เธเธฃเธน" + form.email.split("@")[0], role: "teacher", email: form.email, provider: "email" });
    } else {
      setUser({ name: form.email.split("@")[0], role: "student", email: form.email, provider: "email" });
    }
    setLoading(false);
    setPage("home");
  };

  // โ”€โ”€ เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธ โ”€โ”€
  const handleRegister = async () => {
    setError("");
    if (!form.name || !form.email || !form.password || !form.childName || !form.phone) {
      setError("เธเธฃเธธเธ“เธฒเธเธฃเธญเธเธเนเธญเธกเธนเธฅเนเธซเนเธเธฃเธเธ—เธธเธเธเนเธญเธ"); return;
    }
    if (form.password.length < 8) { setError("เธฃเธซเธฑเธชเธเนเธฒเธเธ•เนเธญเธเธกเธตเธญเธขเนเธฒเธเธเนเธญเธข 8 เธ•เธฑเธงเธญเธฑเธเธฉเธฃ"); return; }
    if (form.password !== form.confirmPassword) { setError("เธฃเธซเธฑเธชเธเนเธฒเธเนเธกเนเธ•เธฃเธเธเธฑเธ"); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setRegisterSuccess(true);
    setTimeout(() => {
      setRegisterSuccess(false);
      setTab("login");
      setForm(p => ({ ...p, password: "", confirmPassword: "" }));
    }, 2500);
  };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10,
    padding: "12px 16px", color: "#fff",
    fontFamily: "'Kanit', sans-serif", fontSize: 14,
    outline: "none", boxSizing: "border-box", transition: "border 0.2s"
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#0a0c14",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "80px 24px",
      backgroundImage: "radial-gradient(ellipse at 30% 40%, rgba(255,140,0,0.05) 0%, transparent 60%)"
    }}>
      <div style={{ width: "100%", maxWidth: 440 }}>

        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <BaanBotLogo width={220} style={{ cursor: "pointer" }} />
        </div>

        {/* Card */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24, padding: "32px 36px"
        }}>

          {/* Tab switcher */}
          <div style={{
            display: "flex", background: "rgba(255,255,255,0.05)",
            borderRadius: 12, padding: 4, marginBottom: 28, gap: 4
          }}>
            {[{ id: "login", label: "เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ" }, { id: "register", label: "เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธ" }].map(t => (
              <button key={t.id} onClick={() => { setTab(t.id); setError(""); }}
                style={{
                  flex: 1, padding: "9px", borderRadius: 9, border: "none", cursor: "pointer",
                  background: tab === t.id ? "rgba(255,140,0,0.2)" : "transparent",
                  color: tab === t.id ? "#FFD700" : "rgba(255,255,255,0.4)",
                  fontFamily: "'Kanit', sans-serif", fontWeight: tab === t.id ? 700 : 400, fontSize: 14,
                  border: tab === t.id ? "1px solid rgba(255,140,0,0.35)" : "1px solid transparent",
                  transition: "all 0.2s"
                }}>{t.label}</button>
            ))}
          </div>

          {/* โ•โ•โ•โ• Google button โ•โ•โ•โ• */}
          <button onClick={handleGoogleLogin} disabled={googleLoading}
            style={{
              width: "100%", padding: "13px 16px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.15)",
              background: googleLoading ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.06)",
              color: "#fff", cursor: googleLoading ? "not-allowed" : "pointer",
              fontFamily: "'Kanit', sans-serif", fontWeight: 600, fontSize: 15,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
              transition: "all 0.2s", marginBottom: 20
            }}
            onMouseEnter={e => { if (!googleLoading) e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
            onMouseLeave={e => { if (!googleLoading) e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
          >
            {googleLoading ? (
              <>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%",
                  border: "2.5px solid rgba(255,255,255,0.2)",
                  borderTopColor: "#4285F4",
                  animation: "spin 0.8s linear infinite"
                }} />
                เธเธณเธฅเธฑเธเน€เธเธทเนเธญเธกเธ•เนเธญ Google...
              </>
            ) : (
              <>
                {/* Google G logo */}
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                {tab === "login" ? "เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเธ”เนเธงเธข Google" : "เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธเธ”เนเธงเธข Google"}
              </>
            )}
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
            <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>เธซเธฃเธทเธญเนเธเนเธญเธตเน€เธกเธฅ</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: "rgba(255,70,70,0.1)", border: "1px solid rgba(255,70,70,0.3)",
              borderRadius: 10, padding: "10px 14px", marginBottom: 16,
              fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "#ff6b6b",
              display: "flex", alignItems: "center", gap: 8
            }}>โ ๏ธ {error}</div>
          )}

          {/* Register success */}
          {registerSuccess && (
            <div style={{
              background: "rgba(78,205,196,0.1)", border: "1px solid rgba(78,205,196,0.3)",
              borderRadius: 10, padding: "12px 16px", marginBottom: 16, textAlign: "center",
              fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "#4ECDC4"
            }}>โ… เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธเธชเธณเน€เธฃเนเธเนเธฅเนเธง! เธเธณเธฅเธฑเธเธเธฒเนเธเธซเธเนเธฒเน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ...</div>
          )}

          {/* โ•โ•โ•โ• LOGIN FORM โ•โ•โ•โ• */}
          {tab === "login" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>เธญเธตเน€เธกเธฅ</div>
                <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com" style={inputStyle}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"}
                  onKeyDown={e => e.key === "Enter" && handleLogin()} />
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>เธฃเธซเธฑเธชเธเนเธฒเธ</div>
                  <button style={{ background: "none", border: "none", color: "rgba(255,140,0,0.7)", fontFamily: "'Kanit', sans-serif", fontSize: 12, cursor: "pointer" }}>เธฅเธทเธกเธฃเธซเธฑเธชเธเนเธฒเธ?</button>
                </div>
                <div style={{ position: "relative" }}>
                  <input type={showPass ? "text" : "password"} value={form.password}
                    onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                    placeholder="โ€ขโ€ขโ€ขโ€ขโ€ขโ€ขโ€ขโ€ข" style={{ ...inputStyle, paddingRight: 44 }}
                    onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                    onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"}
                    onKeyDown={e => e.key === "Enter" && handleLogin()} />
                  <button onClick={() => setShowPass(v => !v)} style={{
                    position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer", fontSize: 16, opacity: 0.5
                  }}>{showPass ? "๐" : "๐‘๏ธ"}</button>
                </div>
              </div>
              <button onClick={handleLogin} disabled={loading} style={{
                background: loading ? "rgba(255,140,0,0.4)" : "linear-gradient(135deg,#FF8C00,#FFD700)",
                border: "none", color: "#0a0c14", padding: "13px",
                borderRadius: 12, cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15, marginTop: 4,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8
              }}>
                {loading ? <><div style={{ width: 18, height: 18, borderRadius: "50%", border: "2.5px solid rgba(0,0,0,0.2)", borderTopColor: "#0a0c14", animation: "spin 0.8s linear infinite" }} />เธเธณเธฅเธฑเธเน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ...</> : "เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ"}
              </button>
            </div>
          )}

          {/* โ•โ•โ•โ• REGISTER FORM โ•โ•โ•โ• */}
          {tab === "register" && !registerSuccess && (
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {/* Section: เธเนเธญเธกเธนเธฅเธเธนเนเธเธเธเธฃเธญเธ */}
              <div style={{
                fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "#FF8C00",
                letterSpacing: 1, fontWeight: 700, marginBottom: 2
              }}>๐‘ค เธเนเธญเธกเธนเธฅเธเธนเนเธเธเธเธฃเธญเธ</div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>เธเธทเนเธญ-เธเธฒเธกเธชเธเธธเธฅเธเธนเนเธเธเธเธฃเธญเธ *</div>
                <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder="เธเธฃเธญเธเธเธทเนเธญ-เธเธฒเธกเธชเธเธธเธฅ" style={inputStyle}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"} />
              </div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>เน€เธเธญเธฃเนเนเธ—เธฃเธจเธฑเธเธ—เน *</div>
                <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  placeholder="08x-xxx-xxxx" style={inputStyle}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"} />
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "4px 0" }} />
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "#4ECDC4", letterSpacing: 1, fontWeight: 700, marginBottom: 2 }}>๐ค– เธเนเธญเธกเธนเธฅเธเธฑเธเน€เธฃเธตเธขเธ</div>

              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>เธเธทเนเธญเน€เธ”เนเธเธเธฑเธเน€เธฃเธตเธขเธ *</div>
                <input value={form.childName} onChange={e => setForm(p => ({ ...p, childName: e.target.value }))}
                  placeholder="เธเธทเนเธญเน€เธฅเนเธ เธซเธฃเธทเธญ เธเธทเนเธญเธเธฃเธดเธเธเธฑเธเน€เธฃเธตเธขเธ" style={inputStyle}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"} />
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "4px 0" }} />
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "#FFD700", letterSpacing: 1, fontWeight: 700, marginBottom: 2 }}>๐”’ เธเธฑเธเธเธตเนเธฅเธฐเธฃเธซเธฑเธชเธเนเธฒเธ</div>

              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>เธญเธตเน€เธกเธฅ *</div>
                <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com" style={inputStyle}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"} />
              </div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>เธฃเธซเธฑเธชเธเนเธฒเธ (เธญเธขเนเธฒเธเธเนเธญเธข 8 เธ•เธฑเธงเธญเธฑเธเธฉเธฃ) *</div>
                <div style={{ position: "relative" }}>
                  <input type={showPass ? "text" : "password"} value={form.password}
                    onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                    placeholder="โ€ขโ€ขโ€ขโ€ขโ€ขโ€ขโ€ขโ€ข" style={{ ...inputStyle, paddingRight: 44 }}
                    onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                    onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"} />
                  <button onClick={() => setShowPass(v => !v)} style={{
                    position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer", fontSize: 16, opacity: 0.5
                  }}>{showPass ? "๐" : "๐‘๏ธ"}</button>
                </div>
                {/* Password strength bar */}
                {form.password && (
                  <div style={{ marginTop: 8 }}>
                    <div style={{ display: "flex", gap: 4 }}>
                      {[1,2,3,4].map(i => {
                        const strength = form.password.length < 6 ? 1 : form.password.length < 8 ? 2 : /[A-Z]/.test(form.password) && /[0-9]/.test(form.password) ? 4 : 3;
                        return <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= strength ? ["","#FF6B6B","#FFD700","#6BCB77","#4ECDC4"][strength] : "rgba(255,255,255,0.1)", transition: "background 0.3s" }} />;
                      })}
                    </div>
                    <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>
                      {form.password.length < 6 ? "เธญเนเธญเธเธกเธฒเธ" : form.password.length < 8 ? "เธญเนเธญเธ" : /[A-Z]/.test(form.password) && /[0-9]/.test(form.password) ? "เนเธเนเธเนเธเธฃเนเธเธกเธฒเธ ๐’ช" : "เธเธฒเธเธเธฅเธฒเธ"}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>เธขเธทเธเธขเธฑเธเธฃเธซเธฑเธชเธเนเธฒเธ *</div>
                <input type="password" value={form.confirmPassword}
                  onChange={e => setForm(p => ({ ...p, confirmPassword: e.target.value }))}
                  placeholder="โ€ขโ€ขโ€ขโ€ขโ€ขโ€ขโ€ขโ€ข"
                  style={{ ...inputStyle, borderColor: form.confirmPassword && form.confirmPassword !== form.password ? "rgba(255,107,107,0.5)" : form.confirmPassword && form.confirmPassword === form.password ? "rgba(78,205,196,0.5)" : "rgba(255,255,255,0.12)" }}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = form.confirmPassword && form.confirmPassword !== form.password ? "1px solid rgba(255,107,107,0.5)" : "1px solid rgba(255,255,255,0.12)"} />
                {form.confirmPassword && form.confirmPassword === form.password && (
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "#4ECDC4", marginTop: 5 }}>โ“ เธฃเธซเธฑเธชเธเนเธฒเธเธ•เธฃเธเธเธฑเธ</div>
                )}
              </div>

              {/* PDPA consent */}
              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10, padding: "12px 14px",
                fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7
              }}>
                ๐”’ เธเนเธญเธกเธนเธฅเธเธญเธเธ—เนเธฒเธเนเธ”เนเธฃเธฑเธเธเธฒเธฃเธเธเธเนเธญเธเธ•เธฒเธก <span style={{ color: "#FF8C00" }}>เธ.เธฃ.เธ.เธเธธเนเธกเธเธฃเธญเธเธเนเธญเธกเธนเธฅเธชเนเธงเธเธเธธเธเธเธฅ (PDPA)</span> เนเธฅเธฐเธเธฐเธ–เธนเธเนเธเนเน€เธเธทเนเธญเธเธฃเธดเธเธฒเธฃเธเธญเธ BaanBot Chanthaburi เน€เธ—เนเธฒเธเธฑเนเธ
              </div>

              <button onClick={handleRegister} disabled={loading} style={{
                background: loading ? "rgba(255,140,0,0.4)" : "linear-gradient(135deg,#FF8C00,#FFD700)",
                border: "none", color: "#0a0c14", padding: "13px",
                borderRadius: 12, cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15, marginTop: 4,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8
              }}>
                {loading ? <><div style={{ width: 18, height: 18, borderRadius: "50%", border: "2.5px solid rgba(0,0,0,0.2)", borderTopColor: "#0a0c14", animation: "spin 0.8s linear infinite" }} />เธเธณเธฅเธฑเธเธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธ...</> : "เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธ"}
              </button>
            </div>
          )}

          {/* Dev hint */}
          <div style={{
            marginTop: 20, padding: "10px 14px",
            background: "rgba(255,140,0,0.04)", borderRadius: 8,
            fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", lineHeight: 1.7
          }}>
            ๐’ก เธ—เธ”เธชเธญเธ: "superadmin@..." = Super Admin | "admin@..." = Admin | "teacher@..." = Teacher | เธญเธทเนเธเน = Student
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

// ==================== ADMIN GALLERY PANEL ====================
function AdminGalleryPanel() {
  const [students, setStudents] = useState(MOCK_STUDENTS);
  const [selectedId, setSelectedId] = useState(MOCK_STUDENTS[0].id);
  const [uploadForm, setUploadForm] = useState({ caption: "", tag: "เธเธดเธเธเธฃเธฃเธก", date: new Date().toISOString().split("T")[0], milestone: false, url: "" });
  const [showUpload, setShowUpload] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const selected = students.find(s => s.id === selectedId);
  const tagColor = { "เน€เธฃเธดเนเธกเน€เธฃเธตเธขเธ": "#4ECDC4", "เธเธดเธเธเธฃเธฃเธก": "#FFD700", "เธเธงเธฒเธกเธชเธณเน€เธฃเนเธ": "#6BCB77", "เธฃเธฒเธเธงเธฑเธฅ": "#FF8C00" };

  const handleAddPhoto = () => {
    if (!uploadForm.caption) return;
    const newPhoto = {
      id: Date.now(),
      url: uploadForm.url || `https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=400&fit=crop&sig=${Date.now()}`,
      caption: uploadForm.caption,
      date: uploadForm.date,
      tag: uploadForm.tag,
      milestone: uploadForm.milestone
    };
    setStudents(prev => prev.map(s =>
      s.id === selectedId ? { ...s, photos: [...s.photos, newPhoto].sort((a, b) => a.date.localeCompare(b.date)) } : s
    ));
    setUploadForm({ caption: "", tag: "เธเธดเธเธเธฃเธฃเธก", date: new Date().toISOString().split("T")[0], milestone: false, url: "" });
    setShowUpload(false);
  };

  const handleDelete = (photoId) => {
    setStudents(prev => prev.map(s =>
      s.id === selectedId ? { ...s, photos: s.photos.filter(p => p.id !== photoId) } : s
    ));
    setDeleteConfirm(null);
  };

  const handleToggleMilestone = (photoId) => {
    setStudents(prev => prev.map(s =>
      s.id === selectedId
        ? { ...s, photos: s.photos.map(p => p.id === photoId ? { ...p, milestone: !p.milestone } : p) }
        : s
    ));
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, color: "#fff", fontSize: 16 }}>๐–ผ๏ธ เธเธฑเธ”เธเธฒเธฃเธเธฅเธฑเธเธ เธฒเธเธเธฑเธเน€เธฃเธตเธขเธ</div>
        <button onClick={() => setShowUpload(v => !v)} style={{
          background: showUpload ? "rgba(255,50,50,0.1)" : "linear-gradient(135deg,#FF8C00,#FFD700)",
          border: showUpload ? "1px solid rgba(255,50,50,0.3)" : "none",
          color: showUpload ? "#ff6b6b" : "#0a0c14",
          padding: "9px 20px", borderRadius: 10, cursor: "pointer",
          fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 14
        }}>{showUpload ? "โ• เธขเธเน€เธฅเธดเธ" : "+ เธญเธฑเธเนเธซเธฅเธ”เธ เธฒเธ"}</button>
      </div>

      {/* Student tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {students.map(s => (
          <button key={s.id} onClick={() => setSelectedId(s.id)} style={{
            background: selectedId === s.id ? "rgba(255,140,0,0.15)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${selectedId === s.id ? "rgba(255,140,0,0.4)" : "rgba(255,255,255,0.08)"}`,
            color: selectedId === s.id ? "#FFD700" : "#aaa",
            padding: "8px 18px", borderRadius: 10, cursor: "pointer",
            fontFamily: "'Kanit', sans-serif", fontWeight: selectedId === s.id ? 700 : 400, fontSize: 13,
            display: "flex", alignItems: "center", gap: 8
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: "50%",
              background: selectedId === s.id ? "rgba(255,140,0,0.3)" : "rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800
            }}>{s.avatar}</div>
            {s.name}
            <span style={{
              background: "rgba(255,255,255,0.08)", borderRadius: 100,
              padding: "1px 7px", fontSize: 11
            }}>{s.photos.length}</span>
          </button>
        ))}
      </div>

      {/* Upload form */}
      {showUpload && (
        <div style={{
          background: "rgba(255,140,0,0.05)", border: "1px solid rgba(255,140,0,0.2)",
          borderRadius: 18, padding: 24, marginBottom: 24
        }}>
          <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, color: "#FFD700", fontSize: 15, marginBottom: 16 }}>
            เธญเธฑเธเนเธซเธฅเธ”เธ เธฒเธเนเธซเธกเน โ’ {selected && selected.name}
          </div>
          {/* Drag drop zone */}
          <div
            onDragOver={e => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={e => { e.preventDefault(); setDragOver(false); }}
            style={{
              border: `2px dashed ${dragOver ? "#FFD700" : "rgba(255,255,255,0.15)"}`,
              borderRadius: 14, padding: "28px 20px", textAlign: "center", marginBottom: 20,
              background: dragOver ? "rgba(255,215,0,0.05)" : "rgba(255,255,255,0.02)",
              transition: "all 0.2s", cursor: "pointer"
            }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>๐“ค</div>
            <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>เธฅเธฒเธเธงเธฒเธเธ เธฒเธเธ—เธตเนเธเธตเน เธซเธฃเธทเธญ</div>
            <button style={{
              background: "rgba(255,140,0,0.15)", border: "1px solid rgba(255,140,0,0.3)",
              color: "#FF8C00", padding: "7px 18px", borderRadius: 8,
              fontFamily: "'Kanit', sans-serif", fontSize: 13, cursor: "pointer"
            }}>เน€เธฅเธทเธญเธเนเธเธฅเน</button>
            <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 8 }}>เธฃเธญเธเธฃเธฑเธ JPG, PNG, WEBP โ€” เธเธเธฒเธ”เนเธกเนเน€เธเธดเธ 10MB</div>
          </div>
          <div style={{ marginBottom: 12, fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>เธซเธฃเธทเธญเธงเธฒเธ URL เธ เธฒเธ</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
            <div style={{ gridColumn: "1/-1" }}>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>URL เธ เธฒเธ (optional)</div>
              <input value={uploadForm.url} onChange={e => setUploadForm(p => ({ ...p, url: e.target.value }))}
                placeholder="https://..." style={{
                  width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 9, padding: "10px 14px", color: "#fff",
                  fontFamily: "'Kanit', sans-serif", fontSize: 13, outline: "none", boxSizing: "border-box"
                }} />
            </div>
            <div style={{ gridColumn: "1/-1" }}>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>เธเธณเธเธฃเธฃเธขเธฒเธข *</div>
              <input value={uploadForm.caption} onChange={e => setUploadForm(p => ({ ...p, caption: e.target.value }))}
                placeholder="เน€เธเนเธ เธเนเธญเธเน เธเธณเธฅเธฑเธเธชเธฃเนเธฒเธเธซเธธเนเธเธขเธเธ•เน ๐ค–" style={{
                  width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 9, padding: "10px 14px", color: "#fff",
                  fontFamily: "'Kanit', sans-serif", fontSize: 13, outline: "none", boxSizing: "border-box"
                }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>เธงเธฑเธเธ—เธตเน</div>
              <input type="date" value={uploadForm.date} onChange={e => setUploadForm(p => ({ ...p, date: e.target.value }))} style={{
                width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 9, padding: "10px 14px", color: "#fff",
                fontFamily: "'Kanit', sans-serif", fontSize: 13, outline: "none", boxSizing: "border-box"
              }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>เธเธฃเธฐเน€เธ เธ—</div>
              <select value={uploadForm.tag} onChange={e => setUploadForm(p => ({ ...p, tag: e.target.value }))} style={{
                width: "100%", background: "#1a1f2e", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 9, padding: "10px 14px", color: "#fff",
                fontFamily: "'Kanit', sans-serif", fontSize: 13, outline: "none", boxSizing: "border-box"
              }}>
                {["เธเธดเธเธเธฃเธฃเธก", "เน€เธฃเธดเนเธกเน€เธฃเธตเธขเธ", "เธเธงเธฒเธกเธชเธณเน€เธฃเนเธ", "เธฃเธฒเธเธงเธฑเธฅ"].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div style={{ gridColumn: "1/-1" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <div onClick={() => setUploadForm(p => ({ ...p, milestone: !p.milestone }))} style={{
                  width: 44, height: 24, borderRadius: 12,
                  background: uploadForm.milestone ? "linear-gradient(135deg,#FF8C00,#FFD700)" : "rgba(255,255,255,0.1)",
                  position: "relative", transition: "background 0.2s", cursor: "pointer"
                }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: "50%", background: "#fff",
                    position: "absolute", top: 3,
                    left: uploadForm.milestone ? 23 : 3, transition: "left 0.2s"
                  }} />
                </div>
                <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: uploadForm.milestone ? "#FFD700" : "rgba(255,255,255,0.5)" }}>
                  โญ เธ—เธณเน€เธเธฃเธทเนเธญเธเธซเธกเธฒเธขเน€เธเนเธ Milestone (เธเธธเธ”เธชเธณเธเธฑเธเนเธเธเธฒเธฃเน€เธฃเธตเธขเธ)
                </span>
              </label>
            </div>
          </div>
          <button onClick={handleAddPhoto} disabled={!uploadForm.caption} style={{
            background: uploadForm.caption ? "linear-gradient(135deg,#FF8C00,#FFD700)" : "rgba(255,255,255,0.08)",
            border: "none", color: uploadForm.caption ? "#0a0c14" : "rgba(255,255,255,0.3)",
            padding: "11px 28px", borderRadius: 10, cursor: uploadForm.caption ? "pointer" : "not-allowed",
            fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 14
          }}>โ“ เธเธฑเธเธ—เธถเธเธ เธฒเธ</button>
        </div>
      )}

      {/* Photos grid for selected student */}
      {selected && (
        <div>
          <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
            เธ เธฒเธเธ—เธฑเนเธเธซเธกเธ”เธเธญเธ {selected.name} ({selected.photos.length} เธ เธฒเธ) โ€” เน€เธฃเธตเธขเธเธ•เธฒเธกเธงเธฑเธเธ—เธตเน
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14 }}>
            {selected.photos.map(photo => (
              <div key={photo.id} style={{
                borderRadius: 14, overflow: "hidden", position: "relative", aspectRatio: "4/3",
                border: photo.milestone ? "2px solid rgba(255,215,0,0.35)" : "1px solid rgba(255,255,255,0.07)"
              }}>
                <img src={photo.url} alt={photo.caption} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                {photo.milestone && (
                  <div style={{
                    position: "absolute", top: 8, left: 8,
                    background: "linear-gradient(135deg,#FF8C00,#FFD700)",
                    borderRadius: 6, padding: "2px 8px",
                    fontFamily: "'Kanit', sans-serif", fontSize: 10, fontWeight: 700, color: "#0a0c14"
                  }}>โญ Milestone</div>
                )}
                <div style={{
                  position: "absolute", inset: 0, background: "rgba(0,0,0,0)",
                  transition: "background 0.2s", display: "flex", flexDirection: "column",
                  justifyContent: "space-between", padding: 10
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.65)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0)"}
                >
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: 6, opacity: 0, transition: "opacity 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.parentElement.style.background = "rgba(0,0,0,0.65)"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = 0; e.currentTarget.parentElement.style.background = "rgba(0,0,0,0)"; }}
                  >
                    <button onClick={() => handleToggleMilestone(photo.id)} style={{
                      background: photo.milestone ? "rgba(255,215,0,0.3)" : "rgba(255,255,255,0.15)",
                      border: "none", color: photo.milestone ? "#FFD700" : "#fff",
                      padding: "4px 8px", borderRadius: 6, cursor: "pointer",
                      fontFamily: "'Kanit', sans-serif", fontSize: 11
                    }}>{photo.milestone ? "โญ เธขเธเน€เธฅเธดเธ" : "โ Milestone"}</button>
                    <button onClick={() => setDeleteConfirm(photo.id)} style={{
                      background: "rgba(255,50,50,0.7)", border: "none", color: "#fff",
                      width: 28, height: 28, borderRadius: 6, cursor: "pointer", fontSize: 14
                    }}>๐—‘</button>
                  </div>
                  <div style={{ opacity: 0, transition: "opacity 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.parentElement.style.background = "rgba(0,0,0,0.65)"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = 0; e.currentTarget.parentElement.style.background = "rgba(0,0,0,0)"; }}
                  >
                    <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "#fff", fontWeight: 600, lineHeight: 1.4 }}>{photo.caption}</div>
                    <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>{new Date(photo.date).toLocaleDateString("th-TH")}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add new placeholder */}
            <button onClick={() => setShowUpload(true)} style={{
              borderRadius: 14, aspectRatio: "4/3", border: "2px dashed rgba(255,140,0,0.3)",
              background: "rgba(255,140,0,0.04)", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8
            }}>
              <div style={{ fontSize: 28 }}>+</div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,140,0,0.7)" }}>เน€เธเธดเนเธกเธ เธฒเธ</div>
            </button>
          </div>
        </div>
      )}

      {/* Delete confirm modal */}
      {deleteConfirm && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)",
          zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 24
        }}>
          <div style={{ background: "#1a1f2e", borderRadius: 18, padding: 32, maxWidth: 380, width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>๐—‘๏ธ</div>
            <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>เธขเธทเธเธขเธฑเธเธเธฒเธฃเธฅเธเธ เธฒเธ</div>
            <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>เธ เธฒเธเธเธฐเธ–เธนเธเธฅเธเธ–เธฒเธงเธฃเนเธฅเธฐเนเธกเนเธชเธฒเธกเธฒเธฃเธ–เธเธนเนเธเธทเธเนเธ”เน</div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button onClick={() => handleDelete(deleteConfirm)} style={{
                background: "rgba(255,50,50,0.9)", border: "none", color: "#fff",
                padding: "10px 24px", borderRadius: 10, cursor: "pointer",
                fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 14
              }}>เธฅเธเน€เธฅเธข</button>
              <button onClick={() => setDeleteConfirm(null)} style={{
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                color: "#aaa", padding: "10px 24px", borderRadius: 10, cursor: "pointer",
                fontFamily: "'Kanit', sans-serif", fontSize: 14
              }}>เธขเธเน€เธฅเธดเธ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== MOCK DATA for Admin System ====================
const MOCK_TEACHERS = [
  { id: "t001", name: "เธเธฃเธนเธชเธกเธเธฒเธข เนเธเธ”เธต", phone: "081-234-5678", email: "teacher1@baanbot.com", specialty: "Robotics & Coding", hoursThisMonth: 24, status: "active" },
  { id: "t002", name: "เธเธฃเธนเธเธ เธฒ เธฃเธฑเธเน€เธฃเธตเธขเธ", phone: "089-876-5432", email: "teacher2@baanbot.com", specialty: "Scratch & AI", hoursThisMonth: 18, status: "active" },
  { id: "t003", name: "เธเธฃเธนเธงเธดเธเธฑเธข เธชเธญเธเน€เธเนเธ", phone: "086-111-2222", email: "teacher3@baanbot.com", specialty: "Electronics", hoursThisMonth: 12, status: "active" },
];

const MOCK_BOOKINGS_ADMIN = [
  { id: "b001", studentName: "เธ”.เธ.เธเธงเธดเธ เธชเธธเธเนเธ", parentPhone: "086-123-4567", date: "2026-02-26", slot: "เธฃเธญเธเน€เธเนเธฒ 1", slotTime: "08:30โ€“10:30", type: "regular", status: "confirmed", assignedTeacher: "t001", income: 2000 },
  { id: "b002", studentName: "เธ”.เธ.เธกเธดเธเธ•เธฃเธฒ เธงเธเธจเนเธ—เธญเธ", parentPhone: "081-987-6543", date: "2026-02-26", slot: "เธฃเธญเธเธเนเธฒเธข 1", slotTime: "13:00โ€“15:00", type: "regular", status: "pending", assignedTeacher: null, income: 2000 },
  { id: "b003", studentName: "เธ”.เธ.เธเธฑเธ“เธ“เน เธญเธฑเธเธเธฃเธดเธขเธฐ", parentPhone: "089-555-1234", date: "2026-02-27", slot: "เธฃเธญเธเน€เธเนเธฒ 2", slotTime: "10:30โ€“12:30", type: "regular", status: "confirmed", assignedTeacher: "t002", income: 2000 },
  { id: "b004", studentName: "เธ”.เธ.เนเธเธฃเธ—เธญเธ เธชเธงเธฃเธฃเธเน", parentPhone: "085-444-3333", date: "2026-02-28", slot: "เธฃเธญเธเธเนเธฒเธข 2", slotTime: "15:00โ€“17:00", type: "trial", status: "pending", assignedTeacher: null, income: 0 },
  { id: "b005", studentName: "เธ”.เธ.เธ“เธฑเธ เธเธฑเธ’เธเธฒ", parentPhone: "083-222-1111", date: "2026-03-01", slot: "เธฃเธญเธเน€เธเนเธฒ 1", slotTime: "08:30โ€“10:30", type: "regular", status: "confirmed", assignedTeacher: "t001", income: 2000 },
  { id: "b006", studentName: "เธ”.เธ.เธเธงเธตเธ“เน เธเธฒเธเธเธฅเธฒเธ”", parentPhone: "087-333-4444", date: "2026-03-02", slot: "เธฃเธญเธเน€เธเนเธฒ 1", slotTime: "08:30โ€“09:30", type: "trial", status: "pending", assignedTeacher: null, income: 0 },
];

const MOCK_USERS_ADMIN = [
  { id: "u001", name: "เธเธนเนเธเธเธเธฃเธญเธ เธ", email: "parent1@gmail.com", role: "student", createdAt: "2024-06-01" },
  { id: "u002", name: "เธเธนเนเธเธเธเธฃเธญเธ เธ", email: "parent2@gmail.com", role: "student", createdAt: "2024-08-15" },
  { id: "u003", name: "เธเธฃเธนเธชเธกเธเธฒเธข เนเธเธ”เธต", email: "teacher1@baanbot.com", role: "teacher", createdAt: "2024-01-10" },
  { id: "u004", name: "Admin BaanBot", email: "admin@baanbot.com", role: "admin", createdAt: "2023-12-01" },
];

// โ”€โ”€ Transaction categories โ”€โ”€
const TX_INCOME_CATS  = ["เธเธญเธฃเนเธชเน€เธฃเธตเธขเธเธเธเธ•เธด","เธเธญเธฃเนเธชเธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธ","เธเนเธฒเธญเธธเธเธเธฃเธ“เนเธเธฑเธเน€เธฃเธตเธขเธ","เธเนเธฒเนเธเนเธเธเธฑเธ","เธ—เธธเธเธชเธเธฑเธเธชเธเธธเธ","เธญเธทเนเธเน (เธฃเธฒเธขเธฃเธฑเธ)"];
const TX_EXPENSE_CATS = ["เธเนเธฒเธชเธญเธ","เธเนเธฒเน€เธเนเธฒเธชเธ–เธฒเธเธ—เธตเน","เธเนเธฒเธญเธธเธเธเธฃเธ“เน/เธงเธฑเธชเธ”เธธ","เธเนเธฒเธชเธฒเธเธฒเธฃเธ“เธนเธเนเธ เธ","เธเนเธฒเธเธฒเธฃเธ•เธฅเธฒเธ”","เธเนเธฒเธเนเธญเธกเธเธณเธฃเธธเธ","เธญเธทเนเธเน (เธฃเธฒเธขเธเนเธฒเธข)"];

let MOCK_TRANSACTIONS = [
  { id: "tr001", month: "2026-01", type: "income",  category: "เธเธญเธฃเนเธชเน€เธฃเธตเธขเธเธเธเธ•เธด",   desc: "เธเธญเธฃเนเธชเน€เธฃเธตเธขเธ - เธ”.เธ.เธเธงเธดเธ",           amount: 2000, bookingId: "b001" },
  { id: "tr002", month: "2026-01", type: "income",  category: "เธเธญเธฃเนเธชเน€เธฃเธตเธขเธเธเธเธ•เธด",   desc: "เธเธญเธฃเนเธชเน€เธฃเธตเธขเธ - เธ”.เธ.เธกเธดเธเธ•เธฃเธฒ",         amount: 2000, bookingId: "b003" },
  { id: "tr003", month: "2026-01", type: "expense", category: "เธเนเธฒเธชเธญเธ",            desc: "เธเนเธฒเธชเธญเธ เธเธฃเธนเธชเธกเธเธฒเธข (12 เธเธก.)",         amount: 600,  teacherId: "t001" },
  { id: "tr004", month: "2026-01", type: "expense", category: "เธเนเธฒเธชเธญเธ",            desc: "เธเนเธฒเธชเธญเธ เธเธฃเธนเธเธ เธฒ (8 เธเธก.)",           amount: 400,  teacherId: "t002" },
  { id: "tr010", month: "2026-01", type: "expense", category: "เธเนเธฒเน€เธเนเธฒเธชเธ–เธฒเธเธ—เธตเน",    desc: "เธเนเธฒเน€เธเนเธฒเธฃเธฒเธขเน€เธ”เธทเธญเธ เธก.เธ.",             amount: 3000 },
  { id: "tr011", month: "2026-01", type: "expense", category: "เธเนเธฒเธญเธธเธเธเธฃเธ“เน/เธงเธฑเธชเธ”เธธ", desc: "เธเธทเนเธญ LEGO Spike Prime เธเธธเธ”เนเธซเธกเน",     amount: 4500 },
  { id: "tr005", month: "2026-02", type: "income",  category: "เธเธญเธฃเนเธชเน€เธฃเธตเธขเธเธเธเธ•เธด",   desc: "เธเธญเธฃเนเธชเน€เธฃเธตเธขเธ - เธ”.เธ.เธ“เธฑเธ",            amount: 2000, bookingId: "b005" },
  { id: "tr006", month: "2026-02", type: "income",  category: "เธเธญเธฃเนเธชเน€เธฃเธตเธขเธเธเธเธ•เธด",   desc: "เธเธญเธฃเนเธชเน€เธฃเธตเธขเธ - เธ”.เธ.เธเธฑเธ“เธ“เน",          amount: 2000, bookingId: "b003" },
  { id: "tr012", month: "2026-02", type: "income",  category: "เธเนเธฒเนเธเนเธเธเธฑเธ",        desc: "เธเนเธฒเธชเธกเธฑเธเธฃเนเธเนเธเธเธฑเธเธซเธธเนเธเธขเธเธ•เนเธ เธนเธกเธดเธ เธฒเธ", amount: 1500 },
  { id: "tr007", month: "2026-02", type: "expense", category: "เธเนเธฒเธชเธญเธ",            desc: "เธเนเธฒเธชเธญเธ เธเธฃเธนเธชเธกเธเธฒเธข (10 เธเธก.)",         amount: 500,  teacherId: "t001" },
  { id: "tr008", month: "2026-02", type: "expense", category: "เธเนเธฒเธชเธญเธ",            desc: "เธเนเธฒเธชเธญเธ เธเธฃเธนเธเธ เธฒ (6 เธเธก.)",           amount: 300,  teacherId: "t002" },
  { id: "tr009", month: "2026-02", type: "expense", category: "เธเนเธฒเธชเธญเธ",            desc: "เธเนเธฒเธชเธญเธ เธเธฃเธนเธงเธดเธเธฑเธข (4 เธเธก.)",         amount: 200,  teacherId: "t003" },
  { id: "tr013", month: "2026-02", type: "expense", category: "เธเนเธฒเน€เธเนเธฒเธชเธ–เธฒเธเธ—เธตเน",    desc: "เธเนเธฒเน€เธเนเธฒเธฃเธฒเธขเน€เธ”เธทเธญเธ เธ.เธ.",             amount: 3000 },
  { id: "tr014", month: "2026-02", type: "expense", category: "เธเนเธฒเธชเธฒเธเธฒเธฃเธ“เธนเธเนเธ เธ",   desc: "เธเนเธฒเนเธเธเนเธฒ + เธญเธดเธเน€เธ—เธญเธฃเนเน€เธเนเธ• เธ.เธ.",    amount: 850 },
];

// ==================== HELPER: Role display ====================
const ROLE_LABELS = {
  super_admin: { label: "Super Admin", color: "#FF6B6B", bg: "rgba(255,107,107,0.15)", icon: "๐‘‘" },
  admin:       { label: "Admin",       color: "#FF8C00", bg: "rgba(255,140,0,0.15)",   icon: "โ๏ธ" },
  teacher:     { label: "Teacher",     color: "#4ECDC4", bg: "rgba(78,205,196,0.15)",  icon: "๐“" },
  student:     { label: "Student",     color: "#6BCB77", bg: "rgba(107,203,119,0.15)", icon: "๐“" },
};

// ==================== SUB-PANELS ====================

// โ”€โ”€ 1. Dashboard Panel โ”€โ”€
function DashboardPanel({ isSuperAdmin }) {
  const totalIncome = MOCK_TRANSACTIONS.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const totalExpense = MOCK_TRANSACTIONS.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0);
  const stats = [
    { icon: "๐“…", label: "เธเธฒเธฃเธเธญเธเธงเธฑเธเธเธตเน", val: "3 เธฃเธฒเธขเธเธฒเธฃ", color: "#FF8C00" },
    { icon: "๐‘ฅ", label: "เธชเธกเธฒเธเธดเธเธ—เธฑเนเธเธซเธกเธ”", val: "47 เธเธ", color: "#4ECDC4" },
    { icon: "๐“", label: "เธเธนเนเธชเธญเธเธเธฃเธฐเธเธณ", val: `${MOCK_TEACHERS.length} เธเธ`, color: "#FFD700" },
    { icon: "๐–ผ๏ธ", label: "เธ เธฒเธเนเธเธเธฅเธฑเธ", val: "234 เธ เธฒเธ", color: "#FF4757" },
  ];
  const CS = { fontFamily: "'Kanit', sans-serif" };
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16, marginBottom: 28 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px 24px" }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ ...CS, fontWeight: 800, fontSize: 24, color: s.color }}>{s.val}</div>
            <div style={{ ...CS, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Popular slots */}
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, marginBottom: 20 }}>
        <div style={{ ...CS, fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 16 }}>๐ เธฃเธญเธเธ—เธตเนเธเธดเธขเธกเธ—เธตเนเธชเธธเธ”</div>
        {[["เธฃเธญเธเน€เธเนเธฒ 1 (08:30โ€“10:30)", 90], ["เธฃเธญเธเน€เธขเนเธ (17:00โ€“19:00)", 85], ["เธฃเธญเธเธเนเธฒเธข 2 (15:00โ€“17:00)", 70], ["เธฃเธญเธเน€เธเนเธฒ 2 (10:30โ€“12:30)", 60], ["เธฃเธญเธเธเนเธฒเธข 1 (13:00โ€“15:00)", 45]].map((item, i) => { const label = item[0]; const pct = item[1]; return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
            <div style={{ ...CS, fontSize: 13, color: "rgba(255,255,255,0.6)", width: 200, flexShrink: 0 }}>{label}</div>
            <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg,#FF8C00,#FFD700)", borderRadius: 4, transition: "width 1s" }} />
            </div>
            <div style={{ ...CS, fontSize: 12, color: "#FFD700", width: 40, textAlign: "right" }}>{pct}%</div>
          </div>
        ); })}
      </div>
      {isSuperAdmin && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          {[
            { label: "เธฃเธฒเธขเธฃเธฑเธเธฃเธงเธก", val: `เธฟ${totalIncome.toLocaleString()}`, color: "#6BCB77", icon: "๐’ฐ" },
            { label: "เธเนเธฒเนเธเนเธเนเธฒเธขเธฃเธงเธก", val: `เธฟ${totalExpense.toLocaleString()}`, color: "#FF6B6B", icon: "๐’ธ" },
            { label: "เธเธณเนเธฃเธชเธธเธ—เธเธด", val: `เธฟ${(totalIncome - totalExpense).toLocaleString()}`, color: "#FFD700", icon: "๐“" },
          ].map((s, i) => (
            <div key={i} style={{ background: `${s.color}08`, border: `1px solid ${s.color}30`, borderRadius: 16, padding: "20px 22px", textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ ...CS, fontWeight: 800, fontSize: 22, color: s.color }}>{s.val}</div>
              <div style={{ ...CS, fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// โ”€โ”€ 2. Bookings + Assign Teacher Panel โ”€โ”€
function BookingsPanel({ isSuperAdmin }) {
  const [bookings, setBookings] = useState(MOCK_BOOKINGS_ADMIN);
  const [assignModal, setAssignModal] = useState(null); // booking id
  const [filter, setFilter] = useState("all"); // all | pending | confirmed
  const CS = { fontFamily: "'Kanit', sans-serif" };

  const handleAssign = (bookingId, teacherId) => {
    setBookings(prev => prev.map(b =>
      b.id === bookingId ? { ...b, assignedTeacher: teacherId, status: "confirmed" } : b
    ));
    setAssignModal(null);
  };

  const filtered = bookings.filter(b => filter === "all" || b.status === filter);

  return (
    <div>
      {/* Filter */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {[["all","เธ—เธฑเนเธเธซเธกเธ”"], ["pending","เธฃเธญเธขเธทเธเธขเธฑเธ"], ["confirmed","เธขเธทเธเธขเธฑเธเนเธฅเนเธง"]].map((item) => { const id = item[0]; const label = item[1]; return (
          <button key={id} onClick={() => setFilter(id)} style={{
            background: filter === id ? "linear-gradient(135deg,#FF8C00,#FFD700)" : "rgba(255,255,255,0.05)",
            border: "1px solid " + (filter === id ? "transparent" : "rgba(255,255,255,0.1)"),
            color: filter === id ? "#0a0c14" : "#aaa",
            padding: "8px 18px", borderRadius: 10, cursor: "pointer",
            ...CS, fontWeight: filter === id ? 700 : 400, fontSize: 13
          }}>{label} {filter === id ? "" : `(${bookings.filter(b => id === "all" || b.status === id).length})`}</button>
        ); })}
      </div>

      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden" }}>
        <div style={{ padding: "14px 22px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ ...CS, fontWeight: 700, color: "#fff", fontSize: 15 }}>เธฃเธฒเธขเธเธฒเธฃเธเธญเธเธ—เธฑเนเธเธซเธกเธ” ({filtered.length})</div>
          {isSuperAdmin && <div style={{ ...CS, fontSize: 12, color: "rgba(255,140,0,0.8)" }}>๐‘‘ Super Admin โ€” เธกเธญเธเน€เธซเนเธเธเนเธญเธกเธนเธฅเธ—เธฑเนเธเธซเธกเธ”</div>}
        </div>
        {filtered.map(b => {
          const teacher = MOCK_TEACHERS.find(t => t.id === b.assignedTeacher);
          return (
            <div key={b.id} style={{
              padding: "16px 22px", borderBottom: "1px solid rgba(255,255,255,0.04)",
              display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12
            }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ ...CS, fontWeight: 700, fontSize: 14, color: "#fff" }}>{b.studentName}</span>
                  <span style={{
                    ...CS, fontSize: 10, fontWeight: 700, borderRadius: 100, padding: "2px 8px",
                    background: b.type === "trial" ? "rgba(255,215,0,0.15)" : "rgba(78,205,196,0.15)",
                    color: b.type === "trial" ? "#FFD700" : "#4ECDC4"
                  }}>{b.type === "trial" ? "เธ—เธ”เธฅเธญเธเน€เธฃเธตเธขเธ" : "เน€เธฃเธตเธขเธเธเธเธ•เธด"}</span>
                </div>
                <div style={{ ...CS, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
                  ๐“ {b.parentPhone} โ€ข ๐“… {b.date} โ€ข โฐ {b.slot} ({b.slotTime})
                </div>
                {teacher && (
                  <div style={{ ...CS, fontSize: 12, color: "#4ECDC4", marginTop: 4 }}>
                    ๐“ เธเธนเนเธชเธญเธ: {teacher.name}
                  </div>
                )}
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                {/* Income badge โ€” super_admin only */}
                {isSuperAdmin && b.income > 0 && (
                  <span style={{ ...CS, fontSize: 12, background: "rgba(107,203,119,0.12)", color: "#6BCB77", borderRadius: 100, padding: "4px 12px", fontWeight: 600 }}>
                    เธฟ{b.income.toLocaleString()}
                  </span>
                )}
                <span style={{
                  ...CS, fontSize: 12, borderRadius: 100, padding: "4px 12px", fontWeight: 600,
                  background: b.status === "confirmed" ? "rgba(78,205,196,0.12)" : "rgba(255,215,0,0.12)",
                  color: b.status === "confirmed" ? "#4ECDC4" : "#FFD700"
                }}>{b.status === "confirmed" ? "โ“ เธขเธทเธเธขเธฑเธ" : "เธฃเธญเธขเธทเธเธขเธฑเธ"}</span>

                {/* Assign button โ€” admin & super_admin */}
                {(isSuperAdmin || true) && (
                  <button onClick={() => setAssignModal(b.id)} style={{
                    background: b.assignedTeacher ? "rgba(78,205,196,0.08)" : "rgba(255,140,0,0.12)",
                    border: `1px solid ${b.assignedTeacher ? "rgba(78,205,196,0.25)" : "rgba(255,140,0,0.3)"}`,
                    color: b.assignedTeacher ? "#4ECDC4" : "#FF8C00",
                    padding: "5px 12px", borderRadius: 8,
                    ...CS, fontSize: 12, cursor: "pointer"
                  }}>๐“ {b.assignedTeacher ? "เน€เธเธฅเธตเนเธขเธเธเธนเนเธชเธญเธ" : "Assign เธเธนเนเธชเธญเธ"}</button>
                )}
                <button style={{
                  background: "rgba(255,50,50,0.08)", border: "1px solid rgba(255,50,50,0.2)",
                  color: "#ff6b6b", padding: "5px 12px", borderRadius: 8,
                  ...CS, fontSize: 12, cursor: "pointer"
                }}>เธขเธเน€เธฅเธดเธ</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Assign Modal */}
      {assignModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ background: "#13172a", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: 32, maxWidth: 440, width: "100%" }}>
            <div style={{ ...CS, fontWeight: 800, fontSize: 18, color: "#fff", marginBottom: 6 }}>๐“ เน€เธฅเธทเธญเธเธเธนเนเธชเธญเธ</div>
            <div style={{ ...CS, fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 22 }}>
              {(bookings.find(b => b.id === assignModal) || {}).studentName} โ€” {(bookings.find(b => b.id === assignModal) || {}).slot}
            </div>
            {MOCK_TEACHERS.map(t => (
              <button key={t.id} onClick={() => handleAssign(assignModal, t.id)} style={{
                width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 12, padding: "14px 18px", marginBottom: 10, cursor: "pointer",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                transition: "all 0.15s"
              }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(78,205,196,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
              >
                <div style={{ textAlign: "left" }}>
                  <div style={{ ...CS, fontWeight: 700, fontSize: 14, color: "#fff" }}>{t.name}</div>
                  <div style={{ ...CS, fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{t.specialty} โ€ข {t.phone}</div>
                </div>
                <div style={{ ...CS, fontSize: 12, color: "#4ECDC4", background: "rgba(78,205,196,0.1)", borderRadius: 8, padding: "4px 10px" }}>
                  {t.hoursThisMonth} เธเธก./เน€เธ”เธทเธญเธ
                </div>
              </button>
            ))}
            <button onClick={() => setAssignModal(null)} style={{
              width: "100%", background: "transparent", border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.4)", padding: "10px", borderRadius: 10, cursor: "pointer",
              ...CS, fontSize: 14, marginTop: 4
            }}>เธขเธเน€เธฅเธดเธ</button>
          </div>
        </div>
      )}
    </div>
  );
}

// โ”€โ”€ 3. Teacher Management Panel โ”€โ”€
function TeachersPanel({ isSuperAdmin }) {
  const [teachers, setTeachers] = useState(MOCK_TEACHERS);
  const [showAdd, setShowAdd] = useState(false);
  const [newTeacher, setNewTeacher] = useState({ name: "", phone: "", email: "", specialty: "" });
  const CS = { fontFamily: "'Kanit', sans-serif" };
  const HOURLY_RATE = 50;

  const handleAdd = () => {
    if (!newTeacher.name) return;
    setTeachers(prev => [...prev, { ...newTeacher, id: `t${Date.now()}`, hoursThisMonth: 0, status: "active" }]);
    setNewTeacher({ name: "", phone: "", email: "", specialty: "" });
    setShowAdd(false);
  };

  const iS = { width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 9, padding: "10px 14px", color: "#fff", ...CS, fontSize: 13, outline: "none", boxSizing: "border-box" };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ ...CS, fontWeight: 700, color: "#fff", fontSize: 16 }}>๐“ เธเธนเนเธชเธญเธเธ—เธฑเนเธเธซเธกเธ” ({teachers.length} เธเธ)</div>
        {isSuperAdmin && (
          <button onClick={() => setShowAdd(v => !v)} style={{
            background: showAdd ? "rgba(255,50,50,0.1)" : "linear-gradient(135deg,#FF8C00,#FFD700)",
            border: showAdd ? "1px solid rgba(255,50,50,0.3)" : "none",
            color: showAdd ? "#ff6b6b" : "#0a0c14",
            padding: "9px 20px", borderRadius: 10, cursor: "pointer",
            ...CS, fontWeight: 700, fontSize: 13
          }}>{showAdd ? "โ• เธขเธเน€เธฅเธดเธ" : "+ เน€เธเธดเนเธกเธเธนเนเธชเธญเธ"}</button>
        )}
      </div>

      {/* Add teacher form */}
      {showAdd && isSuperAdmin && (
        <div style={{ background: "rgba(255,140,0,0.05)", border: "1px solid rgba(255,140,0,0.2)", borderRadius: 16, padding: 22, marginBottom: 20 }}>
          <div style={{ ...CS, fontWeight: 700, color: "#FFD700", fontSize: 14, marginBottom: 16 }}>โ• เน€เธเธดเนเธกเธเธนเนเธชเธญเธเนเธซเธกเน</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
            {[["name","เธเธทเนเธญ-เธเธฒเธกเธชเธเธธเธฅ *","เธเธทเนเธญเธเธนเนเธชเธญเธ"],["phone","เน€เธเธญเธฃเนเนเธ—เธฃ","08x-xxx-xxxx"],["email","เธญเธตเน€เธกเธฅ","teacher@baanbot.com"],["specialty","เธงเธดเธเธฒเธ—เธตเนเธชเธญเธ","เน€เธเนเธ Robotics, Scratch"]].map((fld) => { const k = fld[0]; const l = fld[1]; const p = fld[2]; return (
              <div key={k}>
                <div style={{ ...CS, fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>{l}</div>
                <input value={newTeacher[k]} onChange={e => setNewTeacher(p2 => ({ ...p2, [k]: e.target.value }))}
                  placeholder={p} style={iS} />
              </div>
            ); })}
          </div>
          <button onClick={handleAdd} disabled={!newTeacher.name} style={{
            background: newTeacher.name ? "linear-gradient(135deg,#FF8C00,#FFD700)" : "rgba(255,255,255,0.08)",
            border: "none", color: newTeacher.name ? "#0a0c14" : "rgba(255,255,255,0.2)",
            padding: "10px 24px", borderRadius: 10, cursor: newTeacher.name ? "pointer" : "not-allowed",
            ...CS, fontWeight: 700, fontSize: 13
          }}>เธเธฑเธเธ—เธถเธ</button>
        </div>
      )}

      {/* Teacher cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 14 }}>
        {teachers.map(t => {
          const totalPay = t.hoursThisMonth * HOURLY_RATE;
          return (
            <div key={t.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: "50%",
                  background: "linear-gradient(135deg,#4ECDC4,#44B8B8)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, fontWeight: 800, color: "#0a0c14", flexShrink: 0
                }}>{t.name.charAt(2)}</div>
                <div>
                  <div style={{ ...CS, fontWeight: 800, fontSize: 15, color: "#fff" }}>{t.name}</div>
                  <div style={{ ...CS, fontSize: 12, color: "#4ECDC4", marginTop: 2 }}>{t.specialty}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
                <div style={{ ...CS, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>๐“ {t.phone}</div>
                <div style={{ ...CS, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>โ๏ธ {t.email}</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: "rgba(255,255,255,0.04)", borderRadius: 10 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ ...CS, fontWeight: 800, fontSize: 18, color: "#FFD700" }}>{t.hoursThisMonth}</div>
                  <div style={{ ...CS, fontSize: 11, color: "rgba(255,255,255,0.35)" }}>เธเธก./เน€เธ”เธทเธญเธ</div>
                </div>
                <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
                <div style={{ textAlign: "center" }}>
                  <div style={{ ...CS, fontWeight: 800, fontSize: 18, color: isSuperAdmin ? "#6BCB77" : "rgba(255,255,255,0.2)" }}>
                    {isSuperAdmin ? `เธฟ${totalPay.toLocaleString()}` : "****"}
                  </div>
                  <div style={{ ...CS, fontSize: 11, color: "rgba(255,255,255,0.35)" }}>เธเนเธฒเธชเธญเธเน€เธ”เธทเธญเธเธเธตเน</div>
                </div>
                <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6BCB77", margin: "5px auto 4px", boxShadow: "0 0 8px #6BCB77" }} />
                  <div style={{ ...CS, fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Active</div>
                </div>
              </div>
              {isSuperAdmin && (
                <div style={{ marginTop: 10, ...CS, fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "right" }}>
                  เธญเธฑเธ•เธฃเธฒ เธฟ{HOURLY_RATE}/เธเธก.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// โ”€โ”€ 4. User Management + Password Reset Panel โ”€โ”€
function UsersPanel() {
  const [users, setUsers] = useState(MOCK_USERS_ADMIN);
  const [search, setSearch] = useState("");
  const [resetModal, setResetModal] = useState(null);
  const [resetDone, setResetDone] = useState(null);
  const CS = { fontFamily: "'Kanit', sans-serif" };

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleReset = (userId) => {
    setResetDone(userId);
    setResetModal(null);
    setTimeout(() => setResetDone(null), 3000);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center" }}>
        <div style={{ flex: 1, position: "relative" }}>
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="๐”  เธเนเธเธซเธฒเธเธทเนเธญเธซเธฃเธทเธญเธญเธตเน€เธกเธฅเธเธนเนเนเธเน..."
            style={{
              width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 10, padding: "11px 16px", color: "#fff",
              ...CS, fontSize: 14, outline: "none", boxSizing: "border-box"
            }} />
        </div>
      </div>

      {resetDone && (
        <div style={{ background: "rgba(78,205,196,0.1)", border: "1px solid rgba(78,205,196,0.3)", borderRadius: 10, padding: "12px 16px", marginBottom: 16, ...CS, fontSize: 14, color: "#4ECDC4" }}>
          โ… เธฃเธตเน€เธเนเธ•เธฃเธซเธฑเธชเธเนเธฒเธเธชเธณเน€เธฃเนเธ โ€” เธฃเธฐเธเธเธเธฐเธชเนเธเธฅเธดเธเธเนเนเธเธขเธฑเธเธญเธตเน€เธกเธฅเธเธนเนเนเธเน
        </div>
      )}

      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden" }}>
        <div style={{ padding: "14px 22px", borderBottom: "1px solid rgba(255,255,255,0.06)", ...CS, fontWeight: 700, color: "#fff", fontSize: 15 }}>
          เธเธนเนเนเธเนเธ—เธฑเนเธเธซเธกเธ” ({filtered.length} เธเธ)
        </div>
        {filtered.map(u => {
          const role = ROLE_LABELS[u.role] || ROLE_LABELS.student;
          return (
            <div key={u.id} style={{
              padding: "14px 22px", borderBottom: "1px solid rgba(255,255,255,0.04)",
              display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                  background: role.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16
                }}>{role.icon}</div>
                <div>
                  <div style={{ ...CS, fontWeight: 700, fontSize: 14, color: "#fff" }}>{u.name}</div>
                  <div style={{ ...CS, fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{u.email} โ€ข เธชเธกเธฑเธเธฃ {u.createdAt}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ background: role.bg, color: role.color, borderRadius: 100, padding: "4px 12px", fontSize: 12, ...CS, fontWeight: 600 }}>
                  {role.label}
                </span>
                <button onClick={() => setResetModal(u)} style={{
                  background: "rgba(255,140,0,0.1)", border: "1px solid rgba(255,140,0,0.25)",
                  color: "#FF8C00", padding: "5px 12px", borderRadius: 8,
                  ...CS, fontSize: 12, cursor: "pointer"
                }}>๐”‘ Reset Password</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset confirm modal */}
      {resetModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ background: "#13172a", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: 32, maxWidth: 400, width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: 42, marginBottom: 14 }}>๐”‘</div>
            <div style={{ ...CS, fontWeight: 800, fontSize: 18, color: "#fff", marginBottom: 8 }}>เธขเธทเธเธขเธฑเธเธเธฒเธฃ Reset Password</div>
            <div style={{ ...CS, fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 6 }}>{resetModal.name}</div>
            <div style={{ ...CS, fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 24 }}>{resetModal.email}</div>
            <div style={{ background: "rgba(255,140,0,0.07)", border: "1px solid rgba(255,140,0,0.2)", borderRadius: 10, padding: "10px 14px", marginBottom: 24, ...CS, fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
              โ ๏ธ เธฃเธฐเธเธเธเธฐเธชเนเธเธฅเธดเธเธเนเธ•เธฑเนเธเธฃเธซเธฑเธชเธเนเธฒเธเนเธซเธกเนเนเธเธขเธฑเธเธญเธตเน€เธกเธฅเธเธญเธเธเธนเนเนเธเน<br />
              (เนเธเธฃเธฐเธเธเธเธฃเธดเธเธเธฐเนเธเน Supabase Admin API เธเนเธฒเธ Server Action)
            </div>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button onClick={() => handleReset(resetModal.id)} style={{
                background: "linear-gradient(135deg,#FF8C00,#FFD700)", border: "none",
                color: "#0a0c14", padding: "11px 28px", borderRadius: 10,
                ...CS, fontWeight: 700, fontSize: 14, cursor: "pointer"
              }}>เธขเธทเธเธขเธฑเธ Reset</button>
              <button onClick={() => setResetModal(null)} style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                color: "#aaa", padding: "11px 24px", borderRadius: 10,
                ...CS, fontSize: 14, cursor: "pointer"
              }}>เธขเธเน€เธฅเธดเธ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// โ”€โ”€ 5. Financial Dashboard (Super Admin ONLY) โ”€โ”€
// โ”€โ”€ Theme Switcher Panel (Super Admin only) โ”€โ”€
function ThemeSwitcherPanel({ themeId, setThemeId, T, CS }) {
  return (
    <div>
      {/* Security badge */}
      <div style={{ background: `${T.primary}10`, border: `1px solid ${T.primary}30`, borderRadius: 14, padding: "12px 18px", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ fontSize: 18 }}>๐จ๐‘‘</div>
        <div style={{ ...CS, fontSize: 13, color: T.primary }}>
          <strong>Theme Switcher</strong> โ€” เน€เธฅเธทเธญเธเธเธตเธกเธชเธณเธซเธฃเธฑเธเน€เธงเนเธเนเธเธ•เน BaanBot Chanthaburi เธ—เธฑเนเธเธซเธกเธ” (เน€เธเธเธฒเธฐ Super Admin)
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 20 }}>
        {Object.values(THEMES).map(th => {
          const isActive = themeId === th.id;
          return (
            <div key={th.id} onClick={() => setThemeId(th.id)} style={{
              background: th.bg, border: `2px solid ${isActive ? th.primary : th.surfaceBorder}`,
              borderRadius: 20, padding: 24, cursor: "pointer",
              boxShadow: isActive ? `0 0 24px ${th.primary}40` : "none",
              transition: "all 0.3s", position: "relative", overflow: "hidden"
            }}>
              {isActive && (
                <div style={{ position: "absolute", top: 12, right: 12, background: th.primary, color: th.primaryDark, fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 20, fontFamily: th.fontBody }}>
                  โ“ เนเธเนเธเธฒเธเธญเธขเธนเน
                </div>
              )}
              {/* Preview header */}
              <div style={{ background: th.navBg, borderRadius: 10, padding: "10px 14px", marginBottom: 16, display: "flex", gap: 6, alignItems: "center" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
                <div style={{ flex: 1, height: 6, borderRadius: 3, background: `${th.surfaceBorder}`, marginLeft: 8 }} />
              </div>
              {/* Color swatches */}
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {[th.bg, th.primary, th.accent, th.success, th.warning].map((c, i) => (
                  <div key={i} style={{ width: 28, height: 28, borderRadius: 8, background: c, border: `1px solid ${th.surfaceBorder}`, flexShrink: 0 }} />
                ))}
              </div>
              {/* Label + font sample */}
              <div style={{ fontFamily: th.font, fontWeight: 800, fontSize: 18, color: th.text, marginBottom: 6 }}>{th.label}</div>
              <div style={{ fontFamily: th.fontBody, fontSize: 12, color: th.textMuted, marginBottom: 16, lineHeight: 1.6 }}>
                {th.id === "cyber" && "Futuristic Cyber-Industrialism โ€” เน€เธเนเธเธเธงเธฒเธกเนเธกเนเธเธขเธณเน€เธเธดเธเน€เธ—เธเนเธเนเธฅเธขเธต Glassmorphism + Neon"}
                {th.id === "nature" && "Nature-Distilled Minimalism โ€” เน€เธเธทเนเธญเธกเนเธขเธเธเธฃเธฃเธกเธเธฒเธ•เธดเธเธฑเธเธเธงเธฑเธ•เธเธฃเธฃเธก Earth tones + Clean layout"}
                {th.id === "constructivist" && "Joyful Constructivist โ€” เธเธฒเธฃเน€เธฃเธตเธขเธเธฃเธนเนเธเนเธฒเธเธเธฒเธฃเน€เธฅเนเธ LEGO-inspired + Dopamine colors"}
              </div>
              {/* Font preview */}
              <div style={{ background: th.surface, border: `1px solid ${th.surfaceBorder}`, borderRadius: 10, padding: "10px 14px" }}>
                <div style={{ fontFamily: th.font, fontSize: 13, color: th.primary, fontWeight: 700, marginBottom: 4 }}>Aa โ€” {th.font.split(",")[0].replace(/'/g,"")}</div>
                <div style={{ fontFamily: th.fontBody, fontSize: 12, color: th.textMuted }}>Body: {th.fontBody.split(",")[0].replace(/'/g,"")}</div>
              </div>
              {/* Select button */}
              <button onClick={(e) => { e.stopPropagation(); setThemeId(th.id); }} style={{
                background: isActive ? th.primary : th.surface,
                border: `1px solid ${isActive ? th.primary : th.surfaceBorder}`,
                color: isActive ? th.primaryDark : th.text,
                width: "100%", padding: "10px", borderRadius: 12, marginTop: 16,
                fontFamily: th.fontBody, fontWeight: 700, fontSize: 13, cursor: "pointer",
                transition: "all 0.2s"
              }}>
                {isActive ? "โ“ เธเธตเธกเธเธฑเธเธเธธเธเธฑเธ" : "เน€เธฅเธทเธญเธเธเธตเธกเธเธตเน"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FinancialDashboard({ theme }) {
  const T = theme || THEMES.cyber;
  const CS = { fontFamily: T.fontBody };
  const [viewMode, setViewMode] = useState("month");
  const [selectedMonth, setSelectedMonth] = useState("2026-02");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [exportMsg, setExportMsg] = useState("");

  // โ”€โ”€ Manual entry state โ”€โ”€
  const [showAddForm, setShowAddForm] = useState(false);
  const [txList, setTxList] = useState(MOCK_TRANSACTIONS);
  const [newTx, setNewTx] = useState({ type: "income", category: TX_INCOME_CATS[0], desc: "", amount: "", month: "2026-02" });
  const [deleteId, setDeleteId] = useState(null);

  // โ”€โ”€ helpers โ”€โ”€
  const thMonth = (m) => {
    const parts = m.split("-"); const y = parts[0]; const mo = parts[1];
    const names = ["","เธก.เธ.","เธ.เธ.","เธกเธต.เธ.","เน€เธก.เธข.","เธ.เธ.","เธกเธด.เธข.","เธ.เธ.","เธช.เธ.","เธ.เธข.","เธ•.เธ.","เธ.เธข.","เธ.เธ."];
    return `${names[parseInt(mo)]} ${parseInt(y) + 543}`;
  };
  const thFullMonth = (m) => {
    const parts = m.split("-"); const y = parts[0]; const mo = parts[1];
    const names = ["","เธกเธเธฃเธฒเธเธก","เธเธธเธกเธ เธฒเธเธฑเธเธเน","เธกเธตเธเธฒเธเธก","เน€เธกเธฉเธฒเธขเธ","เธเธคเธฉเธ เธฒเธเธก","เธกเธดเธ–เธธเธเธฒเธขเธ","เธเธฃเธเธเธฒเธเธก","เธชเธดเธเธซเธฒเธเธก","เธเธฑเธเธขเธฒเธขเธ","เธ•เธธเธฅเธฒเธเธก","เธเธคเธจเธเธดเธเธฒเธขเธ","เธเธฑเธเธงเธฒเธเธก"];
    return `${names[parseInt(mo)]} ${parseInt(y) + 543}`;
  };
  const thYear = (y) => `เธเธต ${parseInt(y) + 543} (${y})`;

  // โ”€โ”€ Add transaction โ”€โ”€
  const handleAddTx = () => {
    if (!newTx.desc.trim() || !newTx.amount || parseFloat(newTx.amount) <= 0) return;
    const id = "tx" + Date.now();
    const entry = { id, month: newTx.month, type: newTx.type, category: newTx.category, desc: newTx.desc.trim(), amount: parseFloat(newTx.amount) };
    MOCK_TRANSACTIONS.push(entry);
    setTxList([...MOCK_TRANSACTIONS]);
    setNewTx({ type: "income", category: TX_INCOME_CATS[0], desc: "", amount: "", month: selectedMonth });
    setShowAddForm(false);
    setExportMsg("โ… เธเธฑเธเธ—เธถเธเธฃเธฒเธขเธเธฒเธฃเธชเธณเน€เธฃเนเธ");
    setTimeout(() => setExportMsg(""), 3000);
  };
  const handleDeleteTx = (id) => {
    const idx = MOCK_TRANSACTIONS.findIndex(t => t.id === id);
    if (idx >= 0) MOCK_TRANSACTIONS.splice(idx, 1);
    setTxList([...MOCK_TRANSACTIONS]);
    setDeleteId(null);
  };

  // โ”€โ”€ Data derivation โ”€โ”€
  const allMonths = [...new Set(txList.map(t => t.month))].sort().reverse();
  const allYears  = [...new Set(allMonths.map(m => m.split("-")[0]))].sort().reverse();
  const isMonth   = viewMode === "month";

  const filtered  = isMonth ? txList.filter(t => t.month === selectedMonth) : txList.filter(t => t.month.startsWith(selectedYear));
  const income    = filtered.filter(t => t.type === "income").reduce((s,t) => s+t.amount, 0);
  const expense   = filtered.filter(t => t.type === "expense").reduce((s,t) => s+t.amount, 0);
  const profit    = income - expense;
  const margin    = income > 0 ? Math.round((profit/income)*100) : 0;
  const periodLabel = isMonth ? thMonth(selectedMonth) : thYear(selectedYear);

  // โ”€โ”€ Category breakdown โ”€โ”€
  const incomeCats = TX_INCOME_CATS.map(cat => ({
    cat, amount: filtered.filter(t => t.type === "income" && t.category === cat).reduce((s,t)=>s+t.amount,0)
  })).filter(c => c.amount > 0);
  const expenseCats = TX_EXPENSE_CATS.map(cat => ({
    cat, amount: filtered.filter(t => t.type === "expense" && t.category === cat).reduce((s,t)=>s+t.amount,0)
  })).filter(c => c.amount > 0);

  // Teacher summary
  const teacherList = MOCK_TEACHERS.map(t => {
    const pay = txList.filter(tx => tx.teacherId === t.id && (isMonth ? tx.month === selectedMonth : tx.month.startsWith(selectedYear))).reduce((s,tx)=>s+tx.amount,0);
    return { ...t, pay, hours: pay/50 };
  }).filter(t => t.pay > 0);

  // Year monthly chart
  const yearMonthly = allMonths.filter(m => m.startsWith(selectedYear)).sort().map(m => {
    const inc = txList.filter(t => t.month === m && t.type === "income").reduce((s,t)=>s+t.amount,0);
    const exp = txList.filter(t => t.month === m && t.type === "expense").reduce((s,t)=>s+t.amount,0);
    return { month: m, income: inc, expense: exp, profit: inc - exp };
  });
  const allMonthSummary = [...new Set(txList.map(t => t.month))].sort().map(m => {
    const inc = txList.filter(t => t.month === m && t.type === "income").reduce((s,t)=>s+t.amount,0);
    const exp = txList.filter(t => t.month === m && t.type === "expense").reduce((s,t)=>s+t.amount,0);
    return { month: m, income: inc, expense: exp, profit: inc - exp };
  });
  const chartData = isMonth ? allMonthSummary : yearMonthly;
  const maxVal = Math.max(...chartData.map(m => m.income), 1);

  const showExportMsg = (msg) => { setExportMsg(msg); setTimeout(() => setExportMsg(""), 3000); };

  const exportCSV = () => {
    const rows = [
      ["เน€เธ”เธทเธญเธ","เธซเธกเธงเธ”เธซเธกเธนเน","เธฃเธฒเธขเธเธฒเธฃ","เธเธฃเธฐเน€เธ เธ—","เธเธณเธเธงเธเน€เธเธดเธ (เธฟ)"],
      ...filtered.map(tx => [tx.month, tx.category || "-", tx.desc, tx.type === "income" ? "เธฃเธฒเธขเธฃเธฑเธ" : "เธฃเธฒเธขเธเนเธฒเธข", tx.amount]),
      [],
      ["","","","เธฃเธฒเธขเธฃเธฑเธเธฃเธงเธก", income],
      ["","","","เธฃเธฒเธขเธเนเธฒเธขเธฃเธงเธก", expense],
      ["","","","เธเธณเนเธฃเธชเธธเธ—เธเธด", profit],
      ["","","","Margin (%)", margin + "%"],
      [],
      ["=== เธชเธฃเธธเธเธฃเธฒเธขเธฃเธฑเธเนเธขเธเธซเธกเธงเธ” ==="],
      ...incomeCats.map(c => ["",c.cat,"","",c.amount]),
      ["=== เธชเธฃเธธเธเธฃเธฒเธขเธเนเธฒเธขเนเธขเธเธซเธกเธงเธ” ==="],
      ...expenseCats.map(c => ["",c.cat,"","",c.amount]),
    ];
    const csv = rows.map(r => r.map(c => `"${c}"`).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = `BaanBot_Financial_${isMonth ? selectedMonth : selectedYear}.csv`;
    a.click();
    showExportMsg("โ… เธ”เธฒเธงเธเนเนเธซเธฅเธ” CSV (Excel) เธชเธณเน€เธฃเนเธ");
  };

  const exportPDF = () => {
    const catBarIncome = incomeCats.map(c => `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee"><span>${c.cat}</span><strong style="color:#16a34a">เธฟ${c.amount.toLocaleString()}</strong></div>`).join("") || "<div style='color:#999'>เนเธกเนเธกเธตเธเนเธญเธกเธนเธฅ</div>";
    const catBarExpense = expenseCats.map(c => `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee"><span>${c.cat}</span><strong style="color:#dc2626">เธฟ${c.amount.toLocaleString()}</strong></div>`).join("") || "<div style='color:#999'>เนเธกเนเธกเธตเธเนเธญเธกเธนเธฅ</div>";
    const txRows = filtered.map(tx => `<tr><td>${tx.month}</td><td>${tx.category || "-"}</td><td>${tx.desc}</td><td style="color:${tx.type==="income"?"#16a34a":"#dc2626"}">${tx.type==="income"?"เธฃเธฒเธขเธฃเธฑเธ":"เธฃเธฒเธขเธเนเธฒเธข"}</td><td style="font-weight:700;color:${tx.type==="income"?"#16a34a":"#dc2626"}">${tx.type==="income"?"+":"-"}เธฟ${tx.amount.toLocaleString()}</td></tr>`).join("");
    const teacherRows = teacherList.map(t => `<tr><td>${t.name}</td><td>${t.specialty}</td><td>${t.hours} เธเธก.</td><td style="color:#dc2626;font-weight:700">เธฟ${t.pay.toLocaleString()}</td></tr>`).join("") || `<tr><td colspan="4" style="color:#999;text-align:center">เนเธกเนเธกเธตเธเนเธญเธกเธนเธฅ</td></tr>`;
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"/>
      <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;700;800&display=swap" rel="stylesheet"/>
      <style>body{font-family:'Sarabun',sans-serif;background:#fff;color:#111;padding:32px;} h1{color:#FF8C00;font-size:22px;border-bottom:3px solid #FF8C00;padding-bottom:8px;} h2{color:#333;font-size:15px;margin-top:24px;} .kpi{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:20px 0;} .kpi-card{border:1px solid #ddd;border-radius:10px;padding:14px;text-align:center;} .kpi-val{font-size:20px;font-weight:800;} .income{color:#16a34a;} .expense{color:#dc2626;} .profit{color:#d97706;} table{width:100%;border-collapse:collapse;margin-top:12px;font-size:13px;} th{background:#1F2937;color:#fff;padding:8px 12px;text-align:left;} td{padding:7px 12px;border-bottom:1px solid #eee;} tr:nth-child(even) td{background:#f9fafb;} .total-row td{font-weight:800;background:#fff7ed;} .two-col{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:12px;} .cat-box{border:1px solid #ddd;border-radius:10px;padding:14px;} .footer{margin-top:32px;font-size:11px;color:#999;border-top:1px solid #eee;padding-top:8px;} @media print{body{padding:16px;}}</style>
      <title>BaanBot Financial Report โ€” ${periodLabel}</title></head><body>
      <h1>๐ค– BaanBot Chanthaburi โ€” เธฃเธฒเธขเธเธฒเธเธเธฒเธฃเน€เธเธดเธ</h1>
      <p style="color:#555;margin:0">เธเนเธงเธเน€เธงเธฅเธฒ: <strong>${periodLabel}</strong> &nbsp;|&nbsp; เธชเธฃเนเธฒเธเน€เธกเธทเนเธญ: ${new Date().toLocaleString("th-TH")}</p>
      <div class="kpi">
        <div class="kpi-card"><div class="kpi-val income">เธฟ${income.toLocaleString()}</div><div>๐’ฐ เธฃเธฒเธขเธฃเธฑเธ</div></div>
        <div class="kpi-card"><div class="kpi-val expense">เธฟ${expense.toLocaleString()}</div><div>๐’ธ เธฃเธฒเธขเธเนเธฒเธข</div></div>
        <div class="kpi-card"><div class="kpi-val profit">เธฟ${profit.toLocaleString()}</div><div>๐“ เธเธณเนเธฃเธชเธธเธ—เธเธด</div></div>
        <div class="kpi-card"><div class="kpi-val" style="color:#0891b2">${margin}%</div><div>๐“ Margin</div></div>
      </div>
      <h2>๐“ เธชเธฃเธธเธเนเธขเธเธซเธกเธงเธ”เธซเธกเธนเน</h2>
      <div class="two-col">
        <div class="cat-box"><div style="font-weight:700;color:#16a34a;margin-bottom:8px">๐’ฐ เธฃเธฒเธขเธฃเธฑเธเนเธขเธเธเธฃเธฐเน€เธ เธ—</div>${catBarIncome}</div>
        <div class="cat-box"><div style="font-weight:700;color:#dc2626;margin-bottom:8px">๐’ธ เธฃเธฒเธขเธเนเธฒเธขเนเธขเธเธเธฃเธฐเน€เธ เธ—</div>${catBarExpense}</div>
      </div>
      <h2>๐’ณ เธเนเธฒเธชเธญเธเนเธขเธเธ•เธฒเธกเธเธนเนเธชเธญเธ</h2>
      <table><thead><tr><th>เธเธทเนเธญเธเธนเนเธชเธญเธ</th><th>เธงเธดเธเธฒ</th><th>เธเธฑเนเธงเนเธกเธ</th><th>เธเนเธฒเธเนเธฒเธ</th></tr></thead>
      <tbody>${teacherRows}<tr class="total-row"><td colspan="3">เธฃเธงเธกเธเนเธฒเธชเธญเธ</td><td style="color:#dc2626">เธฟ${teacherList.reduce((s,t)=>s+t.pay,0).toLocaleString()}</td></tr></tbody></table>
      <h2>๐“ เธฃเธฒเธขเธเธฒเธฃเธ—เธฑเนเธเธซเธกเธ”</h2>
      <table><thead><tr><th>เน€เธ”เธทเธญเธ</th><th>เธซเธกเธงเธ”เธซเธกเธนเน</th><th>เธฃเธฒเธขเธเธฒเธฃ</th><th>เธเธฃเธฐเน€เธ เธ—</th><th>เธเธณเธเธงเธเน€เธเธดเธ</th></tr></thead>
      <tbody>${txRows}
        <tr class="total-row"><td colspan="4">เธฃเธฒเธขเธฃเธฑเธเธฃเธงเธก</td><td style="color:#16a34a">+เธฟ${income.toLocaleString()}</td></tr>
        <tr class="total-row"><td colspan="4">เธฃเธฒเธขเธเนเธฒเธขเธฃเธงเธก</td><td style="color:#dc2626">-เธฟ${expense.toLocaleString()}</td></tr>
        <tr class="total-row"><td colspan="4">เธเธณเนเธฃเธชเธธเธ—เธเธด</td><td style="color:#d97706">เธฟ${profit.toLocaleString()}</td></tr>
      </tbody></table>
      <div class="footer">๐‘‘ เน€เธญเธเธชเธฒเธฃเธเธตเนเน€เธเนเธเธเธงเธฒเธกเธฅเธฑเธ โ€” เน€เธเธเธฒเธฐ Super Admin เน€เธ—เนเธฒเธเธฑเนเธ | BaanBot Chanthaburi</div>
    </body></html>`;
    const win = window.open("", "_blank"); win.document.write(html); win.document.close();
    setTimeout(() => win.print(), 600);
    showExportMsg("โ… เน€เธเธดเธ”เธซเธเนเธฒ Print PDF เนเธฅเนเธง โ€” เธเธ” Ctrl+P เน€เธเธทเนเธญเธเธฑเธเธ—เธถเธ");
  };

  // โ”€โ”€ Input style helper โ”€โ”€
  const inputStyle = { background: T.surface, border: `1px solid ${T.surfaceBorder}`, color: T.text, borderRadius: 10, padding: "9px 14px", ...CS, fontSize: 13, outline: "none", width: "100%", boxSizing: "border-box" };

  return (
    <div>
      {/* Security badge */}
      <div style={{ background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.25)", borderRadius: 14, padding: "12px 18px", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ fontSize: 18 }}>๐‘‘๐”’</div>
        <div style={{ ...CS, fontSize: 13, color: "rgba(255,107,107,0.9)" }}>
          เธซเธเนเธฒเธเธตเนเธกเธญเธเน€เธซเนเธเนเธ”เนเน€เธเธเธฒเธฐ <strong>Super Admin</strong> เน€เธ—เนเธฒเธเธฑเนเธ โ€” เธเนเธญเธกเธนเธฅเธเธฒเธฃเน€เธเธดเธเธ–เธนเธเธเธเธเนเธญเธเธ”เนเธงเธข Row Level Security (RLS)
        </div>
      </div>

      {/* Export success message */}
      {exportMsg !== "" && (
        <div style={{ background: "rgba(107,203,119,0.12)", border: "1px solid rgba(107,203,119,0.35)", borderRadius: 10, padding: "10px 18px", marginBottom: 16, ...CS, fontSize: 13, color: "#6BCB77" }}>{exportMsg}</div>
      )}

      {/* Top bar: Mode toggle + Period selector + Export + Add button */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
        {/* Mode toggle */}
        <div style={{ display: "flex", gap: 0, background: T.surface, borderRadius: 12, padding: 4, border: `1px solid ${T.surfaceBorder}` }}>
          {[["month","๐“… เธฃเธฒเธขเน€เธ”เธทเธญเธ"], ["year","๐“ เธฃเธฒเธขเธเธต"]].map(item => (
            <button key={item[0]} onClick={() => setViewMode(item[0])} style={{
              background: viewMode === item[0] ? "linear-gradient(135deg,#FF8C00,#FFD700)" : "transparent",
              border: "none", color: viewMode === item[0] ? "#0a0c14" : T.textMuted,
              padding: "7px 18px", borderRadius: 9, cursor: "pointer",
              ...CS, fontWeight: viewMode === item[0] ? 700 : 400, fontSize: 13, transition: "all 0.2s"
            }}>{item[1]}</button>
          ))}
        </div>

        {/* Period pills */}
        {isMonth ? allMonths.map(m => (
          <button key={m} onClick={() => setSelectedMonth(m)} style={{
            background: selectedMonth === m ? "linear-gradient(135deg,#FF8C00,#FFD700)" : T.surface,
            border: `1px solid ${selectedMonth === m ? "transparent" : T.surfaceBorder}`,
            color: selectedMonth === m ? "#0a0c14" : T.textMuted,
            padding: "7px 14px", borderRadius: 10, cursor: "pointer",
            ...CS, fontWeight: selectedMonth === m ? 700 : 400, fontSize: 13
          }}>{thMonth(m)}</button>
        )) : allYears.map(y => (
          <button key={y} onClick={() => setSelectedYear(y)} style={{
            background: selectedYear === y ? "linear-gradient(135deg,#FF8C00,#FFD700)" : T.surface,
            border: `1px solid ${selectedYear === y ? "transparent" : T.surfaceBorder}`,
            color: selectedYear === y ? "#0a0c14" : T.textMuted,
            padding: "7px 18px", borderRadius: 10, cursor: "pointer",
            ...CS, fontWeight: selectedYear === y ? 700 : 400, fontSize: 13
          }}>{thYear(y)}</button>
        ))}

        {/* Right-side buttons */}
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button onClick={() => { setShowAddForm(!showAddForm); setNewTx({ type: "income", category: TX_INCOME_CATS[0], desc: "", amount: "", month: isMonth ? selectedMonth : selectedYear + "-01" }); }} style={{
            background: showAddForm ? "rgba(255,107,107,0.15)" : "rgba(107,203,119,0.12)",
            border: `1px solid ${showAddForm ? "rgba(255,107,107,0.3)" : "rgba(107,203,119,0.3)"}`,
            color: showAddForm ? "#FF6B6B" : "#6BCB77", padding: "7px 16px", borderRadius: 10, cursor: "pointer",
            ...CS, fontWeight: 700, fontSize: 13
          }}>{showAddForm ? "โ• เธขเธเน€เธฅเธดเธ" : "+ เธเธฑเธเธ—เธถเธเธฃเธฒเธขเธเธฒเธฃ"}</button>
          <button onClick={exportCSV} style={{ background: "rgba(107,203,119,0.12)", border: "1px solid rgba(107,203,119,0.3)", color: "#6BCB77", padding: "7px 14px", borderRadius: 10, cursor: "pointer", ...CS, fontWeight: 700, fontSize: 13 }}>๐“ Excel</button>
          <button onClick={exportPDF} style={{ background: "rgba(255,107,107,0.12)", border: "1px solid rgba(255,107,107,0.3)", color: "#FF6B6B", padding: "7px 14px", borderRadius: 10, cursor: "pointer", ...CS, fontWeight: 700, fontSize: 13 }}>๐“ PDF</button>
        </div>
      </div>

      {/* Add Transaction Form */}
      {showAddForm && (
        <div style={{ background: T.surface, border: `1px solid ${T.surfaceBorder}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ ...CS, fontWeight: 700, fontSize: 15, color: T.text, marginBottom: 18 }}>โ• เธเธฑเธเธ—เธถเธเธฃเธฒเธขเธเธฒเธฃเนเธซเธกเน</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14, marginBottom: 16 }}>
            {/* Type */}
            <div>
              <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 6 }}>เธเธฃเธฐเน€เธ เธ—</div>
              <select value={newTx.type} onChange={e => setNewTx({ ...newTx, type: e.target.value, category: e.target.value === "income" ? TX_INCOME_CATS[0] : TX_EXPENSE_CATS[0] })} style={inputStyle}>
                <option value="income">๐’ฐ เธฃเธฒเธขเธฃเธฑเธ</option>
                <option value="expense">๐’ธ เธฃเธฒเธขเธเนเธฒเธข</option>
              </select>
            </div>
            {/* Category */}
            <div>
              <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 6 }}>เธซเธกเธงเธ”เธซเธกเธนเน</div>
              <select value={newTx.category} onChange={e => setNewTx({ ...newTx, category: e.target.value })} style={inputStyle}>
                {(newTx.type === "income" ? TX_INCOME_CATS : TX_EXPENSE_CATS).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            {/* Month */}
            <div>
              <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 6 }}>เน€เธ”เธทเธญเธ (YYYY-MM)</div>
              <input type="month" value={newTx.month} onChange={e => setNewTx({ ...newTx, month: e.target.value })} style={inputStyle} />
            </div>
            {/* Amount */}
            <div>
              <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 6 }}>เธเธณเธเธงเธเน€เธเธดเธ (เธฟ)</div>
              <input type="number" placeholder="0.00" value={newTx.amount} onChange={e => setNewTx({ ...newTx, amount: e.target.value })} style={inputStyle} min="0" step="1" />
            </div>
            {/* Description */}
            <div style={{ gridColumn: "1 / -1" }}>
              <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 6 }}>เธฃเธฒเธขเธฅเธฐเน€เธญเธตเธขเธ”</div>
              <input type="text" placeholder="เน€เธเนเธ เธเนเธฒเน€เธเนเธฒเธชเธ–เธฒเธเธ—เธตเน เธ.เธ., เธเธญเธฃเนเธชเน€เธฃเธตเธขเธ เธ”.เธ.เธ—เธ”เธชเธญเธ..." value={newTx.desc} onChange={e => setNewTx({ ...newTx, desc: e.target.value })} style={inputStyle} />
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={handleAddTx} style={{
              background: newTx.desc && newTx.amount ? "linear-gradient(135deg,#6BCB77,#4ECDC4)" : T.surface,
              border: "none", color: newTx.desc && newTx.amount ? "#0a0c14" : T.textMuted,
              padding: "10px 28px", borderRadius: 10, ...CS, fontWeight: 700, fontSize: 14, cursor: "pointer"
            }}>โ“ เธเธฑเธเธ—เธถเธ</button>
            <button onClick={() => setShowAddForm(false)} style={{ background: T.surface, border: `1px solid ${T.surfaceBorder}`, color: T.textMuted, padding: "10px 20px", borderRadius: 10, ...CS, fontSize: 13, cursor: "pointer" }}>เธขเธเน€เธฅเธดเธ</button>
          </div>
        </div>
      )}

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 20 }}>
        {[
          { icon: "๐’ฐ", label: "เธฃเธฒเธขเธฃเธฑเธ" + (isMonth ? "" : " (เธ—เธฑเนเธเธเธต)"), val: `เธฟ${income.toLocaleString()}`, color: "#6BCB77", sub: `${filtered.filter(t=>t.type==="income").length} เธฃเธฒเธขเธเธฒเธฃ` },
          { icon: "๐’ธ", label: "เธฃเธฒเธขเธเนเธฒเธข" + (isMonth ? "" : " (เธ—เธฑเนเธเธเธต)"), val: `เธฟ${expense.toLocaleString()}`, color: "#FF6B6B", sub: `${filtered.filter(t=>t.type==="expense").length} เธฃเธฒเธขเธเธฒเธฃ` },
          { icon: "๐“", label: "เธเธณเนเธฃเธชเธธเธ—เธเธด", val: `เธฟ${profit.toLocaleString()}`, color: profit >= 0 ? "#FFD700" : "#FF6B6B", sub: `Margin ${margin}%` },
          { icon: "๐“", label: "เธเธนเนเธชเธญเธเธ—เธตเนเธชเธญเธ", val: `${teacherList.length} เธเธ`, color: "#4ECDC4", sub: `${teacherList.reduce((s,t)=>s+t.hours,0)} เธเธก.เธฃเธงเธก` },
        ].map((k, i) => (
          <div key={i} style={{ background: `${k.color}08`, border: `1px solid ${k.color}30`, borderRadius: 16, padding: "18px 20px" }}>
            <div style={{ fontSize: 26, marginBottom: 8 }}>{k.icon}</div>
            <div style={{ ...CS, fontWeight: 800, fontSize: 22, color: k.color, marginBottom: 2 }}>{k.val}</div>
            <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 2 }}>{k.label}</div>
            <div style={{ ...CS, fontSize: 11, color: T.textFaint }}>{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Category Breakdown */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        {/* Income categories */}
        <div style={{ background: T.surface, border: "1px solid rgba(107,203,119,0.2)", borderRadius: 16, overflow: "hidden" }}>
          <div style={{ padding: "12px 20px", borderBottom: "1px solid rgba(107,203,119,0.15)", ...CS, fontWeight: 700, color: "#6BCB77", fontSize: 14 }}>
            ๐’ฐ เธฃเธฒเธขเธฃเธฑเธเนเธขเธเธเธฃเธฐเน€เธ เธ— โ€” {periodLabel}
          </div>
          {incomeCats.length === 0 ? (
            <div style={{ padding: 24, textAlign: "center", ...CS, color: T.textFaint, fontSize: 13 }}>เนเธกเนเธกเธตเธฃเธฒเธขเธฃเธฑเธเนเธเธเนเธงเธเธเธตเน</div>
          ) : incomeCats.map((c, i) => {
            const pct = income > 0 ? Math.round((c.amount/income)*100) : 0;
            return (
              <div key={c.cat} style={{ padding: "12px 20px", borderBottom: `1px solid ${T.surfaceBorder}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <div style={{ ...CS, fontSize: 13, color: T.text }}>{c.cat}</div>
                  <div style={{ ...CS, fontSize: 13, fontWeight: 700, color: "#6BCB77" }}>เธฟ{c.amount.toLocaleString()} <span style={{ ...CS, fontSize: 11, color: T.textMuted }}>({pct}%)</span></div>
                </div>
                <div style={{ height: 4, background: T.surfaceBorder, borderRadius: 2 }}>
                  <div style={{ height: 4, background: "#6BCB77", borderRadius: 2, width: `${pct}%`, transition: "width 0.5s" }} />
                </div>
              </div>
            );
          })}
          {incomeCats.length > 0 && (
            <div style={{ padding: "10px 20px", display: "flex", justifyContent: "space-between", background: "rgba(107,203,119,0.05)" }}>
              <div style={{ ...CS, fontSize: 13, fontWeight: 700, color: T.text }}>เธฃเธงเธกเธฃเธฒเธขเธฃเธฑเธ</div>
              <div style={{ ...CS, fontSize: 14, fontWeight: 800, color: "#6BCB77" }}>เธฟ{income.toLocaleString()}</div>
            </div>
          )}
        </div>

        {/* Expense categories */}
        <div style={{ background: T.surface, border: "1px solid rgba(255,107,107,0.2)", borderRadius: 16, overflow: "hidden" }}>
          <div style={{ padding: "12px 20px", borderBottom: "1px solid rgba(255,107,107,0.15)", ...CS, fontWeight: 700, color: "#FF6B6B", fontSize: 14 }}>
            ๐’ธ เธฃเธฒเธขเธเนเธฒเธขเนเธขเธเธเธฃเธฐเน€เธ เธ— โ€” {periodLabel}
          </div>
          {expenseCats.length === 0 ? (
            <div style={{ padding: 24, textAlign: "center", ...CS, color: T.textFaint, fontSize: 13 }}>เนเธกเนเธกเธตเธฃเธฒเธขเธเนเธฒเธขเนเธเธเนเธงเธเธเธตเน</div>
          ) : expenseCats.map((c, i) => {
            const pct = expense > 0 ? Math.round((c.amount/expense)*100) : 0;
            return (
              <div key={c.cat} style={{ padding: "12px 20px", borderBottom: `1px solid ${T.surfaceBorder}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <div style={{ ...CS, fontSize: 13, color: T.text }}>{c.cat}</div>
                  <div style={{ ...CS, fontSize: 13, fontWeight: 700, color: "#FF6B6B" }}>เธฟ{c.amount.toLocaleString()} <span style={{ ...CS, fontSize: 11, color: T.textMuted }}>({pct}%)</span></div>
                </div>
                <div style={{ height: 4, background: T.surfaceBorder, borderRadius: 2 }}>
                  <div style={{ height: 4, background: "#FF6B6B", borderRadius: 2, width: `${pct}%`, transition: "width 0.5s" }} />
                </div>
              </div>
            );
          })}
          {expenseCats.length > 0 && (
            <div style={{ padding: "10px 20px", display: "flex", justifyContent: "space-between", background: "rgba(255,107,107,0.05)" }}>
              <div style={{ ...CS, fontSize: 13, fontWeight: 700, color: T.text }}>เธฃเธงเธกเธฃเธฒเธขเธเนเธฒเธข</div>
              <div style={{ ...CS, fontSize: 14, fontWeight: 800, color: "#FF6B6B" }}>เธฟ{expense.toLocaleString()}</div>
            </div>
          )}
        </div>
      </div>

      {/* Yearly per-month table */}
      {!isMonth && yearMonthly.length > 0 && (
        <div style={{ background: T.surface, border: `1px solid ${T.surfaceBorder}`, borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
          <div style={{ padding: "14px 22px", borderBottom: `1px solid ${T.surfaceBorder}`, ...CS, fontWeight: 700, color: T.text, fontSize: 15 }}>
            ๐“… เธชเธฃเธธเธเธฃเธฒเธขเน€เธ”เธทเธญเธ โ€” {thYear(selectedYear)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr 0.8fr", padding: "8px 22px", background: `${T.surfaceBorder}` }}>
            {["เน€เธ”เธทเธญเธ","เธฃเธฒเธขเธฃเธฑเธ","เธฃเธฒเธขเธเนเธฒเธข","เธเธณเนเธฃ","Margin"].map(h => (
              <div key={h} style={{ ...CS, fontSize: 12, color: T.textMuted, fontWeight: 700 }}>{h}</div>
            ))}
          </div>
          {yearMonthly.map((m, i) => {
            const mar = m.income > 0 ? Math.round((m.profit/m.income)*100) : 0;
            return (
              <div key={m.month} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr 0.8fr", padding: "10px 22px", borderBottom: `1px solid ${T.surfaceBorder}`, background: i % 2 === 0 ? "transparent" : `${T.surface}` }}>
                <div style={{ ...CS, fontSize: 13, color: T.text, fontWeight: 600 }}>{thFullMonth(m.month)}</div>
                <div style={{ ...CS, fontSize: 13, color: "#6BCB77", fontWeight: 700 }}>+เธฟ{m.income.toLocaleString()}</div>
                <div style={{ ...CS, fontSize: 13, color: "#FF6B6B", fontWeight: 700 }}>-เธฟ{m.expense.toLocaleString()}</div>
                <div style={{ ...CS, fontSize: 13, color: m.profit >= 0 ? "#FFD700" : "#FF6B6B", fontWeight: 700 }}>เธฟ{m.profit.toLocaleString()}</div>
                <div style={{ ...CS, fontSize: 13, color: T.textMuted }}>{mar}%</div>
              </div>
            );
          })}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr 0.8fr", padding: "12px 22px", background: "rgba(255,140,0,0.06)", borderTop: "1px solid rgba(255,140,0,0.2)" }}>
            <div style={{ ...CS, fontSize: 13, color: "#FFD700", fontWeight: 800 }}>เธฃเธงเธกเธ—เธฑเนเธเธเธต</div>
            <div style={{ ...CS, fontSize: 14, color: "#6BCB77", fontWeight: 800 }}>+เธฟ{income.toLocaleString()}</div>
            <div style={{ ...CS, fontSize: 14, color: "#FF6B6B", fontWeight: 800 }}>-เธฟ{expense.toLocaleString()}</div>
            <div style={{ ...CS, fontSize: 14, color: profit >= 0 ? "#FFD700" : "#FF6B6B", fontWeight: 800 }}>เธฟ{profit.toLocaleString()}</div>
            <div style={{ ...CS, fontSize: 13, color: "#FFD700", fontWeight: 700 }}>{margin}%</div>
          </div>
        </div>
      )}

      {/* Bar chart */}
      <div style={{ background: T.surface, border: `1px solid ${T.surfaceBorder}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
        <div style={{ ...CS, fontWeight: 700, fontSize: 15, color: T.text, marginBottom: 20 }}>
          ๐“ {isMonth ? "เธชเธฃเธธเธเธฃเธฒเธขเนเธ”เนโ€“เธฃเธฒเธขเธเนเธฒเธขเธฃเธฒเธขเน€เธ”เธทเธญเธ" : `เนเธเธเธ เธนเธกเธดเธฃเธฒเธขเน€เธ”เธทเธญเธ โ€” ${thYear(selectedYear)}`}
        </div>
        {chartData.length > 0 ? (
          <div style={{ display: "flex", gap: isMonth ? 16 : 10, alignItems: "flex-end", height: 140, marginBottom: 12 }}>
            {chartData.map(m => {
              const isSel = isMonth ? m.month === selectedMonth : true;
              return (
                <div key={m.month} style={{ flex: 1, display: "flex", gap: 4, alignItems: "flex-end", flexDirection: "column" }}>
                  <div style={{ width: "100%", display: "flex", gap: 3, alignItems: "flex-end", height: 120 }}>
                    <div style={{ flex: 1, borderRadius: "4px 4px 0 0", background: "#6BCB77", opacity: isSel ? 1 : 0.45, height: Math.max(4, (m.income/maxVal)*110), transition: "height 0.5s", boxShadow: isSel ? "0 0 10px rgba(107,203,119,0.4)" : "none" }} />
                    <div style={{ flex: 1, borderRadius: "4px 4px 0 0", background: "#FF6B6B", opacity: isSel ? 1 : 0.45, height: Math.max(4, (m.expense/maxVal)*110), transition: "height 0.5s" }} />
                  </div>
                  <div style={{ ...CS, fontSize: 10, color: isSel ? "#FFD700" : T.textFaint, fontWeight: isSel ? 700 : 400, textAlign: "center", width: "100%" }}>
                    {thMonth(m.month)}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ height: 120, display: "flex", alignItems: "center", justifyContent: "center", ...CS, color: T.textFaint, fontSize: 14 }}>เนเธกเนเธกเธตเธเนเธญเธกเธนเธฅ</div>
        )}
        <div style={{ display: "flex", gap: 16 }}>
          {[["#6BCB77","เธฃเธฒเธขเธฃเธฑเธ"], ["#FF6B6B","เธฃเธฒเธขเธเนเธฒเธข"]].map(item => (
            <div key={item[1]} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: item[0] }} />
              <span style={{ ...CS, fontSize: 11, color: T.textMuted }}>{item[1]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher breakdown */}
      <div style={{ background: T.surface, border: `1px solid ${T.surfaceBorder}`, borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
        <div style={{ padding: "14px 22px", borderBottom: `1px solid ${T.surfaceBorder}`, ...CS, fontWeight: 700, color: T.text, fontSize: 15 }}>
          ๐’ณ เธเนเธฒเธชเธญเธเนเธขเธเธ•เธฒเธกเธเธนเนเธชเธญเธ โ€” {periodLabel}
        </div>
        {teacherList.length === 0 ? (
          <div style={{ padding: 32, textAlign: "center", ...CS, color: T.textFaint, fontSize: 14 }}>เนเธกเนเธกเธตเธเนเธญเธกเธนเธฅเนเธเธเนเธงเธเธเธตเน</div>
        ) : teacherList.map(t => (
          <div key={t.id} style={{ padding: "16px 22px", borderBottom: `1px solid ${T.surfaceBorder}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ ...CS, fontWeight: 700, fontSize: 14, color: T.text }}>{t.name}</div>
              <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginTop: 2 }}>{t.specialty} โ€ข {t.hours} เธเธฑเนเธงเนเธกเธ ร— เธฟ50</div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ ...CS, fontWeight: 800, fontSize: 18, color: "#FF6B6B" }}>เธฟ{t.pay.toLocaleString()}</div>
                <div style={{ ...CS, fontSize: 11, color: T.textFaint }}>เธเนเธฒเธเนเธฒเธ{isMonth ? "เน€เธ”เธทเธญเธเธเธตเน" : "เธ—เธฑเนเธเธเธต"}</div>
              </div>
              <button style={{ background: "rgba(107,203,119,0.1)", border: "1px solid rgba(107,203,119,0.25)", color: "#6BCB77", padding: "6px 14px", borderRadius: 8, ...CS, fontSize: 12, cursor: "pointer" }}>โ“ เธเนเธฒเธขเนเธฅเนเธง</button>
            </div>
          </div>
        ))}
        {teacherList.length > 0 && (
          <div style={{ padding: "14px 22px", background: "rgba(255,107,107,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 14 }}>เธฃเธงเธกเธเนเธฒเนเธเนเธเนเธฒเธขเธเธนเนเธชเธญเธ</div>
            <div style={{ ...CS, fontWeight: 800, fontSize: 18, color: "#FF6B6B" }}>เธฟ{teacherList.reduce((s,t)=>s+t.pay,0).toLocaleString()}</div>
          </div>
        )}
      </div>

      {/* Transaction log with delete */}
      <div style={{ background: T.surface, border: `1px solid ${T.surfaceBorder}`, borderRadius: 16, overflow: "hidden" }}>
        <div style={{ padding: "14px 22px", borderBottom: `1px solid ${T.surfaceBorder}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 15 }}>๐“ เธฃเธฒเธขเธเธฒเธฃเธ—เธฑเนเธเธซเธกเธ” โ€” {periodLabel}</div>
          <div style={{ ...CS, fontSize: 12, color: T.textMuted }}>{filtered.length} เธฃเธฒเธขเธเธฒเธฃ</div>
        </div>
        {filtered.length === 0 ? (
          <div style={{ padding: 32, textAlign: "center", ...CS, color: T.textFaint, fontSize: 14 }}>เนเธกเนเธกเธตเธฃเธฒเธขเธเธฒเธฃเนเธเธเนเธงเธเธเธตเน</div>
        ) : filtered.map(tx => (
          <div key={tx.id} style={{ padding: "12px 22px", borderBottom: `1px solid ${T.surfaceBorder}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ ...CS, fontSize: 13, color: T.text }}>{tx.desc}</div>
              <div style={{ ...CS, fontSize: 11, color: T.textFaint, marginTop: 2 }}>
                {tx.category || "โ€”"} โ€ข {isMonth ? "" : thMonth(tx.month) + " โ€ข "}#{tx.id}
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ ...CS, fontWeight: 700, fontSize: 15, color: tx.type === "income" ? "#6BCB77" : "#FF6B6B" }}>
                {tx.type === "income" ? "+" : "-"}เธฟ{tx.amount.toLocaleString()}
              </div>
              {/* Delete confirmation */}
              {deleteId === tx.id ? (
                <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={() => handleDeleteTx(tx.id)} style={{ background: "rgba(255,50,50,0.15)", border: "1px solid rgba(255,50,50,0.3)", color: "#FF6B6B", padding: "4px 10px", borderRadius: 7, ...CS, fontSize: 11, cursor: "pointer" }}>เธขเธทเธเธขเธฑเธเธฅเธ</button>
                  <button onClick={() => setDeleteId(null)} style={{ background: T.surface, border: `1px solid ${T.surfaceBorder}`, color: T.textMuted, padding: "4px 10px", borderRadius: 7, ...CS, fontSize: 11, cursor: "pointer" }}>เธขเธเน€เธฅเธดเธ</button>
                </div>
              ) : (
                <button onClick={() => setDeleteId(tx.id)} style={{ background: "transparent", border: "none", color: T.textFaint, cursor: "pointer", fontSize: 16, padding: "2px 6px" }} title="เธฅเธเธฃเธฒเธขเธเธฒเธฃ">๐—‘</button>
              )}
            </div>
          </div>
        ))}
        {/* Summary footer */}
        <div style={{ padding: "14px 22px", background: `${T.surfaceBorder}`, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {[
            { label: "เธฃเธฒเธขเธฃเธฑเธเธฃเธงเธก", val: `+เธฟ${income.toLocaleString()}`, color: "#6BCB77" },
            { label: "เธฃเธฒเธขเธเนเธฒเธขเธฃเธงเธก", val: `-เธฟ${expense.toLocaleString()}`, color: "#FF6B6B" },
            { label: "เธเธณเนเธฃเธชเธธเธ—เธเธด", val: `เธฟ${profit.toLocaleString()}`, color: profit >= 0 ? "#FFD700" : "#FF6B6B" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ ...CS, fontWeight: 800, fontSize: 16, color: s.color }}>{s.val}</div>
              <div style={{ ...CS, fontSize: 11, color: T.textMuted }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== MOCK DATA: Skill Tree ====================
const SKILL_TREE_DATA = {
  id: "root", label: "เธเธทเนเธเธเธฒเธ", icon: "๐ค–", color: "#37B6F6",
  xp: 0, status: "completed", desc: "เธเธงเธฒเธกเธฃเธนเนเธเธทเนเธเธเธฒเธเธซเธธเนเธเธขเธเธ•เน",
  children: [
    {
      id: "lego-wedo", label: "LEGO WeDo", icon: "๐งฑ", color: "#2FD463",
      xp: 500, status: "completed", desc: "เธ•เนเธญเธซเธธเนเธเธขเธเธ•เน LEGO เน€เธเธทเนเธญเธเธ•เนเธ เธญเธฒเธขเธธ 6-8 เธเธต",
      children: [
        {
          id: "scratch", label: "Scratch Programming", icon: "๐’ป", color: "#2FD463",
          xp: 1000, status: "active", desc: "เน€เธเธตเธขเธเนเธเธฃเนเธเธฃเธกเธ”เนเธงเธข Scratch Block-based",
          children: [
            {
              id: "ev3", label: "Mindstorms EV3", icon: "โก", color: "#F99D07",
              xp: 2000, status: "locked", desc: "เธซเธธเนเธเธขเธเธ•เนเธเธฑเนเธเธเธฅเธฒเธ EV3 + Python เน€เธเธทเนเธญเธเธ•เนเธ",
              children: [
                {
                  id: "python", label: "Python Advanced", icon: "๐", color: "#F99D07",
                  xp: 3500, status: "locked", desc: "เน€เธเธตเธขเธเนเธเธฃเนเธเธฃเธก Python เธชเธณเธซเธฃเธฑเธเธซเธธเนเธเธขเธเธ•เน",
                  children: [
                    { id: "ai-vision", label: "AI & Computer Vision", icon: "๐‘๏ธ", color: "#882FF6", xp: 6000, status: "locked", desc: "AI Vision, Machine Learning เธชเธณเธซเธฃเธฑเธเธซเธธเนเธเธขเธเธ•เน", children: [] },
                    { id: "mech-auto", label: "Mechanical Automation", icon: "โ๏ธ", color: "#882FF6", xp: 6000, status: "locked", desc: "เธเธฅเนเธเธเธดเธชเธดเธเธชเนเธเธฑเนเธเธชเธนเธ Pulleys, Gears, Automation", children: [] },
                  ]
                }
              ]
            },
            {
              id: "arduino", label: "Arduino Basics", icon: "๐”", color: "#37B6F6",
              xp: 2000, status: "locked", desc: "เธญเธดเน€เธฅเนเธเธ—เธฃเธญเธเธดเธเธชเน + Arduino เน€เธเธทเนเธญเธเธ•เนเธ",
              children: [
                { id: "raspberry", label: "Raspberry Pi & IoT", icon: "๐“", color: "#882FF6", xp: 5000, status: "locked", desc: "IoT, Smart Home, Raspberry Pi projects", children: [] }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const calcXP = (level) => Math.round(500 * Math.log2(level + 1));

// ==================== SKILL TREE PAGE ====================
function SkillTreePage({ user, setPage }) {
  const [selectedNode, setSelectedNode] = useState(null);
  const [userXP] = useState(1200);
  const [animIn, setAnimIn] = useState(false);
  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);

  const userLevel = Math.floor(userXP / 500) + 1;
  const nextLevelXP = calcXP(userLevel);
  const xpProgress = Math.min(100, Math.round((userXP % 500) / 5));

  const statusColor = { completed: "#2FD463", active: "#F99D07", locked: "rgba(255,255,255,0.2)" };
  const statusLabel = { completed: "โ… เธเนเธฒเธเนเธฅเนเธง", active: "๐”“ เธเธณเธฅเธฑเธเน€เธฃเธตเธขเธ", locked: "๐”’ เธฅเนเธญเธ" };

  function renderNode(node, depth) {
    const isSelected = selectedNode && selectedNode.id === node.id;
    const s = statusColor[node.status];
    return (
      <div key={node.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Node */}
        <div
          onClick={() => setSelectedNode(isSelected ? null : node)}
          style={{
            width: depth === 0 ? 90 : 76, height: depth === 0 ? 90 : 76,
            borderRadius: "50%",
            background: node.status === "locked"
              ? "rgba(255,255,255,0.04)"
              : "radial-gradient(circle at 35% 35%, " + node.color + "40, " + node.color + "10)",
            border: isSelected ? "3px solid " + node.color : "2px solid " + (node.status === "locked" ? "rgba(255,255,255,0.1)" : node.color + "60"),
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            cursor: node.status !== "locked" ? "pointer" : "default",
            transition: "all 0.25s",
            boxShadow: node.status !== "locked" ? "0 0 " + (isSelected ? "20px" : "8px") + " " + node.color + "40" : "none",
            position: "relative",
            opacity: node.status === "locked" ? 0.5 : 1,
            transform: isSelected ? "scale(1.12)" : "scale(1)"
          }}
        >
          <div style={{ fontSize: depth === 0 ? 28 : 22 }}>{node.icon}</div>
          <div style={{
            fontFamily: "'Kanit', sans-serif", fontSize: 9, fontWeight: 700,
            color: node.status === "locked" ? "rgba(255,255,255,0.3)" : node.color,
            textAlign: "center", lineHeight: 1.2, maxWidth: 64, marginTop: 2
          }}>{node.label}</div>
          {node.status === "active" && (
            <div style={{
              position: "absolute", top: -4, right: -4,
              width: 14, height: 14, borderRadius: "50%",
              background: "#F99D07", boxShadow: "0 0 8px #F99D07",
              animation: "pulse 1.5s ease-in-out infinite"
            }} />
          )}
        </div>

        {/* Children */}
        {node.children && node.children.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Connector line */}
            <div style={{ width: 2, height: 28, background: "rgba(255,255,255,0.12)" }} />
            {/* Children row */}
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start", position: "relative" }}>
              {node.children.length > 1 && (
                <div style={{
                  position: "absolute", top: 0,
                  left: "50%", transform: "translateX(-50%)",
                  width: "calc(100% - 38px)", height: 2,
                  background: "rgba(255,255,255,0.08)"
                }} />
              )}
              {node.children.map(child => (
                <div key={child.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 2, height: 18, background: "rgba(255,255,255,0.12)" }} />
                  {renderNode(child, depth + 1)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "linear-gradient(180deg,#070d18 0%,#0a0c14 100%)" }}>
      {/* Header */}
      <div style={{
        padding: "40px 24px 20px", maxWidth: 1100, margin: "0 auto",
        opacity: animIn ? 1 : 0, transform: animIn ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
          <div style={{
            background: "linear-gradient(135deg,#37B6F6,#882FF6)",
            borderRadius: 14, padding: "10px 16px",
            fontFamily: "'Kanit',sans-serif", fontWeight: 800, fontSize: 20, color: "#fff"
          }}>๐—บ๏ธ Learning Map</div>
          <div style={{ fontFamily: "'Kanit',sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 14 }}>
            เน€เธชเนเธเธ—เธฒเธเธเธฒเธฃเน€เธฃเธตเธขเธเธฃเธนเน BaanBot
          </div>
        </div>

        {/* XP Bar */}
        <div style={{
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(55,182,246,0.2)",
          borderRadius: 16, padding: "16px 24px", marginBottom: 24,
          display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "linear-gradient(135deg,#37B6F6,#882FF6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Kanit',sans-serif", fontWeight: 800, fontSize: 16, color: "#fff"
            }}>Lv.{userLevel}</div>
            <div>
              <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 700, color: "#fff", fontSize: 14 }}>
                {user ? user.name : "เธเธนเนเน€เธฃเธตเธขเธ"} โ€ข Level {userLevel}
              </div>
              <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                {userXP} XP / {nextLevelXP} XP เธชเธนเนเธฃเธฐเธ”เธฑเธเธ–เธฑเธ”เนเธ
              </div>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 100, height: 10, overflow: "hidden" }}>
              <div style={{
                height: "100%", borderRadius: 100,
                background: "linear-gradient(90deg,#37B6F6,#2FD463)",
                width: xpProgress + "%",
                transition: "width 1s cubic-bezier(0.16,1,0.3,1)",
                boxShadow: "0 0 8px rgba(47,212,99,0.5)"
              }} />
            </div>
            <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>
              {xpProgress}% เธเธงเธฒเธกเธเธทเธเธซเธเนเธฒเธชเธนเน Level {userLevel + 1}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {[{ s: "completed", label: "เธเนเธฒเธ", n: 2 }, { s: "active", label: "เธเธณเธฅเธฑเธเน€เธฃเธตเธขเธ", n: 1 }, { s: "locked", label: "เธฅเนเธญเธ", n: 5 }].map(b => (
              <div key={b.s} style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8, padding: "6px 12px", textAlign: "center"
              }}>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 700, color: statusColor[b.s], fontSize: 16 }}>{b.n}</div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.35)" }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tree + Detail layout */}
        <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Tree */}
          <div style={{
            flex: "1 1 400px",
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(55,182,246,0.12)",
            borderRadius: 24, padding: "32px 24px", overflowX: "auto",
            display: "flex", justifyContent: "center"
          }}>
            <style>{`
              @keyframes pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.3);opacity:0.6} }
            `}</style>
            {renderNode(SKILL_TREE_DATA, 0)}
          </div>

          {/* Detail panel */}
          {selectedNode ? (
            <div style={{
              width: 280, background: "rgba(255,255,255,0.03)",
              border: "1px solid " + selectedNode.color + "40",
              borderRadius: 20, padding: 24,
              boxShadow: "0 0 32px " + selectedNode.color + "15"
            }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{selectedNode.icon}</div>
              <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 800, fontSize: 20, color: "#fff", marginBottom: 6 }}>
                {selectedNode.label}
              </div>
              <div style={{
                display: "inline-block", background: selectedNode.color + "20",
                color: selectedNode.color, borderRadius: 100, padding: "3px 14px",
                fontFamily: "'Kanit',sans-serif", fontSize: 12, fontWeight: 700, marginBottom: 14
              }}>{statusLabel[selectedNode.status]}</div>
              <p style={{ fontFamily: "'Kanit',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 18 }}>
                {selectedNode.desc}
              </p>
              <div style={{
                background: "rgba(255,255,255,0.04)", borderRadius: 10,
                padding: "12px 16px", marginBottom: 16
              }}>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>XP เธ—เธตเนเนเธ”เนเธฃเธฑเธ</div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 800, fontSize: 22, color: "#F99D07" }}>
                  +{selectedNode.xp.toLocaleString()} XP
                </div>
              </div>
              {selectedNode.status === "locked" ? (
                <div style={{
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 10, padding: 12,
                  fontFamily: "'Kanit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", textAlign: "center"
                }}>๐”’ เธเนเธฒเธเธซเธฑเธงเธเนเธญเธเนเธญเธเธซเธเนเธฒเธเนเธญเธ</div>
              ) : selectedNode.status === "active" ? (
                <button onClick={() => setPage("booking")} style={{
                  width: "100%", background: "linear-gradient(135deg,#F99D07,#FFD700)",
                  border: "none", color: "#0a0c14",
                  padding: "12px", borderRadius: 10, cursor: "pointer",
                  fontFamily: "'Kanit',sans-serif", fontWeight: 700, fontSize: 14
                }}>๐“… เธเธญเธเธเธฅเธฒเธชเธ•เนเธญเนเธ</button>
              ) : (
                <div style={{
                  background: "rgba(47,212,99,0.1)", border: "1px solid rgba(47,212,99,0.3)",
                  borderRadius: 10, padding: 12,
                  fontFamily: "'Kanit',sans-serif", fontSize: 13, color: "#2FD463", textAlign: "center"
                }}>๐ เน€เธฃเธตเธขเธเธเธเนเธฅเนเธง โ€” เธขเธญเธ”เน€เธขเธตเนเธขเธกเธกเธฒเธ!</div>
              )}
            </div>
          ) : (
            <div style={{
              width: 280, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20, padding: 24, textAlign: "center"
            }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>๐‘</div>
              <div style={{ fontFamily: "'Kanit',sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7 }}>
                เธเธฅเธดเธเธ—เธตเนเนเธซเธเธ”เนเธเนเธเธเธเธฑเธ<br />เน€เธเธทเนเธญเธ”เธนเธฃเธฒเธขเธฅเธฐเน€เธญเธตเธขเธ”
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div style={{ marginTop: 20, display: "flex", gap: 20, flexWrap: "wrap" }}>
          {[
            { color: "#2FD463", label: "เธเนเธฒเธเนเธฅเนเธง" },
            { color: "#F99D07", label: "เธเธณเธฅเธฑเธเน€เธฃเธตเธขเธ" },
            { color: "#37B6F6", label: "เธเธทเนเธเธเธฒเธ" },
            { color: "#882FF6", label: "เธฃเธฐเธ”เธฑเธเธชเธนเธ" },
          ].map(l => (
            <div key={l.color} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: l.color, boxShadow: "0 0 6px " + l.color }} />
              <span style={{ fontFamily: "'Kanit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{l.label}</span>
            </div>
          ))}
        </div>

        {!user && (
          <div style={{
            marginTop: 24, background: "rgba(247,157,7,0.08)", border: "1px solid rgba(247,157,7,0.25)",
            borderRadius: 14, padding: "16px 20px", display: "flex", alignItems: "center", gap: 16
          }}>
            <div style={{ fontSize: 28 }}>๐’ก</div>
            <div>
              <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 700, color: "#F99D07", fontSize: 14 }}>
                เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเน€เธเธทเนเธญเธเธฑเธเธ—เธถเธเธเธงเธฒเธกเธเนเธฒเธงเธซเธเนเธฒ
              </div>
              <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
                เธ•เธดเธ”เธ•เธฒเธก XP เนเธฅเธฐเธชเธฐเธชเธก RoboCredits เนเธ”เนเน€เธกเธทเนเธญ login
              </div>
            </div>
            <button onClick={() => setPage("login")} style={{
              marginLeft: "auto", background: "linear-gradient(135deg,#F99D07,#FFD700)",
              border: "none", color: "#0a0c14", padding: "8px 18px",
              borderRadius: 8, cursor: "pointer",
              fontFamily: "'Kanit',sans-serif", fontWeight: 700, fontSize: 13
            }}>เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ==================== TOURNAMENT HUB PAGE ====================
const TOURNAMENTS = [
  {
    id: 1, name: "VEX Robotics Thailand National 2025โ€“2026",
    org: "VEX / ALL Robotics", icon: "๐",
    target: "เธเธเธกโ€“เธกเธฑเธเธขเธก (VEX IQ / V5)", color: "#F99D07",
    date: "เธกเธเธฃเธฒเธเธก 2025", venue: "PIM เนเธเนเธเธงเธฑเธ’เธเธฐ, เธเธฃเธธเธเน€เธ—เธเธฏ",
    status: "past", teams: 126, prize: "เธ•เธฑเธงเนเธ—เธเนเธเนเธเนเธ World Championship เธชเธซเธฃเธฑเธเธฏ",
    desc: "เธเธฒเธฃเนเธเนเธเธเธฑเธเธซเธธเนเธเธขเธเธ•เนเธฃเธฐเธ”เธฑเธเธเธฒเธ•เธดเธ—เธตเนเธขเธดเนเธเนเธซเธเนเธ—เธตเนเธชเธธเธ” เธฃเธงเธก 126 เธ—เธตเธกเธเธฒเธเธ—เธฑเนเธงเธเธฃเธฐเน€เธ—เธจ เธเธนเนเธเธเธฐเนเธ”เนเธ•เธฑเธงเนเธ—เธเนเธ VEX World Championship"
  },
  {
    id: 2, name: "Robotics for Good Youth Challenge",
    org: "UN-based Global Program", icon: "๐",
    target: "เธญเธฒเธขเธธ 10โ€“18 เธเธต", color: "#2FD463",
    date: "เธเธฃเธเธเธฒเธเธก 2025", venue: "Global Final (Online + Bangkok)",
    status: "upcoming", teams: null, prize: "เธ—เธธเธเธเธฒเธฃเธจเธถเธเธฉเธฒเธฃเธฐเธ”เธฑเธเธเธฒเธเธฒเธเธฒเธ•เธด",
    desc: "เนเธเธฃเธเธเธฒเธฃเธซเธธเนเธเธขเธเธ•เนเน€เธเธทเนเธญเธชเธฑเธเธเธกเธเธฒเธ UN เน€เธเธดเธ”เธฃเธฑเธเธ—เธตเธกเน€เธขเธฒเธงเธเธเธ—เธตเนเธญเธญเธเนเธเธเธซเธธเนเธเธขเธเธ•เนเนเธเนเธเธฑเธเธซเธฒเธชเธฑเธเธเธกเธเธฃเธดเธ"
  },
  {
    id: 3, name: "AI & Robotics Hackathon",
    org: "MIT Media Lab Thailand", icon: "๐ค–",
    target: "เธกเธฑเธเธขเธกเธเธฅเธฒเธขโ€“เธกเธซเธฒเธงเธดเธ—เธขเธฒเธฅเธฑเธข", color: "#37B6F6",
    date: "เธเธฑเธเธงเธฒเธเธก 2025", venue: "Cloud11 เธเธฃเธธเธเน€เธ—เธเธฏ",
    status: "upcoming", teams: null, prize: "เธฃเธฒเธเธงเธฑเธฅเน€เธเธดเธเธชเธ” + Mentorship MIT",
    desc: "Hackathon 48 เธเธฑเนเธงเนเธกเธ เธชเธฃเนเธฒเธ AI Robot เธ•เนเธเนเธเธ เธงเธดเธ—เธขเธฒเธเธฃเธฃเธฐเธ”เธฑเธเนเธฅเธเธเธฒเธ MIT Media Lab"
  },
  {
    id: 4, name: "RAT Open โ€“ Helter Skelter",
    org: "RAT Events Thailand", icon: "โก",
    target: "เธเธฑเธเน€เธฃเธตเธขเธเธ—เธธเธเธฃเธฐเธ”เธฑเธ (Open Platform)", color: "#882FF6",
    date: "เธเธคเธฉเธ เธฒเธเธก 2026", venue: "St Andrews Int. School เธเธฃเธธเธเน€เธ—เธเธฏ",
    status: "open", teams: null, prize: "Trophy + RoboCredits เธเธดเน€เธจเธฉ",
    desc: "เธเธฒเธฃเนเธเนเธเธเธฑเธเน€เธเธดเธ”เธฃเธนเธเนเธเธ Open Platform เนเธเนเธซเธธเนเธเธขเธเธ•เนเนเธเธฅเธ•เธเธญเธฃเนเธกเธญเธฐเนเธฃเธเนเนเธ”เน เน€เธซเธกเธฒเธฐเธชเธณเธซเธฃเธฑเธเธ—เธตเธกเธ—เธตเนเธกเธตเธเธงเธฒเธกเธเธดเธ”เธชเธฃเนเธฒเธเธชเธฃเธฃเธเน"
  },
];

function TournamentHubPage({ user, setPage }) {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [animIn, setAnimIn] = useState(false);
  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);

  const statusMeta = {
    past:     { label: "เธเนเธฒเธเนเธเนเธฅเนเธง", color: "rgba(255,255,255,0.3)", bg: "rgba(255,255,255,0.05)" },
    upcoming: { label: "เน€เธฃเนเธงเน เธเธตเน",   color: "#37B6F6",             bg: "rgba(55,182,246,0.08)" },
    open:     { label: "เน€เธเธดเธ”เธฃเธฑเธเธชเธกเธฑเธเธฃ", color: "#2FD463",            bg: "rgba(47,212,99,0.1)" },
  };

  const filtered = filter === "all" ? TOURNAMENTS : TOURNAMENTS.filter(t => t.status === filter);

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "linear-gradient(180deg,#080d1a 0%,#0a0c14 100%)" }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "40px 24px",
        opacity: animIn ? 1 : 0, transform: animIn ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)"
      }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
            <div style={{
              background: "linear-gradient(135deg,#F99D07,#882FF6)",
              borderRadius: 14, padding: "10px 18px",
              fontFamily: "'Kanit',sans-serif", fontWeight: 800, fontSize: 22, color: "#fff"
            }}>๐๏ธ Tournament Hub</div>
          </div>
          <p style={{ fontFamily: "'Kanit',sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 15, maxWidth: 600 }}>
            เธ•เธฒเธฃเธฒเธเธเธฒเธฃเนเธเนเธเธเธฑเธเธซเธธเนเธเธขเธเธ•เนเนเธเนเธ—เธข 2025โ€“2026 เนเธซเธฅเนเธเธฃเธงเธกเธเนเธญเธกเธนเธฅเธชเธณเธซเธฃเธฑเธเธเธฑเธเน€เธฃเธตเธขเธ BaanBot
          </p>
        </div>

        {/* Stats bar */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))",
          gap: 14, marginBottom: 28
        }}>
          {[
            { icon: "๐", num: "4", label: "เธเธฒเธฃเนเธเนเธเธเธฑเธเธซเธฅเธฑเธ", color: "#F99D07" },
            { icon: "๐“", num: "28", label: "เธเธฑเธเน€เธฃเธตเธขเธเธ—เธตเนเธเธเธฐเธฃเธฒเธเธงเธฑเธฅ", color: "#2FD463" },
            { icon: "๐", num: "3", label: "เธฃเธฐเธ”เธฑเธ International", color: "#37B6F6" },
            { icon: "โณ", num: "2", label: "เน€เธเธดเธ”เธฃเธฑเธเธชเธกเธฑเธเธฃเนเธฅเนเธง", color: "#882FF6" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14, padding: "16px 18px",
              display: "flex", alignItems: "center", gap: 12
            }}>
              <div style={{ fontSize: 24 }}>{s.icon}</div>
              <div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 800, fontSize: 22, color: s.color }}>{s.num}</div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          {[["all","เธ—เธฑเนเธเธซเธกเธ”","#fff"],["open","เน€เธเธดเธ”เธฃเธฑเธเธชเธกเธฑเธเธฃ","#2FD463"],["upcoming","เน€เธฃเนเธงเน เธเธตเน","#37B6F6"],["past","เธเนเธฒเธเนเธเนเธฅเนเธง","rgba(255,255,255,0.4)"]].map(([val, lbl, col]) => (
            <button key={val} onClick={() => setFilter(val)} style={{
              background: filter === val ? col + "20" : "rgba(255,255,255,0.04)",
              border: "1px solid " + (filter === val ? col + "50" : "rgba(255,255,255,0.08)"),
              color: filter === val ? col : "rgba(255,255,255,0.4)",
              padding: "8px 18px", borderRadius: 100,
              fontFamily: "'Kanit',sans-serif", fontSize: 13, fontWeight: filter === val ? 700 : 400,
              cursor: "pointer", transition: "all 0.2s"
            }}>{lbl}</button>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 18, marginBottom: 40 }}>
          {filtered.map(t => {
            const sm = statusMeta[t.status];
            const isSelected = selected && selected.id === t.id;
            return (
              <div key={t.id} onClick={() => setSelected(isSelected ? null : t)} style={{
                background: isSelected ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)",
                border: isSelected ? "1px solid " + t.color + "50" : "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20, padding: 24, cursor: "pointer",
                transition: "all 0.25s",
                boxShadow: isSelected ? "0 8px 32px " + t.color + "18" : "none",
                transform: isSelected ? "translateY(-3px)" : "none"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ fontSize: 32 }}>{t.icon}</div>
                  <div style={{
                    background: sm.bg, color: sm.color,
                    borderRadius: 100, padding: "3px 12px",
                    fontFamily: "'Kanit',sans-serif", fontSize: 11, fontWeight: 700,
                    border: "1px solid " + sm.color + "30"
                  }}>{sm.label}</div>
                </div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 800, fontSize: 15, color: "#fff", marginBottom: 6, lineHeight: 1.4 }}>
                  {t.name}
                </div>
                <div style={{
                  display: "inline-block", background: t.color + "15", color: t.color,
                  borderRadius: 100, padding: "2px 10px", fontSize: 11,
                  fontFamily: "'Kanit',sans-serif", marginBottom: 12, fontWeight: 600
                }}>{t.target}</div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                  ๐“… {t.date}<br />
                  ๐“ {t.venue}
                </div>
                {t.teams && (
                  <div style={{ marginTop: 12, fontFamily: "'Kanit',sans-serif", fontSize: 12, color: "#F99D07", fontWeight: 700 }}>
                    ๐‘ฅ {t.teams} เธ—เธตเธกเธฃเนเธงเธกเนเธเนเธ
                  </div>
                )}

                {/* Expanded detail */}
                {isSelected && (
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <p style={{ fontFamily: "'Kanit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 12 }}>
                      {t.desc}
                    </p>
                    <div style={{
                      background: "rgba(255,255,255,0.04)", borderRadius: 10,
                      padding: "10px 14px", marginBottom: 12
                    }}>
                      <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 3 }}>เธฃเธฒเธเธงเธฑเธฅ</div>
                      <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 13, color: t.color, fontWeight: 700 }}>๐–๏ธ {t.prize}</div>
                    </div>
                    {t.status !== "past" && (
                      <button onClick={(e) => { e.stopPropagation(); setPage("booking"); }} style={{
                        width: "100%", background: "linear-gradient(135deg," + t.color + "," + t.color + "bb)",
                        border: "none", color: "#0a0c14",
                        padding: "10px", borderRadius: 10, cursor: "pointer",
                        fontFamily: "'Kanit',sans-serif", fontWeight: 700, fontSize: 13
                      }}>๐“… เน€เธ•เธฃเธตเธขเธกเธ•เธฑเธงเนเธเนเธ โ€” เธเธญเธเธเธฅเธฒเธชเน€เธเธดเนเธก</button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Team Finder CTA */}
        <div style={{
          background: "linear-gradient(135deg,rgba(136,47,246,0.12),rgba(55,182,246,0.08))",
          border: "1px solid rgba(136,47,246,0.25)", borderRadius: 20, padding: "28px 32px",
          display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap"
        }}>
          <div style={{ fontSize: 40 }}>๐ค</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 800, color: "#fff", fontSize: 18, marginBottom: 6 }}>
              Team Finder โ€” เธซเธฒเธ—เธตเธกเนเธเนเธเธเธฑเธ
            </div>
            <div style={{ fontFamily: "'Kanit',sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
              เธซเธฒเน€เธเธทเนเธญเธเธฃเนเธงเธกเธ—เธตเธกเธ—เธตเนเธกเธตเธ—เธฑเธเธฉเธฐเน€เธชเธฃเธดเธกเธเธฑเธ เน€เธเธดเนเธกเนเธญเธเธฒเธชเธเธเธฐเธเธฒเธฃเนเธเนเธเธเธฑเธ
            </div>
          </div>
          <button onClick={() => setPage("login")} style={{
            background: "linear-gradient(135deg,#882FF6,#37B6F6)",
            border: "none", color: "#fff", padding: "12px 24px",
            borderRadius: 12, cursor: "pointer",
            fontFamily: "'Kanit',sans-serif", fontWeight: 700, fontSize: 14
          }}>๐” เธเนเธเธซเธฒเน€เธเธทเนเธญเธเธฃเนเธงเธกเธ—เธตเธก</button>
        </div>
      </div>
    </div>
  );
}

// ==================== ROBOCREDIT / LOYALTY PAGE ====================
function RoboCreditPage({ user, setPage }) {
  const [copied, setCopied] = useState(false);
  const [animIn, setAnimIn] = useState(false);
  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);

  const userCredits = user ? 1240 : 0;
  const referralCode = user ? "BAANBOT-" + user.name.substring(0,3).toUpperCase() + "2026" : "BAANBOT-XXXX";

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rewards = [
    { icon: "๐“", name: "เธชเนเธงเธเธฅเธ”เธเนเธฒเน€เธฃเธตเธขเธ 10%", credits: 500, type: "Digital", color: "#37B6F6" },
    { icon: "๐ค–", name: "เน€เธเธเน€เธเธญเธฃเน Ultrasonic", credits: 800, type: "Physical", color: "#F99D07" },
    { icon: "๐”", name: "เธเธธเธ” Arduino Starter Kit", credits: 1200, type: "Physical", color: "#882FF6" },
    { icon: "๐…", name: "เน€เธซเธฃเธตเธขเธ Badge เธเธดเน€เธจเธฉ", credits: 300, type: "Digital", color: "#2FD463" },
    { icon: "๐“", name: "เธซเธเธฑเธเธชเธทเธญ Coding เธชเธณเธซเธฃเธฑเธเน€เธ”เนเธ", credits: 600, type: "Physical", color: "#F99D07" },
    { icon: "๐ฎ", name: "เธ•เนเธญเธญเธฒเธขเธธเธชเธกเธฒเธเธดเธ 1 เน€เธ”เธทเธญเธ", credits: 1500, type: "Digital", color: "#37B6F6" },
  ];

  const history = [
    { icon: "๐“…", desc: "เธเธญเธเธเธฅเธฒเธช LEGO EV3 - 26 เธ.เธ.", credits: +50, date: "26 เธ.เธ." },
    { icon: "๐‘ฅ", desc: "เนเธเธฐเธเธณเน€เธเธทเนเธญเธ: เธเนเธญเธเธเธดเนเธ", credits: +200, date: "20 เธ.เธ." },
    { icon: "๐", desc: "เธเนเธฒเธเธ”เนเธฒเธ Scratch Level 3", credits: +100, date: "15 เธ.เธ." },
    { icon: "๐‘ฅ", desc: "เนเธเธฐเธเธณเน€เธเธทเนเธญเธ: เธเนเธญเธเธเธดเนเธ", credits: +200, date: "10 เธ.เธ." },
    { icon: "๐ฏ", desc: "เน€เธเนเธเธญเธดเธเน€เธฃเธตเธขเธ 10 เธเธฃเธฑเนเธเธ•เธดเธ”", credits: +150, date: "8 เธ.เธ." },
  ];

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "linear-gradient(180deg,#070c18 0%,#0a0c14 100%)" }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "40px 24px",
        opacity: animIn ? 1 : 0, transform: animIn ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)"
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <div style={{
            background: "linear-gradient(135deg,#F99D07,#2FD463)",
            borderRadius: 14, padding: "10px 18px",
            fontFamily: "'Kanit',sans-serif", fontWeight: 800, fontSize: 22, color: "#0a0c14"
          }}>โญ RoboCredits</div>
          <div style={{ fontFamily: "'Kanit',sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 14 }}>
            เธฃเธฐเธเธเธชเธฐเธชเธกเนเธ•เนเธกเนเธฅเธฐเธฃเธฒเธเธงเธฑเธฅ
          </div>
        </div>

        {user ? (
          <>
            {/* Credit card */}
            <div style={{
              background: "linear-gradient(135deg,#1a1030,#0d1525)",
              border: "1px solid rgba(247,157,7,0.3)",
              borderRadius: 24, padding: "28px 32px", marginBottom: 24,
              position: "relative", overflow: "hidden",
              boxShadow: "0 20px 60px rgba(247,157,7,0.1)"
            }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(247,157,7,0.06)" }} />
              <div style={{ position: "absolute", bottom: -30, left: 20, width: 140, height: 140, borderRadius: "50%", background: "rgba(136,47,246,0.05)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
                      RoboCredits เธเธญเธ {user.name}
                    </div>
                    <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 900, fontSize: 52, color: "#F99D07", lineHeight: 1 }}>
                      {userCredits.toLocaleString()}
                    </div>
                    <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
                      โ เธชเนเธงเธเธฅเธ” เธฟ{Math.floor(userCredits / 100) * 10} เธเธฒเธ—
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      background: "rgba(247,157,7,0.15)", border: "1px solid rgba(247,157,7,0.3)",
                      borderRadius: 12, padding: "8px 16px", marginBottom: 8
                    }}>
                      <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>เธฃเธฐเธ”เธฑเธเธชเธกเธฒเธเธดเธ</div>
                      <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 700, color: "#F99D07", fontSize: 15 }}>โญ Gold Explorer</div>
                    </div>
                    <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
                      เธญเธตเธ 760 credits เธชเธนเน Platinum
                    </div>
                  </div>
                </div>
                {/* Progress to next tier */}
                <div style={{ marginTop: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Kanit',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>
                    <span>Gold (1,000)</span><span>Platinum (2,000)</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 100, height: 8, overflow: "hidden" }}>
                    <div style={{
                      height: "100%", borderRadius: 100,
                      background: "linear-gradient(90deg,#F99D07,#FFD700)",
                      width: Math.min(100, ((userCredits - 1000) / 1000 * 100)) + "%",
                      boxShadow: "0 0 8px rgba(247,157,7,0.5)"
                    }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Referral section */}
            <div style={{
              background: "rgba(47,212,99,0.06)", border: "1px solid rgba(47,212,99,0.2)",
              borderRadius: 20, padding: "24px 28px", marginBottom: 24,
              display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center"
            }}>
              <div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 800, color: "#2FD463", fontSize: 18, marginBottom: 6 }}>
                  ๐‘ฅ เนเธเธฐเธเธณเน€เธเธทเนเธญเธ โ€” เนเธ”เนเนเธ•เนเธกเธ—เธฑเนเธเธเธนเน!
                </div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
                  เธเธธเธ“เนเธฅเธฐเน€เธเธทเนเธญเธเนเธ”เนเธฃเธฑเธ <strong style={{ color: "#F99D07" }}>+200 RoboCredits</strong> เธ•เนเธญเธเธ เน€เธกเธทเนเธญเน€เธเธทเนเธญเธเธชเธกเธฑเธเธฃเนเธฅเธฐเธเธญเธเธเธฅเธฒเธชเธเธฃเธฑเนเธเนเธฃเธ
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                  <div style={{
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10, padding: "10px 18px",
                    fontFamily: "'Kanit',sans-serif", fontWeight: 700, fontSize: 15, color: "#2FD463",
                    letterSpacing: 2
                  }}>{referralCode}</div>
                  <button onClick={handleCopy} style={{
                    background: copied ? "rgba(47,212,99,0.15)" : "rgba(255,255,255,0.07)",
                    border: "1px solid " + (copied ? "rgba(47,212,99,0.4)" : "rgba(255,255,255,0.15)"),
                    color: copied ? "#2FD463" : "rgba(255,255,255,0.7)",
                    padding: "10px 18px", borderRadius: 10, cursor: "pointer",
                    fontFamily: "'Kanit',sans-serif", fontSize: 13, fontWeight: 600,
                    transition: "all 0.2s"
                  }}>{copied ? "โ… เธเธฑเธ”เธฅเธญเธเนเธฅเนเธง" : "๐“ เธเธฑเธ”เธฅเธญเธ"}</button>
                  <button style={{
                    background: "#06C755", border: "none",
                    color: "#fff", padding: "10px 18px", borderRadius: 10, cursor: "pointer",
                    fontFamily: "'Kanit',sans-serif", fontSize: 13, fontWeight: 700
                  }}>๐’ฌ เนเธเธฃเนเธเนเธฒเธ LINE</button>
                </div>
              </div>
              <div style={{
                background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "16px 20px",
                minWidth: 140, textAlign: "center"
              }}>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 800, color: "#F99D07", fontSize: 28 }}>2</div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>เน€เธเธทเนเธญเธเธ—เธตเนเนเธเธฐเธเธณเนเธฅเนเธง</div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 700, color: "#2FD463", fontSize: 14, marginTop: 4 }}>+400 credits</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {/* Rewards store */}
              <div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 700, color: "#fff", fontSize: 16, marginBottom: 14 }}>
                  ๐’ RoboStore โ€” เนเธฅเธเธฃเธฒเธเธงเธฑเธฅ
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {rewards.map((r, i) => (
                    <div key={i} style={{
                      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 14, padding: "14px 16px",
                      display: "flex", alignItems: "center", gap: 12
                    }}>
                      <div style={{ fontSize: 24 }}>{r.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 600, color: "#fff", fontSize: 13 }}>{r.name}</div>
                        <div style={{
                          display: "inline-block", background: r.color + "20",
                          color: r.color, borderRadius: 100, padding: "1px 8px",
                          fontSize: 10, fontFamily: "'Kanit',sans-serif", marginTop: 3
                        }}>{r.type}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 700, color: "#F99D07", fontSize: 13 }}>
                          โญ {r.credits.toLocaleString()}
                        </div>
                        <button disabled={userCredits < r.credits} style={{
                          marginTop: 4, background: userCredits >= r.credits ? "linear-gradient(135deg,#F99D07,#FFD700)" : "rgba(255,255,255,0.05)",
                          border: "none", color: userCredits >= r.credits ? "#0a0c14" : "rgba(255,255,255,0.25)",
                          padding: "4px 12px", borderRadius: 6, cursor: userCredits >= r.credits ? "pointer" : "not-allowed",
                          fontFamily: "'Kanit',sans-serif", fontSize: 11, fontWeight: 700
                        }}>{userCredits >= r.credits ? "เนเธฅเธ" : "เธขเธฑเธเนเธกเนเธเธญ"}</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* History */}
              <div>
                <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 700, color: "#fff", fontSize: 16, marginBottom: 14 }}>
                  ๐“ เธเธฃเธฐเธงเธฑเธ•เธดเธเธฒเธฃเธชเธฐเธชเธก
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {history.map((h, i) => (
                    <div key={i} style={{
                      background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12, padding: "12px 14px",
                      display: "flex", alignItems: "center", gap: 12
                    }}>
                      <div style={{ fontSize: 18 }}>{h.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{h.desc}</div>
                        <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{h.date}</div>
                      </div>
                      <div style={{
                        fontFamily: "'Kanit',sans-serif", fontWeight: 700,
                        color: h.credits > 0 ? "#2FD463" : "#ff6b6b", fontSize: 14
                      }}>{h.credits > 0 ? "+" : ""}{h.credits}</div>
                    </div>
                  ))}
                </div>

                {/* How to earn */}
                <div style={{ marginTop: 18 }}>
                  <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 10 }}>
                    ๐’ก เธงเธดเธเธตเธชเธฐเธชเธก RoboCredits
                  </div>
                  {[
                    ["๐“…","เธเธญเธเนเธฅเธฐเน€เธเนเธฒเน€เธฃเธตเธขเธ","50 credits / เธเธฃเธฑเนเธ"],
                    ["๐‘ฅ","เนเธเธฐเธเธณเน€เธเธทเนเธญเธ","200 credits / เธเธ"],
                    ["๐","เธเนเธฒเธเธ”เนเธฒเธเนเธซเธกเนเนเธ Skill Tree","100โ€“500 credits"],
                    ["๐ฏ","เน€เธเนเธเธญเธดเธเธ•เธดเธ”เธ•เนเธญ 10 เธเธฃเธฑเนเธ","150 credits"],
                    ["๐ฅ","เธเธเธฐเธเธฒเธฃเนเธเนเธเธเธฑเธ","500โ€“2000 credits"],
                  ].map(([icon, label, val], i) => (
                    <div key={i} style={{
                      display: "flex", gap: 10, alignItems: "center",
                      padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.04)"
                    }}>
                      <span style={{ fontSize: 16 }}>{icon}</span>
                      <span style={{ fontFamily: "'Kanit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", flex: 1 }}>{label}</span>
                      <span style={{ fontFamily: "'Kanit',sans-serif", fontSize: 12, color: "#F99D07", fontWeight: 600 }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Not logged in */
          <div style={{ textAlign: "center", padding: "80px 24px" }}>
            <div style={{ fontSize: 72, marginBottom: 20 }}>โญ</div>
            <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 12 }}>
              เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเน€เธเธทเนเธญเธ”เธน RoboCredits
            </div>
            <p style={{ fontFamily: "'Kanit',sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 16, maxWidth: 420, margin: "0 auto 32px", lineHeight: 1.7 }}>
              เธชเธฐเธชเธกเนเธ•เนเธกเธเธฒเธเธเธฒเธฃเน€เธฃเธตเธขเธ เนเธเธฐเธเธณเน€เธเธทเนเธญเธ เนเธฅเธฐเธเธเธฐเธเธฒเธฃเนเธเนเธเธเธฑเธ เนเธฅเธเธเธญเธเธฃเธฒเธเธงเธฑเธฅเนเธฅเธฐเธชเนเธงเธเธฅเธ”เธเนเธฒเน€เธฃเธตเธขเธ
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
              {[
                { icon: "๐“…", label: "เน€เธฃเธตเธขเธ 1 เธเธฃเธฑเนเธ", credits: "+50" },
                { icon: "๐‘ฅ", label: "เนเธเธฐเธเธณเน€เธเธทเนเธญเธ", credits: "+200" },
                { icon: "๐", label: "เธเธเธฐเนเธเนเธเธเธฑเธ", credits: "+500" },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16, padding: "20px 24px", textAlign: "center", minWidth: 130
                }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                  <div style={{ fontFamily: "'Kanit',sans-serif", fontWeight: 800, color: "#F99D07", fontSize: 22 }}>{item.credits}</div>
                  <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{item.label}</div>
                </div>
              ))}
            </div>
            <button onClick={() => setPage("login")} style={{
              background: "linear-gradient(135deg,#F99D07,#FFD700)",
              border: "none", color: "#0a0c14", padding: "14px 36px",
              borderRadius: 12, cursor: "pointer",
              fontFamily: "'Kanit',sans-serif", fontWeight: 700, fontSize: 16,
              boxShadow: "0 8px 28px rgba(247,157,7,0.35)"
            }}>โญ เน€เธฃเธดเนเธกเธชเธฐเธชเธก RoboCredits</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ==================== AI COPILOT PAGE ====================
function AICopilotPage({ user, setPage }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "เธชเธงเธฑเธชเธ”เธตเธเธฃเธฑเธ! ๐ค– เธเธฑเธเธเธทเธญ RoboAI Copilot เธเธนเนเธเนเธงเธข Debug เนเธเนเธ”เนเธฅเธฐเธญเธญเธเนเธเธเธซเธธเนเธเธขเธเธ•เนเธเธญเธ BaanBot\n\nเธ–เธฒเธกเนเธ”เนเน€เธฅเธขเธเธฃเธฑเธ เน€เธเนเธ:\nโ€ข เนเธเนเธ” Python เธ—เธณเนเธกเนเธกเนเธ—เธณเธเธฒเธ?\nโ€ข เธเธฐเธญเธญเธเนเธเธเธเธฅเนเธเธขเธฑเธเนเธ?\nโ€ข เน€เธเธเน€เธเธญเธฃเน Ultrasonic เนเธเนเธขเธฑเธเนเธ?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [animIn, setAnimIn] = useState(false);
  const chatRef = useRef(null);
  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const quickPrompts = [
    "เนเธเนเธ” Python motor forward เนเธกเนเธ—เธณเธเธฒเธ เธเนเธงเธขเธ”เธนเนเธซเนเธซเธเนเธญเธข",
    "เน€เธเธเน€เธเธญเธฃเน Ultrasonic เธงเธฑเธ”เธฃเธฐเธขเธฐเธ—เธฒเธเธขเธฑเธเนเธ?",
    "เธญเธขเธฒเธเนเธซเนเธซเธธเนเธเธขเธเธ•เนเธซเธฅเธตเธเธชเธดเนเธเธเธตเธ”เธเธงเธฒเธเธญเธฑเธ•เนเธเธกเธฑเธ•เธด เธ—เธณเธขเธฑเธเนเธ?",
    "LEGO Mindstorms เธเธฑเธ Arduino เธ•เนเธฒเธเธเธฑเธเธขเธฑเธเนเธ?",
  ];

  const sendMessage = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput("");
    const newMessages = [...messages, { role: "user", text: msg }];
    setMessages(newMessages);
    setLoading(true);
    try {
      const res = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "copilot",
          messages: newMessages.map(m => ({ role: m.role, content: m.text }))
        })
      });
      const data = await res.json();
      const reply = data.content && data.content[0] ? data.content[0].text : "เธเธญเนเธ—เธฉเธเธฃเธฑเธ เธเธ“เธฐเธเธตเนเธฃเธฐเธเธเธกเธตเธเธฑเธเธซเธฒ เธเธฃเธธเธ“เธฒเธฅเธญเธเนเธซเธกเนเธญเธตเธเธเธฃเธฑเนเธ";
      setMessages([...newMessages, { role: "assistant", text: reply }]);
    } catch (e) {
      setMessages([...newMessages, { role: "assistant", text: "โ เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เน€เธเธทเนเธญเธกเธ•เนเธญ AI เนเธ”เนเธเธ“เธฐเธเธตเน เธเธฃเธธเธ“เธฒเธฅเธญเธเนเธซเธกเนเธ เธฒเธขเธซเธฅเธฑเธ" }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "linear-gradient(180deg,#060b16 0%,#0a0c14 100%)" }}>
      <div style={{
        maxWidth: 900, margin: "0 auto", padding: "40px 24px",
        opacity: animIn ? 1 : 0, transform: animIn ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)"
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
          <div style={{
            background: "linear-gradient(135deg,#882FF6,#37B6F6)",
            borderRadius: 14, padding: "10px 18px",
            fontFamily: "'Kanit',sans-serif", fontWeight: 800, fontSize: 22, color: "#fff"
          }}>๐ค– AI Copilot</div>
          <div style={{ fontFamily: "'Kanit',sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 14 }}>
            เธเธนเนเธเนเธงเธข Debug เนเธเนเธ”เนเธฅเธฐเธญเธญเธเนเธเธเธซเธธเนเธเธขเธเธ•เน
          </div>
        </div>
        <p style={{ fontFamily: "'Kanit',sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 20 }}>
          ๐’ก AI เธเธฐเธเนเธงเธขเธ•เธฑเนเธเธเธณเธ–เธฒเธกเธเธณเนเธ—เธเธเธฒเธฃเนเธซเนเธเธณเธ•เธญเธเธ•เธฃเธเน เน€เธเธทเนเธญเนเธซเนเธเธดเธ”เนเธเนเธเธฑเธเธซเธฒเธ”เนเธงเธขเธ•เธฑเธงเน€เธญเธ
        </p>

        {/* Chat area */}
        <div style={{
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(136,47,246,0.2)",
          borderRadius: 20, overflow: "hidden", marginBottom: 12
        }}>
          {/* Messages */}
          <div ref={chatRef} style={{
            height: 420, overflowY: "auto", padding: 20, display: "flex",
            flexDirection: "column", gap: 14
          }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                display: "flex", gap: 10,
                justifyContent: m.role === "user" ? "flex-end" : "flex-start"
              }}>
                {m.role === "assistant" && (
                  <div style={{
                    width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
                    background: "linear-gradient(135deg,#882FF6,#37B6F6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16
                  }}>๐ค–</div>
                )}
                <div style={{
                  maxWidth: "75%", padding: "12px 16px", borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  background: m.role === "user"
                    ? "linear-gradient(135deg,#882FF6,#37B6F6)"
                    : "rgba(255,255,255,0.05)",
                  border: m.role === "assistant" ? "1px solid rgba(255,255,255,0.08)" : "none",
                  fontFamily: "'Kanit',sans-serif", fontSize: 14,
                  color: "#fff", lineHeight: 1.6,
                  whiteSpace: "pre-wrap"
                }}>{m.text}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: "linear-gradient(135deg,#882FF6,#37B6F6)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16
                }}>๐ค–</div>
                <div style={{
                  padding: "12px 20px", borderRadius: "18px 18px 18px 4px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", gap: 6, alignItems: "center"
                }}>
                  {[0,1,2].map(j => (
                    <div key={j} style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: "#882FF6",
                      animation: "pulse " + (0.6 + j * 0.2) + "s ease-in-out infinite"
                    }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{
            padding: "14px 16px", borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex", gap: 10, alignItems: "center"
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
              placeholder="เธ–เธฒเธกเน€เธฃเธทเนเธญเธเนเธเนเธ”เธซเธฃเธทเธญเธซเธธเนเธเธขเธเธ•เนเนเธ”เนเน€เธฅเธข..."
              style={{
                flex: 1, background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "10px 16px",
                fontFamily: "'Kanit',sans-serif", fontSize: 14, color: "#fff",
                outline: "none"
              }}
            />
            <button onClick={() => sendMessage()} disabled={!input.trim() || loading} style={{
              background: input.trim() && !loading ? "linear-gradient(135deg,#882FF6,#37B6F6)" : "rgba(255,255,255,0.08)",
              border: "none", color: input.trim() && !loading ? "#fff" : "rgba(255,255,255,0.3)",
              width: 44, height: 44, borderRadius: 12, cursor: input.trim() && !loading ? "pointer" : "not-allowed",
              fontSize: 18, flexShrink: 0
            }}>โค</button>
          </div>
        </div>

        {/* Quick prompts */}
        <div>
          <div style={{ fontFamily: "'Kanit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", marginBottom: 10 }}>
            ๐’ฌ เธเธณเธ–เธฒเธกเธขเธญเธ”เธเธดเธขเธก
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {quickPrompts.map((q, i) => (
              <button key={i} onClick={() => sendMessage(q)} style={{
                background: "rgba(136,47,246,0.08)", border: "1px solid rgba(136,47,246,0.2)",
                color: "rgba(255,255,255,0.6)", padding: "6px 14px", borderRadius: 100,
                fontFamily: "'Kanit',sans-serif", fontSize: 12, cursor: "pointer",
                transition: "all 0.2s"
              }}>{q}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// ==================== ADMIN: Skill Tree Manager ====================
function SkillTreeAdminPanel({ T, CS }) {
  const flattenTree = (node, depth) => {
    const results = [{ ...node, depth, hasChildren: node.children && node.children.length > 0 }];
    if (node.children) {
      node.children.forEach(c => results.push(...flattenTree(c, depth + 1)));
    }
    return results;
  };
  const [nodes, setNodes] = useState(flattenTree(SKILL_TREE_DATA, 0));
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [saveMsg, setSaveMsg] = useState("");

  const statusOpts = ["locked","active","completed"];
  const statusColor = { completed: "#2FD463", active: "#F99D07", locked: "rgba(255,255,255,0.3)" };
  const colorOpts = ["#37B6F6","#2FD463","#F99D07","#882FF6","#FF6B6B","#4ECDC4"];

  const startEdit = (node) => {
    setEditing(node.id);
    setEditForm({ label: node.label, icon: node.icon, color: node.color, status: node.status, xp: node.xp, desc: node.desc });
  };

  const saveEdit = (id) => {
    setNodes(nodes.map(n => n.id === id ? { ...n, ...editForm, xp: parseInt(editForm.xp) || n.xp } : n));
    setEditing(null);
    setSaveMsg("โ… เธเธฑเธเธ—เธถเธเธชเธณเน€เธฃเนเธ");
    setTimeout(() => setSaveMsg(""), 2500);
  };

  const inp = (field, type) => (
    <input
      type={type || "text"}
      value={editForm[field] || ""}
      onChange={e => setEditForm({ ...editForm, [field]: e.target.value })}
      style={{
        background: T.bgSecondary, border: "1px solid " + T.surfaceBorder,
        borderRadius: 8, padding: "7px 12px", color: T.text,
        fontFamily: T.fontBody, fontSize: 13, width: "100%", outline: "none"
      }}
    />
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div style={{ ...CS, fontWeight: 800, color: T.text, fontSize: 16 }}>๐—บ๏ธ เธเธฑเธ”เธเธฒเธฃ Skill Tree</div>
        {saveMsg && <div style={{ ...CS, fontSize: 13, color: "#2FD463", fontWeight: 700 }}>{saveMsg}</div>}
      </div>
      <p style={{ ...CS, fontSize: 13, color: T.textMuted, marginBottom: 16 }}>
        เนเธเนเนเธเธชเธ–เธฒเธเธฐ, XP, เนเธฅเธฐเธฃเธฒเธขเธฅเธฐเน€เธญเธตเธขเธ”เธเธญเธเนเธ•เนเธฅเธฐเนเธซเธเธ”เนเธเน€เธชเนเธเธ—เธฒเธเธเธฒเธฃเน€เธฃเธตเธขเธเธฃเธนเน
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {nodes.map(node => (
          <div key={node.id} style={{
            background: T.surface, border: "1px solid " + T.surfaceBorder,
            borderRadius: 14, overflow: "hidden"
          }}>
            {/* Row summary */}
            <div style={{
              padding: "12px 16px", display: "flex", alignItems: "center", gap: 12,
              paddingLeft: (node.depth * 20 + 16) + "px"
            }}>
              <div style={{ fontSize: 20, minWidth: 28, textAlign: "center" }}>{node.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 14 }}>{node.label}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 3, flexWrap: "wrap" }}>
                  <span style={{
                    background: statusColor[node.status] + "20", color: statusColor[node.status],
                    borderRadius: 100, padding: "1px 10px", fontSize: 11, fontFamily: T.fontBody, fontWeight: 700
                  }}>{node.status}</span>
                  <span style={{ ...CS, fontSize: 11, color: T.textMuted }}>โก {node.xp.toLocaleString()} XP</span>
                  {node.hasChildren && <span style={{ ...CS, fontSize: 11, color: T.textMuted }}>โ€ข เธกเธตเธชเธฒเธเธฒเธขเนเธญเธข</span>}
                </div>
              </div>
              <button onClick={() => editing === node.id ? setEditing(null) : startEdit(node)} style={{
                background: editing === node.id ? "rgba(255,50,50,0.1)" : T.cardBg,
                border: "1px solid " + (editing === node.id ? "rgba(255,50,50,0.3)" : T.cardBorder),
                color: editing === node.id ? "#ff6b6b" : T.primary,
                padding: "5px 14px", borderRadius: 8, cursor: "pointer",
                ...CS, fontSize: 12, fontWeight: 600
              }}>{editing === node.id ? "เธขเธเน€เธฅเธดเธ" : "โ๏ธ เนเธเนเนเธ"}</button>
            </div>

            {/* Edit form */}
            {editing === node.id && (
              <div style={{
                padding: "16px 20px", borderTop: "1px solid " + T.surfaceBorder,
                background: T.bgSecondary + "80"
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div>
                    <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 6 }}>เธเธทเนเธญเนเธซเธเธ”</div>
                    {inp("label")}
                  </div>
                  <div>
                    <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 6 }}>เนเธญเธเธญเธ (Emoji)</div>
                    {inp("icon")}
                  </div>
                  <div>
                    <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 6 }}>เธชเธ–เธฒเธเธฐ</div>
                    <select
                      value={editForm.status}
                      onChange={e => setEditForm({ ...editForm, status: e.target.value })}
                      style={{
                        background: T.bgSecondary, border: "1px solid " + T.surfaceBorder,
                        borderRadius: 8, padding: "7px 12px", color: T.text,
                        fontFamily: T.fontBody, fontSize: 13, width: "100%", outline: "none"
                      }}
                    >
                      {statusOpts.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 6 }}>XP เธ—เธตเนเนเธ”เนเธฃเธฑเธ</div>
                    {inp("xp", "number")}
                  </div>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 6 }}>เธเธณเธญเธเธดเธเธฒเธข</div>
                  {inp("desc")}
                </div>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 8 }}>เธชเธตเนเธซเธเธ”</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {colorOpts.map(c => (
                      <div key={c} onClick={() => setEditForm({ ...editForm, color: c })} style={{
                        width: 28, height: 28, borderRadius: "50%", background: c,
                        cursor: "pointer", border: editForm.color === c ? "3px solid #fff" : "3px solid transparent",
                        boxShadow: editForm.color === c ? "0 0 8px " + c : "none",
                        transition: "all 0.15s"
                      }} />
                    ))}
                  </div>
                </div>
                <button onClick={() => saveEdit(node.id)} style={{
                  background: T.btnGrad, border: "none", color: T.primaryDark,
                  padding: "9px 22px", borderRadius: 10, cursor: "pointer",
                  ...CS, fontWeight: 700, fontSize: 13
                }}>๐’พ เธเธฑเธเธ—เธถเธ</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== ADMIN: Tournament Manager ====================
function TournamentAdminPanel({ T, CS }) {
  const [tournaments, setTournaments] = useState(TOURNAMENTS);
  const [editing, setEditing] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const emptyForm = { name:"", org:"", icon:"๐", target:"", color:"#F99D07", date:"", venue:"", status:"upcoming", prize:"", desc:"" };
  const [form, setForm] = useState(emptyForm);

  const statusOpts = [["upcoming","เน€เธฃเนเธงเน เธเธตเน"],["open","เน€เธเธดเธ”เธฃเธฑเธเธชเธกเธฑเธเธฃ"],["past","เธเนเธฒเธเนเธเนเธฅเนเธง"]];
  const statusColor = { past:"rgba(255,255,255,0.35)", upcoming:"#37B6F6", open:"#2FD463" };
  const colorOpts = ["#F99D07","#37B6F6","#2FD463","#882FF6","#FF6B6B","#4ECDC4"];

  const startEdit = (t) => { setEditing(t.id); setForm({ ...t }); setShowAdd(false); };
  const cancelEdit = () => { setEditing(null); setForm(emptyForm); };

  const saveEdit = () => {
    if (editing) {
      setTournaments(tournaments.map(t => t.id === editing ? { ...form, id: editing } : t));
    } else {
      setTournaments([...tournaments, { ...form, id: Date.now() }]);
    }
    setEditing(null); setShowAdd(false); setForm(emptyForm);
    setSaveMsg("โ… เธเธฑเธเธ—เธถเธเธชเธณเน€เธฃเนเธ");
    setTimeout(() => setSaveMsg(""), 2500);
  };

  const deleteTx = (id) => setTournaments(tournaments.filter(t => t.id !== id));

  const inp = (field, label, type) => (
    <div>
      <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 5 }}>{label}</div>
      <input type={type || "text"} value={form[field] || ""} onChange={e => setForm({ ...form, [field]: e.target.value })}
        style={{
          background: T.bgSecondary, border: "1px solid " + T.surfaceBorder,
          borderRadius: 8, padding: "7px 12px", color: T.text,
          fontFamily: T.fontBody, fontSize: 13, width: "100%", outline: "none"
        }}
      />
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div style={{ ...CS, fontWeight: 800, color: T.text, fontSize: 16 }}>๐ เธเธฑเธ”เธเธฒเธฃเธเธฒเธฃเนเธเนเธเธเธฑเธ</div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {saveMsg && <span style={{ ...CS, fontSize: 13, color: "#2FD463", fontWeight: 700 }}>{saveMsg}</span>}
          <button onClick={() => { setShowAdd(!showAdd); cancelEdit(); }} style={{
            background: showAdd ? "rgba(255,50,50,0.1)" : T.btnGrad,
            border: showAdd ? "1px solid rgba(255,50,50,0.3)" : "none",
            color: showAdd ? "#ff6b6b" : T.primaryDark,
            padding: "8px 18px", borderRadius: 10, cursor: "pointer",
            ...CS, fontWeight: 700, fontSize: 13
          }}>{showAdd ? "โ• เธขเธเน€เธฅเธดเธ" : "+ เน€เธเธดเนเธกเธเธฒเธฃเนเธเนเธเธเธฑเธ"}</button>
        </div>
      </div>

      {/* Add / Edit Form */}
      {(showAdd || editing) && (
        <div style={{
          background: T.surface, border: "1px solid " + T.surfaceBorder,
          borderRadius: 16, padding: "20px 22px", marginBottom: 18
        }}>
          <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 15, marginBottom: 14 }}>
            {editing ? "โ๏ธ เนเธเนเนเธเธเธฒเธฃเนเธเนเธเธเธฑเธ" : "โ• เน€เธเธดเนเธกเธเธฒเธฃเนเธเนเธเธเธฑเธเนเธซเธกเน"}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            {inp("name", "เธเธทเนเธญเธเธฒเธฃเนเธเนเธเธเธฑเธ")}
            {inp("org", "เธญเธเธเนเธเธฃเธเธฑเธ”")}
            {inp("target", "เธเธฅเธธเนเธกเน€เธเนเธฒเธซเธกเธฒเธข")}
            {inp("date", "เธงเธฑเธเธ—เธตเน")}
            {inp("venue", "เธชเธ–เธฒเธเธ—เธตเน")}
            {inp("prize", "เธฃเธฒเธเธงเธฑเธฅ")}
          </div>
          <div style={{ marginBottom: 12 }}>
            {inp("desc", "เธเธณเธญเธเธดเธเธฒเธข")}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
            <div>
              <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 5 }}>เธชเธ–เธฒเธเธฐ</div>
              <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}
                style={{
                  background: T.bgSecondary, border: "1px solid " + T.surfaceBorder,
                  borderRadius: 8, padding: "7px 12px", color: T.text,
                  fontFamily: T.fontBody, fontSize: 13, width: "100%", outline: "none"
                }}>
                {statusOpts.map(([val,lbl]) => <option key={val} value={val}>{lbl}</option>)}
              </select>
            </div>
            <div>
              <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 8 }}>เนเธญเธเธญเธ</div>
              {inp("icon")}
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 8 }}>เธชเธตเธเธฒเธฃเนเธ”</div>
            <div style={{ display: "flex", gap: 8 }}>
              {colorOpts.map(c => (
                <div key={c} onClick={() => setForm({ ...form, color: c })} style={{
                  width: 28, height: 28, borderRadius: "50%", background: c, cursor: "pointer",
                  border: form.color === c ? "3px solid #fff" : "3px solid transparent",
                  boxShadow: form.color === c ? "0 0 8px " + c : "none", transition: "all 0.15s"
                }} />
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={saveEdit} style={{
              background: T.btnGrad, border: "none", color: T.primaryDark,
              padding: "9px 24px", borderRadius: 10, cursor: "pointer",
              ...CS, fontWeight: 700, fontSize: 13
            }}>๐’พ เธเธฑเธเธ—เธถเธ</button>
            <button onClick={cancelEdit} style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid " + T.surfaceBorder,
              color: T.textMuted, padding: "9px 20px", borderRadius: 10, cursor: "pointer",
              ...CS, fontSize: 13
            }}>เธขเธเน€เธฅเธดเธ</button>
          </div>
        </div>
      )}

      {/* Tournament list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {tournaments.map(t => (
          <div key={t.id} style={{
            background: T.surface, border: "1px solid " + T.surfaceBorder,
            borderRadius: 14, padding: "14px 18px",
            display: "flex", alignItems: "center", gap: 14
          }}>
            <div style={{ fontSize: 24, minWidth: 32 }}>{t.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 14 }}>{t.name}</div>
              <div style={{ display: "flex", gap: 10, marginTop: 4, flexWrap: "wrap" }}>
                <span style={{
                  background: statusColor[t.status] + "20", color: statusColor[t.status],
                  borderRadius: 100, padding: "1px 10px", fontSize: 11, fontFamily: T.fontBody, fontWeight: 700
                }}>{t.status === "open" ? "เน€เธเธดเธ”เธฃเธฑเธเธชเธกเธฑเธเธฃ" : t.status === "upcoming" ? "เน€เธฃเนเธงเน เธเธตเน" : "เธเนเธฒเธเนเธเนเธฅเนเธง"}</span>
                <span style={{ ...CS, fontSize: 12, color: T.textMuted }}>๐“… {t.date} โ€ข ๐“ {t.venue}</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => startEdit(t)} style={{
                background: T.cardBg, border: "1px solid " + T.cardBorder,
                color: T.primary, padding: "5px 12px", borderRadius: 8, cursor: "pointer",
                ...CS, fontSize: 12
              }}>โ๏ธ เนเธเนเนเธ</button>
              <button onClick={() => deleteTx(t.id)} style={{
                background: "rgba(255,50,50,0.08)", border: "1px solid rgba(255,50,50,0.2)",
                color: "#ff6b6b", padding: "5px 10px", borderRadius: 8, cursor: "pointer",
                ...CS, fontSize: 12
              }}>๐—‘</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== ADMIN: RoboCredits Manager ====================
function RoboCreditAdminPanel({ T, CS }) {
  const initialRewards = [
    { id: 1, icon: "๐“", name: "เธชเนเธงเธเธฅเธ”เธเนเธฒเน€เธฃเธตเธขเธ 10%", credits: 500, type: "Digital", active: true },
    { id: 2, icon: "๐ค–", name: "เน€เธเธเน€เธเธญเธฃเน Ultrasonic", credits: 800, type: "Physical", active: true },
    { id: 3, icon: "๐”", name: "เธเธธเธ” Arduino Starter Kit", credits: 1200, type: "Physical", active: true },
    { id: 4, icon: "๐…", name: "เน€เธซเธฃเธตเธขเธ Badge เธเธดเน€เธจเธฉ", credits: 300, type: "Digital", active: true },
    { id: 5, icon: "๐“", name: "เธซเธเธฑเธเธชเธทเธญ Coding เธชเธณเธซเธฃเธฑเธเน€เธ”เนเธ", credits: 600, type: "Physical", active: true },
    { id: 6, icon: "๐ฎ", name: "เธ•เนเธญเธญเธฒเธขเธธเธชเธกเธฒเธเธดเธ 1 เน€เธ”เธทเธญเธ", credits: 1500, type: "Digital", active: true },
  ];
  const [rewards, setRewards] = useState(initialRewards);
  const [editing, setEditing] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const emptyForm = { icon: "๐", name: "", credits: "", type: "Digital", active: true };
  const [form, setForm] = useState(emptyForm);

  const startEdit = (r) => { setEditing(r.id); setForm({ ...r }); setShowAdd(false); };
  const cancelEdit = () => { setEditing(null); setForm(emptyForm); };

  const saveItem = () => {
    if (editing) {
      setRewards(rewards.map(r => r.id === editing ? { ...form, id: editing, credits: parseInt(form.credits) || 0 } : r));
    } else {
      setRewards([...rewards, { ...form, id: Date.now(), credits: parseInt(form.credits) || 0 }]);
    }
    setEditing(null); setShowAdd(false); setForm(emptyForm);
    setSaveMsg("โ… เธเธฑเธเธ—เธถเธเธชเธณเน€เธฃเนเธ");
    setTimeout(() => setSaveMsg(""), 2500);
  };

  const toggleActive = (id) => setRewards(rewards.map(r => r.id === id ? { ...r, active: !r.active } : r));
  const deleteReward = (id) => setRewards(rewards.filter(r => r.id !== id));

  const inp = (field, label, type) => (
    <div>
      <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 5 }}>{label}</div>
      <input type={type || "text"} value={form[field] || ""} onChange={e => setForm({ ...form, [field]: e.target.value })}
        style={{
          background: T.bgSecondary, border: "1px solid " + T.surfaceBorder,
          borderRadius: 8, padding: "7px 12px", color: T.text,
          fontFamily: T.fontBody, fontSize: 13, width: "100%", outline: "none"
        }}
      />
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div style={{ ...CS, fontWeight: 800, color: T.text, fontSize: 16 }}>โญ เธเธฑเธ”เธเธฒเธฃ RoboCredits & Rewards</div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {saveMsg && <span style={{ ...CS, fontSize: 13, color: "#2FD463", fontWeight: 700 }}>{saveMsg}</span>}
          <button onClick={() => { setShowAdd(!showAdd); cancelEdit(); }} style={{
            background: showAdd ? "rgba(255,50,50,0.1)" : T.btnGrad,
            border: showAdd ? "1px solid rgba(255,50,50,0.3)" : "none",
            color: showAdd ? "#ff6b6b" : T.primaryDark,
            padding: "8px 18px", borderRadius: 10, cursor: "pointer",
            ...CS, fontWeight: 700, fontSize: 13
          }}>{showAdd ? "โ• เธขเธเน€เธฅเธดเธ" : "+ เน€เธเธดเนเธกเธฃเธฒเธเธงเธฑเธฅ"}</button>
        </div>
      </div>

      {/* Add/Edit form */}
      {(showAdd || editing) && (
        <div style={{
          background: T.surface, border: "1px solid " + T.surfaceBorder,
          borderRadius: 16, padding: "20px 22px", marginBottom: 18
        }}>
          <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 15, marginBottom: 14 }}>
            {editing ? "โ๏ธ เนเธเนเนเธเธฃเธฒเธเธงเธฑเธฅ" : "โ• เน€เธเธดเนเธกเธฃเธฒเธเธงเธฑเธฅเนเธซเธกเน"}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            {inp("icon", "เนเธญเธเธญเธ (Emoji)")}
            {inp("name", "เธเธทเนเธญเธฃเธฒเธเธงเธฑเธฅ")}
            {inp("credits", "Credits เธ—เธตเนเธ•เนเธญเธเนเธเน", "number")}
            <div>
              <div style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 5 }}>เธเธฃเธฐเน€เธ เธ—</div>
              <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
                style={{
                  background: T.bgSecondary, border: "1px solid " + T.surfaceBorder,
                  borderRadius: 8, padding: "7px 12px", color: T.text,
                  fontFamily: T.fontBody, fontSize: 13, width: "100%", outline: "none"
                }}>
                <option value="Digital">Digital</option>
                <option value="Physical">Physical</option>
              </select>
            </div>
          </div>
          <div style={{ marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ ...CS, fontSize: 13, color: T.text }}>เนเธชเธ”เธเนเธ RoboStore:</div>
            <div onClick={() => setForm({ ...form, active: !form.active })} style={{
              width: 44, height: 24, borderRadius: 12,
              background: form.active ? "#2FD463" : "rgba(255,255,255,0.1)",
              position: "relative", cursor: "pointer", transition: "background 0.2s"
            }}>
              <div style={{
                position: "absolute", top: 3,
                left: form.active ? 22 : 3,
                width: 18, height: 18, borderRadius: "50%", background: "#fff",
                transition: "left 0.2s"
              }} />
            </div>
            <span style={{ ...CS, fontSize: 12, color: T.textMuted }}>{form.active ? "เน€เธเธดเธ”เนเธเนเธเธฒเธ" : "เธเธดเธ”เนเธเนเธเธฒเธ"}</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={saveItem} style={{
              background: T.btnGrad, border: "none", color: T.primaryDark,
              padding: "9px 24px", borderRadius: 10, cursor: "pointer",
              ...CS, fontWeight: 700, fontSize: 13
            }}>๐’พ เธเธฑเธเธ—เธถเธ</button>
            <button onClick={cancelEdit} style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid " + T.surfaceBorder,
              color: T.textMuted, padding: "9px 20px", borderRadius: 10, cursor: "pointer",
              ...CS, fontSize: 13
            }}>เธขเธเน€เธฅเธดเธ</button>
          </div>
        </div>
      )}

      {/* Rewards list */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 10, marginBottom: 28 }}>
        {rewards.map(r => (
          <div key={r.id} style={{
            background: T.surface, border: "1px solid " + (r.active ? T.surfaceBorder : "rgba(255,255,255,0.04)"),
            borderRadius: 14, padding: "14px 16px", opacity: r.active ? 1 : 0.5
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ fontSize: 24 }}>{r.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 13 }}>{r.name}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
                  <span style={{ ...CS, fontSize: 11, color: "#F99D07", fontWeight: 700 }}>โญ {r.credits.toLocaleString()}</span>
                  <span style={{ background: "rgba(55,182,246,0.15)", color: "#37B6F6", borderRadius: 100, padding: "0px 7px", fontSize: 10, fontFamily: T.fontBody }}>{r.type}</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => toggleActive(r.id)} style={{
                flex: 1, background: r.active ? "rgba(255,50,50,0.08)" : "rgba(47,212,99,0.1)",
                border: "1px solid " + (r.active ? "rgba(255,50,50,0.2)" : "rgba(47,212,99,0.3)"),
                color: r.active ? "#ff6b6b" : "#2FD463",
                padding: "5px 0", borderRadius: 8, cursor: "pointer",
                ...CS, fontSize: 11, fontWeight: 700
              }}>{r.active ? "เธเธดเธ”เธเธฒเธฃเนเธชเธ”เธ" : "เน€เธเธดเธ”เธเธฒเธฃเนเธชเธ”เธ"}</button>
              <button onClick={() => startEdit(r)} style={{
                background: T.cardBg, border: "1px solid " + T.cardBorder,
                color: T.primary, padding: "5px 10px", borderRadius: 8, cursor: "pointer",
                ...CS, fontSize: 11
              }}>โ๏ธ</button>
              <button onClick={() => deleteReward(r.id)} style={{
                background: "rgba(255,50,50,0.08)", border: "1px solid rgba(255,50,50,0.2)",
                color: "#ff6b6b", padding: "5px 10px", borderRadius: 8, cursor: "pointer",
                ...CS, fontSize: 11
              }}>๐—‘</button>
            </div>
          </div>
        ))}
      </div>

      {/* Earning rules section */}
      <div style={{
        background: T.surface, border: "1px solid " + T.surfaceBorder,
        borderRadius: 16, padding: "18px 20px"
      }}>
        <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 15, marginBottom: 14 }}>
          ๐’ก เธเธเธเธฒเธฃเธชเธฐเธชเธก Credits (เนเธชเธ”เธเนเธเธซเธเนเธฒ RoboCredits)
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            ["๐“…", "เธเธญเธเนเธฅเธฐเน€เธเนเธฒเน€เธฃเธตเธขเธ 1 เธเธฃเธฑเนเธ", "50 credits"],
            ["๐‘ฅ", "เนเธเธฐเธเธณเน€เธเธทเนเธญเธเนเธฅเธฐเธชเธกเธฑเธเธฃเธเธฃเธฑเนเธเนเธฃเธ", "200 credits / เธเธ"],
            ["๐", "เธเนเธฒเธเธ”เนเธฒเธเนเธซเธกเนเนเธ Skill Tree", "100โ€“500 credits"],
            ["๐ฏ", "เน€เธเนเธเธญเธดเธเธเธฃเธ 10 เธเธฃเธฑเนเธเธ•เธดเธ”เธ•เนเธญเธเธฑเธ", "150 credits"],
            ["๐ฅ", "เธเธเธฐเธเธฒเธฃเนเธเนเธเธเธฑเธ", "500โ€“2,000 credits"],
          ].map(([icon, label, val], i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "8px 12px", background: T.bgSecondary + "80",
              borderRadius: 10
            }}>
              <span style={{ fontSize: 16, minWidth: 20 }}>{icon}</span>
              <span style={{ ...CS, fontSize: 13, color: T.text, flex: 1 }}>{label}</span>
              <span style={{ ...CS, fontSize: 12, color: "#F99D07", fontWeight: 700, background: "rgba(247,157,7,0.12)", borderRadius: 6, padding: "2px 10px" }}>{val}</span>
            </div>
          ))}
        </div>
        <p style={{ ...CS, fontSize: 12, color: T.textMuted, marginTop: 12 }}>
          * เธเธเธเธฒเธฃเธชเธฐเธชเธกเธเธตเนเนเธชเธ”เธเน€เธเธทเนเธญ reference โ€” เธเธฒเธฃเน€เธเธทเนเธญเธกเธ•เนเธญเธเธฑเธ Supabase เธเธฐเธ—เธณเนเธซเน credit เธญเธฑเธเน€เธ”เธ•เธญเธฑเธ•เนเธเธกเธฑเธ•เธด
        </p>
      </div>
    </div>
  );
}

// ==================== ADMIN: AI Copilot Settings ====================
function AICopilotAdminPanel({ T, CS }) {
  const defaultPrompt = "เธเธธเธ“เธเธทเธญ RoboAI Copilot เธเธนเนเธเนเธงเธขเธชเธญเธเธซเธธเนเธเธขเธเธ•เนเนเธฅเธฐเน€เธเธตเธขเธเนเธเธฃเนเธเธฃเธกเธเธญเธ BaanBot Chanthaburi เธ•เธญเธเน€เธเนเธเธ เธฒเธฉเธฒเนเธ—เธข เน€เธเนเธเธเธฒเธฃเธ•เธฑเนเธเธเธณเธ–เธฒเธกเธเธณ (Scaffolded Questions) เน€เธเธทเนเธญเนเธซเนเน€เธ”เนเธเธเนเธเธซเธฒเธเธณเธ•เธญเธเธ”เนเธงเธขเธ•เธฑเธงเน€เธญเธ เนเธกเนเนเธซเนเธเธณเธ•เธญเธเธ•เธฃเธเน เนเธ•เนเธเนเธงเธข debug เนเธฅเธฐเนเธเธฐเธเธณเธ—เธดเธจเธ—เธฒเธ เนเธเนเธ เธฒเธฉเธฒเธเนเธฒเธข เน€เธเนเธเธเธฑเธเน€เธญเธ เน€เธซเธกเธฒเธฐเธชเธณเธซเธฃเธฑเธเน€เธ”เนเธเธญเธฒเธขเธธ 8-16 เธเธต";
  const defaultQuicks = [
    "เนเธเนเธ” Python motor forward เนเธกเนเธ—เธณเธเธฒเธ เธเนเธงเธขเธ”เธนเนเธซเนเธซเธเนเธญเธข",
    "เน€เธเธเน€เธเธญเธฃเน Ultrasonic เธงเธฑเธ”เธฃเธฐเธขเธฐเธ—เธฒเธเธขเธฑเธเนเธ?",
    "เธญเธขเธฒเธเนเธซเนเธซเธธเนเธเธขเธเธ•เนเธซเธฅเธตเธเธชเธดเนเธเธเธตเธ”เธเธงเธฒเธเธญเธฑเธ•เนเธเธกเธฑเธ•เธด เธ—เธณเธขเธฑเธเนเธ?",
    "LEGO Mindstorms เธเธฑเธ Arduino เธ•เนเธฒเธเธเธฑเธเธขเธฑเธเนเธ?",
  ];
  const [sysPrompt, setSysPrompt] = useState(defaultPrompt);
  const [quicks, setQuicks] = useState(defaultQuicks);
  const [newQuick, setNewQuick] = useState("");
  const [saveMsg, setSaveMsg] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("เธชเธงเธฑเธชเธ”เธตเธเธฃเธฑเธ! ๐ค– เธเธฑเธเธเธทเธญ RoboAI Copilot เธเธนเนเธเนเธงเธข Debug เนเธเนเธ”เนเธฅเธฐเธญเธญเธเนเธเธเธซเธธเนเธเธขเธเธ•เนเธเธญเธ BaanBot");

  const save = () => {
    setSaveMsg("โ… เธเธฑเธเธ—เธถเธเธเธฒเธฃเธ•เธฑเนเธเธเนเธฒเธชเธณเน€เธฃเนเธ");
    setTimeout(() => setSaveMsg(""), 2500);
  };

  const addQuick = () => {
    if (!newQuick.trim()) return;
    setQuicks([...quicks, newQuick.trim()]);
    setNewQuick("");
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div style={{ ...CS, fontWeight: 800, color: T.text, fontSize: 16 }}>๐ค– เธ•เธฑเนเธเธเนเธฒ AI Copilot</div>
        {saveMsg && <span style={{ ...CS, fontSize: 13, color: "#2FD463", fontWeight: 700 }}>{saveMsg}</span>}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* System Prompt */}
        <div style={{ background: T.surface, border: "1px solid " + T.surfaceBorder, borderRadius: 16, padding: "18px 20px" }}>
          <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 14, marginBottom: 4 }}>๐“ System Prompt (เธเธธเธเธฅเธดเธเธเธญเธ AI)</div>
          <p style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 12 }}>
            เธเธณเธซเธเธ”เธเธคเธ•เธดเธเธฃเธฃเธกเนเธฅเธฐเธเธธเธเธฅเธดเธเธเธญเธ AI Copilot เน€เธกเธทเนเธญเธ•เธญเธเธเธฑเธเน€เธฃเธตเธขเธ เธชเนเธ prompt เธเธตเนเธ—เธธเธเธเธฃเธฑเนเธเธ—เธตเนเธกเธตเธเธฒเธฃเธชเธเธ—เธเธฒ
          </p>
          <textarea
            value={sysPrompt}
            onChange={e => setSysPrompt(e.target.value)}
            rows={5}
            style={{
              width: "100%", background: T.bgSecondary, border: "1px solid " + T.surfaceBorder,
              borderRadius: 10, padding: "12px 14px", color: T.text,
              fontFamily: T.fontBody, fontSize: 13, outline: "none", resize: "vertical", lineHeight: 1.6
            }}
          />
          <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
            <button onClick={() => setSysPrompt(defaultPrompt)} style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid " + T.surfaceBorder,
              color: T.textMuted, padding: "6px 14px", borderRadius: 8, cursor: "pointer",
              ...CS, fontSize: 12
            }}>โบ Reset default</button>
          </div>
        </div>

        {/* Welcome message */}
        <div style={{ background: T.surface, border: "1px solid " + T.surfaceBorder, borderRadius: 16, padding: "18px 20px" }}>
          <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 14, marginBottom: 4 }}>๐‘ เธเนเธญเธเธงเธฒเธกเธ•เนเธญเธเธฃเธฑเธ</div>
          <p style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 10 }}>
            เธเนเธญเธเธงเธฒเธกเธ—เธตเน AI เธชเนเธเนเธซเนเธเธฑเธเน€เธฃเธตเธขเธเน€เธกเธทเนเธญเน€เธเธดเธ”เธซเธเนเธฒ AI Copilot เธเธฃเธฑเนเธเนเธฃเธ
          </p>
          <textarea
            value={welcomeMsg}
            onChange={e => setWelcomeMsg(e.target.value)}
            rows={3}
            style={{
              width: "100%", background: T.bgSecondary, border: "1px solid " + T.surfaceBorder,
              borderRadius: 10, padding: "10px 14px", color: T.text,
              fontFamily: T.fontBody, fontSize: 13, outline: "none", resize: "vertical", lineHeight: 1.6
            }}
          />
        </div>

        {/* Quick prompts */}
        <div style={{ background: T.surface, border: "1px solid " + T.surfaceBorder, borderRadius: 16, padding: "18px 20px" }}>
          <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 14, marginBottom: 4 }}>๐’ฌ Quick Prompts (เธเธณเธ–เธฒเธกเธขเธญเธ”เธเธดเธขเธก)</div>
          <p style={{ ...CS, fontSize: 12, color: T.textMuted, marginBottom: 14 }}>
            เธเธธเนเธกเธฅเธฑเธ”เนเธเธซเธเนเธฒ AI Copilot เธ—เธตเนเธเนเธงเธขเนเธซเนเธเธฑเธเน€เธฃเธตเธขเธเน€เธฃเธดเนเธกเธ–เธฒเธกเธเธณเธ–เธฒเธกเนเธ”เนเธเนเธฒเธขเธเธถเนเธ
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
            {quicks.map((q, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                background: T.bgSecondary + "80", borderRadius: 10, padding: "8px 12px"
              }}>
                <div style={{ ...CS, fontSize: 13, color: T.text, flex: 1 }}>{q}</div>
                <button onClick={() => setQuicks(quicks.filter((_, j) => j !== i))} style={{
                  background: "rgba(255,50,50,0.1)", border: "1px solid rgba(255,50,50,0.2)",
                  color: "#ff6b6b", padding: "3px 8px", borderRadius: 6, cursor: "pointer",
                  ...CS, fontSize: 11
                }}>เธฅเธ</button>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              value={newQuick}
              onChange={e => setNewQuick(e.target.value)}
              onKeyDown={e => e.key === "Enter" && addQuick()}
              placeholder="เน€เธเธดเนเธกเธเธณเธ–เธฒเธกเนเธซเธกเน..."
              style={{
                flex: 1, background: T.bgSecondary, border: "1px solid " + T.surfaceBorder,
                borderRadius: 8, padding: "8px 12px", color: T.text,
                fontFamily: T.fontBody, fontSize: 13, outline: "none"
              }}
            />
            <button onClick={addQuick} style={{
              background: T.btnGrad, border: "none", color: T.primaryDark,
              padding: "8px 16px", borderRadius: 8, cursor: "pointer",
              ...CS, fontWeight: 700, fontSize: 13
            }}>+ เน€เธเธดเนเธก</button>
          </div>
        </div>

        <button onClick={save} style={{
          background: T.btnGrad, border: "none", color: T.primaryDark,
          padding: "12px 28px", borderRadius: 12, cursor: "pointer",
          ...CS, fontWeight: 700, fontSize: 15, alignSelf: "flex-start",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)"
        }}>๐’พ เธเธฑเธเธ—เธถเธเธเธฒเธฃเธ•เธฑเนเธเธเนเธฒเธ—เธฑเนเธเธซเธกเธ”</button>
      </div>
    </div>
  );
}

// ==================== ADMIN PAGE ====================
function AdminPage({ user, theme, themeId, setThemeId }) {
  const isSuperAdmin = user && user.role === "super_admin";
  const isAdmin = (user && user.role === "admin") || isSuperAdmin;
  const isTeacher = user && user.role === "teacher";
  const [tab, setTab] = useState("dashboard");
  const T = theme || THEMES.cyber;
  const CS = { fontFamily: T.fontBody };

  // Access control
  if (!user || (!isAdmin && !isTeacher)) return (
    <div style={{ padding: "120px 24px", textAlign: "center", background: T.bg, minHeight: "100vh" }}>
      <div style={{ fontSize: 64, marginBottom: 24 }}>โ”</div>
      <h2 style={{ ...CS, fontWeight: 800, fontSize: 28, color: T.text }}>เนเธกเนเธกเธตเธชเธดเธ—เธเธดเนเน€เธเนเธฒเธ–เธถเธ</h2>
      <p style={{ ...CS, color: T.textMuted, marginTop: 12 }}>เธซเธเนเธฒเธเธตเนเธชเธณเธซเธฃเธฑเธ Admin เนเธฅเธฐ Super Admin เน€เธ—เนเธฒเธเธฑเนเธ</p>
    </div>
  );

  const tabs = [
    { id: "dashboard", label: "๐“ Dashboard",    roles: ["super_admin","admin","teacher"] },
    { id: "bookings",  label: "๐“… เธเธฒเธฃเธเธญเธ",       roles: ["super_admin","admin"] },
    { id: "teachers",  label: "๐“ เธเธนเนเธชเธญเธ",       roles: ["super_admin","admin"] },
    { id: "users",     label: "๐‘ฅ เธเธฑเธ”เธเธฒเธฃเธเธนเนเนเธเน",  roles: ["super_admin","admin"] },
    { id: "news",      label: "๐“ฐ เธเธฑเธ”เธเธฒเธฃเธเนเธฒเธง",   roles: ["super_admin","admin"] },
    { id: "gallery",   label: "๐–ผ๏ธ เธเธฅเธฑเธเธ เธฒเธ",     roles: ["super_admin","admin"] },
    { id: "skilltree", label: "๐—บ๏ธ Skill Tree",   roles: ["super_admin","admin"] },
    { id: "tourney",   label: "๐ เธเธฒเธฃเนเธเนเธเธเธฑเธ",   roles: ["super_admin","admin"] },
    { id: "rcredits",  label: "โญ RoboCredits",   roles: ["super_admin","admin"] },
    { id: "copilot",   label: "๐ค– AI Copilot",   roles: ["super_admin"] },
    { id: "finance",   label: "๐’ฐ เธเธฒเธฃเน€เธเธดเธ",      roles: ["super_admin"] },
    { id: "theme",     label: "๐จ เธเธตเธก",          roles: ["super_admin"] },
  ].filter(t => t.roles.includes(user.role));

  const roleInfo = ROLE_LABELS[user.role];

  return (
    <div style={{ padding: "100px 24px 80px", background: T.bg, minHeight: "100vh", transition: "background 0.4s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
          <div>
            <h1 style={{ ...CS, fontWeight: 800, fontSize: 28, color: T.text, margin: 0 }}>
              {isSuperAdmin ? "๐‘‘ Super Admin Panel" : "โ๏ธ Admin Panel"}
            </h1>
            <p style={{ ...CS, fontSize: 14, color: T.textMuted, margin: "6px 0 0" }}>
              เธจเธนเธเธขเนเธเธฑเธเธเธฒเธเธฒเธฃ BaanBot Chanthaburi
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ background: T.cardBg, border: `1px solid ${T.cardBorder}`, borderRadius: 8, padding: "6px 14px", ...CS, fontSize: 12, color: T.success }}>
              ๐ข เธฃเธฐเธเธเธ—เธณเธเธฒเธเธเธเธ•เธด
            </div>
            <div style={{ background: `${roleInfo.color}18`, border: `1px solid ${roleInfo.color}40`, borderRadius: 8, padding: "6px 14px", ...CS, fontSize: 12, color: roleInfo.color, fontWeight: 700 }}>
              {roleInfo.icon} {roleInfo.label}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              background: tab === t.id
                ? t.id === "finance" ? "linear-gradient(135deg,#FF6B6B,#FF8C00)"
                : t.id === "theme" ? T.btnGrad
                : "linear-gradient(135deg,#FF8C00,#FFD700)"
                : T.surface,
              border: `1px solid ${tab === t.id ? "transparent" : T.surfaceBorder}`,
              color: tab === t.id ? (themeId === "cyber" ? T.bg : T.primaryDark) : t.id === "finance" ? "rgba(255,107,107,0.8)" : T.textMuted,
              padding: "10px 20px", borderRadius: 10, cursor: "pointer",
              ...CS, fontWeight: tab === t.id ? 700 : 400, fontSize: 13, position: "relative",
              transition: "all 0.2s"
            }}>
              {t.label}
              {t.id === "finance" && tab !== "finance" && (
                <span style={{ position: "absolute", top: -4, right: -4, width: 8, height: 8, borderRadius: "50%", background: "#FF6B6B", boxShadow: "0 0 6px #FF6B6B" }} />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === "dashboard" && <DashboardPanel isSuperAdmin={isSuperAdmin} theme={T} />}
        {tab === "bookings"  && <BookingsPanel isSuperAdmin={isSuperAdmin} theme={T} />}
        {tab === "teachers"  && <TeachersPanel isSuperAdmin={isSuperAdmin} theme={T} />}
        {tab === "users"     && <UsersPanel theme={T} />}
        {tab === "news"      && (
          <div style={{ background: T.surface, border: `1px solid ${T.surfaceBorder}`, borderRadius: 16, overflow: "hidden" }}>
            <div style={{ padding: "16px 24px", borderBottom: `1px solid ${T.surfaceBorder}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ ...CS, fontWeight: 700, color: T.text, fontSize: 15 }}>เธเธฑเธ”เธเธฒเธฃเธเนเธฒเธงเธชเธฒเธฃ</div>
              <button style={{ background: T.btnGrad, border: "none", color: T.primaryDark, padding: "8px 18px", borderRadius: 8, ...CS, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>+ เน€เธเธดเนเธกเธเนเธฒเธง</button>
            </div>
            {MOCK_NEWS.map(n => (
              <div key={n.id} style={{ padding: "16px 24px", borderBottom: `1px solid ${T.surfaceBorder}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ ...CS, fontWeight: 600, fontSize: 14, color: T.text, marginBottom: 4 }}>{n.title}</div>
                  <div style={{ ...CS, fontSize: 12, color: T.textMuted }}>{n.date} โ€ข {n.tag}</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{ background: `${T.primary}18`, border: `1px solid ${T.primary}40`, color: T.primary, padding: "5px 12px", borderRadius: 8, ...CS, fontSize: 12, cursor: "pointer" }}>เนเธเนเนเธ</button>
                  <button style={{ background: "rgba(255,50,50,0.1)", border: "1px solid rgba(255,50,50,0.2)", color: "#ff6b6b", padding: "5px 12px", borderRadius: 8, ...CS, fontSize: 12, cursor: "pointer" }}>เธฅเธ</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === "gallery"   && <AdminGalleryPanel theme={T} />}
        {tab === "skilltree" && <SkillTreeAdminPanel T={T} CS={CS} />}
        {tab === "tourney"   && <TournamentAdminPanel T={T} CS={CS} />}
        {tab === "rcredits"  && <RoboCreditAdminPanel T={T} CS={CS} />}
        {tab === "copilot"   && isSuperAdmin && <AICopilotAdminPanel T={T} CS={CS} />}
        {tab === "finance"   && isSuperAdmin && <FinancialDashboard theme={T} />}
        {tab === "theme"     && isSuperAdmin && <ThemeSwitcherPanel themeId={themeId} setThemeId={setThemeId} T={T} CS={CS} />}
      </div>
    </div>
  );
}

// ==================== APP ====================
// ==================== THEMES ====================
const THEMES = {
  cyber: {
    id: "cyber", label: "โก Cyber-Industrial", emoji: "โก",
    bg: "#0b192a", bgSecondary: "#091421", surface: "rgba(255,255,255,0.03)",
    surfaceBorder: "rgba(0,255,240,0.12)", primary: "#00FFF0", primaryDark: "#0a0c14",
    accent: "#FF0066", success: "#00ff9f", warning: "#FFD700",
    text: "#E6E8EE", textMuted: "rgba(230,232,238,0.45)", textFaint: "rgba(230,232,238,0.2)",
    font: "'Orbitron','Kanit',sans-serif", fontBody: "'Kanit',sans-serif",
    btnGrad: "linear-gradient(135deg,#00FFF0,#0066ff)",
    navBg: "rgba(11,25,42,0.95)", scrollbarThumb: "rgba(0,255,240,0.3)",
    cardBg: "rgba(0,255,240,0.04)", cardBorder: "rgba(0,255,240,0.15)",
    glassEffect: "rgba(11,25,42,0.6)",
  },
  nature: {
    id: "nature", label: "๐ฟ Nature Minimalism", emoji: "๐ฟ",
    bg: "#F0EEE9", bgSecondary: "#E8E4DC", surface: "rgba(164,120,100,0.06)",
    surfaceBorder: "rgba(164,120,100,0.18)", primary: "#316263", primaryDark: "#ffffff",
    accent: "#C36A4A", success: "#316263", warning: "#A47864",
    text: "#141414", textMuted: "rgba(20,20,20,0.5)", textFaint: "rgba(20,20,20,0.3)",
    font: "'Montserrat','Kanit',sans-serif", fontBody: "'Lora','Kanit',sans-serif",
    btnGrad: "linear-gradient(135deg,#316263,#A47864)",
    navBg: "rgba(240,238,233,0.97)", scrollbarThumb: "rgba(49,98,99,0.35)",
    cardBg: "rgba(164,120,100,0.06)", cardBorder: "rgba(164,120,100,0.2)",
    glassEffect: "rgba(240,238,233,0.85)",
  },
  constructivist: {
    id: "constructivist", label: "๐งฑ Joyful Constructivist", emoji: "๐งฑ",
    bg: "#ffffff", bgSecondary: "#f9f8f8", surface: "rgba(0,0,0,0.03)",
    surfaceBorder: "rgba(0,0,0,0.1)", primary: "#d11013", primaryDark: "#ffffff",
    accent: "#882FF6", success: "#35D461", warning: "#f6ec35",
    text: "#111111", textMuted: "rgba(17,17,17,0.5)", textFaint: "rgba(17,17,17,0.28)",
    font: "'Poppins','Kanit',sans-serif", fontBody: "'Poppins','Kanit',sans-serif",
    btnGrad: "linear-gradient(135deg,#d11013,#882FF6)",
    navBg: "rgba(255,255,255,0.97)", scrollbarThumb: "rgba(209,16,19,0.35)",
    cardBg: "rgba(209,16,19,0.04)", cardBorder: "rgba(209,16,19,0.15)",
    glassEffect: "rgba(255,255,255,0.9)",
  },
};

export default function Page() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);
  const [themeId, setThemeId] = useState("cyber");
  const theme = THEMES[themeId];

  useEffect(() => {
    document.title = "BaanBot Chanthaburi";
    // Load all needed fonts
    const fontsLink = document.createElement("link");
    fontsLink.href = "https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600;700;800;900&family=Orbitron:wght@400;700;800&family=Montserrat:wght@400;600;700;800&family=Lora:wght@400;600;700&family=Poppins:wght@400;600;700;800;900&display=swap";
    fontsLink.rel = "stylesheet";
    document.head.appendChild(fontsLink);
    const style = document.createElement("style");
    style.id = "baanbot-global-style";
    style.textContent = `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: ${theme.bg}; transition: background 0.4s; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: ${theme.bgSecondary}; }
      ::-webkit-scrollbar-thumb { background: ${theme.scrollbarThumb}; border-radius: 3px; }
      input::placeholder { color: ${theme.textFaint}; }
      select option { background: ${theme.bgSecondary}; color: ${theme.text}; }
      @keyframes float0 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-30px); } }
      @keyframes float1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-20px,20px); } }
      @keyframes float2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(15px,15px); } }
      @keyframes glitch { 0%,100%{text-shadow:none} 25%{text-shadow:2px 0 ${theme.accent},โ’2px 0 ${theme.primary}} 75%{text-shadow:โ’2px 0 ${theme.accent},2px 0 ${theme.primary}} }
    `;
    document.head.appendChild(style);
    return () => {};
  }, []);

  // Update body bg + scrollbar on theme change
  useEffect(() => {
    document.body.style.background = theme.bg;
    const s = document.getElementById("baanbot-global-style");
    if (s) {
      const bodyRx = new RegExp("body \\{ background: [^;]+;");
      const trackRx = new RegExp("::-webkit-scrollbar-track \\{ background: [^;]+;");
      const thumbRx = new RegExp("::-webkit-scrollbar-thumb \\{ background: [^;]+;");
      s.textContent = s.textContent
        .replace(bodyRx, "body { background: " + theme.bg + ";")
        .replace(trackRx, "::-webkit-scrollbar-track { background: " + theme.bgSecondary + ";")
        .replace(thumbRx, "::-webkit-scrollbar-thumb { background: " + theme.scrollbarThumb + ";");
    }
  }, [themeId]);

  const isAdminRole = user && (user.role === "admin" || user.role === "super_admin" || user.role === "teacher");
  const roleInfo = user ? ROLE_LABELS[user.role] : null;

  const renderPage = () => {
    switch (page) {
      case "home":       return <HomePage setPage={setPage} theme={theme} />;
      case "news":       return <NewsPage theme={theme} />;
      case "booking":    return <BookingPage user={user} setPage={setPage} theme={theme} />;
      case "gallery":    return <GalleryPage user={user} setPage={setPage} theme={theme} />;
      case "login":      return <LoginPage setUser={setUser} setPage={setPage} theme={theme} />;
      case "admin":      return <AdminPage user={user} theme={theme} themeId={themeId} setThemeId={setThemeId} />;
      case "skilltree":  return <SkillTreePage user={user} setPage={setPage} />;
      case "tournament": return <TournamentHubPage user={user} setPage={setPage} />;
      case "credits":    return <RoboCreditPage user={user} setPage={setPage} />;
      case "copilot":    return <AICopilotPage user={user} setPage={setPage} />;
      default:           return <HomePage setPage={setPage} theme={theme} />;
    }
  };

  return (
    <div style={{ fontFamily: theme.fontBody, color: theme.text, transition: "background 0.4s, color 0.3s" }}>
      <NavBar page={page} setPage={setPage} user={user} setUser={setUser} theme={theme} />
      {renderPage()}

      <footer style={{ background: themeId === "cyber" ? "#060810" : themeId === "nature" ? "#E0DDD6" : "#f3f3f3", padding: "40px 24px", borderTop: `1px solid ${theme.surfaceBorder}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div style={{ cursor: "pointer" }} onClick={() => setPage("home")}>
            <BaanBotLogo width={200} />
          </div>
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            {[["home","เธซเธเนเธฒเธซเธฅเธฑเธ"],["skilltree","๐—บ๏ธ Learning Map"],["tournament","๐ เนเธเนเธเธเธฑเธ"],["credits","โญ Credits"],["copilot","๐ค– AI Copilot"],["booking","เธเธญเธเน€เธฃเธตเธขเธ"],["gallery","เธเธฅเธฑเธเธ เธฒเธ"]].map(([p, lbl]) => (
              <button key={p} onClick={() => setPage(p)} style={{
                background: "none", border: "none", color: theme.textMuted,
                fontFamily: theme.fontBody, fontSize: 13, cursor: "pointer"
              }}>{lbl}</button>
            ))}
            {isAdminRole && (
              <button onClick={() => setPage("admin")} style={{
                background: user && user.role === "super_admin" ? "rgba(255,107,107,0.12)" : `${theme.cardBg}`,
                border: `1px solid ${user && user.role === "super_admin" ? "rgba(255,107,107,0.3)" : theme.cardBorder}`,
                color: user && user.role === "super_admin" ? "#FF6B6B" : theme.primary,
                fontFamily: theme.fontBody, fontSize: 13, cursor: "pointer",
                borderRadius: 6, padding: "4px 12px"
              }}>{roleInfo && roleInfo.icon} {roleInfo && roleInfo.label}</button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
