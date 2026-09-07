import type { FC, ReactNode } from "react";
import {
  MessageCircle,
  BookOpen,
  ExternalLink,
  User,
  Sparkles,
  Smartphone,
  Star,
  ChevronRight,
} from "lucide-react";

/* ─── Custom SVG Icons (not available in Lucide) ─── */

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

/* ─── Reusable Link Button Component ─── */

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "card";
  className?: string;
}

const LinkButton: FC<LinkButtonProps> = ({
  href,
  children,
  variant = "secondary",
  className = "",
}) => {
  const base =
    "flex items-center justify-center gap-3 w-full rounded-2xl font-semibold transition-all duration-300 ease-out cursor-pointer select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 text-base glow-green hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-green-500/30",
    secondary:
      "bg-[#1a1a2e] border border-[#2a2a4a] text-gray-200 py-3.5 px-6 text-sm hover:bg-[#22223a] hover:border-purple-500/40 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-purple-500/10",
    card: "bg-[#12121a] border border-[#1e1e34] text-gray-300 py-3 px-5 text-sm hover:bg-[#1a1a2e] hover:border-[#3a3a5a] hover:scale-[1.01] active:scale-[0.98]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

/* ─── Section Header Component ─── */

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ icon, title, subtitle }) => (
  <div className="flex flex-col items-center gap-2 mb-6">
    <div className="flex items-center gap-2 text-purple-400">
      {icon}
      <h2 className="text-lg font-bold tracking-wide uppercase">{title}</h2>
    </div>
    {subtitle && (
      <p className="text-xs text-gray-500 text-center">{subtitle}</p>
    )}
    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-1" />
  </div>
);

/* ─── Portfolio Card Component ─── */

interface PortfolioCardProps {
  icon: ReactNode;
  platform: string;
  title: string;
  description: string;
  href: string;
  accentColor: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({
  icon,
  platform,
  title,
  description,
  href,
  accentColor,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-start gap-4 p-4 rounded-2xl bg-[#12121a] border border-[#1e1e34] hover:border-[#3a3a5a] transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
  >
    <div
      className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${accentColor}`}
    >
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-0.5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
          {platform}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-gray-100 truncate">{title}</h3>
      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
        {description}
      </p>
    </div>
    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors flex-shrink-0 mt-1" />
  </a>
);

/* ─── App Project Card Component ─── */

interface AppProjectProps {
  name: string;
  description: string;
  appStoreUrl?: string;
  playStoreUrl: string;
  gradient: string;
}

const AppProjectCard: FC<AppProjectProps> = ({
  name,
  description,
  appStoreUrl,
  playStoreUrl,
  gradient,
}) => (
  <div
    className={`relative overflow-hidden rounded-2xl border border-[#1e1e34] p-5 ${gradient}`}
  >
    {/* Subtle corner glow */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-bl-full" />

    <div className="relative">
      <div className="flex items-center gap-2 mb-2">
        <Smartphone className="w-5 h-5 text-purple-400" />
        <h3 className="text-base font-bold text-white">{name}</h3>
      </div>
      <p className="text-xs text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex gap-2">
        {appStoreUrl && (
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white text-xs font-medium hover:bg-white/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <AppleIcon className="w-4 h-4" />
            App Store
          </a>
        )}
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white text-xs font-medium hover:bg-white/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          <PlayStoreIcon className="w-4 h-4" />
          Play Market
        </a>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════
   MAIN APP COMPONENT
   ═══════════════════════════════════════════════ */

const App: FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex justify-center">
      {/* Background subtle radial gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-green-900/10 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-md px-5 py-10 pb-20">
        {/* ── 1. PROFILE HEADER ── */}
        <section className="flex flex-col items-center text-center mb-8 animate-fade-in animate-delay-1">
          {/* Avatar placeholder */}
          <div className="w-28 h-28 rounded-full avatar-shimmer border-2 border-purple-500/30 flex items-center justify-center mb-5 ring-4 ring-purple-500/10">
            <User className="w-12 h-12 text-gray-600" />
          </div>

          {/* Name */}
          <h1 className="text-2xl font-extrabold text-white tracking-tight mb-2">
            Ерболсын
          </h1>

          {/* Status / Description */}
          <div className="flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
              AI Creator & Developer
            </span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            ИИ видео және креативті жарнамалар жасау
            <br />
            <span className="text-gray-500">IT-әзірлеуші</span>
          </p>
        </section>

        {/* ── 2. CTA BUTTONS ── */}
        <section className="flex flex-col gap-3 mb-10 animate-fade-in animate-delay-2">
          <LinkButton
            href="https://wa.me/77000957565"
            variant="primary"
          >
            <MessageCircle className="w-5 h-5" />
            <span>🎬 ИИ видео мен жарнамаға тапсырыс беру</span>
            <ChevronRight className="w-4 h-4 ml-auto opacity-70" />
          </LinkButton>

          <LinkButton
            href="https://wa.me/77000957565"
            variant="secondary"
          >
            <BookOpen className="w-5 h-5 text-purple-400" />
            <span>📚 ИИ үйрену / Видеосабақтар алу</span>
            <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
          </LinkButton>
        </section>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 mb-10 animate-fade-in animate-delay-3">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2a2a4a]" />
          <Star className="w-3 h-3 text-gray-600" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2a2a4a]" />
        </div>

        {/* ── 3. PORTFOLIO SECTION ── */}
        <section className="mb-10 animate-fade-in animate-delay-4">
          <SectionHeader
            icon={<Sparkles className="w-4 h-4" />}
            title="Жұмыстарым & Портфолио"
            subtitle="ИИ видеолар, жарнамалар, сабақтар"
          />

          <div className="flex flex-col gap-3">
            <PortfolioCard
              icon={<TikTokIcon className="w-5 h-5 text-white" />}
              platform="TikTok"
              title="kingerbo"
              description="ИИ жарнамалар мен клиенттерге жасалған видеолар"
              href="https://www.tiktok.com/@kingerbo?_r=1&_t=ZS-99XThm0I05Y"
              accentColor="bg-gradient-to-br from-pink-500/20 to-cyan-500/20"
            />

            <PortfolioCard
              icon={<TikTokIcon className="w-5 h-5 text-white" />}
              platform="TikTok"
              title="aiqulaq"
              description="Креативті ИИ видеолар"
              href="https://www.tiktok.com/@aiqulaq?_r=1&_t=ZG-99XTgegBXDk"
              accentColor="bg-gradient-to-br from-purple-500/20 to-pink-500/20"
            />

            <PortfolioCard
              icon={<InstagramIcon className="w-5 h-5 text-white" />}
              platform="Instagram"
              title="yerbollsyn"
              description="Портфолио және видеолар"
              href="https://instagram.com/yerbollsyn"
              accentColor="bg-gradient-to-br from-orange-500/20 to-pink-500/20"
            />

            <PortfolioCard
              icon={<TelegramIcon className="w-5 h-5 text-white" />}
              platform="Telegram"
              title="aiqulaq"
              description="ИИ құралдары, жасалу жолдары және тегін сабақтар"
              href="https://t.me/aiqulaq"
              accentColor="bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
            />
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 mb-10 animate-fade-in animate-delay-5">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2a2a4a]" />
          <Star className="w-3 h-3 text-gray-600" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2a2a4a]" />
        </div>

        {/* ── 4. IT PROJECTS SECTION ── */}
        <section className="mb-10 animate-fade-in animate-delay-6">
          <SectionHeader
            icon={<Smartphone className="w-4 h-4" />}
            title="IT Жобаларым"
            subtitle="Мобильді қосымшалар"
          />

          <div className="flex flex-col gap-4">
            <AppProjectCard
              name="Arystap"
              description="Арыс қаласына арналған супер-қосымша — OLX / Колеса / Крыша баламасы + AI агент."
              appStoreUrl="https://apps.apple.com/kz/app/arystap/id6764302073"
              playStoreUrl="https://play.google.com/store/apps/details?id=kz.erbom.arystap"
              gradient="bg-gradient-to-br from-[#12121a] to-[#16162a]"
            />

            <AppProjectCard
              name="Qoramsap"
              description="Қарызды есептеу және басқару мобильді қосымшасы + AI агент."
              playStoreUrl="https://play.google.com/store/apps/details?id=kz.qoramsap.app"
              gradient="bg-gradient-to-br from-[#12121a] to-[#1a1220]"
            />
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="text-center animate-fade-in animate-delay-8">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-4" />
          <p className="text-[10px] text-gray-600 tracking-widest uppercase">
            © {new Date().getFullYear()} Ерболсын · Барлық құқықтар қорғалған
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
