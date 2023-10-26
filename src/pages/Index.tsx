import { styled } from "styled-components"

const Section  = styled.section`
  border:1px solid red;
`

const Index = () => {
  return (
    <Section>
      <div className="title">
        <h1>bem vindo ao joken po</h1>
        <img src="https://placehold.co/250x250" alt="alt lorem" />
      </div>
      <div className="selectGae">
        <p>escolha uma opção sei lá</p>
        <button>Modo 1 Jogador</button>
        <button>Modo 2 Jogadores</button>
        <button>Modo Online</button>
      </div>
    </Section>
  )
}

export default Index