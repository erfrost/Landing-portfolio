import "./App.css";
import BioBlock from "./blocks/BioBlock/BioBlock";
import DribbbleBlock from "./blocks/DribbbleBlock/DribbbleBlock";
import ExperienceBlock from "./blocks/ExperienceBlock/ExperienceBlock";
import FooterBlock from "./blocks/FooterBlock/FooterBlock";
import FormsBlock from "./blocks/FormsBlock/FormsBlock";
import InstagramBlock from "./blocks/InstagramBlock/InstagramBlock";
import PeopleSayBlock from "./blocks/PeopleSayBlock/PeopleSayBlock";
import PhilosofyBlock from "./blocks/PhilosofyBlock/PhylosofyBlock";
import PhotographyBlock from "./blocks/PhotographyBlock/PhotographyBlock";
import ProjectsBlock from "./blocks/ProjectsBlock/ProjectsBlock";
import SitesBlock from "./blocks/SitesBlock/SitesBlock";
import SkillsetBlock from "./blocks/SkillsetBlock/SkillsetBlock";

function App() {
  return (
    <div className="container">
      <BioBlock />
      <ExperienceBlock />
      <PhilosofyBlock />
      <SkillsetBlock />
      <SitesBlock />
      <ProjectsBlock />
      <InstagramBlock />
      <DribbbleBlock />
      <PeopleSayBlock />
      <PhotographyBlock />
      <FormsBlock />
      <FooterBlock />
    </div>
  );
}

export default App;
