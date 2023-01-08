import React from 'react'
import {StyledContainer, StyledFlexContainer} from './styles'

export const Container = ({flex, children}) => {
  return (
    flex 
    ? (
      <StyledFlexContainer>
        {children}
      </StyledFlexContainer> 
    )
    : (
      <StyledContainer>
        {children}
      </StyledContainer>
    )
  )
}