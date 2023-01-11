import React from 'react'
import { Link } from 'react-router-dom';



const Sidebar = () => {

    return (
        <>
        
            <nav className='sidebar'>
                <Link to={'/'}>
                <img className='logoSidebar' src='/images/logoportfolio.png'/>
                </Link>
                <div className="linkContainer">
                <Link to={'/inicio'}>Inicio</Link>
                <Link to={'/sobremi'}>Sobre Mi</Link>
                <Link to={'/portfolio'} >Portfolio</Link>
                <Link to={'/skills'}>Skilss</Link>
                <Link to={'/educacion'}>Educación</Link>
                <Link to={'/contacto'}>Contacto</Link>
                </div>
                
            </nav>
            

        </>
    )
}

export default Sidebar