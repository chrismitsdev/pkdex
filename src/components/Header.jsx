import React from 'react'
import {StyledHeader} from './styles/Header.styled'
import {Container} from './'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

export const Header = () => {
  return (
    <StyledHeader>
      <Container flex>
        <img src='/logo.png' alt='Logo' />
        <div>
          <a href='https://www.linkedin.com/in/chrismits/' target='_blank'>
            <FaLinkedinIn />
          </a>
          <a href='https://github.com/Chris-Mits' target='_blank'>
            <FaGithub />
          </a>
        </div>
      </Container>
    </StyledHeader>
  )
}