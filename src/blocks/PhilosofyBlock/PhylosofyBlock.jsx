import photo from "../../assets/philosofy_img.png";
import DoubleBlock from "../../components/DoubleBlock/DoubleBlock";

const PhilosofyBlock = () => {
  return (
    <div className="philosofy">
      <DoubleBlock
        src={photo}
        title1="Philosophy & values"
        title2="I think everyone wants the same thing - relationship with humanity,
  peace with the metaphysical, and experience with the universe. I try
  to grasp these things with my values: authenticity, creativity, &
  hospitality."
        btnText="More about me"
      />
    </div>
  );
};

export default PhilosofyBlock;
