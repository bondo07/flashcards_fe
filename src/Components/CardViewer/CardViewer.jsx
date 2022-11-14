import React, { useState } from 'react';
import Card from '../Card/Card';
import NextPrevButton from '../NextPrevButton/NextPrevButton';

const CardViewer = ({cards, collection, currentCard}) => {

    const [currentCardNum, setCurrentCardNum] = useState(0)
    const showCard = cards[currentCardNum]

    return ( 
        <div>
            <Card cards={cards}
            collection={collection}
            currentCardNum={currentCardNum}
            setCurrentCardNum={setCurrentCardNum}
            showCard={showCard}/>
            <NextPrevButton cards={cards}
            currentCardNum={currentCardNum}
            setCurrentCardNum={setCurrentCardNum}
            currentCard={currentCard}
            />
        </div>
     );
}

export default CardViewer;