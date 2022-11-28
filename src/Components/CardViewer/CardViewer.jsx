import AddCardButton from "../AddCardButton/AddCardButton";
import EditCardButton from "../EditCardButton/EditCardButton";
import Card from "../Card/Card";
import NextPrevButton from "../NextPrevButton/NextPrevButton";
import DeleteCardButton from "../DeleteCardButton/DeleteCardButton";

const CardViewer = ({
  cards,
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
      <span>
        <h3>
          Card: {currentCard + 1} / {cards.length}
        </h3>
      </span>
      <Card
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
