import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaChalkboardTeacher } from "react-icons/fa";

const OrganizationSection = () => {
  const eventsWithCoordinators = [
    { 
      event: "Capture the Flag", 
      coordinators: ["Srija", "Vivek","Sathvik"],
      icon: <svg className="w-12 h-12 text-[#00ffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
      </svg>
    },
    { 
      event: "Crypto Masters", 
      coordinators: ["Aryan", "Abhiram","Manuchandana", "Vaishnavi","Manichandana"],
      icon: <svg className="w-12 h-12 text-[#00ffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    },
    { 
      event: "Sensor Sprints", 
      coordinators: ["Praneeth Bende", "Brinda", "Krithika","Chaithra"],
      icon: <svg className="w-12 h-12 text-[#00ffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    },
    { 
      event: "Project Expo", 
      coordinators: ["Yuval", "Samhrutha","Sai Praveen"],
      icon: <svg className="w-12 h-12 text-[#00ffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    },
    { 
      event: "Paper Presentation", 
      coordinators: ["Varshitha", "Sridhana","Sowmya"],
      icon: <svg className="w-12 h-12 text-[#00ffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    },
    { 
      event: "Poster Presentation", 
      coordinators: ["Anirudh", "Indu"],
      icon: <svg className="w-12 h-12 text-[#00ffff]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    },
  ];

  const facultyCoordinators = [
    {
      name: "Smt. G. Mamatha",
      designation: "Assistant Professor",
      image: "/mamatha.jpeg"
    },
    {
      name: "Mrs Srilakshmi ch",
      designation: "Assistant Professor",
      image: "/srilaxmi.jpeg"
    },
    {
      name: "Dr Subramaniam M",
      designation: "Assistant Professor",
      image: "/subbu.jpeg"
    },
    {
      name: "Dr. Singamaneni Kranthi Kumar",
      designation: "Associate Professor",
      image: "/kranthi.jpeg"
    },
    {
      name: "Smt. P. Vimala Manohara Ruth",
      designation: "Assistant Professor",
      image: "/ruth.jpeg"
    },
    {
      name: "Smt. N. Sujata Gupta",
      designation: "Assistant Professor",
      image: "/sujatha.jpeg"
    },
    {
      name: "Smt. Kavita Agarwal",
      designation: "Assistant Professor",
      image: "/kavitha.jpeg"
    },
    {
      name: "Dr. G. Jaya Rao",
      designation: "Assistant Professor",
      image: "/jaya.jpeg"
    },
    {
      name: "Mr. Manish Kumar",
      designation: "Assistant Professor",
      image: "/manish.jpeg"
    }
  ];

  const convenor = [
    {
      name: "Akkala Sathwika",
      designation: "Student Convenor",
      image: "/sathwika.jpeg"
    },
    {
      name: "Hema Vardhan",
      designation: "Student Convenor",
      image: "/hema.jpeg"
    }
  ];

  const Hod = [
    {
      name: "Dr. Sangeeta Gupta",
      designation: "Head Of Department CET",
      image: "/sangeeta.png"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold
            bg-gradient-to-r from-[#00ffff] via-[#4dd0e1] to-[#00bcd4] 
            text-transparent bg-clip-text mb-4
            drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
            Event Organization
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-[#0891b2] mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <FaChalkboardTeacher className="text-[#00ffff] text-3xl" />
            <h3 className="text-3xl font-['Orbitron'] text-[#00ffff]">
              Convenor
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {Hod.map((faculty, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.02 }}
      className="relative h-56 group overflow-hidden rounded-xl"
    >
      {/* Default State */}
      <div className="absolute inset-0 z-20 bg-[#1a2942] border border-[#00ffff]/20 
        group-hover:opacity-0 transition-all duration-500">
        <div className="h-full flex flex-col items-center justify-center p-6">
          <h4 className="text-lg font-['Orbitron'] tracking-wider text-[#00ffff] text-center mb-2">
            {faculty.name}
          </h4>
          <p className="text-sm text-gray-300">{faculty.designation}</p>
        </div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${faculty.image})`,
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/80 via-[#0a192f]/60 to-[#0a192f]/90" />

      {/* Hover Content */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 
        flex items-center justify-center transition-all duration-500">
        <h4 className="text-xl font-['Orbitron'] font-bold bg-gradient-to-r 
          from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text
          tracking-wider transform translate-y-4 group-hover:translate-y-0 
          transition-all duration-500">
          {faculty.name}
        </h4>
      </div>
    </motion.div>
  ))}
</div>
        </motion.div>

        {/* Faculty Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <FaChalkboardTeacher className="text-[#00ffff] text-3xl" />
            <h3 className="text-3xl font-['Orbitron'] text-[#00ffff]">
              Faculty Coordinators
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {facultyCoordinators.map((faculty, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.02 }}
      className="relative h-56 group overflow-hidden rounded-xl"
    >
      {/* Default State */}
      <div className="absolute inset-0 z-20 bg-[#1a2942] border border-[#00ffff]/20 
        group-hover:opacity-0 transition-all duration-500">
        <div className="h-full flex flex-col items-center justify-center p-6">
          <h4 className="text-lg font-['Orbitron'] tracking-wider text-[#00ffff] text-center mb-2">
            {faculty.name}
          </h4>
          <p className="text-sm text-gray-300">{faculty.designation}</p>
        </div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${faculty.image})`,
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/80 via-[#0a192f]/60 to-[#0a192f]/90" />

      {/* Hover Content */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 
        flex items-center justify-center transition-all duration-500">
        <h4 className="text-xl font-['Orbitron'] font-bold bg-gradient-to-r 
          from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text
          tracking-wider transform translate-y-4 group-hover:translate-y-0 
          transition-all duration-500">
          {faculty.name}
        </h4>
      </div>
    </motion.div>
  ))}
</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <FaChalkboardTeacher className="text-[#00ffff] text-3xl" />
            <h3 className="text-3xl font-['Orbitron'] text-[#00ffff]">
              Student Convenor
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {convenor.map((faculty, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.02 }}
      className="relative h-56 group overflow-hidden rounded-xl"
    >
      {/* Default State */}
      <div className="absolute inset-0 z-20 bg-[#1a2942] border border-[#00ffff]/20 
        group-hover:opacity-0 transition-all duration-500">
        <div className="h-full flex flex-col items-center justify-center p-6">
          <h4 className="text-lg font-['Orbitron'] tracking-wider text-[#00ffff] text-center mb-2">
            {faculty.name}
          </h4>
          <p className="text-sm text-gray-300">{faculty.designation}</p>
        </div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${faculty.image})`,
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/80 via-[#0a192f]/60 to-[#0a192f]/90" />

      {/* Hover Content */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 
        flex items-center justify-center transition-all duration-500">
        <h4 className="text-xl font-['Orbitron'] font-bold bg-gradient-to-r 
          from-[#00ffff] to-[#0891b2] text-transparent bg-clip-text
          tracking-wider transform translate-y-4 group-hover:translate-y-0 
          transition-all duration-500">
          {faculty.name}
        </h4>
      </div>
    </motion.div>
  ))}
</div>
        </motion.div>

        {/* Student Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <FaUsers className="text-[#00ffff] text-3xl" />
            <h3 className="text-3xl font-['Orbitron'] text-[#00ffff]">
              Event Coordinators
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsWithCoordinators.map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1a2942] p-8 rounded-xl border border-[#00ffff]/20
                  backdrop-blur-md shadow-lg hover:shadow-[#00ffff]/20
                  transition-all duration-300"
              >
                <div className="flex justify-center items-center mb-4">
                  {event.icon}
                </div>
                <h4 className="text-xl font-['Orbitron'] text-[#00ffff] mb-4 text-center">
                  {event.event}
                </h4>
                <div className="space-y-2">
                  {event.coordinators.map((coordinator, idx) => (
                    <div key={idx} 
                      className="text-gray-300 text-base bg-[#112240] p-2 rounded-lg
                        hover:bg-[#1d3557] transition-colors duration-300 text-center">
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