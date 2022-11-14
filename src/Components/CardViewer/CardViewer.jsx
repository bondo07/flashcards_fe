import React, { useState } from 'react';
import AddCardButton from '../AddCardButton/AddCardButton';
import Card from '../Card/Card';
import NextPrevButton from '../NextPrevButton/NextPrevButton';

const CardViewer = ({cards, collection, currentCard, setShowAddModal}) => {

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
            <AddCardButton setShowAddModal={setShowAddModal}/>
        </div>
     );
}

export default CardViewer;