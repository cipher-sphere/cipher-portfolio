import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Import useState hook
import './styles/navbarstyle.css';

export function Navbar() {
  const navigate = useNavigate();
  const [menuExpanded, setMenuExpanded] = useState(false);
  
  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  const navigateTo = (path) => {
    navigate(path);
    setMenuExpanded(false); // Close menu after navigation
  };

  return (
    <nav>
      <span onClick={() => navigateTo('/')}>Cipher-Sphere</span>
      
      <button className="mobile-menu-button" onClick={toggleMenu}>
        {menuExpanded ? '✕' : '☰'}
      </button>
      
      <ul className={menuExpanded ? 'expanded' : ''}>
        <li><button onClick={() => navigateTo('/')}>Home</button></li>
        <li><button onClick={() => navigateTo('/skills')}>Skills</button></li>
        <li><button onClick={() => navigateTo('/projects')}>Projects</button></li>
        <li><button onClick={() => navigateTo('/contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}