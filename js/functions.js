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

  let deck = generateDeck();

  // function to generate a new 52 desk of cards
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

  // *WIP* - to be continued
})();
