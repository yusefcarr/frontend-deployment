import React, { useState, useEffect } from 'react';

const NotificationBar = () => {
  // Deals to display
  const deals = [
    'Get 20% off on all snake supplies! 🐍',
    'Free shipping on orders over $50! 🚚',
    'Buy 1 Get 1 50% off on all gecko habitats! 🦎',
    'Save $10 on UVB lamps for turtles! 🐢',
    'Exclusive offer: Members get free delivery! 💸',
  ];

  // State to manage the current deal
  const [currentDeal, setCurrentDeal] = useState(0);

  // Change the deal every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDeal((prevDeal) => (prevDeal + 1) % deals.length);
    }, 5000); // Change deal every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [deals.length]);

  return (
    <div className="notification-bar">
      <p>{deals[currentDeal]}</p>
    </div>
  );
};

export default NotificationBar;
