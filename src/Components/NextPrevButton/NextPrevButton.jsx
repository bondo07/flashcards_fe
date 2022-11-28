import "./NextPrevButton.css";

const NextPrevButton = ({ cards, currentCard, setCurrentCard }) => {
  const handleNextCard = () => {
    const next = currentCard + 1;
    if (next + 1 > cards.length) {
      setCurrentCard(0);
    } else {
      setCurrentCard(next);
    }
  };

  const handlePrevCard = () => {
    const prev = currentCard - 1;
    if (prev < 0) {
      setCurrentCard(cards.length - 1);
    } else {
      setCurrentCard(prev);
    }
  };

  return (
    <>
      <div>
        <button className="prev-button" onClick={handlePrevCard}>
          &#8249;
        </button>
      </div>
      <div>
        <button className="next-button" onClick={handleNextCard}>
          &#8250;
        </button>
      </div>
    </>
  );
};

export default NextPrevButton;
