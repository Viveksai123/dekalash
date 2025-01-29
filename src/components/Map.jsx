import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import L from 'leaflet';

const MapSection = () => {
  const position = [36.0677, -80.3230];

  // Create custom icon
  const customIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen px-4 lg:px-12 py-6">
      {/* Map Section */}
      <div className="lg:w-1/2 w-full h-[50vh] lg:h-full">
        <MapContainer center={position} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <div className="flex flex-col items-center">
                {/* Location Info */}
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt
                    className="inline-block text-red-500 mr-2"
                    aria-label="Location Icon"
                  />
                  <b>Deka Lash Winston-Salem</b>
                </div>
                <p className="text-sm text-gray-700">
                  1247 Creekshire Way Suite 12, Winston-Salem, NC 27103
                </p>
                {/* Image Section */}
                <img
                  src="/api/placeholder/150/150"
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
          Deka Lash Winston-Salem
        </h2>

        {/* Address */}
        <address className="not-italic">
          <p className="text-lg text-gray-700 flex items-center">
            📍 1247 Creekshire Way, Suite 12 <br />
            Winston-Salem, NC 27103
          </p>
        </address>

        {/* Phone */}
        <p className="text-lg text-gray-700 flex items-center">
          <FaPhoneAlt
            className="inline-block text-green-500 mr-2"
            aria-label="Phone Icon"
          />
         <span className="font-semibold">(336) 422-0626</span>
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

