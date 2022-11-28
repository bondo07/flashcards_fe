import React, { useState } from "react";
import AddCardButton from "../AddCardButton/AddCardButton";
import EditCardButton from "../EditCardButton/EditCardButton";
import Card from "../Card/Card";
import NextPrevButton from "../NextPrevButton/NextPrevButton";
import DeleteCardButton from "../DeleteCardButton/DeleteCardButton";

const CardViewer = ({
  cards,
  collection,
  setShowEditModal,
  setShowAddModal,
  setShowDeleteModal,
  currentCard,
  setCurrentCard,
  showCard,
}) => {

  return showCard ? (
    <div>
      <DeleteCardButton setShowDeleteModal={setShowDeleteModal} />
      <Card
        cards={cards}
        collection={collection}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        showCard={showCard}
      />
      <NextPrevButton
        cards={cards}
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
      />
      <AddCardButton setShowAddModal={setShowAddModal} />
      <EditCardButton setShowEditModal={setShowEditModal} />
    </div>
  ) : null;
};

export default CardViewer;
