import { GameState, GridArrayProps, Player } from "./types";

export const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const initialPlayer: Player = {
  name: '',
  displayName: '',
  mark: '',
  points: 0
}

export const initialGrid: GridArrayProps[] = [
  {
    src: '',
    mark: ''
  },
  {
    src: '',
    mark: ''
  },
  {
    src: '',
    mark: ''
  },
  {
    src: '',
    mark: ''
  },
  {
    src: '',
    mark: ''
  },
  {
    src: '',
    mark: ''
  },
  {
    src: '',
    mark: ''
  },
  {
    src: '',
    mark: ''
  },
  {
    src: '',
    mark: ''
  }
]

export const initialState: GameState = {
  player1: initialPlayer,
  player2: initialPlayer,
  currentPlayer: '',
  firstPlayer: '',
  tie: 0,
  gameMode: 'idle',
  numberOfMoves: 0,
  grid: [...initialGrid],
  winPositions: [],
  isModalWinner: false,
  isModalTie: false,
  isComputerMove: false
}
