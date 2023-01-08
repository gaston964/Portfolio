import React from 'react'
import { Link } from 'react-router-dom';



const Sidebar = () => {

    return (
        <>
            <nav className='sidebar'>
                <img className='logoSidebar' src='/images/logoportfolio.png'/>
                <div className="linkContainer">
                <Link to={'/'}>Inicio</Link>
                <Link to={'/sobremi'}>Sobre Mi</Link>
                <Link to={'/portfolio'} >Portfolio</Link>
                <Link to={'/skills'}>Skilss</Link>
                <Link to={'/educacion'}>Educación</Link>
                <Link to={'/contacto'}>Contacto</Link>
                </div>
                
            </nav>
            <div class="logo"><b>B<span>ie</span>nv<span>eni</span>dos</b></div>

        </>
    )
}

export default Sidebar