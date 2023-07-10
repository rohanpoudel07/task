import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ColourContextProvider } from './context/ColourContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColourContextProvider>
      <App />
    </ColourContextProvider>
  </React.StrictMode>,
)
