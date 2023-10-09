import { HeadingExtraSmall, HeadingLarge, SecondaryBtnSilver, SecondaryBtnYellow } from "../../styles/global"
import { ButtonBox, ModalOverlay, ModalContent, WinnerBox } from "./styles"
import oImg from '../../assets/icon-o.svg'

export default function Modal() {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <HeadingExtraSmall>Oh no, you lost...</HeadingExtraSmall>

        <WinnerBox>
          <img src={oImg} alt="O" />
          <HeadingLarge>Takes the round</HeadingLarge>
        </WinnerBox>

        <ButtonBox>
          <SecondaryBtnSilver>
            <HeadingExtraSmall>quit</HeadingExtraSmall>
          </SecondaryBtnSilver>

          <SecondaryBtnYellow>
            <HeadingExtraSmall>Next round</HeadingExtraSmall>
          </SecondaryBtnYellow>
        </ButtonBox>

      </ModalContent>
    </>
  )
}
