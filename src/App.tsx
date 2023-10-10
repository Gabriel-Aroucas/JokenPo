import './App.css'
import HandRock from './assets/HandRock.png'
import Hand from './assets/Hand.png'
import HandScissors from './assets/HandScissors.png'
import Unknown from './assets/unknown.png'
import { useState,useEffect } from 'react'

const App = () => {
 
  const [choice, setchoice] = useState(Unknown);
  const [playerOne, setPlayerOne] = useState(Unknown);
  const [playerTwo, setPlayerTwo] = useState(Unknown);
  const options = [HandRock,Hand,HandScissors]

  const [toggleButton,settoggleButton] = useState(true)
  

  useEffect(()=>{
    setPlayerOne(choice)
  },[choice])

  const validateToPlayGame = ()=>{
    if(choice == Unknown){
      alert('Escolha uma opção')
    }else if(toggleButton == true){
      playGame()
    }
  }

  const playGame = ()=>{
    settoggleButton(false)

    const animationGame = setInterval(()=>{
      const randomize = Math.floor(Math.random()*3);
      setPlayerTwo(options[randomize])
    },300)

    setTimeout(() => {
      clearInterval(animationGame)
      settoggleButton(true)
      
    }, 5000);
    
    
    
  }


  return (
      <>
      <header className='score'>
        <span>0</span>
        <span>x</span>
        <span>0</span>
      </header>

      <section className='modalOfPlayers' >
        <div className="modalPlayerOne">
          <img src={playerOne} width={'250px'} alt="the choice player image" />
        </div>
        <div>
          <span>x</span>
        </div>
        <div className="modalPlayerTwo">
          <img src={playerTwo} width={'250px'} alt="the choice player image" />
        </div>
      </section>

      <section className="menuOfChoice">
        <img src={HandRock} onClick={()=> setchoice(HandRock)} alt="icons to choice" />
        <img src={Hand} onClick={()=>setchoice(Hand)} alt="icons to choice" />
        <img src={HandScissors} onClick={()=> setchoice(HandScissors)} alt="icons to choice" />
      </section>

      <section className="buttonPlayGame">
        <button type='button' onClick={validateToPlayGame}>Jogar</button>
      </section>
      </>    
  )
}

export default App