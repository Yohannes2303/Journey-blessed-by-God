import { friends } from '../data';
import { motion } from 'motion/react';

const subtitles: Record<string, string> = {
  shopia: "A grateful heart remembers every kindness.",
  bell: "Faith gives us strength beyond our understanding.",
  paul: "True friendship is one of God's greatest blessings."
};

export default function MemorySelection({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <section className="flex flex-col gap-12 w-full py-16">
      <div className="text-center flex flex-col gap-2">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-brown">Choose Your Journey</h2>
        <p className="text-gold font-serif italic text-base md:text-lg">Open a private dedication for each of our friends.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {friends.map((friend, idx) => (
          <motion.div
            key={friend.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
            onClick={() => onSelect(friend.id)}
            className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col items-center text-center justify-between group"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#E8DDD4] flex items-center justify-center text-3xl md:text-4xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                {friend.emoji}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-2xl md:text-3xl text-brown font-bold group-hover:text-gold transition-colors">
                  {friend.name}
                </h3>
                <p className="text-sm text-brown/70 leading-relaxed max-w-[240px]">
                  {subtitles[friend.id] || friend.tagline}
                </p>
              </div>
            </div>

            <button 
              className="mt-8 px-6 py-3 bg-brown text-primary rounded-full font-semibold text-xs uppercase tracking-wider group-hover:bg-black transition-all cursor-pointer shadow-md group-hover:shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(friend.id);
              }}
            >
              Open {friend.name}'s Memory
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
