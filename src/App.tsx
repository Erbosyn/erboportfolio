import type { FC, ReactNode } from "react";
import {
  ArrowRight,
  User,
  MessageCircle,
  PlayCircle,
  Smartphone,
  ExternalLink
} from "lucide-react";

/* ─── Icons ─── */
const TikTokIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
  </svg>
);

const InstagramIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TelegramIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const AppleIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.801 8.99l-2.302 2.302-8.635-8.634z" />
  </svg>
);

/* ─── Apple Glassmorphism Card Style ─── */
const glassCard = `
  bg-white/[0.06] border border-white/[0.12] 
  shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] 
  backdrop-blur-xl rounded-[32px] p-6 
  transition-all duration-500 ease-out 
  hover:bg-white/[0.1] hover:border-white/[0.2] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.4)]
  active:scale-[0.96] active:bg-white/[0.04]
`;

/* ─── App Component ─── */
const App: FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050510] text-white font-sans overflow-hidden selection:bg-purple-500/30">
      
      {/* ─── Custom Styles for Apple Dynamic Background ─── */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 12s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        /* Smooth scrolling */
        html { scroll-behavior: smooth; }
      `}</style>

      {/* ─── Apple iOS Dynamic Gradient Background ─── */}
      <div className="fixed inset-0 z-0 opacity-80 pointer-events-none">
        <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] bg-[#3b28cc] rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-15%] w-[70%] h-[70%] bg-[#8b15a1] rounded-full mix-blend-screen filter blur-[130px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[10%] w-[60%] h-[60%] bg-[#0e7490] rounded-full mix-blend-screen filter blur-[140px] animate-blob animation-delay-4000"></div>
        {/* Deep shadow overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[60px]"></div>
      </div>

      <main className="relative z-10 w-full max-w-[460px] mx-auto px-5 py-12 pb-24">
        
        {/* 1. Profile Header */}
        <header className="flex flex-col items-center text-center mb-10">
          <div className="w-28 h-28 rounded-full bg-white/[0.08] p-1.5 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] backdrop-blur-md mb-6">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-white/10 to-white/5 overflow-hidden">
              <img src="/avatar.jpg" alt="Ерболсын" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2 drop-shadow-md">
            Ерболсын
          </h1>
          <p className="text-white/70 text-[16px] font-medium leading-relaxed max-w-[300px]">
            AI Video Creator & IT Developer. <br/>
            Креативті контент пен жарнама.
          </p>
        </header>

        {/* 2. Primary CTAs (Rich & Smooth) */}
        <div className="flex flex-col gap-4 mb-12">
          <a
            href="https://wa.me/77000957565"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative overflow-hidden group bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-bold text-[17px] rounded-[32px] p-[22px] flex items-center justify-between shadow-[0_12px_40px_rgba(16,185,129,0.3)] hover:shadow-[0_16px_50px_rgba(16,185,129,0.5)] transition-all duration-500 active:scale-[0.96]"
          >
            {/* Glossy overlay effect inside button */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
            <span className="relative flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              ИИ видеоға тапсырыс
            </span>
            <ArrowRight className="w-6 h-6 relative opacity-80 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://wa.me/77000957565"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-between font-semibold text-[16px] !p-5 ${glassCard}`}
          >
            <span className="flex items-center gap-3 text-white/90">
              <PlayCircle className="w-6 h-6 text-white/70" />
              ИИ үйрену / Сабақтар
            </span>
            <ArrowRight className="w-5 h-5 text-white/40" />
          </a>
        </div>

        {/* 3. Portfolio Widgets (Apple Style Bento) */}
        <div className="mb-12">
          <h2 className="text-[13px] font-bold tracking-widest text-white/50 uppercase mb-4 px-2">
            Портфолио
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.tiktok.com/@kingerbo?_r=1&_t=ZS-99XThm0I05Y" target="_blank" rel="noopener noreferrer" className={`block ${glassCard} !p-5`}>
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/10">
                <TikTokIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[16px] font-bold text-white tracking-tight mb-1">kingerbo</h3>
              <p className="text-[13px] text-white/60 font-medium">ИИ жарнама</p>
            </a>
            
            <a href="https://www.tiktok.com/@aiqulaq?_r=1&_t=ZG-99XTgegBXDk" target="_blank" rel="noopener noreferrer" className={`block ${glassCard} !p-5`}>
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/10">
                <TikTokIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[16px] font-bold text-white tracking-tight mb-1">aiqulaq</h3>
              <p className="text-[13px] text-white/60 font-medium">Креативті ИИ</p>
            </a>

            <a href="https://instagram.com/yerbollsyn" target="_blank" rel="noopener noreferrer" className={`block ${glassCard} !p-5`}>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500/80 to-purple-500/80 flex items-center justify-center mb-4 border border-white/20 shadow-inner">
                <InstagramIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[16px] font-bold text-white tracking-tight mb-1">yerbollsyn</h3>
              <p className="text-[13px] text-white/60 font-medium">Блог & жұмыстар</p>
            </a>

            <a href="https://t.me/aiqulaq" target="_blank" rel="noopener noreferrer" className={`block ${glassCard} !p-5`}>
              <div className="w-10 h-10 rounded-2xl bg-blue-500/80 flex items-center justify-center mb-4 border border-white/20 shadow-inner">
                <TelegramIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[16px] font-bold text-white tracking-tight mb-1">aiqulaq (TG)</h3>
              <p className="text-[13px] text-white/60 font-medium">Құралдар</p>
            </a>
          </div>
        </div>

        {/* 4. IT Projects Section */}
        <div>
          <h2 className="text-[13px] font-bold tracking-widest text-white/50 uppercase mb-4 px-2">
            IT Қосымшалар
          </h2>

          <div className="flex flex-col gap-4">
            <div className={`relative overflow-hidden ${glassCard}`}>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-10 h-10 rounded-[14px] bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-md">
                  <Smartphone className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-[20px] font-bold text-white tracking-tight">Arystap</h3>
              </div>
              
              <p className="text-[14px] text-white/70 font-medium leading-relaxed mb-6 relative z-10">
                Арыс қаласына арналған супер-қосымша (OLX/Крыша баламасы + AI агент).
              </p>
              
              <div className="flex items-center gap-3 relative z-10">
                <a href="https://apps.apple.com/kz/app/arystap/id6764302073" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors rounded-2xl px-2 py-3 text-[14px] font-semibold text-white backdrop-blur-md active:scale-95">
                  <AppleIcon className="w-4 h-4" /> App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=kz.erbom.arystap" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors rounded-2xl px-2 py-3 text-[14px] font-semibold text-white backdrop-blur-md active:scale-95">
                  <ExternalLink className="w-4 h-4 text-white/70" /> Play Market
                </a>
              </div>
            </div>

            <div className={`relative overflow-hidden ${glassCard}`}>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-10 h-10 rounded-[14px] bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-md">
                  <Smartphone className="w-5 h-5 text-emerald-300" />
                </div>
                <h3 className="text-[20px] font-bold text-white tracking-tight">Qoramsap</h3>
              </div>
              
              <p className="text-[14px] text-white/70 font-medium leading-relaxed mb-6 relative z-10">
                Қарызды есептеу және басқару мобильді қосымшасы (+ AI агент).
              </p>
              
              <div className="flex items-center gap-3 relative z-10">
                <a href="https://play.google.com/store/apps/details?id=kz.qoramsap.app" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors rounded-2xl px-2 py-3 text-[14px] font-semibold text-white backdrop-blur-md active:scale-95">
                  <ExternalLink className="w-4 h-4 text-white/70" /> Play Market
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;
