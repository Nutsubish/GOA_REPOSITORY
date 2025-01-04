import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataContext } from './contexts/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <DataContext>
    <StrictMode>
      <App />
    </StrictMode>
  </DataContext>,
)
