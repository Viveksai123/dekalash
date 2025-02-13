import React from "react";

const SubHero = () => {
  return (
    <div>
      <section
        id="home"
        // Added scale animation and improved responsive padding
        className="relative flex flex-col justify-center items-end px-4 sm:px-6 md:px-12 lg:px-24 h-[100vh] 
          overflow-hidden" // Added overflow-hidden to contain the zoom effect
      >
        {/* Background with zoom animation */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fast-zoom"
          style={{
            backgroundImage: `url("./bg1.jpeg")`, // Replace with your cybersecurity themed image
            backgroundPosition: 'center',
            animation: 'zoom 20s infinite', // Custom zoom animation
          }}
        />

        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/80 via-[#0a192f]/60 to-[#0a192f]/90"></div>

        {/* Content container with improved responsive layout */}
        <div className="relative z-10 space-y-4 max-w-md lg:max-w-lg xl:max-w-xl mr-0 md:mr-4 lg:mr-8">
          {/* Subtitle with cyber theme */}
          <h5 className="text-sm sm:text-base uppercase text-[#00ffff] tracking-wider font-['Orbitron']">
            Next Generation Security
          </h5>

          {/* Main heading with responsive sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight 
            bg-gradient-to-r from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text font-['Orbitron']">
            Securing Tomorrow's Technology Today
          </h1>

          {/* Description with improved readability and responsive text */}
          <p className="text-[#8892b0] d-none d-md-block text-sm sm:text-base md:text-lg leading-relaxed font-dark">
            Pioneering next-generation cybersecurity solutions with advanced AI-driven threat detection 
            and real-time protection systems. Your digital assets, our unwavering commitment.
          </p>
        </div>
      </section>

      {/* Add this to your global CSS file */}
      <style jsx global>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-slow-zoom {
          animation: zoom 20s infinite;
        }
      `}</style>
    </div>
  );
};

export default SubHero;