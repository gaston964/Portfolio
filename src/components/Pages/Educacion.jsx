import React from 'react'

const Educacion = () => {
    return (
        <>
            <div className="educacionPadre">
                <h1>Educación</h1>
                <div className="sections">
                    <div className="col">
                        <h1>CoderHouse</h1>
                        <h2>Curso de desarrollo web</h2>
                        <h3>Curso de 38 horas</h3>
                    </div>
                    <div className="col">
                        <h3>07/06/22 - 09/08/22</h3>
                        <button>
                        <a href="https://www.coderhouse.com/certificados/631b93ab0cefba001971e2b5" target="_blank" rel="noopener noreferrer">Certificado</a>
                        </button>
                    </div>
                </div>
                <div className="sections">
                    <div className="col">
                        <h1>CoderHouse</h1>
                        <h2>Curso de JavaScript</h2>
                        <h3>Curso de 34 horas</h3>
                    </div>
                    <div className="col">
                        <h3>23/08/22 - 18/10/22</h3>
                        <button>
                        <a href="https://www.coderhouse.com/certificados/636c5be0da169d000e2bac08" target="_blank" rel="noopener noreferrer">Certificado</a>
                        </button>
                    </div>
                </div>
                <div className="sections">
                    <div className="col">
                        <h1>CoderHouse</h1>
                        <h2>Curso de React Js</h2>
                        <h3>Curso de 38 horas</h3>
                    </div>
                    <div className="col">
                        <h3>07/11/22 - 02/01/23</h3>
                        <button>
                        <a href="" target="_blank" rel="noopener noreferrer">Certificado</a>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Educacion