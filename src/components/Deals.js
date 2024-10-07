import React from 'react';


const DealsPage = () => {
  return (
    <div className="deals-page">
      <h1>Deals</h1>
      
      {/* Deals by Location */}
      <section className="deals-section">
      <div className='deals'></div>
      
        <h2>Deals by Location</h2>
        <p>Check out exclusive deals available at our locations across Ohio, including special discounts on reptile products and accessories.</p>
        <div className='deals-loc'>
        <div className="deal-card">
        <h3>Columbus, OH</h3>
        <p>Save 20% on terrariums and reptile food.</p>
        </div>
        <div className="deal-card">
        <h3>Cleveland, OH</h3>
        <p>Buy 1 Get 1 Free on snake accessories.</p>
        </div>
        <div className="deal-card">
        <h3>Cincinnati, OH</h3>
        <p>Buy 1 Get 1 Free on snake accessories.</p>
        </div>
        <div className="deal-card">
        <h3>Toledo, OH</h3>
        <p>Buy 1 Get 1 Free on snake accessories.</p></div>
        </div>
      </section>

      {/* Delivery Deals */}
      <section className="deals-section">
        <h2>Delivery Deals</h2>
        <p>Get great deals on delivery for pet products, medication, and food. Available for members only.</p>
        <div className='deals-loc'>
        <div className="deal-card">
        <h3>Free Delivery on Orders Over $50</h3>
        <p>Get your pet supplies delivered for free when you spend $50 or more!</p>
        </div>
        <div className="deal-card">
        <h3>10% Off First Delivery Order</h3>
        <p>New customers can enjoy 10% off their first delivery order with us.</p>
        </div>
        <div className="deal-card">
        <h3>$5 Off Same-Day Delivery</h3>
        <p>Order today and get $5 off your same-day delivery for all reptile essentials.</p>
        </div>
        <div className="deal-card">
        <h3>Member-Exclusive: Free Delivery on All Orders</h3>
        <p>Members enjoy free delivery on all orders with no minimum spend required!</p>
        </div>
        </div>
      </section>

      {/* Deals by Pet */}
      <section className="deals-section">
        <h2>Deals by Pet</h2>
        <p>Browse deals specific to your pets, including bearded dragons, snakes, turtles, and more!</p>
        <div className='deals-loc'>
        <div className="deal-card">
        <h3>Snakes</h3>
        <p>Buy 1 Get 1 Free on all Snake Bedding. Keep your snake’s habitat fresh and clean with this limited-time offer!
        </p>
        </div>
        <div className="deal-card">
        <h3>Chameleons</h3>
        <p>30% Off Automatic Misting Systems for Chameleons. Ensure your chameleon stays hydrated with discounted misting systems!</p>
        </div>
        <div className="deal-card">
        <h3>Bearded Dragons</h3>
        <p>25% Off Bearded Dragon Food Supplies. Stock up on nutritious food packs designed specifically for your bearded dragon’s health.</p>
        </div>
        <div className="deal-card">
        <h3>Turtles</h3>
        <p>Save 20% on UVB Lamps for Turtles. Ensure your turtle has the perfect lighting for optimal shell and skin health.</p>
        </div>
        <div className="deal-card">
        <h3>Geckos</h3>
        <p>15% Off Gecko Habitat Decor. Upgrade your gecko’s habitat with natural décor at an unbeatable price!</p>
        </div>
        <div className="deal-card">
        <h3>Crocodiles</h3>
        <p>Get $100 Off Crocodile Terrariums. Offer your crocodile a spacious and safe environment with our premium terrariums.</p>
        </div>
        <div className="deal-card">
        <h3>Lizards</h3>
        <p>Buy 2, Get 1 Free on Lizard Supplements. Keep your lizard thriving with our top-rated vitamin and calcium supplements.</p>
        </div>
        </div>
      </section>

      {/* Member Deals */}
      <section className="deals-section">
        <h2>Member Deals</h2>
        <p>Become a member to enjoy exclusive discounts on products, services, and delivery. Join today for more savings!</p>
        <div className='deals-loc'>
        <div className="deal-card">
        <h3>Free Delivery on All Orders</h3>
        <p>Members get free delivery on every order, with no minimum spend required. Enjoy the convenience of doorstep service at no extra cost!</p>
        </div>
        <div className="deal-card">
        <h3>15% Off Reptile Accessories</h3>
        <p>Members receive 15% off all reptile accessories, including hides, water bowls, and habitat décor.</p>
        </div>
        <div className="deal-card">
        <h3>Exclusive Early Access to New Arrivals</h3>
        <p>As a member, you'll be the first to know about and purchase new reptile species and rare arrivals before anyone else!</p>
        </div>
        <div className="deal-card">
        <h3>Buy 1, Get 1 50% Off on Food Supplies</h3>
        <p>Stock up on food for your pets with this special offer: Buy 1 food supply item and get the second one 50% off. Applies to all pet types!</p>
        </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="deals-section">
        <h2>Gift Cards</h2>
        <p>Looking for the perfect gift? Give the gift of choice with our Scales and Tails gift cards!</p>
        <h3>Give the Gift of Choice!</h3>
        <p>Can’t decide what to get? Our Scales and Tails gift cards are the perfect option for reptile lovers. Let them choose from our wide selection of reptile supplies, habitats, and accessories.</p>
        <h3>Available in Various Denominations</h3>
        <p>Gift cards are available in $25, $50, $100, and custom amounts. They’re perfect for any occasion and can be used both in-store and online.</p>
        <h3>Easy and Convenient</h3>
        <p>Purchase your gift card online, and we’ll deliver it directly to the recipient’s inbox or home. Perfect for last-minute gifts!</p>
        <h3>No Expiration Date</h3>
        <p>Our gift cards never expire, giving your friends and family the flexibility to use them whenever they need.</p>
      </section>
    </div>
  );
};

export default DealsPage;
