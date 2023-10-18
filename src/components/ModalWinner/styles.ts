import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  background-color: black;
  height: 100vh;
  width: 100vw;
  border: 1px solid green;
  top: 0;
  opacity: 0.5;
`

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  background-color: ${props => props.theme.semiDarkNavy};
  padding: 45px 0;
  color: ${props => props.theme.silver};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WinnerBox = styled.div`
  color: ${props => props.theme.silver};
  margin: 16px 0 24px;

  display: flex;
  gap: 24px;
  align-items: center;

  &.X-mark {
    color: ${props => props.theme.lightBlue};
  }

  &.O-mark {
    color: ${props => props.theme.lightYellow};
  }
`

export const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
`