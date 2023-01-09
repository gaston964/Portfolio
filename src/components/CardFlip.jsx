import React from 'react'

const CardFlip = ({name, link, icons}) => {
    return (
        <>
            <div className="card">
                <div className="card-front"></div>
                <div className="card-back">
                    <h2>By Gaston<span>{name}</span></h2>
                    <div className="social-icons">
                        <a href={link} aria-hidden="true">{icons}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFlip