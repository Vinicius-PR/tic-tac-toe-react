import { useState } from 'react'
import { GameContainer } from './styles'
import Header from './components/Header'
import Grid from './components/Grid'
import Footer from './components/Footer'
import ModalRestart from '../../components/Modals/ModalRestart'

export default function Game() {

  const [isModalReset, setIsModalReset] = useState(false)

  function handleOpenCloseResetModal() {
    setIsModalReset((state) => !state)
  }

  return (
    <GameContainer>
      <Header handleOpenCloseResetModal={handleOpenCloseResetModal}/>
      <Grid />
      <Footer />

      {
        isModalReset && 
        <ModalRestart handleOpenCloseResetModal={handleOpenCloseResetModal}/>
      }

    </GameContainer>
  )
}
