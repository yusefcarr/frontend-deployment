import React, { useState } from 'react';
import BACKEND_URL from '../config';

const PetGroomingForm = () => {
  const [formData, setFormData] = useState({
    petName: '',
    animal: '',
    breed: '',
    additionalInfo: '',
    price: '50', // You can adjust this price
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${BACKEND_URL}pet-grooming`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Grooming session submitted successfully!');
        setFormData({
          petName: '',
          animal: '',
          breed: '',
          additionalInfo: '',
          price: '50', // Reset to default price
        });
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error submitting the grooming session:', error);
      alert('Failed to submit grooming session');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pet-grooming-form">
      <h2>Pet Grooming</h2>
      <div className="form-group">
        <label>Pet Name:</label>
        <input
          type="text"
          name="petName"
          placeholder="Enter your pet's name"
          value={formData.petName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Animal:</label>
        <input
          type="text"
          name="animal"
          placeholder="Enter animal type"
          value={formData.animal}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Breed:</label>
        <input
          type="text"
          name="breed"
          placeholder="Enter breed"
          value={formData.breed}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Additional Information:</label>
        <textarea
          name="additionalInfo"
          placeholder="Enter any additional information"
          value={formData.additionalInfo}
          onChange={handleChange}
        />
      </div>
      <p>Price: ${formData.price}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PetGroomingForm;


