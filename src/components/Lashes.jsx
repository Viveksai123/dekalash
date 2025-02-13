import React, { useState, useEffect } from "react";
import { FaClock, FaMapMarkerAlt, FaTrophy, FaArrowLeft } from "react-icons/fa";

const CTFSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Google Form embed URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScp1DOn9qKeaYNEBM_1scnW515DSJReCOKaqGnwljpenpsJQQ/viewform?embedded=true";

  const handleRegisterClick = () => {
    setIsFormOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    // Restore body scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] py-10 px-4 md:py-20 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0a192f]/40 backdrop-blur-sm border border-[#00ffff]/20 rounded-xl 
            overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]
            transition-all duration-500">
            <div className="flex flex-col md:flex-row">
              {/* Animated CTF Image Side */}
              <div className="w-full md:w-1/2 relative overflow-hidden bg-[#060f1d] min-h-[300px] md:min-h-[400px]">
                <div className="absolute inset-0 grid-animation"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#00ffff] text-6xl md:text-9xl font-bold opacity-20 animate-pulse">
                    CTF
                  </div>
                </div>
              </div>
              
              {/* Event Details Side */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-['Orbitron'] mb-4 md:mb-6 bg-gradient-to-r from-[#00ffff] to-[#0891b2]
                  text-transparent bg-clip-text">
                  Cyber Challenge 2025
                </h2>
                
                <div className="space-y-4 md:space-y-6 text-gray-300">
                  {/* Time Details */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <FaClock className="text-[#00ffff] text-lg md:text-xl" />
                    <div>
                      <p className="font-semibold text-[#00ffff] text-sm md:text-base">Time & Date</p>
                      <p className="text-xs md:text-sm">February 20, 2025 - 10:00 AM EST</p>
                    </div>
                  </div>
                  
                  {/* Location Details */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <FaMapMarkerAlt className="text-[#00ffff] text-lg md:text-xl" />
                    <div>
                      <p className="font-semibold text-[#00ffff] text-sm md:text-base">Location</p>
                      <p className="text-xs md:text-sm">Tech Innovation Hub</p>
                      <p className="text-xs md:text-sm">123 Cyber Street, Digital City</p>
                    </div>
                  </div>
                  
                  {/* Rounds Information */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <FaTrophy className="text-[#00ffff] text-lg md:text-xl" />
                    <div>
                      <p className="font-semibold text-[#00ffff] text-sm md:text-base">Event Format</p>
                      <p className="text-xs md:text-sm">3 Challenging Rounds:</p>
                      <ul className="list-disc list-inside pl-4 space-y-1 mt-1 md:mt-2">
                        <li className="text-xs md:text-sm">Web Exploitation</li>
                        <li className="text-xs md:text-sm">Cryptography</li>
                        <li className="text-xs md:text-sm">Reverse Engineering</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handleRegisterClick}
                  className="mt-6 md:mt-8 px-4 md:px-6 py-2 md:py-3 bg-transparent border-2 border-[#00ffff] text-[#00ffff]
                  rounded-lg hover:bg-[#00ffff]/10 transition-all duration-300
                  hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] font-['Orbitron'] text-sm md:text-base"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleCloseForm}></div>
          
          <div className="relative z-60 w-full h-full flex flex-col bg-[#0a192f] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 bg-[#0a192f]/80 backdrop-blur-sm border-b border-[#00ffff]/20">
              <button 
                onClick={handleCloseForm}
                className="flex items-center space-x-2 text-[#00ffff] hover:text-white"
              >
                <FaArrowLeft className="text-lg" />
                <span className="text-sm font-['Orbitron']">Back</span>
              </button>
              
              <h2 className="text-lg font-['Orbitron'] text-[#00ffff]">CTF Registration</h2>
              
              {/* Placeholder for alignment */}
              <div className="w-24"></div>
            </div>

            {/* Google Form Iframe */}
            <div className="flex-grow overflow-auto custom-scrollbar">
              <iframe
                src={googleFormUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="CTF Registration Form"
                className="border-none"
              >
                Loading...
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CTFSection;