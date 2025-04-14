function ProjectCard({ title, category, link }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>Category:{category}</p>
            <button><a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
            </button></div>
    );
}

export default ProjectCard;