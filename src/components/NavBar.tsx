export default function NavBar() {
  return (
    <nav className="h-20 w-full px-6 md:px-12 flex items-center justify-between border-b border-brown/10 z-50 sticky top-0 bg-[#F8F6F2]/80 backdrop-blur-md">
      <div className="flex flex-col">
        <span className="font-serif italic text-xs md:text-sm tracking-widest text-gold uppercase">Digital Memory Book</span>
        <h1 className="font-serif text-lg md:text-xl font-bold text-brown">A Journey Blessed by God</h1>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-brown/60 font-semibold font-sans hidden sm:inline">
          In Ministry & Faith
        </span>
      </div>
    </nav>
  );
}
