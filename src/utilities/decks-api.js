import sendRequest from './send-request';
const BASE_URL = '/api/decks';

export function createDeck(deckTitle) {
  return sendRequest(BASE_URL, 'POST', { deckTitle });
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function deleteDeck(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function addFlashcard(card, id) {
   return sendRequest(`${BASE_URL}/${id}/flashcard`, 'POST', card );
}



