import React from "react";
import { animated, useSpring, interpolate } from "react-spring";
function Skillbar({ item, on }) {
  const { number } = useSpring({
    number: on ? item.level : 0,
    from: { number: 0 },
    config: {
      tension: 1000,
      friction: 500,
      mass: 50,
    },
  });
  return (
    <div className="section-skills__skillbar">
      {/* I'm genius writing this code holyfuk */}
      <span className="section-skills__skillbar-name">{item.name}</span>
      <div className="section-skills__skillbar-body">
        <animated.div
          style={{
            backgroundColor: interpolate(
              [
                number.interpolate({ range: [0, 50], output: [0, 255] }),
                number.interpolate({ range: [50, 100], output: [0, 255] }),
              ],
              (r, g) => `rgb(${255 - g},${r},0)`
            ),
            width: number.interpolate((x) => `${x}%`),
          }}
        ></animated.div>
      </div>
      <animated.span
        style={{
          marginLeft: "7px",
          fontSize: 20,
          color: interpolate(
            [
              number.interpolate({ range: [0, 50], output: [0, 255] }),
              number.interpolate({ range: [50, 100], output: [0, 255] }),
            ],
            (r, g) => `rgb(${255 - g},${r},0)`
          ),
        }}
      >
        {on ? number.interpolate((x) => `${x.toFixed(0)}%`) : "?"}
      </animated.span>
    </div>
  );
}

export default Skillbar;
