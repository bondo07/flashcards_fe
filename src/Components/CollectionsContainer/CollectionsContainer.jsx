import React, { useState } from 'react';
import CollectionsDropdown from '../CollectionsDropdown/CollectionsDropdown';

const CollectionsContainer = ({collections, setActiveCollectionId, setCollections, activeCollectionId}) => {


    return ( 
        <div>
            <h1>Collections:</h1>
            <CollectionsDropdown collections={collections}
            setActiveCollectionId={setActiveCollectionId}
            setCollections={setCollections}
            activeCollectionId={activeCollectionId}/>
        </div>
     );
}
 
export default CollectionsContainer;