import './styles/Homestyle.css'
import selfimage from './self.jpg'
function Home() {
    return (
        <div id="home-container">
            <div className="name-heading">Hi, I am Shivam</div>
            <div className="content-section">
                <p>Hello, I'm a passionate developer dedicated to crafting exceptional digital experiences. With expertise in React.js and full-stack development, I transform ideas into robust applications that resonate with users. Explore my projects, from innovative web apps to responsive designs, and discover how I blend creativity with technical prowess. Let's build something incredible together!</p>
                <img src={selfimage} alt="self image" />
            </div>
            <div className="role-designation">Full Stack Developer</div>
            <div className="button-container">
                <button>Download CV</button>
                <button>Hire me</button>
            </div>
        </div>
    );
}

export default Home;