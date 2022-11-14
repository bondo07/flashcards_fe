import React, { useState } from 'react';
import AddCardButton from '../AddCardButton/AddCardButton';
import EditCardButton from '../EditCardButton/EditCardButton';
import Card from '../Card/Card';
import NextPrevButton from '../NextPrevButton/NextPrevButton';

const CardViewer = ({cards, collection, currentCard, setShowEditModal, setShowAddModal, getAllCardsPerCollection}) => {

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
            <EditCardButton setShowEditModal={setShowEditModal}/>
        </div>
     );
}

export default CardViewer;