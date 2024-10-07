import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Home Logo.png';
import { CartContext } from '../CartContext';

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle outside click
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false); // Close sidebar when clicked outside
    }
  };

  // Add click event listener on component mount and clean up
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { cart } = useContext(CartContext);

  return (
    <div className="navbar-container">
      {/* Hamburger icon and logo */}
      <div className="left-section">
        <div className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <img src={Logo} alt="Logo" className="navbar-logo" />
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
      ></div>

      {/* Account and Cart section */}
<div className="right-section">
  <button className="account-button">Account</button>
  {/* <Link to='./components/CartPage'>
    <div className="cart-icon">🛒</div>
  </Link> */}
  <Link to="/cart">
  🛒 ({cart.reduce((acc, item) => acc + item.quantity, 0)})
      </Link> 
</div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <Link to='./'>Home</Link>
          <Link to='./deals'>Deals</Link>
          <Link to='./about'>About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/services">Services</Link>
          <Link to="/rewards">Rewards</Link>
          <Link to="/pharmacy">Pharmacy</Link>
          <Link to="/newsletter">Newsletter</Link>
          <Link to="/community">Community</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;