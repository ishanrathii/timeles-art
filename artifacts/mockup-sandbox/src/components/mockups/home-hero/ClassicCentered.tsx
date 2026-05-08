import './_group.css';

export function ClassicCentered() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <header className="absolute top-0 w-full z-50 p-6 flex justify-between items-center bg-black/10 backdrop-blur-sm text-white">
         <div className="font-serif text-2xl font-bold">Priya Art Gallery</div>
         <div className="space-x-8 hidden md:block text-sm font-medium">
           <a href="#" className="hover:text-primary">Home</a>
           <a href="#" className="hover:text-primary">Collection</a>
           <a href="#" className="hover:text-primary">Story</a>
         </div>
      </header>

      <section className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[900px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/hero-bg.png" 
            alt="Priya Art Gallery Interior" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white mt-20">
          <div className="inline-block border-t border-b border-primary/50 py-2 px-6 mb-8">
            <span className="text-[#B8860B] font-medium tracking-[0.4em] uppercase text-sm">
              Est. 2004 • Hingoli
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            Timeless <br /> <span className="italic text-[#B8860B]">Artistry</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/80 mb-12 font-light tracking-wide">
            Curating the finest handcrafted treasures from the heart of Maharashtra. 
            Artifacts that transcend generations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#B8860B] hover:bg-[#9a7008] text-white text-sm uppercase tracking-widest px-10 py-5 rounded-none border border-[#B8860B] transition-all">
              View Collection
            </button>
            <button className="bg-white/5 border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-sm uppercase tracking-widest px-10 py-5 rounded-none transition-all">
              Our Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}