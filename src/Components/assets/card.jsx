import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
function Card({ id, active_card, shift, text }) {
  const [card_hover, set_card_hover] = useState(false);
  const hover_style = useSpring({
    transform: card_hover
      ? `  scale(1.1) rotate(0deg)`
      : ` scale(1) rotate(${(id - 1) * 2}deg)`,
    config: {
      friction: 20,
      tension: 1000,
      mass: 1,
    },
  });

  return (
    <animated.div
      style={id <= shift ? {} : hover_style}
      className={`section-about__cards card--${id}`}
      onMouseOver={() => {
        id === active_card && set_card_hover(true);
      }}
      onMouseOut={() => {
        id === active_card && set_card_hover(false);
      }}
    >
      <h3 className="section-about__cards__title">{text.title}</h3>
      <p className="section-about__cards__p">{text.info}</p>
    </animated.div>
  );
}

export default Card;
