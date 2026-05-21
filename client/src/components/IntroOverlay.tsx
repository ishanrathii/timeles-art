import { useState, useEffect } from "react";
import introVideo from "@/assets/videos/intro-bg.mp4";

export default function IntroOverlay() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer   = setTimeout(() => setFade(true),  4000);
    const removeTimer = setTimeout(() => setShow(false), 5500);
    return () => { clearTimeout(fadeTimer); clearTimeout(removeTimer); };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-[1500ms] ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 z-0">
        <video
          src={introVideo}
          autoPlay muted playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-widest uppercase animate-in zoom-in duration-1000 delay-300 fill-mode-both">
          Timeless <span className="text-[#C4501A] italic">Art</span>
        </h1>
        <div className="w-24 h-px bg-[#C4501A] my-6 animate-in fade-in duration-1000 delay-700 fill-mode-both" />
        <p className="text-[#C4501A] tracking-[0.3em] uppercase text-xs md:text-sm lg:text-base font-light animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-1000 fill-mode-both">
          Where every masterpiece whispers a story of the past.
        </p>
      </div>
    </div>
  );
}
