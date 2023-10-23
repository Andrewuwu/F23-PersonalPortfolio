import ProjectItem from "./ProjectItem.jsx";
import './Projects.css'
import Container from "../helpers/Container.jsx";

const Projects = () => {
  const projectsData = [
    {
      title: "Project One",
      imageUrl: "./src/assets/project.png",
      githubLink: "https://github.com/",
      demoLink: "https://github.com/",
    },
    {
      title: "Project Two",
      imageUrl: "./src/assets/project.png",
      githubLink: "https://github.com/",
      demoLink: "https://github.com/",
    },
    {
      title: "Project Three",
      imageUrl: "./src/assets/project.png",
      githubLink: "https://github.com/",
      demoLink: "https://github.com/",
    },
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <Container>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </Container>
    </section>
  );
};

export default Projects;
