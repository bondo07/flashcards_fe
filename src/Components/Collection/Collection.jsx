import React, { useState } from 'react';

const Collection = ({collection, setActiveCollectionId}) => {
    


    return ( 
        <option>
            {collection.title}
        </option>
     );
}
 
export default Collection;