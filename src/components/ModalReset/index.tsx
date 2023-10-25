import { HeadingExtraSmall, HeadingLarge, SecondaryBtnSilver, SecondaryBtnYellow } from "../../styles/global";
import { ButtonBox, ModalContent, ModalOverlay } from "./styles";

interface ModalResetProps {
  restart: () => void
  cancelRestart: () => void
}

export default function ModalReset({ restart, cancelRestart }: ModalResetProps) {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <HeadingLarge>Restart Game?</HeadingLarge>

        <ButtonBox>
          <SecondaryBtnSilver onClick={cancelRestart}>
            <HeadingExtraSmall>NO, CANCEL</HeadingExtraSmall>
          </SecondaryBtnSilver>
          <SecondaryBtnYellow onClick={restart}>
            <HeadingExtraSmall>YES, RESTART</HeadingExtraSmall>
          </SecondaryBtnYellow>
        </ButtonBox>

      </ModalContent>
    </>
  )
}
