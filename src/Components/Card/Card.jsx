import React, { useState } from 'react';

const Card = ({cards, currentCardNum, showCard}) => {


    return ( 
        <div>
          <div>{showCard.word}</div>
          <div>{showCard.definition}</div>
        </div>
     );
}

export default Card;