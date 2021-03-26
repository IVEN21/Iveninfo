import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import NavIcon from "../assets/NavIcon";
import profpc from "../../imgs/profilepc.jpg";
function Nav({ nav, active_nav }) {
  //listen on window width
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const nav_animation = useSpring({
    backgroundColor: nav && width > 750 ? "rgba(0,0,0,0)" : "rgba(38,33,37,1)",
    height: nav && width > 750 ? "120px" : "70px",
    config: {
      duration: 200,
    },
  });
  return (
    <animated.nav className="nav-bar" style={nav_animation}>
      <div className="nav__logo_container">
        <span className="nav__logo">iven</span>{" "}
        <img src={profpc} alt="a handsome guy name iven" />
      </div>
      <NavIcon active_nav={active_nav} />
      <ul className="nav-bar__items">
        <li>
          <a href="#home" className={active_nav === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={active_nav === "about" ? "active" : ""}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" className={active_nav === "skills" ? "active" : ""}>
            Skills
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={active_nav === "portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={active_nav === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </animated.nav>
  );
}

export default Nav;
