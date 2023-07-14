import "./FooterBlock.css";
import logo from "../../assets/footer_logo.svg";
import twitter from "../../assets/twitter.svg";
import dribbble from "../../assets/dribbble.svg";
import linkedIn from "../../assets/linkedIn.svg";
import { useMediaQuery } from "react-responsive";

const FooterBlock = () => {
  const isMobileDevice = useMediaQuery({ maxWidth: "550px" });

  return (
    <div className="Footer" id="footer">
      <div className="footer-left">
        <div className="left-social">
          <img src={logo} alt="logo" />
          <div className="social-links">
            <a href="https://twitter.com">
              <img src={twitter} alt="twitter" className="social-link" />
            </a>
            <a href="https://dribbble.com">
              <img src={dribbble} alt="dribbble" className="social-link" />
            </a>
            <a href="https://ru.linkedin.com">
              <img src={linkedIn} alt="linkedIn" className="social-link" />
            </a>
          </div>
        </div>
        {!isMobileDevice ? (
          <span className="notCopyright">
            Not Copyright 2020 • Robin Williams. Webflow cloneable
          </span>
        ) : null}
      </div>
      <div className="footer-right">
        <a className="anchors" href="#bio">
          About
        </a>
        <a className="anchors" href="#experience">
          Experience
        </a>
        <a className="anchors" href="#skillset">
          Skillset
        </a>
        <a className="anchors" href="#projects">
          Projects
        </a>
        <a className="anchors" href="#dribbble">
          Dribbble
        </a>
        <a className="anchors" href="#photography">
          Blog
        </a>
      </div>
      {isMobileDevice ? (
        <span className="notCopyright">
          Not Copyright 2020 • Robin Williams. Webflow cloneable
        </span>
      ) : null}
    </div>
  );
};

export default FooterBlock;
