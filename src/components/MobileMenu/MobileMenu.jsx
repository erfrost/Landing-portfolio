/* eslint-disable react/prop-types */
import "./MobileMenu.css";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      id="mobile-menu"
      className={`mobile-menu ${open ? "mobile-menu-active" : ""}`}
    >
      <a
        className="mobile-menu-item"
        href="#experience"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        Experience
      </a>
      <a
        className="mobile-menu-item"
        href="#skillset"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        Skillset
      </a>
      <a
        className="mobile-menu-item"
        href="#projects"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        Projects
      </a>
      <a
        className="mobile-menu-item"
        href="#peoplesSay"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        Talking about me
      </a>
    </div>
  );
};

export default MobileMenu;
