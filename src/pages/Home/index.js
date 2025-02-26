import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Overview from "../../components/Overview";
import Itinerary from "../../components/Itinerary";
import Pricing from "../../components/Pricing";
import Terms from "../../components/Terms";
import Payment from "../../components/Payment";
import Inclusions from "../../components/Inclusions";
import Exclusions from "../../components/Exclusions";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import "./index.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      {/* Section IDs for React Scroll */}
      <div id="overview">
        <Overview />
      </div>
      <div id="itinerary">
        <Itinerary />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="terms">
        <Terms />
      </div>
      <div id="payment">
        <Payment />
      </div>
      <div id="inclusions">
        <Inclusions />
      </div>
      <div id="exclusions">
        <Exclusions />
      </div>
      <div id="cta">
        <CTA />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
