import "./DeleteCard.css";
import axios from "axios";

const DeleteCard = ({
  getAllCardsPerCollection,
  activeCollectionId,
  showCard,
  onClose,
}) => {
  async function deleteCard() {
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/collections/${activeCollectionId}/cards/${showCard.id}/`
    );
    if (response.status === 204) {
      await getAllCardsPerCollection();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteCard();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="del-card-label">
          Card to Delete: {showCard.word}
        </label>
        <button type="submit">Delete Card</button>
        <div className="cancel-button">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default DeleteCard;
