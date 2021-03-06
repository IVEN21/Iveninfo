import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import ins_svg from "./assets/instaSVG";
function Footer(props) {
  return (
    <footer className="section-footer">
      <a
        href="https://www.instagram.com/_yesloiven__/"
        rel="noreferrer"
        target="_blank"
      >
        {ins_svg()}
      </a>
      <span>Last Update: 3/20/2021</span>

      <a
        href="https://app.joinhandshake.com/users/18615520"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faHandshake} />
      </a>
    </footer>
  );
}

export default Footer;
