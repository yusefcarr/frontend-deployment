import React, { useState } from 'react';

const CreditCardForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    email: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Credit card application submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="credit-card-form">
      <h2>Scales and Tails Credit Card Application</h2>
      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
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
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
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

export default CreditCardForm;
