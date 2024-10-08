import React, { useState } from 'react';
import BACKEND_URL from '../config';

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    adopterName: '',
    contactInfo: '',
    animalType: '',
    breed: '',
    additionalInfo: '',
    price: '500', // Flat adoption fee
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACKEND_URL}adoption`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Adoption form submitted successfully!');
        // Optionally reset the form after submission
        setFormData({
          adopterName: '',
          contactInfo: '',
          animalType: '',
          breed: '',
          additionalInfo: '',
          price: '500', // Reset to default price
        });
      } else {
        alert('Failed to submit the adoption form.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the adoption form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="adoption-form">
      <h2>Adoption Form</h2>
      <div className="form-group">
        <label>Your Name:</label>
        <input
          type="text"
          name="adopterName"
          placeholder="Enter your name"
          value={formData.adopterName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Contact Information:</label>
        <input
          type="text"
          name="contactInfo"
          placeholder="Enter your contact information"
          value={formData.contactInfo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Animal Type:</label>
        <input
          type="text"
          name="animalType"
          placeholder="Enter the animal type"
          value={formData.animalType}
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
      <p>Adoption Fee: ${formData.price}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdoptionForm;

