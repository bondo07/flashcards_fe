import React, { useEffect, useState } from 'react';
import CollectionsContainer from '../CollectionsContainer/CollectionsContainer';
import CardContainer from '../CardContainer/CardContainer';
import axios from 'axios';

const Main = () => {

    const [collections, setCollections] = useState([]);
    const [card, setCard] = useState([]);

    async function getAllCollections() {
        const response = await axios.get('http://127.0.0.1:8000/api/collections/');
        setCollections(response.data)
        console.log(response.data)
    }


    useEffect(() => {
        getAllCollections();
    }, []);




    return ( 
        <div>
            <CollectionsContainer allCollections={collections}/>
            <CardContainer/>
        </div>
     );
}
 
export default Main;