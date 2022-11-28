import './DeleteCardButton.css'
const DeleteCardButton = ({setShowDeleteModal}) => {

    const handleDeleteModal = () => setShowDeleteModal(true);

    return ( 
        <div className='delete-postition'>
            <button className="delete-card" onClick={handleDeleteModal}>Delete Card</button>
        </div>
     );
}
 
export default DeleteCardButton;