import React from 'react'

const Skills = () => {
  return (
    <>
      <div className="containerSkills">
        <div className='placeSkill'>
          <h1>Habilidades</h1>
          <div className='iconSkill'>
            <h3>HTML5</h3> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
          </div>
          <div className='iconSkill'>
            <h3>CSS3</h3> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
          </div>
          <div className='iconSkill'>
            <h3>JavaScript</h3> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
          </div>
        </div>

        <div className='placeSkill'>
          <h1>Librerias, Frameworks y Herramientas</h1>
          <div className='iconSkill'>
            <h3>Bootstrap</h3> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" />
          </div>
          <div className='iconSkill'>
            <h3>Git</h3> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
          </div>
          <div className='iconSkill'>
            <h3>React Js</h3> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
          </div>
          <div className='iconSkill'>
            <h3>Photoshop</h3> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40" />
          </div>
        </div>
      <div className="logoSkill"><b>S<span>k</span>i<span>ll</span>s</b></div>
      </div>
    </>
  )
}

export default Skills