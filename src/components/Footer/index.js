import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo and Description */}
        <div className="footer-section about">
          <h2 className="footer-title">Maasai Mara Adventures</h2>
          <p>
            Experience the breathtaking beauty of Maasai Mara with our expertly crafted safari adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><strong className="contact">Phone:</strong> +254 712 345 678</p>
          <p><strong className="contact">Email:</strong> info@maasaimara.com</p>
          <p><strong className="contact">Address:</strong> Nairobi, Kenya</p>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Maasai Mara Adventures. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
