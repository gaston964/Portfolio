import React from 'react'
import { AiTwotoneMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'


const Inicio = () => {
  return (
    <>
    <div className="inicio">
      <h1>Gastón Gutierrez</h1>
      <h2>Bienvenido a mi Portfolio como desarrollador trainee</h2>
      <h3>Si quieres ponerte en contarcto conmigo escribeme a <a href="mailto:gastongutierrez964@gmail.com">gastongutierrez964@gmail.com</a></h3>
      <h3>También puedes descargar mi CV!!!</h3>
    </div>
    <div className='inicioRedes'>
                    <ul className='wrapper'>
                        <li className='icon github'><a href="https://github.com/gaston964" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a><span className='tooltip'>GitHub</span></li>
                        <li className='icon linkedin'><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a><span className='tooltip'>LinkedIn</span></li>
                        <li className='icon gmail'><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><AiTwotoneMail /></a><span className='tooltip'>Gmail</span></li>
                    </ul>
                </div>
    </>
  )
}

export default Inicio