import type { FC, ReactNode } from "react";
import {
  MessageCircle,
  BookOpen,
  User,
  Sparkles,
  Smartphone,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

/* ─── Custom SVG Icons ─── */
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

/* ─── Social Card (High Conversion Style) ─── */
interface SocialCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  href: string;
  brandBg: string;
  brandText: string;
}

const SocialCard: FC<SocialCardProps> = ({ icon, title, subtitle, href, brandBg, brandText }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all active:scale-[0.98] cursor-pointer"
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${brandBg} ${brandText}`}>
      {icon}
    </div>
    <div className="ml-4 flex-1">
      <h3 className="text-[15px] font-bold text-slate-900">{title}</h3>
      <p className="text-[13px] text-slate-500 mt-0.5">{subtitle}</p>
    </div>
    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors" />
  </a>
);

/* ─── App Component ─── */
const App: FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans">
      
      {/* Soft header background */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-blue-50 to-[#f8f9fa] z-0" />

      <main className="relative z-10 w-full max-w-[480px] mx-auto px-5 py-12 pb-24">
        
        {/* 1. Header (Trust & Authority) */}
        <header className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-5">
            <div className="w-24 h-24 rounded-full bg-white p-1 shadow-sm border border-slate-100 relative z-10">
              <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                <User className="w-10 h-10 text-slate-400" />
              </div>
            </div>
            {/* Trust badge */}
            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm z-20">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">Ерболсын</h1>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            AI Creator & Developer
          </div>
          
          <p className="text-slate-600 text-sm max-w-[300px] leading-relaxed">
            Сатуды көтеретін ИИ видеолар мен креативті жарнамалар жасаймын
          </p>
        </header>

        {/* 2. BIG CTAs (High Conversion) */}
        <div className="flex flex-col gap-3 mb-10">
          <a
            href="https://wa.me/77000957565"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white font-bold text-[17px] rounded-2xl p-4 flex items-center justify-center gap-3 hover:bg-[#20bd5a] hover:-translate-y-0.5 active:scale-[0.98] transition-all shadow-[0_8px_24px_rgba(37,211,102,0.3)]"
          >
            <MessageCircle className="w-6 h-6" />
            ИИ видеоға тапсырыс беру
          </a>

          <a
            href="https://wa.me/77000957565"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-slate-700 border border-slate-200 font-semibold rounded-2xl p-4 flex items-center justify-center gap-2 hover:bg-slate-50 hover:shadow-sm active:scale-[0.98] transition-all"
          >
            <BookOpen className="w-5 h-5 text-blue-500" />
            ИИ үйрену / Сабақтар
          </a>
        </div>

        {/* 3. Portfolio List */}
        <div className="mb-10">
          <h2 className="text-[13px] font-bold tracking-wider text-slate-400 uppercase mb-4 px-2">
            Жұмыстарым мен Портфолио
          </h2>
          
          <div className="flex flex-col gap-3">
            <SocialCard
              icon={<TikTokIcon className="w-6 h-6" />}
              title="kingerbo"
              subtitle="ИИ жарнамалар мен клиенттерге жасалған видеолар"
              href="https://www.tiktok.com/@kingerbo?_r=1&_t=ZS-99XThm0I05Y"
              brandBg="bg-slate-900"
              brandText="text-white"
            />
            <SocialCard
              icon={<TikTokIcon className="w-6 h-6" />}
              title="aiqulaq"
              subtitle="Креативті ИИ видеолар"
              href="https://www.tiktok.com/@aiqulaq?_r=1&_t=ZG-99XTgegBXDk"
              brandBg="bg-slate-900"
              brandText="text-white"
            />
            <SocialCard
              icon={<InstagramIcon className="w-6 h-6" />}
              title="yerbollsyn"
              subtitle="Портфолио және видеолар"
              href="https://instagram.com/yerbollsyn"
              brandBg="bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-500"
              brandText="text-white"
            />
            <SocialCard
              icon={<TelegramIcon className="w-6 h-6" />}
              title="aiqulaq"
              subtitle="ИИ құралдары, жасалу жолдары және сабақтар"
              href="https://t.me/aiqulaq"
              brandBg="bg-[#0088cc]"
              brandText="text-white"
            />
          </div>
        </div>

        {/* 4. IT Projects Section */}
        <div>
          <h2 className="text-[13px] font-bold tracking-wider text-slate-400 uppercase mb-4 px-2">
            IT Жобаларым (Қосымшалар)
          </h2>

          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Arystap</h3>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Арыс қаласына арналған супер-қосымша (OLX/Колеса/Крыша баламасы + AI агент).
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a href="https://apps.apple.com/kz/app/arystap/id6764302073" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white rounded-xl py-3 flex items-center justify-center gap-2 text-[13px] font-semibold hover:bg-slate-800 transition-colors active:scale-[0.98]">
                  <AppleIcon className="w-4 h-4" /> App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=kz.erbom.arystap" target="_blank" rel="noopener noreferrer" className="bg-slate-100 text-slate-700 rounded-xl py-3 flex items-center justify-center gap-2 text-[13px] font-semibold hover:bg-slate-200 transition-colors active:scale-[0.98]">
                  <PlayStoreIcon className="w-4 h-4" /> Google Play
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Qoramsap</h3>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Қарызды есептеу және басқару мобильді қосымшасы (+ AI агент).
              </p>
              <a href="https://play.google.com/store/apps/details?id=kz.qoramsap.app" target="_blank" rel="noopener noreferrer" className="w-full bg-slate-100 text-slate-700 rounded-xl py-3 flex items-center justify-center gap-2 text-[13px] font-semibold hover:bg-slate-200 transition-colors active:scale-[0.98]">
                <PlayStoreIcon className="w-4 h-4" /> Google Play
              </a>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;
