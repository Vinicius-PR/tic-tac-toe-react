import { useContext } from 'react'
import { HeadingExtraSmall, HeadingLarge, SecondaryBtnSilver, SecondaryBtnYellow } from "../../../styles/global"
import { ButtonBox, ModalContent, ModalOverlay } from "../styles"
import { GameContext } from '../../../context/GameContext'

interface ModalRestartProps {
  handleOpenCloseResetModal: () => void
}

export default function ModalRestart({ handleOpenCloseResetModal }: ModalRestartProps) {

  const {restartGame} = useContext(GameContext)

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <HeadingLarge>Restart Game?</HeadingLarge>

        <ButtonBox>
          <SecondaryBtnSilver onClick={handleOpenCloseResetModal}>
            <HeadingExtraSmall>NO, CANCEL</HeadingExtraSmall>
          </SecondaryBtnSilver>
          <SecondaryBtnYellow onClick={() => {
            handleOpenCloseResetModal()
            restartGame()
          }}>
            <HeadingExtraSmall>YES, RESTART</HeadingExtraSmall>
          </SecondaryBtnYellow>
        </ButtonBox>

      </ModalContent>
    </>
  )
}
