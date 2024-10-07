import React from 'react';
import Newsletter from '../Photos/newsletter.png'

const NewsletterPage = () => {
  // Example posts data (you can generate more dynamically or fetch from an API)
  const recentPosts = [
    { title: 'Reptile Care Tips for Winter', date: 'November 10, 2021' },
    { title: 'Top 10 Products for Bearded Dragons', date: 'October 25, 2023' },
    { title: 'How to Build the Perfect Terrarium', date: 'September 15, 2023' },
  ];

  const latestPosts = [
    { title: 'Exclusive Offers for Members', date: 'December 1, 2024' },
    { title: 'Upcoming Reptile Events', date: 'November 25, 2024' },
    { title: 'How to Choose the Right Food for Your Gecko', date: 'November 20, 2024' },
  ];

  return (
    <div className="newsletter-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={Newsletter} alt="Newsletter" className="hero-image" />
        <h1 className="hero-title">Newsletter</h1>
        <button className="join-button">Join our mailing list</button>
      </section>

      {/* Two-Sided Section: Recent Posts and Latest Posts */}
      <section className="posts-section">
        {/* Recent Posts */}
        <div className="recent-posts">
          <h2>Recent Posts</h2>
          <ul>
            {recentPosts.map((post, index) => (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Posts */}
        <div className="latest-posts">
          <h2>Latest Posts</h2>
          <ul>
            {latestPosts.map((post, index) => (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;
