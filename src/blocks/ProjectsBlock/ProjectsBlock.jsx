import "./ProjectsBlock.css";
import project1 from "../../assets/project_1.png";
import project2 from "../../assets/project_2.png";
import project3 from "../../assets/project_3.png";
import project4 from "../../assets/project_4.png";

const ProjectsBlock = () => {
  const projectDecription1 = "Restaurant Website Design";
  const projectDecription2 =
    "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.";

  return (
    <div className="ProjectsBlock" id="projects">
      <div className="column">
        <div className="title">
          <span className="title-1">My projects</span>
          <span className="title-2">
            Work that I’ve done for the past 8 years
          </span>
        </div>
        <div className="project-item">
          <img src={project1} alt="project-img" className="project-img" />
          <div className="project-content">
            <span className="project-title-1">{projectDecription1}</span>
            <span className="project-title-2">{projectDecription2}</span>
          </div>
        </div>
        <div className="project-item">
          <img src={project3} alt="project-img" className="project-img" />
          <div className="project-content">
            <span className="project-title-1">{projectDecription1}</span>
            <span className="project-title-2">{projectDecription2}</span>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="project-item">
          <img src={project2} alt="project-img" className="project-img" />
          <div className="project-content">
            <span className="project-title-1">{projectDecription1}</span>
            <span className="project-title-2">{projectDecription2}</span>
          </div>
        </div>
        <div className="project-item">
          <img src={project4} alt="project-img" className="project-img" />
          <div className="project-content">
            <span className="project-title-1">{projectDecription1}</span>
            <span className="project-title-2">{projectDecription2}</span>
          </div>
        </div>
        <div className="project-btn-container">
          <div className="project-btn">View all projects</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBlock;
