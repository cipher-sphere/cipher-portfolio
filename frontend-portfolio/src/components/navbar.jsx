import { useNavigate } from 'react-router-dom';
// import React from 'react';
// import './styles/navbarstyles.css';
import './styles/navbarstyle.css'; // Adjust the path if necessary

export function Navbar() {
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  return (
    <nav>
        <span>Cipher-Sphere</span>
      <ul>
        <li><button onClick={() => navigate('/')}>Home</button></li>
        <li><button onClick={() => navigate('/skills')}>Skills</button></li>
        <li><button onClick={() => navigate('/projects')}>Projects</button></li>
        <li><button onClick={() => navigate('/contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}
