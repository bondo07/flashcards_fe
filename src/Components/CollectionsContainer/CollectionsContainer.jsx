import React, { useState } from 'react';
import CollectionsDropdown from '../CollectionsDropdown/CollectionsDropdown';

const CollectionsContainer = ({collections}) => {


    return ( 
        <div>
            <CollectionsDropdown/>
        </div>
     );
}
 
export default CollectionsContainer;