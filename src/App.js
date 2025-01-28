import React from "react";
import HeaderBar from "./components/HeaderBar";
import HeroSection from "./components/Hero";
import SubHero from "./components/SubHero";
import UniqueLashesSection from "./components/Lashes";
import LandingSection from "./components/Footer";
import MapAndDetails from "./components/Map";
// import MapComponent from "./components/MapComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <HeaderBar />
      <HeroSection />
      <UniqueLashesSection />
      <SubHero/>
      <MapAndDetails/>
      <LandingSection/>
      
    </div>
  );
}

export default App;
