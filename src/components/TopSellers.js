import React from 'react';
import Terrarium from '../Photos/terrarium.jpg';
import DragonFood from '../Photos/dragonfood.png';
import SnakeBedding from '../Photos/snake_bedding.jpg';
import GeckoHabitat from '../Photos/gecko_habitat.jpg';
import TurtleLamp from '../Photos/heat_lamp.jpg';
import LizardDish from '../Photos/water-dish.png';
import ClimbingBranch from '../Photos/reptilebranch.png';

const products = [
  { name: 'Terrarium Deluxe', brand: 'ReptileWorld', price: '$45.99', image: Terrarium },
  { name: 'Bearded Dragon Food Pack', brand: 'DragonBites', price: '$12.99', image: DragonFood },
  { name: 'Premium Snake Bedding', brand: 'SlytherCo', price: '$22.50', image: SnakeBedding },
  { name: 'Gecko Habitat Kit', brand: 'GeckoHaven', price: '$65.00', image: GeckoHabitat },
  { name: 'Turtle UVB Lamp', brand: 'TurtleLux', price: '$18.75', image: TurtleLamp },
  { name: 'Lizard Water Dish', brand: 'LizardHydro', price: '$9.49', image: LizardDish },
  { name: 'Reptile Climbing Branch', brand: 'ClimbPro', price: '$25.99', image: ClimbingBranch },
];

const TopSellers = () => {
  return (
    <div className="top-sellers-section">
      <h2>Top Sellers</h2>
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

export default TopSellers;