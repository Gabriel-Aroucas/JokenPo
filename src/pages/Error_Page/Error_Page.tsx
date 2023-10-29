import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #9CD6E4;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    h2{
        font-size: 8rem;
        line-height: 0;
    }
    h1{
        font-size: 8vw;
        display: flex;
        flex-direction: column;
    }
    a{
        margin: 10px 0;
    }
    a:visited{
        color:#f04423;
    }
    
`
const Error_Page = () => {
  return (
    <Div>
        <h2>⍨</h2>
        <h1> Oh no !</h1>
        <p>Erro 404 - Página não encontrada</p>
        <Link to="/">Voltar</Link>
        
    </Div>
  )
}

export default Error_Page