import { useState, useEffect } from "react";
import introVideo from "@/assets/videos/intro-bg.mp4";

export default function IntroOverlay() {
  const [show, setShow]   = useState(true);
  const [fade, setFade]   = useState(false);

  useEffect(() => {
    const fadeTimer   = setTimeout(() => setFade(true),  4000);
    const removeTimer = setTimeout(() => setShow(false), 5500);
    return () => { clearTimeout(fadeTimer); clearTimeout(removeTimer); };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-[1500ms] ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "hsl(42 48% 96%)" }}
    >
      {/* Video layer */}
      <div className="absolute inset-0 z-0">
        <video
          src={introVideo}
          autoPlay muted playsInline
          className="w-full h-full object-cover opacity-25 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(42_48%_96%)] via-transparent to-[hsl(42_48%_96%)] opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center px-6">

        {/* Top rule */}
        <div className="flex items-center gap-4 mb-8 animate-in fade-in duration-700">
          <div className="w-12 sm:w-20 h-px bg-primary/40" />
          <span className="text-primary font-semibold tracking-[0.45em] uppercase text-[10px] sm:text-xs">
            Est. 2004 · Hingoli
          </span>
          <div className="w-12 sm:w-20 h-px bg-primary/40" />
        </div>

        {/* Main title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground tracking-widest uppercase animate-in zoom-in duration-1000 delay-200 fill-mode-both leading-tight">
          Timeless
        </h1>
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl italic animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both"
            style={{
              background: "linear-gradient(90deg, hsl(42 70% 40%) 0%, hsl(42 90% 62%) 45%, hsl(42 70% 36%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
          Artistry
        </h2>

        {/* Gold divider with dot */}
        <div className="flex items-center gap-3 my-6 sm:my-8 animate-in fade-in duration-1000 delay-700 fill-mode-both">
          <div className="w-16 sm:w-24 h-px bg-primary/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <div className="w-16 sm:w-24 h-px bg-primary/50" />
        </div>

        {/* Subtitle */}
        <p className="text-foreground/60 tracking-[0.3em] uppercase text-[10px] sm:text-xs font-medium animate-in slide-in-from-bottom-4 fade-in duration-1000 delay-1000 fill-mode-both">
          Where every masterpiece whispers a story of the past.
        </p>

        {/* Gallery name */}
        <p className="mt-4 text-primary font-serif text-base sm:text-lg tracking-widest animate-in fade-in duration-1000 delay-1200 fill-mode-both">
          Priya Art Gallery
        </p>
      </div>
    </div>
  );
}
