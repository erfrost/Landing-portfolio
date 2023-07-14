import "./Header.css";
import logo from "../../assets/logo.svg";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Burger from "../Burger/Burger";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isMobileDevice = useMediaQuery({ maxWidth: "670px" });

  return (
    <div className="Header">
      <img src={logo} alt="logo" className="logo" />
      {isMobileDevice ? (
        <>
          <Burger setOpen={setOpen} />
          <MobileMenu open={open} setOpen={setOpen} />
        </>
      ) : (
        <div className="navBar">
          <a className="navBar-item" href="#experience">
            Experience
          </a>
          <a className="navBar-item" href="#skillset">
            Skillset
          </a>
          <a className="navBar-item" href="#projects">
            Projects
          </a>
          <a className="navBar-item" href="#peoplesSay">
            Talking about me
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
