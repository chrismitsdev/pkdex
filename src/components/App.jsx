import React from 'react'
import {GlobalStyles} from './styles/Global'
import Modal from 'react-modal'
import {ToastContainer} from 'react-toastify'
import {PokemonProvider} from '../context'
import {Header, Main, Footer} from './'

import 'react-toastify/dist/ReactToastify.min.css'
Modal.setAppElement('#root')

export const App = () => {
  return (
    <React.Fragment>
      <PokemonProvider>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
        <ToastContainer 
          position='top-right' 
          autoClose={3500} 
          newestOnTop 
          theme='dark'
        />
      </PokemonProvider>
    </React.Fragment>
  )
}