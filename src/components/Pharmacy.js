import React from 'react';
import Pharmacy from '../Photos/pharmacy.png';
import Snake from '../Animals/Snake.jpg';
import Gecko from '../Animals/Gecko.jpg';
import Turtle from '../Animals/Turtle.jpg';
import Chameleon from '../Animals/Chameleon.jpg';
import Crocodile from '../Animals/Crocodile.jpg';
import BeardedDragon from '../Animals/BeardedDragon.jpg';
import Lizard from '../Animals/Lizard.jpg';

const PharmacyPage = () => {
  return (
    <div className="pharmacy-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={Pharmacy} alt="Pharmacy" className="hero-image" />
        <h1 className="hero-title">Pharmacy</h1>
      </section>

      {/* Place Order Button */}
      <section className="order-section">
        <button className="order-button">Place Order</button>
      </section>

      {/* Animal Pharmacy Cards */}
      <section className="animal-cards-section">
        <h2 className="section-title">Shop by Animal</h2>
        <div className="animal-cards">
          <div className="animal-card">
            <img src={Snake} alt="Snake" className="animal-image" />
            <p>Shop Snake</p>
          </div>
          <div className="animal-card">
            <img src={Turtle} alt="Turtle" className="animal-image" />
            <p>Shop Turtle</p>
          </div>
          <div className="animal-card">
            <img src={Gecko} alt="Gecko" className="animal-image" />
            <p>Shop Gecko</p>
          </div>
          <div className="animal-card">
            <img src={Chameleon} alt="Chameleon" className="animal-image" />
            <p>Shop Chameleon</p>
          </div>
          <div className="animal-card">
            <img src={Crocodile} alt="Crocodile" className="animal-image" />
            <p>Shop Crocodile</p>
          </div>
          <div className="animal-card">
            <img src={BeardedDragon} alt="Bearded Dragon" className="animal-image" />
            <p>Shop Bearded Dragon</p>
          </div>
          <div className="animal-card">
            <img src={Lizard} alt="Lizard" className="animal-image" />
            <p>Shop Lizard</p>
          </div>
        </div>
      </section>
      {/* Why Get Meds Here Section */}
      <section className="why-meds-section">
        <h2>Why Choose Us for Your Pet's Medications</h2>
        <p>
          At Scales and Tails, we understand that your pet’s health is a top priority. That’s why we offer a trusted, convenient, and reliable pharmacy service tailored specifically to reptiles. We carry a comprehensive range of medications, from routine treatments to specialized care, ensuring your pet has everything they need to stay healthy.
        </p>
        <p>
          Our pharmacy is staffed by experts who are knowledgeable in reptile health and medication. Whether your reptile requires a one-time prescription or ongoing care, we’re here to assist with advice and support. You can trust us to provide high-quality, vet-approved products designed to meet the specific needs of your reptiles.
        </p>
        <p>
          With Scales and Tails, you also benefit from the convenience of having your pet’s medication delivered right to your door. Plus, members can take advantage of exclusive pharmacy deals and delivery discounts. Choose us for safe, reliable, and hassle-free reptile medication management.
        </p>
      </section>
    </div>
  );
};

export default PharmacyPage;
