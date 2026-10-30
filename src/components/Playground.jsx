import logo from '../assets/images/logo.png'
import data from '../data/data'
import Flashcard from './Flashcard'
import Sidebar from './Sidebar';
import {useState} from 'react';

const deck = [];

function createDeck() {
    data.forEach((value) => {
        deck.push({ ...value })
    });

    deck.sort(() => Math.random() - 0.5);
}

createDeck();

export default function Playground() {
    const [result, setResult] = useState([]);

    return (

        <div className="container">
            <div className="header">
                <img src={logo} alt="logo" />
                <h1>Zap Recall</h1>
            </div>
            <div className='main'>
                {deck.map((value, index) =>
                    <Flashcard
                        key={index}
                        index={index}
                        question={value.question}
                        answer={value.answer}
                        
                    />)}
            </div>
            <Sidebar />
        </div>

    )
}