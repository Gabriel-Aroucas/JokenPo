import "./App.css";
import HandRock from "./assets/HandRock.png";
import Hand from "./assets/Hand.png";
import HandScissors from "./assets/HandScissors.png";
import Unknown from "./assets/unknown.png";
import { useEffect, useState } from "react";
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
           <li key={e.id}> <img src={e.image} title={e.title} alt={e.alt} onClick={e.click}  /></li>
        )

useEffect(()=>{
            validate()
        })

const validate =()=>{
    const buttonDisabled  = document.querySelector('button')?.setAttribute('disabled','');
    const validate_options = {
        invalid_options:choice &&choiceP2 == Unknown ? buttonDisabled :'',

        rock_win: choice == HandRock && choiceP2 == HandScissors ? alert('win') : '',
        rock_drawn: choice == HandRock && choiceP2 == HandRock ? alert('drawn') : '',
        rock_loose: choice == HandRock && choiceP2 == Hand ? alert('loose') : '',

        hand_win: choice == Hand && choiceP2 == HandRock ? alert('win') : '',
        hand_drawn: choice == Hand && choiceP2 == Hand ? alert('drawn') : '',
        hand_loose: choice == Hand && choiceP2 == HandScissors ? alert('loose') : '',

        scissor_win: choice == HandScissors && choiceP2 == Hand ? alert('win') : '',
        scissor_drawn: choice == HandScissors && choiceP2 == HandScissors ? alert('drawn') : '',
        scissor_loose: choice == HandScissors && choiceP2 == HandRock ? alert('loose') : '',
    }
    validate_options
    
    }

  const playGame = ()=>{
    setTimeout(() => {
        const images = [HandRock,Hand,HandScissors];
        const random = Math.floor(Math.random()*3);
        const result = images[random];
      setchoiceP2(result)
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
