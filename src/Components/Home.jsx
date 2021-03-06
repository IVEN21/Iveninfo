import { Waypoint } from "react-waypoint";
import React from "react";
import AutoType from "./assets/autotype";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faCogs } from "@fortawesome/free-solid-svg-icons";
function Home({ setActive_nav, setNav }) {
  return (
    <Waypoint
      onEnter={() => {
        setActive_nav("home");
        setNav(true);
      }}
      onLeave={() => setNav(false)}
      topOffset="99%"
    >
      <section className="section-home" id="home">
        <header className="section-home__header">
          <h1>Iven Zhang</h1>
          <AutoType />
          <div className="section-home__spans">
            <a href="#about">
              About
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ color: "#fff2e6 ", marginLeft: "7px" }}
              />
            </a>
            <a href="#skills">
              Skills
              <FontAwesomeIcon
                icon={faCogs}
                style={{ color: "#d4f0d3", marginLeft: "7px" }}
              />
            </a>
          </div>
        </header>
      </section>
    </Waypoint>
  );
}

export default Home;
