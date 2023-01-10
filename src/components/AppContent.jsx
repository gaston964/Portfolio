import React from 'react'
import Dashboard from './Pages/Dashboard'
import Inicio from './Pages/Inicio'
import SobreMi from './Pages/SobreMi'
import Portfolio from './Pages/Portfolio'
import Skills from './Pages/Skills'
import Contacto from './Pages/Contacto'
import Educacion from './Pages/Educacion'


const AppContent = () => {
    return (
        <div className='containerMain'>
            <div>
                <Dashboard />
            </div>
            <div>
                <Inicio />
            </div>
            <div>
                <SobreMi />
            </div>
            <div>
                <Portfolio />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Educacion />
            </div>
            <div>
                <Contacto />
            </div>
        </div>
    );
}

export default AppContent