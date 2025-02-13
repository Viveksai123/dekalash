import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HeroSection = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initEngine = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
        setInit(true);
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    };
    
    initEngine();
  }, []);

  const options = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "#0a192f",
      },
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 400
        }
      },
      color: {
        value: ["#00ffff", "#0891b2", "#0e7490", "#67e8f9"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.6,
        random: true,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.3,
          sync: false
        }
      },
      size: {
        value: { min: 1, max: 4 },
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce"
        },
        wobble: {
          enable: true,
          distance: 5,
          speed: 2
        },
        path: {
          enable: true,
          options: {
            size: 8,
            draw: false,
            increment: 0.01
          }
        },
        attract: {
          enable: true,
          distance: 100,
          rotate: {
            x: 2000,
            y: 2000
          }
        }
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1
        }
      }
    },
    interactivity: {
      detect_on: "window", // Changed from detectsOn to detect_on
      events: {
        onHover: {
          enable: true,
          mode: ["bubble", "repulse"] // Combined modes for more visible effect
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 200,    // Increased distance
          size: 12,        // Increased size
          duration: 1,     // Increased duration
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          quantity: 4,
          size: 20
        }
      }
    },
    detectRetina: true,
    fpsLimit: 120
  };

  return (
    <div className="relative h-screen bg-[#0a192f]">
      {/* Logo Container */}
      <div className="absolute top-10 right-4 z-20 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
        <img 
          src="/logo.png" 
          alt="Cyber Nexa Logo" 
          className="w-full h-full object-contain filter brightness-100 hover:brightness-125 transition-all duration-300"
        />
      </div>

      {/* Particles Container */}
      {init && (
        <div className="absolute inset-0 cursor-pointer">
          <Particles
            id="tsparticles"
            className="absolute inset-0"
            options={options}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full pointer-events-none">
      <div className="text-center px-4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Orbitron'] mb-6 tracking-wider
    bg-gradient-to-br from-[#00ffff] via-[#0891b2] to-[#0a192f]
    text-transparent bg-clip-text 
    drop-shadow-[0_0_30px_rgba(0,255,255,0.3)]
    hover:drop-shadow-[0_0_40px_rgba(0,255,255,0.4)]
    transition-all duration-300 
    [text-shadow:_2px_2px_15px_rgb(0_255_255_/_30%)]">
    CYBER NEXA
</h1>
        <p className="text-3xl font-dancing-script italic mt-4
          bg-gradient-to-r from-slate-300 to-white
          text-transparent bg-clip-text
          drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          Where innovation meets imagination
        </p>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;

