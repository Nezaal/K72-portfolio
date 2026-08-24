import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Stairs from './components/common/Stairs.jsx'
import Navbar from './components/Navigations/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
        <App/>
      </Stairs>
    </BrowserRouter>
  </StrictMode>,
)
