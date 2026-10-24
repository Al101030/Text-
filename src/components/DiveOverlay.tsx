import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { sound } from '../utils/audio';

interface DiveOverlayProps {
  isActive: boolean;
  onComplete: () => void;
  lang: 'ar' | 'en';
}

export const DiveOverlay: React.FC<DiveOverlayProps> = ({ isActive, onComplete, lang }) => {
  useEffect(() => {
    if (isActive) {
      sound.playDiveClap();
      const timer = setTimeout(() => {
        onComplete();
      }, 950);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-black/90 backdrop-blur-xl"
        >
          {/* Central Flash Shutter */}
          <motion.div
            initial={{ scale: 0.3, opacity: 1 }}
            animate={{ scale: [0.3, 2.5, 5], opacity: [1, 0.9, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400 via-white to-amber-400 blur-2xl"
          />

          {/* Temporal Clock Dial Rings */}
          <motion.div
            initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 180, scale: 1.4, opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute w-[500px] h-[500px] border border-cyan-400/40 rounded-full flex items-center justify-center"
          >
            <div className="w-[380px] h-[380px] border border-dashed border-amber-400/50 rounded-full" />
          </motion.div>

          {/* Dive Prompt text */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 0.8 }}
            className="absolute z-10 text-center"
          >
            <div className="text-3xl sm:text-5xl font-black tracking-widest text-white drop-shadow-[0_0_25px_rgba(6,182,212,0.8)]">
              {lang === 'ar' ? 'غوص في خط الزمن...' : 'DIVING INTO TIMELINE...'}
            </div>
            <div className="mt-2 text-sm sm:text-base text-cyan-300 font-mono tracking-wider">
              12:00:00 · TIME PHOTO STUDIO
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
