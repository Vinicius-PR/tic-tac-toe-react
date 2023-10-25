import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: calc(460px + 2rem);
  margin: 0 auto;
  padding: 0 1rem;

  button {
    width: 100%;
  }

  @media (max-width: 375px) {
    gap: 32px;
  }
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1.5rem; //24px
  background-color: ${props => props.theme.semiDarkNavy};
  border-radius: 15px;

  form {
    margin-top: 24px;
    margin-bottom: 17px;
    background-color: ${props => props.theme.darkNavy};
    height: 4.5rem; // 72px
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    label {
      border-radius: 10px;
      flex: 1;
      height: calc(100% - 16px);
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid transparent;
      cursor: pointer;

      &:first-child {
        margin-left: 8px;
      }

      &:last-child {
        margin-right: 8px;
      }

      &:hover {
        border-color: ${props => props.theme.silver};
      }
      svg {
        path {
          fill: ${props => props.theme.silver};
        }
      }
      
    }

    input {
      display: none;
    }
    
    label:has(input:checked) {
      background-color: ${props => props.theme.silver};
      svg {
        path {
          fill: ${props => props.theme.darkNavy};
        }
      }
    }
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  button:disabled {
    cursor: not-allowed;
  }


  @media (max-width: 375px) {
    gap: 16px;
  }
`