import React from 'react'
import "../styles/Button.css"
const Button = ({texto,id,action}) => {
  
  const handleClick = (e) =>{
    e.preventDefault()
    action()
  }
  return (
    <button onClick={(e)=>handleClick(e)} id={id}>{texto}</button>
  )
}

export default Button