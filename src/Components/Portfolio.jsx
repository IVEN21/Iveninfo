import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

function Portfolio({ setActive_nav }) {

    const [pornloon, setpon] = useState(false)
    const [galon, setgalon] = useState(false)
    const pornlo_skills = ["REST Api", "Node.js", "SQL", "Web Design", "Responsive", "React", "User Interface"];
    const gallery_skiils = ["REST Api", "Node.js", "React", "Web Design"]
    return (
        <Waypoint
            topOffset="34%"
            bottomOffset="65%"
            onEnter={() => { setActive_nav("portfolio") }}>
            <div className="portfolio main" id="portfolio">
                <div className="port_container">
                    <div className="port_head">
                        <h1>My Works</h1>
                        <p>These are all the web projects I had worked so far.</p>
                    </div>
                    <div className="card pornlo" onClick={() => setpon(!pornloon)}>
                        <div className="content" style={{ transform: pornloon ? "rotateY(180deg)" : "" }} >
                            <img src={require("../imgs/pornlo.png")} alt="" className="card__img" />
                            <div className="card__text_front">
                                <h3 className="card__title">Pornlo</h3>
                                <p className="card__body">A platform for watching 18+ content.</p>
                                <label>More</label>
                            </div>
                            <div className="card__text_back">
                                <h3 className="card__title">Incorporate with:</h3>
                                <p className="card__body">{pornlo_skills.map((item) => <label key={item}>{item}</label>)}</p>
                            </div>
                        </div>
                        <a href="https://pornlo.herokuapp.com/" rel="noopener noreferrer" target="_blank">Link Here</a>
                    </div>
                    <div className="card gallery" onClick={() => setgalon(!galon)}>
                        <div className="content" style={{ transform: galon ? "rotateY(180deg)" : "" }} >
                            <img src={require("../imgs/gallery.png")} alt="" className="card__img" />
                            <div className="card__text_front">
                                <h3 className="card__title">Gallery</h3>
                                <p className="card__body">A simple personal gallery built for an artist.</p>
                                <label>More</label>
                            </div>
                            <div className="card__text_back">
                                <h3 className="card__title">Incorporate with:</h3>
                                <p className="card__body">{gallery_skiils.map(item => <label key={item}>{item}</label>)}</p>
                            </div>
                        </div>
                        <a href="http://dylanz-art.herokuapp.com/" target="_blank" rel="noopener noreferrer">Link Here</a>
                    </div>
                </div>
            </div></Waypoint >
    );
}

export default Portfolio;