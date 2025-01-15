import React from 'react';
import profilePhoto from '../assets/profile1.jpg';


const Header = () => (
  <header>
    <img 
      src={profilePhoto} 
      alt="Profile" 
      style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px'
      }} 
    />
    <h1>Allenn George Kannadickal</h1>
    <p>Driven Computer Science Engineering Student</p>
    <nav>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
    </nav>
  </header>
);

export default Header;
