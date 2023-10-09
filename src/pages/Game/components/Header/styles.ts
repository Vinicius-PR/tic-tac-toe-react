import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    gap: 13px;
    color: ${props => props.theme.silver};
    box-shadow: 0px -4px 0px 0px #10212A inset;
    background-color: ${props => props.theme.semiDarkNavy};
    border-radius: 10px;
    padding: 13px 30px;

    span {
      text-transform: uppercase;
    }

    @media (max-width: 345px) {
      padding: 9px 20px;
    }
  }

  button {
    border: none;
    background-color: ${props => props.theme.silver};
    padding: 16px;
    box-shadow: 0px -4px 0px 0px #6B8997 inset;
    border-radius: 10px;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${props => props.theme.silverHover};
    }

    @media (max-width: 345px) {
      padding: 12px;
    }
  }

  @media (max-width: 490px) {
    margin-top: 24px;
  }
`