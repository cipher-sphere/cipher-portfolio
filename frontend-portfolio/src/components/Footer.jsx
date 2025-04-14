import './styles/footerstyle.css'; // Import the CSS file

export function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <p className="footer-copyright">&copy; 2025 Shivam's Portfolio. All rights reserved.</p>
                <nav className="footer-nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </footer>
    );
}