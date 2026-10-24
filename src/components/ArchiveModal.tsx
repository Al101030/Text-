import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHARACTERS } from '../data/quizData';
import { CharacterKey } from '../types';
import { X, Sparkles, Shield, Compass, Camera } from 'lucide-react';
import { sound } from '../utils/audio';

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ar' | 'en';
}

export const ArchiveModal: React.FC<ArchiveModalProps> = ({ isOpen, onClose, lang }) => {
  const [activeTab, setActiveTab] = useState<CharacterKey>('A');

  if (!isOpen) return null;

  const character = CHARACTERS[activeTab];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
            <div className="flex items-center gap-2.5">
              <Camera className="w-5 h-5 text-cyan-400" />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {lang === 'ar' ? 'سجلات استوديو تصوير الزمن' : 'Time Photo Studio Dossiers'}
                </h3>
                <p className="text-xs text-neutral-500 font-mono">
                  ARCHIVE_FILE · CLASSIFIED
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Character Switcher Tabs */}
          <div className="px-6 py-3 border-b border-neutral-800/80 bg-neutral-950/60 flex items-center gap-2 overflow-x-auto">
            {(['A', 'B', 'C'] as CharacterKey[]).map((key) => {
              const char = CHARACTERS[key];
              const isActive = activeTab === key;

              return (
                <button
                  key={key}
                  onClick={() => {
                    sound.playTick();
                    setActiveTab(key);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-neutral-800 text-white border border-neutral-700 shadow-md'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-850'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: char.themeColor }}
                  />
                  <span>{lang === 'ar' ? char.nameAr.split(' ')[0] : char.nameEn}</span>
                  <span className="text-[11px] text-neutral-500 font-mono">({char.nameZh})</span>
                </button>
              );
            })}
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Photo Column */}
              <div className="md:col-span-4 flex flex-col items-center">
                <div className="w-full max-w-xs bg-white p-2.5 pb-4 rounded-lg shadow-xl border border-neutral-300">
                  <div className="relative aspect-[3/4] overflow-hidden rounded bg-neutral-900">
                    <img
                      src={character.image}
                      alt={character.nameEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-2 text-center text-xs font-bold text-neutral-900">
                    {lang === 'ar' ? character.nameAr : character.nameEn}
                  </div>
                  <div className="text-[10px] text-center text-neutral-500 font-mono">
                    {character.nameZh} · PHOTO RECORD
                  </div>
                </div>

                <div className="mt-3 text-xs text-center text-neutral-400">
                  <span className="font-semibold text-neutral-300">
                    {lang === 'ar' ? 'الدور الميداني: ' : 'Field Role: '}
                  </span>
                  <span>{lang === 'ar' ? character.roleAr : character.roleEn}</span>
                </div>
              </div>

              {/* Dossier Content Column */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {lang === 'ar' ? character.nameAr : character.nameEn}
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">
                    {lang === 'ar' ? character.titleAr : character.titleEn}
                  </p>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {lang === 'ar' ? character.descAr : character.descEn}
                </p>

                {/* Quote */}
                <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 text-xs sm:text-sm italic text-neutral-300">
                  {lang === 'ar' ? character.quoteAr : character.quoteEn}
                </div>

                {/* Special Ability */}
                <div className="space-y-1">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'القدرة الاستثنائية' : 'Special Temporal Ability'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 bg-neutral-950/70 p-3 rounded-xl border border-neutral-800/80">
                    {lang === 'ar' ? character.abilityAr : character.abilityEn}
                  </p>
                </div>

                {/* Strengths & Synergy */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800">
                    <div className="font-semibold text-emerald-400 mb-1 flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'السمات الأساسية' : 'Key Traits'}</span>
                    </div>
                    <ul className="space-y-1 text-neutral-400">
                      {(lang === 'ar' ? character.traitsAr : character.traitsEn).map((t, idx) => (
                        <li key={idx}>• {t}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800">
                    <div className="font-semibold text-cyan-400 mb-1 flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'التوافق والشراكة' : 'Team Synergy'}</span>
                    </div>
                    <p className="text-neutral-400">
                      {lang === 'ar' ? character.synergyAr : character.synergyEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3 border-t border-neutral-800 bg-neutral-950 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              {lang === 'ar' ? 'إغلاق الملف' : 'Close Dossier'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
