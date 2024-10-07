import React from 'react';
import Snake from '../Animals/Snake.jpg';
import Gecko from '../Animals/Gecko.jpg';
import Turtle from '../Animals/Turtle.jpg';

const RewardsSection = () => {
  return (
    <div className="rewards-section">
      <h2>Join our rewards program</h2>
      <div className="rewards-content">
        {/* Reptile Images */}
        <div className="reptile-images">
          <img src={Snake} alt="Snake" className="reptile-image" />
          <img src={Gecko} alt="Gecko" className="reptile-image" />
          <img src={Turtle} alt="Turtle" className="reptile-image" />
        </div>

        {/* Bullet Points */}
        <ul className="rewards-benefits">
          <li>Premium Benefits</li>
          <li>Community</li>
          <li>Best Deals</li>
        </ul>
      </div>

      {/* Subscribe Button */}
      <button className="subscribe-button">Subscribe</button>
    </div>
  );
};

export default RewardsSection;
