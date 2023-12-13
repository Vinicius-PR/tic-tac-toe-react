export type currentPlayer = 'Player 1' | 'Player 2' | ''

export type Mark = 'x' | 'o' | '';

type DisplayNamePlayer = 'P1' | 'YOU' | 'P2' | 'CPU' | '';

export interface Player {
  name: string
  displayName: DisplayNamePlayer
  mark: Mark
  points: number
}

export interface GridArrayProps {
  src: string
  mark: Mark
}

export type Gamemode = 'idle' | 'cpu' | 'player';

export interface GameState {
  player1: Player
  player2: Player
  currentPlayer: currentPlayer
  firstPlayer: currentPlayer
  tie: number
  gameMode: Gamemode
  numberOfMoves: number
  grid: GridArrayProps[]
  winPositions: number[]
  isModalWinner: boolean
  isModalTie: boolean
  isComputerMove: boolean
}

export enum ActionsTypes {
  INIT_GAME,
  UPDATE_GRID,
  NEXT_ROUND,
  QUIT_GAME,
  RESTART_GAME
}

export type ActionInitGame = {
  type: ActionsTypes.INIT_GAME
  payload: {
    player1Choice: Mark
    gameMode: Gamemode
  }
}

export type ActionSetGrid = {
  type: ActionsTypes.UPDATE_GRID
  payload: number
}

export type ActionNextRound = {
  type: ActionsTypes.NEXT_ROUND
}

export type ActionQuitGame = {
  type: ActionsTypes.QUIT_GAME
}

export type ActionRestartGame = {
  type: ActionsTypes.RESTART_GAME
}