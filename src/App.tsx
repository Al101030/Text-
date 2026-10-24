import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { QuizCard } from './components/QuizCard';
import { ResultCard } from './components/ResultCard';
import { RulesBanner } from './components/RulesBanner';
import { ArchiveModal } from './components/ArchiveModal';
import { DiveOverlay } from './components/DiveOverlay';
import { CORE_QUESTIONS, EXTENDED_QUESTIONS, CHARACTERS, HERO_IMAGE } from './data/quizData';
import { CharacterKey, QuizResultScores, QuizQuestion } from './types';
import { sound } from './utils/audio';
import { 
  Play, 
  Sparkles, 
  Layers, 
  Camera, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [isMuted, setIsMuted] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isDiving, setIsDiving] = useState(false);
  
  // Quiz Mode: 'standard' (4 questions from user prompt) or 'extended' (8 deep dive questions)
  const [quizMode, setQuizMode] = useState<'standard' | 'extended'>('standard');
  const [gameState, setGameState] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  
  // Track answer history so users can go back
  const [answersHistory, setAnswersHistory] = useState<CharacterKey[]>([]);
  const [scores, setScores] = useState<QuizResultScores>({ A: 0, B: 0, C: 0 });

  const activeQuestions: QuizQuestion[] = quizMode === 'standard' ? CORE_QUESTIONS : EXTENDED_QUESTIONS;

  // Handle document direction and lang
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const startQuiz = () => {
    sound.playShutter();
    setIsDiving(true);
  };

  const handleDiveComplete = () => {
    setIsDiving(false);
    setCurrentQIndex(0);
    setAnswersHistory([]);
    setScores({ A: 0, B: 0, C: 0 });
    setGameState('quiz');
  };

  const handleSelectOption = (type: CharacterKey) => {
    const updatedHistory = [...answersHistory, type];
    setAnswersHistory(updatedHistory);

    const newScores: QuizResultScores = {
      A: scores.A + (type === 'A' ? 1 : 0),
      B: scores.B + (type === 'B' ? 1 : 0),
      C: scores.C + (type === 'C' ? 1 : 0),
    };
    setScores(newScores);

    if (currentQIndex + 1 < activeQuestions.length) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      // Completed all questions
      sound.playResultReveal();
      setGameState('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQIndex > 0 && answersHistory.length > 0) {
      sound.playTick();
      const lastAnswer = answersHistory[answersHistory.length - 1];
      const updatedHistory = answersHistory.slice(0, -1);
      setAnswersHistory(updatedHistory);

      setScores({
        A: scores.A - (lastAnswer === 'A' ? 1 : 0),
        B: scores.B - (lastAnswer === 'B' ? 1 : 0),
        C: scores.C - (lastAnswer === 'C' ? 1 : 0),
      });

      setCurrentQIndex(currentQIndex - 1);
    }
  };

  const restartQuiz = () => {
    sound.playTick();
    setGameState('intro');
    setCurrentQIndex(0);
    setAnswersHistory([]);
    setScores({ A: 0, B: 0, C: 0 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Cinematic Dive Transition Overlay */}
      <DiveOverlay
        isActive={isDiving}
        onComplete={handleDiveComplete}
        lang={lang}
      />

      {/* Top Bar Header */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        isMuted={isMuted}
        onToggleMute={toggleMute}
        onOpenArchive={() => setIsArchiveOpen(true)}
        onResetQuiz={restartQuiz}
        quizActive={gameState !== 'intro'}
      />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex flex-col justify-center">
        {/* Intro View */}
        {gameState === 'intro' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/60 shadow-2xl">
              {/* Studio Background Image with Scrim */}
              <div className="absolute inset-0 z-0">
                <img
                  src={HERO_IMAGE}
                  alt="Time Photo Studio Interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-35 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
              </div>

              {/* Hero Content */}
              <div className="relative z-10 p-6 sm:p-10 md:p-16 max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full backdrop-blur-xs">
                  <Camera className="w-3.5 h-3.5" />
                  <span>TIME PHOTO STUDIO · 时光照相馆</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                  {lang === 'ar' ? (
                    <>
                      من تشبهين من{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400">
                        Link Click؟
                      </span>{' '}
                      ⏳
                    </>
                  ) : (
                    <>
                      Which Character from{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400">
                        Link Click
                      </span>{' '}
                      Are You? ⏳
                    </>
                  )}
                </h1>

                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                  {lang === 'ar'
                    ? 'اختبار نفسي تفاعلي يكشف الشخصية الأقرب لروحكِ في استوديو تصوير الزمن: هل أنتِ تشينغ شياوشي المفعم بالعاطفة والشجاعة، أم لو غوانغ العقلاني الاستراتيجي الهادئ، أم قياو لينغ القوية والدرع الحامي للاستوديو؟'
                    : 'A psychological dive into the Time Photo Studio: Are you the passionate and courageous Cheng Xiaoshi, the cold analytical observer Lu Guang, or the fierce and protective studio manager Qiao Ling?'}
                </p>

                {/* Mode Selector (Standard 4 Questions vs Extended 8 Questions) */}
                <div className="pt-2">
                  <div className="text-xs text-neutral-400 font-medium mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{lang === 'ar' ? 'اختيار عمق الغوص:' : 'Choose Dive Depth:'}</span>
                  </div>

                  <div className="inline-flex p-1 bg-neutral-950/90 border border-neutral-800 rounded-xl gap-1">
                    <button
                      onClick={() => {
                        sound.playTick();
                        setQuizMode('standard');
                      }}
                      className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                        quizMode === 'standard'
                          ? 'bg-cyan-500 text-neutral-950 shadow-md font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {lang === 'ar' ? 'الوضع الكلاسيكي (4 أسئلة)' : 'Classic Dive (4 Questions)'}
                    </button>
                    <button
                      onClick={() => {
                        sound.playTick();
                        setQuizMode('extended');
                      }}
                      className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                        quizMode === 'extended'
                          ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {lang === 'ar' ? 'الغوص المتعمق (8 أسئلة)' : 'Deep Dive (8 Questions)'}
                    </button>
                  </div>
                </div>

                {/* Start Dive CTA Button */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={startQuiz}
                    className="px-8 py-4 text-base font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 rounded-xl hover:opacity-95 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center gap-3 active:scale-95 group"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    <span>{lang === 'ar' ? 'ابدأ الغوص في الصورة' : 'Clap & Dive Into Photo'}</span>
                    {lang === 'ar' ? (
                      <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    ) : (
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>

                  <button
                    onClick={() => setIsArchiveOpen(true)}
                    className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-neutral-300 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 rounded-xl transition-colors"
                  >
                    {lang === 'ar' ? 'استعراض طاقم الاستوديو' : 'Browse Studio Crew'}
                  </button>
                </div>
              </div>
            </div>

            {/* Character Trio Cards Showcase */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="font-semibold text-neutral-300 uppercase tracking-wider">
                  {lang === 'ar' ? 'طاقم استوديو تصوير الزمن الثلاثي' : 'The Time Photo Studio Trio'}
                </span>
                <span className="font-mono text-neutral-500">3 AGENTS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(['A', 'B', 'C'] as CharacterKey[]).map((key) => {
                  const char = CHARACTERS[key];
                  return (
                    <div
                      key={key}
                      onClick={() => {
                        sound.playTick();
                        setIsArchiveOpen(true);
                      }}
                      className="group bg-neutral-900/50 hover:bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        {/* Portrait */}
                        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-950">
                          <img
                            src={char.image}
                            alt={char.nameEn}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 start-3">
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded backdrop-blur-md"
                              style={{
                                backgroundColor: `${char.themeColor}33`,
                                color: char.themeColor,
                              }}
                            >
                              {char.nameZh}
                            </span>
                          </div>
                        </div>

                        {/* Title & Name */}
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {lang === 'ar' ? char.nameAr : char.nameEn}
                          </h3>
                          <p className="text-xs text-neutral-400 font-mono mt-0.5">
                            {lang === 'ar' ? char.titleAr : char.titleEn}
                          </p>
                        </div>

                        {/* Special Role Note */}
                        <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                          {lang === 'ar' ? char.descAr : char.descEn}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 group-hover:text-cyan-400 transition-colors">
                        <span>{lang === 'ar' ? 'عرض السجل الكامل' : 'View Full Dossier'}</span>
                        {lang === 'ar' ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Time Rules Banner */}
            <RulesBanner lang={lang} />

            {/* About Link Click Section */}
            <section id="about" className="w-full max-w-4xl mx-auto scroll-mt-20">
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 text-xs sm:text-sm text-neutral-400 leading-relaxed space-y-3">
                <div className="font-bold text-white text-base">
                  {lang === 'ar' ? 'عن عالم Link Click (时光代理人):' : 'About Link Click (Shiguang Dailiren):'}
                </div>
                <p>
                  {lang === 'ar'
                    ? 'في زقاق هادئ بمدينة حديثة صاخبة، يقع استوديو تصوير الزمن الصغير. يُدار الاستوديو بواسطة شابين يمتلكان قدرات خارقة للعادة: تشينغ شياوشي يستطيع الغوص داخل الصور والتحكم بجسد صاحب الصورة لمدة 12 ساعة، بينما يمتلك لو غوانغ القدرة على تتبع كل ما حدث خلال تلك الساعات الـ 12 من خارج الصورة وتوجيهه خطوة بخطوة. وبمساعدة صديقتهما ومالكة المبنى قياو لينغ، يستقبلون طلبات العملاء لكشف أسرار وتفاصيل الماضي، لكن بشرط صارم: "مهما حدث، لا تغير الماضي!"'
                    : 'In a quiet corner of a bustling metropolis, the small Time Photo Studio operates under an unassuming sign. Run by Cheng Xiaoshi and Lu Guang, they possess supernatural temporal capabilities: Cheng Xiaoshi can enter the world of a photograph and inhabit the photographer’s body for 12 hours, while Lu Guang can track all 12 hours from the outside, guiding every step. Supported by studio manager Qiao Ling, they solve client mysteries under one strict condition: Whatever you do, never change the past!'}
                </p>
              </div>
            </section>
          </div>
        )}

        {/* Active Quiz View */}
        {gameState === 'quiz' && (
          <QuizCard
            question={activeQuestions[currentQIndex]}
            currentIndex={currentQIndex}
            totalQuestions={activeQuestions.length}
            onSelectOption={handleSelectOption}
            onPrevious={handlePreviousQuestion}
            canGoBack={currentQIndex > 0}
            lang={lang}
          />
        )}

        {/* Final Result View */}
        {gameState === 'result' && (
          <ResultCard
            scores={scores}
            totalQuestions={activeQuestions.length}
            onRestart={restartQuiz}
            onOpenArchive={() => setIsArchiveOpen(true)}
            lang={lang}
          />
        )}
      </main>

      {/* Character Dossier Modal */}
      <ArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        lang={lang}
      />

      {/* Clean Footer */}
      <footer className="w-full border-t border-neutral-900 bg-neutral-950 py-6 mt-16 text-center text-xs text-neutral-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-400">
              {lang === 'ar' ? 'استوديو تصوير الزمن' : 'Time Photo Studio'}
            </span>
            <span aria-hidden="true">·</span>
            <span>Link Click Fan Tribute</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">12:00:00</span>
          </div>

          <div className="text-neutral-500 text-[11px]">
            {lang === 'ar'
              ? 'مستوحى من أنمي ودانغهوا 時光代理人 (Shiguang Dailiren / Link Click)'
              : 'Inspired by the donghua series 时光代理人 (Link Click)'}
          </div>
        </div>
      </footer>
    </div>
  );
}
