import QuizCard from "../../components/Flashcard/QuizCard";
import "./FlashCardHomePage.css";

export default function FlashCardHomePage({
  quizMode,
  selectedDeck,
  questionNumber,
  setQuestionNumber,
  cardSide,
  setCardSide,
  userDecks,
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
      setQuestionNumber(selectedDeck.deck.length - 1);
    } else {
      setQuestionNumber(questionNumber - 1);
    }
    setCardSide("front");
  };

  return (
    <body className="FCHP">
    <div className="home-page">
      <div className="sidebar-block"></div>
      {quizMode === false ? (
        <div>
          <h1 className="home-page-title">Your flashcards will play here 👇🏼</h1>
          <p>Select a deck to get started!</p>
        </div>
      ) : (
        <div>
          <h1 className="home-page-title">Practice Time!</h1>
          <h2 className="selected-deck-title">{selectedDeck.name}</h2>
          <h3 className="card-number">{`${questionNumber + 1}/${
            selectedDeck.length
          }`}</h3>
          { selectedDeck.flashcards.map( f => <div className="quiz-section">
            <button
              className="change-question-button"
              onClick={decrementQuestionNumber}
              >⇦</button>
            <QuizCard
              selectedDeck={selectedDeck}
              questionNumber={questionNumber}
              cardSide={cardSide}
              setCardSide={setCardSide}
              card={f}
              />
            <button
              className="change-question-button"
              onClick={incrementQuestionNumber}
              >⇨</button>
          </div>)}
        </div>
      )}
    </div>
      </body>
  );
}
