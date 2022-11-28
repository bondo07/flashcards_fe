import './DeleteCardButton.css'
const DeleteCardButton = ({setShowDeleteModal}) => {

    const handleDeleteModal = () => setShowDeleteModal(true);

    return ( 
        <button className="delete-card" onClick={handleDeleteModal}>Delete Card</button>
     );
}
 
export default DeleteCardButton;