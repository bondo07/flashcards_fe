import React, { useState } from 'react';
import AddCard from '../AddCard/AddCard';
import CardViewer from '../CardViewer/CardViewer';

const CardContainer = ({cards, activeCard, activeCollection}) => {
    
    return ( 
        <div>
            <CardViewer cards={cards} activeCard={activeCard} activeCollection={activeCollection}/>
            <AddCard/>
        </div>
     );
}
 
export default CardContainer;