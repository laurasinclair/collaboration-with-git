import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.sass' // will apply to the whole app
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
