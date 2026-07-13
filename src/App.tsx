import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
import Quote from './components/Quote';
import MemorySelection from './components/MemorySelection';
import FriendMemory from './components/FriendMemory';
import PrayerAndBlessing from './components/PrayerAndBlessing';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import Outro from './components/Outro';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeFriend, setActiveFriend] = useState<string | null>(null);
  const [isOutro, setIsOutro] = useState(false);
  const [outroFinished, setOutroFinished] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleOutro = () => {
    setIsOutro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`relative min-h-screen bg-primary text-black font-sans flex flex-col ${(!hasStarted || isOutro) ? 'overflow-hidden h-screen' : 'overflow-x-hidden'}`}>
      {/* Background Decorative Elements */}
      <div className="fixed -top-32 -left-32 w-96 h-96 bg-secondary rounded-full opacity-30 blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-gold/10 rounded-full -z-10 pointer-events-none"></div>
      
      {!activeFriend && !isOutro && <NavBar />}

      <main className="flex-1 flex flex-col w-full relative z-0">
        <AnimatePresence mode="wait">
          {!hasStarted ? (
            <motion.div 
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 1 } }}
              className="h-[calc(100vh-5rem)] flex items-center max-w-7xl mx-auto w-full"
            >
              <Hero onStart={handleStart} />
            </motion.div>
          ) : isOutro ? (
            <motion.div
              key="outro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 z-50"
            >
              <Outro onComplete={() => setOutroFinished(true)} />
            </motion.div>
          ) : activeFriend ? (
            <motion.div
              key="friend-view"
              initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="w-full relative min-h-screen"
            >
              <FriendMemory 
                friendId={activeFriend} 
                onBack={() => {
                  setActiveFriend(null);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="journey-view"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 flex flex-col gap-24 md:gap-32 py-16 md:py-24 px-6 md:px-12 w-full max-w-7xl mx-auto"
            >
              <Welcome />
              <Gallery />
              <Quote />
              <MemorySelection onSelect={(id) => {
                setActiveFriend(id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} />
              <PrayerAndBlessing />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {hasStarted && !activeFriend && !isOutro && (
          <motion.div
            key="footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <Footer type="journey" onFinish={handleOutro} />
          </motion.div>
        )}
      </AnimatePresence>

      {hasStarted && !outroFinished && <MusicPlayer autoPlay={hasStarted} isOutro={isOutro} />}
    </div>
  );
}
