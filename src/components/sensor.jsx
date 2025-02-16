import React, { useState } from 'react';
import { FaClock, FaMapMarkerAlt, FaMicrochip, FaArrowLeft } from 'react-icons/fa';

const SensorSprintSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Google Form embed URL - Replace with your actual form URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf3sEugKJH2ouhV7YPPMMi4ywHajIBud0e6MumdareFbo_p8g/viewform?embedded=true";

  const handleRegisterClick = () => {
    setIsFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Main container with responsive padding */}
      <div className="min-h-screen bg-[#0a192f] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Card container with responsive border and shadow */}
          <div className="bg-[#0a192f]/40 backdrop-blur-sm border border-[#00ffff]/20 rounded-lg sm:rounded-xl 
            overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]
            transition-all duration-500">
            
            {/* Flex container with improved responsive behavior */}
            <div className="flex flex-col md:flex-row">
              {/* Animated side with responsive height */}
              <div className="w-full md:w-1/2 relative overflow-hidden bg-[#060f1d] min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                <div className="absolute inset-0 blockchain-animation"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#00ffff] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold opacity-20 animate-pulse">
                    SPRINT
                  </div>
                  <div className="absolute inset-0">
                    <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-1/4 left-1/4">⚡</div>
                    <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-3/4 right-1/4">📡</div>
                    <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-1/2 left-3/4">🔌</div>
                  </div>
                </div>
              </div>

              {/* Content side with responsive spacing */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-['Orbitron'] mb-4 sm:mb-6 bg-gradient-to-r 
                  from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text tracking-wide">
                  Sensor Sprint 2025
                </h2>
                
                <div className="space-y-4 sm:space-y-6 text-gray-300">
                  {/* Time Details */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <FaClock className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                    <div>
                      <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Competition Schedule</p>
                      <p className="text-sm sm:text-base">MARCH 4th & 5th</p>
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <FaMapMarkerAlt className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                    <div>
                      <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Location</p>
                      <p className="text-sm sm:text-base">CBIT</p>
                      
                    </div>
                  </div>

                  {/* Challenge Details */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <FaMicrochip className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                    <div>
                      <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Sprint Challenges</p>
                      <p className="text-sm sm:text-base">Competition Categories:</p>
                      <ul className="list-disc list-inside pl-3 sm:pl-4 space-y-0.5 sm:space-y-1 mt-1 sm:mt-2 text-sm sm:text-base">
                        <li>Environmental Sensing</li>
                        <li>Motion Detection</li>
                        <li>IoT Integration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleRegisterClick}
                  className="mt-6 sm:mt-8 px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent 
                    border-2 border-[#00ffff] text-[#00ffff] text-sm sm:text-base
                    rounded-lg hover:bg-[#00ffff]/10 transition-all duration-300 
                    hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] font-['Orbitron']">
                  Register
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
          
          <div className="relative z-60 w-full h-full flex flex-col bg-[#f0ebf8] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 bg-[#0a192f]/80 backdrop-blur-sm border-b border-[#00ffff]/20">
              <button 
                onClick={handleCloseForm}
                className="flex items-center justify-center space-x-2 text-[#00ffff] hover:text-white"
              >
                <FaArrowLeft className="text-lg" />
                <span className="text-sm font-['Orbitron']">Back</span>
              </button>

              <div className="w-24"></div>

              <h2 className="text-lg font-['Orbitron'] text-[#00ffff] flex-1 text-center">
                Sprint Registration
              </h2>
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
                title="Sprint Registration Form"
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

export default SensorSprintSection;