import axios from "axios";
import React, { useState } from 'react';

const EditCard = ({getAllCardsPerCollection, activeCollectionId, currentCard}) => {

    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState('')

    async function editCard (editedCard) {
        const response = await axios.put(`http://127.0.0.1:8000/api/collections/${activeCollectionId}/cards/${currentCard}/`, editedCard);
        if(response.status === 200) {
            await getAllCardsPerCollection()
        }
    }

    const handleWord = e => setWord(e.target.value)
    const handleDefinition = e => setDefinition(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedCard = {
            word: word,
            definition: definition,
        };
        editCard(editedCard);
        setWord('')
        setDefinition('')
    };

    return ( 
        <form onSubmit={handleSubmit}>
        <div>
            <div>
                <label>Edit Word:</label>
            </div>
            <div>
                <input type='text' placeholder='Edit Word...' value={word} onChange={handleWord}/>
            </div>
        </div>
        <div>
            <div>
                <label>Edit Definition:</label>
            </div>
            <div>
                <textarea type='text' placeholder='Edit Word Definition...' value={definition} onChange={handleDefinition}/>
            </div>
        </div>
        <div>
            <button type='submit'>Apply</button>
        </div>
    </form>
     );
}
 
export default EditCard;