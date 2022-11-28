import axios from "axios";
import React, { useState } from "react";
import './EditCard.css'

const EditCard = ({
  getAllCardsPerCollection,
  activeCollectionId,
  showCard
}) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  async function editCard(editedCard) {
    const response = await axios.put(
      `http://127.0.0.1:8000/api/collections/${activeCollectionId}/cards/${showCard.id}/`,
      editedCard
    );
    if (response.status === 200) {
      await getAllCardsPerCollection();
    }
  }

  const handleWord = (e) => setWord(e.target.value);
  const handleDefinition = (e) => setDefinition(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedCard = {
      word: word,
      definition: definition,
    };
    editCard(editedCard);
    setWord("");
    setDefinition("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label className="edit-word-label">Edit Word:</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Edit Card Title..."
            className="card-title"
            value={word}
            onChange={handleWord}
          />
        </div>
      </div>
      <div>
        <div>
          <label className="edit-def-label">Edit Definition:</label>
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Edit Card Definition..."
            className="card-def"
            value={definition}
            onChange={handleDefinition}
          />
        </div>
      </div>
      <div>
        <button className="edit-button" type="submit">Apply</button>
      </div>
    </form>
  );
};

export default EditCard;
