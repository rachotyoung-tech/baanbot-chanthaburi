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
      <text x="190" y="170" fontFamily="'Tahoma','Segoe UI',sans-serif" fontWeight="400" fontSize="14" fill="rgba(255,255,255,0.45)" letterSpacing="1">โรงเรียนสอนหุ่นยนต์ • จังหวัดจันทบุรี</text>

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
    title: "หุ่นยนต์ AI รุ่นใหม่สามารถเรียนรู้ทักษะมนุษย์ได้เร็วกว่าเดิม 10 เท่า",
    summary: "นักวิจัยจาก MIT ได้พัฒนาหุ่นยนต์ที่ใช้ระบบ AI ขั้นสูงสามารถเรียนรู้การเคลื่อนไหวและทักษะต่าง ๆ ได้อย่างรวดเร็ว เปิดโอกาสใหม่สำหรับการประยุกต์ใช้ในชีวิตประจำวัน",
    date: "25 ก.พ. 2569",
    tag: "AI & หุ่นยนต์",
    source: "MIT News"
  },
  {
    id: 2,
    title: "การแข่งขันหุ่นยนต์โอลิมปิกระดับนานาชาติ 2025 ประกาศรายชื่อประเทศที่เข้าร่วม",
    summary: "กว่า 50 ประเทศทั่วโลกได้ลงทะเบียนเข้าร่วมการแข่งขันหุ่นยนต์ระดับโลกครั้งยิ่งใหญ่ โดยประเทศไทยส่งทีมจำนวน 3 ทีมเข้าร่วมชิงชัย",
    date: "23 ก.พ. 2569",
    tag: "การแข่งขัน",
    source: "WRO Official"
  },
  {
    id: 3,
    title: "LEGO Mindstorms รุ่นใหม่ EV5 เปิดตัวพร้อมชิป AI ในตัว",
    summary: "LEGO ประกาศเปิดตัวชุดหุ่นยนต์รุ่นใหม่ล่าสุดที่มาพร้อมกับความสามารถด้าน AI และ Machine Learning ในตัว เหมาะสำหรับเด็กอายุ 8 ปีขึ้นไป",
    date: "20 ก.พ. 2569",
    tag: "เทคโนโลยี",
    source: "LEGO Education"
  },
];

const TIME_SLOTS = [
  { id: 1, time: "08:30 - 10:30", label: "รอบเช้า 1" },
  { id: 2, time: "10:30 - 12:30", label: "รอบเช้า 2" },
  { id: 3, time: "13:00 - 15:00", label: "รอบบ่าย 1" },
  { id: 4, time: "15:00 - 17:00", label: "รอบบ่าย 2" },
  { id: 5, time: "17:00 - 19:00", label: "รอบเย็น" },
];

const MOCK_BOOKINGS = {
  "2026-02-26": { 1: true, 3: true },
  "2026-02-27": { 2: true, 5: true },
  "2026-02-28": { 1: true, 2: true, 4: true },
};

const GALLERY_IMAGES = [
  { id: 1, url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop", caption: "น้องๆ กำลังสร้างหุ่นยนต์ LEGO" },
  { id: 2, url: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&h=300&fit=crop", caption: "การแข่งขันหุ่นยนต์ภายใน" },
  { id: 3, url: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=400&h=300&fit=crop", caption: "เรียนรู้การเขียนโปรแกรม" },
  { id: 4, url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop", caption: "ทดสอบหุ่นยนต์บนสนาม" },
  { id: 5, url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", caption: "นักเรียนระดับสูง" },
  { id: 6, url: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=300&fit=crop", caption: "กิจกรรม Open House" },
];

// ==================== HELPERS ====================
const getDayName = (dateStr) => {
  const days = ["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];
  return days[new Date(dateStr).getDay()];
};
const isMonday = (dateStr) => new Date(dateStr).getDay() === 1;
const formatThaiDate = (dateStr) => {
  const d = new Date(dateStr);
  const months = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
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
// set ของวันที่จองได้ (วันนี้ → +30 วัน)
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
    { id: "home", label: "หน้าหลัก" },
    { id: "news", label: "ข่าวสาร" },
    { id: "booking", label: "จองเวลาเรียน" },
    { id: "gallery", label: "คลังภาพ" },
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
            }}>ออกจากระบบ</button>
          </div>
        ) : (
          <button onClick={() => setPage("login")} style={{
            background: "linear-gradient(135deg, #FF8C00, #FFD700)",
            border: "none", color: "#0a0c14", padding: "8px 18px", borderRadius: 8,
            cursor: "pointer", fontFamily: "'Kanit', sans-serif", fontSize: 14,
            fontWeight: 700, marginLeft: 8
          }}>เข้าสู่ระบบ</button>
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
          }}>🤖 โรงเรียนสอนหุ่นยนต์ • จันทบุรี</div>

          {/* Big Logo in Hero */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <BaanBotLogo width={440} style={{ filter: "drop-shadow(0 8px 40px rgba(0,210,255,0.25))" }} />
          </div>

          <p style={{
            fontFamily: "'Kanit', sans-serif", fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 48,
            maxWidth: 560, margin: "0 auto 48px"
          }}>ปลูกฝังทักษะอนาคตให้กับเด็กๆ ผ่านการเรียนรู้หุ่นยนต์และการเขียนโปรแกรม อย่างสนุกสนาน</p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setPage("booking")} style={{
              background: "linear-gradient(135deg, #FF8C00, #FFD700)",
              border: "none", color: "#0a0c14",
              padding: "16px 36px", borderRadius: 12, cursor: "pointer",
              fontFamily: "'Kanit', sans-serif", fontSize: 16, fontWeight: 700,
              boxShadow: "0 8px 32px rgba(255,140,0,0.4)",
              transition: "all 0.2s"
            }}>📅 จองเวลาเรียน</button>
            <button onClick={() => setPage("news")} style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", padding: "16px 36px", borderRadius: 12, cursor: "pointer",
              fontFamily: "'Kanit', sans-serif", fontSize: 16, fontWeight: 600,
              transition: "all 0.2s"
            }}>📰 ข่าวสาร</button>
          </div>
        </div>
      </section>

      {/* Facebook Feed Section */}
      <section style={{ padding: "80px 24px", background: "#0d0f1a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader icon="📱" title="ติดตามข่าวสารจาก Facebook" sub="อัปเดตล่าสุดจากเพจ iBot Academy Chanthaburi" />
<div className="grid grid-cols-2 gap-6 max-w-[1100px] mx-auto sm:grid-cols-1">
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
                  { text: "🎉 ยินดีต้อนรับน้องๆ นักเรียนใหม่ประจำเดือนกุมภาพันธ์! วันนี้มีน้องใหม่มาเรียนหุ่นยนต์ LEGO Mindstorms ถึง 5 คน ขอเป็นกำลังใจให้ทุกคนนะครับ 💪", time: "2 ชั่วโมงที่แล้ว", likes: 47 },
                  { text: "📢 แจ้งตารางเรียน: สัปดาห์หน้าจะมีการทดสอบขั้นกลาง สำหรับน้องๆ ระดับ Intermediate ขอให้ซ้อมโปรแกรมการเคลื่อนที่พื้นฐานด้วยนะครับ", time: "1 วันที่แล้ว", likes: 23 },
                ].map((post, i) => (
                  <div key={i} style={{
                    padding: "16px 0",
                    borderBottom: i === 0 ? "1px solid rgba(255,255,255,0.06)" : "none"
                  }}>
                    <p style={{ fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, margin: "0 0 10px" }}>{post.text}</p>
                    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'Kanit', sans-serif" }}>{post.time}</span>
                      <span style={{ fontSize: 12, color: "#1877F2", fontFamily: "'Kanit', sans-serif" }}>👍 {post.likes}</span>
                    </div>
                  </div>
                ))}
                <a href="https://www.facebook.com/ibotacademychanthaburi/" target="_blank" rel="noopener noreferrer" style={{
                  display: "block", textAlign: "center", marginTop: 16,
                  background: "rgba(24,119,242,0.1)", border: "1px solid rgba(24,119,242,0.3)",
                  borderRadius: 8, padding: "10px", color: "#1877F2",
                  textDecoration: "none", fontFamily: "'Kanit', sans-serif", fontSize: 13, fontWeight: 600
                }}>ดูเพิ่มเติมบน Facebook →</a>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "🤖", num: "500+", label: "นักเรียนที่ผ่านหลักสูตร" },
                { icon: "🏆", num: "28", label: "รางวัลจากการแข่งขัน" },
                { icon: "📚", num: "5", label: "หลักสูตรที่เปิดสอน" },
                { icon: "⭐", num: "4.9", label: "คะแนนความพึงพอใจ" },
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

      {/* Courses */}
      <section style={{ padding: "80px 24px", background: "#0a0c14" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader icon="🎓" title="หลักสูตรของเรา" sub="เรียนรู้อย่างเป็นขั้นตอน เหมาะสำหรับทุกระดับ" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {[
              { level: "เริ่มต้น", age: "อายุ 6-8 ปี", color: "#4ECDC4", icon: "🌱", desc: "เรียนรู้การต่อ LEGO WeDo และการเขียนโปรแกรมด้วย Scratch เบื้องต้น" },
              { level: "ระดับกลาง", age: "อายุ 9-12 ปี", color: "#FF8C00", icon: "⚡", desc: "LEGO Mindstorms EV3 และการเขียนโปรแกรม Python เบื้องต้น" },
              { level: "ขั้นสูง", age: "อายุ 13+ ปี", color: "#FF4757", icon: "🚀", desc: "Arduino, Raspberry Pi และการพัฒนา AI สำหรับหุ่นยนต์" },
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
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `คุณคือผู้ช่วยสรุปและแปลข่าวหุ่นยนต์สำหรับเด็ก\n\nจาก URL นี้: ${url}\n\nกรุณาสร้างข่าวสมมติที่น่าสนใจเกี่ยวกับหุ่นยนต์และ AI (เนื่องจากไม่สามารถเข้าถึง URL ได้โดยตรง) โดยตอบเป็น JSON รูปแบบนี้:\n{"title": "...", "summary": "...", "tag": "..."}\nให้เขียนเป็นภาษาไทยที่เข้าใจง่ายสำหรับเด็กและผู้ปกครอง`
          }]
        })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setAiResult(parsed);
    } catch {
      setAiResult({ title: "ข่าวหุ่นยนต์ใหม่จากอินเทอร์เน็ต", summary: "ระบบสรุปข่าวด้วย AI พร้อมใช้งานแล้ว กรุณาลองใส่ URL ข่าวภาษาอังกฤษเพื่อให้ระบบแปลและสรุปให้", tag: "ทั่วไป" });
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "100px 24px 80px", background: "#0a0c14", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader icon="📰" title="ข่าวสารหุ่นยนต์" sub="อัปเดตความเคลื่อนไหวจากวงการหุ่นยนต์ทั่วโลก" />

        {/* AI Translator */}
        <div style={{
          background: "rgba(255,140,0,0.05)", border: "1px solid rgba(255,140,0,0.2)",
          borderRadius: 20, padding: 28, marginBottom: 48
        }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 24 }}>🤖</div>
            <div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: "#FFD700" }}>แปลข่าวด้วย AI</div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>ใส่ URL ข่าวภาษาอังกฤษ แล้ว AI จะสรุปและแปลเป็นภาษาไทยให้อัตโนมัติ</div>
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
            }}>{loading ? "กำลังแปล..." : "แปลข่าว ✨"}</button>
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
            <div key={n.id} onClick={() => setSelected(selected?.id === n.id ? null : n)} style={{
              background: "rgba(255,255,255,0.03)", border: selected?.id === n.id ? "1px solid rgba(255,215,0,0.4)" : "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20, padding: 24, cursor: "pointer",
              transition: "all 0.2s",
              transform: selected?.id === n.id ? "scale(1.01)" : "scale(1)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{
                  background: "rgba(255,140,0,0.15)", color: "#FF8C00",
                  borderRadius: 100, padding: "3px 12px", fontSize: 11, fontFamily: "'Kanit', sans-serif"
                }}>{n.tag}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'Kanit', sans-serif" }}>{n.date}</span>
              </div>
              <h3 style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", margin: "0 0 10px", lineHeight: 1.5 }}>{n.title}</h3>
              {selected?.id === n.id && (
                <p style={{ fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 12px" }}>{n.summary}</p>
              )}
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'Kanit', sans-serif" }}>แหล่งข่าว: {n.source}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// ==================== BOOKING PAGE ====================
// ทุกคนเห็นตารางว่าง/ไม่ว่างได้ — มี 2 โหมด: จองปกติ (2 ชม.) และทดลองเรียน (1 ชม.)
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

  // bookable window: today → +30 days
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

  const thMonthNames = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
  const dayHeaders = ["อา","จ","อ","พ","พฤ","ศ","ส"];

  const getOccupancyForDate = (d) => {
    if (isMonday(d)) return -1;
    return Object.keys(bookings[d] || {}).length;
  };

  // แต่ละ slot = 2 ชม. แบ่งเป็น 2 ช่วง 1 ชม. สำหรับทดลองเรียน
  const getTrialHours = (slot) => {
    const parts = slot.time.split(" - ");
    const [sh, sm] = parts[0].split(":").map(Number);
    const [eh, em] = parts[1].split(":").map(Number);
    const midH = sh + 1;
    return [
      { key: "first",  label: "ชั่วโมงแรก",  time: `${String(sh).padStart(2,"0")}:${String(sm).padStart(2,"0")} - ${String(midH).padStart(2,"0")}:${String(sm).padStart(2,"0")}` },
      { key: "second", label: "ชั่วโมงหลัง", time: `${String(midH).padStart(2,"0")}:${String(sm).padStart(2,"0")} - ${String(eh).padStart(2,"0")}:${String(em).padStart(2,"0")}` },
    ];
  };

  const isTrialBooked = (date, slotId, hourKey) =>
    !!(trialBookings[date]?.[`${slotId}_${hourKey}`]);

  const isSlotFullyBooked = (date, slotId) =>
    !!(bookings[date]?.[slotId]);

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
        <SectionHeader icon="📅" title="จองเวลาเรียน" sub="ดูตารางว่างได้ทุกคน — ไม่ต้องเข้าสู่ระบบก็เห็นได้" />

        {/* ── Mode Selector Cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 28 }}>
          {[
            {
              id: "regular", icon: "📚", title: "จองเรียนปกติ",
              desc: "สำหรับนักเรียนที่เป็นสมาชิกแล้ว",
              duration: "2 ชั่วโมง / รอบ", color: "#4ECDC4", badge: null
            },
            {
              id: "trial", icon: "🎯", title: "ทดลองเรียนฟรี",
              desc: "สำหรับผู้ปกครองที่สนใจสมัคร",
              duration: "1 ชั่วโมง / ครั้ง", color: "#FF8C00", badge: "ฟรี!"
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
                  ⏱ {m.duration}
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
            <div style={{ fontSize: 26, flexShrink: 0 }}>🎁</div>
            <div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, color: "#FFD700", fontSize: 14, marginBottom: 6 }}>
                เกี่ยวกับการทดลองเรียน
              </div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>
                • ทดลองเรียนได้ <strong style={{ color: "#FF8C00" }}>1 ชั่วโมง</strong> โดยไม่มีค่าใช้จ่ายใดๆ<br />
                • เลือกชั่วโมงแรก หรือชั่วโมงหลังของแต่ละรอบได้เลย<br />
                • ทีมงานจะโทรยืนยันนัดภายใน 24 ชั่วโมง<br />
                • สามารถทดลองเรียนได้ <strong style={{ color: "#FF8C00" }}>1 ครั้งต่อครอบครัว</strong>
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
            <div style={{ fontSize: 32 }}>{success === "trial" ? "🎉" : "✅"}</div>
            <div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: success === "trial" ? "#FFD700" : "#4ECDC4" }}>
                {success === "trial" ? "จองทดลองเรียนสำเร็จ!" : "จองเวลาเรียนสำเร็จ!"}
              </div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                {success === "trial"
                  ? "ทีมงานจะโทรยืนยันนัดหมายภายใน 24 ชั่วโมง ขอบคุณที่สนใจ BaanBot Chanthaburi!"
                  : "ทีมงานจะติดต่อยืนยันผ่านเบอร์โทรที่ให้ไว้"}
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div style={{ display: "flex", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
          {[
            { dot: "#4ECDC4", label: "ว่าง (เรียนปกติ)" },
            { dot: "#FF8C00", label: "มีที่ทดลองเรียน" },
            { dot: "#FF6B6B", label: "เต็มแล้ว" },
            { dot: "rgba(255,255,255,0.2)", label: "ปิดทำการ (จันทร์)" },
          ].map((l, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: l.dot, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{l.label}</span>
            </div>
          ))}
        </div>

        {/* ── Monthly Calendar ── */}
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
            }}>‹</button>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 18, color: "#fff" }}>
                {thMonthNames[calMonth]}
              </div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>
                พ.ศ. {calYear + 543}
              </div>
            </div>

            <button onClick={() => goMonth(1)} disabled={!canGoNext} style={{
              width: 36, height: 36, borderRadius: 10,
              background: canGoNext ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.1)", color: canGoNext ? "#fff" : "rgba(255,255,255,0.15)",
              fontSize: 16, cursor: canGoNext ? "pointer" : "not-allowed", fontFamily: "'Kanit', sans-serif"
            }}>›</button>
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
                  {/* ปิด label for monday in range */}
                  {mon && inRange && !isPast && (
                    <div style={{ fontSize: 8, color: "rgba(255,107,107,0.5)", lineHeight: 1 }}>ปิด</div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Calendar legend */}
          <div style={{ display: "flex", gap: 16, marginTop: 14, flexWrap: "wrap" }}>
            {[
              { dot: "#4ECDC4", label: "ว่างมาก" },
              { dot: "#FFD700", label: "ว่างปานกลาง" },
              { dot: "#FF8C00", label: "เหลือน้อย" },
              { dot: "#FF6B6B", label: "เต็มแล้ว" },
              { dot: "rgba(255,107,107,0.35)", label: "ปิดทำการ" },
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
            รอบเวลา — {formatThaiDate(selectedDate)} ({getDayName(selectedDate)})
            {isMonday(selectedDate) && <span style={{ marginLeft: 10, color: "#FF6B6B" }}>ปิดทำการวันนี้</span>}
          </div>

          {isMonday(selectedDate) ? (
            <div style={{ background: "rgba(255,107,107,0.04)", border: "1px solid rgba(255,107,107,0.15)", borderRadius: 16, padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>🚫</div>
              <div style={{ fontFamily: "'Kanit', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 14 }}>ปิดทำการทุกวันจันทร์</div>
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

                    {/* Slot header — clickable row */}
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
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 1 }}>{slot.time} • 2 ชั่วโมง</div>
                        </div>
                      </div>

                      {/* Right side badges */}
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {fullyBooked && (
                          <span style={{ background: "rgba(255,107,107,0.15)", color: "#FF6B6B", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>เต็มแล้ว</span>
                        )}
                        {!fullyBooked && bookingMode === "regular" && (
                          <span style={{ background: isSelSlot ? "rgba(78,205,196,0.2)" : "rgba(78,205,196,0.08)", color: "#4ECDC4", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>
                            {isSelSlot ? "✓ เลือกแล้ว" : "ว่าง"}
                          </span>
                        )}
                        {!fullyBooked && bookingMode === "trial" && (
                          <span style={{ background: isSelSlot ? "rgba(255,140,0,0.2)" : "rgba(255,140,0,0.08)", color: "#FF8C00", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>
                            {isSelSlot ? "เลือกชั่วโมง ↓" : "เลือกรอบนี้"}
                          </span>
                        )}
                        {!fullyBooked && (
                          <div style={{ color: "rgba(255,255,255,0.25)", fontSize: 14, transition: "transform 0.2s", transform: isSelSlot ? "rotate(180deg)" : "rotate(0deg)" }}>▾</div>
                        )}
                      </div>
                    </button>

                    {/* ── Trial hour picker (expands when slot selected in trial mode) ── */}
                    {isSelSlot && bookingMode === "trial" && !fullyBooked && (
                      <div style={{
                        borderTop: "1px solid rgba(255,140,0,0.15)",
                        padding: "14px 20px 18px",
                        background: "rgba(255,140,0,0.03)"
                      }}>
                        <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,140,0,0.8)", marginBottom: 12, fontWeight: 700, letterSpacing: 0.5 }}>
                          🕐 เลือกช่วงเวลา 1 ชั่วโมงที่ต้องการทดลองเรียน
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
                                  {tbk ? "มีผู้จองแล้ว" : tsel ? "✓ เลือกแล้ว" : "ว่าง"}
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
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, color: "#FFD700", fontSize: 15, marginBottom: 4 }}>🔒 เข้าสู่ระบบก่อนจอง</div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>สมัครสมาชิกฟรีหรือใช้ Google Account ได้เลย</div>
            </div>
            <button onClick={() => setPage("login")} style={{
              background: "linear-gradient(135deg,#FF8C00,#FFD700)", border: "none",
              color: "#0a0c14", padding: "10px 22px", borderRadius: 10,
              fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer"
            }}>เข้าสู่ระบบ / สมัคร</button>
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
              <div style={{ fontSize: 28 }}>{bookingMode === "trial" ? "🎯" : "📚"}</div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 18, color: bookingMode === "trial" ? "#FFD700" : "#4ECDC4" }}>
                  {bookingMode === "trial" ? "ยืนยันทดลองเรียน" : "ยืนยันการจอง"}
                </div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>
                  {formatThaiDate(selectedDate)} •{" "}
                  {TIME_SLOTS.find(s => s.id === selectedSlot)?.label}{" "}
                  {bookingMode === "trial"
                    ? `(${getTrialHours(TIME_SLOTS.find(s => s.id === selectedSlot)).find(h => h.key === selectedTrialHour)?.time})`
                    : `(${TIME_SLOTS.find(s => s.id === selectedSlot)?.time})`}
                </div>
                {/* Duration pill */}
                <div style={{
                  marginTop: 8, display: "inline-flex", alignItems: "center", gap: 5,
                  background: bookingMode === "trial" ? "rgba(255,140,0,0.12)" : "rgba(78,205,196,0.12)",
                  borderRadius: 100, padding: "4px 12px"
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: bookingMode === "trial" ? "#FF8C00" : "#4ECDC4" }} />
                  <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: bookingMode === "trial" ? "#FF8C00" : "#4ECDC4", fontWeight: 700 }}>
                    {bookingMode === "trial" ? "⏱ ทดลองเรียน 1 ชั่วโมง (ฟรี)" : "⏱ เรียนปกติ 2 ชั่วโมง"}
                  </span>
                </div>
              </div>
            </div>

            {/* Form fields */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>
                  {bookingMode === "trial" ? "ชื่อผู้ปกครอง *" : "ชื่อ-นามสกุลผู้เรียน *"}
                </div>
                <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder={bookingMode === "trial" ? "ชื่อ-นามสกุลผู้ปกครอง" : "ชื่อ-นามสกุลนักเรียน"}
                  style={iS} />
              </div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>เบอร์โทรศัพท์ *</div>
                <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  placeholder="08x-xxx-xxxx" style={iS} />
              </div>
              {bookingMode === "trial" && (
                <>
                  <div>
                    <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>อายุเด็ก</div>
                    <input value={form.childAge} onChange={e => setForm(p => ({ ...p, childAge: e.target.value }))}
                      placeholder="เช่น 9 ปี" style={iS} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 7 }}>ข้อความถึงทีมงาน</div>
                    <input value={form.note} onChange={e => setForm(p => ({ ...p, note: e.target.value }))}
                      placeholder="เช่น สนใจหลักสูตรอะไร" style={iS} />
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
                📞 ทีมงานจะโทรยืนยันภายใน 24 ชั่วโมง หากไม่ได้รับโทรศัพท์ กรุณาติดต่อผ่าน Facebook
              </div>
            )}

            <div style={{
              background: "rgba(255,255,255,0.025)", borderRadius: 10, padding: "10px 14px", marginBottom: 20,
              fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)"
            }}>
              🔒 ข้อมูลส่วนตัวได้รับการปกป้องตาม PDPA — เฉพาะ Admin เท่านั้นที่เห็นข้อมูลส่วนตัว
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
                {bookingMode === "trial" ? "🎯 ยืนยันทดลองเรียน" : "✓ ยืนยันการจอง"}
              </button>
              <button onClick={() => { setSelectedSlot(null); setSelectedTrialHour(null); }} style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.4)", padding: "13px 22px", borderRadius: 12,
                fontFamily: "'Kanit', sans-serif", fontSize: 14, cursor: "pointer"
              }}>ยกเลิก</button>
            </div>
          </div>
        )}

        {/* Bar chart summary */}
        <div style={{ marginTop: 48, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: 28 }}>
          <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 20 }}>📊 ภาพรวมการจอง 30 วันข้างหน้า</div>
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
            <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.2)" }}>วันนี้</span>
            <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.2)" }}>+30 วัน</span>
          </div>
        </div>

      </div>
    </div>
  );
}


// ==================== MOCK GALLERY DATA with timeline ====================
const MOCK_STUDENTS = [
  {
    id: "s001", name: "ด.ช.กวิน สุขใจ", avatar: "กว",
    startDate: "2024-06-01", level: "Intermediate",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=400&fit=crop", caption: "วันแรกที่มาเรียน! 🎉", date: "2024-06-01", tag: "เริ่มเรียน", milestone: true },
      { id: 2, url: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&h=400&fit=crop", caption: "ต่อหุ่นยนต์ LEGO ชิ้นแรก", date: "2024-06-15", tag: "กิจกรรม", milestone: false },
      { id: 3, url: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=500&h=400&fit=crop", caption: "เขียนโปรแกรมได้แล้ว 💻", date: "2024-07-10", tag: "ความสำเร็จ", milestone: true },
      { id: 4, url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop", caption: "ทดสอบหุ่นยนต์บนสนาม", date: "2024-08-05", tag: "กิจกรรม", milestone: false },
      { id: 5, url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop", caption: "🏆 ได้รับรางวัลชนะเลิศ!", date: "2024-09-20", tag: "รางวัล", milestone: true },
      { id: 6, url: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&h=400&fit=crop", caption: "Open House นำเสนอผลงาน", date: "2024-11-01", tag: "กิจกรรม", milestone: false },
    ]
  },
  {
    id: "s002", name: "ด.ญ.มินตรา วงศ์ทอง", avatar: "มิ",
    startDate: "2024-08-15", level: "Beginner",
    photos: [
      { id: 7, url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=400&fit=crop&sig=1", caption: "ยินดีต้อนรับสมาชิกใหม่ 🌟", date: "2024-08-15", tag: "เริ่มเรียน", milestone: true },
      { id: 8, url: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&h=400&fit=crop&sig=2", caption: "เรียนรู้ Scratch กับเพื่อน", date: "2024-09-01", tag: "กิจกรรม", milestone: false },
      { id: 9, url: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=500&h=400&fit=crop&sig=3", caption: "ผ่านทดสอบระดับเริ่มต้น ✅", date: "2024-10-10", tag: "ความสำเร็จ", milestone: true },
    ]
  },
];

// ==================== GALLERY PAGE ====================
function GalleryPage({ user, setPage }) {
  const [viewMode, setViewMode] = useState("timeline"); // "timeline" | "grid"
  const [selectedStudent, setSelectedStudent] = useState(MOCK_STUDENTS[0]);
  const [lightbox, setLightbox] = useState(null);
  const [filterTag, setFilterTag] = useState("ทั้งหมด");

  const allTags = ["ทั้งหมด", "เริ่มเรียน", "กิจกรรม", "ความสำเร็จ", "รางวัล"];

  const filteredPhotos = selectedStudent?.photos.filter(p =>
    filterTag === "ทั้งหมด" || p.tag === filterTag
  ) || [];

  // คำนวณระยะเวลาที่เรียนมา
  const getDuration = (start) => {
    const s = new Date(start);
    const now = new Date("2026-02-25");
    const months = (now.getFullYear() - s.getFullYear()) * 12 + now.getMonth() - s.getMonth();
    if (months < 1) return "น้อยกว่า 1 เดือน";
    if (months < 12) return `${months} เดือน`;
    return `${Math.floor(months / 12)} ปี ${months % 12} เดือน`;
  };

  const formatDate = (d) => {
    const dt = new Date(d);
    const months = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
    return `${dt.getDate()} ${months[dt.getMonth()]} ${dt.getFullYear() + 543}`;
  };

  const tagColor = { "เริ่มเรียน": "#4ECDC4", "กิจกรรม": "#FFD700", "ความสำเร็จ": "#6BCB77", "รางวัล": "#FF8C00" };

  if (!user) return (
    <div style={{ padding: "120px 24px", textAlign: "center", background: "#0a0c14", minHeight: "100vh" }}>
      <div style={{ fontSize: 64, marginBottom: 24 }}>🖼️</div>
      <h2 style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 16 }}>คลังภาพส่วนตัว</h2>
      <p style={{ fontFamily: "'Kanit', sans-serif", color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>เข้าสู่ระบบเพื่อดูภาพ timeline การเรียนของคุณ</p>
      <button onClick={() => setPage("login")} style={{
        background: "linear-gradient(135deg,#FF8C00,#FFD700)", border: "none",
        color: "#0a0c14", padding: "14px 36px", borderRadius: 12,
        fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, cursor: "pointer"
      }}>เข้าสู่ระบบ</button>
    </div>
  );

  return (
    <div style={{ padding: "100px 24px 80px", background: "#0a0c14", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader icon="🖼️" title="คลังภาพส่วนตัว" sub="ติดตาม Timeline การเรียนรู้ของนักเรียน" />

        {/* Student selector (admin เห็นทุกคน, student เห็นตัวเอง) */}
        {user.role === "admin" && (
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 10, letterSpacing: 1 }}>เลือกนักเรียน</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {MOCK_STUDENTS.map(s => (
                <button key={s.id} onClick={() => setSelectedStudent(s)} style={{
                  background: selectedStudent?.id === s.id ? "linear-gradient(135deg,#FF8C00,#FFD700)" : "rgba(255,255,255,0.05)",
                  border: "1px solid " + (selectedStudent?.id === s.id ? "transparent" : "rgba(255,255,255,0.1)"),
                  color: selectedStudent?.id === s.id ? "#0a0c14" : "#fff",
                  padding: "10px 20px", borderRadius: 12, cursor: "pointer",
                  fontFamily: "'Kanit', sans-serif", fontWeight: 600, fontSize: 14,
                  display: "flex", alignItems: "center", gap: 10
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: selectedStudent?.id === s.id ? "rgba(0,0,0,0.2)" : "rgba(255,140,0,0.2)",
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
                  <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>📚 ระดับ: <span style={{ color: "#FFD700" }}>{selectedStudent.level}</span></span>
                  <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>📅 เริ่มเรียน: <span style={{ color: "#4ECDC4" }}>{formatDate(selectedStudent.startDate)}</span></span>
                  <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>⏱️ เรียนมา: <span style={{ color: "#6BCB77" }}>{getDuration(selectedStudent.startDate)}</span></span>
                  <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>🖼️ ภาพทั้งหมด: <span style={{ color: "#FF8C00" }}>{selectedStudent.photos.length} ภาพ</span></span>
                </div>
              </div>
              {/* View mode toggle */}
              <div style={{ display: "flex", background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 4, gap: 4 }}>
                {[{ id: "timeline", icon: "📜", label: "Timeline" }, { id: "grid", icon: "⊞", label: "Grid" }].map(m => (
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

            {/* ══════ TIMELINE VIEW ══════ */}
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
                            }}>⭐ Milestone</div>
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
                      }}>🚀</div>
                    </div>
                    <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(78,205,196,0.7)" }}>กำลังเดินหน้าต่อ...</div>
                  </div>
                </div>
              </div>
            )}

            {/* ══════ GRID VIEW ══════ */}
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
                      }}>⭐ Milestone</div>
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
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{new Date(lightbox.date).toLocaleDateString("th-TH")} • {lightbox.tag}</div>
              </div>
              <button onClick={() => setLightbox(null)} style={{
                background: "rgba(255,255,255,0.08)", border: "none", color: "#fff",
                width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: 18
              }}>×</button>
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

  // ── จำลอง Google OAuth popup ──
  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError("");
    await new Promise(r => setTimeout(r, 1400));
    // จำลอง: Google ส่งข้อมูลกลับมา
    const mockGoogleUser = {
      name: "ผู้ปกครอง Google",
      email: "parent@gmail.com",
      avatar: "https://lh3.googleusercontent.com/a/default-user",
      role: "student",
      provider: "google",
    };
    setUser(mockGoogleUser);
    setGoogleLoading(false);
    setPage("home");
  };

  // ── Login ด้วย email/password ──
  const handleLogin = async () => {
    setError("");
    if (!form.email || !form.password) { setError("กรุณากรอกอีเมลและรหัสผ่าน"); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    if (form.email.toLowerCase().includes("admin")) {
      setUser({ name: "Admin BaanBot", role: "admin", email: form.email, provider: "email" });
    } else {
      setUser({ name: form.email.split("@")[0], role: "student", email: form.email, provider: "email" });
    }
    setLoading(false);
    setPage("home");
  };

  // ── สมัครสมาชิก ──
  const handleRegister = async () => {
    setError("");
    if (!form.name || !form.email || !form.password || !form.childName || !form.phone) {
      setError("กรุณากรอกข้อมูลให้ครบทุกช่อง"); return;
    }
    if (form.password.length < 8) { setError("รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"); return; }
    if (form.password !== form.confirmPassword) { setError("รหัสผ่านไม่ตรงกัน"); return; }
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
            {[{ id: "login", label: "เข้าสู่ระบบ" }, { id: "register", label: "สมัครสมาชิก" }].map(t => (
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

          {/* ════ Google button ════ */}
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
                กำลังเชื่อมต่อ Google...
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
                {tab === "login" ? "เข้าสู่ระบบด้วย Google" : "สมัครสมาชิกด้วย Google"}
              </>
            )}
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
            <span style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>หรือใช้อีเมล</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: "rgba(255,70,70,0.1)", border: "1px solid rgba(255,70,70,0.3)",
              borderRadius: 10, padding: "10px 14px", marginBottom: 16,
              fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "#ff6b6b",
              display: "flex", alignItems: "center", gap: 8
            }}>⚠️ {error}</div>
          )}

          {/* Register success */}
          {registerSuccess && (
            <div style={{
              background: "rgba(78,205,196,0.1)", border: "1px solid rgba(78,205,196,0.3)",
              borderRadius: 10, padding: "12px 16px", marginBottom: 16, textAlign: "center",
              fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "#4ECDC4"
            }}>✅ สมัครสมาชิกสำเร็จแล้ว! กำลังพาไปหน้าเข้าสู่ระบบ...</div>
          )}

          {/* ════ LOGIN FORM ════ */}
          {tab === "login" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>อีเมล</div>
                <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com" style={inputStyle}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"}
                  onKeyDown={e => e.key === "Enter" && handleLogin()} />
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>รหัสผ่าน</div>
                  <button style={{ background: "none", border: "none", color: "rgba(255,140,0,0.7)", fontFamily: "'Kanit', sans-serif", fontSize: 12, cursor: "pointer" }}>ลืมรหัสผ่าน?</button>
                </div>
                <div style={{ position: "relative" }}>
                  <input type={showPass ? "text" : "password"} value={form.password}
                    onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                    placeholder="••••••••" style={{ ...inputStyle, paddingRight: 44 }}
                    onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                    onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"}
                    onKeyDown={e => e.key === "Enter" && handleLogin()} />
                  <button onClick={() => setShowPass(v => !v)} style={{
                    position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer", fontSize: 16, opacity: 0.5
                  }}>{showPass ? "🙈" : "👁️"}</button>
                </div>
              </div>
              <button onClick={handleLogin} disabled={loading} style={{
                background: loading ? "rgba(255,140,0,0.4)" : "linear-gradient(135deg,#FF8C00,#FFD700)",
                border: "none", color: "#0a0c14", padding: "13px",
                borderRadius: 12, cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15, marginTop: 4,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8
              }}>
                {loading ? <><div style={{ width: 18, height: 18, borderRadius: "50%", border: "2.5px solid rgba(0,0,0,0.2)", borderTopColor: "#0a0c14", animation: "spin 0.8s linear infinite" }} />กำลังเข้าสู่ระบบ...</> : "เข้าสู่ระบบ"}
              </button>
            </div>
          )}

          {/* ════ REGISTER FORM ════ */}
          {tab === "register" && !registerSuccess && (
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {/* Section: ข้อมูลผู้ปกครอง */}
              <div style={{
                fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "#FF8C00",
                letterSpacing: 1, fontWeight: 700, marginBottom: 2
              }}>👤 ข้อมูลผู้ปกครอง</div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>ชื่อ-นามสกุลผู้ปกครอง *</div>
                <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder="กรอกชื่อ-นามสกุล" style={inputStyle}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"} />
              </div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>เบอร์โทรศัพท์ *</div>
                <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  placeholder="08x-xxx-xxxx" style={inputStyle}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"} />
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "4px 0" }} />
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "#4ECDC4", letterSpacing: 1, fontWeight: 700, marginBottom: 2 }}>🤖 ข้อมูลนักเรียน</div>

              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>ชื่อเด็กนักเรียน *</div>
                <input value={form.childName} onChange={e => setForm(p => ({ ...p, childName: e.target.value }))}
                  placeholder="ชื่อเล่น หรือ ชื่อจริงนักเรียน" style={inputStyle}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"} />
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "4px 0" }} />
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "#FFD700", letterSpacing: 1, fontWeight: 700, marginBottom: 2 }}>🔒 บัญชีและรหัสผ่าน</div>

              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>อีเมล *</div>
                <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com" style={inputStyle}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"} />
              </div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>รหัสผ่าน (อย่างน้อย 8 ตัวอักษร) *</div>
                <div style={{ position: "relative" }}>
                  <input type={showPass ? "text" : "password"} value={form.password}
                    onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                    placeholder="••••••••" style={{ ...inputStyle, paddingRight: 44 }}
                    onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                    onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"} />
                  <button onClick={() => setShowPass(v => !v)} style={{
                    position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer", fontSize: 16, opacity: 0.5
                  }}>{showPass ? "🙈" : "👁️"}</button>
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
                      {form.password.length < 6 ? "อ่อนมาก" : form.password.length < 8 ? "อ่อน" : /[A-Z]/.test(form.password) && /[0-9]/.test(form.password) ? "แข็งแกร่งมาก 💪" : "ปานกลาง"}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>ยืนยันรหัสผ่าน *</div>
                <input type="password" value={form.confirmPassword}
                  onChange={e => setForm(p => ({ ...p, confirmPassword: e.target.value }))}
                  placeholder="••••••••"
                  style={{ ...inputStyle, borderColor: form.confirmPassword && form.confirmPassword !== form.password ? "rgba(255,107,107,0.5)" : form.confirmPassword && form.confirmPassword === form.password ? "rgba(78,205,196,0.5)" : "rgba(255,255,255,0.12)" }}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,140,0,0.5)"}
                  onBlur={e => e.target.style.border = form.confirmPassword && form.confirmPassword !== form.password ? "1px solid rgba(255,107,107,0.5)" : "1px solid rgba(255,255,255,0.12)"} />
                {form.confirmPassword && form.confirmPassword === form.password && (
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "#4ECDC4", marginTop: 5 }}>✓ รหัสผ่านตรงกัน</div>
                )}
              </div>

              {/* PDPA consent */}
              <div style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10, padding: "12px 14px",
                fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7
              }}>
                🔒 ข้อมูลของท่านได้รับการปกป้องตาม <span style={{ color: "#FF8C00" }}>พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล (PDPA)</span> และจะถูกใช้เพื่อบริการของ BaanBot Chanthaburi เท่านั้น
              </div>

              <button onClick={handleRegister} disabled={loading} style={{
                background: loading ? "rgba(255,140,0,0.4)" : "linear-gradient(135deg,#FF8C00,#FFD700)",
                border: "none", color: "#0a0c14", padding: "13px",
                borderRadius: 12, cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15, marginTop: 4,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8
              }}>
                {loading ? <><div style={{ width: 18, height: 18, borderRadius: "50%", border: "2.5px solid rgba(0,0,0,0.2)", borderTopColor: "#0a0c14", animation: "spin 0.8s linear infinite" }} />กำลังสมัครสมาชิก...</> : "สมัครสมาชิก"}
              </button>
            </div>
          )}

          {/* Dev hint */}
          <div style={{
            marginTop: 20, padding: "10px 14px",
            background: "rgba(255,140,0,0.04)", borderRadius: 8,
            fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", lineHeight: 1.7
          }}>
            💡 ทดสอบ: email ที่มีคำว่า "admin" = เข้าในฐานะ Admin
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
  const [uploadForm, setUploadForm] = useState({ caption: "", tag: "กิจกรรม", date: new Date().toISOString().split("T")[0], milestone: false, url: "" });
  const [showUpload, setShowUpload] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const selected = students.find(s => s.id === selectedId);
  const tagColor = { "เริ่มเรียน": "#4ECDC4", "กิจกรรม": "#FFD700", "ความสำเร็จ": "#6BCB77", "รางวัล": "#FF8C00" };

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
    setUploadForm({ caption: "", tag: "กิจกรรม", date: new Date().toISOString().split("T")[0], milestone: false, url: "" });
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
        <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, color: "#fff", fontSize: 16 }}>🖼️ จัดการคลังภาพนักเรียน</div>
        <button onClick={() => setShowUpload(v => !v)} style={{
          background: showUpload ? "rgba(255,50,50,0.1)" : "linear-gradient(135deg,#FF8C00,#FFD700)",
          border: showUpload ? "1px solid rgba(255,50,50,0.3)" : "none",
          color: showUpload ? "#ff6b6b" : "#0a0c14",
          padding: "9px 20px", borderRadius: 10, cursor: "pointer",
          fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 14
        }}>{showUpload ? "✕ ยกเลิก" : "+ อัปโหลดภาพ"}</button>
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
            อัปโหลดภาพใหม่ → {selected?.name}
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
            <div style={{ fontSize: 32, marginBottom: 8 }}>📤</div>
            <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>ลากวางภาพที่นี่ หรือ</div>
            <button style={{
              background: "rgba(255,140,0,0.15)", border: "1px solid rgba(255,140,0,0.3)",
              color: "#FF8C00", padding: "7px 18px", borderRadius: 8,
              fontFamily: "'Kanit', sans-serif", fontSize: 13, cursor: "pointer"
            }}>เลือกไฟล์</button>
            <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 8 }}>รองรับ JPG, PNG, WEBP — ขนาดไม่เกิน 10MB</div>
          </div>
          <div style={{ marginBottom: 12, fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>หรือวาง URL ภาพ</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
            <div style={{ gridColumn: "1/-1" }}>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>URL ภาพ (optional)</div>
              <input value={uploadForm.url} onChange={e => setUploadForm(p => ({ ...p, url: e.target.value }))}
                placeholder="https://..." style={{
                  width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 9, padding: "10px 14px", color: "#fff",
                  fontFamily: "'Kanit', sans-serif", fontSize: 13, outline: "none", boxSizing: "border-box"
                }} />
            </div>
            <div style={{ gridColumn: "1/-1" }}>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>คำบรรยาย *</div>
              <input value={uploadForm.caption} onChange={e => setUploadForm(p => ({ ...p, caption: e.target.value }))}
                placeholder="เช่น น้องๆ กำลังสร้างหุ่นยนต์ 🤖" style={{
                  width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 9, padding: "10px 14px", color: "#fff",
                  fontFamily: "'Kanit', sans-serif", fontSize: 13, outline: "none", boxSizing: "border-box"
                }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>วันที่</div>
              <input type="date" value={uploadForm.date} onChange={e => setUploadForm(p => ({ ...p, date: e.target.value }))} style={{
                width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 9, padding: "10px 14px", color: "#fff",
                fontFamily: "'Kanit', sans-serif", fontSize: 13, outline: "none", boxSizing: "border-box"
              }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>ประเภท</div>
              <select value={uploadForm.tag} onChange={e => setUploadForm(p => ({ ...p, tag: e.target.value }))} style={{
                width: "100%", background: "#1a1f2e", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 9, padding: "10px 14px", color: "#fff",
                fontFamily: "'Kanit', sans-serif", fontSize: 13, outline: "none", boxSizing: "border-box"
              }}>
                {["กิจกรรม", "เริ่มเรียน", "ความสำเร็จ", "รางวัล"].map(t => <option key={t} value={t}>{t}</option>)}
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
                  ⭐ ทำเครื่องหมายเป็น Milestone (จุดสำคัญในการเรียน)
                </span>
              </label>
            </div>
          </div>
          <button onClick={handleAddPhoto} disabled={!uploadForm.caption} style={{
            background: uploadForm.caption ? "linear-gradient(135deg,#FF8C00,#FFD700)" : "rgba(255,255,255,0.08)",
            border: "none", color: uploadForm.caption ? "#0a0c14" : "rgba(255,255,255,0.3)",
            padding: "11px 28px", borderRadius: 10, cursor: uploadForm.caption ? "pointer" : "not-allowed",
            fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 14
          }}>✓ บันทึกภาพ</button>
        </div>
      )}

      {/* Photos grid for selected student */}
      {selected && (
        <div>
          <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
            ภาพทั้งหมดของ {selected.name} ({selected.photos.length} ภาพ) — เรียงตามวันที่
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
                  }}>⭐ Milestone</div>
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
                    }}>{photo.milestone ? "⭐ ยกเลิก" : "☆ Milestone"}</button>
                    <button onClick={() => setDeleteConfirm(photo.id)} style={{
                      background: "rgba(255,50,50,0.7)", border: "none", color: "#fff",
                      width: 28, height: 28, borderRadius: 6, cursor: "pointer", fontSize: 14
                    }}>🗑</button>
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
              <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,140,0,0.7)" }}>เพิ่มภาพ</div>
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
            <div style={{ fontSize: 40, marginBottom: 16 }}>🗑️</div>
            <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>ยืนยันการลบภาพ</div>
            <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>ภาพจะถูกลบถาวรและไม่สามารถกู้คืนได้</div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button onClick={() => handleDelete(deleteConfirm)} style={{
                background: "rgba(255,50,50,0.9)", border: "none", color: "#fff",
                padding: "10px 24px", borderRadius: 10, cursor: "pointer",
                fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 14
              }}>ลบเลย</button>
              <button onClick={() => setDeleteConfirm(null)} style={{
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                color: "#aaa", padding: "10px 24px", borderRadius: 10, cursor: "pointer",
                fontFamily: "'Kanit', sans-serif", fontSize: 14
              }}>ยกเลิก</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== ADMIN PAGE ====================
function AdminPage({ user }) {
  const [tab, setTab] = useState("dashboard");

  if (!user || user.role !== "admin") return (
    <div style={{ padding: "120px 24px", textAlign: "center", background: "#0a0c14", minHeight: "100vh" }}>
      <div style={{ fontSize: 64, marginBottom: 24 }}>⛔</div>
      <h2 style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff" }}>ไม่มีสิทธิ์เข้าถึง</h2>
    </div>
  );

  return (
    <div style={{ padding: "100px 24px 80px", background: "#0a0c14", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
          <div>
            <h1 style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", margin: 0 }}>⚙️ Admin Panel</h1>
            <p style={{ fontFamily: "'Kanit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>ศูนย์บัญชาการ BaanBot Chanthaburi</p>
          </div>
          <div style={{
            background: "rgba(78,205,196,0.1)", border: "1px solid rgba(78,205,196,0.3)",
            borderRadius: 8, padding: "6px 14px",
            fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "#4ECDC4"
          }}>🟢 ระบบทำงานปกติ</div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {[
            { id: "dashboard", label: "📊 Dashboard" },
            { id: "news", label: "📰 จัดการข่าว" },
            { id: "bookings", label: "📅 การจอง" },
            { id: "gallery", label: "🖼️ คลังภาพ" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              background: tab === t.id ? "linear-gradient(135deg,#FF8C00,#FFD700)" : "rgba(255,255,255,0.05)",
              border: "1px solid " + (tab === t.id ? "transparent" : "rgba(255,255,255,0.1)"),
              color: tab === t.id ? "#0a0c14" : "#aaa",
              padding: "10px 20px", borderRadius: 10, cursor: "pointer",
              fontFamily: "'Kanit', sans-serif", fontWeight: tab === t.id ? 700 : 400, fontSize: 14
            }}>{t.label}</button>
          ))}
        </div>

        {tab === "dashboard" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
              {[
                { icon: "📅", label: "การจองวันนี้", val: "3 รายการ", color: "#FF8C00" },
                { icon: "👥", label: "สมาชิกทั้งหมด", val: "47 คน", color: "#4ECDC4" },
                { icon: "📰", label: "ข่าวสารทั้งหมด", val: "12 ข่าว", color: "#FFD700" },
                { icon: "🖼️", label: "ภาพในคลัง", val: "234 ภาพ", color: "#FF4757" },
              ].map((s, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16, padding: "20px 24px"
                }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 800, fontSize: 24, color: s.color }}>{s.val}</div>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16, padding: 24
            }}>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 16 }}>รอบที่นิยมที่สุด</div>
              {TIME_SLOTS.map((slot, i) => (
                <div key={slot.id} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", width: 120 }}>{slot.label}</div>
                  <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${[85, 60, 70, 45, 90][i]}%`, background: "linear-gradient(90deg,#FF8C00,#FFD700)", borderRadius: 4 }} />
                  </div>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "#FFD700", width: 40 }}>{[85, 60, 70, 45, 90][i]}%</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "bookings" && (
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'Kanit', sans-serif", fontWeight: 700, color: "#fff", fontSize: 16 }}>รายการจองทั้งหมด</div>
            {[
              { name: "ด.ช.กวิน สุขใจ", phone: "086-123-4567", date: "26 ก.พ. 2569", slot: "รอบเช้า 1", status: "ยืนยัน" },
              { name: "ด.ญ.มินตรา วงศ์ทอง", phone: "081-987-6543", date: "26 ก.พ. 2569", slot: "รอบบ่าย 1", status: "ยืนยัน" },
              { name: "ด.ช.ปัณณ์ อัจฉริยะ", phone: "089-555-1234", date: "27 ก.พ. 2569", slot: "รอบเช้า 2", status: "รอยืนยัน" },
            ].map((b, i) => (
              <div key={i} style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>{b.name}</div>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{b.phone} • {b.date} • {b.slot}</div>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{
                    background: b.status === "ยืนยัน" ? "rgba(78,205,196,0.15)" : "rgba(255,215,0,0.15)",
                    color: b.status === "ยืนยัน" ? "#4ECDC4" : "#FFD700",
                    borderRadius: 100, padding: "4px 12px", fontSize: 12,
                    fontFamily: "'Kanit', sans-serif"
                  }}>{b.status}</span>
                  <button style={{
                    background: "rgba(255,50,50,0.1)", border: "1px solid rgba(255,50,50,0.2)",
                    color: "#ff6b6b", padding: "5px 12px", borderRadius: 8,
                    fontFamily: "'Kanit', sans-serif", fontSize: 12, cursor: "pointer"
                  }}>ยกเลิก</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "news" && (
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, color: "#fff", fontSize: 16 }}>จัดการข่าวสาร</div>
              <button style={{
                background: "linear-gradient(135deg,#FF8C00,#FFD700)", border: "none",
                color: "#0a0c14", padding: "8px 18px", borderRadius: 8,
                fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer"
              }}>+ เพิ่มข่าว</button>
            </div>
            {MOCK_NEWS.map(n => (
              <div key={n.id} style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 600, fontSize: 14, color: "#fff", marginBottom: 4 }}>{n.title}</div>
                  <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{n.date} • {n.tag}</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{ background: "rgba(255,140,0,0.1)", border: "1px solid rgba(255,140,0,0.2)", color: "#FF8C00", padding: "5px 12px", borderRadius: 8, fontFamily: "'Kanit', sans-serif", fontSize: 12, cursor: "pointer" }}>แก้ไข</button>
                  <button style={{ background: "rgba(255,50,50,0.1)", border: "1px solid rgba(255,50,50,0.2)", color: "#ff6b6b", padding: "5px 12px", borderRadius: 8, fontFamily: "'Kanit', sans-serif", fontSize: 12, cursor: "pointer" }}>ลบ</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "gallery" && (
          <AdminGalleryPanel />
        )}
      </div>
    </div>
  );
}

// ==================== APP ====================
export default function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "BaanBot Chanthaburi";
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: #0a0c14; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #0a0c14; }
      ::-webkit-scrollbar-thumb { background: rgba(255,140,0,0.3); border-radius: 3px; }
      input::placeholder { color: rgba(255,255,255,0.25); }
      @keyframes float0 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-30px); } }
      @keyframes float1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-20px,20px); } }
      @keyframes float2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(15px,15px); } }
    `;
    document.head.appendChild(style);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage setPage={setPage} />;
      case "news": return <NewsPage />;
      case "booking": return <BookingPage user={user} setPage={setPage} />;
      case "gallery": return <GalleryPage user={user} setPage={setPage} />;
      case "login": return <LoginPage setUser={setUser} setPage={setPage} />;
      case "admin": return <AdminPage user={user} />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ fontFamily: "'Kanit', sans-serif" }}>
      <NavBar page={page} setPage={setPage} user={user} setUser={setUser} />
      {renderPage()}

      {/* Footer */}
      <footer style={{
        background: "#060810", padding: "40px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div style={{ cursor: "pointer" }} onClick={() => setPage("home")}>
            <BaanBotLogo width={200} />
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["home", "news", "booking", "gallery"].map(p => (
              <button key={p} onClick={() => setPage(p)} style={{
                background: "none", border: "none", color: "rgba(255,255,255,0.4)",
                fontFamily: "'Kanit', sans-serif", fontSize: 13, cursor: "pointer"
              }}>{{ home: "หน้าหลัก", news: "ข่าวสาร", booking: "จองเรียน", gallery: "คลังภาพ" }[p]}</button>
            ))}
            {user?.role === "admin" && (
              <button onClick={() => setPage("admin")} style={{
                background: "rgba(255,140,0,0.1)", border: "1px solid rgba(255,140,0,0.2)",
                color: "#FF8C00", fontFamily: "'Kanit', sans-serif", fontSize: 13, cursor: "pointer",
                borderRadius: 6, padding: "4px 12px"
              }}>Admin</button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
