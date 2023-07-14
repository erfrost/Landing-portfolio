import { skills } from "../../data/skills";
import "./SkillsetBlock.css";

const SkillsetBlock = () => {
  return (
    <div className="SkillSetBlock" id="skillset">
      <div className="skillset-title">
        <span className="skillset-title-1">Skillset</span>
        <span className="skillset-title-2">
          With skills in over 4 different fields of design, I am the perfect
          person to hire when it comes to a full fledged project. Whatever your
          needs are, I can pretty much take on any challenge.
        </span>
      </div>
      <div className="skills-grid">
        {skills.map((item, index) => (
          <div className="skill-item" key={index}>
            <img src={item.icon} alt="icon" />
            <span className="skill-title">{item.title}</span>
            <span className="skill-description">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsetBlock;
