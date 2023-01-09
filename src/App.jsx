import { Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Educacion from './components/Educacion'
import Contacto from './components/Contacto'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import CardFlip from './components/CardFlip'

function App() {

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/sobremi' element={<SobreMi />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/cardflip' element={<CardFlip />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/educacion' element={<Educacion />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>

    </>
  )
}

export default App
