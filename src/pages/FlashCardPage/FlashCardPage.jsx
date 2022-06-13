import { useState, useEffect } from "react";
import FlashCardHomePage from "../FlashCardHomePage/FlashCardHomePage.jsx";
import SideBar from "../../components/FlashcardContainer/SideBar.jsx";
// import { initialDecks } from "../../initialDecks.js";
import * as decksAPI from "../../utilities/decks-api";



export default function FlashCardPage() {
  const [userDecks, setUserDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState({});
  const [addQuestionsView, setAddQuestionsView] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [cardSide, setCardSide] = useState("front");
  const [allCards, setAllCards] = useState([]);

 
  useEffect(() => {
    async function getDecks() {
      const decks= await decksAPI.getAll();
    setUserDecks(decks);
    }
  getDecks();
  }, []);

  useEffect(() => {
    localStorage.setItem("deck-list", JSON.stringify(userDecks));
  });


  const createNewDeck = () => {
    const newDeck = {
      deckName: "Click title area to name your new deck",
    };
    setUserDecks([...userDecks, newDeck]);
  };

  const addCard = () => {
    const newCard = { front: "Front Side", back: "Back Side" };
   setAllCards([...allCards, newCard]);

    // const updatedDeckData = {
    //   id: index,
    //   data: selectedDeck.data,
    //   content: newCardList,
    // };

    // setSelectedDeck(updatedDeckData);

    // const newDecks = [...userDecks];

    // newDecks
    //   .filter((deck) => deck.id !== selectedDeck.id)
    //   .splice(index, 1, updatedDeckData);

    // setUserDecks(newDecks);
  };

  const deleteCard = (currentCard) => {
    const filteredCardList = selectedDeck.content.filter(
      (card) => card.front !== currentCard.front
    );
    userDecks.filter((deck) => deck.id !== selectedDeck.id);

    const newSelectedDeck = {
      id: selectedDeck.id,
      data: selectedDeck.data,
      content: filteredCardList,
    };
    setSelectedDeck(newSelectedDeck);

    const newDecks = [...userDecks];
    newDecks.splice(selectedDeck.id, 1, newSelectedDeck);

    setUserDecks(newDecks);
  };

  const updateCard = async (deck, front, back) => {
    console.log(deck);
    const newCardData = { front: front, back: back };
    const flashcard = await decksAPI.addFlashcard(newCardData, deck._id);
    const updatedDecks = userDecks.filter(d => d._id === deck._id ? d.flashcards.push(flashcard) : d.flashcards );
    setUserDecks(updatedDecks);
    setAllCards([]);

    // const cardList = [...selectedDeck.content];
    // cardList.splice(index, 1, newCardData);

    // const newSelectedDeckData = {
    //   id: selectedDeck.id,
    //   data: selectedDeck.data,
    //   content: cardList,
    // };
    // setSelectedDeck(newSelectedDeckData);

    // const newDecks = [userDecks];

    // newDecks.splice(selectedDeck.id, 1, newSelectedDeckData);

    // setUserDecks(newDecks);
  };

  const removeDeck = async (deck) => {
    const removedDeck = await decksAPI.deleteDeck(deck._id);
    const updatedDeck= userDecks.filter(deck => removedDeck._id !== deck._id);
    setUserDecks(updatedDeck);
  };

  return (
    <body className="flashcardpagebody">
    <br />
    <h1>You can use this page to create flashcards to study what you've learned! </h1>
    <br />
    <div className="FlashCard">
      <SideBar
        allCards={allCards}
        userDecks={userDecks}
        setUserDecks={setUserDecks}
        removeDeck={removeDeck}
        createNewDeck={createNewDeck}
        addQuestionsView={addQuestionsView}
        setAddQuestionsView={setAddQuestionsView}
        selectedDeck={selectedDeck}
        setSelectedDeck={setSelectedDeck}
        addCard={addCard}
        quizMode={quizMode}
        setQuizMode={setQuizMode}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        cardSide={cardSide}
        setCardSide={setCardSide}
        deleteCard={deleteCard}
        updateCard={updateCard}
        />
      <FlashCardHomePage
        userDecks={userDecks}
        setUserDecks={setUserDecks}
        quizMode={quizMode}
        setQuizMode={setQuizMode}
        selectedDeck={selectedDeck}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        cardSide={cardSide}
        setCardSide={setCardSide}
        deleteCard={deleteCard}
        />
    </div>
        </body>
  );
}