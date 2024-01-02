import React from 'react'
import "./box.css"
import { addElement } from './box'

const Box = (props) => {

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