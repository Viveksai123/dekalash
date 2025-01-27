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
          backgroundImage: `url("./bg1.jpg")`, // Replace with your background image URL
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black via-transparent bg-opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 space-y-4 max-w-md ">
          <h5 className="text-sm uppercase text-gray-200">Natural Beauty</h5>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Retinol Renewal 
            Night Cream
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          
        </div>
      </section>

      {/* Dummy Bottom Section */}
   
    </div>
  );
};

export default SubHero;
