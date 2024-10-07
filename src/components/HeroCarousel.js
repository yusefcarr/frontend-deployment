import React, { useState, useEffect } from 'react';
import Promo1 from '../Photos/promo1.jpg';
import Promo2 from '../Photos/promo2.jpg';
import Promo3 from '../Photos/promo3.jpg';
import Promo4 from '../Photos/promo4.jpg';
import Promo5 from '../Photos/promo5.jpg';
import Promo6 from '../Photos/promo6.jpg';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const deals = [
    { 
      image: Promo1, 
      text: '$10 OFF $50 Plus Free Delivery with Same Day Delivery', 
      cta: 'SHOP NOW', 
      details: 'See Details'
    },
    { 
      image: Promo2, 
      text: '20% OFF on Reptile Habitats - Limited Time Only!', 
      cta: 'Shop Habitats', 
      details: 'See Details'
    },
    { 
      image: Promo3, 
      text: 'Buy One Get One Free on all Bearded Dragon Accessories!', 
      cta: 'Shop Accessories', 
      details: 'See Details'
    },
    { 
      image: Promo4, 
      text: 'Get $25 Off Your First Purchase Over $75!', 
      cta: 'Shop Now', 
      details: 'See Details'
    },
    { 
      image: Promo5, 
      text: 'Free Snake Starter Kit with Every Adoption!', 
      cta: 'Adopt Now', 
      details: 'See Details'
    },
    { 
      image: Promo6, 
      text: '50% OFF All Turtle Food Supplies for Members!', 
      cta: 'Join Now', 
      details: 'See Details'
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex]);

  const pauseCarousel = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="hero-carousel-container">
      <div className="carousel-slide" key={currentIndex}>
        <div className="carousel-content">
          <div className="carousel-text">
            <h1>{deals[currentIndex].text}</h1>
            <button className="cta-button">{deals[currentIndex].cta}</button>
            <a href="#" className="details-link">{deals[currentIndex].details}</a>
          </div>
          <img src={deals[currentIndex].image} alt="Promo" className="carousel-image" />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="pagination">
        {deals.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`} 
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      {/* Pause button */}
      <button className="pause-button" onClick={pauseCarousel}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

export default HeroCarousel;
