import styled from "styled-components";

export const GameContainer = styled.div`
  max-width: calc(460px + 2rem);
  padding: 0 1rem;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 490px) {
    justify-content: flex-start;
  }
`