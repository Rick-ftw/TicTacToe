import { useContext } from "react";
import "./buttons.css";
import { themeContext } from "../../context/AllContext";
import { randomThemeName, changeLineColor } from "./button";

const Buttons = () => {
  const [currentTheme, setCurrentTheme] = useContext(themeContext);

  const changeTheme = async () => {
    const [randomName, randomNumber] = await randomThemeName();
    setCurrentTheme(randomName);
    changeLineColor(randomNumber);
  };
  return (
    <div className="nav_btn_container">
      <a method="POST" href="/">
        <button className="btn btn-primary">Restart</button>
      </a>

      <button
        id="theme"
        className="theme btn"
        onClick={() => {
          changeTheme();
        }}
      >
        Change Theme
      </button>
      <p className="current_theme_name">Theme: {currentTheme}</p>
    </div>
  );
};
export default Buttons;
