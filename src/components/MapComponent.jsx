// import React, { useState, useEffect } from 'react';

// const MapComponent = () => {
//   const [map, setMap] = useState(null);
//   const [position, setPosition] = useState({ lat: 28.6139, lng: 77.2090 }); // Delhi, India

//   useEffect(() => {
//     const initMap = () => {
//       const map = new window.google.maps.Map(document.getElementById('map'), {
//         center: position,
//         zoom: 18,
//       });
//       setMap(map);

//       new window.google.maps.Marker({
//         position: position,
//         map: map,
//       });
//     };

//     const script = document.createElement('script');
//     script.src = 'https://maps.googleapis.com/maps/api/js';
//     script.async = true;
//     script.onload = initMap;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [position]);

//   return (
//     <div className="flex flex-col items-center justify-center p-4">
//       <h2 className="text-2xl font-bold mb-2">Deka Lash Winter Garden</h2>
//       <p className="mb-4">14410 Shoreside Way, Suite 110, Winter Garden, FL 34787</p>
//       <div id="map" className="w-full max-w-4xl h-[60vh] mb-4"></div>
//       <div>
//         <p className="font-medium">Business Hours:</p>
//         <p>
//           Mon-Thu: 10:00 AM - 8:00 PM<br />
//           Fri-Sat: 10:00 AM - 7:00 PM<br />
//           Sun: 11:00 AM - 5:00 PM
//         </p>
//         <p className="font-medium">760-387-5120</p>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;