import React from 'react'
import './button.css'

export const Button = ({id, disabled, onClick, className, type = 'button', children}) => {
  return (
    <button 
      id={id} 
      className={`main-button${className ? ' ' + className : ''}`} 
      type={type} 
      disabled={disabled} 
      onClick={onClick}
    >
      {children}
    </button>
  )
}