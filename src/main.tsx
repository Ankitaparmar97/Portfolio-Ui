import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { BrandingProvider } from './branding'
import './Component/Skeleton/Skeleton.css'
import './fonts.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrandingProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BrandingProvider>
  </StrictMode>,
)
