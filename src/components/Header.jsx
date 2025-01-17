import React from 'react';
import profilePhoto from '../assets/profile1.jpg';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <div className="header-left">
        <h1>Allenn George Kannadickal</h1>
        <p>Third-year Computer Science Engineering Student</p>
        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
    </div>
  </header>
);

export default Header;
