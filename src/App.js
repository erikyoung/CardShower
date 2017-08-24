import React, { Component } from 'react';
import Deck from './helpers/Deck.js';
import PlayingCard from './PlayingCard.js';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.setState({
      deck: new Deck()
    });
  }
  render() {
    const deck = this.state.deck;
    const cards = deck.cards.map(function(card, index) {
      return (
        <PlayingCard suit={card.suit} rank={card.rank} />

          ); 
    });
    return (
      <div className="App">
        <div className="App-header">
          <h1>Playing Cards</h1>
            <p>
              Object Oriented Programming and Templating in JavaScript
           </p>
          </div> 
            <div className="game">
              {cards}
            </div>
      </div>
    );
  }
}


export default App;
