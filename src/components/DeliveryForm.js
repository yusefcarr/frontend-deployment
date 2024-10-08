import React, { useState } from 'react';
import BACKEND_URL from '../config';

const DeliveryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    animal: '',
    deliveryTime: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACKEND_URL}delivery`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Delivery request submitted!');
        setFormData({
          name: '',
          address: '',
          city: '',
          zipCode: '',
          animal: '',
          deliveryTime: '',
          additionalInfo: '',
        });
      } else {
        const data = await response.json();
        alert(`Failed to submit: ${data.message}`);
      }
    } catch (err) {
      alert('Error submitting delivery request');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="delivery-form">
      <h2>Pet Product Delivery</h2>
      <div className="form-group">
        <label>Your Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>City:</label>
        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>ZIP Code:</label>
        <input
          type="text"
          name="zipCode"
          placeholder="Enter your ZIP code"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Animal Type:</label>
        <input
          type="text"
          name="animal"
          placeholder="Enter the type of animal"
          value={formData.animal}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Preferred Delivery Time:</label>
        <input
          type="text"
          name="deliveryTime"
          placeholder="Enter your preferred delivery time"
          value={formData.deliveryTime}
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

export default DeliveryForm;

