import { GameContainer } from './styles'
import Header from './components/Header'
import Grid from './components/Grid'
import Footer from './components/Footer'
import { GridArrayProps, PlayerProps } from '../../App'

interface GameComponentProps {
  handleSetGrid: (position: number) => void
  currentPlayer: string
  grid: GridArrayProps[]
  checkWin: () => number[]
  player1: PlayerProps
  player2: PlayerProps
  tie: number
  handleSetModalReset: () => void
  enemy: 'player' | 'cpu' | ''
}

export default function Game({ 
  currentPlayer, 
  handleSetGrid, 
  grid,
  checkWin, 
  player1, 
  player2,
  tie,
  handleSetModalReset,
  enemy
  }: GameComponentProps) {

  return (
    <GameContainer>
      <Header 
        currentPlayer={currentPlayer}
        player1={player1}
        player2={player2}
        handleSetModalReset={handleSetModalReset}
      />
      <Grid
        handleSetGrid={handleSetGrid}
        grid={grid}
        checkWin={checkWin}
        currentPlayer={currentPlayer}
        player1={player1}
        player2={player2}
        enemy={enemy}
      />
      <Footer 
        player1={player1}
        player2={player2}
        tie={tie}
      />
    </GameContainer>
  )
}
