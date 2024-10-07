import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="pet-cards col-4" key={item._id}>
              <div className="pet-card-db" style={{ width: '18rem' }}>
                <img src={item.imageUrl} alt={item.name} className="pet-img img-fluid" />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <label>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                    className="form-control"
                    style={{ width: '60px', display: 'inline-block', marginLeft: '10px' }}
                  />
                </label>
                <button onClick={() => removeFromCart(item._id)} className="btn btn-danger" style={{ marginTop: '10px' }}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
          <Link to="/checkout">
          <button>Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;