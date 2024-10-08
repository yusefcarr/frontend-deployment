import React, { useState } from 'react';
import BACKEND_URL from '../config';

const PetTrainingForm = () => {
  const [formData, setFormData] = useState({
    petName: '',
    animal: '',
    breed: '',
    trainingTier: 'Low', // Default training tier
    additionalInfo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${BACKEND_URL}pet-training`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Training session submitted successfully!');
        setFormData({
          petName: '',
          animal: '',
          breed: '',
          trainingTier: 'Low',
          additionalInfo: '',
        });
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error submitting the training session:', error);
      alert('Failed to submit training session');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pet-training-form">
      <h2>Pet Training</h2>
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
        <label>Training Tier:</label>
        <select name="trainingTier" value={formData.trainingTier} onChange={handleChange}>
          <option value="Low">Low Range - $100</option>
          <option value="Mid">Mid Range - $200</option>
          <option value="High">High Range - $300</option>
        </select>
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
      <p>Price: Based on the selected tier</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PetTrainingForm;

