import logo from '../assets/images/logo.png'
import data from '../data/data'
import Flashcard from './Flashcard'

const deck = [];

function createDeck() {
    data.forEach((value) => {
        deck.push({...value})
    });

    deck.sort(() => Math.random() - 0.5);
}

createDeck();

export default function Playground() {

    return (
        
        <div className="container">
            <div className="header">
                <img src={logo} alt="logo" />
                <h1>Zap Recall</h1>
            </div>
            <div className='main'>
                {data.map((value, index) => 
                <Flashcard 
                key={index} 
                index={index}
                />)}
            </div>
        </div>

    )
}