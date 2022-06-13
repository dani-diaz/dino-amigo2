import { useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { BsBoxArrowInRight } from "react-icons/bs";
import "../Deck/Deck.css"
import * as decksAPI from '../../utilities/decks-api';

export default function Deck({
  deck,
  removeDeck,
  setAddQuestionsView,
  setSelectedDeck,
  userDecks,
  setUserDecks,
  setQuizMode,
  setQuestionNumber,
  setCardSide,
}) {
  const [deckTitle, setDeckTitle] = useState('');
  const [changingName, setChangingName] = useState(false);
  const [selDeck, setSelDeck] = useState();

 
  const changeDeckName = () => {
    setChangingName(true);
  };

  const titleChange = (event) => {
    setDeckTitle(event.target.value);
  };


  const titleSubmit = async () => {
    console.log('hello');
    setChangingName(false);

    const deck = await decksAPI.createDeck(deckTitle);
    setUserDecks([...userDecks, deck])
    setSelDeck(deck)
  };
console.log(changingName);
  return (
    <div className="deck" key={`deck ${deck.id}`}>
      {changingName === false ? (
        <p onClick={changeDeckName} className="deck-title">
          {deck.deckTitle || "click here"}
        </p>
      ) : (
        <div className="edit-deck">
          <input
          placeholder="wheres deck name"
            className="edit-deck-name"
            type="text"
            value={deckTitle}
            name="deckTitle"
            onChange={titleChange}
          ></input>
          <button className="save-deck" onClick={titleSubmit} >
            Save
          </button>
        </div>
      )}
      <p
        className="add-cards-button"
        onClick={() => {
          setCardSide("front");
          setSelectedDeck(deck);
          setAddQuestionsView(true);
        }}
      >
        Add cards
      </p>

      <div className="deck-buttons">
        <GoTrashcan
          className="remove-deck-button"
          onClick={() => {
            removeDeck(deck);
            setQuizMode(false);
          }}
        />
        <BsBoxArrowInRight
          className="view-deck-button"
          onClick={() => {

            setQuestionNumber(0);
            setCardSide("front");
            setSelectedDeck(deck);
            setQuizMode(true);
          }}
        />
      </div>
    </div>
  );
}
