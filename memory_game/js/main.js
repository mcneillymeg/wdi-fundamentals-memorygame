var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardOne = 'cards' [0];
cardsInPlay.push('cardOne');
console.log('User flipped queen')

var cardTwo = cards[3]
cardsInPlay.push('cardThree');
console.log('user flipped king');

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert('you found a match');
} else {
	alert('sorry, try again');
}

