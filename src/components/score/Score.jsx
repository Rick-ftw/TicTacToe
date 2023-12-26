import React, { useState } from "react";
import "./score.css"
import { scoreO, scoreX } from "./index"

const Score = () => {

  const [showScoreX, setScoreX] = useState(scoreX);
  const [showSscoreO, setScoreO] = useState(scoreO);
  return (
    <div className="score">
      <div className="score_count x" draggable="true">Score X : 
      <span className="score-x"> {showScoreX} </span>
      </div>
      <div className="score_count o" draggable="true">Score O : 
      <span className="score-o"> {showSscoreO}</span>
      </div>
    </div>
  )
}
export default Score
