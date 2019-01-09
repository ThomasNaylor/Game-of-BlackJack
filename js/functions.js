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
  const deck = generateDeck();

  // shuffle deck of cards and assign to a variable
  let shuffle = shuffleDeck(deck);

  // controls
  let btnPlay = document.getElementById('play');
  let btnHit = document.getElementById('hit');
  let btnStay = document.getElementById('stay');

  // score display
  let playerScoreEl = document.getElementById('player-score');
  let dealerScoreEl = document.getElementById('player-score');

  let playerScore = 0;
  let dealerScore = 0;

  // board display
  let playerBoardEl = document.getElementsByClassName('p-board-img');
  let dealerBoardEl = document.getElementsByClassName('d-board-img');

  // assign dealer and player their starting cards
  const playerCards = [dealCards(shuffle), dealCards(shuffle)];
  const dealerCards = [dealCards(shuffle), dealCards(shuffle)];

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
    let length = array.length;

    while(length > 0) {
      let randIndex = Math.floor(Math.random() * length);

      length--;

      let temp = array[length];
      array[length] = array[randIndex];
      array[randIndex] = temp;
    }
    return array;
  }

  // deal cards
  function dealCards(deck) {
    let hand = [];

    hand.push(deck.shift());

    return hand;
  }
  // *WIP* - to be continued
})();
