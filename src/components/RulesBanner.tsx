import React from 'react';
import { TIME_RULES } from '../data/quizData';
import { AlertCircle, Clock, ShieldAlert } from 'lucide-react';

interface RulesBannerProps {
  lang: 'ar' | 'en';
}

export const RulesBanner: React.FC<RulesBannerProps> = ({ lang }) => {
  return (
    <section id="rules" className="w-full max-w-4xl mx-auto my-12 scroll-mt-20">
      <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 end-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <ShieldAlert className="w-4 h-4" />
              <span>TIME PHOTO STUDIO PROTOCOLS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {lang === 'ar' ? 'قواعد الغوص الثلاث في الصور ⏳' : 'The 3 Iron Rules of Photo Diving ⏳'}
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-xs">
            {lang === 'ar'
              ? 'القواعد الصارمة التي وضعها لو غوانغ للحفاظ على سلامة المسافرين ومنع انهيار خطوط الزمن.'
              : 'Strict temporal protocols designed by Lu Guang to keep divers safe from cascading paradoxes.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TIME_RULES.map((rule) => (
            <div
              key={rule.num}
              className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="text-2xl font-black font-mono text-cyan-400 mb-2">
                  {rule.num}
                </div>
                <h3 className="text-sm font-bold text-neutral-100 mb-1.5 leading-snug">
                  {lang === 'ar' ? rule.ruleAr : rule.ruleEn}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === 'ar' ? rule.descAr : rule.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
