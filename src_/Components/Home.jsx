import React from "react";
import { Waypoint } from "react-waypoint";
import Typetxt from "../Common/Typetext";

const Home = ({ setNav, setActive_nav }) => {
  //main
  const Comp = () => (
    <Waypoint
      onEnter={() => {
        setActive_nav("home");
        setNav(true);
      }}
      onLeave={() => setNav(false)}
      topOffset="99%"
    >
      <div className="Home main" id="home">
        <div className="home_container">
          <h1>Iven_ Zhang</h1>

          <Typetxt />
          <a href="#about">about</a>
          <a href="#skills">skill</a>
        </div>
      </div>
    </Waypoint>
  );

  return <Comp />;
};

export default Home;
