import React from 'react';
import TurtleLamp from '../Photos/heat_lamp.jpg';
import GeckoHabitat from '../Photos/gecko_habitat.jpg';
import LizardFood from '../Photos/lizard_food.jpg';
import SnakeBedding from '../Photos/snake_bedding.jpg';
import TurtleFilter from '../Photos/turtle_filter.jpg';
import DragonLight from '../Photos/dragon_light.jpg';
import ClimbingDecor from '../Photos/climbing_decor.jpg';
import SnakeTerrarium from '../Photos/snake_terrarium.jpg';

const products = [
  { name: 'Turtle UVB Lamp', brand: 'ReptileWorld', price: '$45.99', image: TurtleLamp },
  { name: 'Gecko Habitat Deluxe', brand: 'GeckoWorld', price: '$75.50', image: GeckoHabitat },
  { name: 'Lizard Food Pack', brand: 'LizardFeast', price: '$15.25', image: LizardFood },
  { name: 'Snake Bedding Premium', brand: 'SlytherNest', price: '$22.99', image: SnakeBedding },
  { name: 'Turtle Water Filter', brand: 'TurtleClean', price: '$18.99', image: TurtleFilter },
  { name: 'Bearded Dragon Light', brand: 'DragonBright', price: '$35.00', image: DragonLight },
  { name: 'Reptile Climbing Decor', brand: 'ClimbMaster', price: '$27.99', image: ClimbingDecor },
  { name: 'Snake Terrarium Kit', brand: 'SerpentHome', price: '$85.00', image: SnakeTerrarium },
];

const MostPopularItems = () => {
  return (
    <div className="most-popular-section">
      <h2>Most Popular Items</h2>
      <div className="product-cards">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.brand}</h3>
            <p>{product.name}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularItems;
