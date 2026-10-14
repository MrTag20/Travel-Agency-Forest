import React from 'react';

/**
 * Wildlife Line Art Outlines for Section Headers
 * Delicate golden/terracotta line art matching the luxury aesthetic
 */

export function TigerOutline({ size = 120, color = "#d3ba84", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Royal Bengal Tiger Outline"
    >
      {/* Outer Glow / Halo ring */}
      <circle cx="60" cy="60" r="54" stroke={color} strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.45" />
      <circle cx="60" cy="60" r="48" stroke={color} strokeWidth="0.8" strokeOpacity="0.3" />
      
      {/* Tiger Head Profile & Contours */}
      <path 
        d="M32 46 C30 36 38 28 48 30 C53 31 57 36 59 40 C63 36 67 31 72 30 C82 28 90 36 88 46 C87 52 83 56 82 62 C80 72 74 84 60 88 C46 84 40 72 38 62 C37 56 33 52 32 46 Z" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Tiger Ears Inner */}
      <path d="M42 33 C40 37 42 42 45 44" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M78 33 C80 37 78 42 75 44" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      
      {/* Forehead Stripes & Crown Mark */}
      <path d="M60 36 L60 48" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M54 40 L60 44 L66 40" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 48 L60 52 L68 48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Eyes */}
      <path d="M44 56 C46 54 50 54 52 56 C50 58 46 58 44 56 Z" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.25" />
      <circle cx="48" cy="56" r="1.5" fill={color} />
      <path d="M68 56 C70 54 74 54 76 56 C74 58 70 58 68 56 Z" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.25" />
      <circle cx="72" cy="56" r="1.5" fill={color} />
      
      {/* Nose & Muzzle */}
      <path d="M56 65 L64 65 L60 69 Z" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.3" strokeLinejoin="round" />
      <path d="M60 69 L60 74" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M54 74 C57 76 60 76 60 74 C60 76 63 76 66 74" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M56 78 C58 80 62 80 64 78" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      
      {/* Whiskers */}
      <path d="M42 68 L28 66" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
      <path d="M40 72 L26 73" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
      <path d="M42 76 L30 80" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
      <path d="M78 68 L92 66" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
      <path d="M80 72 L94 73" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
      <path d="M78 76 L90 80" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
      
      {/* Cheek Stripes */}
      <path d="M38 58 C35 60 35 64 36 67" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M82 58 C85 60 85 64 84 67" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M42 50 C38 52 38 55 40 57" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M78 50 C82 52 82 55 80 57" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function IndianBirdOutline({ size = 120, color = "#d3ba84", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Indian Kingfisher Bird Outline"
    >
      {/* Outer Glow / Halo ring */}
      <circle cx="60" cy="60" r="54" stroke={color} strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.45" />
      <circle cx="60" cy="60" r="48" stroke={color} strokeWidth="0.8" strokeOpacity="0.3" />
      
      {/* Mangrove Branch */}
      <path 
        d="M18 96 C35 92 65 90 102 94" 
        stroke={color} 
        strokeWidth="2.2" 
        strokeLinecap="round" 
      />
      {/* Leaves on Branch */}
      <path d="M82 92 C88 84 96 84 98 88 C94 92 88 94 82 92 Z" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.2" />
      <path d="M36 94 C32 86 24 88 22 92 C26 95 32 96 36 94 Z" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.2" />
      
      {/* Kingfisher Bill (Long sharp bill) */}
      <path 
        d="M22 45 L50 49 L50 53 Z" 
        stroke={color} 
        strokeWidth="1.8" 
        fill={color} 
        fillOpacity="0.3" 
        strokeLinejoin="round" 
      />
      
      {/* Head & Crest */}
      <path 
        d="M50 49 C50 40 56 32 66 32 C74 32 80 37 81 44 C82 48 80 52 81 56 C82 64 78 74 74 80" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
      />
      {/* Crest Feathers */}
      <path d="M68 32 C70 26 76 25 80 28" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M64 34 C65 29 70 28 73 31" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      
      {/* Eye & Facial Marking */}
      <circle cx="60" cy="45" r="3" stroke={color} strokeWidth="1.5" />
      <circle cx="60" cy="45" r="1.3" fill={color} />
      <path d="M52 46 C56 46 64 43 68 45" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M52 52 C58 53 66 52 72 50" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      
      {/* Breast & Belly */}
      <path 
        d="M50 53 C48 62 52 74 60 84 C63 87 66 89 68 90" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
      />
      
      {/* Wing Feathers with Detailed Layering */}
      <path 
        d="M66 54 C74 56 84 64 82 78 C80 86 76 94 72 98 L68 90" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      <path d="M72 62 C76 68 76 76 74 84" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M76 68 C80 74 79 82 77 88" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M68 70 C71 76 71 82 69 88" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Claws gripping branch */}
      <path d="M60 88 L58 92 L62 94" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M66 89 L65 93 L69 94" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ButterflyOutline({ size = 120, color = "#d3ba84", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Exotic Butterfly Outline"
    >
      {/* Outer Glow / Halo ring */}
      <circle cx="60" cy="60" r="54" stroke={color} strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.45" />
      <circle cx="60" cy="60" r="48" stroke={color} strokeWidth="0.8" strokeOpacity="0.3" />
      
      {/* Butterfly Body */}
      <ellipse cx="60" cy="62" rx="2.5" ry="16" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.3" />
      <circle cx="60" cy="43" r="3" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.4" />
      
      {/* Antennae with Curling Tips */}
      <path d="M58 41 C54 32 46 26 42 27 C40 28 41 31 43 31 C45 31 46 29 44 28" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M62 41 C66 32 74 26 78 27 C80 28 79 31 77 31 C75 31 74 29 76 28" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      
      {/* Left Forewing */}
      <path 
        d="M58 50 C48 35 28 28 20 38 C14 46 18 64 34 68 C44 70 54 64 58 60 Z" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      {/* Left Forewing Veins */}
      <path d="M56 52 C45 46 32 43 24 45" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M56 54 C46 52 35 52 26 56" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M57 57 C50 60 42 63 35 65" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="30" cy="46" r="3" stroke={color} strokeWidth="1" strokeDasharray="1.5 2" />
      
      {/* Right Forewing */}
      <path 
        d="M62 50 C72 35 92 28 100 38 C106 46 102 64 86 68 C76 70 66 64 62 60 Z" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinejoin="round" 
      />
      {/* Right Forewing Veins */}
      <path d="M64 52 C75 46 88 43 96 45" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M64 54 C74 52 85 52 94 56" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M63 57 C70 60 78 63 85 65" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="90" cy="46" r="3" stroke={color} strokeWidth="1" strokeDasharray="1.5 2" />
      
      {/* Left Hindwing with Swallowtail */}
      <path 
        d="M58 64 C48 66 34 72 35 84 C36 92 46 96 52 90 C54 88 53 96 50 100 C53 98 56 93 57 88 C58 80 58 74 58 64 Z" 
        stroke={color} 
        strokeWidth="1.6" 
        strokeLinejoin="round" 
      />
      <path d="M56 68 C48 74 44 82 44 87" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      
      {/* Right Hindwing with Swallowtail */}
      <path 
        d="M62 64 C72 66 86 72 85 84 C84 92 74 96 68 90 C66 88 67 96 70 100 C67 98 64 93 63 88 C62 80 62 74 62 64 Z" 
        stroke={color} 
        strokeWidth="1.6" 
        strokeLinejoin="round" 
      />
      <path d="M64 68 C72 74 76 82 76 87" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function IndianEagleOutline({ size = 120, color = "#d3ba84", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Indian Eagle in Flight Outline"
    >
      {/* Outer Glow / Halo ring */}
      <circle cx="60" cy="60" r="54" stroke={color} strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.45" />
      <circle cx="60" cy="60" r="48" stroke={color} strokeWidth="0.8" strokeOpacity="0.3" />
      
      {/* Eagle Body & Head */}
      <path 
        d="M58 48 C55 42 58 36 62 34 C64 33 66 34 68 36 L72 38 L67 42 C67 46 65 52 64 62 L66 74 L60 82 L54 74 L56 62 Z" 
        stroke={color} 
        strokeWidth="1.6" 
        strokeLinejoin="round" 
      />
      {/* Hooked Beak */}
      <path d="M68 36 C73 37 76 40 73 42 C70 43 68 41 68 40" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.3" strokeLinecap="round" />
      <circle cx="64" cy="38" r="1.3" fill={color} />
      
      {/* Left Wing in Full Flight Spread */}
      <path 
        d="M58 50 C48 42 34 35 18 36 C16 42 22 47 28 50 C22 53 26 58 32 60 C26 63 30 68 38 68 C45 68 52 64 56 60" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Left Wing Feathers Internal */}
      <path d="M50 50 C40 46 32 44 24 45" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M52 54 C42 52 35 52 28 55" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M54 58 C46 58 40 60 34 63" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Right Wing in Full Flight Spread */}
      <path 
        d="M62 50 C72 42 86 35 102 36 C104 42 98 47 92 50 C98 53 94 58 88 60 C94 63 90 68 82 68 C75 68 68 64 64 60" 
        stroke={color} 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Right Wing Feathers Internal */}
      <path d="M70 50 C80 46 88 44 96 45" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M68 54 C78 52 85 52 92 55" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M66 58 C74 58 80 60 86 63" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Fan Tail */}
      <path 
        d="M55 76 L48 88 C54 90 60 91 66 90 L72 88 L65 76 Z" 
        stroke={color} 
        strokeWidth="1.6" 
        strokeLinejoin="round" 
      />
      <path d="M55 80 L52 88" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M60 80 L60 90" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M65 80 L68 88" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
