import React, { useState } from 'react';
import CollectionsDropdown from '../CollectionsDropdown/CollectionsDropdown';

const CollectionsContainer = ({allCollections}) => {


    return ( 
        <div>
            <h1>Collections:</h1>
            <CollectionsDropdown allCollections={allCollections}/>
        </div>
     );
}
 
export default CollectionsContainer;