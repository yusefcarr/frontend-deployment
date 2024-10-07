import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Delivery request submitted!');
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
