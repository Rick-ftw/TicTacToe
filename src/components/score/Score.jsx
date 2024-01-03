import React from "react";
import "./score.css";

const Score = () => {
  return (
    <div className="score">
      <div className="score_count x" draggable="true">
        Score X :<span id="score-x">{" " + 0}</span>
      </div>
      <div className="score_count o" draggable="true">
        Score O :<span id="score-o">{" " + 0}</span>
      </div>
    </div>
  );
};
export default Score;
