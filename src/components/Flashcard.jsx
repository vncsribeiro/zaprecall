import data from "../data/data";
import btnPlay from "../assets/images/play-outline.svg"
import {useState} from 'react';


export default function Flashcard({index}) {
    const [tapped, setTapped] = useState(false);
    
    return (
        <div className="flashcard" onClick={() => !tapped}>
           {`Pergunta ${index + 1}`}
           <img src={btnPlay}/>
        </div>
    );
}