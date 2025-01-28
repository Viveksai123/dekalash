import React from "react";

const LandingSection = () => {
  return (
    <div className="w-full">
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center flex items-center justify-center h-[100vh] sm:h-[60vh]"
        style={{
          backgroundImage: `url("/bg3.webp")`, // Path to the image in the public folder
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Wake Up Makeup-Free And Confident
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 max-w-xl">
            Get the long lashes of your dreams in real life. Feel confident and
            ready to take on your day by waking up with luscious lashes.
          </p>
          {/* <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-600 transition-all">
            Get My Offer
          </button> */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-pink-500 flex flex-col md:flex-row justify-between items-center text-white px-3 py-3">
  {/* Brand Name */}
  <h2 className="text-4xl md:text-4xl font-semibold">DEKALASH</h2>
  
  {/* Copyright Info */}
  <p className="text-sm md:text-base mt-2 md:mt-0 text-center">
    &copy; 2025 Deka Lash Franchise, LLC
  </p>
</footer>

    </div>
  );
};

export default LandingSection;
