import React, { useContext, useState } from "react";
import { classContext } from "../../context/AllContext.jsx";
import "./game.css";
import Box from "../box/Box.jsx";

const Game = () => {
  const [classes, setClasses] = useState("box");

  return (
    <classContext.Provider value={[classes, setClasses]}>
      <div className="container">
        <div className="wrapper">
          <Box c={classes} i="box1" />
          <Box c={classes} i="box2" />
          <Box c={classes} i="box3" />
          <Box c={classes} i="box4" />
          <Box c={classes} i="box5" />
          <Box c={classes} i="box6" />
          <Box c={classes} i="box7" />
          <Box c={classes} i="box8" />
          <Box c={classes} i="box9" />

          <div id="line" className="win-line"></div>
        </div>
      </div>
    </classContext.Provider>
  );
};
export default Game;
