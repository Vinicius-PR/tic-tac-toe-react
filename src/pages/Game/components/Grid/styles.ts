import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 490px) {
    margin: 64px 0 20px;
  }

  @media (max-width: 345px) {
    gap: 10px;
  }
`

export const GridCell = styled.div`
  width: 140px;
  height: 140px;
  box-shadow: 0px -8px 0px 0px #10212A inset;
  background-color: ${props => props.theme.semiDarkNavy};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;

  @media (max-width: 490px) {
    width: 96px;
    height: 96px;

    img {
      width: 46px;
      height: 46px;
    }
  }

  @media (max-width: 345px) {
    width: 80px;
    height: 80px;

    img {
      width: 36px;
      height: 36px;
    }
  }
`