import nyanCatPng from "../assets/nyan_cat.png";
import "./Projects.css";
import { PiGithubLogoThin } from "react-icons/pi";

const projectList = [
  {
    name: "nyanCat",
    img: nyanCatPng,
    github: "https://github.com/Eveh9/project-js-nyan-cat",
  },
  {
    name: "coming soon",
    img: "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projectsSection" className="project-section">
      <h2>Projects</h2>
      <ul className="project-list">
        {projectList.map((project) => {
          return (
            <li className="project-card">
              <h3>{project.name}</h3>
              <img src={project.img} className="project-image" />
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  className="project-card-github"
                >
                  <PiGithubLogoThin size={30} />
                </a>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Projects;
