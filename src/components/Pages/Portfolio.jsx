import React from 'react'
import CardFlip from '../CardFlip'

const Portfolio = () => {
  const proyectos = [
    {
      name: "AllBlack Tabaqueria",
      link: <a href='https://gaston964.github.io/AllBlack-Tabaqueria/' target="_blank" rel="noopener noreferrer" >AllBlack Tabaqueria</a>,
      img: './images/alblackportfolio.png',
      icons: <><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
      </>
    },
    {
      name: "BelWines",
      link: <a href='https://bel-wines-react.vercel.app/' target="_blank" rel="noopener noreferrer" >BelWines</a>
      ,
      img: './images/belwinesportfolio.png',
      icons: <><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
      </>,
    },
    {
      name: "GlassShop",
      link: <a href='https://glass-shop.vercel.app/' target="_blank" rel="noopener noreferrer" >GlassShop</a>,
      img: './images/glassshopportfolio.png',
      icons: <><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
      </>,
    }
  ]
  return (
    <>
        <h1>Portfolio</h1>
      <div className="portfolio">
        {proyectos.map((items, index) =>
            <CardFlip key={index} {...items} />
        )}
      </div>
    </>
  )
}

export default Portfolio