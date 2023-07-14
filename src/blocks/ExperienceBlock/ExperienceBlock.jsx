import { works } from "../../data/works";
import "./ExperienceBlock.css";

const ExperienceBlock = () => {
  return (
    <div className="ExperienceBlock" id="experience">
      <div className="title">
        <span className="title-1">work experience</span>
        <span className="title-2">Companies I have worked for in the past</span>
      </div>
      <div className="works-list">
        {works.map((item, index) => (
          <div className="WorkItem" key={index}>
            <span className="number">{item.number}</span>
            <div className="workPlace">
              <span style={{ color: item.companyColor }}>{item.company}</span>
              {item.workPlace}
            </div>
            <span className="description">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceBlock;
