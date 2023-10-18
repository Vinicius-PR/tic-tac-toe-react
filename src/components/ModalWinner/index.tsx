import { HeadingExtraSmall, HeadingLarge, SecondaryBtnSilver, SecondaryBtnYellow } from "../../styles/global"
import { ButtonBox, ModalOverlay, ModalContent, WinnerBox } from "./styles"
import oImg from '../../assets/icon-o.svg'
import xImg from '../../assets/icon-x.svg'
import { PlayerProps } from "../../App"
import { useNavigate } from 'react-router-dom'

interface ModalWinnerProps {
  winner: string
  player1: PlayerProps
  player2: PlayerProps
  nextRound: () => void
  quitGame: () => void
}

export default function ModalWinner({ winner, player1, player2, nextRound, quitGame }:ModalWinnerProps) {
  let navigate = useNavigate()

  const winnerObj = {
    mark: winner === 'Player 1' ? player1.mark : (winner === 'Player 2' ? player2.mark : '')
  }

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        {
          winner !== 'tie' && <HeadingExtraSmall> {winner === 'Player 1' ? 'you won' : 'Oh no, you lost...'}</HeadingExtraSmall>
        }

        <WinnerBox
          className={winnerObj.mark === 'X' ? 'X-mark' : (winnerObj.mark === 'O' ? 'O-mark' : '')}
        >
          {
            winner !== 'tie' && <img src={winnerObj.mark === 'X' ? xImg : oImg} alt={winnerObj.mark} />
          }
          <HeadingLarge>
            {
              winner === 'tie' ? 'Round Tied' : 'Takes the round'
            }
          </HeadingLarge>
        </WinnerBox>

        <ButtonBox>
          <SecondaryBtnSilver onClick={() => {
            quitGame()
            navigate('/')
          }}>
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
