import React, { useState } from 'react';
import Card from '../Card/Card';

const CardViewer = ({cards, collection, currentCard}) => {

    const [currentCardNum, setCurrentCardNum] = useState(1)

    return ( 
        <div>
            <Card cards={cards}
            collection={collection}
            currentCardNum={currentCardNum}
            setCurrentCardNum={setCurrentCardNum}/>
        </div>
     );
}
 
export default CardViewer;