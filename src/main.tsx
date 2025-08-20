import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="app-shell">
        <div className="content">
          <App />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
