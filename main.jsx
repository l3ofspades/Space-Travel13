import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/AppRouter'
import './main.css'
import { SpacecraftProvider } from './context/SpacecraftContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpacecraftProvider>
    <AppRouter />
    </SpacecraftProvider>
  </React.StrictMode>
)