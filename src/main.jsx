import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductosProvider } from './context/ProductosProvider.jsx'
import { CarritoProvider } from './context/CarritoProvider.jsx'
import { CombosProvider } from './context/CombosProvider.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductosProvider>
        <CombosProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </CombosProvider>
      </ProductosProvider>
    </AuthProvider>
  </StrictMode>
)
