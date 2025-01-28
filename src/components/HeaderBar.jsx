import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { useState } from "react";

const HeaderBar = () => {
  // State for country selection
  const [selectedCountry, setSelectedCountry] = useState({
    name: "UNITED STATES",
    currency: "USD $",
    flag: "https://flagcdn.com/us.svg",
  });

  // State to handle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // List of countries
  const countries = [
    { name: "UNITED STATES", currency: "USD $", flag: "https://flagcdn.com/us.svg" },
    { name: "CANADA", currency: "CAD $", flag: "https://flagcdn.com/ca.svg" },
    { name: "UNITED KINGDOM", currency: "GBP £", flag: "https://flagcdn.com/gb.svg" },
    { name: "INDIA", currency: "INR ₹", flag: "https://flagcdn.com/in.svg" },
    { name: "AUSTRALIA", currency: "AUD $", flag: "https://flagcdn.com/au.svg" },
  ];

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="background text-black flex items-center justify-between px-4 py-2 text-sm">
      {/* Social Icons */}
      <div className="flex space-x-4">
        <FaFacebookF className="hover:text-gray-400" />
        <FaInstagram className="hover:text-gray-400" />
        <FaTwitter className="hover:text-gray-400" />
        <FaTiktok className="hover:text-gray-400" />
      </div>

      {/* Shipping and Info */}
      <div className="d-none d-md-block color text-center flex-grow text-gray-300">
      Get Your First Full Set of Lashes for{" "}
      <span className="font-bold text-red-500">$69.99</span>
      </div>

      {/* Country and Currency */}
      <div className="relative">
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img
            src={selectedCountry.flag}
            alt={`${selectedCountry.name} Flag`}
            className="w-5 h-5 mr-1"
          />
          <span>{`${selectedCountry.name}`}</span>
          <span className="text-xs">&#9662;</span>
        </div>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black border border-gray-200 rounded-lg shadow-lg z-50">
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCountryChange(country)}
              >
                <img
                  src={country.flag}
                  alt={`${country.name} Flag`}
                  className="w-5 h-5 mr-2"
                />
                <span>{`${country.name}`}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
