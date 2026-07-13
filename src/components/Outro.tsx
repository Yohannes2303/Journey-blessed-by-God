import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Outro({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1000); // Thank you
    const t2 = setTimeout(() => setStep(2), 2500); // Every meeting...
    const t3 = setTimeout(() => setStep(3), 4000); // Until we meet again
    const t4 = setTimeout(() => setStep(4), 5500); // May God...
    const t5 = setTimeout(() => setStep(5), 7000); // fade all out
    const t6 = setTimeout(() => onComplete(), 8000); // Done (matches 8s fade out)

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[200] flex flex-col items-center justify-center p-6 text-center text-white font-serif">
      <AnimatePresence>
        {step >= 1 && step < 5 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <p className="text-2xl md:text-3xl text-gold/90 tracking-wide">Thank You.</p>
          </motion.div>
        )}
        
        {step >= 2 && step < 5 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-lg mx-auto">
              Every Meeting Was God's Beautiful Plan.
            </p>
          </motion.div>
        )}

        {step >= 3 && step < 5 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Until We Meet Again.
            </p>
          </motion.div>
        )}

        {step >= 4 && step < 5 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-2xl md:text-3xl font-medium text-gold">
              May God Continue to Bless You Always.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
