import { GameContainer } from './styles'
import Header from './components/Header'
import Grid from './components/Grid'
import Footer from './components/Footer'
import { GridArrayProps, PlayerProps } from '../../App'

interface GameComponentProps {
  handleSetCurrentPlayer: () => void
  handleSetGrid: (position: number) => void
  currentPlayer: string
  grid: GridArrayProps[]
  handleSetFirstPlayer: () => void
  checkWin: () => number[]
  player1: PlayerProps
  player2: PlayerProps
  tie: number
}

export default function Game({ 
  handleSetCurrentPlayer, 
  currentPlayer, 
  handleSetGrid, 
  grid, 
  handleSetFirstPlayer, 
  checkWin, 
  player1, 
  player2,
  tie
  }: GameComponentProps) {

  let canSetFirstPlayer = sessionStorage.getItem("tic-tac-toe:canSetFirstPlayer");
  if (canSetFirstPlayer === 'true') {
    handleSetFirstPlayer()
    const canSetFirstPlayerJSON = JSON.stringify(false);
    sessionStorage.setItem("tic-tac-toe:canSetFirstPlayer", canSetFirstPlayerJSON)
  }

  return (
    <GameContainer>
      <Header 
        currentPlayer={currentPlayer}
        player1={player1}
        player2={player2}
      />
      <Grid 
        handleSetCurrentPlayer={handleSetCurrentPlayer} 
        currentPlayer={currentPlayer}
        handleSetGrid={handleSetGrid}
        grid={grid}
        checkWin={checkWin}
      />
      <Footer 
        player1={player1}
        player2={player2}
        tie={tie}
      />
    </GameContainer>
  )
}
