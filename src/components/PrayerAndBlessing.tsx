import { motion } from 'motion/react';

export default function PrayerAndBlessing() {
  return (
    <section className="flex flex-col gap-16 items-center text-center max-w-4xl mx-auto my-12 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-8 w-full bg-brown text-primary p-8 md:p-16 rounded-3xl shadow-xl relative overflow-hidden"
      >
        <div className="absolute -right-20 -bottom-20 w-64 h-64 border border-gold/20 rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none"></div>
        
        <h3 className="font-serif text-3xl md:text-4xl text-gold relative z-10">A Prayer For Us</h3>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto relative z-10"></div>
        <p className="leading-loose text-primary/90 text-lg md:text-xl relative z-10 italic font-serif px-4 md:px-8">
          "Heavenly Father, I thank You for the gift of friendship. I pray that You continue to guide Shopia, Bell, and Paul in their respective journeys. Protect them, bless the works of their hands, and let Your peace dwell in their hearts. May our paths cross again if it is Your will, and may we always remain united in Christ. In Jesus' name, Amen."
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="flex flex-col items-center gap-4 py-8"
      >
        <h4 className="font-serif text-2xl text-brown font-bold">Until We Meet Again</h4>
        <div className="flex gap-2 items-center">
          <div className="w-8 h-[1px] bg-gold/50"></div>
          <p className="text-brown/70 tracking-widest text-sm uppercase">Soli Deo Gloria</p>
          <div className="w-8 h-[1px] bg-gold/50"></div>
        </div>
      </motion.div>
    </section>
  );
}
