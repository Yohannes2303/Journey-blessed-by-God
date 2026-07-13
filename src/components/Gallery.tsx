import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const timelineChapters = [
  {
    id: 'chapter-1',
    title: 'The Beginning',
    date: 'Where it all started',
    description: 'When our paths first crossed, we didn\'t know the beautiful journey that awaited us. A single moment that sparked a lifetime of memories.',
    photos: [
      { id: 1, type: 'video', url: 'https://files.catbox.moe/jhfdxy.mp4', alt: 'First meeting', size: 'large', col: 'col-span-12 md:col-span-12' },
      { id: 2, url: 'https://files.catbox.moe/dwgwqs.jpg', alt: 'Early days', size: 'small', col: 'col-span-6 md:col-span-6' },
      { id: 3, url: 'https://files.catbox.moe/1midm6.jpg', alt: 'Smiles', size: 'medium', col: 'col-span-6 md:col-span-6' },
    ]
  },
  {
    id: 'chapter-2',
    title: 'Growing Together',
    date: 'Seasons of change',
    description: 'Through every season, we found comfort in each other. Every laugh shared and tear wiped away became the foundation of an unbreakable bond.',
    photos: [
      { id: 4, url: 'https://files.catbox.moe/0hnhwz.jpg', alt: 'Adventures', size: 'wide', col: 'col-span-12 md:col-span-12' },
      { id: 5, url: 'https://files.catbox.moe/27mlln.jpg', alt: 'Late night talks', size: 'medium', col: 'col-span-6 md:col-span-6' },
      { id: 6, url: 'https://files.catbox.moe/6yvvf1.jpg', alt: 'Random moments', size: 'small', col: 'col-span-6 md:col-span-6' },
      { id: 7, type: 'video', url: 'https://files.catbox.moe/mobybo.mp4', alt: 'Milestones', size: 'large', col: 'col-span-12 md:col-span-12' },
    ]
  },
  {
    id: 'chapter-3',
    title: 'Beautiful Memories',
    date: 'Unforgettable days',
    description: 'Captured not just in photographs, but deep within our hearts. A beautiful collection of joy, peace, and endless grace.',
    photos: [
      { id: 8, url: 'https://files.catbox.moe/polagj.jpg', alt: 'Trips', size: 'wide', col: 'col-span-12 md:col-span-12' },
      { id: 9, url: 'https://files.catbox.moe/6ngais.jpg', alt: 'Celebrations', size: 'medium', col: 'col-span-6 md:col-span-6' },
      { id: 10, type: 'video', url: 'https://files.catbox.moe/pohntn.mp4', alt: 'Quiet moments', size: 'medium', col: 'col-span-6 md:col-span-6' },
    ]
  },
  {
    id: 'chapter-4',
    title: 'A Lifetime of Grace',
    date: 'Looking forward',
    description: 'Looking back, every step was guided by love. Looking forward, we walk with hope, knowing the best chapters are still yet to be written.',
    photos: [
      { id: 13, url: 'https://files.catbox.moe/an2tnl.jpg', alt: 'Today', size: 'medium', col: 'col-span-6 md:col-span-6' },
      { id: 14, url: 'https://files.catbox.moe/5zsm4n.jpg', alt: 'Tomorrow', size: 'medium', col: 'col-span-6 md:col-span-6' },
      { id: 15, type: 'video', url: 'https://files.catbox.moe/qtw19h.mp4', alt: 'Forever', size: 'wide', col: 'col-span-12 md:col-span-12' },
    ]
  }
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className="flex flex-col gap-24 md:gap-32 w-full py-12">
      <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold font-serif italic text-lg md:text-xl"
        >
          Our Story
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl font-bold text-brown"
        >
          A Journey in Frames
        </motion.h2>
      </div>

      <div className="flex flex-col gap-32 md:gap-48 relative w-full">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gold/30 -translate-x-1/2 z-0 hidden md:block"></div>

        {timelineChapters.map((chapter, chapterIdx) => (
          <div key={chapter.id} className="relative z-10 w-full flex flex-col gap-12 md:gap-16">
            
            {/* Chapter Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col gap-4 max-w-xl mx-auto text-center bg-primary/80 backdrop-blur-sm p-6 rounded-3xl border border-gold/10 shadow-sm`}
            >
              <span className="text-gold/80 text-sm tracking-widest uppercase font-semibold">
                {chapter.date}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-brown font-bold">
                {chapter.title}
              </h3>
              <p className="text-black/70 leading-relaxed">
                {chapter.description}
              </p>
            </motion.div>

            {/* Chapter Photos Grid */}
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {chapter.photos.map((photo, photoIdx) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: photoIdx * 0.1, ease: "easeOut" }}
                  className={`${photo.col} relative overflow-hidden rounded-2xl md:rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-white/50 bg-white/20 backdrop-blur-sm`}
                  onClick={() => setSelectedPhoto(photo.url)}
                >
                  <div className="aspect-[4/3] h-full w-full relative">
                    {/* @ts-ignore */}
                    {photo.type === 'video' ? (
                      <video
                        src={photo.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                    ) : (
                      <img 
                        src={photo.url} 
                        alt={photo.alt} 
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 backdrop-blur-lg"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[101] bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            {selectedPhoto.endsWith('.mp4') ? (
              <motion.video
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                src={selectedPhoto}
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.img
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                src={selectedPhoto}
                alt="Fullscreen memory"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
