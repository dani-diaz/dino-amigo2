import QuizCard from "../../components/Flashcard/QuizCard";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import "./FlashCardHomePage.css";

export default function FlashCardHomePage({
  quizMode,
  selectedDeck,
  questionNumber,
  setQuestionNumber,
  cardSide,
  setCardSide,
}) {

  const incrementQuestionNumber = () => {
    if (questionNumber < selectedDeck.content.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuestionNumber(0);
    }
    setCardSide("front");
  };


  const decrementQuestionNumber = () => {
    if (questionNumber === 0) {
      setQuestionNumber(selectedDeck.content.length - 1);
    } else {
      setQuestionNumber(questionNumber - 1);
    }
    setCardSide("front");
  };

  return (
    <div className="home-page">
      <div className="sidebar-block"></div>
      {quizMode === false ? (
        <div>
          <h1 className="home-page-title">Flashcards Home Page</h1>
          <p>Select a deck to get started!</p>
        </div>
      ) : (
        <div>
          <h1 className="home-page-title">Practice Time!</h1>
          <h2 className="selected-deck-title">{selectedDeck.data.name}</h2>
          <h3 className="card-number">{`${questionNumber + 1}/${
            selectedDeck.content.length
          }`}</h3>
          <div className="quiz-section">
            <button
              className="change-question-button"
              onClick={decrementQuestionNumber}
            >⇦</button>
            <QuizCard
              selectedDeck={selectedDeck}
              questionNumber={questionNumber}
              cardSide={cardSide}
              setCardSide={setCardSide}
            />
            <button
              className="change-question-button"
              onClick={incrementQuestionNumber}
            >⇨</button>
          </div>
        </div>
      )}
    </div>
  );
}
