import React from "react";

const MarqueeSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#0a192f] relative">
      {/* Animated Border Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00ffff]/50 to-transparent" />
      
      {/* Animated Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00ffff]/50 to-transparent" />

      {/* Container with gradient fade edges */}
      <div className="relative overflow-hidden py-4 w-full">
        {/* Gradient Fade - Left */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 
          bg-gradient-to-r from-[#0a192f] via-[#112240] to-transparent z-10" />
        
        {/* Gradient Fade - Right */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 
          bg-gradient-to-l from-[#0a192f] via-[#112240] to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex animate-scroll-left space-x-8 min-w-[200%]">
          {/* Repeat Content for Smooth Scroll */}
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-block">
              <span className="font-['Orbitron'] text-base sm:text-lg">
                <span className="text-[#00ffff]">🎯 SPECIAL OFFER:</span>
                <span className="text-gray-300 ml-2">
                  Register for either 
                  <span className="text-[#00ffff] mx-1">Capture The Flag</span> 
                  or 
                  <span className="text-[#00ffff] mx-1">Crypto Masters</span> 
                  for a chance to participate in both events! Limited slots available.
                </span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
