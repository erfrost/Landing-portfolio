import "./PhotographyBlock.css";
import photo1 from "../../assets/photography_1.png";
import photo2 from "../../assets/photography_2.png";
import photo3 from "../../assets/photography_3.png";
import photo4 from "../../assets/photography_4.png";

const PhotographyBlock = () => {
  return (
    <div className="PhotographyBlock" id="photography">
      <div className="photograpy-title">
        <span className="photograpy-title-1">Photography</span>
        <span className="photograpy-title-2">
          Here is a collection of my best travel pictures that I took while
          travelling places all around the world.
        </span>
      </div>
      <div className="photography-list-container">
        <div className="photorgaphy-navbar">
          <div className="country">Italy</div>
          <div className="country">Australia</div>
          <div className="country">India</div>
          <div className="country">Brazil</div>
        </div>
        <div className="photography-list">
          <img src={photo1} alt="photography" className="photography" />
          <img src={photo2} alt="photography" className="photography" />
          <img src={photo3} alt="photography" className="photography" />
          <img src={photo4} alt="photography" className="photography" />
        </div>
      </div>
    </div>
  );
};

export default PhotographyBlock;
