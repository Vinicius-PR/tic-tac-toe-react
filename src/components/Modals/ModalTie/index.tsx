import { useContext } from 'react'
import { HeadingExtraSmall, HeadingLarge, SecondaryBtnSilver, SecondaryBtnYellow } from "../../../styles/global"
import { ButtonBox, ModalOverlay, ModalContent, WinnerBox } from "../styles"
import { GameContext } from '../../../context/GameContext'

export default function ModalTie() {
  const { quitGame, nextRound } = useContext(GameContext)

  return (
    <>
      <ModalOverlay />

      <ModalContent>
        <WinnerBox>
          <HeadingLarge> Round Tied </HeadingLarge>
        </WinnerBox>

        <ButtonBox>
          <SecondaryBtnSilver onClick={quitGame}>
            <HeadingExtraSmall>quit</HeadingExtraSmall>
          </SecondaryBtnSilver>

          <SecondaryBtnYellow onClick={nextRound}>
            <HeadingExtraSmall>Next round</HeadingExtraSmall>
          </SecondaryBtnYellow>
        </ButtonBox>

      </ModalContent>
    </>
  )
}
