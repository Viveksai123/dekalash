import React, { useEffect } from "react";
import HeaderBar from "./components/HeaderBar";
import HeroSection from "./components/Hero";
import SubHero from "./components/SubHero";
import UniqueLashesSection from "./components/Lashes";
import LandingSection from "./components/Footer";
import CryptoSection from "./components/crypto";
import SensorSprintSection from "./components/sensor";
import PresentationSection from "./components/three";
import OrganizationSection from "./components/detals";
import MarqueeSection from "./components/Marque";
import Chatbot from "./components/chatbot";
import Section from "./components/contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  useEffect(() => {
    // Disable right-click
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // Disable Function Keys, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, etc.
    const disableShortcuts = (event) => {
      if (
        event.key.startsWith("F") || // Disables all Function keys (F1–F12)
        (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl+Shift+J
        (event.ctrlKey && event.key === "U") || // Ctrl+U (View Source)
        (event.ctrlKey && event.key === "S") || // Ctrl+S (Save Page)
        (event.ctrlKey && event.key === "H") || // Ctrl+H (History)
        (event.ctrlKey && event.key === "A") // Ctrl+A (Select All)
      ) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    // Anti-DevTools trick
    const antiDebug = setInterval(() => {
      debugger;
    }, 100);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableShortcuts);
      clearInterval(antiDebug);
    };
  }, []);

  return (
    <div>
      <HeaderBar />
      <HeroSection />
      <MarqueeSection />
      <UniqueLashesSection />
      <CryptoSection />
      <SensorSprintSection />
      <PresentationSection />
      <SubHero />
      <Chatbot/>
      <OrganizationSection />
      <Section />
      <LandingSection />
    </div>
  );
}

export default App;
