import React, { useState } from "react";

const LandingSection = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="w-full relative">
      {/* Footer Section */}
      <footer className="bg-[#0a192f] border-t border-[#00ffff]/20 flex flex-col md:flex-row 
        justify-between items-center px-6 py-3 shadow-lg relative">
        {/* Brand Name */}
        <h2 className="text-3xl md:text-4xl font-['Orbitron'] font-bold
          bg-gradient-to-r from-[#00ffff] via-[#4dd0e1] to-[#00bcd4] 
          text-transparent bg-clip-text">
          CYBER NEXA
        </h2>

        {/* Center Content with Privacy Link */}
        <div className="flex flex-row justify-center items-center gap-x-4 md:gap-x-6 mr-lg-3 ">
  <p className="text-[#8892b0] text-sm md:text-base font-light tracking-wider mt-lg-3 ">
    &copy; 2025 Cyber Nexa. All rights reserved.
  </p>
  <button 
    onClick={() => setShowPrivacy(!showPrivacy)}
    className="text-[#00ffff] text-sm hover:text-[#4dd0e1] transition-all duration-300
        font-['Orbitron'] border-b border-transparent hover:border-[#00ffff]">
    Privacy & Copyrights
  </button>
</div>

        {/* Right Side Link */}
        <a 
          href="https://calm-capybara-3548ea.netlify.app"
          className="text-[#00ffff] no-underline text-sm md:text-base hover:text-[#4dd0e1]
            transition-all duration-300 font-['Orbitron']
            border border-[#00ffff]/20 px-4 py-1 rounded-md
            hover:border-[#00ffff]/40 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
          Home
        </a>
      </footer>

      {/* Privacy & Copyright Modal/Dropdown */}
      {showPrivacy && (
        <div className="absolute bottom-full left-0 right-0 bg-[#0a192f] border-t border-[#00ffff]/20
          shadow-xl transform transition-all duration-300 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
              {/* Creator Info */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-['Orbitron'] text-[#00ffff] mb-4 
                  bg-gradient-to-r from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text">
                  Creator
                </h3>
                <div className="space-y-2">
                  <p className="text-[#a8b2d1] hover:text-[#00ffff] transition-colors duration-300">
                    Periketi Vivek Sai
                  </p>
                  <p className="text-[#a8b2d1] hover:text-[#00ffff] transition-colors duration-300">
                    +91 8106035425
                  </p>
                </div>
              </div>

              {/* Associated Clubs */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-['Orbitron'] text-[#00ffff] mb-4
                  bg-gradient-to-r from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text">
                  Associated Clubs
                </h3>
                <div className="space-y-2">
                  <p className="text-[#a8b2d1] hover:text-[#00ffff] transition-colors duration-300">
                  NexIoT
                  </p>
                  <p className="text-[#a8b2d1] hover:text-[#00ffff] transition-colors duration-300">
                  SATARC
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-['Orbitron'] text-[#00ffff] mb-4
                  bg-gradient-to-r from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text">
                  Location
                </h3>
                <p className="text-[#a8b2d1] hover:text-[#00ffff] transition-colors duration-300">
                  CBIT, Hyderabad
                </p>
              </div>

              {/* Copyright Notice */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-['Orbitron'] text-[#00ffff] mb-4
                  bg-gradient-to-r from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text">
                  Copyright Notice
                </h3>
                <p className="text-[#a8b2d1] hover:text-[#00ffff] transition-colors duration-300 leading-relaxed">
                  All content and materials are protected under copyright law.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingSection;