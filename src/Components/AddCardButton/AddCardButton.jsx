import "./AddCardButton.css";
const AddCardButton = ({ setShowAddModal }) => {
  const handleAddModal = () => setShowAddModal(true);

  return (
    <button className="add-card" onClick={handleAddModal}>
      Add Card
    </button>
  );
};

export default AddCardButton;
