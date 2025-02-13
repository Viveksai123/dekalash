import React from "react";

const LandingSection = () => {
  return (
    <div className="w-full">
      {/* Background Section */}

      {/* Footer Section */}
      <footer className="bg-[#0a192f] border-t border-[#00ffff]/20 flex flex-col md:flex-row 
        justify-between items-center px-6 py-3 shadow-lg">
        {/* Brand Name */}
        <h2 className="text-3xl md:text-4xl font-['Orbitron'] font-bold
          bg-gradient-to-r from-[#00ffff] via-[#4dd0e1] to-[#00bcd4] 
          text-transparent bg-clip-text">
          CYBER NEXA
        </h2>

        {/* Center Content */}
        <p className="text-[#8892b0] text-sm md:text-base mt-2 md:mt-0 font-light tracking-wider">
          &copy; 2025 Cyber Nexa. All rights reserved.
        </p>

        {/* Right Side Link */}
        <a 
          href="#home" 
          className="text-[#00ffff] text-decoration-none text-sm md:text-base hover:text-[#4dd0e1] 
            transition-colors duration-300 mt-2 md:mt-0 font-['Orbitron']
            border border-[#00ffff]/20 px-4 py-1 rounded-md
            hover:border-[#00ffff]/40 hover:shadow-[0_0_10px_rgba(0,255,255,0.2)]">
          Home
        </a>

        {/* Top Border Glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r 
          from-transparent via-[#00ffff]/50 to-transparent" />
      </footer>
    </div>
  );
};

export default LandingSection;