import { useContext, useEffect, useState } from "react";
import "./buttons.css";
import { themeContext } from "../../context/AllContext";
import { randomThemeName, changeLineColor } from "./button";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';





const Buttons = () => {
  const [currentTheme, setCurrentTheme] = useContext(themeContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuHeading, setMenuHeading] = useState("Choose Mode")
  const [menuColor, setMenuColor] = useState("transparent")
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    const value = e.target.getAttribute("name");
    value ? setMenuHeading(value) : setMenuHeading("Choose Mode");
    if (value == "Easy") {
      setMenuColor("green");
    } else if (value == "Hard") {
      setMenuColor("orange")
    } else if (value == "Impossible") {
      setMenuColor("red")
    } else {
      setMenuColor("transparent")
    }
    setAnchorEl(null);
  };

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

              <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={{ color: "white", backgroundColor: menuColor }}
                onClick={handleClick}

              >
                {menuHeading}
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem name="Easy" onClick={(e) => handleClose(e)}>Easy</MenuItem>
                <MenuItem name="Hard" onClick={(e) => handleClose(e)}>Hard</MenuItem>
                <MenuItem name="Impossible" onClick={(e) => handleClose(e)}>Impossible</MenuItem>
              </Menu>
            </>
        }
        <p className="current_theme_name" style={{ opacity: "0%" }}>{windowWidth > 768 ? currentTheme : ""}</p>
      </div>
    </ThemeProvider>
  );
};

export default Buttons