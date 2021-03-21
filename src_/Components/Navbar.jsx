import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import IconNav from "../Common/IconNav";
function Navbar({ nav, active_nav }) {
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
    backgroundColor: nav && width > 420 ? "rgba(0,0,0,0)" : "rgba(50,50,50,1)",
    height: nav && width > 420 ? "120px" : "85px",
    config: {
      duration: 300,
    },
  });

  return (
    <animated.div className="navbar" style={nav_animation}>
      <span className="logo"> iven.</span>
      <IconNav nav={nav} active_nav={active_nav} />
      <div className="nav_item">
        <a href="#home" className={active_nav === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={active_nav === "about" ? "active" : ""}>
          About
        </a>
        <a href="#skills" className={active_nav === "skills" ? "active" : ""}>
          Skills
        </a>
        <a
          href="#portfolio"
          className={active_nav === "portfolio" ? "active" : ""}
        >
          Portfolio
        </a>
        <a href="#contact" className={active_nav === "contact" ? "active" : ""}>
          Contact
        </a>
      </div>
    </animated.div>
  );
}

export default Navbar;
