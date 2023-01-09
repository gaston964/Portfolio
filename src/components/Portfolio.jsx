import React from 'react'
import CardFlip from './CardFlip'
/* import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa"; */

const Portfolio = () => {
  const proyectos = [
    {
      name: "AllBlack Tabaqueria",
      link: ('https://gaston964.github.io/AllBlack-Tabaqueria/'),
      icons: <><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
      </>
    },
    {
      name: "BelWines",
      link: ('https://bel-wines-react.vercel.app/'),
      icons: <><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
      </>,
    },
    {
      name: "GlassShop",
      link: ('https://glass-shop.vercel.app/'),
      icons: <><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
      </>,
    }
  ]
  return (
    <>
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div>
        {proyectos.map((items, index) => {
          <div key={index}>
              {<CardFlip {...items} />}
          </div>
        })}
        </div>
      </div>
    </>
  )
}

export default Portfolio