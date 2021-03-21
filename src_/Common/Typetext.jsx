import React, { useState, useEffect } from "react";

function Typetext(props) {
  const [time, setTime] = useState(0);
  const [loop_index, setLoop_index] = useState(0);
  const [toggle, setToggle] = useState(true);
  const p = ["Fullstack Developer", "Web Designer", "Software Engineer"];
  const [display, setDisplay] = useState("-");
  const currentloop = p[loop_index].length;
  useEffect(() => {
    const interval =
      (toggle || time < currentloop) &&
      setInterval(() => {
        setTime((state) => state + 1);
        setDisplay(display + `${p[loop_index][time]}`);
        if (time === currentloop - 1) {
          setToggle(false);
        }
      }, 100);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    const interval =
      (!toggle || (time >= currentloop && time < currentloop * 2)) &&
      setInterval(() => {
        setTime((state) => state + 1);
        setDisplay(display.slice(0, -1));
        if (time === currentloop * 2 - 1) {
          setToggle(true);
          setTime(0);
          setLoop_index((state) => (state + 1) % 3);
        }
      }, 50);
    return () => {
      clearInterval(interval);
    };
  });
  return <h3>{display}</h3>;
}

export default Typetext;
