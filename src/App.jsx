import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Navbar } from './components/NavBar/NavBar'
import { Combos } from './pages/Combos'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Login } from './pages/dashboard/Login'
import { useContext } from 'react'
import { useAuth } from './context/AuthProvider'

function App() {

  const {userAutenticado} = useContext(useAuth)


  return (
      <BrowserRouter>
        <div className='app'>
            <Navbar/>
            <div className='main-content container'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/combos' element={<Combos/>}/>
                <Route path='/dashboard' element={userAutenticado ? <Dashboard/> : <Navigate to="/dashboard/login"/>}/>
                <Route path='/dashboard/login' element={<Login/>}/>
              </Routes>
            </div>
        </div>
      </BrowserRouter>
  )
}

export default App
