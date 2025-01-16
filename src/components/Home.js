import React, { useState } from 'react';
import './Home.css';
import profilePic from '../assets/profile.png';
import { FaUser } from 'react-icons/fa';

function Home() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getInitials = () => {
    return 'SA';
  };

  return (
    <div className="home-content">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Sadoudi Abdessmad</h1>
          <h2 className="portfolio-title">Artificial Intelligence & Data Science Portfolio</h2>
          <p className="portfolio-subtitle">
            Creating innovative AI models to unlock new possibilities and solve real-world challenges.
          </p>
          <a href="#about" className="about-button">
            <FaUser className="about-icon" />
            About Me
          </a>
        </div>
        <div className="profile-image-container">
          {imageError ? (
            <div className="profile-picture">
              {getInitials()}
            </div>
          ) : (
            <img
              src={profilePic}
              alt="Sadoudi Abdessmad"
              className="profile-picture"
              onError={handleImageError}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home; 