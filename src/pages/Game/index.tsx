import React from 'react'
import { GameContainer } from './styles'
import Header from './components/Header'
import Grid from './components/Grid'
import Footer from './components/Footer'

export default function Game() {
  return (
    <GameContainer>
      <Header />
      <Grid />
      <Footer />
    </GameContainer>
  )
}
