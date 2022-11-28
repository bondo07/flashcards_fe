import "./EditCardButton.css";
const EditCardButton = ({ setShowEditModal }) => {
  const handleEditModal = () => setShowEditModal(true);

  return (
    <button className="edit-card" onClick={handleEditModal}>
      Edit Card
    </button>
  );
};

export default EditCardButton;
