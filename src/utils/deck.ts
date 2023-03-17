import { Card, Deck } from "../model/DeckOfCards.model";

const SUITS: string[] = ["clubs", "spades", "hearts", "diamonds"];
const RANKS: string[] = [
    "2",
    "3",
    "5",
    "4",
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

const deckArr = () => {
    const deck: any = [];
    let color: any;
    SUITS.forEach((suit) => {
        suit === "clubs" || suit === "spades"
            ? (color = "black")
            : (color = "red");
        RANKS.forEach((rank) => {
            deck.push({
                suit,
                rank,
                color,
                index: deck.length + 1,
            });
        });
    });
    return [...deck];
};

export const deckOfCards = deckArr();
