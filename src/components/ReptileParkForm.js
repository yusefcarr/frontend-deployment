import React, { useState } from 'react';

const ReptileParkForm = () => {
  const [formData, setFormData] = useState({
    petName: '',
    animal: '',
    breed: '',
    timeSlot: '',
    additionalInfo: '',
    price: '20', // You can adjust this price for an hour slot
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reptile Park session submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="reptile-park-form">
      <h2>Reptile Pet Park</h2>
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
        <label>Time Slot:</label>
        <input
          type="text"
          name="timeSlot"
          placeholder="Enter preferred time slot (e.g., 2:00 PM)"
          value={formData.timeSlot}
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
      <p>Price: ${formData.price} per hour</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReptileParkForm;
