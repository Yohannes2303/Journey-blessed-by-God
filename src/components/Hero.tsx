import { motion } from 'motion/react';

export default function Hero({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6 md:px-12 z-10 py-12">
      <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl mx-4 md:mx-12 my-4 md:my-8 border border-white/20 bg-black">
         <img src="https://files.catbox.moe/polagj.jpg" alt="Beautiful landscape" className="w-full h-full object-cover opacity-90" />
         <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-8 max-w-3xl px-4"
      >
        <div className="relative">
          <div className="absolute -left-6 md:-left-12 -top-8 md:-top-12 text-6xl md:text-8xl font-serif text-gold opacity-30">"</div>
          <p className="font-serif text-3xl md:text-5xl leading-tight text-white italic">
            For we are God's handiwork, created in Christ Jesus to do good works.
          </p>
          <span className="block mt-6 text-gold font-semibold tracking-widest uppercase text-sm">Ephesians 2:10</span>
        </div>
        
        <p className="text-white/90 leading-relaxed max-w-md mx-auto font-medium text-lg">
          Every meeting is part of God's beautiful plan.
        </p>

        <button 
          onClick={onStart}
          className="mt-6 w-fit px-8 py-4 bg-white text-black rounded-full font-semibold text-sm tracking-wide hover:bg-gold hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        >
          Begin The Journey
        </button>
      </motion.div>
    </div>
  );
}
