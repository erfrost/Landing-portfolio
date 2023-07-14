import Site1 from "../../assets/site1";
import Site2 from "../../assets/site2";
import Site3 from "../../assets/site3";
import Site4 from "../../assets/site4";
import "./SitesBlock.css";

const SitesBlock = () => {
  return (
    <div className="SitesBlock" id="sites">
      <div className="site-item">
        <Site1 />
      </div>
      <div className="site-item">
        <Site2 />
      </div>
      <div className="site-item">
        <Site3 />
      </div>
      <div className="site-item">
        <Site4 />
      </div>
    </div>
  );
};

export default SitesBlock;
