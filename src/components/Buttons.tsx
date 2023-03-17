import '../styles/components/Button.css';

interface Props {
    shuffle: () => void;
    dealCard: () => void;
    flipCard: () => void;
    deck?: []
}
const Buttons = ({ shuffle, dealCard, flipCard }: Props) => {
    return (
        <div style={{ margin: "40px auto", textAlign: "center" }}>
            <button onClick={() => shuffle()}>Shuffle</button>
            <button onClick={() => dealCard()}>Deal card</button>
            <button onClick={() => flipCard()}>Flip</button>
        </div>
    );
};




export default Buttons;