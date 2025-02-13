import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaChalkboardTeacher } from "react-icons/fa";

const OrganizationSection = () => {
  const eventsWithCoordinators = [
    { event: "Capture the Flag", coordinators: ["Vivek", "Abhiram"] },
    { event: "Crypto Masters", coordinators: ["Praneeth", "Yuval"] },
    { event: "Sensor Sprints", coordinators: ["Varshitha", "Anirudh"] },
    { event: "Project Expo", coordinators: ["Nikhil", "Sathvik"] },
    { event: "Paper Presentation", coordinators: ["Aryan", "Brindha"] },
    { event: "Poster Presentation", coordinators: ["Samhruta", "Sri Dhana"] },
  ];

  const facultyCoordinators = [
    "S.Kranthi Jaya Rao",
    "P.Vimala Ruth",
    "N.Sujatha Gupta",
    "Kavitha Agarwal",
    "Manish Kumar",
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-['Orbitron'] bg-gradient-to-r from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text mb-12"
        >
          Event Organization
        </motion.h2>

        {/* Faculty Coordinators */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl text-[#00ffff] flex items-center justify-center gap-2">
            <FaChalkboardTeacher /> Faculty Coordinators
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {facultyCoordinators.map((coordinator, index) => (
              <div
                key={index}
                className="bg-[#112240] p-4 rounded-xl border border-[#00ffff]/20 backdrop-blur-md shadow-lg shadow-[#00ffff]/10 hover:shadow-[#00ffff]/40 transition-all duration-300"
              >
                <span className="text-gray-300">{coordinator}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Student Coordinators by Event */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl text-[#00ffff] flex items-center justify-center gap-2">
            <FaUsers /> Student Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {eventsWithCoordinators.map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#112240] p-6 rounded-xl border border-[#00ffff]/20 backdrop-blur-md shadow-lg shadow-[#00ffff]/10 hover:shadow-[#00ffff]/40 transition-all duration-300"
              >
                <h4 className="text-xl text-[#00ffff] mb-3">{event.event}</h4>
                <div className="space-y-2">
                  {event.coordinators.map((coordinator, idx) => (
                    <div key={idx} className="text-gray-300 text-sm">
                      {coordinator}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrganizationSection;
