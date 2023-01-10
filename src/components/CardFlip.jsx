import React from 'react'

const CardFlip = ({ name, link, icons, img }) => {
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="front">
                    <img src={img} alt="" />
                        {name}
                    </div>
                    <div className="back">
                        {icons}
                        {link}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFlip