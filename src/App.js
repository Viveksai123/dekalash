import React from "react";
import HeaderBar from "./components/HeaderBar";
import HeroSection from "./components/Hero";
import SubHero from "./components/SubHero";
import UniqueLashesSection from "./components/Lashes";
import ReviewsSection from "./components/Review";
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
      <ReviewsSection/>
      {/* <MapComponent /> */}

      {/* Other components */}
    </div>
  );
}

export default App;
