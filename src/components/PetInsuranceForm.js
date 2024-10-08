import React, { useState } from 'react';
import BACKEND_URL from '../config';

const PetInsuranceForm = () => {
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

    // Basic form validation
    if (!formData.petName || !formData.animal || !formData.breed || !formData.insuranceProvider || !formData.policyNumber ) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}pet-insurance`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Insurance form submitted!');
        setFormData({
          petName: '',
          animal: '',
          breed: '',
          insuranceProvider: '',
          policyNumber: '',
          additionalInfo: '',
        });
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pet-insurance-form">
      <h2>Pet Insurance</h2>
      <div className="form-group">
        <label htmlFor="petName">Pet Name:</label>
        <input
          type="text"
          id="petName"
          name="petName"
          placeholder="Enter your pet's name"
          value={formData.petName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="animal">Animal:</label>
        <input
          type="text"
          id="animal"
          name="animal"
          placeholder="Enter animal type"
          value={formData.animal}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          name="breed"
          placeholder="Enter breed"
          value={formData.breed}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="insuranceProvider">Insurance Provider:</label>
        <input
          type="text"
          id="insuranceProvider"
          name="insuranceProvider"
          placeholder="Enter your insurance provider"
          value={formData.insuranceProvider}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="policyNumber">Policy Number:</label>
        <input
          type="text"
          id="policyNumber"
          name="policyNumber"
          placeholder="Enter your insurance policy number"
          value={formData.policyNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="additionalInfo">Additional Information:</label>
        <textarea
          id="additionalInfo"
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

export default PetInsuranceForm;

