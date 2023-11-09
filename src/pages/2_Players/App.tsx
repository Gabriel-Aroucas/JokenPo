import "../../App.css";
import HandRock from "../../assets/HandRock.png";
import Hand from "../../assets/Hand.png";
import HandScissors from "../../assets/HandScissors.png";
import Unknown from "../../assets/unknown.png";
import { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import Loader from "../../pages/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import house from "../../assets/house.png"
import check from "../../assets/check.jpg"
const App = () => {
	const navigate = useNavigate();
	const [choice, setchoice] = useState(Unknown);
	const [choiceP2, setchoiceP2] = useState(Unknown);
	const [pointsP1, setpointsP1] = useState(0);
	const [pointsP2, setpointsP2] = useState(0);
	const [turn_p1,set_turn_p1]= useState("");
	const [turn_p2,set_turn_p2]= useState("");
	const [round, setround] = useState(0);
	const [modal_title, set_modal_title] = useState("");
	const [modal_text, set_modal_text] = useState("");
	const [remove_Loader, set_Remove_Loader] = useState(false);
	const [modal_button_display, set_modal_button_display] = useState("");
	const [turn, set_turn] = useState(0);
	const menu_Of_Choice = [
		{
			id: "1",
			image: HandRock,
			title: "Hand Rock",
			alt: "An image of a Hand Rock",
			click: () => {
				if (turn % 2 == 0) {
					setchoice(HandRock);
					set_turn_p1(HandRock)
				} else if (turn % 2 != 0) {
					setchoiceP2(HandRock);
					set_turn_p2(HandRock)

				}
			},
		},
		{
			id: "2",
			image: Hand,
			title: "Hand Open",
			alt: "An image of a Hand Open",
			click: () => {
				if (turn % 2 == 0) {
					setchoice(Hand);
					set_turn_p1(Hand)

				} else if (turn % 2 != 0) {
					setchoiceP2(Hand);
					set_turn_p2(Hand)

				}

			},
		},
		{
			id: "3",
			image: HandScissors,
			title: "Hand Scissor",
			alt: "An image of a Hand Scissor",
			click: () => {
				if (turn % 2 == 0) {
					setchoice(HandScissors);
					set_turn_p1(HandScissors)

				} else if (turn % 2 != 0) {
					setchoiceP2(HandScissors);
					set_turn_p2(HandScissors)

				}

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
			change_turn_to_player_one()
		}, 1000);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(()=>{
		console.log(turn)
	},[turn])

	useEffect(() => {
		fetch("https://json-server-tim1.vercel.app/frases")
			.then((response) => response.json())
			.then((data) => {
				const randomize = Math.floor(Math.random() * data.length);
				set_modal_text(data[randomize].text);
				set_Remove_Loader(true);
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
	const handle_modal = (none_or_block: string) => {
		const modal = document.querySelector(".Modal_bg") as HTMLElement;
		modal.style.display = none_or_block
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
		} else if (html_pointsP1.innerHTML == '5') {
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
		} else if (html_pointsP2.innerHTML == '5') {
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
				turn_p1 === HandRock && turn_p2 === HandScissors
					? case_Win(win_Text)
					: "",
			rock_drawn:
				turn_p1 === HandRock && turn_p2 === HandRock
					? case_Drawn(drawn_Text)
					: "",
			rock_loose:
				turn_p1 === HandRock && turn_p2 === Hand ? case_Loose(loose_Text) : "",

			hand_win:
				turn_p1 === Hand && turn_p2 === HandRock ? case_Win(win_Text) : "",
			hand_drawn:
				turn_p1 === Hand && turn_p2 === Hand ? case_Drawn(drawn_Text) : "",
			hand_loose:
				turn_p1 === Hand && turn_p2 === HandScissors
					? case_Loose(loose_Text)
					: "",

			scissor_win:
				turn_p1 === HandScissors && turn_p2 === Hand ? case_Win(win_Text) : "",
			scissor_drawn:
				turn_p1 === HandScissors && turn_p2 === HandScissors
					? case_Drawn(drawn_Text)
					: "",
			scissor_loose:
				turn_p1 === HandScissors && turn_p2 === HandRock
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

	const disable_Button_Play_Game = () => {
		const button_play_Game = document.querySelector("#button_Play_Game") as HTMLButtonElement;
		button_play_Game?.setAttribute("Disabled", "");
		button_play_Game.innerHTML="Jogar"
	};

	const change_name_button_play_game=(name:string)=>{
		const button_play_Game = document.querySelector("#button_Play_Game") as HTMLButtonElement;
		button_play_Game.innerHTML=name

	}
	const confirm_choose_p1 = () => {
		setchoice(check)
	}
	const confirm_choose_p2 = () => {
		setchoiceP2(check)

	}

	const change_turn_to_player_one = () => {
		handle_modal("block")
		set_modal_title("Vez do Player 1")

	}
	const change_turn_to_player_two = () => {
		handle_modal("block")
		set_modal_title("Vez do Player 2")
	}
	const handle_menu_of_choice=(none_or_block:string)=>{
		const menu_Of_Choice_element = document.querySelector(".menu_Of_Choice") as HTMLElement;
		menu_Of_Choice_element.style.display=none_or_block
	}
	const show_on_display_the_choose=()=>{
		setchoice(turn_p1)
		setchoiceP2(turn_p2)

	}

	const make_match=()=>{
		validate_Win_or_Loose()
		show_on_display_the_choose()
		handle_menu_of_choice('block')
		change_name_button_play_game("Escolher")
	}
	const button_play_Game = () => {
		if (choice != Unknown) {
			if(choice == check && choiceP2 == check){
				make_match()
			}else if (turn % 2 == 0) {
				set_turn(turn + 1)
				confirm_choose_p1()
				change_turn_to_player_two()
			} else if (turn % 2 != 0) {
				set_turn(turn + 1)
				confirm_choose_p2()
				handle_menu_of_choice('none')
				change_name_button_play_game('Jogar')
			}

		} else {
			handle_modal('block');
			set_modal_title("Ops!")
			set_modal_text("Você precisa selecionar pelo menos uma opção")
		}

		verify_close_modal_to_check_turn()

	};

	const verify_close_modal_to_check_turn = () => {
		const modal = document.querySelector(".Modal_bg") as HTMLElement;
		modal.addEventListener("click", () => {
			if (turn % 2 != 0) {
				set_modal_title("Jogador 2 !")
				set_modal_text("lorem impsum")
				handle_modal("block");

			}
		})

	}
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
					Escolher
				</button>
			</section>
			{!remove_Loader && <Loader />}

		</>
	);

};

export default App;
