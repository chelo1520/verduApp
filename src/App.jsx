import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Navbar } from './components/NavBar/NavBar'
import { About } from './pages/About'

function App() {


  return (
      <BrowserRouter>
        <div className='app'>
            <Navbar/>
            <div className='main-content container'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/about' element={<About/>}/>
              </Routes>
            </div>
        </div>
      </BrowserRouter>
  )
}

export default App
