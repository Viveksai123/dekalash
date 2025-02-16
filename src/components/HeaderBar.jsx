import { FaInstagram, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const HeaderBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 
      bg-[#0a192f]/90 backdrop-blur-sm border-b border-[#00ffff]/20
      text-[#00ffff] flex items-center justify-between px-6 py-3 
      text-sm transition-all duration-300 hover:bg-[#0a192f]/95">
      
      {/* Contact Information */}
      <div className="flex space-x-6">
        {/* WhatsApp Group */}
        <a href="https://chat.whatsapp.com/IjsQYq4fnFc3SkiSSIyDR9" 
          target="_blank" rel="noopener noreferrer"
          className="text-[#00ffff] hover:text-white cursor-pointer transform hover:scale-110 
          transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] no-underline">
          <FaWhatsapp size={16} />
        </a>

        {/* Email */}
        <a href="mailto:cybernexa@cbit.ac.in"
          className="text-[#00ffff] hover:text-white cursor-pointer transform hover:scale-110 
          transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] no-underline">
          <FaEnvelope size={16} />
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/cybernexa25" 
          target="_blank" rel="noopener noreferrer"
          className="text-[#00ffff] hover:text-white cursor-pointer transform hover:scale-110 
          transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] no-underline">
          <FaInstagram size={16} />
        </a>
      </div>
      
      {/* Phone Numbers */}
      <div className="flex space-x-4">
      

        <a href="tel:+919177961221" 
          className="flex items-center space-x-2 hover:text-white transition-all 
          duration-300 group cursor-pointer no-underline">
          <FaPhone className="text-[#00ffff] transform rotate-90 group-hover:scale-110 transition-transform duration-300" size={14} />
          <span className="font-light text-[#00ffff] tracking-wider">+91 91779 61221</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderBar;
