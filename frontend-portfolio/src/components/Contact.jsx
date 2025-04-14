import { FaTwitter, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles/contactstyle.css"; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deserunt adipisci magnam quae repudiandae delectus dolorum sed est ab labore.</p>
      </div>
      
      <div className="social-buttons">
        <button className="social-button twitter">
          <a href="https://x.com/_ciphersphere_" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
        </button>
        
        <button className="social-button email">
          <a href="mailto:yourname@gmail.com?subject=Hello&body=I wanted to connect with you!">
            <FaEnvelope /> Email Me
          </a>
        </button>
        
        <button className="social-button github">
          <a href="https://github.com/cipher-sphere" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </button>
        
        <button className="social-button linkedin">
          <a href="https://www.linkedin.com/in/shivam-sharma-638617245/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </button>
      </div>
      
      {/* Optional: Add a wave effect at the bottom */}
      <div className="wave-container">
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default Contact;