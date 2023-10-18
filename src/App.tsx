import { useEffect, useState } from "react"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import defaultTheme from "./styles/theme/default"

import Home from "./pages/Home"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Game from "./pages/Game"
import xImg from './assets/icon-x.svg'
import xImgOutline from './assets/icon-x-outline.svg'
import oImg from './assets/icon-o.svg'
import oImgOutline from './assets/icon-o-outline.svg'
import ModalWinner from "./components/ModalWinner"

export interface GridArrayProps {
  src: string
  mark: string
}

export interface PlayerProps {
  name: string,
  displayName: string,
  mark: string,
  points: number
}

function App() {

  // ******* Get state from Session Storage if have *******
  let initialGrid = [
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
  const gridStoredStateAsJSON = sessionStorage.getItem("tic-tac-toe:grid-state");
  if (gridStoredStateAsJSON) {
    initialGrid = JSON.parse(gridStoredStateAsJSON);
  }

  let initialPlayer1 = {
    name: '',
    displayName: '',
    mark: '',
    points: 0
  }
  const player1StoredStateAsJSON = sessionStorage.getItem("tic-tac-toe:player1-state");
  if (player1StoredStateAsJSON) {
    initialPlayer1 = JSON.parse(player1StoredStateAsJSON);
  }

  let initialPlayer2 = {
    name: '',
    displayName: '',
    mark: '',
    points: 0
  }
  const player2StoredStateAsJSON = sessionStorage.getItem("tic-tac-toe:player2-state");
  if (player2StoredStateAsJSON) {
    initialPlayer2 = JSON.parse(player2StoredStateAsJSON);
  }
  
  let initialCurrentPlayer = ''
  const currentPlayerStoredStateAsJSON = sessionStorage.getItem("tic-tac-toe:currentPlayer-state");
  if (currentPlayerStoredStateAsJSON) {
    initialCurrentPlayer = JSON.parse(currentPlayerStoredStateAsJSON);
  }

  let initialTie = 0
  const currentinitialTieAsJSON = sessionStorage.getItem("tic-tac-toe:tie-state")
  if (currentinitialTieAsJSON) {
    initialTie = JSON.parse(currentinitialTieAsJSON)
  }

  const [ player1, setPlayer1] = useState<PlayerProps>(initialPlayer1)
  const [ player2, setPlayer2] = useState<PlayerProps>(initialPlayer2)
  const [ currentPlayer, setCurrentPlayer ] = useState(initialCurrentPlayer)
  const [grid, setGrid] = useState<GridArrayProps[]>(initialGrid)
  const [winner, setWinner] = useState('')
  const [tie, setTie] = useState(initialTie)
  const [moves, setMoves] = useState(0)
  

  // ******* useEffect to set Session Storage *******
  useEffect(() => {
    const gridStateJSON = JSON.stringify(grid);
    sessionStorage.setItem("tic-tac-toe:grid-state", gridStateJSON);
  }, [grid, currentPlayer]); 

  useEffect(() => {
    const player1StateJSON = JSON.stringify(player1);
    sessionStorage.setItem("tic-tac-toe:player1-state", player1StateJSON);
  }, [player1])

  useEffect(() => {
    const player2StateJSON = JSON.stringify(player2);
    sessionStorage.setItem("tic-tac-toe:player2-state", player2StateJSON);
  }, [player2])

  useEffect(() => {
    const currentPlayerStateJSON = JSON.stringify(currentPlayer);
    sessionStorage.setItem("tic-tac-toe:currentPlayer-state", currentPlayerStateJSON);
  }, [currentPlayer])

  useEffect(() => {
    const currentinitialTieJSON = JSON.stringify(tie)
    sessionStorage.setItem("tic-tac-toe:tie-state", currentinitialTieJSON)
  })

  function handleSetPlayerMark(mark: string) {
    setPlayer1({
      ...player1,
      mark: mark
    })

    setPlayer2({
      ...player2,
      mark: mark === 'X' ? 'O': 'X'
    })
  }
  
  function handleSetNamesPlayer(enemy: string) {
    setPlayer1({
      ...player1,
      name: 'Player 1',
      displayName: enemy === 'cpu' ? 'YOU' : 'P1'
    })

    setPlayer2({
      ...player2,
      name: 'Player 2',
      displayName: enemy === 'cpu' ? 'CPU' : 'P2'
    })
  }

  function handleSetFirstPlayer() {
    const currentPlayerStoredStateAsJSON = sessionStorage.getItem("tic-tac-toe:currentPlayer-state");
    if (currentPlayerStoredStateAsJSON === 'X' || currentPlayerStoredStateAsJSON === 'O') {
      return
    }

    if(player1.mark === 'X') {
      setCurrentPlayer(player1.name)
    } else {
      setCurrentPlayer(player2.name)
    }
  }

  function handleSetCurrentPlayer() {
    if (currentPlayer === player1.name) {
      setCurrentPlayer(player2.name)
    } else {
      setCurrentPlayer(player1.name)
    }
  }

  function handleSetPointsPlayer(winnerPlayer: string) {
    if (winnerPlayer === 'Player 1') {
      setPlayer1({
        ...player1,
        points: player1.points + 1
      })
    } else {
      setPlayer2({
        ...player2,
        points: player2.points + 1
      })
    }
  }

  function handleSetGrid(position: number) {
    let newGrid = grid

    if (currentPlayer === 'Player 1') {
      newGrid[position] = {
        src: player1.mark === 'X' ? xImg : oImg,
        mark: player1.mark
      }
    } else {
      newGrid[position] = {
        src: player2.mark === 'X' ? xImg : oImg,
        mark: player2.mark
      }
    }
    
    setGrid(newGrid)
  }

  function checkWin() {

    if (grid[0].mark  && grid[0].mark === grid[1].mark && grid[1].mark === grid[2].mark) {
      let newGrid = grid
      if (grid[0].mark === 'X') {
        newGrid[0].src = xImgOutline
        newGrid[1].src = xImgOutline
        newGrid[2].src = xImgOutline
      } else {
        newGrid[0].src = oImgOutline
        newGrid[1].src = oImgOutline
        newGrid[2].src = oImgOutline
      }
      setGrid(newGrid)
      setWinner(currentPlayer)
      handleSetPointsPlayer(currentPlayer)
      return [0, 1, 2]

    } else if (grid[3].mark  && grid[3].mark === grid[4].mark && grid[4].mark === grid[5].mark) {
      let newGrid = grid
      if (grid[3].mark === 'X') {
        newGrid[3].src = xImgOutline
        newGrid[4].src = xImgOutline
        newGrid[5].src = xImgOutline
      } else {
        newGrid[3].src = oImgOutline
        newGrid[4].src = oImgOutline
        newGrid[5].src = oImgOutline
      }
      setGrid(newGrid)
      setWinner(currentPlayer)
      handleSetPointsPlayer(currentPlayer)
      return [3, 4, 5]

    } else if (grid[6].mark  && grid[6].mark === grid[7].mark && grid[7].mark === grid[8].mark) {
      let newGrid = grid
      if (grid[6].mark === 'X') {
        newGrid[6].src = xImgOutline
        newGrid[7].src = xImgOutline
        newGrid[8].src = xImgOutline
      } else {
        newGrid[6].src = oImgOutline
        newGrid[7].src = oImgOutline
        newGrid[8].src = oImgOutline
      }
      setGrid(newGrid)
      setWinner(currentPlayer)
      handleSetPointsPlayer(currentPlayer)
      return [6, 7, 8]

    } else if (grid[0].mark  && grid[0].mark === grid[3].mark && grid[3].mark === grid[6].mark) {
      let newGrid = grid
      if (grid[0].mark === 'X') {
        newGrid[0].src = xImgOutline
        newGrid[3].src = xImgOutline
        newGrid[6].src = xImgOutline
      } else {
        newGrid[0].src = oImgOutline
        newGrid[3].src = oImgOutline
        newGrid[6].src = oImgOutline
      }
      setGrid(newGrid)
      setWinner(currentPlayer)
      handleSetPointsPlayer(currentPlayer)
      return [0, 3, 6]
      
    } else if (grid[1].mark  && grid[1].mark === grid[4].mark && grid[4].mark === grid[7].mark) {
      let newGrid = grid
      if (grid[1].mark === 'X') {
        newGrid[1].src = xImgOutline
        newGrid[4].src = xImgOutline
        newGrid[7].src = xImgOutline
      } else {
        newGrid[1].src = oImgOutline
        newGrid[4].src = oImgOutline
        newGrid[7].src = oImgOutline
      }
      setGrid(newGrid)
      setWinner(currentPlayer)
      handleSetPointsPlayer(currentPlayer)
      return [1, 4, 7]
      
    } else if (grid[2].mark  && grid[2].mark === grid[5].mark && grid[5].mark === grid[8].mark) {
      let newGrid = grid
      if (grid[2].mark === 'X') {
        newGrid[2].src = xImgOutline
        newGrid[5].src = xImgOutline
        newGrid[8].src = xImgOutline
      } else {
        newGrid[2].src = oImgOutline
        newGrid[5].src = oImgOutline
        newGrid[8].src = oImgOutline
      }
      setGrid(newGrid)
      setWinner(currentPlayer)
      handleSetPointsPlayer(currentPlayer)
      return [2, 5, 8]
      
    } else if (grid[0].mark  && grid[0].mark === grid[4].mark && grid[4].mark === grid[8].mark) {
      let newGrid = grid
      if (grid[0].mark === 'X') {
        newGrid[0].src = xImgOutline
        newGrid[4].src = xImgOutline
        newGrid[8].src = xImgOutline
      } else {
        newGrid[0].src = oImgOutline
        newGrid[4].src = oImgOutline
        newGrid[8].src = oImgOutline
      }
      setGrid(newGrid)
      setWinner(currentPlayer)
      handleSetPointsPlayer(currentPlayer)
      return [0, 4, 8]
      
    } else if (grid[2].mark  && grid[2].mark === grid[4].mark && grid[4].mark === grid[6].mark) {
      let newGrid = grid
      if (grid[2].mark === 'X') {
        newGrid[2].src = xImgOutline
        newGrid[4].src = xImgOutline
        newGrid[6].src = xImgOutline
      } else {
        newGrid[2].src = oImgOutline
        newGrid[4].src = oImgOutline
        newGrid[6].src = oImgOutline
      }
      setGrid(newGrid)
      setWinner(currentPlayer)
      handleSetPointsPlayer(currentPlayer)
      return [2, 4, 6]
      
    }
    setMoves((state) => state + 1)
    handleSetCurrentPlayer()
    return []
  }

  function quitGame() {
    setPlayer1({
      name: '',
      displayName: '',
      mark: '',
      points: 0
    })
    setPlayer2({
      name: '',
      displayName: '',
      mark: '',
      points: 0
    })
    setWinner('')
    setCurrentPlayer('')
    setGrid([
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
    ])
    setTie(0)
    setMoves(0)
  }

  function nextRound() {
    setWinner('')
    setGrid([
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
    ])
    setMoves(0)
    if(player1.mark === 'X') {
      setCurrentPlayer(player1.name)
    } else {
      setCurrentPlayer(player2.name)
    }
  }

  console.log(moves)
  if (moves === 9) {
    setTie((state) => state + 1)
    setWinner('tie')
    setMoves(0)
  }

  return (
    <div>
      <ThemeProvider theme={defaultTheme} >
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            
            <Route 
              path="/" 
                element={
                  <Home 
                    handleSetPlayerMark={handleSetPlayerMark} 
                    handleSetNamesPlayer={handleSetNamesPlayer}
                  />
                }/>

            <Route 
              path="/game" 
              element={
                <Game 
                  handleSetCurrentPlayer={handleSetCurrentPlayer} 
                  currentPlayer={currentPlayer}
                  handleSetGrid={handleSetGrid}
                  grid={grid}
                  handleSetFirstPlayer={handleSetFirstPlayer}
                  checkWin={checkWin}
                  player1={player1}
                  player2={player2}
                  tie={tie}
                  />
                }/>
          </Routes>
          {
          winner &&
            <ModalWinner 
              player1={player1} 
              player2={player2} 
              winner={winner}
              nextRound={nextRound}
              quitGame={quitGame}
            /> 
          }
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
