import { useState } from 'react'
import logo from './assets/images/logo.png'
import Playground from './components/Playground';

function App() {
  const [visible, setVisible] = useState(true);

  return (
    visible ? 
    (<div className="home">
      <img src={logo} alt="logo"/>
      <h1>Zap Recall </h1>
      <button onClick={() => setVisible(false)}>Iniciar recall!</button>
    </div>) : <Playground />   
  )
}

export default App
