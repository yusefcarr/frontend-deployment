import React from 'react';
import CheckoutForm from './CheckoutForm';

const CheckoutPage = ({ cart }) => {
  const handleOrderSubmit = (formData) => {
    // Logic to handle the order submission
    // Example: send form data and cart data to a backend or payment processor
    console.log('Order submitted:', formData, cart);

    // Process payment (using Stripe, PayPal, etc.)

    // Confirm order with user
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <CheckoutForm cart={cart} handleOrderSubmit={handleOrderSubmit} />
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cart.map((item) => (
            <li key={item._id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total: </strong>${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default CheckoutPage;
