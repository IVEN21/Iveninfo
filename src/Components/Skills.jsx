import React, { useState } from "react";
import { useSpring, animated, useTrail } from "react-spring";
import Skillbar from "../Components/assets/Skillbar";
import { Waypoint } from "react-waypoint";

function Skills({ setActive_nav }) {
  const skills = [
    { id: 0, name: "C/C++", level: 71 },
    { id: 2, name: "React", level: 82 },
    { id: 1, name: "Java", level: 71 },
    { id: 3, name: "Node.js", level: 84 },
    { id: 4, name: "HTML", level: 80 },
    { id: 5, name: "CSS", level: 82 },
    { id: 6, name: "SQL", level: 78 },
    { id: 8, name: "Excel", level: 70 },
    { id: 7, name: "Git", level: 72 },
  ];
  const flag = [
    { id: 1, name: "Terrible" },
    { id: 2, name: "Meh" },
    { id: 3, name: "Decent" },
    { id: 4, name: "Pros" },
  ];
  const [on, seton] = useState(false);
  const flag_animation = useTrail(flag.length, {
    from: {
      transform: "translateY(-20px)",
      opacity: 0,
    },
    to: {
      transform: on ? "translateY(0)" : "translateY(-20px)",
      opacity: on ? 1 : 0,
    },
    config: {
      tension: 2000,
      friction: 200,
    },
  });
  const mini_animation = useSpring({
    from: {
      transform: "translate3d(-110px,-90px,0)",
      opacity: 0,
    },
    to: {
      transform: on
        ? "translate3d(-130px,-130px,0)"
        : "translate3d(-110px,-90px,0)",
      opacity: on ? 1 : 0,
    },
  });
  return (
    <Waypoint
      topOffset="30%"
      bottomOffset="69%"
      onEnter={() => setActive_nav("skills")}
    >
      <section className="section-skills" id="skills">
        <div className="section-skills__container">
          <div
            className="section-skills__tbn"
            onClick={() => seton(!on)}
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <animated.div style={mini_animation}>
              These statistics are progressively growing over time.
            </animated.div>
          </div>

          <section className="section-skills__skillbars">
            <div className="section-skills__flag-container">
              {flag_animation.map((props, index) => (
                <animated.div
                  className="section-skills__flag"
                  style={props}
                  key={index}
                >
                  {flag[index].name}
                </animated.div>
              ))}
            </div>
            {skills.map((item) => (
              <Skillbar key={item.id} item={item} on={on} />
            ))}
          </section>
        </div>
      </section>
    </Waypoint>
  );
}

export default Skills;
