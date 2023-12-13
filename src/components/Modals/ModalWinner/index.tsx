import { HeadingExtraSmall, HeadingLarge, SecondaryBtnSilver, SecondaryBtnYellow } from "../../../styles/global"
import { ButtonBox, ModalOverlay, ModalContent, WinnerBox } from "../styles"
import oImg from '../../../assets/icon-o.svg'
import xImg from '../../../assets/icon-x.svg'
import { useContext } from "react"
import { GameContext } from "../../../context/GameContext"

export default function ModalWinner() {

  const { state, nextRound, quitGame } = useContext(GameContext)
  const winnerObj = {
    name: state.currentPlayer,
    mark: state.currentPlayer === 'Player 1' ? state.player1.mark : state.player2.mark
  }

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        {
          state.gameMode === 'cpu' && <HeadingExtraSmall> {winnerObj.name === 'Player 1' ? 'you won' : 'Oh no, you lost...'}</HeadingExtraSmall>
        }

        {
          state.gameMode === 'player' && <HeadingExtraSmall> {winnerObj.name === 'Player 1' ? 'player 1 wins' : 'player 2 wins'}</HeadingExtraSmall>
        }

        <WinnerBox
          className={winnerObj.mark === 'x' ? 'X-mark' : 'O-mark'}
        >
          {
           <img src={winnerObj.mark === 'x' ? xImg : oImg} alt={winnerObj.mark} />
          }
          <HeadingLarge> Takes the round </HeadingLarge>
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
