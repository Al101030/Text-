import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QuizQuestion, CharacterKey } from '../types';
import { sound } from '../utils/audio';
import { ArrowLeft, ArrowRight, Clock, HelpCircle, CheckCircle2 } from 'lucide-react';

interface QuizCardProps {
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  onSelectOption: (type: CharacterKey) => void;
  onPrevious: () => void;
  canGoBack: boolean;
  lang: 'ar' | 'en';
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  onSelectOption,
  onPrevious,
  canGoBack,
  lang,
}) => {
  const [selectedKey, setSelectedKey] = useState<CharacterKey | null>(null);

  // Keyboard shortcut support (1, 2, 3 or A, B, C)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === '1' || e.key.toUpperCase() === 'A') {
        handleOptionClick('A');
      } else if (e.key === '2' || e.key.toUpperCase() === 'B') {
        handleOptionClick('B');
      } else if (e.key === '3' || e.key.toUpperCase() === 'C') {
        handleOptionClick('C');
      } else if (e.key === 'ArrowLeft' && canGoBack) {
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, canGoBack]);

  const handleOptionClick = (type: CharacterKey) => {
    setSelectedKey(type);
    sound.playTick();
    setTimeout(() => {
      setSelectedKey(null);
      onSelectOption(type);
    }, 180);
  };

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Step Header & Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono tabular-nums text-cyan-300 font-semibold">
              {lang === 'ar' ? `المحطة ${currentIndex + 1} من ${totalQuestions}` : `Checkpoint ${currentIndex + 1} of ${totalQuestions}`}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">
              {lang === 'ar' ? question.categoryAr : question.categoryEn}
            </span>
          </div>
          <div className="font-mono tabular-nums text-neutral-400">
            {progressPercent}%
          </div>
        </div>

        {/* Temporal Progress Bar */}
        <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400"
            initial={{ width: `${(currentIndex / totalQuestions) * 100}%` }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Main Question Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.25 }}
          className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden shadow-xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 end-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 start-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Question Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-6">
            {lang === 'ar' ? question.questionAr : question.questionEn}
          </h2>

          {/* Options List */}
          <div className="space-y-3.5">
            {question.options.map((option, idx) => {
              const isSelected = selectedKey === option.type;
              const optionLetter = ['A', 'B', 'C'][idx];

              return (
                <button
                  key={option.type}
                  onClick={() => handleOptionClick(option.type)}
                  className={`w-full text-start p-4 sm:p-5 rounded-xl border transition-all duration-150 flex items-start gap-3.5 group relative ${
                    isSelected
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                      : 'bg-neutral-950/60 border-neutral-800 text-neutral-200 hover:border-cyan-500/50 hover:bg-neutral-850 hover:text-white'
                  }`}
                >
                  {/* Option Badge */}
                  <span
                    className={`shrink-0 w-8 h-8 rounded-lg border text-xs font-mono font-bold flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-cyan-400 text-neutral-950 border-cyan-300'
                        : 'border-neutral-700 bg-neutral-900 text-neutral-400 group-hover:border-cyan-400/50 group-hover:text-cyan-300'
                    }`}
                  >
                    {idx + 1}
                  </span>

                  {/* Option Text */}
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-medium leading-relaxed">
                      {lang === 'ar' ? option.textAr : option.textEn}
                    </p>
                  </div>

                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5 animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer Controls & Hints */}
          <div className="mt-8 pt-4 border-t border-neutral-800/70 flex items-center justify-between text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              {canGoBack && (
                <button
                  onClick={onPrevious}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                >
                  {lang === 'ar' ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                  <span>{lang === 'ar' ? 'السؤال السابق' : 'Previous'}</span>
                </button>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
              <HelpCircle className="w-3.5 h-3.5 text-neutral-600" />
              <span>
                {lang === 'ar' ? 'يمكنك الضغط على المفاتيح 1، 2، 3 للاختيار' : 'Press keys 1, 2, or 3 to select'}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
