import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Logo from '../Logo/Scales and Tails Reptile Emporium Logo.png'
import Snake from '../Animals/Snake.jpg';
import Gecko from '../Animals/Gecko.jpg';
import Turtle from '../Animals/Turtle.jpg';
import Chameleon from '../Animals/Chameleon.jpg';
import Crocodile from '../Animals/Crocodile.jpg';
import BeardedDragon from '../Animals/BeardedDragon.jpg';
import Lizard from '../Animals/Lizard.jpg';

const ShopPage = () => {
  return (
    <div className="shop-page">
      {/* Section 1: Image and Paragraph */}
      <section className="intro-section">
        <img src={Logo} alt="Logo" className="reptiles-image" />
        <p>
          Welcome to Scales and Tails! We provide a wide range of reptile products tailored to your pet’s specific needs. Whether you're shopping for snakes, bearded dragons, geckos, turtles, or more, we have everything you need—from habitats and food to toys and accessories. Shop with us today for the best reptile care products available online and in-store.
        </p>
      </section>

      {/* Section 2: Shop by Pet */}
      <section className="shop-by-pet">
        <h2>Shop by Pet</h2>
        <div className="pet-cards">
          <div className="pet-card">
            <Link to="/pets/snake">
              <img src={Snake} alt="Snake" className="pet-image" />
            </Link>
            <p>Snake</p>
          </div>
          <div className="pet-card">
            <Link to="/pets/turtle">
              <img src={Turtle} alt="Turtle" className="pet-image" />
            </Link>
            <p>Turtle</p>
          </div>
          <div className="pet-card">
            <Link to="/pets/gecko">
              <img src={Gecko} alt="Gecko" className="pet-image" />
            </Link>
            <p>Gecko</p>
          </div>
          <div className="pet-card">
            <Link to="/pets/chameleon">
              <img src={Chameleon} alt="Chameleon" className="pet-image" />
            </Link>
            <p>Chameleon</p>
          </div>
          <div className="pet-card">
            <Link to="/pets/crocodile">
              <img src={Crocodile} alt="Crocodile" className="pet-image" />
            </Link>
            <p>Crocodile</p>
          </div>
          <div className="pet-card">
            <Link to="/pets/bearded-dragon">
              <img src={BeardedDragon} alt="Bearded Dragon" className="pet-image" />
            </Link>
            <p>Bearded Dragon</p>
          </div>
          <div className="pet-card">
            <Link to="/pets/lizard">
              <img src={Lizard} alt="Lizard" className="pet-image" />
            </Link>
            <p>Lizard</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;

