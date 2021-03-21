import React from 'react';
import { Waypoint } from 'react-waypoint';
import { getInfos } from "../Common/info"
import Card from '../Common/Card';

function About({ setActive_nav }) {

    const Cards = () =>
        <div className="cards_container">

            {getInfos().map((info) =>
                <Card attr={info.id} key={info.id} info={info} />
            )}

        </div>


    const Comp = () =>
        <Waypoint
            topOffset="34%"
            bottomOffset="65%"
            onEnter={() => setActive_nav("about")}>
            <div className="about main" id="about">
                <div className="about_grid">
                    <div className="about_img"></div>
                    <Cards />
                    <h3 style={{ color: "#7a5854", textAlign: 'center' }}>Last Modified: 10/16/2020</h3></div>
            </div>
        </Waypoint>


    return (
        <Comp />
    );
}

export default About;