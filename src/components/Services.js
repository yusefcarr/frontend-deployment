import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Services from '../Photos/services_hero.png';
import Grooming from '../Photos/services_gecko.png';
import Training from '../Photos/services_turtle.png';
import Vet from '../Photos/services_lizard.png';
import Adoption from '../Photos/services_snake.png';
import Park from '../Photos/services_park.png';
import Insurance from '../Photos/services_insurance.png';
import Delivery from '../Photos/services_delivery.png';
import Credit from '../Photos/services_credit.png';

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={Services} alt="Services" className="hero-image" />
        <h1 className="hero-title">Our Services</h1>
      </section>

      {/* Services Cards Section */}
      <section className="services-cards">
        <div className="service-card">
          <img src={Grooming} alt="Pet Grooming" className="service-image" />
          <Link to="/pet-grooming" className="service-link">
            <p>Pet Grooming</p>
          </Link>
        </div>
        <div className="service-card">
          <img src={Training} alt="Pet Training" className="service-image" />
          <Link to="/pet-training" className="service-link">
          <p>Pet Training</p>
          </Link>
        </div>
        <div className="service-card">
          <img src={Vet} alt="Vet Services" className="service-image" />
          <Link to="/vet-services" className="service-link">
          <p>Vet Services</p>
          </Link>
        </div>
        <div className="service-card">
          <img src={Adoption} alt="Adoption" className="service-image" />
          <Link to="/adoption-form" className="service-link">
          <p>Adoption</p>
          </Link>
        </div>
        <div className="service-card">
          <img src={Park} alt="Self-Serve Reptile Park" className="service-image" />
          <Link to="/pet-park" className="service-link">
          <p>Self-Serve Reptile Park</p>
          </Link>
        </div>
        <div className="service-card">
          <img src={Insurance} alt="Pet Insurance" className="service-image" />
          <Link to="/pet-insurance" className="service-link">
          <p>Pet Insurance</p>
          </Link>
        </div>
        <div className="service-card">
          <img src={Delivery} alt="Delivery" className="service-image" />
          <Link to="/delivery" className="service-link">
          <p>Delivery</p>
          </Link>
        </div>
        <div className="service-card">
          <img src={Credit} alt="Credit Cards" className="service-image" />
          <Link to="/credit-card" className="service-link">
          <p>Credit Card</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

