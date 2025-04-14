import { useState } from "react";
import ProjectCard from "./accessories/ProjectCard";
import "./styles/projectsstyle.css"; // Import the CSS file

const allProjects = [
  { id: 1, title: "Rapid WhatsApp", category: "Mini", link: "https://github.com/cipher-sphere/Rapid-Whatsapp" },
  { id: 2, title: "Resume Builder", category: "Fullstack", link: "#" },
  { id: 3, title: "Landing Page - Fitness", category: "Landing", link: "#" },
  // Add more projects as needed
];

function Projects() {
  const [filter, setFilter] = useState("All");
  
  let filteredProjects;
  if (filter === "All") {
    filteredProjects = allProjects;
  } else {
    filteredProjects = allProjects.filter((project) => project.category === filter);
  }
  
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>This section showcases the projects I've worked on.</p>
      </div>
      
      <div className="filter-buttons">
        <button 
          className={filter === "Fullstack" ? "active" : ""} 
          onClick={() => setFilter("Fullstack")}
        >
          Fullstack Projects
        </button>
        <button 
          className={filter === "Mini" ? "active" : ""} 
          onClick={() => setFilter("Mini")}
        >
          Mini Projects
        </button>
        <button 
          className={filter === "Landing" ? "active" : ""} 
          onClick={() => setFilter("Landing")}
        >
          Landing Pages
        </button>
        <button 
          className={filter === "All" ? "active" : ""} 
          onClick={() => setFilter("All")}
        >
          All
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              link={project.link}
            />
          ))
        ) : (
          <div className="no-projects">No projects found in this category</div>
        )}
      </div>
      
      <div className="view-all-container">
        <button>
          <a target="_blank" href="https://github.com/cipher-sphere" rel="noopener noreferrer">
            View all Projects
          </a>
        </button>
      </div>
    </div>
  );
}

export default Projects;