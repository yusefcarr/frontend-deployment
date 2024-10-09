import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';  // Import Link from react-router-dom
import { CartContext } from '../CartContext';

import BACKEND_URL from '../config';

const AnimalComponent = () => {
  const { addToCart } = useContext(CartContext); 
  const { animal } = useParams();  // Gets the animal type from the URL (e.g., gecko)
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);  // State to store related products

  useEffect(() => {
    // Fetch pets and products concurrently using Promise.all
    Promise.all([
      fetch(`${BACKEND_URL}pets/${animal}`).then((response) => response.json()),
      fetch(`${BACKEND_URL}products/${animal}`).then((response) => response.json())
    ])
    .then(([petsData, productsData]) => {
      setPets(petsData);  // Set pets data
      setProducts(Array.isArray(productsData) ? productsData : []);  // Ensure productsData is an array
    })
    .catch((error) => console.error('Error fetching data:', error));
  }, [animal]);  // Re-fetch when the animal type changes

  return (
    <div>
      <h2>{animal.charAt(0).toUpperCase() + animal.slice(1)}s</h2>  {/* Capitalize animal name */}
      
      {/* Display Pets */}
      <div className="container">
        <ul className="d-flex flex-wrap">
          {pets.map((pet) => (
            <div className="pet-cards col-4" key={pet._id}>
              <div className="pet-card-db" style={{ width: '18rem' }}>
                <img src={pet.image} alt={pet.name} className="pet-img img-fluid" />
                <h3>{pet.name}</h3>
                <p>{pet.description}</p>
                
                {/* Link to the Adoption Form with Pet Data */}
                <Link to={`/adoption-form/${pet._id}`} state={{ pet }}>
                  <button className="adopt-pet btn btn-success">Adopt</button>
                </Link>
              </div>
            </div>
          ))}
        </ul>
      </div>

      {/* Display Related Products */}
      <h3>Related Products</h3>
      <ul>
        <div className="d-flex flex-wrap">
          {products.map((product) => (
            <div className="product-cards col-4" key={product._id}>
              <div className="product-card" style={{ width: '18rem' }}>
                <img src={product.imageUrl} alt={product.name} className="product-image img-fluid" />
                <h3>{product.name}</h3>
                <p>Rating: {product.rating}</p>
                <p>{product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
                <button className="add-to-cart" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default AnimalComponent;
