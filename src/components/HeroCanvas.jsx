import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowRight, 
  MessageCircle, 
  Users, 
  Star, 
  ShieldCheck, 
  MapPin, 
  ArrowDown, 
  Volume2, 
  VolumeX 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

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
      className="relative w-full min-h-[640px] h-screen max-h-[1000px] overflow-hidden bg-[#040d07] flex items-center"
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

      {/* Cinematic Contrast Overlays - Darkened on left for text legibility, transparent on right for tiger video */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-r from-black/85 via-black/60 to-black/20"
      />
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#040d07]/80 to-transparent z-[2] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#040d07]/90 to-transparent z-[2] pointer-events-none" />

      {/* Audio Icon-Based Mute / Unmute Button */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-8 z-20">
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          title={isMuted ? 'Unmute audio' : 'Mute audio'}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/85 text-white border border-white/30 hover:border-accent backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-accent" />
          ) : (
            <Volume2 className="w-4 h-4 text-white" />
          )}
        </button>
      </div>

      {/* Left-Aligned Hero Content matching shared image */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16">
        <div className="max-w-2xl text-left">
          
          {/* Eyebrow badge / tagline line */}
          <div className="reveal-fade-up inline-flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="w-7 h-[2px] bg-[#C96F4F]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#C96F4F] drop-shadow-md">
              JOURNEY INTO THE WILD
            </span>
          </div>

          {/* Reduced H1 Heading placed on left */}
          <h1 
            className="reveal-fade-up delay-100 font-sans text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.08] tracking-tight mb-4 sm:mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          >
            Discover the<br />
            Real <span className="text-[#C96F4F]">Sundarbans</span>
          </h1>

          {/* Tagline / Subtitle description text */}
          <p className="reveal-fade-up delay-200 text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-sans max-w-xl mb-6 sm:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Explore breathtaking mangrove forests, spot the Royal Bengal Tiger, experience 
            village life and enjoy a memorable journey with our Sundarban tour packages from Kolkata.
          </p>

          {/* Reduced Action Buttons placed on left */}
          <div className="reveal-fade-up delay-300 flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <Link
              to="/sundarban-tour-packages"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#C96F4F] hover:bg-[#b35d3e] shadow-[0_4px_20px_rgba(201,111,79,0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumberDigits}?text=Hello%20SM%20Bengal%20Travel,%20I%20am%20interested%20in%20Sundarban%20tour%20packages.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-black/40 hover:bg-black/60 border border-white/40 hover:border-white backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 shrink-0 text-[#C96F4F]" />
              <span>WhatsApp Now</span>
            </a>
          </div>

          {/* 4 Trust Highlights along bottom left */}
          <div className="reveal-fade-up delay-400 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/15 max-w-2xl">
            <div className="flex items-center gap-2 text-white/90">
              <Users className="w-4 h-4 text-[#C96F4F] shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold leading-tight">10,000+</span>
                <span className="text-[10px] text-white/75 leading-tight">Happy Travellers</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <Star className="w-4 h-4 text-[#C96F4F] shrink-0 fill-[#C96F4F]" />
              <div className="flex flex-col">
                <span className="text-xs font-bold leading-tight">Trusted</span>
                <span className="text-[10px] text-white/75 leading-tight">Local Operator</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <ShieldCheck className="w-4 h-4 text-[#C96F4F] shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold leading-tight">Safe & Secure</span>
                <span className="text-[10px] text-white/75 leading-tight">Travel</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4 text-[#C96F4F] shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold leading-tight">Kolkata</span>
                <span className="text-[10px] text-white/75 leading-tight">Pickup & Drop</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt Indicator */}
      <button
        onClick={scrollToNextSection}
        aria-label="Scroll to explore packages"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/75 hover:text-[#C96F4F] text-[10px] sm:text-xs uppercase tracking-widest bg-transparent border-none cursor-pointer drop-shadow-md transition-colors"
      >
        <span>Scroll To Explore</span>
        <div className="animate-bounce">
          <ArrowDown className="w-3.5 h-3.5 text-[#C96F4F]" />
        </div>
      </button>
    </section>
  );
}
