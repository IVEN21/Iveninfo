import React, { useState } from "react";
import Port_card from "../Components/assets/Port_card";
import pornlo from "../imgs/pornlo.png";
import gallery from "../imgs/gallery.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Waypoint } from "react-waypoint";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
function Portfolio({ setActive_nav }) {
  const pornlo_attr = [
    "REST Api",
    "Node.js",
    "SQL",
    "Web Design",
    "Responsive",
    "React",
    "User Interface",
  ];
  const gallery_attr = ["REST Api", "Node.js", "React", "Web Design"];

  return (
    <Waypoint
      topOffset="34%"
      bottomOffset="68%"
      onEnter={() => {
        setActive_nav("portfolio");
      }}
    >
      <section className="section-portfolio" id="portfolio">
        <div className="section-portfolio__container">
          <header className="section-portfolio__header">
            <h2>
              <FontAwesomeIcon icon={faSeedling} style={{ color: "#e5f2e1" }} />{" "}
              My Projects
            </h2>
            <p>These are all the web projects I had worked so far.</p>
          </header>

          <Port_card
            label="Pornlo"
            img={pornlo}
            url="https://pornlo.herokuapp.com/"
            attr={pornlo_attr}
            description="A platform for watching 18+ content."
          />

          <Port_card
            label="Gallery"
            img={gallery}
            url="http://dylanz-art.herokuapp.com/"
            attr={gallery_attr}
            description="A simple personal gallery built for an artist."
          />
        </div>
      </section>
    </Waypoint>
  );
}

export default Portfolio;
