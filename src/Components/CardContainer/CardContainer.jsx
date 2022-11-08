import React, { useState } from 'react';
import AddCard from '../AddCard/AddCard';
import CardViewer from '../CardViewer/CardViewer';

const CardContainer = () => {
    return ( 
        <div>
            <CardViewer/>
            <AddCard/>
        </div>
     );
}
 
export default CardContainer;