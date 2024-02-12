import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types"
import "./hard.css";

const Hard = (props) => {
  const { upScore } = props;
  const [matrix, setMatrix] = useState(Array(9).fill(0));
  const [winClass, setWinClass] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [stateSymbol, setSymbol] = useState("");
  const [call, setCall] = useState(true);

  const handleWin = useCallback((symbol, value,) => {
    const winClasses = [
      "left-right",
      "middle-right",
      "bottom-right",
      "left-top-bottom",
      "middle-top-bottom",
      "right-top-bottom",
      "zero-nine",
      "three-seven",
    ];
    setSymbol(symbol);
    if (call) {
      upScore(symbol);
      setCall(false)
    }
    setWinClass(winClasses[value])
    setTimeout(() => {
      setCall(true)
      resetBoard();
    }, 500);
  }, [call, upScore]);

  const resetBoard = () => {
    const box = document.getElementsByClassName("box");
    for (let i = 0; i < 9; i++) {
      const id = box[i].id;
      const child = document.querySelector(`#${id} i`);
      if (child) {
        box[i].removeChild(child);
      }
    }
    setMatrix(Array(9).fill(0));
    setWinClass("");
  }
  const updateArray = (child, element) => {
    let oneOrTwo = 0;
    const index = element.id.charAt(3) - 1;
    child.classList.contains("fa-x") ? oneOrTwo = 1 : oneOrTwo = 2;

    setMatrix((prevValue) => {
      const newArray = [...prevValue];
      newArray[index] = oneOrTwo;
      return newArray;
    })
  }
  const autoAdd = () => {
    const random = Math.floor(Math.random() * 9 + 1);
    const newBox = document.getElementById(`box${random}`);
    const result = addElement(newBox).addO();
    try {
      if (result) {
        return;
      } else {
        autoAdd();
      }
    } catch (error) {
      setTimeout(() => {
        resetBoard();
      }, 200);
    }

  }
  const handelClick = async (event) => {
    let verify = null, result;
    const element = event.target;
    const elementName = element.tagName;
    elementName == "DIV" ? verify = true : verify = false;
    if (verify) {
      result = addElement(element).addX();
    }
    if (result) {
      autoAdd();
    }
  }
  const addElement = (element) => {
    const childCount = element.childElementCount;
    const child = document.createElement("i");
    return {
      addX: () => {
        if (childCount < 1) {
          child.classList.add("fa-x", "fa-solid");
          element.appendChild(child);
          updateArray(child, element);
          return true;
        } else {
          return false;
        }
      },
      addO: () => {
        if (childCount < 1) {
          child.classList.add("fa-o", "fa-solid");
          element.appendChild(child);
          updateArray(child, element);
          return true;
        } else {
          return false
        }
      }
    }
  }
  const whoOne = useCallback((matrix) => {
    const winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
      [0, 4, 8], [2, 4, 6]             // Diagonal
    ];
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (matrix[a] && matrix[a] === matrix[b] && matrix[a] === matrix[c]) {
        handleWin(matrix[a] === 1 ? 'X' : 'O', i);
        break; // Stop checking if a win is found
      }
    }
  }, [handleWin]);


  useEffect(() => {
    whoOne(matrix);
  }, [matrix, whoOne])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="box" onClick={(e) => handelClick(e)} id="box1" />
        <div className="box" onClick={(e) => handelClick(e)} id="box2" />
        <div className="box" onClick={(e) => handelClick(e)} id="box3" />
        <div className="box" onClick={(e) => handelClick(e)} id="box4" />
        <div className="box" onClick={(e) => handelClick(e)} id="box5" />
        <div className="box" onClick={(e) => handelClick(e)} id="box6" />
        <div className="box" onClick={(e) => handelClick(e)} id="box7" />
        <div className="box" onClick={(e) => handelClick(e)} id="box8" />
        <div className="box" onClick={(e) => handelClick(e)} id="box9" />

        <div id="line" className={winClass}></div>
      </div>
    </div>
  );
}

Hard.propTypes = {
  upScore: PropTypes.func,
}
export default Hard;
