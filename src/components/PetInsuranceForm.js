import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Insurance form submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="pet-insurance-form">
      <h2>Pet Insurance</h2>
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

export default PetInsuranceForm;
