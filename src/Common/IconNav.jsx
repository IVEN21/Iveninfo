import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { animated, useSpring, useTransition, useTrail } from "react-spring";
function IconNav({ nav, active_nav }) {
    const [menu_open, set] = useState(false);
    const animation = useSpring({
        transform: menu_open ? "rotate(90deg )" : "rotate(-0deg) ",
        boxShadow: menu_open ? "0.3rem 0.1rem 2rem pink" : "0rem 0rem 0rem pink",
    });
    const menu_items = [
        { id: 1, name: "Home", ref: "#home" },
        { id: 2, name: "About", ref: "#about" },
        { id: 3, name: "Skills", ref: "#skills" },
        { id: 4, name: "Portfolio", ref: "#portfolio" },
        { id: 5, name: "Contact", ref: "#contact" },
    ];

    const menu_bar_animation = useTransition(menu_open, null, {
        from: { height: 0 },
        enter: { height: 240 },
        leave: { height: 0 },
    });

    const menu_item_animation = useTrail(menu_items.length, {
        from: { opacity: 0 },
        to: {
            opacity: menu_open ? 1 : 0,
        },

        reverse: !menu_open
    });
    return (
        <div>
            <animated.div
                className="menu"
                onClick={() => set(!menu_open)}
                style={animation}
            >
                <FontAwesomeIcon icon={menu_open ? faTimes : faBars} />


            </animated.div>
            {
                menu_bar_animation.map(
                    ({ item, key, props }) =>
                        item && (
                            <animated.div className="menu_bar" style={props} key={key}>
                                {menu_item_animation.map((style, index) =>
                                    <animated.a style={style} href={menu_items[index].ref} key={index}
                                        className={active_nav === menu_items[index].name.toLocaleLowerCase() ? "active" : ''}
                                    > {menu_items[index].name}</animated.a>
                                )
                                }
                            </animated.div>
                        )
                )
            }</div>
    );
}

export default IconNav;