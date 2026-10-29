import btnPlay from "../assets/images/play-outline.svg"
import seta from "../assets/images/setinha.png"
import { useState } from 'react';


function ShowQuestion({ question, answer, index, setIsAnswered }) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <div className="flashcard face-up">
                {isClicked ? (
                    <>
                        {answer}
                        <div className="container-button">
                            <div className="button-answer error" onClick={() => setIsAnswered('error')}>
                                <span>Não lembrei</span>
                            </div>
                            <div className="button-answer almost" onClick={() => setIsAnswered('almost')}>
                                <span>Quase não lembrei</span>
                            </div>
                            <div className="button-answer zap" onClick={() => setIsAnswered('zap')}>
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
    const [isAnswered, setIsAnswered] = useState(null);
    const [isTapped, setIsTapped] = useState(false);

    function changeIcon(isAnswered) {
        if(isAnswered === 'error') {
            return <ion-icon name="close-circle"></ion-icon>
        } else if (isAnswered === 'almost') {
            return <ion-icon name="help-circle"></ion-icon>
        } else {
            return <ion-icon name="checkmark-circle"></ion-icon>
        }
    }

    return (
        <>
            {isAnswered !== null 
            ? (
                <div className="flashcard face-down">
                    {`Pergunta ${index + 1}`}
                    {changeIcon(isAnswered)}
                </div>
            )
            : (
                !isTapped ? (
                <div className="flashcard face-down" onClick={() => setIsTapped(true)}>
                    {`Pergunta ${index + 1}`}
                    <img src={btnPlay} />
                </div>) : <ShowQuestion  setIsAnswered={setIsAnswered} index={index} question={question} answer={answer} />
            )
            }
        </>

    );
}


