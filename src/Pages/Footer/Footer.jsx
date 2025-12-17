import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">KUNYO</h2>
          <p className="footer-desc">
            Digital products, gaming top-ups, gift cards, and subscriptions.
            Fast, secure, and trusted service.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Products</h4>
          <ul>
            <li>Game Top-Up</li>
            <li>Gift Cards</li>
            <li>Subscriptions</li>
            <li>Gaming Accessories</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-links">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>New Baneshwor, Kathmandu</p>
          <p>+977 01 1234567</p>
          <p>support@kunyo.co</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <span>© 2025 Kunyo Digital Store. All rights reserved.</span>
        <span className="footer-terms">Terms & Privacy</span>
      </div>
    </footer>
  );
};

export default Footer;
