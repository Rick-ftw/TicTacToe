import React, { createContext, useState } from "react"
import "./App.css"
import { Buttons, Score, Game, Footer } from "./components/exports"
import { themeContext } from "./context/AllContext";

function App() {

  const [currentTheme, setCurrentTheme] = useState("main-background");
  return (
    <themeContext.Provider value={[currentTheme, setCurrentTheme]}>
    <div id="main" className={currentTheme}>
      <Buttons />
      <Score />
      <Game />
      <Footer />
    </div>
    </themeContext.Provider>
  )
}

export default App 
