export default function Footer({ type = 'journey', onFinish }: { type?: 'journey' | 'private', onFinish?: () => void }) {
  if (type === 'journey') {
    return (
      <footer className="w-full flex flex-col items-center text-center gap-12 py-16 px-6 bg-white/40 border-t border-brown/5 mt-auto z-10 relative">
        <div className="flex flex-col gap-3 max-w-lg">
          <p className="font-serif text-xl md:text-2xl text-brown italic">
            "Some stories never truly end."
          </p>
          <p className="font-serif text-base md:text-lg text-brown/70 italic">
            They simply continue in our hearts.
          </p>
        </div>
        
        {onFinish && (
          <button 
            onClick={onFinish}
            className="group relative px-8 py-4 bg-brown hover:bg-black text-white rounded-full font-serif text-lg tracking-wide shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">Conclude the Journey</span>
            <div className="absolute inset-0 bg-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        )}
      </footer>
    );
  }

  return (
    <footer className="w-full flex flex-col items-center text-center gap-6 py-16 px-6 bg-white/40 border-t border-brown/5 mt-auto z-10 relative">
      <div className="flex flex-col gap-4 max-w-lg">
        <p className="font-serif text-xl md:text-2xl text-brown italic">
          Every meeting is God's beautiful plan.
        </p>
        <p className="text-brown/80 font-sans">
          Thank you for being part of my story.
        </p>
        <p className="text-brown/80 font-medium font-sans">
          Until we meet again.
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-2 mt-4">
        <span className="font-bold block text-brown uppercase tracking-widest text-sm font-sans">God Bless You</span>
        <div className="w-12 h-[1px] bg-gold/50 mt-2"></div>
      </div>
    </footer>
  );
}
