import React from 'react';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Customer Care Section */}
        <div className="footer-section">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#shipping">Shipping Information</a></li>
            <li><a href="#locator">Store Locator</a></li>
            <li><a href="#help">Help</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#accessibility">Website Accessibility Policy</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#grooming">Grooming</a></li>
            <li><a href="#adoption">Pet Adoption</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#breed-info">Pet Breed Information</a></li>
            <li><a href="#insurance">Pet Insurance</a></li>
            <li><a href="#pharmacy">Pharmacy</a></li>
            <li><a href="#credit-card">Scales and Tails Credit Card</a></li>
          </ul>
        </div>

        {/* Corporate Section */}
        <div className="footer-section">
          <h4>Corporate</h4>
          <ul>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#ethics">Code of Ethics</a></li>
            <li><a href="#sponsorship">Event Sponsorship</a></li>
            <li><a href="#gift-cards">Gift Cards</a></li>
            <li><a href="#investors">Investors</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
            <li><a href="#affiliate">Affiliate Program</a></li>
            <li><a href="#advertise">Advertise With Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>© 2024 Scales and Tails. All rights reserved. ™</p>
          <p>
            <a href="#privacy">Privacy Policy</a> | 
            <a href="#terms">Terms of Use</a> | 
            <a href="#sitemap">Site Map</a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="#facebook" className="social-icon">Facebook</a>
          <a href="#twitter" className="social-icon">Twitter</a>
          <a href="#instagram" className="social-icon">Instagram</a>
          <a href="#youtube" className="social-icon">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
