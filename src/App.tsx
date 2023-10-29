import "./App.css";
import HandRock from "./assets/HandRock.png";
import Hand from "./assets/Hand.png";
import HandScissors from "./assets/HandScissors.png";
import Unknown from "./assets/unknown.png";
import { useEffect, useState } from "react";
import Modal from "./components/modal/Modal";
import Loader from "./pages/Loader/Loader";
const App = () => {
  const [choice, setchoice] = useState(Unknown);
  const [choiceP2, setchoiceP2] = useState(Unknown);
  const [pointsP1, setpointsP1] = useState(0);
  const [pointsP2, setpointsP2] = useState(0);
  const [round, setround] = useState(0);
  const [winner, setwinner] = useState("");
  const [modalText, setmodalText] = useState("");
  const [remove_Loader, set_Remove_Loader] = useState(false);
  const modal = document.querySelector(".Modal_bg") as HTMLElement;

  const menu_Of_Choice = [
    {
      id: "1",
      image: HandRock,
      title: "Hand Rock",
      alt: "An image of a Hand Rock",
      click: () => {
        setchoice(HandRock);
        setchoiceP2(Unknown);
      },
    },
    {
      id: "2",
      image: Hand,
      title: "Hand Open",
      alt: "An image of a Hand Open",
      click: () => {
        setchoice(Hand);
        setchoiceP2(Unknown);
      },
    },
    {
      id: "3",
      image: HandScissors,
      title: "Hand Scissor",
      alt: "An image of a Hand Scissor",
      click: () => {
        setchoice(HandScissors);
        setchoiceP2(Unknown);
      },
    },
  ];
  const menu_Of_Choice_List = menu_Of_Choice.map((e) => (
    <li key={e.id}>
      {" "}
      <img src={e.image} title={e.title} alt={e.alt} onClick={e.click} />
    </li>
  ));

  useEffect(() => {
    setTimeout(() => {
      set_Remove_Loader(true)
    }, 1000);
    fetch("https://json-server-tim1.vercel.app/frases")
      .then((response) => response.json())
      .then((data) => {
        const randomize = Math.floor(Math.random() * data.length);
        setmodalText(data[randomize].text);
      });

    setTimeout(() => {
      validate_Win_or_Loose();
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round]);

  const validate_Win_or_Loose = () => {
    const win_Text = "Você venceu !";
    const drawn_Text = "Empate !";
    const loose_Text = "Você perdeu !";

    const validate_options = {
      rock_win:
        choice == HandRock && choiceP2 == HandScissors
          ? case_Win(win_Text)
          : "",
      rock_drawn:
        choice == HandRock && choiceP2 == HandRock
          ? case_Drawn(drawn_Text)
          : "",
      rock_loose:
        choice == HandRock && choiceP2 == Hand ? case_Loose(loose_Text) : "",

      hand_win:
        choice == Hand && choiceP2 == HandRock ? case_Win(win_Text) : "",
      hand_drawn:
        choice == Hand && choiceP2 == Hand ? case_Drawn(drawn_Text) : "",
      hand_loose:
        choice == Hand && choiceP2 == HandScissors
          ? case_Loose(loose_Text)
          : "",

      scissor_win:
        choice == HandScissors && choiceP2 == Hand ? case_Win(win_Text) : "",
      scissor_drawn:
        choice == HandScissors && choiceP2 == HandScissors
          ? case_Drawn(drawn_Text)
          : "",
      scissor_loose:
        choice == HandScissors && choiceP2 == HandRock
          ? case_Loose(loose_Text)
          : "",
    };
    validate_options;
  };
  const case_Win = (winnerName: string) => {
    setpointsP1(pointsP1 + 1);
    setwinner(winnerName);
    modal.style.display = "block";
  };
  const case_Drawn = (winnerName: string) => {
    setpointsP1(pointsP1 + 1);
    setpointsP2(pointsP2 + 1);
    setwinner(winnerName);
    modal.style.display = "block";
  };
  const case_Loose = (winnerName: string) => {
    setpointsP2(pointsP2 + 1);
    setwinner(winnerName);
    modal.style.display = "block";
  };

  const player_Two_animation_images = () => {
    const images = [HandRock, Hand, HandScissors];
    const random = Math.floor(Math.random() * 3);
    const result = images[random];
    setchoiceP2(result);
  };
  const disable_Button_Play_Game = () => {
    const button_play_Game = document.querySelector("#button_Play_Game");
    button_play_Game?.setAttribute("Disabled", "");
  };
  const button_play_Game = () => {
    if (choice != Unknown) {
      disable_Button_Play_Game();
      setround(round + 1);
      validate_Win_or_Loose();
      player_Two_animation_images();
    } else {
      alert("Error" + "\n" + "você precisa selecionar ao menos uma opção");
    }
  };

  return (
    <>
      <Modal title={winner} text={modalText} />
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

      <section className="menu_Of_Choice">
        <ul>{menu_Of_Choice_List}</ul>
      </section>

      <section className="button_Play_Game">
        <button type="button" id="button_Play_Game" onClick={button_play_Game}>
          Jogar
        </button>
      </section>
      {!remove_Loader && <Loader />}
    </>
  );
};

export default App;
