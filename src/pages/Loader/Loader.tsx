import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: absolute;
  top: 0;
  p {
    font-size: 3rem;
    padding-bottom: 2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
  div {
    border: 10px solid #fff;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transition: 1s;
    border-top: 10px solid #f04423;
    animation: loading 1s infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
      <Section>
        <Outlet/>
        <p>Carregando...</p>
        <div className="Loader_Bar" />
      </Section>
  );
};

export default Loader;
