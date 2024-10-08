import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext'; // Import the context
import SnakeTerrarium from '../Photos/snake_terrarium.jpg';
import GeckoFood from '../Photos/gecko_food.jpg';
import TurtleCare from '../Photos/turtle_care.jpg';
import LizardLamp from '../Photos/lizard_lamp.jpg';

const deals = [
  { 
    name: 'Snake Terrarium Bundle', 
    brand: 'Reptile Haven', 
    deal: '20% Off', 
    image: SnakeTerrarium, 
    location: '1234 Reptile Way, Columbus, OH'
  },
  { 
    name: 'Gecko Food Starter Pack', 
    brand: 'GeckoGourmet', 
    deal: '15% Off', 
    image: GeckoFood, 
    location: '5678 Lizard Lane, Cleveland, OH'
  },
  { 
    name: 'Turtle Care Kit', 
    brand: 'TurtleMasters', 
    deal: 'Buy 1 Get 1 Free', 
    image: TurtleCare, 
    location: '9101 Snake Blvd, Cincinnati, OH'
  },
  { 
    name: 'Lizard Heat Lamp', 
    brand: 'LizardLux', 
    deal: '30% Off', 
    image: LizardLamp, 
    location: '4321 Turtle St, Toledo, OH'
  },
];

const DealsByLocation = () => {
  const { addToCart } = useContext(CartContext); // Get the addToCart function from context

  return (
    <div className="deals-location-section">
      <h2>Deals by Location</h2>
      <div className="deal-cards">
        {deals.map((deal, index) => (
          <div key={index} className="deal-card" style={{width: '15rem'}}>
            <img src={deal.image} alt={deal.name} className="deal-image img-fluid" />
            <h3>{deal.brand}</h3>
            <p>{deal.name}</p>
            <p className="deal-discount">{deal.deal}</p>
            <p className="deal-location">{deal.location}</p>
            <Link to="/shop"> {/* Link to the shop page */}
              <button className="add-to-cart">Add to Cart</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsByLocation;

