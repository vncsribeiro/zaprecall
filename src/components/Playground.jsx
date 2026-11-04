import logo from '../assets/images/logo.png'
import data from '../data/data'
import Flashcard from './Flashcard'
import Sidebar from './Sidebar';
import { useState } from 'react';

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

    function changeIcon(isAnswered) {
        if (isAnswered === 'error') {
            return <ion-icon name="close-circle" style={{ color: 'var(--cor-vermelha)' }}></ion-icon>
        } else if (isAnswered === 'almost') {
            return <ion-icon name="help-circle" style={{ color: 'var(--cor-amarela)' }}></ion-icon>
        } else {
            return <ion-icon name="checkmark-circle" style={{ color: 'var(--cor-verde)' }}></ion-icon>
        }
    }

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
                        setResult={setResult}
                        result={result}
                        changeIcon={changeIcon}
                    />)}
            </div>
            <Sidebar deck={deck} result={result} changeIcon={changeIcon}/>
        </div>

    )
}