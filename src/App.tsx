import type { FC, ReactNode } from "react";
import {
  ArrowRight,
  Video,
  Code2,
  ExternalLink,
  MessageSquare
} from "lucide-react";

/* ─── Minimalist Monochrome Icons ─── */
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

/* ─── Ultra-Premium Base Styles ─── */
// pure black bg, thin borders, high contrast
const cardClass = "group block w-full bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#333] hover:bg-[#111] transition-all duration-300 rounded-[20px] p-5 active:scale-[0.98]";

/* ─── App Component ─── */
const App: FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* 
        Subtle grain/noise overlay (CSS purely visual) 
        Creates that expensive matte texture
      */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <main className="relative z-10 w-full max-w-[440px] mx-auto px-6 py-16 pb-32">
        
        {/* 1. Ultra-Minimal Header */}
        <header className="mb-12">
          {/* Text-focused, typography-first approach */}
          <h1 className="text-5xl font-extrabold tracking-tighter text-white mb-4">
            Ерболсын.
          </h1>
          <p className="text-[#888] text-[17px] leading-relaxed tracking-tight font-medium">
            AI Video Creator & IT Developer. <br/>
            Креативті контент пен қосымшалар.
          </p>
        </header>

        {/* 2. Main High-End CTAs */}
        <div className="flex flex-col gap-3 mb-14">
          <a
            href="https://wa.me/77000957565"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-16 bg-white text-black font-semibold text-[17px] tracking-tight rounded-full flex items-center justify-between px-6 hover:scale-[1.02] active:scale-[0.97] transition-transform duration-300"
          >
            <span className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5" />
              ИИ видеоға тапсырыс
            </span>
            <ArrowRight className="w-5 h-5 text-black/50" />
          </a>

          <a
            href="https://wa.me/77000957565"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-16 bg-transparent border border-[#222] text-[#ccc] font-medium text-[16px] tracking-tight rounded-full flex items-center justify-between px-6 hover:bg-[#111] hover:text-white hover:border-[#444] hover:scale-[1.02] active:scale-[0.97] transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              <Video className="w-5 h-5 text-[#666]" />
              ИИ үйрену / Сабақтар
            </span>
            <ArrowRight className="w-5 h-5 text-[#444]" />
          </a>
        </div>

        {/* 3. Social & Portfolio (Grid) */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-[#666] uppercase">Портфолио</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <a href="https://www.tiktok.com/@kingerbo?_r=1&_t=ZS-99XThm0I05Y" target="_blank" rel="noopener noreferrer" className={cardClass}>
              <TikTokIcon className="w-6 h-6 text-white mb-6" />
              <h3 className="text-[15px] font-semibold text-white tracking-tight">kingerbo</h3>
              <p className="text-[12px] text-[#777] mt-1 leading-snug">ИИ жарнамалар</p>
            </a>
            
            <a href="https://www.tiktok.com/@aiqulaq?_r=1&_t=ZG-99XTgegBXDk" target="_blank" rel="noopener noreferrer" className={cardClass}>
              <TikTokIcon className="w-6 h-6 text-white mb-6" />
              <h3 className="text-[15px] font-semibold text-white tracking-tight">aiqulaq</h3>
              <p className="text-[12px] text-[#777] mt-1 leading-snug">Креативті ИИ</p>
            </a>

            <a href="https://instagram.com/yerbollsyn" target="_blank" rel="noopener noreferrer" className={cardClass}>
              <InstagramIcon className="w-6 h-6 text-white mb-6" />
              <h3 className="text-[15px] font-semibold text-white tracking-tight">yerbollsyn</h3>
              <p className="text-[12px] text-[#777] mt-1 leading-snug">Блог & видеолар</p>
            </a>

            <a href="https://t.me/aiqulaq" target="_blank" rel="noopener noreferrer" className={cardClass}>
              <TelegramIcon className="w-6 h-6 text-white mb-6" />
              <h3 className="text-[15px] font-semibold text-white tracking-tight">aiqulaq (TG)</h3>
              <p className="text-[12px] text-[#777] mt-1 leading-snug">Құралдар & сабақтар</p>
            </a>
          </div>
        </div>

        {/* 4. IT Projects Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-[#666] uppercase">IT Қосымшалар</h2>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-[24px] p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <Code2 className="w-6 h-6 text-[#333]" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-2">Arystap</h3>
              <p className="text-[#888] text-[14px] leading-relaxed max-w-[85%] mb-8">
                Арыс қаласына арналған супер-қосымша (OLX/Крыша баламасы + AI агент).
              </p>
              
              <div className="flex items-center gap-3">
                <a href="https://apps.apple.com/kz/app/arystap/id6764302073" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#111] border border-[#222] hover:bg-[#1a1a1a] transition-colors rounded-full px-5 py-2.5 text-[13px] font-medium text-white">
                  <AppleIcon className="w-4 h-4" /> App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=kz.erbom.arystap" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#111] border border-[#222] hover:bg-[#1a1a1a] transition-colors rounded-full px-5 py-2.5 text-[13px] font-medium text-white">
                  <ExternalLink className="w-3.5 h-3.5 text-[#888]" /> Play Market
                </a>
              </div>
            </div>

            <div className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-[24px] p-6 relative overflow-hidden">
              <h3 className="text-xl font-bold tracking-tight text-white mb-2">Qoramsap</h3>
              <p className="text-[#888] text-[14px] leading-relaxed max-w-[85%] mb-8">
                Қарызды есептеу және басқару мобильді қосымшасы (+ AI агент).
              </p>
              
              <div className="flex items-center gap-3">
                <a href="https://play.google.com/store/apps/details?id=kz.qoramsap.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#111] border border-[#222] hover:bg-[#1a1a1a] transition-colors rounded-full px-5 py-2.5 text-[13px] font-medium text-white">
                  <ExternalLink className="w-3.5 h-3.5 text-[#888]" /> Play Market
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
