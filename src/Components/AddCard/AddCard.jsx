import axios from 'axios';
import React, { useState } from 'react';

const AddCard = ({getAllCardsPerCollection, activeCollectionId}) => {

    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState('')

    async function addCard(newCard) {
        const response = await axios.post(`http://127.0.0.1:8000/api/collections/${activeCollectionId}/cards/`, newCard);
        if(response.status === 201) {
            await getAllCardsPerCollection();
        }
    }

    const handleWord = e => setWord(e.target.value)
    const handleDefinition = e => setDefinition(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCard = {
            word: word,
            definition: definition,
        };
        addCard(newCard);
        setWord('')
        setDefinition('')
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>New Word:</label>
                </div>
                <div>
                    <input type='text' placeholder='Type new word...' value={word} onChange={handleWord}/>
                </div>
            </div>
            <div>
                <div>
                    <label>New Definition:</label>
                </div>
                <div>
                    <textarea type='text' placeholder='Type new Definition...' value={definition} onChange={handleDefinition}/>
                </div>
            </div>
            <div>
                <button type='submit'>AddCard</button>
            </div>
        </form>
     );
}
 
export default AddCard;