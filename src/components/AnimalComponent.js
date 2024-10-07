import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';
const AnimalComponent = () => {
  const { addToCart } = useContext(CartContext); 
  const { animal } = useParams();  // Gets the animal type from the URL (e.g., gecko)
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);  // State to store related products
  useEffect(() => {
    // Fetch pets and products concurrently using Promise.all
    Promise.all([
      fetch(`http://localhost:5000/pets/${animal}`).then((response) => response.json()),
      fetch(`http://localhost:5000/products/${animal}`).then((response) => response.json())
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

      <ul className='d-flex flex-wrap'>
        {pets.map((pet) => (
            <div className="pet-cards col-4" key={pet._id} >
  <div key={pet._id} className="pet-card-db" style={{width: '18rem'}}>
    <img src={pet.image} alt={pet.name} className="pet-img img-fluid" />
    <h3>{pet.name}</h3>
    <p>{pet.description}</p>
    <button className="adopt-pet btn btn-success">Adopt</button>
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
            <div className="product-cards col-4">
            
  <div key={product._id} className="product-card" style={{width: '18rem'}}>
    <img src={product.imageUrl} alt={product.name} className="product-image img-fluid" />
    <h3>{product.name}</h3>
    <p>Rating: {product.rating}</p>
    <p>{product.description}</p>
    <p className="product-price">Price: ${product.price}</p>
    <button  className='add-to-cart' onClick={() => addToCart(product)}>Add to Cart</button> {/* Add to Cart Button */}
  </div>
</div>
        ))}
        </div>
      </ul>
    </div>
  );
};
export default AnimalComponent;