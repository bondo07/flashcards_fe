import React, { useState } from 'react';
import Card from '../Card/Card';

const CardViewer = ({cards, collection, currentCard}) => {

    const [currentCardNum, setCurrentCardNum] = useState(1)
    const showCard = cards[currentCardNum]

    return ( 
        <div>
            <Card cards={cards}
            collection={collection}
            currentCardNum={currentCardNum}
            setCurrentCardNum={setCurrentCardNum}
            showCard={showCard}/>
        </div>
     );
}

export default CardViewer;