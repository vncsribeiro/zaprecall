import logoPequeno from '../../assets/images/logo-pequeno.png'
import './style.css'

export default function Playground() {
    return (
        <>
            <div className="header"> 
                <img src={logoPequeno} alt="logo-pequeno" />
                <h1>Zap Recall</h1>
            </div>
         
        </>
        
    )
}