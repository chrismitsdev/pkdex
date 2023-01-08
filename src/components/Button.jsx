import React from 'react'
import {StyledButton} from './styles/Button.styled'

export const Button = ({
  id, 
  className,
  type = 'button', 
  disabled, 
  onClick,  
  children
}) => {
  return (
    <StyledButton 
      id={id} 
      className={className} 
      type={type} 
      disabled={disabled} 
      onClick={onClick}
    >
      {children}
    </StyledButton>  
  )
}