import DoubleBlock from "../../components/DoubleBlock/DoubleBlock";
import instagram from "../../assets/instagram.png";

const InstagramBlock = () => {
  return (
    <div id="instagram">
      <DoubleBlock
        src={instagram}
        title1="Instagram"
        title2="If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world"
        btnText="Follow me on IG"
      />
    </div>
  );
};

export default InstagramBlock;
