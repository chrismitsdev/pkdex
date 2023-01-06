import React from 'react'
import Modal from 'react-modal'
import {PokemonProvider} from '../context'
import {Header, Spotlight, Box, Footer, PokemonModal} from './'

Modal.setAppElement('#root')

export const App = () => {
  return (
    <React.StrictMode>
      <PokemonProvider>
        <Header />
        <Spotlight />
        <Box />
        <Footer />
      </PokemonProvider>
    </React.StrictMode>
  )
}