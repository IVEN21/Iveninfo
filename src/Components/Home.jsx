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
            <span>
              About
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ color: "#fff2e6 " }}
              />
            </span>
            <span>
              Skills
              <FontAwesomeIcon icon={faCogs} style={{ color: "#d4f0d3" }} />
            </span>
          </div>
        </header>
      </section>
    </Waypoint>
  );
}

export default Home;
