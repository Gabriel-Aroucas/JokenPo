import { useEffect } from "react";
import { styled } from "styled-components";
import HandRock from "../assets/HandRock.png";
import Hand from "../assets/Hand.png";
import HandScissors from "../assets/HandScissors.png";
import { Link } from "react-router-dom";


const Section = styled.section`
  .main_title {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 3rem;
    width: 100vw;
    .img_border_effect{
      position: absolute;
      left: 50%;
      margin-left: -130px;
      margin-top: -5px;
      z-index: -1;
      background: -webkit-linear-gradient(45deg, red,yellow);
      width:260px;
      height: 260px;
      border-radius: 50%;
      animation: loop 1s infinite;
    }
    img{
        border-radius: 50%;
        background-color: black;
      }
    }


  @keyframes loop {
    0% {transform:rotate(0deg)}
    100% {transform:rotate(360deg)}
  }
  .select_game_mode {
    p {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      padding:0.5rem;
    }
    article{
      display:flex;
      flex-direction:column;
      align-items:center;
      button{
        width:100%;
        padding:1rem;
        margin:5px 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

      }
      a{
        width: 40%;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .main_title {
      font-size: 10vw;
    }
    .select_game_mode{
      article{
        a{
          width:90%;
       }
      }
    }
  }
`;

const Index = () => {
  
  useEffect(()=>{
    setInterval(()=>{
      const palet_of_color = ['#3C3287','#EC1B32','#0293CF','#F04423','#006B5E','#FBE500','#FFF'];
      const random = Math.floor(Math.random()*palet_of_color.length)
      const main_title_name = document.querySelector("#main_title_name") as HTMLElement;
      main_title_name!.style.color=palet_of_color[random]
    },200)

    setInterval(()=>{
      const images = [Hand,HandRock,HandScissors]
      const random_images = Math.floor(Math.random()*images.length)
      const main_image_src = document.querySelector("#main_image_src") as HTMLImageElement;
      main_image_src!.src=images[random_images]; 

    },1000)

  },[])

  return (
    <Section>
      <div className="main_title">
        <h1>bem vindo ao <span id="main_title_name">jokenPo</span></h1>
          <div className="img_border_effect"/>
          <img src="https://placehold.co/250x250" width="250px" id="main_image_src" alt="alt lorem" />
      </div>
      <div className="select_game_mode">
        <p>escolha uma opção</p>
        <article>
          <Link to="single_Mode"><button type="button">Modo 1 Jogador</button></Link>
          <Link to="single_Mode"><button type="button" disabled>Modo 2 Jogadores</button></Link>
          <Link to="single_Mode"><button type="button" disabled> Modo Online </button></Link>
        </article>
      </div>
    </Section>
  );
};

export default Index;
