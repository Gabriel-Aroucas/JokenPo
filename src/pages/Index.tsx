import { styled } from "styled-components";



const colorize_main_title=()=>{
    const palet_of_colors = ['red','green','blue','yellow','pink'];
    const randomize_colors = Math.floor(Math.random()*palet_of_colors.length)
    return palet_of_colors[randomize_colors]
}

const Section = styled.section`
  .main_title {
    text-align: center;
    text-transform: uppercase;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 3rem;
    span{
      color:${colorize_main_title};
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
  return (
    <Section>
      <div className="main_title">
        <h1>bem vindo ao <span>jokenPo</span></h1>
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
