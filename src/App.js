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
import Section from "./components/contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  useEffect(() => {
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
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
      <OrganizationSection />
      <Section />
      <LandingSection />
    </div>
  );
}

export default App;
