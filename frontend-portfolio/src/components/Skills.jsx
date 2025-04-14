// Skills.jsx
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiTypescript, SiMongodb, SiNextdotjs 
} from "react-icons/si";

function Skills() {
  return (
    <div id="skills">
      <h1>Tech Stack</h1>

      <div><button><FaHtml5 /> <h4>HTML</h4></button></div>
      <div><button><FaCss3Alt /> <h4>CSS</h4></button></div>
      <div><button><FaJsSquare /> <h4>JavaScript</h4></button></div>
      <div><button><SiTailwindcss /> <h4>Tailwind</h4></button></div>
      <div><button><FaReact /> <h4>React</h4></button></div>
      <div><button><FaNodeJs /> <h4>Node.js</h4></button></div>
      <div><button><SiExpress /> <h4>Express.js</h4></button></div>
      <div><button><SiTypescript /> <h4>TypeScript</h4></button></div>
      <div><button><SiMongodb /> <h4>MongoDB</h4></button></div>
      <div><button><SiNextdotjs /> <h4>Next.js</h4></button></div>

    </div>
  );
}

export default Skills;
