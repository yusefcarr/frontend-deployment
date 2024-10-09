import React, { useState } from 'react';

const RewardsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    zipCode: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/rewards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('You have successfully subscribed to the rewards program!');
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          address: '',
          city: '',
          zipCode: '',
          additionalInfo: '',
        });
      } else {
        const data = await response.json();
        alert(`Failed to subscribe: ${data.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };  

  return (
    <form onSubmit={handleSubmit} className="rewards-form">
      <h2>Join Our Rewards Program</h2>

      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
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
          required
        />
      </div>

      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
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
          required
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
          required
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
          required
        />
      </div>

      <div className="form-group">
        <label>Additional Information:</label>
        <textarea
          name="additionalInfo"
          placeholder="Any other info"
          value={formData.additionalInfo}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default RewardsForm;
