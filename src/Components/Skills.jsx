
import React, { useState } from 'react';
import { useSpring, animated, useTrail } from "react-spring"
import { Waypoint } from 'react-waypoint';
import Skillbar from '../Common/Skillbar';


function Skills({ setActive_nav }) {
    const skills = [
        { id: 0, name: 'C/C++', level: 60 },
        { id: 2, name: 'Javascript', level: 80 },
        { id: 1, name: 'Java', level: 57 },
        { id: 3, name: 'Node.js', level: 60 },
        { id: 4, name: 'HTML', level: 76 },
        { id: 5, name: 'CSS', level: 73 },
        { id: 6, name: 'SQL', level: 60 },
        { id: 7, name: 'Git', level: 65 },
        { id: 8, name: 'Excel', level: 68 },
      
    ]
    const flag = [
        { id: 1, name: "Terrible" },
        { id: 2, name: "Meh" },
        { id: 3, name: "Decent" },
        { id: 4, name: "Professional" }
    ]
    const [on, seton] = useState(false)
    const flag_animation = useTrail(flag.length, {
        from: {
            transform: "translateY(-20px)",
            opacity: 0,
        },
        to: {
            transform: on ? "translateY(0)" : "translateY(-20px)",
            opacity: on ? 1 : 0
        }, config: {
            tension: 2000,
            friction: 200
        }
    })
    const mini_animation = useSpring({
        from: {
            transform: "translate3d(-130px,-110px,0)",
            opacity: 0,
        },
        to: {
            transform: on ? "translate3d(-150px,-150px,0)" : "translate3d(-130px,-110px,0)", opacity: on ? 1 : 0
        }
    })
    return (
        <Waypoint topOffset="30%"
            bottomOffset="69%" onEnter={() => setActive_nav("skills")} >
            <div className="skills main" id="skills">
                <div className="skill_grid">
                    <div className="check_skill" onClick={() => seton(!on)}>
                        <animated.div style={mini_animation}>The numbers themself are not important, what's important is these numbers are progressively growing.</animated.div>
                    </div>
                    <div className="skills_section">
                        <div className="flag_holder">
                            {flag_animation.map((props, index) =>
                                <animated.div className="skill_flag" style={props} key={index}>{flag[index].name}</animated.div>
                            )}

                        </div>
                        {skills.map((item) => <Skillbar key={item.id} item={item} on={on} />)}
                    </div>
                </div>
            </div>
        </Waypoint>
    )
}

export default Skills;