import React from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] text-white text-center py-8 border-t border-cyan-500 font-['Orbitron']">
      <div className="max-w-4xl mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src="/logo.png" 
            alt="Cyber Nexa Logo" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain filter brightness-100 hover:brightness-125 transition-all duration-300"
          />
        </div>

        {/* Contact Details */}
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2 animate-pulse">
          Contact Us
        </h2>
        
        {/* Phone Numbers (Clickable) */}
        <p className="text-lg">
          <a
            href="tel:9391036993"
            className="flex items-center justify-center gap-2 text-cyan-400 transition duration-300 hover:text-cyan-200 transform hover:scale-105 no-underline"
          >
            <FaPhone size={20} /> Sathwika: <span>9391036993</span>
          </a>
        </p>
        <p className="text-lg mt-2">
          <a
            href="tel:9177961221"
            className="flex items-center justify-center gap-2 text-cyan-400 transition duration-300 hover:text-cyan-200 transform hover:scale-105 no-underline"
          >
            <FaPhone size={20} /> Hema Vardhan: <span>9177961221</span>
          </a>
        </p>

        {/* Social & Email */}
        <div className="flex justify-center gap-6 mt-4 flex-wrap">
          {/* WhatsApp */}
          <a
            href="https://chat.whatsapp.com/IjsQYq4fnFc3SkiSSIyDR9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 transition duration-300 hover:text-cyan-200 transform hover:scale-105 no-underline"
          >
            <FaWhatsapp size={24} /> Join WhatsApp Group
          </a>

          {/* Email */}
          <a
            href="mailto:cybernexa@cbit.ac.in"
            className="flex items-center gap-2 text-cyan-400 transition duration-300 hover:text-cyan-200 transform hover:scale-105 no-underline"
          >
            <FaEnvelope size={24} /> cybernexa@cbit.ac.in
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/cybernexa25"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 transition duration-300 hover:text-cyan-200 transform hover:scale-105 no-underline"
          >
            <FaInstagram size={24} /> cybernexa25
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
