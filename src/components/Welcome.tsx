import { motion } from 'motion/react';

export default function Welcome() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto py-12"
    >
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-brown tracking-tight leading-tight relative">
        Every Meeting Has A Purpose
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gold/50"></div>
      </h2>
      
      <div className="flex flex-col gap-6 text-brown/80 text-lg md:text-xl leading-relaxed mt-8 font-medium">
        <p>God allows people to enter our lives for a reason.</p>
        
        <div className="flex flex-col gap-2 italic text-gold font-serif my-4">
          <p>Some become teachers.</p>
          <p>Some become family.</p>
          <p>Some become unforgettable memories.</p>
        </div>

        <p>Every smile, every conversation, every moment we shared is a gift from God.</p>
        <p className="font-semibold text-brown mt-4 text-xl md:text-2xl">Thank you for being part of my journey.</p>
      </div>
    </motion.section>
  );
}
