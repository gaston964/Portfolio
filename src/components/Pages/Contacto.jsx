import React from 'react'
import { AiFillLinkedin, AiOutlineWhatsApp, AiFillMail } from 'react-icons/ai'

const Contacto = () => {
    return (
        <>
            <div className='contactoPadre'>
                <div className='containerRedes'>
                    <h1>Aquí puedes contactarme a través de:</h1>
                    <div className='contactoRedes'>
                        <ul className='wrapperContacto'>
                            <li className='icon whatsapp'><a href="https://web.whatsapp.com/send?phone=+542617234395" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp /></a><span className='tooltip'>Whatsapp</span></li>
                            <li className='icon instagram'><a href="https://www.linkedin.com/in/gaston-gutierrez/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a><span className='tooltip'>LinkedIn</span></li>
                            <li className='icon gmail'><a href="mailto:gastongutierrez964@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail /></a><span className='tooltip'>Gmail</span></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="container">
                        <div class="neon">Don't Forget </div>
                        <div class="flux">To Call </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contacto