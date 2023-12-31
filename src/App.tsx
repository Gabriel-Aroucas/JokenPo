import "./App.css";
import HandRock from "./assets/HandRock.png";
import Hand from "./assets/Hand.png";
import HandScissors from "./assets/HandScissors.png";
import Unknown from "./assets/unknown.png";
import { useEffect, useState } from "react";
import Modal from "./components/modal/Modal";
import Loader from "./pages/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import house from "./assets/house.png"
const App = () => {
	const navigate = useNavigate();
	const [choice, setchoice] = useState(Unknown);
	const [choiceP2, setchoiceP2] = useState(Unknown);
	const [pointsP1, setpointsP1] = useState(0);
	const [pointsP2, setpointsP2] = useState(0);
	const [round, setround] = useState(0);
	const [modal_title, set_modal_title] = useState("");
	const [modal_text, set_modal_text] = useState("");
	const [remove_Loader, set_Remove_Loader] = useState(false);
	const [modal_button_display, set_modal_button_display] = useState("");
	const menu_Of_Choice = [
		{
			id: "1",
			image: HandRock,
			title: "Hand Rock",
			alt: "An image of a Hand Rock",
			click: () => {
				setchoice(HandRock);
			},
		},
		{
			id: "2",
			image: Hand,
			title: "Hand Open",
			alt: "An image of a Hand Open",
			click: () => {
				setchoice(Hand);
			},
		},
		{
			id: "3",
			image: HandScissors,
			title: "Hand Scissor",
			alt: "An image of a Hand Scissor",
			click: () => {
				setchoice(HandScissors);
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
		fetch("https://json-server-tim1.vercel.app/frases")
			.then((response) => response.json())
			.then((data) => {
				const randomize = Math.floor(Math.random() * data.length);
				set_modal_text(data[randomize].text);
				set_Remove_Loader(true);
			});

		setTimeout(() => {
			validate_Win_or_Loose();
		}, 1000);

		const button_submit_modal = document.querySelector("#button_submit_modal") as HTMLElement;
		set_modal_button_display("block")
		button_submit_modal.addEventListener("click", () => {
			setchoice(Unknown);
			setchoiceP2(Unknown);
			verify_end_game()
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [round]);

	const reset_game = () => {
		setchoice(Unknown);
		setchoiceP2(Unknown);
		setpointsP1(0);
		setpointsP2(0);
		setTimeout(() => {
			navigate("/")
		}, 1000);
	};
	const handle_modal=(none_or_block:string)=>{
		const modal = document.querySelector(".Modal_bg") as HTMLElement;
		modal.style.display=none_or_block
	}
	const verify_end_game = () => {
		const html_pointsP1 = document.querySelector("#html_pointsP1") as HTMLSpanElement;
		const html_pointsP2 = document.querySelector("#html_pointsP2") as HTMLSpanElement;


		if (html_pointsP1.innerHTML == '5' && html_pointsP2.innerHTML == '5') {
			handle_modal('none')
			disable_Button_Play_Game()
			setTimeout(() => {
				handle_modal('block');
				set_modal_button_display("none")
				set_modal_title("Você Empatou no JokenPô")
				set_modal_text("Em instantes, você será redirecionado para a página principal, obrigado por testar o game")
				setTimeout(() => {
					reset_game();
				}, 5000);
			}, 1000);
		}else if(html_pointsP1.innerHTML == '5'){
			handle_modal('none')
			disable_Button_Play_Game()

			set_modal_button_display("none")
			setTimeout(() => {
				handle_modal('block')
				set_modal_title("Você Venceu no JokenPô")
				set_modal_text("Em instantes, você será redirecionado para a página principal, obrigado por testar o game")
				setTimeout(() => {
					reset_game();
				}, 5000);

			}, 1000);
		}else if(html_pointsP2.innerHTML == '5'){
			handle_modal('none')
			disable_Button_Play_Game()
			set_modal_button_display("none")
			setTimeout(() => {
				handle_modal('block')
				set_modal_title("Você Perdeu no JokenPô")
				set_modal_text("Em instantes, você será redirecionado para a página principal,obrigado por testar o gamel")
				setTimeout(() => {
					reset_game();
				}, 5000);

			}, 1000);
		} 
	};
	const validate_Win_or_Loose = () => {
		const win_Text = "Você venceu !";
		const drawn_Text = "Empate !";
		const loose_Text = "Você perdeu !";

		const validate_options = {
			rock_win:
				choice === HandRock && choiceP2 === HandScissors
					? case_Win(win_Text)
					: "",
			rock_drawn:
				choice === HandRock && choiceP2 === HandRock
					? case_Drawn(drawn_Text)
					: "",
			rock_loose:
				choice === HandRock && choiceP2 === Hand ? case_Loose(loose_Text) : "",

			hand_win:
				choice === Hand && choiceP2 === HandRock ? case_Win(win_Text) : "",
			hand_drawn:
				choice === Hand && choiceP2 === Hand ? case_Drawn(drawn_Text) : "",
			hand_loose:
				choice === Hand && choiceP2 === HandScissors
					? case_Loose(loose_Text)
					: "",

			scissor_win:
				choice === HandScissors && choiceP2 === Hand ? case_Win(win_Text) : "",
			scissor_drawn:
				choice === HandScissors && choiceP2 === HandScissors
					? case_Drawn(drawn_Text)
					: "",
			scissor_loose:
				choice === HandScissors && choiceP2 === HandRock
					? case_Loose(loose_Text)
					: "",
		};
		validate_options;
	};
	const case_Win = (winnerName: string) => {
		setpointsP1(pointsP1 + 1);
		set_modal_title(winnerName);
		handle_modal('block')
	};
	const case_Drawn = (winnerName: string) => {
		setpointsP2(pointsP1 + 0);
		setpointsP2(pointsP2 + 0);
		set_modal_title(winnerName);
		handle_modal('block')
	};
	const case_Loose = (winnerName: string) => {
		setpointsP2(pointsP2 + 1);
		set_modal_title(winnerName);
		handle_modal('block')

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
			handle_modal('block');
			set_modal_title("Ops!")
			set_modal_text("Você precisa selecionar pelo menos uma opção")
		}
	};

	return (
		<>
			<Modal title={modal_title} text={modal_text} display={modal_button_display} />
			<header className="score">
				<span id="html_pointsP1">{pointsP1}</span>
				<span>x</span>
				<span id="html_pointsP2">{pointsP2}</span>
			</header>
			<section className="goto_index">
				<div className="house_goto_index">
					<Link to={"/"}>
						<img src={house} alt="" width='30px' />
					</Link>
				</div>
			</section>
			<section className="modalOfPlayers">
				<div className="modalPlayerOne">
					<span></span>
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
			{!remove_Loader && <Loader/>}

		</>
	);
	
};

export default App;
