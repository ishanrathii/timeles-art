import './_group.css';

export function SplitContent() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans">
      <header className="w-full p-6 flex justify-between items-center border-b border-black/5">
         <div className="font-serif text-2xl font-bold text-[#3B2F2F]">Priya Art Gallery</div>
         <div className="space-x-8 hidden md:block text-sm font-medium text-[#5A4A4A]">
           <a href="#" className="hover:text-[#B8860B]">Collection</a>
           <a href="#" className="hover:text-[#B8860B]">Story</a>
           <a href="#" className="hover:text-[#B8860B]">Visit Us</a>
         </div>
      </header>

      <section className="flex-1 flex flex-col lg:flex-row items-stretch min-h-[820px]">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8A3324]/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-lg w-full">
              <span className="text-[#B8860B] font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">Heritage Handicrafts</span>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-[#3B2F2F] mb-6 leading-[1.1]">
                Masterpieces of <span className="italic text-[#8A3324]">Maharashtra</span>
              </h1>
              <div className="w-16 h-1 bg-[#B8860B] mb-8"></div>
              <p className="text-lg text-[#6A5A5A] mb-12 leading-relaxed">
                Discover our curated collection of brass artifacts, traditional Kundan jewelry, and bespoke home decor, handcrafted by master artisans since 2004.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#3B2F2F] text-white px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-[#2A2020] transition-colors">
                  Explore Gallery
                </button>
              </div>
            </div>
        </div>

        <div className="w-full lg:w-1/2 relative bg-[#2A2020]">
           <img 
              src="/__mockup/images/product-artifact.png" 
              alt="Brass Ganesha Idol" 
              className="w-full h-full object-cover object-center opacity-90"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-6 max-w-sm border-l-4 border-[#B8860B]">
               <h3 className="font-serif text-2xl text-[#3B2F2F] mb-2">Exquisite Brass Idols</h3>
               <p className="text-[#6A5A5A] text-sm">Intricately carved using traditional lost-wax casting techniques.</p>
            </div>
        </div>
      </section>
    </div>
  );
}