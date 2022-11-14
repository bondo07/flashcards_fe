import React, { useState } from 'react';
import AddCard from '../AddCard/AddCard';
import CardViewer from '../CardViewer/CardViewer';
import Modal from '../Modal/Modal';
import './CardContainer.css'

const CardContainer = ({cards, getAllCardsPerCollection, activeCollectionId}) => {
    
    const [currentCard, setCurrentCard] = useState(1)
    const [showAddModal, setShowAddModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    const handleCloseModal = () => {
        setShowAddModal(false)
        setShowEditModal(false)
    }

    return ( 
        <div className='card-position'>
            <CardViewer cards={cards}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            getAllCardsPerCollection={getAllCardsPerCollection}
            setShowAddModal={setShowAddModal}/>
            <Modal title={'Add Card!'}
            show={showAddModal}
            onClose={handleCloseModal}>
                <AddCard getAllCardsPerCollection={getAllCardsPerCollection}
                activeCollectionId={activeCollectionId}/>
            </Modal>
        </div>
     );
}

export default CardContainer;