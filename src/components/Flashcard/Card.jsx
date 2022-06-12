import { useState } from "react";
import EditCard from "../Flashcard/EditCard";
import "../Flashcard/Card.css";

export default function Card({
  currentCard,
  cardNumber,
  deleteCard,
  updateCard,
  setCardSide,
}) {
  const [editCard, setEditCard] = useState(false);

  const editToggle = () => {
    setEditCard(!editCard);
  };

  return (
    <div className="card-section">
      {editCard === false ? (
        <div className="small-card">
          <div className="small-card-buttons">
            <button className="edit-button" onClick={editToggle} >EDIT</button>
            <button
              className="delete-button"
              onClick={() => {
                setCardSide("front");
                deleteCard(currentCard);
              }}>DELETE
            </button>
          </div>
          <p>{currentCard.front}</p>
        </div>
      ) : (
        <EditCard
          currentCard={currentCard}
          setEditCard={setEditCard}
          updateCard={updateCard}
          cardNumber={cardNumber}
        />
      )}
    </div>
  );
}
