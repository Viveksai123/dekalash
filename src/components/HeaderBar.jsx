import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaPhone } from "react-icons/fa";

const HeaderBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 
      bg-[#0a192f]/90 backdrop-blur-sm border-b border-[#00ffff]/20
      text-[#00ffff] flex items-center justify-between px-6 py-3 
      text-sm transition-all duration-300 hover:bg-[#0a192f]/95">
      
      {/* Social Icons Container */}
      <div className="flex space-x-6">
        <FaFacebookF className="hover:text-white cursor-pointer transform hover:scale-110 
          transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]" 
          size={16} 
        />
        <FaInstagram className="hover:text-white cursor-pointer transform hover:scale-110 
          transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]" 
          size={16} 
        />
        <FaTwitter className="hover:text-white cursor-pointer transform hover:scale-110 
          transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]" 
          size={16} 
        />
        <FaTiktok className="hover:text-white cursor-pointer transform hover:scale-110 
          transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]" 
          size={16} 
        />
      </div>
      
      {/* Phone Number Container */}
      <div className="flex justify-center items-center space-x-3 
        hover:text-white transition-all duration-300 group cursor-pointer">
        <FaPhone className="text-[#00ffff] transform rotate-90 group-hover:scale-110 
          transition-transform duration-300" 
          size={14} 
        />
        <span className="font-light tracking-wider hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
          +91 81060 35425       </span>
      </div>
    </div>
  );
};

export default HeaderBar;