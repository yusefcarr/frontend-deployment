import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import RewardsHero from '../Photos/rewards_hero.png';

const RewardsPage = () => {
  return (
    <div className="rewards-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={RewardsHero} alt="Rewards" className="hero-image" />
      </section>

      {/* Subscribe Button Section */}
      <section className="subscribe-section">
        <Link to="/rewards-form">  {/* Link to the rewards form */}
          <button className="subscribe-button">Subscribe</button>
        </Link>
      </section>

      {/* Rewards Program Section */}
      <section className="rewards-program-section">
        <img src={RewardsHero} alt="Rewards Sign" className="rewards-image" />
        <div className="rewards-info">
          <p>
            Join our exclusive rewards program and enjoy a wide range of benefits! As a member, you’ll have access to exclusive pet products, special discounts, and more.
          </p>
          <p>
            Members receive unbeatable deals, free entry to our Self-Serve Reptile Park, and exclusive access to premium pet products before they’re available to non-members.
          </p>
          <p>
            With every purchase, earn points towards future discounts on reptile supplies, food, and habitat accessories. Join today and start saving!
          </p>
        </div>
      </section>
    </div>
  );
};

export default RewardsPage;
