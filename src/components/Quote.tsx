import { motion } from 'motion/react';

export default function Quote() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex flex-col items-center text-center py-16 px-6"
    >
      <div className="max-w-2xl flex flex-col items-center gap-6 relative">
        <span className="text-6xl font-serif text-gold/30 select-none absolute -top-10 left-4 md:-left-8">“</span>
        <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-brown font-medium relative z-10">
          The beautiful thing about memories is that they stay in our hearts long after the moments have passed.
        </p>
        <div className="w-16 h-[1px] bg-gold/50 mt-4"></div>
      </div>
    </motion.section>
  );
}
