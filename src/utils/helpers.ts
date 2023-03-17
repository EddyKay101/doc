import { Card } from "../model/DeckOfCards.model";

type CardsArray = Card[];

type SetCardArr = React.Dispatch<React.SetStateAction<CardsArray>>;

type CardSelected = Card[];

type SetSelectedCard = React.Dispatch<React.SetStateAction<CardSelected>>;

type SetCard = React.Dispatch<React.SetStateAction<boolean>>;

const suitPriority: string[] = ["clubs", "spades", "hearts", "diamonds"];

const rankPriority: string[] = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
];

const dealCard = (
    cardsArray: CardsArray,
    setCardArr: SetCardArr,
    setSelectedCard: SetSelectedCard,
    cardSelected: CardSelected
): void => {
    const randomCard =
        cardsArray[Math.floor(Math.random() * cardsArray.length)];
    const newCardsArray = cardsArray.filter(
        (element: Card) => element.index !== randomCard.index
    );
    setCardArr(() => newCardsArray);
    let cardsSelectedArray = cardSelected;
    cardsSelectedArray.length < 52 && cardsSelectedArray.push(randomCard);
    cardsSelectedArray.sort((a: Card, b: Card) => {
        return (
            suitPriority.indexOf(a.suit) - suitPriority.indexOf(b.suit) ||
            rankPriority.indexOf(a.rank) - rankPriority.indexOf(b.rank)
        );
    });
    setSelectedCard(() => cardsSelectedArray);
};

const shuffle = (
    arr: CardsArray,
    setCardArr: SetCardArr,
    setSelectedCard: SetSelectedCard
): CardsArray => {
    let currentIndex = arr.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    setCardArr(() => arr);
    setSelectedCard(() => []);
    return arr;
};

const flipCard = (setCard: SetCard, cardFront: boolean): void => {
    setCard(!cardFront);
};

export { dealCard, shuffle, flipCard };
