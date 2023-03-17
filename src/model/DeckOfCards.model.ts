export interface Card {
    suit: string;
    rank: string;
    color: string;
    index: number;
}

export interface Deck {
    cards: Card[];
}
