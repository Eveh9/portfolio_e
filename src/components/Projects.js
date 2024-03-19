import nyanCatPng from "../assets/nyan_cat.png";
import "./Projects.style.css";

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
    <section>
      <h2>Projects</h2>
      <ul className="project-list">
        {projectList.map((project) => {
          return (
            <li className="project-card">
              <h3>{project.name}</h3>
              <img src={project.img} className="project-image" />
              {project.github ? <a href={project.github}>github</a> : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Projects;
