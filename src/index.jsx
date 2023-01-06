import React from 'react'
import ReactDOM from 'react-dom/client'
import {ToastContainer} from 'react-toastify'
import {App} from './components'

import './index.css'
import 'react-toastify/dist/ReactToastify.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App />
    <ToastContainer 
      position='top-right' 
      autoClose={3500} 
      newestOnTop 
      theme='dark'
    />
  </React.Fragment>
)