import cardBack from '../assets/images/cardBack.png';
import spades from '../assets/images/spade.png';
import clubs from '../assets/images/club.png';
import hearts from '../assets/images/heart.png';
import diamonds from '../assets/images/diamond.png';
import '../styles/components/PlayingCard.css';

interface Props {
    suit: string;
    rank: any;
    cardFront: boolean;
    color: string;
}

const PlayingCard = ({ suit, rank, cardFront, color }: Props) => {
    const handleGetCardIcon = (suit: string) => {
        let icon;
        switch (suit) {
            case "spades":
                return icon = spades;
            case "clubs":
                return icon = clubs;
            case "hearts":
                return icon = hearts;
            case "diamonds":
                return icon = diamonds;
            default:
                return icon;
        };
    };

    if (cardFront) {
        const cardIcon = handleGetCardIcon(suit);
        return (
            <div className="card-container" style={{ color: `${color}` }}>
                <div className='top-icon-container'>
                    <div style={{ maxWidth: 20 }}>{rank}</div>
                    <img className='card-icon' src={cardIcon} alt="suit-icon" />
                </div>
                <div>
                    <img className='card-icon' src={cardIcon} alt="suit-icon" style={{ height: 40, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                </div>
                <div className='bottom-icon-container'>
                    <div style={{ maxWidth: 20 }}>{rank}</div>
                    <img className='card-icon' src={cardIcon} alt="suit-icon" />
                </div>
            </div>
        );
    } else {
        return (
            <div className="card-container" style={{ backgroundImage: `url(${cardBack})`, color: `${color}` }}></div>
        )
    }

};



export default PlayingCard;