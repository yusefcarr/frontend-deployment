import React from 'react';
import DeliveryLogo from '../Logo/delivery_logo.jpg';

const DeliveryServiceSection = () => {
  return (
    <div className="delivery-service-section">
      {/* Left Side - Delivery Service Logo */}
      <div className="delivery-left">
        <img src={DeliveryLogo} alt="Scales and Tails Delivery Service" className="delivery-logo" />
      </div>

      {/* Right Side - Delivery Service Details */}
      <div className="delivery-right">
        <h2>Scales and Tails Delivery Service</h2>
        <p>
          Our delivery service offers convenient access to pet products, medication, and food, exclusively for members.
          Members also enjoy exclusive delivery deals. Sign up today to take advantage of these services and benefits!
        </p>

        {/* Sign Up Button */}
        <button className="sign-up-button">Sign Up</button>
      </div>
    </div>
  );
};

export default DeliveryServiceSection;