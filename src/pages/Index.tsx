import { useState,useEffect } from "react";
import { styled } from "styled-components";
import main from "../assets/main.png";
import { Link, Outlet } from "react-router-dom";
import Loader from "./Loader/Loader";


const Section = styled.section`
  .main_title {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: bold;
    font-size: 3rem;
    width: 100vw;
    h1 {
      span {
        transition: 500ms;
      }
    }
    .img_border_effect {
      position: absolute;
      left: 50%;
      margin-left: -130px;
      margin-top: -5px;
      z-index: -1;
      //background: -webkit-linear-gradient(45deg, red, yellow);
      width: 260px;
      height: 260px;
      //animation: loop 1s infinite;
    }
    img {
//      transform: rotate(270deg);
      border-radius: 50%;
    }

  }

  @keyframes loop {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .select_game_mode {
    p {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      padding: 0.5rem;
    }
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
        width: 100%;
        padding: 1rem;
        margin: 5px 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }
      a {
        width: 40%;
        text-decoration: none;
        .single_player{
          position: relative;
          width: 100%;
          height: 50px;
          background-color: #2e1237;
          overflow: hidden;
          margin: 5px 0;
          p{
            text-transform: capitalize;
            color: #fff;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

          }
          span:nth-child(1){
            position:absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(to right, transparent, #ff00bb);
            animation: border_loop_one 1s linear infinite;

          }
          span:nth-child(2){
            position:absolute;
            top: 0;
            right: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(to bottom, transparent, #ff00bb);
            animation: border_loop_two 1s linear infinite;
            animation-delay: 500ms;

          }
          span:nth-child(3){
            position:absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(to left, transparent, #ff00bb);
            animation: border_loop_three 1s linear infinite;
            animation-delay: 1s;

          }
          span:nth-child(4){
            position:absolute;
            top: 0;
            left: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(to top, transparent, #ff00bb);
            animation: border_loop_four 1s linear infinite;
            animation-delay: 1.5s;
          }
        }
        .more_buttons{
          position: relative;
          width: 100%;
          height: 50px;
          background-color: #1c1c1c;
          overflow: hidden;
          margin: 5px 0;
          opacity: 0.3;

          p{
            text-transform: capitalize;
            color: rgb(255, 255, 255);
          }
        }
      }
    }
  }

  @keyframes border_loop_one {
    0% {transform:translateX(-100%)}
    100% {transform:translateX(100%)}
  }
  @keyframes border_loop_two {
    0% {transform:translateY(-100%)}
    100% {transform:translateY(100%)}
  }
  @keyframes border_loop_three {
    0% {transform:translateX(100%)}
    100% {transform:translateX(-100%)}
  }
  @keyframes border_loop_four {
    0% {transform:translateY(100%)}
    100% {transform:translateY(-100%)}
  }
  @media only screen and (max-width: 500px) {
    .main_title {
      font-size: 10vw;
    }
    .select_game_mode {
      article {
        a {
          width: 90%;
        }
      }
    }
  }
`;

const Index = () => {
  const [remove_Loader, set_remove_Loader] = useState(false);
  
  useEffect(() => {
    const colorize_title_span = setInterval(() => {
      const palet_of_color = [
        "#3C3287",
        "#EC1B32",
        "#0293CF",
        "#F04423",
        "#006B5E",
        "#FBE500",
        "#FFF",
      ];
      const random = Math.floor(Math.random() * palet_of_color.length);
      const main_title_name = document.querySelector("#main_title_name") as HTMLElement;
     
      main_title_name!.style.color = palet_of_color[random];

      const button_single_mode = document.querySelector("#button_single_mode") as HTMLElement;
      button_single_mode.addEventListener("click", () => {
        clearInterval(colorize_title_span);
      });
    }, 500);

    set_remove_Loader(true)
  }, []);

  return (
    <Section>
      <Outlet />
      <div className="main_title">
        <h1>
          bem vindo ao <span id="main_title_name">jokenPo</span>
        </h1>
        <div className="img_border_effect" />
        <img
          src={main}
          width="250px"
          id="main_image_src"
          alt="alt lorem"
        />
      </div>
      <div className="select_game_mode">
        <p>escolha uma opção</p>
        <article>
          <Link to='single_mode' id="button_single_mode">
            <div className="single_player">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p>1 Jogador</p>
            </div>
          </Link>

          <Link to='/'>
            <div className="more_buttons">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p>2 Jogadores</p>
            </div>
          </Link>

          <Link to='/'>
            <div className="more_buttons">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p>Online</p>
            </div>
          </Link>
        </article>
      </div>
      {!remove_Loader && <Loader/>}
    </Section>
  );
};

export default Index;
