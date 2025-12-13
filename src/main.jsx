import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

import Navigation from './components/Layout/navigation.jsx'
import Hero from './components/Sections/Hero.jsx'
import Project from './components/Sections/Project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
    <Hero />
    <Project />
    <App />
  </StrictMode>,
)
