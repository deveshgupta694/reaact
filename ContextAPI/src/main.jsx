import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// This code solves a common problem in React: 
// "How do I share data (like a logged-in user) 
// between two separate components (Login and Profile) 
// without passing it through every single parent?"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
