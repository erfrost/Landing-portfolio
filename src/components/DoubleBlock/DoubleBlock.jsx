/* eslint-disable react/prop-types */
import LightButton from "../LightButton/LightButton";
import "./DoubleBlock.css";

const DoubleBlock = ({ src, title1, title2, btnText }) => {
  return (
    <div className="PhilosofyBlock">
      <div className="philosofy-content">
        <div className="philosofy-title">
          <span className="philosofy-title-1">{title1}</span>
          <span className="philosofy-title-2">{title2}</span>
        </div>
        <LightButton btnText={btnText} />
      </div>
      <img src={src} alt="photo" className="philosofy-img" />
    </div>
  );
};

export default DoubleBlock;
