export default class Card {

	constructor(rank, suit) {
		this.rank = rank;
		this.suit = suit;
	}

	outputCard() {
		console.log(`${this.rank} of ${this.suit}`);
	}

}