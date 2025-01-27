import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    name: "M M",
    date: "15 days ago",
    review: "Tina did an amazing hybrid wispy cat eye set on me. The process was smooth, and the final look exceeded my expectations. I’ve already received so many compliments, and I can’t wait to return for a touch-up. The environment at the salon was so relaxing, with soft music playing in the background, and the team was incredibly accommodating. I especially appreciated how Tina explained each step of the process and gave me tips on maintaining my lashes for a longer-lasting effect. It’s not just about the lashes; it’s about the overall experience, and this place delivers it all.",
    stars: 5,
    platform: "Google",
  },
  {
    id: 2,
    name: "John D",
    date: "20 days ago",
    review: "Exceptional service and quality. The staff was friendly and professional, making sure I was comfortable throughout the entire session. The attention to detail was remarkable, and I’m very satisfied with the results. From the moment I walked in, I felt like a valued customer. They even offered me a complimentary drink while I waited for my appointment. The stylist carefully listened to my preferences and worked meticulously to achieve the look I wanted. It’s rare to find a place that combines such high-quality services with outstanding customer care.",
    stars: 4,
    platform: "Google",
  },
  {
    id: 3,
    name: "Jane S",
    date: "10 days ago",
    review: "Loved the lashes, will definitely come back! The team was super professional and created a custom look that perfectly suited my face. It was my first time trying lash extensions, and I’m so happy I chose them. They used top-notch products, and the process was completely painless. I also loved how they took the time to educate me on aftercare to ensure my lashes stay perfect for weeks. The salon ambiance was cozy and inviting, making the entire experience a delight. Thank you for making me feel so confident!",
    stars: 5,
    platform: "Facebook",
  },
  {
    id: 4,
    name: "Chris P",
    date: "5 days ago",
    review: "Affordable and professional. They explained the entire process in detail and offered great advice on how to care for my lashes. The salon atmosphere was also very welcoming and clean. I appreciated their transparency about pricing and services, which made me feel at ease. The stylist was incredibly attentive and ensured I was satisfied at every step of the process. It’s rare to find a place that combines affordability with such a high level of skill and dedication. I’m definitely recommending this place to everyone I know.",
    stars: 4,
    platform: "Google",
  },
  {
    id: 5,
    name: "Anna K",
    date: "1 month ago",
    review: "Best experience ever! I’ve been to several lash studios, but none compare to the quality and expertise here. My lashes look natural yet glamorous, and they lasted much longer than I expected. The team’s professionalism and friendly attitude made a huge difference. They were attentive to my needs and even gave me a personalized consultation to determine the best style for my face. The salon itself is beautifully designed, adding to the luxurious experience. I’m beyond impressed and can’t wait for my next appointment.",
    stars: 5,
    platform: "Facebook",
  },
  {
    id: 6,
    name: "Mike L",
    date: "3 days ago",
    review: "Highly recommend their services. The stylist was incredibly skilled and patient, ensuring I was happy with the outcome. I’ve already booked my next appointment and shared their details with my friends. What stood out to me the most was the attention to detail and the genuine care the team showed throughout the session. They didn’t just focus on completing the job quickly; they ensured it was done perfectly. The aftercare tips they provided were also extremely helpful, making it easy for me to maintain my new look. This is hands down the best lash studio I’ve visited!",
    stars: 5,
    platform: "Google",
  },
];



const backgroundImages = [
  "./bg.jpg",
  "./bg1.jpg",
  "./bg2.jpg",
  "./bg1.jpg",
  "./bg.jpg",
  "./bg1.jpg",
];

const HeroSection = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const currentReview = reviewsData[currentReviewIndex];
  const currentBackground = backgroundImages[currentReviewIndex];

  return (
    <div>
      {/* Navbar */}
      <div className="md:hidden bg-white text-black flex items-center justify-center px-4 py-2 text-sm">
        <div className="text-xl font-semibold">COSTICA</div>
      </div>
      <nav className="hidden md:block absolute w-full mt-6 flex justify-center items-center px-6 py-4 text-white z-10">
        <div className="flex justify-center items-center space-x-6 gap-8">
          <img src="./logo.png" alt="logo" className="logo" />
        </div>
      </nav>

      {/* Hero Section */}
      <section
  id="home"
  className="relative flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-24 h-[100vh] bg-gradient-to-br from-black via-transparent to-transparent bg-fixed bg-cover bg-center text-white"
  style={{
    backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.4), transparent), url(${currentBackground})`,
  }}
>
        {/* Reviews Section */}
        <div
          className="relative z-10 space-y-4 max-w-md mt-8 md:mt-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="bg-transparent rounded-lg p-8 space-y-2 w-full text-black"
          >
            {/* User Info */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl font-semibold text-gray-600">
                {currentReview.name.charAt(0)}
              </div>
              <div className="flex flex-column items-start justify-start">
                <p className="font-medium text-white ">{currentReview.name}</p>
                <p className="text-gray-400 text-sm">{currentReview.date}</p>
              </div>
            </div>
            <hr/>
            {/* Star Rating */}
            <div className="flex space-x-1">
              {Array.from({ length: currentReview.stars }, (_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-white">{currentReview.review}</p>

            {/* Platform */}
            <div className="flex flex-row justify-start items-start space-x-2 mt-4">
              {currentReview.platform === "Google" ? (
                <FcGoogle size={20} />
              ) : (
                <FaFacebook size={20} className="text-blue-600" />
              )}
              <p className="text-sm text-white">
                Posted on {currentReview.platform}
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="relative z-10 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-full md:w-[40%] text-black mt-6 ">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-3 animate-fadeIn">
        LIVE MASCARA FREE
      </h2>
      <p className="text-lg text-center text-gray-600 mb-4 animate-slideIn">
        Get Your First Full Set of Lashes for{" "}
        <span className="font-bold text-red-500">$69.99</span>
      </p>
      <p className="text-center text-gray-500 mb-5">
        Regular price <s>$179.99</s> - limited time only
      </p>
      <form className="space-y-4">
        {/* First Name */}
        <div className="relative group">
          <label className="block text-gray-600 font-medium mb-1">First Name</label>
          <div className="flex items-center bg-white/80 border border-gray-300 rounded-lg shadow-sm p-2 transition-all duration-300 group-hover:border-red-500 focus-within:ring focus-within:ring-red-200">
            <FaUser className="text-gray-500 group-hover:text-red-500 transition-all duration-300 mr-2" />
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>
        {/* Last Name */}
        <div className="relative group">
          <label className="block text-gray-600 font-medium mb-1">Last Name</label>
          <div className="flex items-center bg-white/80 border border-gray-300 rounded-lg shadow-sm p-2 transition-all duration-300 group-hover:border-red-500 focus-within:ring focus-within:ring-red-200">
            <FaUser className="text-gray-500 group-hover:text-red-500 transition-all duration-300 mr-2" />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>
        {/* Phone */}
        <div className="relative group">
          <label className="block text-gray-600 font-medium mb-1">Phone</label>
          <div className="flex items-center bg-white/80 border border-gray-300 rounded-lg shadow-sm p-2 transition-all duration-300 group-hover:border-red-500 focus-within:ring focus-within:ring-red-200">
            <FaPhoneAlt className="text-gray-500 group-hover:text-red-500 transition-all duration-300 mr-2" />
            <input
              type="tel"
              placeholder="081234 56789"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>
        {/* Email */}
        <div className="relative group">
          <label className="block text-gray-600 font-medium mb-1">Email</label>
          <div className="flex items-center bg-white/80 border border-gray-300 rounded-lg shadow-sm p-2 transition-all duration-300 group-hover:border-red-500 focus-within:ring focus-within:ring-red-200">
            <FaEnvelope className="text-gray-500 group-hover:text-red-500 transition-all duration-300 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          Get My Offer
        </button>
        <p className="text-sm text-center text-gray-500 mt-3">
          Offer will be sent via SMS
        </p>
      </form>
    </div>
      </section>
    </div>
  );
};

export default HeroSection;
