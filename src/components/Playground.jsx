import logo from '../assets/images/logo.png'
import data from '../data/data'
import Flashcard from './Flashcard'

export default function Playground() {
    
    function shuffle() {
        return Math.random() - 0.5
    }
    
    data.sort(shuffle);

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