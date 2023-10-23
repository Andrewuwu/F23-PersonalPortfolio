import { Button } from '@mui/material';
import './Projects.css'

const ProjectItem = ({ title, imageUrl, githubLink, demoLink }) => {
  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img src={imageUrl} className="project-img" />
      </div>
      <h2 className="experience-sub-title project-title">{title}</h2>
      <div className="btn-container">
        <Button
          href={githubLink}
          color="inherit"
          variant='outlined'
        >
          Github
        </Button>
        <Button
          href={demoLink}
          color="inherit" 
          variant='outlined'
        >
          Live Demo
        </Button>
      </div>
    </div>
  );
};

export default ProjectItem;
