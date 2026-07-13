import { friends } from '../data';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, X, Play, Volume2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30); // smooth, natural typing speed
    
    return () => clearInterval(interval);
  }, [text, started]);

  return <span>{displayedText}</span>;
};

export default function FriendMemory({ friendId, onBack }: { friendId: string; onBack: () => void }) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const endingRef = useRef<HTMLDivElement>(null);
  
  const friend = friends.find(f => f.id === friendId);
  
  useEffect(() => {
    // Scroll to top when loading a friend
    window.scrollTo({ top: 0 });
  }, [friendId]);

  // Monitor scroll to fade out music when reaching the ending section
  useEffect(() => {
    const handleScroll = () => {
      if (!endingRef.current) return;
      const rect = endingRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;
      
      // Calculate how far we have scrolled into the ending section
      if (isVisible) {
        const fraction = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / rect.height));
        window.dispatchEvent(new CustomEvent('music-set-fade', { 
          detail: { fadeAmount: 1 - fraction * 0.85 } // reduce up to 85% of volume
        }));
      } else {
        window.dispatchEvent(new CustomEvent('music-set-fade', { 
          detail: { fadeAmount: 1 } 
        }));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Restore volume on leave
      window.dispatchEvent(new CustomEvent('music-set-fade', { detail: { fadeAmount: 1 } }));
    };
  }, []);

  const handleBack = () => {
    if (friendId === 'paul') {
      setIsExiting(true);
      // Restore music to normal volume during transition
      window.dispatchEvent(new CustomEvent('music-set-fade', { detail: { fadeAmount: 1 } }));
      setTimeout(() => {
        onBack();
      }, 4000); // 4 seconds total for transition
    } else {
      onBack();
    }
  };

  if (!friend) return null;

  const isShopia = friend.id === 'shopia';
  const isPaul = friend.id === 'paul';

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen ${friend.theme.primary} transition-colors duration-1000 w-full absolute inset-0 overflow-y-auto overflow-x-hidden flex flex-col justify-between`}
    >
      <AnimatePresence>
        {isExiting && (
          <motion.div
            key="exit-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            >
              <svg width="40" height="60" viewBox="0 0 24 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                <path d="M12 2v32M5 10h14" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={isExiting ? 'opacity-0 transition-opacity duration-1000' : ''}>
        {/* Back Button */}
        <div className="fixed top-8 left-8 md:top-12 md:left-12 z-50">
          <button 
            onClick={handleBack}
            className={`flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-full shadow-md hover:bg-white/95 transition-all ${friend.theme.text} font-semibold text-xs uppercase tracking-widest border border-white/80 cursor-pointer`}
          >
            <ArrowLeft size={16} /> Back To Journey
          </button>
        </div>

        {/* Hero Section with Ambient Video */}
        <section className="relative h-96 w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <video 
                src="https://files.catbox.moe/i52jrd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className={`absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-${friend.theme.primary.replace('bg-', '')} z-10`}></div>
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative z-20 text-center flex flex-col items-center gap-6 max-w-2xl px-6"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-bold font-sans">
              Dedicated Memory
            </span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-white tracking-tight drop-shadow-md">
              Dear {friend.name}
            </h1>
            <p className="text-lg md:text-xl text-[#F8F6F2]/90 font-serif italic max-w-lg leading-relaxed">
              "{friend.subtitle}"
            </p>
            
            {friend.greeting && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 1.2 }}
                className="mt-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl max-w-md w-full"
              >
                <p className="text-lg md:text-xl whitespace-pre-line text-[#E8DDD4] font-serif font-semibold leading-relaxed">
                  {friend.greeting}
                </p>
                {friend.greetingTrans && (
                  <p className="text-xs text-white/60 mt-3 font-sans italic tracking-wider">
                    {friend.greetingTrans}
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Opening Story with Premium Typwriter */}
        <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-gold/20 font-serif text-9xl pointer-events-none select-none">“</div>
          <div className={`text-xl md:text-2xl leading-relaxed ${friend.theme.text} font-medium italic min-h-[140px] font-serif max-w-3xl mx-auto`}>
            <TypewriterText text={friend.intro} delay={0.8} />
          </div>
        </section>

        {/* Personal Letter (Styled elegantly like a paper / Framer component) */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="bg-white/70 backdrop-blur-xl p-8 md:p-16 rounded-3xl border border-white/80 shadow-xl flex flex-col gap-8 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${friend.theme.secondary} rounded-full blur-3xl opacity-40 -z-10 -translate-y-1/2 translate-x-1/2`}></div>
            <div className="absolute top-8 right-8 text-[#C7A86D]/30 text-xs font-serif italic uppercase tracking-wider">
              A Personal Letter
            </div>
            
            <div className={`flex flex-col gap-6 ${friend.theme.text} leading-relaxed font-sans text-base md:text-lg`}>
              {friend.message.map((paragraph, idx) => (
                <p key={idx} className="leading-loose">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Bible Verse Section */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center gap-8"
          >
            <div className="w-16 h-[1px] bg-gold/50"></div>
            <span className="text-xs uppercase tracking-widest text-[#C7A86D] font-bold">Scripture Strength</span>
            <p className={`font-serif text-3xl md:text-4xl italic leading-relaxed ${friend.theme.text} max-w-3xl font-medium`}>
              "{friend.verse.text}"
            </p>
            <div className="flex flex-col gap-2 items-center">
              <span className={`font-semibold tracking-widest uppercase text-sm text-[#C7A86D]`}>
                {friend.verse.ref}
              </span>
              {friend.verse.sub && (
                <p className={`text-base ${friend.theme.text} opacity-75 italic max-w-lg mt-2 leading-relaxed`}>
                  {friend.verse.sub}
                </p>
              )}
            </div>
            <div className="w-16 h-[1px] bg-gold/50"></div>
          </motion.div>
        </section>

        {/* Vertical Timeline - Specially for Shopia or any friend with timeline data */}
        {friend.timeline && friend.timeline.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 py-24">
            <div className="text-center flex flex-col gap-2 mb-16">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Chronicles</span>
              <h2 className={`font-serif text-3xl md:text-5xl font-bold ${friend.theme.text}`}>Our Story Timeline</h2>
            </div>

            <div className="relative">
              {/* Central vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gold/30 -translate-x-1/2"></div>

              <div className="space-y-12 relative">
                {friend.timeline.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className={`flex flex-col md:flex-row items-stretch gap-8 relative ${
                        isLeft ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Node point */}
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brown border-2 border-gold rounded-full -translate-x-1/2 top-6 z-10 shadow"></div>

                      {/* Content Card */}
                      <div className="w-full md:w-[45%] pl-10 md:pl-0">
                        <div className="bg-white/55 backdrop-blur-md p-6 rounded-3xl border border-white/70 shadow-md hover:shadow-xl transition-all duration-300">
                          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl mb-4 shadow-sm">
                            {item.img.includes('.mp4') ? (
                              <video
                                src={item.img}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                              />
                            ) : (
                              <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                                loading="lazy"
                              />
                            )}
                          </div>
                          <h3 className={`font-serif text-xl font-bold ${friend.theme.text} mb-2`}>{item.title}</h3>
                          <p className="text-sm text-brown/85 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Spacer for empty side on desktop */}
                      <div className="hidden md:block md:w-[10%]"></div>
                      <div className="hidden md:block md:w-[45%]"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Encouragement Card (Premium glass card with soft glowing lights) */}
        {friend.encouragement && (
          <section className="max-w-3xl mx-auto px-6 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative p-10 md:p-16 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/70 shadow-2xl overflow-hidden flex flex-col items-center gap-6"
            >
              {/* Soft colorful glowing background orbs */}
              <div className="absolute top-0 left-1/4 w-48 h-48 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-teal-100/30 rounded-full blur-3xl pointer-events-none"></div>

              <span className="text-xs uppercase tracking-widest text-[#5A4634] font-bold font-sans">
                {isPaul ? "A Message of Friendship" : "A Message of Hope"}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#3F4E40] font-bold relative z-10">
                {friend.encouragement.title}
              </h3>
              <div className="w-16 h-[1px] bg-gold/40 mx-auto relative z-10"></div>
              
              <div className="flex flex-col gap-4 text-brown/95 text-xl md:text-2xl font-serif italic max-w-xl mx-auto relative z-10 leading-relaxed font-semibold">
                {friend.encouragement.body.map((line, idx) => (
                  <motion.p 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.8 }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Video Section - Hides automatically if videoUrl is undefined or empty */}
        {friend.videoUrl && (
          <section className="max-w-4xl mx-auto px-6 py-24 text-center">
            <span className="text-xs uppercase tracking-widest text-gold font-bold mb-2 block">Visual Memories</span>
            <h2 className={`font-serif text-3xl md:text-5xl font-bold ${friend.theme.text} mb-8`}>Memory Video</h2>
            <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-black relative group">
              <video 
                src={friend.videoUrl} 
                controls 
                className="w-full h-full object-cover"
                poster={friend.heroImg}
              />
            </div>
          </section>
        )}

        {/* Prayer Card (Premium Framer Glass Card) */}
        {friend.prayer && (
          <section className="max-w-3xl mx-auto px-6 py-24 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative p-8 md:p-16 rounded-3xl bg-brown text-[#F8F6F2] shadow-2xl border border-white/10 overflow-hidden text-center flex flex-col items-center gap-6"
            >
              {/* Background accent lines */}
              <div className="absolute -right-24 -bottom-24 w-80 h-80 border border-gold/10 rounded-full pointer-events-none"></div>
              <div className="absolute -left-12 -top-12 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <span className="text-xs uppercase tracking-widest text-gold font-bold font-sans">
                Intercession
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-gold relative z-10">
                {friend.prayer.title}
              </h3>
              
              <div className="w-16 h-[1px] bg-gold/30 mx-auto relative z-10"></div>
              
              <div className="flex flex-col gap-3 text-[#F8F6F2]/90 text-lg md:text-xl font-serif italic max-w-xl mx-auto relative z-10 leading-relaxed">
                {friend.prayer.body.map((line, idx) => (
                  <p key={idx} className={line === "" ? "h-2" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Ending Section (Fade to dark, text appearing slowly) */}
        <div ref={endingRef} className="bg-black text-white py-32 px-6 mt-12 transition-colors duration-1000 relative">
          {/* Subtle star particle fields in the ending */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black -z-10"></div>
          
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 py-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="flex flex-col gap-6"
            >
              {friend.ending.map((line, idx) => {
                const isHeading = line.startsWith("Thank You") || line.startsWith("Until We Meet") || line.startsWith("God Bless");
                return (
                  <p 
                    key={idx} 
                    className={`font-serif italic leading-relaxed text-center ${
                      line === "" ? 'h-6' : ''
                    } ${
                      isHeading 
                        ? 'text-2xl md:text-4xl font-bold text-white' 
                        : 'text-lg md:text-xl text-zinc-400'
                    }`}
                  >
                    {line}
                  </p>
                );
              })}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="mt-12"
            >
              <svg width="28" height="40" viewBox="0 0 24 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 2v32M5 10h14" />
              </svg>
            </motion.div>
          </div>
        </div>

        <Footer type="private" />
      </div>

      {/* Lightbox for large view */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-2xl"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors z-[101] bg-white/10 p-2.5 rounded-full backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={selectedPhoto}
              alt="Fullscreen memory"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
