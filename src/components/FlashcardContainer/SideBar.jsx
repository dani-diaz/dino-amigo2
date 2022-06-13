import Deck from "../../components/Deck/Deck.jsx";
import IconBar from "./IconBar";
import Card from "../../components/Flashcard/Card";
import "./SideBar.css";

export default function SideBar({
  userDecks,
  createNewDeck,
  removeDeck,
  addQuestionsView,
  setAddQuestionsView,
  selectedDeck,
  setSelectedDeck,
  setUserDecks,
  addCard,
  quizMode,
  setQuizMode,
  questionNumber,
  setQuestionNumber,
  cardSide,
  setCardSide,
  deleteCard,
  updateCard,
  allCards,
}) {
  console.log(selectedDeck);
  return (
    <div>
      {addQuestionsView === false ? (
        <div className="sidebar">
          <div className="sidebar-header">
          <IconBar
              setQuizMode={setQuizMode}
              setAddQuestionsView={setAddQuestionsView}
            />        
            <h1 className="sidebar-title">Flashcards</h1>
            <button className="add-deck-button" onClick={createNewDeck}>+</button> 
          </div>
          <div className="separator"></div>
          {userDecks.map((userDeck, i) => (
            <Deck
              key={`deck ${i}`}
              deck={userDeck}
              removeDeck={removeDeck}
              setAddQuestionsView={setAddQuestionsView}
              setSelectedDeck={setSelectedDeck}
              userDecks={userDecks}
              setUserDecks={setUserDecks}
              setQuizMode={setQuizMode}
              setQuestionNumber={setQuestionNumber}
              setCardSide={setCardSide}
            />
          ))}
        </div>
      ) : (
        <div className="sidebar">
          <div className="sidebar-header">
          <IconBar
              setQuizMode={setQuizMode}
              setAddQuestionsView={setAddQuestionsView}
            />
            <h1 className="sidebar-title">{selectedDeck.name}</h1>
            <div className="deck-data">
              {/* <p className="deck-length">{selectedDeck.content.length} cards</p> */}
              {quizMode === false ? (
                <button
                  className="deck-button"
                  onClick={() => setQuizMode(!quizMode)}
                >▶</button>
              ) : (
                <button
                  className="deck-button"
                  onClick={() => setQuizMode(!quizMode)}
                >◾</button>
              )}
              <button className="deck-button" onClick={addCard}>+</button>
            </div>
          </div>
          <div className="separator"></div>
          {allCards
            ? allCards.map((currentCard, i) => (
                <Card
                  key={i}
                  currentCard={currentCard}
                  deleteCard={deleteCard}
                  updateCard={updateCard}
                  setCardSide={setCardSide}
                  selectedDeck={selectedDeck}
                />
              ))
            : null}
          {selectedDeck.flashcards.length
            ? selectedDeck.flashcards.map((currentCard, i) => (
                <Card
                  key={i}
                  currentCard={currentCard}
                  deleteCard={deleteCard}
                  updateCard={updateCard}
                  setCardSide={setCardSide}
                  selectedDeck={selectedDeck}
                />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
