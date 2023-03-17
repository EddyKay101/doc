import React from 'react';
const { deckOfCards } = require('../utils/deck');
const { dealCard, shuffle } = require('../utils/helpers');



test('should shuffle card deck', () => {
  const setCardArr = jest.fn();
  const setSelectedCard = jest.fn();
  const useStateSpy: any = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((initialState: any) => [initialState, setCardArr]);
  useStateSpy.mockImplementation((initialState: any) => [initialState, setSelectedCard]);

  const deck = deckOfCards;
  const shuffledDeck = shuffle([...deck], setCardArr, setSelectedCard);
  expect(deck).not.toEqual(shuffledDeck);
});

test('should deal card and sort accordingly', () => {


  const deck = [
    {
      suit: 'diamonds',
      rank: '2',
      color: 'red',
      index: 1
    },
    {
      suit: 'clubs',
      rank: '3',
      color: 'black',
      index: 2
    },
    {
      suit: 'clubs',
      rank: 'A',
      color: 'black',
      index: 3
    },
    {
      suit: 'spades',
      rank: '6',
      color: 'black',
      index: 4
    },
    {
      suit: 'clubs',
      rank: 'K',
      color: 'black',
      index: 5
    },
  ];
  const cards = [
    {
      suit: 'diamonds',
      rank: '2',
      color: 'red',
      index: 1
    },
    {
      suit: 'clubs',
      rank: '3',
      color: 'black',
      index: 2
    },
    {
      suit: 'clubs',
      rank: 'A',
      color: 'black',
      index: 3
    },
    {
      suit: 'clubs',
      rank: 'K',
      color: 'black',
      index: 5
    },
  ];
  const setCardArr = jest.fn();
  const setSelectedCard = jest.fn();
  const useStateSpy: any = jest.spyOn(React, 'useState');

  useStateSpy.mockImplementation((initialState: any) => [initialState, setCardArr]);
  useStateSpy.mockImplementation((initialState: any) => [initialState = cards, setSelectedCard]);

  dealCard([...deck], setCardArr, setSelectedCard, cards);

  expect(cards).toEqual([{ "color": "black", "index": 2, "rank": "3", "suit": "clubs" }, { "color": "black", "index": 5, "rank": "K", "suit": "clubs" }, { "color": "black", "index": 4, "rank": "6", "suit": "spades" }, { "color": "black", "index": 4, "rank": "A", "suit": "clubs" }, { "color": "red", "index": 1, "rank": "2", "suit": "diamonds" }]);
});

