import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles;
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const MapSection = () => {
  const position = [28.5383, -81.3792]; // Example: Latitude and Longitude for Orlando, FL

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen px-4 lg:px-12 py-6">
      {/* Map Section */}
      <div className="lg:w-1/2 w-full h-[50vh] lg:h-full">
  <MapContainer center={position} zoom={13} className="h-full w-full">
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position}>
      <Popup>
        <div className="flex flex-col items-center">
          {/* Location Info */}
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt
              className="inline-block text-red-500 mr-2"
              aria-label="Location Icon"
            />
            <b>Deka Lash Winter Garden</b>
          </div>
          <p className="text-sm text-gray-700">
            14410 Shoreside Way, Winter Garden, FL 34787
          </p>
          {/* Image Section */}
          <img
            src="https://via.placeholder.com/150" // Replace with your online image URL
            alt="Deka Lash Location"
            className="rounded-lg mt-2 shadow-md"
          />
        </div>
      </Popup>
    </Marker>
  </MapContainer>
</div>


      {/* Details Section */}

      <div className="lg:w-1/2 w-full lg:pl-12 flex flex-col justify-center gap-4 mt-3">
  {/* Title */}
  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 flex items-center">
    <FaMapMarkerAlt
      className="inline-block text-red-500 mr-2"
      aria-label="Location Icon"
    />
    Deka Lash Winter Garden
  </h2>

  {/* Address */}
  <address className="not-italic">
    <p className="text-lg text-gray-700 flex items-center">
      📍 14410 Shoreside Way, Suite 110 <br />
      Winter Garden, FL 34787
    </p>
  </address>

  {/* Phone */}
  <p className="text-lg text-gray-700 flex items-center">
    <FaPhoneAlt
      className="inline-block text-green-500 mr-2"
      aria-label="Phone Icon"
    />
    <span className="font-semibold">760-387-5120</span>
  </p>

  {/* Business Hours */}
  <div>
    <h3 className="text-xl font-semibold text-gray-800 flex items-center">
      <FaClock
        className="inline-block text-blue-500 mr-2"
        aria-label="Clock Icon"
      />
      Business Hours
    </h3>
    <ul className="text-gray-700 space-y-1">
      <li>Mon: 10:00 AM - 8:00 PM</li>
      <li>Tue: 10:00 AM - 8:00 PM</li>
      <li>Wed: 10:00 AM - 8:00 PM</li>
      <li>Thu: 10:00 AM - 8:00 PM</li>
      <li>Fri: 10:00 AM - 7:00 PM</li>
      <li>Sat: 10:00 AM - 7:00 PM</li>
      <li>Sun: 11:00 AM - 5:00 PM</li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default MapSection;
