import React, { useContext, useState } from 'react'
import "./buttons.css"
import { themeContext } from '../../context/contex';
import randomThemeName from './button';

const Buttons = () => {
  const [currentTheme, setCurrentTheme] = useContext(themeContext);
  
  const changeTheme = () => {
    setCurrentTheme(randomThemeName());
  }
  return (
    <div className='nav_btn_container'>
      <a method="POST" href="/">
        <button className="btn btn-primary">
          Restart
        </button>
      </a>

      <button id="theme" className="theme btn" onClick={(e) => { changeTheme() }}>
        Change Theme
      </button>
    </div>
  )
} 
export default Buttons;