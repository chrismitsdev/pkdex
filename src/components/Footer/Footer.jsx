import React from 'react'
import logo from '../../assets/logo.png'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className='container section'>
        <div className='footer-left'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='footer-right'>
          <span className='rights'>
            All rights to Nintendo&copy; & The Pokémon Company&copy;
          </span>
          <span className='pokeapi'>
            Built using data from <a href='https://pokeapi.co/' target='_blank'>PokéAPI</a>
          </span>
        </div>
      </div>
    </footer>
  )
}