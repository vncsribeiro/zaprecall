import data from "../data/data";
import btnPlay from "../assets/images/play-outline.svg"
import seta from "../assets/images/setinha.png"
import { useState } from 'react';


function ShowQuestion({ question, answer }) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <div className="flashcard face-up">
                {isClicked ? (
                    <>
                        {answer}
                        <div className="container-button">
                            <div className="button-answer error">
                                <span>Não lembrei</span>
                            </div>
                            <div className="button-answer almost">
                                <span>Quase não lembrei</span>
                            </div>
                            <div className="button-answer zap">
                                <span>Zap!</span>
                            </div>
                        </div>
                    </>

                ) : (
                    <>
                        {question}
                        <img src={seta} onClick={() => setIsClicked(true)} />
                    </>
                )}
            </div>
        </>
    );
}

export default function Flashcard({ index, question, answer }) {
    const [tapped, setTapped] = useState(false);

    return (
        <>
            {!tapped ? (
                <div className="flashcard face-down" onClick={() => setTapped(true)}>
                    {`Pergunta ${index + 1}`}
                    <img src={btnPlay} />
                </div>) : <ShowQuestion question={question} answer={answer} />
            }
        </>

    );
}