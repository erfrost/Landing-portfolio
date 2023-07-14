/* eslint-disable react/prop-types */
import DarkButton from "../DarkButton/DarkButton";
import "./Title.css";

const Title = ({ title1, title2, btnText }) => {
  return (
    <div className="title-container">
      <span className="title1">{title1}</span>
      <span className="title2">{title2}</span>
      <DarkButton btnText={btnText} />
    </div>
  );
};

export default Title;
