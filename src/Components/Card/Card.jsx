import React, { useState } from 'react';
import './Card.css'

const Card = ({cards, currentCardNum, showCard}) => {
    const [flip, setFlip] = useState(false)
    const handleFlip = () => {
        setFlip(!flip)
    }

    return ( 
        <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={handleFlip}
        >
            <div className="front">
                {showCard.word}
            </div>
            <div className='back'>
                {showCard.definition}
            </div>
        </div>
     );
}

export default Card;