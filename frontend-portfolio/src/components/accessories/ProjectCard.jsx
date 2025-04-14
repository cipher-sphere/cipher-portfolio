import "./ProjectCard.css"; // Add this CSS import
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon

function ProjectCard({ title, category, link }) {
  return (
    <div className={`project-card ${category}`}>
      <div className="project-card-image">
        {/* Placeholder image - you can replace this with actual project images */}
        <img 
          src={`https://source.unsplash.com/300x180/?${category.toLowerCase()},coding`} 
          alt={title} 
        />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <span className="project-card-category">{category}</span>
        <p className="project-card-description">
          {/* You can add an actual description property to your projects data */}
          A brief description of this {category.toLowerCase()} project and the technologies used.
        </p>
        <div className="project-card-link">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;