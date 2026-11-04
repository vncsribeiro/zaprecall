import btnPlay from "../assets/images/play-outline.svg"
import seta from "../assets/images/setinha.png"
import { useState } from 'react';



function ShowQuestion({ question, answer, handleAnswer }) {
    const [isClicked, setIsClicked] = useState(false);



    return (
        <>
            <div className="flashcard face-up">
                {isClicked ? (
                    <>
                        {answer}
                        <div className="container-button">
                            <div className="button-answer error" onClick={() => { handleAnswer('error') }}>
                                <span>Não lembrei</span>
                            </div>
                            <div className="button-answer almost" onClick={() => {  handleAnswer('almost') }}>
                                <span>Quase não lembrei</span>
                            </div>
                            <div className="button-answer zap" onClick={() => { handleAnswer('zap') }}>
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

export default function Flashcard({ index, question, answer, result, setResult, changeIcon}) {
    const [isAnswered, setIsAnswered] = useState(null);
    const [isTapped, setIsTapped] = useState(false);
    const [icon, setIcon] = useState();

    function handleAnswer(answer) {
        setIsAnswered(answer);
        setResult([...result, answer]);
    }

    


    return (
        <>
            {isAnswered !== null
                ? (
                    <div className={`flashcard face-down answered-${isAnswered}`}>
                        {`Pergunta ${index + 1}`}
                        {changeIcon(isAnswered)}
                    </div>
                )
                : (
                    !isTapped ? (
                        <div className="flashcard face-down" onClick={() => setIsTapped(true)}>
                            {`Pergunta ${index + 1}`}
                            <img src={btnPlay} />
                        </div>) : <ShowQuestion setIsAnswered={setIsAnswered} index={index} question={question} answer={answer} handleAnswer={handleAnswer} />
                )
            }

        </>

    );
}


