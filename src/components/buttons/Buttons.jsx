import { useContext, useEffect, useState } from "react";
import "./buttons.css";
import { themeContext } from "../../context/AllContext";
import { randomThemeName, changeLineColor } from "./button";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


const Buttons = () => {
  const [currentTheme, setCurrentTheme] = useContext(themeContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const changeTheme = async () => {
    const [randomName, randomNumber] = await randomThemeName();
    setCurrentTheme(randomName);
    changeLineColor(randomNumber);
  };
  const setWidth = () => {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", setWidth);
    //cleanup function
    return () => {
      window.removeEventListener("resize", setWidth);
    }
  })
  const theme = createTheme({
    palette: {
      ochre: {
        main: '#fff',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="nav_btn_container">
        {
          windowWidth < 768
            ?
            <>
              <RestartAltIcon
                fontSize="large"
                onClick={() => window.location.reload()}
                sx={{ color: "ochre.main" }}
              />
              <TrendingFlatIcon
                fontSize="large"
                className="theme"
                sx={{ color: "ochre.main" }}
                onClick={() => {
                  changeTheme();
                }}
              />
            </>
            :
            <>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-primary">
                Restart
              </button>
              <button
                id="theme"
                className="theme btn"
                onClick={() => {
                  changeTheme();
                }}
              >
                Change Theme
              </button>
            </>
        }
        <p className="current_theme_name">{windowWidth > 768 ? currentTheme : ""}</p>
      </div>
    </ThemeProvider>
  );
};
export default Buttons;
