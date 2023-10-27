import { useEffect } from "react";
import { styled } from "styled-components";




const Section = styled.section`
  .main_title {
    text-align: center;
    text-transform: uppercase;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 3rem;
    span{
      color:${'red'};
    }
    img {
      border-radius: 50%;
    }
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
        width:40%;
        padding:1rem;
        margin:5px 0;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .main_title {
      font-size: 10vw;
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

  })

  return (
    <Section>
      <div className="main_title">
        <h1>bem vindo ao <span id="main_title_name">jokenPo</span></h1>
        <img src="https://placehold.co/250x250" alt="alt lorem" />
      </div>
      <div className="select_game_mode">
        <p>escolha uma opção</p>
        <article>
          <button type="button">Modo 1 Jogador</button>
          <button type="button" disabled>Modo 2 Jogadores</button>
          <button type="button" disabled> Modo Online </button>
        </article>
      </div>
    </Section>
  );
};

export default Index;
