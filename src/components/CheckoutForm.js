import React, { useState } from 'react';

const CheckoutForm = ({ cart, handleOrderSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit', // default payment method
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOrderSubmit(formData); // This will handle the actual checkout process
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Checkout</h2>
      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
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
        <label>Payment Method:</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success">
        Submit Order
      </button>
    </form>
  );
};

export default CheckoutForm;
