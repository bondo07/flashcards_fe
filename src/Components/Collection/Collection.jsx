import React, { useState } from 'react';

const Collection = ({collection, setActiveCollectionId}) => {
    
    const handleSelect = () => {
        setActiveCollectionId(collection.id)
    }


    return ( 
        <option onClick={handleSelect}>
            {collection.title}
        </option>
     );
}
 
export default Collection;