import React, { useState } from 'react';
import AddCard from '../AddCard/AddCard';
import CardViewer from '../CardViewer/CardViewer';
import EditCard from '../EditCard/EditCard';
import Modal from '../Modal/Modal';
import './CardContainer.css'

const CardContainer = ({cards, getAllCardsPerCollection, activeCollectionId}) => {
    
    const [currentCard, setCurrentCard] = useState(0)
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
            setShowAddModal={setShowAddModal}
            setShowEditModal={setShowEditModal}/>
            <Modal title={'Add Card!'}
            show={showAddModal}
            onClose={handleCloseModal}>
                <AddCard getAllCardsPerCollection={getAllCardsPerCollection}
                activeCollectionId={activeCollectionId}/>
            </Modal>
            <Modal title={'Edit Card!'}
            show={showEditModal}
            onClose={handleCloseModal}>
                <EditCard getAllCardsPerCollection={getAllCardsPerCollection}
                activeCollectionId={activeCollectionId}
                currentCard={currentCard}/>
            </Modal>
        </div>
     );
}

export default CardContainer;