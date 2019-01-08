/* Game of BlackJack
*  Thomas Naylor
*  HTML, CSS, Bootstrap, JavaScript
*/

(function() {
  // global variable setup
  const suits = ['spades', 'clubs', 'hearts', 'diamonds'];
  const cards = ['ace','two','three', 'four', 'five', 'six',
                 'seven', 'eight', 'nine', 'ten', 'jack',
                 'queen', 'king'];

  // generate deck of cards and assign to a variable
  let deck = generateDeck();

  // shuffle deck of cards and assign to a variable
  let shuffle = shuffleDeck(deck);

  // function to generate a new 52 deck of cards
  function generateDeck() {
    const data = [];

    for(let i = 0; i < suits.length; i++) {
      for(let j = 0; j < cards.length; j++) {
        data.push(
          { card: cards[j] + ' of ' + suits[i] }
        );
      }
    }
    return data;
  }

  // function to randomize the deck object array derived from the yates-fisher shuffle algorithm strategy
  function shuffleDeck(array) {
    let length = deck.length;

    while(length > 0) {
      let randIndex = Math.floor(Math.random() * length);

      length--;

      let temp = deck[length];
      array[length] = array[randIndex];
      array[randIndex] = temp;
    }
    return array;
  }

  // *WIP* - to be continued
})();
