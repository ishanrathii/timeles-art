import './_group.css';

export function EditorialGrid() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] flex flex-col font-sans p-4 lg:p-8">
      <div className="flex-1 border border-black/10 rounded-sm overflow-hidden bg-white shadow-xl flex flex-col min-h-[860px]">
        <header className="p-8 border-b border-black/10 flex justify-between items-end">
           <div>
              <p className="text-xs uppercase tracking-widest text-[#8A3324] mb-2 font-semibold">Hingoli, India</p>
              <div className="font-serif text-3xl font-bold text-[#2C2424]">Priya Art Gallery</div>
           </div>
           <nav className="flex gap-8 text-sm uppercase tracking-wider font-medium text-[#4A4040]">
             <a href="#" className="hover:text-[#B8860B] border-b border-transparent hover:border-[#B8860B] pb-1">Artifacts</a>
             <a href="#" className="hover:text-[#B8860B] border-b border-transparent hover:border-[#B8860B] pb-1">Jewelry</a>
             <a href="#" className="hover:text-[#B8860B] border-b border-transparent hover:border-[#B8860B] pb-1">Decor</a>
           </nav>
        </header>

        <section className="flex-1 grid grid-cols-1 lg:grid-cols-12 h-full">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col justify-center p-12 lg:p-16 xl:p-24 border-r border-black/10">
            <h1 className="font-serif text-6xl xl:text-8xl font-medium text-[#2C2424] leading-[1.05] mb-8">
              Curating <br/>
              <span className="italic text-[#8A3324]">Indian</span> <br/>
              Heritage.
            </h1>
            <p className="text-xl text-[#5A5050] max-w-md mb-12 leading-relaxed font-light">
              A premier destination for authentic brass artifacts, traditional Kundan jewelry, and heritage home decor.
            </p>
            <div className="flex items-center gap-6">
               <button className="bg-[#B8860B] text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-[#A07000] transition-colors shadow-lg shadow-[#B8860B]/20">
                 Shop Collection
               </button>
               <a href="#" className="text-sm font-semibold tracking-wider uppercase text-[#2C2424] hover:text-[#8A3324] underline underline-offset-4">
                 Read Our Story
               </a>
            </div>
          </div>

          {/* Imagery Column */}
          <div className="lg:col-span-5 grid grid-rows-2 h-full">
            <div className="relative border-b border-black/10 overflow-hidden group">
               <img src="/__mockup/images/category-artifacts.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Artifacts" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
               <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs uppercase tracking-widest mb-1 opacity-80">Collection</p>
                  <p className="font-serif text-2xl">Brass & Bronze</p>
               </div>
            </div>
            <div className="grid grid-cols-2">
               <div className="relative border-r border-black/10 overflow-hidden group">
                 <img src="/__mockup/images/product-jewelry.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Jewelry" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                 <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-serif text-xl">Kundan</p>
                 </div>
               </div>
               <div className="relative overflow-hidden group">
                 <img src="/__mockup/images/category-decor.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Decor" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                 <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-serif text-xl">Decor</p>
                 </div>
               </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}