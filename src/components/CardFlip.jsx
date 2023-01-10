import React from 'react'

const CardFlip = ({ name, link, icons }) => {
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="front">
                        Front
                    </div>
                    <div className="back">
                        Back!
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFlip