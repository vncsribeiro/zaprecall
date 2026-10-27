import { useState } from 'react'
import logo from './assets/images/logo.png'


function App() {
  

  return (
    <>
      <div className="home">
          <img src={logo} alt="logo"/>
          <h1>Zap Recall </h1>
          <button>Iniciar recall!</button>
      </div>   
    </>
  )
}

export default App
