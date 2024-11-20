import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './assets/Components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Home/>
  </StrictMode>,
)
