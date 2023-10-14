import "./App.css";
import HandRock from "./assets/HandRock.png";
import Hand from "./assets/Hand.png";
import HandScissors from "./assets/HandScissors.png";
import Unknown from "./assets/unknown.png";
import { useEffect, useState } from "react";
import Modal from "./components/modal/Modal";
const App = () => {
    
  const [choice, setchoice] = useState(Unknown)
  const [choiceP2, setchoiceP2] = useState(Unknown)
  const [pointsP1, setpointsP1] = useState(0);
  const [pointsP2, setpointsP2] = useState(0);
  const [round, setround]=useState(0);
  const [winner, setwinner] = useState('');

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
const validate_Win =(winnerName:string)=>{
    setpointsP1(pointsP1+1)
    setwinner(winnerName)
    console.log(winner)

}
const validate_Drawn =()=>{
    setpointsP1(pointsP1+1);
    setpointsP2(pointsP2+1);
    alert('drawn')
}
const validate_Loose =()=>{
    setpointsP2(pointsP2+1);
    alert('loose')
    
}

useEffect(()=>{
    validate()
},[round])

const validate =()=>{

    const validate_options = {
        invalid_option : choice == Unknown ? setchoiceP2(Unknown) : '',
        rock_win: choice == HandRock && choiceP2 == HandScissors ? validate_Win('rock') : '',
        rock_drawn: choice == HandRock && choiceP2 == HandRock ? validate_Drawn() : '',
        rock_loose: choice == HandRock && choiceP2 == Hand ? validate_Loose() : '',

        hand_win: choice == Hand && choiceP2 == HandRock ? alert('win') : '',
        hand_drawn: choice == Hand && choiceP2 == Hand ? alert('drawn') : '',
        hand_loose: choice == Hand && choiceP2 == HandScissors ? alert('loose') : '',

        scissor_win: choice == HandScissors && choiceP2 == Hand ? alert('win') : '',
        scissor_drawn: choice == HandScissors && choiceP2 == HandScissors ? alert('drawn') : '',
        scissor_loose: choice == HandScissors && choiceP2 == HandRock ? alert('loose') : '',
    }
    validate_options
    
}

  const playGame =  ()=>{
     setround(round+1)
        const images = [HandRock,Hand,HandScissors];
        const random = Math.floor(Math.random()*3);
        const result = images[random];
        setchoiceP2(result)
}

  
  return (
    <>
    <Modal Title='Oxford'/>
      <header className="score">
        <span>{pointsP1}</span>
        <span>x</span>
        <span>{pointsP2}</span>
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
        <button type="button" id="btnPlayGame" onClick={playGame}>Jogar</button>
      </section>
    </>
  );
};

export default App;
