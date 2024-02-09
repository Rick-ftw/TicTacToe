import { useState } from "react";
import "./App.css";
import { Buttons, Score, Game, Footer } from "./components/exports";
import { themeContext } from "./context/AllContext";

function App() {
  const [currentTheme, setCurrentTheme] = useState("main-background");
  const [scoreX, updateScoreX] = useState(0);
  const [scoreO, updateScoreO] = useState(0);
  const upScore = (symbolName) => {
    if (symbolName == 'X') {
      updateScoreX((prevValue) => {
        return prevValue + 1;
      });
    } else if(symbolName == 'O') {
      updateScoreO((prevValue) => {
        return prevValue + 1;
      });
    }
  }
  return (
    <themeContext.Provider value={[currentTheme, setCurrentTheme]}>
      <div id="main" className={currentTheme}>
        <Buttons />
        <Score scoreX={scoreX} scoreO={scoreO} />
        <Game upScore={(symbolName) => upScore(symbolName)} />
        <Footer />
      </div>
    </themeContext.Provider>
  );
}

export default App;
