import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Navbar from './Navbar.jsx'
// import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar />
    <Test /> */}
    <App />
  </StrictMode>,
)
