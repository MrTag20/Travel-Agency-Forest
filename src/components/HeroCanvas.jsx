import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Calendar, 
  ArrowDown, 
  Volume2, 
  VolumeX 
} from 'lucide-react';

export default function HeroCanvas({ onOpenBooking }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt to autoplay with audio in loop as requested
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {
          // If browser policy restricts unmuted autoplay, fallback to muted autoplay
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
    }

    // Auto-unmute on first user interaction if browser initially blocked audio
    const handleFirstUserInteraction = () => {
      if (videoRef.current && videoRef.current.muted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    };

    window.addEventListener('click', handleFirstUserInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
    };
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMutedState = !videoRef.current.muted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);

    // If unmuting and video happens to be paused, ensure it plays
    if (!newMutedState && videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    }
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: 'smooth'
    });
  };

  return (
    <section
      className="relative w-full h-screen min-h-[580px] overflow-hidden bg-[#040d07] flex items-center justify-center"
      aria-label="Sundarban Wilderness Hero"
    >
      {/* Background Video Element Playing in Loop with Audio */}
      <video
        ref={videoRef}
        src="/Tiger_walking_in_mangrove_delta_20261012184129_gwr_video_mvp.mp4"
        loop
        playsInline
        autoPlay
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-700 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-40'
        }`}
      />

      {/* Cinematic Contrast Overlays */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(4, 13, 7, 0.2) 0%, rgba(4, 13, 7, 0.45) 70%, rgba(4, 13, 7, 0.7) 100%)'
        }}
      />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#040d07]/80 to-transparent z-[2] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#040d07]/90 to-transparent z-[2] pointer-events-none" />

      {/* Audio Icon-Based Mute / Unmute Button */}
      <div className="absolute top-24 sm:top-28 right-4 sm:right-8 z-20">
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          title={isMuted ? 'Unmute audio' : 'Mute audio'}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/85 text-white border border-white/30 hover:border-accent backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-accent" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Foreground Hero Content */}
      <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl px-4 sm:px-6 mx-auto mt-8 sm:mt-12">
        {/* Main Headline */}
        <h1 
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.08] tracking-tight mb-8 sm:mb-10 drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]"
        >
          Escape Into <span className="text-accent italic">The Wild.</span>
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <Link
            to="/sundarban-tour-packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white bg-accent hover:bg-[#b35d3e] shadow-[0_8px_30px_rgba(201,111,79,0.55)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Compass className="w-5 h-5" />
            <span>Explore Tour Packages</span>
          </Link>

          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/60 hover:border-white backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Plan Your Trip</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Prompt Indicator */}
      <button
        onClick={scrollToNextSection}
        aria-label="Scroll to explore packages"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/85 text-xs uppercase tracking-widest bg-transparent border-none cursor-pointer drop-shadow-md hover:text-accent transition-colors"
      >
        <span>Scroll To Explore</span>
        <div className="animate-bounce">
          <ArrowDown className="w-4 h-4 text-accent" />
        </div>
      </button>
    </section>
  );
}
