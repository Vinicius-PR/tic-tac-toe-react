import { useState } from "react"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import defaultTheme from "./styles/theme/default"

import Home from "./pages/Home"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Game from "./pages/Game"
import Modal from "./components/Modal"

function App() {

  const initialStatePlayer = {
    name: '',
    mark: '',
    points: 0,
  }
  
  const [ player1, setPlayer1] = useState(initialStatePlayer)
  const [ player2, setPlayer2] = useState(initialStatePlayer)

  function setPlayerMark(mark: string) {
    setPlayer1({
      ...player1,
      mark: mark
    })

    setPlayer2({
      ...player2,
      mark: mark === 'X' ? 'O': 'X'
    })
  }
  
  function setNamesPlayer(enemy: string) {
    setPlayer1({
      ...player1,
      name: 'Player 1'
    })

    setPlayer2({
      ...player2,
      name: enemy === 'cpu' ? 'CPU' : 'Player 2'
    })
  }

  return (
    <div>
      <ThemeProvider theme={defaultTheme} >
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home setPlayerMark={setPlayerMark} setNamesPlayer={setNamesPlayer} />}/>
            <Route path="/game" element={<Game />}/>
          </Routes>
        </BrowserRouter>
        {/* <Modal/> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
