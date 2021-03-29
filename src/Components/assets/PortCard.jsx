import React, { useState } from "react";

const PortCard = ({ label, img, url, attr, description, locked }) => {
  const [flip, setflip] = useState(false);
  const [code, setCode] = useState("");
  const typeCode = (e) => {
    setCode(e);
    if (code === "2312") {
      window.open("https://pornlo.herokuapp.com/", "_blank");
      setCode("");
    }
  };

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
      {locked ? (
        <div className="section-portfolio__card__input-field">
          <input
            placeholder="Enter Code"
            onChange={({ currentTarget: { value } }) => typeCode(value)}
            type="password"
            value={code}
          />
          {code && <p>Auto redirect with correct code.</p>}
        </div>
      ) : (
        <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          style={{ fontSize: "21px" }}
        >
          Enter
        </a>
      )}
    </div>
  );
};

export default PortCard;
