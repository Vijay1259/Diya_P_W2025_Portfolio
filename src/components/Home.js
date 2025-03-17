import React from 'react';
import './Home.css';
import profilePic from '../assets/profile.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <img src={profilePic} alt="Diya Patel" className="profile-pic"/>
                <h1 className="hero-title">Hi, I'm <span className="highlight">Diya Patel</span></h1>
                <p className="hero-subtitle">Full-Stack Developer | AI & Automation Enthusiast</p>
                <a href="/projects" className="cta-button">Explore My Work</a>
            </div>
        </div>
    );
};

export default Home;
