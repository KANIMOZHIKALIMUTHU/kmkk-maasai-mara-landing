import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./index.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "navbar-scrolled" : ""}`}>
      <div className="logo">
      <Link to="hero" smooth={true} duration={500}>
          <img src="https://www.shutterstock.com/image-vector/maasai-mara-national-reserve-kenya-260nw-2094134533.jpg" alt="Maasai Mara" />
      </Link>
      </div>
      <div className="navbar-links">
        <Link to="overview" smooth={true} duration={500} offset={-80}>
          Overview
        </Link>
        <Link to="itinerary" smooth={true} duration={500} offset={-80}>
          Itinerary
        </Link>
        <Link to="pricing" smooth={true} duration={500} offset={-80}>
          Pricing
        </Link>
        <Link to="terms" smooth={true} duration={500} offset={-80}>
          Terms & Conditions
        </Link>
        <Link to="payment" smooth={true} duration={500} offset={-80}>
          Payment
        </Link>
        <Link to="inclusions" smooth={true} duration={500} offset={-80}>
          Inclusions
        </Link>
        <Link to="exclusions" smooth={true} duration={500} offset={-80}>
          Exclusions
        </Link>
        <Link to="cta" smooth={true} duration={500} offset={-80} className="last-item">
          CTA
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
