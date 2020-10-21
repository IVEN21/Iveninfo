import React, { useState, useEffect } from 'react';
import { useGesture } from "react-with-gesture"
import { useSpring, animated, interpolate } from "react-spring"
function Card({ attr, info, }) {
    //listen on window width
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const bind = useGesture(({ delta, down }) => {
        //smaller size window 
        if (width < 490) {
            if (down && delta[0] > 0 && delta[0] < 150) {
                set({ x: delta[0] })
            }
            else if (delta[0] > 85) {
                set({ x: 220 })


            }
            else {
                set({ x: 0 })

            }
        }

        else if (down && delta[0] > 0 && delta[0] < 350) {
            set({ x: delta[0] })
        }
        else if (delta[0] > 200 && delta) {
            set({ x: 350 })

        }
        else {
            set({ x: 0 })

        }
    })

    const [{ x }, set] = useSpring(() => ({
        x: 0,
        config: { friction: 20 },
    }))
    return (
        <animated.div {...bind()} className={[`card` + attr]}

            style={{

                transform: width > 490 ? interpolate(
                    [x.interpolate({ range: [0, 350], output: [0, 350] }), x.interpolate({ range: [0, 350], output: [1, 0.5] })],
                    (x, s) => `translate(${x}px, 0px) rotate(${attr * 3}deg) scale(${s})`) :
                    interpolate(
                        [x.interpolate({ range: [0, 220], output: [0, 220] }), x.interpolate({ range: [0, 220], output: [1, 0.5] })],
                        (x, s) => `translate(${x}px, 0px) rotate(${attr * 3}deg) scale(${s})`),

                opacity: width > 490 ? x.interpolate(({
                    range: [0, 349, 350],
                    output: [1, 0.2, 1],
                })).interpolate((opa) => opa) : x.interpolate(({
                    range: [0, 219, 220],
                    output: [1, 0.1, 1],
                })).interpolate((opa) => opa),

            }}
        >
            <h1>{info.title}</h1>
            <p>{info.info}</p>  </animated.div >
    );
}

export default Card;