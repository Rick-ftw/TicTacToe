import "./score.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Person from "@mui/icons-material/Person";

const Score = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const setWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setWidth);
    return () => {
      window.removeEventListener("resize", setWidth);
    };
  });

  return (
    <div className="score">
      {windowWidth < 768 ? (
        <>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Person
              style={{
                fontSize: "30px",
                color: "var(--secondary-color)",
              }}
            />
            <span style={{ fontFamily: "Poppins" }} className="score-x">
              {props.scoreX}
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <SmartToyIcon
              style={{
                fontSize: "30px",
                color: "var(--secondary-color)",
              }}
            />
            <span style={{ fontFamily: "Poppins" }} className="score-o">
              {props.scoreO}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="score_count x" draggable="true">
            Your Score
            <span className="score-x">{props.scoreX}</span>
          </div>
          <div className="score_count o" draggable="true">
            Bot Score
            <span className="score-o">{props.scoreO}</span>
          </div>
        </>
      )}
    </div>
  );
};
Score.propTypes = {
  scoreX: PropTypes.number.isRequired,
  scoreO: PropTypes.number.isRequired,
};

export default Score;
