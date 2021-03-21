import { Waypoint } from "react-waypoint";
import React, { useState } from "react";
import handsome from "../imgs/hs.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./assets/card";
import { getInfos } from "./assets/info.js";
const About = ({ setActive_nav }) => {
  const [active_card, set_active_card] = useState(1);
  const numberOf_cards = [1, 2, 3];
  const [shift, setShift] = useState(0);
  return (
    <Waypoint
      topOffset="34%"
      bottomOffset="65%"
      onEnter={() => setActive_nav("about")}
    >
      <section className="section-about" id="about">
        <article className="section-about__container">
          <figure className="section-about__figure">
            <img src={handsome} width="100%" height="100%" />
          </figure>
          <figcaption className="section-about__figcaption">
            {numberOf_cards.map((id) => (
              <Card
                id={id}
                active_card={active_card}
                shift={shift}
                text={getInfos()[id - 1]}
              />
            ))}

            <div className="section-about__arrow-label">
              <button
                onClick={() => {
                  set_active_card(active_card - 1);
                  setShift(shift - 1);
                }}
                className={`section-about__btn ${
                  shift === 0 && `btn--disable`
                }`}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                onClick={() => {
                  set_active_card(active_card + 1);
                  setShift(shift + 1);
                }}
                className={`section-about__btn ${
                  shift === 2 && `btn--disable`
                }`}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </figcaption>
        </article>
      </section>
    </Waypoint>
  );
};

export default About;
