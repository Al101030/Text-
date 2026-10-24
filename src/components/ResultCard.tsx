import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CharacterKey, QuizResultScores } from '../types';
import { CHARACTERS } from '../data/quizData';
import { sound } from '../utils/audio';
import { 
  RotateCcw, 
  Share2, 
  Check, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  Flame, 
  Clock, 
  Download,
  Camera
} from 'lucide-react';

interface ResultCardProps {
  scores: QuizResultScores;
  totalQuestions: number;
  onRestart: () => void;
  onOpenArchive: () => void;
  lang: 'ar' | 'en';
}

export const ResultCard: React.FC<ResultCardProps> = ({
  scores,
  totalQuestions,
  onRestart,
  onOpenArchive,
  lang,
}) => {
  const [copied, setCopied] = useState(false);
  const [polaroidView, setPolaroidView] = useState(false);

  // Determine highest score (winner)
  const winnerKey: CharacterKey = (Object.keys(scores) as CharacterKey[]).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  );

  const character = CHARACTERS[winnerKey];

  // Calculate percentages
  const totalPoints = scores.A + scores.B + scores.C || 1;
  const percentA = Math.round((scores.A / totalPoints) * 100);
  const percentB = Math.round((scores.B / totalPoints) * 100);
  const percentC = Math.round((scores.C / totalPoints) * 100);

  const scoreList = [
    { key: 'A' as CharacterKey, char: CHARACTERS.A, pct: percentA, score: scores.A },
    { key: 'B' as CharacterKey, char: CHARACTERS.B, pct: percentB, score: scores.B },
    { key: 'C' as CharacterKey, char: CHARACTERS.C, pct: percentC, score: scores.C },
  ].sort((a, b) => b.pct - a.pct);

  const handleCopy = () => {
    sound.playShutter();
    const textToShare = lang === 'ar'
      ? `⏳ نتيجتي في اختبار شخصية Link Click:
أنا أشبه: ${character.nameAr} (${scoreList[0].pct}%)!
${character.titleAr}
"${character.quoteAr}"
القدرة الزمنية: ${character.abilityAr}
اختبر شخصيتك الآن في استوديو تصوير الزمن!`
      : `⏳ My Link Click Personality Quiz Result:
I am closest to: ${character.nameEn} (${scoreList[0].pct}%)!
${character.titleEn}
"${character.quoteEn}"
Temporal Ability: ${character.abilityEn}
Discover your Time Photo Studio match!`;

    navigator.clipboard.writeText(textToShare).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Top Banner / Verdict */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 text-xs text-cyan-400 font-mono tracking-wider uppercase mb-1">
          <Clock className="w-3.5 h-3.5" />
          <span>{lang === 'ar' ? 'اكتمال تحليل خط الزمن' : 'Timeline Analysis Complete'}</span>
          <span aria-hidden="true">·</span>
          <span>12:00:00 SYNC</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          {lang === 'ar' ? 'الشخصية الأقرب لروحكِ هي:' : 'Your Soul Match is:'}
        </h1>
        <p className="text-lg text-neutral-400 max-w-xl mx-auto">
          {lang === 'ar'
            ? 'بناءً على قراراتكِ في المواقف الحرجة وتعاملكِ مع المشاعر وقواعد استوديو تصوير الزمن.'
            : 'Based on your tactical choices, empathy under pressure, and adherence to studio protocols.'}
        </p>
      </div>

      {/* Main Character Showcase Grid */}
      <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column: Polaroid Portrait (5 cols) */}
        <div className="lg:col-span-5 relative bg-neutral-950 p-6 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-e border-neutral-800">
          {/* Subtle Studio Glow */}
          <div
            className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
            style={{ backgroundColor: character.themeColor }}
          />

          {/* Polaroid Frame */}
          <motion.div
            initial={{ scale: 0.95, rotate: -1 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xs bg-white text-neutral-900 p-3 pt-3 pb-5 rounded-lg shadow-2xl border border-neutral-300 relative group"
          >
            {/* Pinned Clip Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-amber-600/90 rounded-sm shadow-md border border-amber-800 z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-900/70" />
            </div>

            {/* Photo Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden rounded bg-neutral-900">
              <img
                src={character.image}
                alt={character.nameEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 start-2 text-[10px] font-mono text-cyan-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                {character.nameZh} · DIVE POSSESSION
              </div>
            </div>

            {/* Polaroid Label Area */}
            <div className="mt-3 text-center">
              <div className="text-base font-bold tracking-tight text-neutral-900">
                {lang === 'ar' ? character.nameAr : character.nameEn}
              </div>
              <div className="text-xs text-neutral-500 font-mono mt-0.5">
                {lang === 'ar' ? character.titleAr : character.titleEn}
              </div>
            </div>
          </motion.div>

          {/* Match Score Indicator */}
          <div className="mt-5 text-center">
            <div className="text-xs text-neutral-400 mb-1">
              {lang === 'ar' ? 'نسبة التطابق الإجمالية' : 'Overall Affinity Match'}
            </div>
            <div
              className="text-3xl font-black font-mono tracking-tight"
              style={{ color: character.themeColor }}
            >
              {scoreList[0].pct}%
            </div>
          </div>
        </div>

        {/* Right Column: In-depth Profile (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          {/* Header Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">
                {lang === 'ar' ? character.roleAr : character.roleEn}
              </span>
              <span className="text-xs text-neutral-500">
                {lang === 'ar' ? 'استوديو تصوير الزمن' : 'Time Photo Studio'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {lang === 'ar' ? character.nameAr : character.nameEn}
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {lang === 'ar' ? character.descAr : character.descEn}
            </p>
          </div>

          {/* Character Quote */}
          <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 relative">
            <div className="text-xs text-neutral-400 font-mono mb-1">
              {lang === 'ar' ? 'اقتباس الشخصية الشهير:' : 'Character Quote:'}
            </div>
            <blockquote className="text-sm sm:text-base font-semibold text-neutral-200 italic leading-snug">
              {lang === 'ar' ? character.quoteAr : character.quoteEn}
            </blockquote>
          </div>

          {/* Ability Spotlight */}
          <div className="space-y-1.5">
            <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'القدرة الزمنية الخاصة:' : 'Special Temporal Ability:'}</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 bg-neutral-950/50 p-3 rounded-lg border border-neutral-800/80">
              {lang === 'ar' ? character.abilityAr : character.abilityEn}
            </p>
          </div>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Strengths */}
            <div className="space-y-2">
              <div className="font-semibold text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'نقاط القوة البارزة:' : 'Key Strengths:'}</span>
              </div>
              <ul className="space-y-1 text-neutral-300">
                {(lang === 'ar' ? character.strengthsAr : character.strengthsEn).map((str, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 shrink-0">✓</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="space-y-2">
              <div className="font-semibold text-amber-400 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'التحدي ونقاط الحذر:' : 'Temporal Blindspot:'}</span>
              </div>
              <ul className="space-y-1 text-neutral-300">
                {(lang === 'ar' ? character.weaknessesAr : character.weaknessesEn).map((wk, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-500 shrink-0">!</span>
                    <span>{wk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Partner Synergy Note */}
          <div className="text-xs text-neutral-400 border-t border-neutral-800/80 pt-3">
            <span className="font-semibold text-neutral-300">
              {lang === 'ar' ? 'التناغم الميداني: ' : 'Mission Synergy: '}
            </span>
            <span>{lang === 'ar' ? character.synergyAr : character.synergyEn}</span>
          </div>
        </div>
      </div>

      {/* Comparative Score Breakdown */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>{lang === 'ar' ? 'توزيع التوافق مع طاقم الاستوديو' : 'Studio Crew Compatibility Breakdown'}</span>
        </h3>

        <div className="space-y-4">
          {scoreList.map((item) => (
            <div key={item.key} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-medium text-neutral-200">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.char.themeColor }}
                  />
                  <span>{lang === 'ar' ? item.char.nameAr : item.char.nameEn}</span>
                  <span className="text-neutral-500 text-xs hidden sm:inline">
                    ({lang === 'ar' ? item.char.titleAr : item.char.titleEn})
                  </span>
                </div>
                <div className="font-mono tabular-nums font-bold text-neutral-300">
                  {item.pct}%
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.char.themeColor }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        {/* Retake Button */}
        <button
          onClick={onRestart}
          className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{lang === 'ar' ? 'إعادة الاختبار' : 'Retake Quiz'}</span>
        </button>

        {/* Copy Result Summary */}
        <button
          onClick={handleCopy}
          className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-xl transition-colors flex items-center gap-2"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          <span>
            {copied
              ? (lang === 'ar' ? 'تم نسخ التقرير!' : 'Copied to Clipboard!')
              : (lang === 'ar' ? 'مشاركة النتيجة' : 'Share Result')}
          </span>
        </button>

        {/* Browse Character Archive */}
        <button
          onClick={onOpenArchive}
          className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl transition-colors flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          <span>{lang === 'ar' ? 'ملفات طاقم الاستوديو' : 'Studio Dossiers'}</span>
        </button>
      </div>
    </div>
  );
};
