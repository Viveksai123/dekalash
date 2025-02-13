import React from 'react';
import { FaClock, FaMapMarkerAlt, FaLaptop, FaFile, FaProjectDiagram } from 'react-icons/fa';

const PresentationSection = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Poster Presentation Section - Reverse Layout */}
        <div className="bg-[#0a192f]/40 backdrop-blur-sm border border-[#00ffff]/20 rounded-lg sm:rounded-xl 
          overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]
          transition-all duration-500">
          <div className="flex flex-col md:flex-row-reverse">
            {/* Animation Side */}
            <div className="w-full md:w-1/2 relative overflow-hidden bg-[#060f1d] min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
              <div className="absolute inset-0 blockchain-animation"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#00ffff] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold opacity-20 animate-pulse text-center">
                  POSTER
                </div>
                <div className="absolute inset-0">
                  <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-1/4 left-1/4">📊</div>
                  <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-3/4 right-1/4">📈</div>
                  <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-1/2 left-3/4">🎯</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-['Orbitron'] mb-4 sm:mb-6 bg-gradient-to-r 
                from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text tracking-wide">
                Poster Presentation
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaClock className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Time Slot</p>
                    <p className="text-sm sm:text-base">10:00 AM - 12:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Venue</p>
                    <p className="text-sm sm:text-base">Exhibition Hall A</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaFile className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Requirements</p>
                    <ul className="list-disc list-inside pl-3 sm:pl-4 space-y-0.5 sm:space-y-1 mt-1 sm:mt-2 text-sm sm:text-base">
                      <li>A0 Size Poster</li>
                      <li>QR Code Integration</li>
                      <li>Abstract Summary</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent 
                border-2 border-[#00ffff] text-[#00ffff] text-sm sm:text-base
                rounded-lg hover:bg-[#00ffff]/10 transition-all duration-300 
                hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] font-['Orbitron']">
                Submit Poster
              </button>
            </div>
          </div>
        </div>

        {/* Paper Presentation Section - Normal Layout */}
        <div className="bg-[#0a192f]/40 backdrop-blur-sm border border-[#00ffff]/20 rounded-lg sm:rounded-xl 
          overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]
          transition-all duration-500">
          <div className="flex flex-col md:flex-row">
            {/* Animation Side */}
            <div className="w-full md:w-1/2 relative overflow-hidden bg-[#060f1d] min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
              <div className="absolute inset-0 blockchain-animation"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#00ffff] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold opacity-20 animate-pulse text-center">
                  PAPER
                </div>
                <div className="absolute inset-0">
                  <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-1/4 left-1/4">📝</div>
                  <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-3/4 right-1/4">📄</div>
                  <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-1/2 left-3/4">📚</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-['Orbitron'] mb-4 sm:mb-6 bg-gradient-to-r 
                from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text tracking-wide">
                Paper Presentation
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaClock className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Time Slot</p>
                    <p className="text-sm sm:text-base">2:00 PM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Venue</p>
                    <p className="text-sm sm:text-base">Conference Room B</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaLaptop className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Requirements</p>
                    <ul className="list-disc list-inside pl-3 sm:pl-4 space-y-0.5 sm:space-y-1 mt-1 sm:mt-2 text-sm sm:text-base">
                      <li>Research Paper</li>
                      <li>Presentation Slides</li>
                      <li>Extended Abstract</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent 
                border-2 border-[#00ffff] text-[#00ffff] text-sm sm:text-base
                rounded-lg hover:bg-[#00ffff]/10 transition-all duration-300 
                hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] font-['Orbitron']">
                Submit Paper
              </button>
            </div>
          </div>
        </div>

        {/* Project Presentation Section - Reverse Layout */}
        <div className="bg-[#0a192f]/40 backdrop-blur-sm border border-[#00ffff]/20 rounded-lg sm:rounded-xl 
          overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]
          transition-all duration-500">
          <div className="flex flex-col md:flex-row-reverse">
            {/* Animation Side */}
            <div className="w-full md:w-1/2 relative overflow-hidden bg-[#060f1d] min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
              <div className="absolute inset-0 blockchain-animation"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#00ffff] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold opacity-20 animate-pulse text-center">
                  PROJECT
                </div>
                <div className="absolute inset-0">
                  <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-1/4 left-1/4">💻</div>
                  <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-3/4 right-1/4">🔧</div>
                  <div className="crypto-particle text-2xl sm:text-3xl md:text-4xl top-1/2 left-3/4">⚙️</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-['Orbitron'] mb-4 sm:mb-6 bg-gradient-to-r 
                from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text tracking-wide">
                Project Presentation
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaClock className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Time Slot</p>
                    <p className="text-sm sm:text-base">4:30 PM - 6:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Venue</p>
                    <p className="text-sm sm:text-base">Demo Hall C</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaProjectDiagram className="text-[#00ffff] text-lg sm:text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-[#00ffff] text-sm sm:text-base">Requirements</p>
                    <ul className="list-disc list-inside pl-3 sm:pl-4 space-y-0.5 sm:space-y-1 mt-1 sm:mt-2 text-sm sm:text-base">
                      <li>Working Prototype</li>
                      <li>Technical Documentation</li>
                      <li>Implementation Video</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent 
                border-2 border-[#00ffff] text-[#00ffff] text-sm sm:text-base
                rounded-lg hover:bg-[#00ffff]/10 transition-all duration-300 
                hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] font-['Orbitron']">
                Submit Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationSection;