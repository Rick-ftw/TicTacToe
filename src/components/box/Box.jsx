import React, { useContext, useState } from 'react'
import "./box.css"
import { classContext } from '../../context/contex'
import { addElement, hasIcon, automaticAdd } from './index'

const Box = (props) => {
  const [classes, setClasses] = useContext(classContext);

  async function handelClick(e) {
    await addElement(e);
  }
  return (
    <div
      id={props.i}
      className={props.c}
      onClick={(e) => handelClick(e)}
    >
    </div>
  )
}

export default Box