import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import { Home } from './components/pages/Home/Home.jsx'
import { Introduccion } from './components/pages/Introduccion/Introduccion.jsx'
import { Historia } from './components/pages/Historia/historia.jsx'
import { Footer } from './components/common/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Historia></Historia>
  </StrictMode>,
)
