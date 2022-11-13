import React, { useState } from 'react';
import AddCard from '../AddCard/AddCard';
import CardViewer from '../CardViewer/CardViewer';

const CardContainer = ({cards, getAllCardsPerCollection, activeCollectionId}) => {
    
    const [currentCard, setCurrentCard] = useState(1)


    return ( 
        <div>
            <CardViewer cards={cards}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}/>
            <AddCard/>
        </div>
     );
}

export default CardContainer;