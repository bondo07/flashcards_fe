import React, { useState } from 'react';
import Collection from '../Collection/Collection';
import './CollectionsDropdown.css'

const CollectionsDropdown = (props) => {

    // const [open, setOpen] = useState(false);

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     let returnedCollections = collections.map((collection) => {blank

    //     })
    // }

    return ( 
        <div>
            <select>
                <options>Choose Collection ↓</options>
                {props.allCollections.map((collection) => {
                    return(
                        <option>{collection.title}</option>
                    )
                })
                }
            </select>
            {/* <button type='button' className='dropdown_button' onClick={() => setOpen(!open)}>Choose Collection ↓</button> */}
            <Collection/>
        </div>
     );
}
 
export default CollectionsDropdown;