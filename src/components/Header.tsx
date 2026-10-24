import React from 'react';
import { Camera, Volume2, VolumeX, Globe, RotateCcw, BookOpen } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderProps {
  lang: 'ar' | 'en';
  onToggleLang: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenArchive: () => void;
  onResetQuiz: () => void;
  quizActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  isMuted,
  onToggleMute,
  onOpenArchive,
  onResetQuiz,
  quizActive,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-amber-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Camera className="w-4 h-4" />
          </div>
          <button
            onClick={onResetQuiz}
            className="text-start font-bold tracking-tight text-white hover:text-cyan-400 transition-colors"
          >
            <span className="text-base sm:text-lg">
              {lang === 'ar' ? 'استوديو تصوير الزمن' : 'Time Photo Studio'}
            </span>
            <span className="text-neutral-500 font-normal text-xs ms-2 hidden sm:inline">
              时光代理人
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Text with hover underline) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
          <button
            onClick={onOpenArchive}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'أرشيف الشخصيات' : 'Dossier Archive'}</span>
          </button>
          <a
            href="#rules"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'ar' ? 'قواعد الغوص الثلاث' : 'The 3 Diving Rules'}
          </a>
          <a
            href="#about"
            className="hover:text-neutral-200 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'ar' ? 'عن العمل' : 'About Link Click'}
          </a>
        </nav>

        {/* Zone 3: Actions (Sound, Lang, Reset CTA) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              const next = !isMuted;
              sound.setMuted(next);
              onToggleMute();
            }}
            className="p-2 text-neutral-400 hover:text-cyan-400 rounded-lg hover:bg-neutral-800/60 transition-colors"
            title={isMuted ? (lang === 'ar' ? 'تشغيل المؤثرات الصوتية' : 'Unmute Sound') : (lang === 'ar' ? 'كتم المؤثرات' : 'Mute Sound')}
            aria-label="Sound Toggle"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1 text-xs font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-800/60 transition-colors flex items-center gap-1 whitespace-nowrap"
            title={lang === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          {/* Reset / Start CTA */}
          {quizActive ? (
            <button
              onClick={onResetQuiz}
              className="px-3 py-1.5 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700/80 rounded-lg hover:bg-neutral-800 hover:border-neutral-600 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{lang === 'ar' ? 'إعادة' : 'Restart'}</span>
            </button>
          ) : (
            <button
              onClick={onOpenArchive}
              className="px-3.5 py-1.5 text-xs font-semibold text-neutral-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)] whitespace-nowrap shrink-0"
            >
              {lang === 'ar' ? 'الملفات' : 'Dossiers'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
