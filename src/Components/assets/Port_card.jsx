import React, { useState } from "react";

const Port_card = ({ label, img, url, attr, description }) => {
  const [flip, setflip] = useState(false);

  return (
    <div
      className={`section-portfolio__card --${label}`}
      onClick={() => setflip(!flip)}
    >
      <div
        className="section-portfolio__card__content"
        style={{ transform: flip ? "rotateY(180deg)" : "" }}
      >
        <img src={img} alt={label} className="card__img" />
        <div className="card__text_front">
          <h3 className="card__title">{label}</h3>
          <p className="card__body">{description}</p>
          <label>More</label>
        </div>
        <div className="card__text_back">
          <h3 className="card__title">Incorporate with:</h3>
          <p className="card__body">
            {attr.map((item) => (
              <label key={item}>{item}</label>
            ))}
          </p>
        </div>
      </div>
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        style={{ fontSize: "21px" }}
      >
        Link Here
      </a>
    </div>
  );
};

export default Port_card;
