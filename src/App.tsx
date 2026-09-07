import type { FC } from "react";
import {
  MessageCircle,
  PlayCircle,
  Smartphone,
} from "lucide-react";

/* ─── TikTok SVG ─── */
const TikTokIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
  </svg>
);

/* ─── Instagram SVG ─── */
const InstagramIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

/* ─── Telegram SVG ─── */
const TelegramIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

/* ─── Apple SVG ─── */
const AppleIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

/* ─── Google Play SVG ─── */
const GooglePlayIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3.18 23.76c.35.2.76.22 1.14.07l11.45-6.61-2.42-2.43-10.17 8.97zm-1.01-19.5a1.5 1.5 0 00-.17.73v18.02c0 .26.06.5.17.73l.09.09 10.1-10.1v-.24L2.26 4.17l-.09.09zM20.43 10.8l-2.9-1.68-2.72 2.72 2.72 2.72 2.92-1.69c.83-.48.83-1.59-.02-2.07zM4.32.17C3.94.02 3.53.04 3.18.24l10.17 10.17 2.42-2.42L4.32.17z" />
  </svg>
);


const App: FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-neutral-300 font-sans overflow-hidden selection:bg-white/20">

      {/* ── Фоновые свечения ── */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-32 right-0 w-[220px] h-[220px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-pink-600/8 blur-[90px] rounded-full pointer-events-none" />

      {/* px-3 — жіңішке жан-жақ, телефонға оптималды */}
      <main className="relative z-10 w-full max-w-[430px] mx-auto px-3 py-10 pb-24">

        {/* ─── Профиль ─── */}
        <header className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-5">
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl scale-150 pointer-events-none" />
            <div className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-br from-white/20 via-white/5 to-transparent">
              <div className="w-full h-full rounded-full overflow-hidden bg-black/60 backdrop-blur-xl">
                <img src="/avatar.jpg" alt="Ерболсын" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <h1 className="text-[28px] font-bold bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text mb-1.5 tracking-tight">
            Ерболсын
          </h1>
          <p className="text-neutral-500 text-[13px] font-medium tracking-wide">
            AI Video Creator · IT Developer
          </p>
        </header>

        {/* ─── CTA Кнопки — HERO ─── */}
        <div className="flex flex-col gap-3 mb-8">

          {/* PRIMARY — ИИ Видео тапсырыс */}
          <a
            href="https://wa.me/77000957565"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full overflow-hidden group"
          >
            {/* Glow halo */}
            <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative w-full bg-white text-black rounded-2xl py-5 px-5 flex items-center gap-4 active:scale-[0.98] transition-transform duration-150 shadow-2xl shadow-white/20">
              {/* Icon circle */}
              <div className="w-11 h-11 rounded-xl bg-black/8 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[16px] font-bold text-black leading-tight tracking-tight">
                  🎬 ИИ видеоға тапсырыс беру
                </span>
                <span className="text-[12px] text-black/50 font-medium mt-0.5">
                  WhatsApp арқылы хабарласу
                </span>
              </div>
              {/* Arrow */}
              <svg className="w-5 h-5 text-black/30 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </a>

          {/* SECONDARY — ИИ Сабақтар (PREMIUM CARD) */}
          <a
            href="https://wa.me/77000957565?text=%D0%A1%C3%99%D0%BB%D0%B5%D0%BC%21+%D0%96%D0%B0%D1%81%D0%B0%D0%BD%D0%B4%D0%B0+%D0%B6%D0%B0%D1%81%D0%B0%D0%BB%D0%BC%D0%B0%D2%9B%D1%88%D1%8B+%D0%BA%D0%B5%D0%BB%D0%B5%D0%B4%DB%AF%2C+%D0%96%D0%98+%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE+%D0%B6%D0%B0%D1%81%D0%B0%D0%BF+%D2%AF%D0%B9%D1%80%D0%B5%D0%BD%D0%B3%DB%B3%D0%BC+%D0%BA%D0%B5%D0%BB%D0%B5%D0%B4%DB%B3%21+%F0%9F%9A%80"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full overflow-hidden group"
          >
            {/* Animated glow behind card */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/40 via-violet-500/30 to-blue-600/40 blur-2xl scale-110 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Card body — gradient border trick */}
            <div className="relative w-full rounded-2xl p-[1.5px] bg-gradient-to-br from-purple-500/60 via-violet-400/30 to-blue-500/40">
              <div className="w-full bg-gradient-to-br from-purple-900/60 via-[#0a0a0a]/80 to-blue-900/40 backdrop-blur-xl rounded-[14px] py-5 px-5 flex items-center gap-4 active:scale-[0.98] transition-transform duration-150">

                {/* Icon — крупный, светящийся */}
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                  <PlayCircle className="w-7 h-7 text-purple-300" />
                </div>

                <div className="flex flex-col items-start flex-1">
                  {/* Badge */}
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[9px] font-bold text-purple-400 uppercase tracking-widest">Онлайн сабақтар</span>
                  </div>
                  <span className="text-[17px] font-bold text-white leading-tight tracking-tight">
                    ИИ үйрену / Сабақтар
                  </span>
                  <span className="text-[12px] text-purple-300/70 font-medium mt-0.5">
                    ЖИ видео жасап үйренгім келеді 🚀
                  </span>
                </div>

                {/* Arrow */}
                <svg className="w-5 h-5 text-purple-400/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>

              </div>
            </div>
          </a>

        </div>


        {/* ─── Портфолио — горизонталь тіктөртбұрышты карточкалар ─── */}
        <div className="mb-8">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-neutral-600 uppercase mb-3 px-1">
            Портфолио
          </h2>
          <div className="flex flex-col gap-2">

            <a href="https://www.tiktok.com/@kingerbo?_r=1&_t=ZS-99XThm0I05Y" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-300">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 bg-black/70 flex-shrink-0">
                <TikTokIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest block leading-none mb-0.5">TikTok</span>
                <h3 className="text-[14px] font-bold text-white tracking-tight">kingerbo</h3>
                <p className="text-[11px] text-neutral-500">ИИ жарнама</p>
              </div>
              <svg className="w-3.5 h-3.5 text-neutral-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="https://www.tiktok.com/@aiqulaq?_r=1&_t=ZG-99XTgegBXDk" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-300">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 bg-black/70 flex-shrink-0">
                <TikTokIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest block leading-none mb-0.5">TikTok</span>
                <h3 className="text-[14px] font-bold text-white tracking-tight">aiqulaq</h3>
                <p className="text-[11px] text-neutral-500">Креативті ИИ</p>
              </div>
              <svg className="w-3.5 h-3.5 text-neutral-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="https://instagram.com/yerbollsyn" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-300">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex-shrink-0">
                <InstagramIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest block leading-none mb-0.5">Instagram</span>
                <h3 className="text-[14px] font-bold text-white tracking-tight">yerbollsyn</h3>
                <p className="text-[11px] text-neutral-500">Блог &amp; жұмыстар</p>
              </div>
              <svg className="w-3.5 h-3.5 text-neutral-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="https://t.me/aiqulaq" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-300">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 bg-[#229ED9]/80 flex-shrink-0">
                <TelegramIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest block leading-none mb-0.5">Telegram</span>
                <h3 className="text-[14px] font-bold text-white tracking-tight">aiqulaq</h3>
                <p className="text-[11px] text-neutral-500">ИИ құралдар</p>
              </div>
              <svg className="w-3.5 h-3.5 text-neutral-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </a>

          </div>
        </div>

        {/* ─── IT Қосымшалар ─── */}
        <div>
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-neutral-600 uppercase mb-3 px-1">
            IT Қосымшалар
          </h2>
          <div className="flex flex-col gap-2">

            <div className="relative overflow-hidden w-full bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-4 hover:bg-white/[0.08] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] flex items-center justify-center border border-white/10 flex-shrink-0">
                  <Smartphone className="w-4 h-4 text-neutral-200" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-white tracking-tight leading-tight">Arystap</h3>
                  <p className="text-[10px] text-neutral-600 font-medium uppercase tracking-widest">Mobile App</p>
                </div>
              </div>
              <p className="text-[12px] text-neutral-500 font-medium leading-relaxed mb-3">
                Арыс қаласына арналған супер-қосымша — OLX/Крыша баламасы + AI агент.
              </p>
              <div className="flex items-center gap-2">
                <a href="https://apps.apple.com/kz/app/arystap/id6764302073" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-all duration-200 rounded-xl py-2.5 text-[12px] font-semibold text-white active:scale-95">
                  <AppleIcon className="w-3.5 h-3.5" />
                  App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=kz.erbom.arystap" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-all duration-200 rounded-xl py-2.5 text-[12px] font-semibold text-white active:scale-95">
                  <GooglePlayIcon className="w-3 h-3" />
                  Play Market
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden w-full bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-4 hover:bg-white/[0.08] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] flex items-center justify-center border border-white/10 flex-shrink-0">
                  <Smartphone className="w-4 h-4 text-neutral-200" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-white tracking-tight leading-tight">Qoramsap</h3>
                  <p className="text-[10px] text-neutral-600 font-medium uppercase tracking-widest">Mobile App</p>
                </div>
              </div>
              <p className="text-[12px] text-neutral-500 font-medium leading-relaxed mb-3">
                Қарызды есептеу және басқару мобильді қосымшасы — + AI агент.
              </p>
              <a href="https://play.google.com/store/apps/details?id=kz.qoramsap.app" target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-all duration-200 rounded-xl py-2.5 text-[12px] font-semibold text-white active:scale-95">
                <GooglePlayIcon className="w-3 h-3" />
                Play Market
              </a>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default App;


