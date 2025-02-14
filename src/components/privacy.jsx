import React from "react";

const PrivacyAndCopyright = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a192f] to-[#112240] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Creator Info */}
          <div className="space-y-4 group">
            <h3 className="text-xl font-['Orbitron'] text-[#00ffff] mb-4 
              relative after:content-[''] after:absolute after:-bottom-2 after:left-0 
              after:w-0 after:h-[2px] after:bg-[#00ffff] 
              after:transition-all after:duration-300 
              group-hover:after:w-full">
              Creator
            </h3>
            <div className="space-y-2">
              <p className="text-gray-300 hover:text-[#00ffff] transition-colors duration-300">
                Periketi Vivek Sai
              </p>
              <p className="text-gray-300 hover:text-[#00ffff] transition-colors duration-300">
                +91 8106035425
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Add social media links if needed */}
              </div>
            </div>
          </div>

          {/* Club Section */}
          <div className="space-y-4 group">
            <h3 className="text-xl font-['Orbitron'] text-[#00ffff] mb-4
              relative after:content-[''] after:absolute after:-bottom-2 after:left-0 
              after:w-0 after:h-[2px] after:bg-[#00ffff] 
              after:transition-all after:duration-300 
              group-hover:after:w-full">
              Associated Clubs
            </h3>
            <div className="flex flex-col space-y-4">
              {/* SATRAC */}
              <div className="group/club transition-all duration-300 
                hover:bg-[#1a2942] p-4 rounded-lg border border-transparent 
                hover:border-[#00ffff]/20">
                <h4 className="text-[#00ffff] font-['Orbitron']">SATRAC</h4>
                {/* Add logo here */}
              </div>

              {/* Next IoT */}
              <div className="group/club transition-all duration-300 
                hover:bg-[#1a2942] p-4 rounded-lg border border-transparent 
                hover:border-[#00ffff]/20">
                <h4 className="text-[#00ffff] font-['Orbitron']">Next IoT</h4>
                {/* Add logo here */}
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="space-y-4 group">
            <h3 className="text-xl font-['Orbitron'] text-[#00ffff] mb-4
              relative after:content-[''] after:absolute after:-bottom-2 after:left-0 
              after:w-0 after:h-[2px] after:bg-[#00ffff] 
              after:transition-all after:duration-300 
              group-hover:after:w-full">
              Privacy Policy
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-[#00ffff] transition-colors duration-300 
                cursor-pointer transform hover:translate-x-2 transition-transform duration-300">
                Terms of Service
              </li>
              <li className="text-gray-300 hover:text-[#00ffff] transition-colors duration-300 
                cursor-pointer transform hover:translate-x-2 transition-transform duration-300">
                Privacy Policy
              </li>
              <li className="text-gray-300 hover:text-[#00ffff] transition-colors duration-300 
                cursor-pointer transform hover:translate-x-2 transition-transform duration-300">
                Cookie Policy
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 group">
            <h3 className="text-xl font-['Orbitron'] text-[#00ffff] mb-4
              relative after:content-[''] after:absolute after:-bottom-2 after:left-0 
              after:w-0 after:h-[2px] after:bg-[#00ffff] 
              after:transition-all after:duration-300 
              group-hover:after:w-full">
              Contact Us
            </h3>
            <p className="text-gray-300 hover:text-[#00ffff] transition-colors duration-300">
              Email: info@cybernexa.com
            </p>
            <p className="text-gray-300 hover:text-[#00ffff] transition-colors duration-300">
              Phone: +91 8106035425
            </p>
            <p className="text-gray-300 hover:text-[#00ffff] transition-colors duration-300">
              Location: KMIT, Hyderabad
            </p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-[#00ffff]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Cyber Nexa. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Designed & Developed by <span className="text-[#00ffff]">Periketi Vivek Sai</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndCopyright;