import React, { useState } from 'react';

const MailingListForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferences: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/mailing-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Successfully signed up for the mailing list!');
        setFormData({ name: '', email: '', preferences: '' });
      } else {
        alert('Failed to sign up for the mailing list. Please try again.');
      }
    } catch (error) {
      alert('Error occurred during submission. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mailing-list-form">
      <h2>Join Our Mailing List</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
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
        <label>Preferences (optional):</label>
        <textarea
          name="preferences"
          placeholder="Let us know your preferences (optional)"
          value={formData.preferences}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-button" style={{ backgroundColor: 'green', color: 'white' }}>
        Submit
      </button>
    </form>
  );
};

export default MailingListForm;
