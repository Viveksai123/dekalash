import React from 'react';
import { FaClock, FaBitcoin, FaEthereum } from 'react-icons/fa';

const CryptoSection = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0a192f]/40 backdrop-blur-sm border border-[#00ffff]/20 rounded-xl 
          overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]
          transition-all duration-500">
          
          <div className="flex flex-col md:flex-row">
            {/* Animated Crypto Side */}
            <div className="w-full md:w-1/2 relative overflow-hidden bg-[#060f1d] min-h-[400px]">
              <div className="absolute inset-0 grid-animation"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#00ffff] text-9xl font-bold opacity-20 animate-pulse">
                  ETH
                </div>
                {/* Floating Elements Animation */}
                <div className="absolute inset-0">
                  <div className="floating-element top-1/4 left-1/4"></div>
                  <div className="floating-element top-3/4 right-1/4"></div>
                  <div className="floating-element top-1/2 left-3/4"></div>
                </div>
              </div>
            </div>

            {/* Event Details Side */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-4xl font-['Orbitron'] mb-6 bg-gradient-to-r from-[#00ffff] to-[#0891b2] 
                text-transparent bg-clip-text">
                Genesis NFT Auction
              </h2>
              
              <div className="space-y-6 text-gray-300">
                {/* Time Details */}
                <div className="flex items-center space-x-4">
                  <FaClock className="text-[#00ffff] text-xl" />
                  <div>
                    <p className="font-semibold text-[#00ffff]">Auction Timeline</p>
                    <p>Opening Bid: Feb 20, 2025 - 10:00 AM EST</p>
                    <p>Closing: Feb 23, 2025 - 10:00 PM EST</p>
                  </div>
                </div>

                {/* Platform Details */}
                <div className="flex items-center space-x-4">
                  <FaEthereum className="text-[#00ffff] text-xl" />
                  <div>
                    <p className="font-semibold text-[#00ffff]">Platform</p>
                    <p>Ethereum Mainnet</p>
                    <p>Smart Contract: 0x1234...5678</p>
                  </div>
                </div>

                {/* Collection Information */}
                <div className="flex items-center space-x-4">
                  <FaBitcoin className="text-[#00ffff] text-xl" />
                  <div>
                    <p className="font-semibold text-[#00ffff]">Collection Details</p>
                    <p>Featured Items:</p>
                    <ul className="list-disc list-inside pl-4 space-y-1 mt-2">
                      <li>Genesis Digital Art Series</li>
                      <li>Exclusive Membership Tokens</li>
                      <li>Limited Edition Collectibles</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="mt-8 px-6 py-3 bg-transparent border-2 border-[#00ffff] text-[#00ffff] 
                rounded-lg hover:bg-[#00ffff]/10 transition-all duration-300 
                hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] font-['Orbitron']">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoSection;