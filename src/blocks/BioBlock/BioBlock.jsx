import Header from "../../components/Header/Header";
import photo from "../../assets/bio_photo.png";
import "./BioBlock.css";

const BioBlock = () => {
  return (
    <>
      <Header />
      <div className="background-display" id="bio">
        <div className="background-black">
          <img src={photo} alt="photo" className="bio-photo" />
        </div>
        <div className="background-blue">
          <div className="bio-title">
            <span className="bio-title-1">
              I’m Robin Williams. A Product Designer{" "}
              <span style={{ color: "rgba(255, 255, 255, 0.5" }}>
                based in Italy.
              </span>{" "}
            </span>
            <span className="bio-title-2">
              I’m probably the most passionate designer you will ever get to
              work with. If you have a great project that needs some amazing
              skills, I’m your guy.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BioBlock;
