import React, { useState, useEffect } from 'react';
import './App.css';
import PlayingCard from './components/PlayingCard';
import Buttons from './components/Buttons';
import { deckOfCards } from './utils/deck';
import { Card } from './model/DeckOfCards.model';
import { dealCard, shuffle, flipCard } from './utils/helpers';

function App(): JSX.Element {
  const [cardArr, setCardArr] = useState<Card[]>([]);
  const [cardFront, setCardFront] = useState<boolean>(true);
  const [cardSelected, setSelectedCard] = useState<Card[]>([]);


  useEffect(() => {
    setCardArr(() => deckOfCards);
  }, []);

  return (
    <div className="App">
      <div className="App">
        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px auto 0px 180px', height: 282 }}>
          {cardArr &&
            cardArr.map((card: Card, index: number) => {
              return (
                <div key={index}>
                  <PlayingCard suit={card.suit} rank={card.rank} color={card.color} cardFront={cardFront} />
                </div>
              );
            })}
        </div>
        <Buttons shuffle={() => shuffle(deckOfCards, setCardArr, setSelectedCard)} dealCard={() => dealCard(cardArr, setCardArr, setSelectedCard, cardSelected)} flipCard={() => flipCard(setCardFront, cardFront)} />

        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px auto 0px 180px' }}>
          {cardSelected &&
            cardSelected.map((card: Card, index: number) => {
              return (
                <div className="animated slideInUp" key={index}>
                  <PlayingCard suit={card.suit} rank={card.rank} color={card.color} cardFront={true} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
