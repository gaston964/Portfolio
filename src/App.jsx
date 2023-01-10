import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Pages/Dashboard'
import Inicio from './components/Pages/Inicio'
import SobreMi from './components/Pages/SobreMi'
import Portfolio from './components/Pages/Portfolio'
import Skills from './components/Pages/Skills'
import Educacion from './components/Pages/Educacion'
import Contacto from './components/Pages/Contacto'
import { Route, Routes } from 'react-router'


function App() {
  return (
    <>
    <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/sobremi' element={<SobreMi />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/educacion' element={<Educacion />} />
        <Route path='/contacto' element={<Contacto />} />
    </Routes>
    </>
  )
}

export default App
/* 
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
*/