import "./App.css";
import HandRock from "./assets/HandRock.png";
import Hand from "./assets/Hand.png";
import HandScissors from "./assets/HandScissors.png";
import Unknown from "./assets/unknown.png";
import { useState } from "react";
const App = () => {

  const [choice, setchoice] = useState(Unknown)
  const [choiceP2, setchoiceP2] = useState(Unknown)
 
  const menuOfChoice = [
    {
      id:'1',
      image: HandRock,
      title: "Hand Rock",
      alt: "An image of a Hand Rock",
      click: () => setchoice(HandRock),
    },
    {
      id:'2',
      image: Hand,
      title: "Hand Open",
      alt: "An image of a Hand Open",
      click: () => setchoice(Hand),

    },
    {
      id:'3',
      image: HandScissors,
      title: "Hand Scissor",
      alt: "An image of a Hand Scissor",
      click: () => setchoice(HandScissors),

    },
  ];
 const menuOfChoice_List = menuOfChoice.map(e => 
            <img src={e.image} title={e.title} alt={e.alt} onClick={e.click} key={e.id} />
        )


  const playGame = ()=>{
    const animation = setInterval(()=>{
      const images = [HandRock,Hand,HandScissors];
      const random = Math.floor(Math.random()*3);
      const result = images[random];
            console.log(result)
      setchoiceP2(result)
    },300)

    setTimeout(() => {
      clearInterval(animation);      
    }, 2000);
    
  }
  return (
    <>
      <header className="score">
        <span>0</span>
        <span>x</span>
        <span>0</span>
      </header>
      <section className="modalOfPlayers">
        <div className="modalPlayerOne">
          <img src={choice} width={"250px"} alt="the choice player image" />
        </div>
        <div>
          <span>x</span>
        </div>
        <div className="modalPlayerTwo">
          <img src={choiceP2} width={"250px"} alt="the choice player image" />
        </div>
      </section>

      <section className="menuOfChoice">
          <ul>
            {menuOfChoice_List}
          </ul>
      </section>

      <section className="buttonPlayGame">
        <button type="button" onClick={playGame} >Jogar</button>
      </section>
    </>
  );
};

export default App;
