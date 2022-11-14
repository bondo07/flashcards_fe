import React, { useState } from 'react';

const Card = ({cards, currentCardNum, showCard}) => {
    const [flip, setFlip] = useState(false)

    return ( 
        <div>
          <div onClick={() => setFlip(!flip)}>{flip ? showCard.word : showCard.definition}</div>
        </div>
     );
}

export default Card;