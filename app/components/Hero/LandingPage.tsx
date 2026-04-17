/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

// ─── Line-Art SVG Illustrations ─────────────────────────────────────────────

const CameraSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 110" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="10" y="25" width="140" height="75" rx="6" />
    <circle cx="80" cy="62" r="22" />
    <circle cx="80" cy="62" r="14" />
    <circle cx="80" cy="62" r="6" />
    <rect x="55" y="10" width="50" height="18" rx="4" />
    <circle cx="130" cy="38" r="6" />
    <rect x="18" y="33" width="20" height="14" rx="2" />
  </svg>
);

const CompassSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="60" cy="60" r="52" />
    <circle cx="60" cy="60" r="44" />
    <circle cx="60" cy="60" r="4" />
    <polygon points="60,18 66,60 60,52 54,60" fill="currentColor" />
    <polygon points="60,102 66,60 60,68 54,60" opacity="0.3" fill="currentColor" />
  </svg>
);

const WatchSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 240 80" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="5" y="22" width="80" height="36" rx="4" />
    <rect x="85" y="26" width="70" height="28" rx="14" />
    <rect x="155" y="22" width="80" height="36" rx="4" />
    <circle cx="120" cy="40" r="14" />
    <circle cx="120" cy="40" r="2" fill="currentColor" />
    {[0,1,2,3,4,5,6,7].map(i => (
      <circle key={i} cx={20 + i * 10} cy="36" r="1.5" fill="currentColor" stroke="none" />
    ))}
    {[0,1,2,3,4,5,6,7].map(i => (
      <circle key={i} cx={168 + i * 10} cy="36" r="1.5" fill="currentColor" stroke="none" />
    ))}
  </svg>
);

const SunglassesSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 80" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M5 30 L30 30" />
    <path d="M130 30 L155 30" />
    <rect x="30" y="18" width="42" height="32" rx="16" />
    <rect x="88" y="18" width="42" height="32" rx="16" />
    <path d="M72 30 L88 30" />
    <line x1="5" y1="30" x2="5" y2="50" strokeLinecap="round" />
    <line x1="155" y1="30" x2="155" y2="50" strokeLinecap="round" />
  </svg>
);

const NotebookSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 130" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="15" y="5" width="75" height="120" rx="3" />
    <rect x="5" y="5" width="14" height="120" rx="2" />
    {[0,1,2,3,4].map(i => (
      <circle key={i} cx="12" cy={22 + i * 22} r="3" />
    ))}
    <rect x="36" y="5" width="38" height="16" rx="2" />
  </svg>
);

const PencilSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 30 140" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="8" y="10" width="14" height="100" />
    <polygon points="8,110 22,110 15,130" />
    <rect x="8" y="5" width="14" height="8" fill="currentColor" opacity="0.15" />
    <rect x="8" y="10" width="14" height="6" />
    <line x1="15" y1="110" x2="15" y2="128" />
  </svg>
);

const LensSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 160" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="20" y="5" width="40" height="150" rx="4" />
    <ellipse cx="40" cy="80" rx="20" ry="20" />
    <ellipse cx="40" cy="80" rx="14" ry="14" />
    {[30,40,50,60,70,90,100,110,120,130].map(y => (
      <line key={y} x1="22" y1={y} x2="24" y2={y} />
    ))}
  </svg>
);

const BowtieSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 180 100" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M20 20 L85 50 L20 80 Z" />
    <path d="M160 20 L95 50 L160 80 Z" />
    <ellipse cx="90" cy="50" rx="10" ry="16" />
    <path d="M20 20 Q10 15 8 50 Q10 85 20 80" />
    <path d="M160 20 Q170 15 172 50 Q170 85 160 80" />
  </svg>
);

const MicroscopeSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 90 150" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="35" y="5" width="22" height="30" rx="3" />
    <line x1="46" y1="35" x2="46" y2="60" />
    <ellipse cx="46" cy="65" rx="15" ry="8" />
    <rect x="38" y="35" width="16" height="8" rx="1" />
  </svg>
);

const RulerSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 40" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="5" y="8" width="190" height="24" rx="2" />
    {Array.from({length: 19}, (_, i) => (
      <line key={i} x1={15 + i * 10} y1="8" x2={15 + i * 10} y2={i % 5 === 0 ? 20 : 15} />
    ))}
    {[0,1,2,3].map(i => (
      <text key={i} x={15 + i * 50} y="30" fontSize="7" stroke="none" fill="currentColor">{i * 5}</text>
    ))}
  </svg>
);

// ─── Ticker Component ────────────────────────────────────────────────────────


// ─── Main Page ───────────────────────────────────────────────────────────────

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
  
      {/* ── Navbar ── */}
             <nav className="flex items-center justify-between px-8 py-2 bg-gray-100 relative z-30 backdrop-blur-2xl">
        <span className="text-[15px] font-bold text-primary tracking-[0.18em] uppercase">Tisso Vison</span>
        <span className="text-[13px] text-gray-800 tracking-tight hidden md:block">Find the ideal gift for your loved ones.</span>
        <button  className="bg-secondary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-900 px-5 py-2.5 text-xs uppercase flex items-center gap-3">
          Choose Gift <span className="text-base">→</span>
        </button>
      </nav>

      {/* ── Hero ── */}
      <div className="relative min-h-[calc(100vh-74px)] flex flex-col">

        {/* Illustration Collage — full background */}
        <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>

          {/* Top row */}
          <div className="absolute  left-[5%] w-60 float-slow" style={{"--r":"−12deg"} as React.CSSProperties}>
            <SunglassesSVG className="text-black/80" />
          </div>
          <div className="absolute  left-[14%] w-100 float-mid" style={{"--r":"3deg"} as React.CSSProperties}>
            <CameraSVG className="text-black/75" />
          </div>
          <div className="absolute  left-[42%] w-70 float-slow" style={{"--r":"0deg"} as React.CSSProperties}>
            <MicroscopeSVG className="text-black/60" />
          </div>
          <div className="absolute  left-[56%] w-40 float-mid" style={{"--r":"−5deg"} as React.CSSProperties}>
            <NotebookSVG className="text-black/70" />
          </div>
          <div className="absolute  left-[68%] w-25 float-fast" style={{"--r":"−8deg"} as React.CSSProperties}>
            <PencilSVG className="text-black/65" />
          </div>
          <div className="absolute right-[8%] w-50 float-slow" style={{"--r":"8deg"} as React.CSSProperties}>
            <LensSVG className="text-black/55" />
          </div>
          <div className="absolute  right-[2%] w-50 float-mid" style={{"--r":"−3deg"} as React.CSSProperties}>
            <CameraSVG className="text-black/60" />
          </div>

          {/* Middle row */}
          <div className="absolute top-[38%] left-[36%] w-25 float-mid" style={{"--r":"0deg"} as React.CSSProperties}>
            <CompassSVG className="text-black/80" />
          </div>
          <div className="absolute top-[42%] left-[56%] w-80 float-slow" style={{"--r":"0deg"} as React.CSSProperties}>
            <WatchSVG className="text-black/75" />
          </div>
          <div className="absolute top-[54%] left-[35%] w-2 float-fast" style={{"--r":"0deg"} as React.CSSProperties}>
            <BowtieSVG className="text-black/70" />
          </div>
          <div className="absolute top-[36%] right-[4%] w-30 float-mid" style={{"--r":"5deg"} as React.CSSProperties}>
            <LensSVG className="text-black/60" />
          </div>
          <div className="absolute top-[48%] right-[12%] w-60 float-slow" style={{"--r":"−2deg"} as React.CSSProperties}>
            <RulerSVG className="text-black/50" />
          </div>

          {/* Bottom row */}
          <div className="absolute bottom-[6%] left-[32%] w-50 float-mid" style={{"--r":"−10deg"} as React.CSSProperties}>
            <SunglassesSVG className="text-black/65" />
          </div>
          <div className="absolute bottom-[2%] left-[44%] w-100 float-slow" style={{"--r":"2deg"} as React.CSSProperties}>
            <CameraSVG className="text-black/70" />
          </div>
          <div className="absolute bottom-[10%] right-[16%] w-25 float-fast" style={{"--r":"6deg"} as React.CSSProperties}>
            <MicroscopeSVG className="text-black/55" />
          </div>
          <div className="absolute bottom-[5%] right-[5%] w-50 float-mid" style={{"--r":"−4deg"} as React.CSSProperties}>
            <CameraSVG className="text-black/65" />
          </div>
          <div className="absolute bottom-[14%] right-[28%] w-25 float-slow" style={{"--r":"−6deg"} as React.CSSProperties}>
            <LensSVG className="text-black/45" />
          </div>
        </div>

        {/* ── Text Block (bottom-left) ── */}
        <div className="relative z-10 mt-auto px-8 pb-30 max-w-lg">
          <h1
            className="text-6xl font-semibold text-primary mb-10"
          >
            The Gift Guide
          </h1>
          <p className={`text-sm text-gray-900 leading-relaxed mb-8 max-w-sm fade-up delay-2`}>
            Discover Joy: Your Ultimate Holiday Gift Destination.
            Explore our curated selection and find the perfect gifts to
            delight your loved ones this holiday season.
          </p>
          <div className={`flex items-center gap-4 fade-up delay-3`}>
            <button className="bg-primary px-7 py-3 hover:bg-secondary hover:text-primary transition-all duration-300 cursor-pointer text-xs font-medium tracking-[0.15em] uppercase flex items-center gap-3">
              Shop Now <span className="text-base">→</span>
            </button>
          </div>
        </div>
      </div>

            {/* ── Footer ── */}
             <footer className="flex items-center justify-center px-8 py-2 bg-gray-100 relative z-30 backdrop-blur-2xl">
        <span className="text-[13px] text-gray-800 tracking-tight hidden md:block">
SUSTAINABLE, ETHICALLY MADE CLOTHES IN SIZES XXS TO 6XL</span>
      </footer>

    </div>
  );
}