import React, { useState } from 'react';
import ChatRoom from './ChatRoom'; // Import the ChatRoom component
import Snake from '../Animals/Snake.jpg';
import Community from '../Photos/community.png'


const CommunityPage = () => {
  const [blogPosts, setBlogPosts] = useState([
    { title: 'Blog Post 1', date: '2023-10-01' },
    { title: 'Blog Post 2', date: '2023-10-02' },
    // Add more blog posts as needed
  ]);

  const addBlogPost = () => {
    const newPost = { title: `Blog Post ${blogPosts.length + 1}`, date: new Date().toISOString().split('T')[0] };
    setBlogPosts([...blogPosts, newPost]);
  };

  return (
    <div className="community-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Community</h1>
        <img src={Community} alt="Community" className="hero-image" />
        <button className="join-button">Join</button>
      </section>

      {/* Blog, Vote, and Tier List */}
      <section className="upper-section">
        {/* Blog Section */}
        <div className="blog-section">
          <h2>Blog</h2>
          <ul>
            {blogPosts.map((post, index) => (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
              </li>
            ))}
          </ul>
          <button className="add-post-button" onClick={addBlogPost}>Add Post</button>
        </div>

        {/* Vote Section */}
        <div className="vote-section">
          <h2>Vote for the Best Pet</h2>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="star">★</span>
            ))}
          </div>
          <img src={Snake} alt="Pet" className="vote-pet-image" />
        </div>

        {/* Tier List Section */}
        <div className="tier-list-section">
          <h2>Tier List</h2>
          <form>
            <input type="text" placeholder="Enter animal name" />
            <select>
              <option value="S">S Rank</option>
              <option value="A">A Rank</option>
              <option value="B">B Rank</option>
              <option value="C">C Rank</option>
              <option value="D">D Rank</option>
              <option value="E">E Rank</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Chat, Outreach, Tips & Tricks */}
      <section className="lower-section">
        {/* Chat Room */}
        <div className="chat-room-section">
          <ChatRoom /> {/* Use the ChatRoom component here */}
        </div>

        {/* Outreach Section */}
        <div className="outreach-section">
          <h2>Outreach</h2>
          <p>Upcoming Outreach Missions:</p>
          <ul>
            <li>December 10, 2023 - Reptile Rescue</li>
            <li>January 15, 2024 - Habitat Clean-Up</li>
          </ul>
          <p>Past Missions:</p>
          <ul>
            <li>November 1, 2023 - Turtle Care Workshop</li>
            <li>October 12, 2023 - Crocodile Preservation</li>
          </ul>
        </div>

        {/* Tips & Tricks Section */}
        <div className="tips-tricks-section">
          <h2>Tips & Tricks</h2>
          <ul>
            <li>"Keep your gecko hydrated with a misting system!" - Member A</li>
            <li>"Use UVB lamps for turtles for healthy shell growth!" - Member B</li>
          </ul>
          <form>
            <input type="text" placeholder="Share your tip..." />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;