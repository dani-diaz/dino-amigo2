import { useState, useEffect } from "react";
import "../Flashcard/Card.css";

export default function QuizCard({
  selectedDeck,
  questionNumber,
  cardSide,
  setCardSide,
}) {
  const [cardContent, setCardContent] = useState(
    selectedDeck.content[questionNumber]
  );

  useEffect(() => {
    setCardSide("front");
  }, [setCardSide]);

  useEffect(() => {
    setCardContent(selectedDeck.content[questionNumber]);
  }, [cardContent, questionNumber, selectedDeck]);

  const flipCard = () => {
    cardSide === "front" ? setCardSide("back") : setCardSide("front");
  };

  return (
    <div className="quiz-card">
      <div className="quiz-card-top">
        <button className="flip-card-button" onClick={flipCard} >➰</button>
      </div>
      <div className="quiz-card-content">
        {selectedDeck.content.length === 0 ? (
          <p>This deck is empty</p>
        ) : (
          <div>
            {cardSide === "front" ? (
              <p>{cardContent.front}</p>
            ) : (
              <p>{cardContent.back}</p>
            )}
          </div>
        )}
      </div>
      <div className="quiz-card-bottom"></div>
    </div>
  );
}
