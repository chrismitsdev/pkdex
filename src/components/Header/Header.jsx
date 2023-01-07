import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import './header.css'
import logo from '../../assets/logo.png'

export const Header = () => {
  return (
    <header className='header'>
      <div className='container section'>
      {/*<div className='header-container'>*/}
        <img src={logo} alt="Logo" />
        <div className='header-social-container'>
          <a 
            className='header-social-icon' 
            href='https://www.linkedin.com/in/chrismits/' 
            target='_blank'
          >
            <FaLinkedinIn />
          </a>
          <a 
            className='header-social-icon' 
            href='https://github.com/Chris-Mits' 
            target='_blank'
          >
            <FaGithub />
          </a>
        </div>
      {/*</div>*/}
      </div>
    </header>
  )
}