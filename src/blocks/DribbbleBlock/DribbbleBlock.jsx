import "./DribbbleBlock.css";
import dribbblePhoto from "../../assets/dribbble_photo.png";
import Title from "../../components/Title/Title";

const DribbbleBlock = () => {
  return (
    <div className="DribbbleBlock" id="dribbble">
      <Title
        title1="Dribbble"
        title2="Each dribbble shot is made with love and care. Do check out my work on
      Dribbble. Likes and comments are appreciated."
        btnText="Follow me on Dribbble"
      />
      <img
        src={dribbblePhoto}
        alt="dribbble-photo"
        className="dribbble-photo"
      />
    </div>
  );
};

export default DribbbleBlock;
