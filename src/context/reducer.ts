import { ActionInitGame, ActionNextRound, ActionQuitGame, ActionSetGrid, ActionsTypes, GameState, currentPlayer, ActionRestartGame } from "./types"
import xImg from '../assets/icon-x.svg'
import oImg from '../assets/icon-o.svg'
import xImgOutline from '../assets/icon-x-outline.svg'
import oImgOutline from '../assets/icon-o-outline.svg'
import { initialGrid, initialState } from "./constants"
import { checkWinner } from "./helpers"

export function GameReducer(
  state: GameState, 
  action: ActionInitGame | ActionSetGrid | ActionNextRound | ActionQuitGame | ActionRestartGame
  ): GameState {

  switch (action.type) {

    case ActionsTypes.INIT_GAME: {
      const { player1Choice, gameMode } = action.payload
      return {
        ...state,
        player1: {
          name: 'Player 1',
          displayName: gameMode === 'player' ? 'P1' : 'YOU',
          mark: player1Choice,
          points: 0
        },
        player2: {
          name: 'Player 2',
          displayName: gameMode === 'player' ? 'P2' : 'CPU',
          mark: player1Choice === 'x' ? 'o' : 'x',
          points: 0
        },
        gameMode: gameMode,
        currentPlayer: player1Choice === 'x' ? 'Player 1' : 'Player 2',
        firstPlayer: player1Choice === 'x' ? 'Player 1' : 'Player 2',
        isComputerMove: player1Choice === 'x' ? false : true
      }
    }

    case ActionsTypes.UPDATE_GRID: {
      let newGrid = state.grid
      const position = action.payload
      const numberMoves = state.numberOfMoves + 1
      const currentMark = state.currentPlayer === 'Player 1' ? state.player1.mark : state.player2.mark

      if (state.currentPlayer === 'Player 1') {
        newGrid[position] = {
          src: state.player1.mark === 'x' ? xImg : oImg,
          mark: state.player1.mark
        }
      } else {
        newGrid[position] = {
          src: state.player2.mark === 'x' ? xImg : oImg,
          mark: state.player2.mark
        }
      }

      const result = checkWinner(newGrid, currentMark, numberMoves)
      const { winPositions } = result
      
      if (result.hasWinner) {
        
        if (currentMark === 'x') {
          newGrid[winPositions[0]].src = xImgOutline
          newGrid[winPositions[1]].src = xImgOutline
          newGrid[winPositions[2]].src = xImgOutline
        } else {
          newGrid[winPositions[0]].src = oImgOutline
          newGrid[winPositions[1]].src = oImgOutline
          newGrid[winPositions[2]].src = oImgOutline
        }

        if (state.currentPlayer === 'Player 1') { // Player 1 won
          return {
            ...state,
            winPositions: winPositions,
            isModalWinner: true,
            player1: {
              ...state.player1,
              points: state.player1.points + 1
            },
            grid: newGrid,
          }
        } else if (state.currentPlayer === 'Player 2') { // Player 2 won
          return {
            ...state,
            winPositions: winPositions,
            isModalWinner: true,
            player2: {
              ...state.player2,
              points: state.player2.points + 1
            },
            grid: newGrid,
          }
        }
        
      } else if (numberMoves === 9 && !result.hasWinner) { // It is a Tie.
        return {
          ...state,
          isModalTie: true,
          tie: state.tie + 1,
        }
      }

      return {
        ...state,
        grid: newGrid,
        currentPlayer: state.currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1',
        numberOfMoves: state.numberOfMoves + 1,
        isComputerMove: state.gameMode === 'cpu' ? !state.isComputerMove : false
      }

    }

    case ActionsTypes.NEXT_ROUND: {
      const nextFirstPlayer:currentPlayer = state.firstPlayer === 'Player 1' ? 'Player 2' : 'Player 1'
      return {
        ...state,
        isModalWinner: false,
        isModalTie: false,
        grid: [...initialGrid],
        numberOfMoves: 0,
        winPositions: [],
        firstPlayer: nextFirstPlayer,
        currentPlayer: nextFirstPlayer,
        isComputerMove: (nextFirstPlayer === 'Player 2' &&  state.gameMode === 'cpu') ? true : false 
        // When gameMode is cpu, Player 2 will always be the cpu player.
      }
    }

    case ActionsTypes.QUIT_GAME:  {
      return {...initialState, grid:[...initialGrid]}
    }

    case ActionsTypes.RESTART_GAME: {
      const currentFirstPlayer = state.firstPlayer
      let isComputerMove = false
      if (state.gameMode === 'cpu' && currentFirstPlayer === 'Player 2') {
        isComputerMove = true
      }
      return {
        ...state,
        isComputerMove: isComputerMove,
        firstPlayer: currentFirstPlayer,
        currentPlayer: currentFirstPlayer,
        grid: [...initialGrid],
        tie: 0,
        player1: {
          ...state.player1,
          points: 0
        },
        player2: {
          ...state.player2,
          points: 0
        },
        numberOfMoves: 0,
      }
    }

    default:
      return state
  }
}