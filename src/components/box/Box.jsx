import React, { useContext } from 'react'
import "./box.css"
import { classContext } from '../../context/contex'
import { addElement, hasIcon, automaticAdd} from './index'

const Box = (props) => {
  const [classes, setClasses] = useContext(classContext);

  async function handelClick(e) {
    // await addElement(e);
    // automaticAdd();
  }
  return (
    <div className={props.c} id={props.i} onClick={(e) => handelClick(e)}></div>
  )
}

export default Box