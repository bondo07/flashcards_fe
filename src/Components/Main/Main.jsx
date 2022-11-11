import React, { useEffect, useState } from 'react';
import CollectionsContainer from '../CollectionsContainer/CollectionsContainer';
import CardContainer from '../CardContainer/CardContainer';
import axios from 'axios';

const Main = () => {

    const [collections, setCollections] = useState([]);
    const [activeCollectionId, setActiveCollectionId] = useState(1)
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState(1)

    async function getAllCollections() {
        const response = await axios.get('http://127.0.0.1:8000/api/collections/');
        setCollections(response.data)
        console.log(response.data)
    }

    async function getAllCardsPerCollection() {
        const response = await axios.get(`http://127.0.0.1:8000/api/collections/${activeCollectionId}/cards/`);
        setCards(response.data)
    }


    useEffect(() => {
        getAllCollections();
    }, []);

    useEffect(() => {
        getAllCardsPerCollection();
    }, [activeCollectionId]);




    return ( 
        <div>
            <CollectionsContainer collections={collections} 
            setCollections={setCollections} 
            setActiveCollectionId={setActiveCollectionId}
            activeCollectionId={activeCollectionId}/>
            <CardContainer activeCollectionId={activeCollectionId}
            cards={cards}
            getAllCardsPerCollection={getAllCardsPerCollection}/>
        </div>
     );
}
 
export default Main;