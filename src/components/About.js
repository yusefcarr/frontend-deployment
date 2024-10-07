import React from 'react';
import Reptiles from '../Photos/reptiles_pic.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Scales and Tails</h1>

      {/* About Paragraphs */}
      <div className="about-content">
        <p>
          At Scales and Tails, we are passionate about all things reptilian. Since our founding, we have dedicated ourselves to providing the highest quality care, products, and knowledge for reptile enthusiasts. Whether you're a first-time reptile owner or a seasoned expert, Scales and Tails is here to support your reptile care journey. We believe in offering only the best products, from terrariums and heating lamps to food and habitat enrichment, all tailored to your pet's needs.
        </p>
        <p>
          Our mission is to ensure that every reptile gets the care they deserve. We work closely with breeders and suppliers to offer a wide range of reptiles, including geckos, snakes, bearded dragons, turtles, and even crocodiles. Our team of experts is always available to provide personalized advice and support, ensuring your reptile lives a happy and healthy life.
        </p>
        <p>
          In addition to our product offerings, we host reptile care workshops and events, helping educate our community on the latest trends and best practices in reptile care. Scales and Tails is not just a store—it's a community of passionate reptile lovers, and we're proud to be a trusted resource for all things reptilian. Come visit us today or explore our wide range of products and services online.
        </p>
      </div>

      {/* Images of Reptiles */}
      <div className="reptile-images">
        <img src={Reptiles} alt="Reptiles" className="reptile-image" />
      </div>
    </div>
  );
};

export default AboutPage;