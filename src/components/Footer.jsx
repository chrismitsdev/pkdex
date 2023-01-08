import React from 'react'
import {StyledFooter, ModifiedContainer} from './styles'

export const Footer = () => {
  return (
    <StyledFooter>
      <ModifiedContainer>
        <p>All rights to Nintendo&copy; & The Pokémon Company&copy;</p>
        <p>Built using data from <a href='https://pokeapi.co/' target='_blank'>PokéAPI</a></p>
      </ModifiedContainer>
    </StyledFooter>
  )
}