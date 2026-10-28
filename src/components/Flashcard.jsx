import data from "../data/data";
import btnPlay from "../assets/images/play-outline.svg"

export default function Flashcard({index}) {
    
    return (
        <div className="flashcard">
           {`Pergunta ${index + 1}`}
           <img src={btnPlay}/>
        </div>
    );
}