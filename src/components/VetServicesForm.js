import React, { useState } from 'react';
import BACKEND_URL from '../config';

const VetServicesForm = () => {
  const [formData, setFormData] = useState({
    petName: '',
    animal: '',
    breed: '',
    insuranceProvider: '',
    policyNumber: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending a POST request to the backend using fetch
      const response = await fetch(`${BACKEND_URL}vet-services`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Vet service appointment submitted!');
        // Optionally, reset the form after successful submission
        setFormData({
          petName: '',
          animal: '',
          breed: '',
          insuranceProvider: '',
          policyNumber: '',
          additionalInfo: '',
        });
      } else {
        alert('Failed to submit the vet service appointment.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the vet service appointment.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="vet-services-form">
      <h2>Vet Services</h2>
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
        <label>Insurance Provider:</label>
        <input
          type="text"
          name="insuranceProvider"
          placeholder="Enter your insurance provider"
          value={formData.insuranceProvider}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Policy Number:</label>
        <input
          type="text"
          name="policyNumber"
          placeholder="Enter your insurance policy number"
          value={formData.policyNumber}
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default VetServicesForm;


