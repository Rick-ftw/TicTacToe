import { useState } from "react";
import "./App.css";
import { Buttons, Score, Footer } from "./components/exports";
import { themeContext, gameContext } from "./context/AllContext";
import { Easy, Hard, Impossible } from "./components/game/export/Exports";

function App() {
  const [currentTheme, setCurrentTheme] = useState("premium-dark");
  const [gameMode, setGameMode] = useState("Easy");

  const modeComponents = {
    'Easy': <Easy upScore={(symbolName) => upScore(symbolName)} />,
    'Hard': <Hard upScore={(symbolName) => upScore(symbolName)} />,
    'Impossible': <Impossible upScore={(symbolName) => upScore(symbolName)} />
  };
  const [scoreX, updateScoreX] = useState(0);
  const [scoreO, updateScoreO] = useState(0);

  const upScore = (symbolName) => {
    if (symbolName == 'X') {
      updateScoreX((prevValue) => {
        return prevValue + 1;
      });
    } else if (symbolName == 'O') {
      updateScoreO((prevValue) => {
        return prevValue + 1;
      });
    }
  }
  return (
    <div id="main" className={currentTheme}>
      <themeContext.Provider value={[currentTheme, setCurrentTheme]}>
        <gameContext.Provider value={[gameMode, setGameMode]}>
          <nav>
            <Buttons />
            <Score scoreX={scoreX} scoreO={scoreO} />
          </nav>
          {modeComponents[gameMode]}
          <footer>
            <Footer />
          </footer>

        </gameContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export default App;
