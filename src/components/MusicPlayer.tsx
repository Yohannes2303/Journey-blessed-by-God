import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Pause, Play, Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MusicPlayer({ autoPlay, isOutro }: { autoPlay?: boolean; isOutro?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentVolume, setCurrentVolume] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('https://files.catbox.moe/epylyl.mp3');
    audio.loop = true;
    audio.volume = 0; // Start at 0 for fade in
    
    audio.onerror = () => {
      console.warn('Failed to load audio file.');
    };

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Handle Play/Pause AutoPlay
  useEffect(() => {
    if (autoPlay && audioRef.current && !isPlaying && !isOutro) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            // Fade in over 5 seconds
            let vol = 0;
            const interval = setInterval(() => {
              vol += 0.25 / 50; // 50 steps of 100ms = 5 seconds
              if (vol >= volume) {
                vol = volume;
                clearInterval(interval);
              }
              if (audioRef.current) {
                audioRef.current.volume = vol;
                setCurrentVolume(vol);
              }
            }, 100);
          })
          .catch(e => {
            console.warn('Audio play failed:', e);
            setIsPlaying(false);
          });
      }
    }
  }, [autoPlay, isOutro, isPlaying, volume]);

  // Handle Outro Fade Out
  useEffect(() => {
    if (isOutro && audioRef.current && isPlaying) {
      // Fade out over 5 seconds
      let vol = audioRef.current.volume;
      const step = vol / 50;
      const interval = setInterval(() => {
        vol -= step;
        if (vol <= 0) {
          vol = 0;
          clearInterval(interval);
          if (audioRef.current) {
            audioRef.current.pause();
          }
          setIsPlaying(false);
        }
        if (audioRef.current) {
          audioRef.current.volume = Math.max(0, vol);
          setCurrentVolume(Math.max(0, vol));
        }
      }, 100);
    }
  }, [isOutro, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            if (audioRef.current && audioRef.current.volume === 0) {
                audioRef.current.volume = volume;
                setCurrentVolume(volume);
            }
          })
          .catch(e => {
            console.warn('Audio play failed:', e);
            setIsPlaying(false);
          });
      }
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current && isPlaying) {
      audioRef.current.volume = newVolume;
      setCurrentVolume(newVolume);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (volume > 0) {
      setVolume(0);
      if (isPlaying) audioRef.current.volume = 0;
      setCurrentVolume(0);
    } else {
      setVolume(0.5);
      if (isPlaying) audioRef.current.volume = 0.5;
      setCurrentVolume(0.5);
    }
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-[100] flex items-end justify-end"
    >
      <motion.div 
        className="bg-black/80 backdrop-blur-md shadow-2xl border border-white/10 flex items-center overflow-hidden"
        style={{ borderRadius: '28px' }}
        animate={{ 
          width: isExpanded ? 'auto' : '56px',
          height: '56px'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <button 
          onClick={togglePlay}
          className="w-[56px] h-[56px] flex-shrink-0 flex items-center justify-center text-white hover:text-gold transition-colors focus:outline-none"
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              key="expanded-content"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-center gap-4 pr-6 pl-2 whitespace-nowrap overflow-hidden"
            >
              <div className="flex flex-col">
                <span className="text-white text-xs font-semibold tracking-wider font-sans">
                  {isPlaying ? 'NOW PLAYING' : 'PAUSED'}
                </span>
                <div className="flex items-center gap-2">
                  <Music size={12} className="text-gold" />
                  <span className="text-white/70 text-xs font-serif italic">
                    Goodness of God (Instrumental)
                  </span>
                </div>
              </div>

              <div className="w-[1px] h-8 bg-white/20 mx-2"></div>

              <div className="flex items-center gap-2">
                <button onClick={toggleMute} className="text-white/70 hover:text-white transition-colors">
                  {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-white/20 rounded-full appearance-none outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
