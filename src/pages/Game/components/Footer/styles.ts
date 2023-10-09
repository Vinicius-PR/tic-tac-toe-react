import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const FooterBox = styled.div<{$backGroundColor: string}>`
  width: 140px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${props => props.$backGroundColor};

  p {
    color: ${props => props.theme.darkNavy};
  }

  @media (max-width: 490px) {
    max-width: 96px;
  }

  @media (max-width: 345px) {
    max-width: 80px;
  }
`