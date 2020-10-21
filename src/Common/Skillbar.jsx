import React from 'react';
import { animated, useSpring, interpolate } from "react-spring"
function Skillbar({ item, on }) {

    const { number } = useSpring({
        number: on ? item.level : 0, from: { number: 0 },
        config: {
            tension: 2000,
            friction: 1000
        }
    })
    return (

        <div className="skill_holder"> {/* I'm genius writing this code holyfuk */}
            <span className="skill_items">{item.name}</span>
            <div className="skillbar">
                <animated.div className="fill"
                    style={{
                        backgroundColor:
                            interpolate([number.interpolate({ range: [0, 50], output: [0, 255] }),
                            number.interpolate({ range: [50, 100], output: [0, 255] })],
                                (r, g) => `rgb(${255 - g},${r},0)`
                            ),
                        width: number.interpolate((x) => `${x}%`)

                    }}
                ></animated.div>

            </div> <animated.span style={{
                position: 'relative',
                marginLeft: "7px",
                fontSize: 20,
                color:
                    interpolate([number.interpolate({ range: [0, 50], output: [0, 255] }),
                    number.interpolate({ range: [50, 100], output: [0, 255] })],
                        (r, g) => `rgb(${255 - g},${r},0)`
                    )

            }}>{on ? number.interpolate((x) => `${x.toFixed(0)}%`) : "?? %"}</animated.span>
        </div>
    );
}

export default Skillbar;