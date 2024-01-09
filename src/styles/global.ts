import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  body {
    background-color: ${props => props.theme.darkNavy};
    font-family: 'Outfit', sans-serif;
  }

  h1, h2, h3, h4 {
    font-weight: 700;
    font-style: normal;
    line-height: normal;
    text-transform: uppercase;
  }
`

const BasePrimaryButton = styled.button`
  border: none;
  border-radius: 15px;
  transition: all 0.2s ease;
  color: ${props => props.theme.darkNavy};
  padding: 17px 0 25px;
`

const BaseSecondaryButton = styled.button`
  border: none;
  border-radius: 10px;
  transition: all 0.2s ease;
  color: ${props => props.theme.darkNavy};
  padding: 15px 17px;

  @media (max-width: 300px) {
    padding: 10px 5px;
  }
`

export const PrimaryBtnYellow = styled(BasePrimaryButton)`
  background-color: ${props => props.theme.lightYellow};
  box-shadow: 0px -8px 0px 0px #CC8B13 inset;

  &:hover {
    background-color: ${props => props.theme.lightYellowHover};
  }
`

export const PrimaryBtnBlue = styled(BasePrimaryButton)`
  background-color: ${props => props.theme.lightBlue};
  box-shadow: 0px -8px 0px 0px #118C87 inset;

  &:hover {
    background-color: ${props => props.theme.lightBlueHover};
  }
`

export const SecondaryBtnYellow = styled(BaseSecondaryButton)`
  background-color: ${props => props.theme.lightYellow};
  box-shadow: 0px -4px 0px 0px #CC8B13 inset;

  &:hover {
    background-color: ${props => props.theme.lightYellowHover};
  }
`

export const SecondaryBtnSilver = styled(BaseSecondaryButton)`
  background-color: ${props => props.theme.silver};
  box-shadow: 0px -4px 0px 0px #6B8997 inset;

  &:hover {
    background-color: ${props => props.theme.silverHover};
  }
`

export const BodyText = styled.p`
  font-size: 0.875rem; // 14px
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.875px;
  color: ${props => props.theme.silver};
`

export const HeadingLarge = styled.h1`
  font-size: 2.5rem; // 40px
  letter-spacing: 2.5px;

  @media (max-width: 430px), (max-height: 620px) {
    font-size: 1.5rem; // 24px
    letter-spacing: 1.5px;
  }

  @media (max-width: 300px) {
    font-size: 1rem; // 16px
    letter-spacing: 1.5px;
  }
`

export const HeadingMedium = styled.h2`
  font-size: 1.5rem; // 24px
  letter-spacing: 1.5px;

  @media (max-width: 430px), (max-height: 620px) {
    font-size: 1.25rem;  // 20px
    letter-spacing: 1.25px;
  }
`

export const HeadingSmall = styled.h3`
  font-size: 1.25rem; // 20px
  letter-spacing: 1.25px;

  @media (max-width: 430px), (max-height: 620px) {
    font-size: 1rem;  // 16px
    letter-spacing: 0.875px;
  }

  @media (max-width: 300px) {
    font-size: 0.875rem; // 14px
    letter-spacing: 0.875px;
  }
`

export const HeadingExtraSmall = styled.h4`
  font-size: 1rem; // 16px
  letter-spacing: 1px;

  @media (max-width: 430px), (max-height: 620px) {
    font-size: 0.875rem;  // 14px
    letter-spacing: 0.875px;
  }
`
