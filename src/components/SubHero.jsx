import React from "react";

const SubHero = () => {
  return (
    <div>
      {/* Navbar */}
   

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col justify-center items-end px-6 md:px-12 lg:px-24 h-[100vh] bg-fixed bg-center text-white"
        style={{
          backgroundImage: `url("./bg3.png")`,
          backgroundPosition: '50% 25%' // Replace with your background image URL
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black via-transparent bg-opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 space-y-4 max-w-md ">
        <h5 className="text-sm uppercase text-gray-200">Natural Beauty</h5>
<h1 className="text-2xl md:text-5xl font-semibold leading-tight">
Lash Lift & Tinting 
</h1>
<p className="text-gray-300 text-base md:text-lg">
Say goodbye to the hassle of lash curlers and hello to perfectly lifted lashes with Deka Lash.

Our lash lift is an all-natural, semi-permanent application that boosts your natural lashes from the root, giving them a curled, lengthened appearance. Perfect for when you take a break from lash extensions, aren’t ready to commit to them, or simply because you love a clean, natural look. Whether you prefer your lashes with or without a tint, our lash lifts last anywhere between 6-8 weeks.
</p>

          
        </div>
      </section>

      {/* Dummy Bottom Section */}
   
    </div>
  );
};

export default SubHero;
