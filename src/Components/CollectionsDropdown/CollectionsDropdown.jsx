import Collection from '../Collection/Collection';
import './CollectionsDropdown.css'

const CollectionsDropdown = ({collections, setActiveCollectionId, activeCollectionId}) => {

    const handleSelect = (e) => {
        e.preventDefault();
        setActiveCollectionId(activeCollectionId)
    }
   


    return ( 
        <div>
            <select onClick={handleSelect}>
                {collections.map((collection) => {
                    return(
                        <Collection collection={collection}
                        setActiveCollectionId={setActiveCollectionId}
                        collections={collections}/>
                    )
                })
                }
            </select>
        </div>
     );
}
 
export default CollectionsDropdown;