import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  background-color: black;
  height: 100vh;
  width: 100vw;
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

export const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
`