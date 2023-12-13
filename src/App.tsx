import { useContext } from "react"

import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components"
import defaultTheme from "./styles/theme/default"


import Home from "./pages/Home"
import Game from "./pages/Game"
import ModalWinner from "./components/Modals/ModalWinner"
import ModalTie from "./components/Modals/ModalTie"
import { GameContext } from "./context/GameContext"

function App() {
  
  const { state } = useContext(GameContext)
  
  return ( 
    <div>
      <ThemeProvider theme={defaultTheme} >
        <GlobalStyle />
        
          {
            state.gameMode === 'idle' ? 
              ( <Home /> ) : 
              (<Game />)
          }

          { state.isModalWinner && <ModalWinner /> }

          { state.isModalTie && <ModalTie /> }

      </ThemeProvider>
    </div>
  );
}

export default App;
