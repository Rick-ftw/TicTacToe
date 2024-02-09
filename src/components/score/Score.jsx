import "./score.css";
import PropTypes from 'prop-types';

const Score = (props) => {
  return (
    <div className="score">
      <div className="score_count x" draggable="true">
        Score X :<span id="score-x">{" " + props.scoreX}</span>
      </div>
      <div className="score_count o" draggable="true">
        Score O :<span id="score-o">{" " + props.scoreO}</span>
      </div>
    </div>
  );
};
Score.propTypes = {
  scoreX: PropTypes.number.isRequired,
  scoreO: PropTypes.number.isRequired,
};

export default Score;
