import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { GameReducer } from './reducer'
import { ActionsTypes, Gamemode, GameState, Mark } from './types'
import { initialState } from './constants'
import { getComputerMove } from './helpers'

interface GameContextType {
  state: GameState
  initGame: (player1Choice: Mark, gameMode: Gamemode) => void
  UpdateGrid: (position: number) => void
  nextRound: () => void
  restartGame: () => void
  quitGame: () => void
}

interface GameContextProviderProps {
  children: ReactNode
}

export const GameContext = createContext({} as GameContextType)

export function GameContextProvider({children}: GameContextProviderProps) {

  const [state, dispatch] = useReducer(GameReducer, initialState, () => {
    // Getting the state on sessionStorage
    const initialStateStorageAsJSON = sessionStorage.getItem('tic-tac-toe:game-state')

    if (initialStateStorageAsJSON) {
      return JSON.parse(initialStateStorageAsJSON)
    }
    return initialState
  })

  function initGame(player1Choice: Mark, gameMode: Gamemode) {
    dispatch({type: ActionsTypes.INIT_GAME, payload: {player1Choice, gameMode}})
  }

  function UpdateGrid(position: number) {
    dispatch({type: ActionsTypes.UPDATE_GRID, payload: position})
  }

  function nextRound() {
    dispatch({type: ActionsTypes.NEXT_ROUND})
  }

  function quitGame() {
    dispatch({type: ActionsTypes.QUIT_GAME})
  }

  function restartGame() {
    dispatch({type: ActionsTypes.RESTART_GAME})
  }

  useEffect(() => {
    if (state.isComputerMove && state.gameMode === 'cpu') {
      dispatch({type: ActionsTypes.UPDATE_GRID, payload: getComputerMove(state.grid, state.player1.mark, state.player2.mark)})
    }
  }, [state.isComputerMove, state.gameMode, state.grid, state.player1.mark, state.player2.mark])

  // Saving the state on sessionStorage
  useEffect(() => {
    const currentStateJSON = JSON.stringify(state)
    sessionStorage.setItem('tic-tac-toe:game-state', currentStateJSON)
  }, [state])

  return (
    <GameContext.Provider value={{
      state,
      initGame,
      UpdateGrid,
      nextRound,
      restartGame,
      quitGame
    }}>
      {children}
    </GameContext.Provider>
  )
}