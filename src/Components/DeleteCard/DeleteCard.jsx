import './DeleteCard.css'
import axios from 'axios';

const DeleteCard = ({getAllCardsPerCollection, activeCollectionId, currentCard, onClose}) => {
    
    async function deleteCard (deleteCard) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/collections/${activeCollectionId}/cards/${currentCard}/`, deleteCard);
        if(response.status === 204) {
            await getAllCardsPerCollection()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        deleteCard();
    };

    const handleCancel = (e) => {
        e.preventDefault();
        onClose()
    }



    return ( 
        <>
            <button type='button' onSubmit={handleSubmit}>Delete Card</button>
            <button type='button' onSubmit={handleCancel}>Cancel</button>
        </>
     );
}
 
export default DeleteCard;