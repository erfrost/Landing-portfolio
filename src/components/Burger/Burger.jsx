/* eslint-disable react/prop-types */
import "./Burger.css";

const Burger = ({ setOpen }) => {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ paddingRight: "40px", cursor: "pointer" }}
      onClick={() => setOpen((prevState) => !prevState)}
      className="burger"
    >
      <path
        d="M4 18L20 18"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M4 6L20 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default Burger;
