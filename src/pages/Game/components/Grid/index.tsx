import { GridCell, GridContainer } from "./styles";
import { GridArrayProps, PlayerProps } from "../../../../App";
import { useEffect, useState } from "react";

interface GridProps {
  handleSetGrid: (position: number) => void
  grid: GridArrayProps[]
  checkWin: () => number[]
  currentPlayer: string
  player1: PlayerProps
  player2: PlayerProps
  enemy: 'player' | 'cpu' | ''
}

export default function Grid({ handleSetGrid, grid, checkWin, currentPlayer, player2, player1, enemy}: GridProps) {

  const [winPositions, setWinPositions] = useState<number[]>([])
  const [canClickCell, setCanClickCell] = useState(true)
  
  function onGridCellClick(position: number) {
    handleSetGrid(position)
    setWinPositions(checkWin())
  }

  function computerMove() {
    let availableSpots:number[] = []

    grid.forEach((value, index) => {
      if (value.mark === '') {
        availableSpots.push(index)
      }
    })

    const enemyMark = player1.mark
    const cpuMark = player2.mark

    // CPU will try to win
    if (grid[1].mark === cpuMark && grid[2].mark === cpuMark && availableSpots.includes(0)) {
      onGridCellClick(0)
    } else if (grid[0].mark === cpuMark && grid[2].mark === cpuMark && availableSpots.includes(1)) {
      onGridCellClick(1)
    } else if (grid[0].mark === cpuMark && grid[1].mark === cpuMark && availableSpots.includes(2)) {
      onGridCellClick(2)
    } else if (grid[4].mark === cpuMark && grid[5].mark === cpuMark && availableSpots.includes(3)) {
      onGridCellClick(3)
    } else if (grid[3].mark === cpuMark && grid[5].mark === cpuMark && availableSpots.includes(4)) {
      onGridCellClick(4)
    } else if (grid[3].mark === cpuMark && grid[4].mark === cpuMark && availableSpots.includes(5)) {
      onGridCellClick(5)
    } else if (grid[7].mark === cpuMark && grid[8].mark === cpuMark && availableSpots.includes(6)) {
      onGridCellClick(6)
    } else if (grid[6].mark === cpuMark && grid[8].mark === cpuMark && availableSpots.includes(7)) {
      onGridCellClick(7)
    } else if (grid[6].mark === cpuMark && grid[7].mark === cpuMark && availableSpots.includes(8)) {
      onGridCellClick(8)
    } else if (grid[3].mark === cpuMark && grid[6].mark === cpuMark && availableSpots.includes(0)) {
      onGridCellClick(0)
    } else if (grid[0].mark === cpuMark && grid[6].mark === cpuMark && availableSpots.includes(3)) {
      onGridCellClick(3)
    } else if (grid[0].mark === cpuMark && grid[3].mark === cpuMark && availableSpots.includes(6)) {
      onGridCellClick(6)
    } else if (grid[4].mark === cpuMark && grid[7].mark === cpuMark && availableSpots.includes(1)) {
      onGridCellClick(1)
    } else if (grid[1].mark === cpuMark && grid[7].mark === cpuMark && availableSpots.includes(4)) {
      onGridCellClick(4)
    } else if (grid[1].mark === cpuMark && grid[4].mark === cpuMark && availableSpots.includes(7)) {
      onGridCellClick(7)
    } else if (grid[5].mark === cpuMark && grid[8].mark === cpuMark && availableSpots.includes(2)) {
      onGridCellClick(2)
    } else if (grid[2].mark === cpuMark && grid[8].mark === cpuMark && availableSpots.includes(5)) {
      onGridCellClick(5)
    } else if (grid[2].mark === cpuMark && grid[5].mark === cpuMark && availableSpots.includes(8)) {
      onGridCellClick(8)
    } else if (grid[4].mark === cpuMark && grid[8].mark === cpuMark && availableSpots.includes(0)) {
      onGridCellClick(0)
    } else if (grid[0].mark === cpuMark && grid[8].mark === cpuMark && availableSpots.includes(4)) {
      onGridCellClick(4)
    } else if (grid[0].mark === cpuMark && grid[4].mark === cpuMark && availableSpots.includes(8)) {
      onGridCellClick(8)
    } else if (grid[4].mark === cpuMark && grid[6].mark === cpuMark && availableSpots.includes(2)) {
      onGridCellClick(2)
    } else if (grid[2].mark === cpuMark && grid[6].mark === cpuMark && availableSpots.includes(4)) {
      onGridCellClick(4)
    } else if (grid[2].mark === cpuMark && grid[4].mark === cpuMark && availableSpots.includes(6)) {
      onGridCellClick(6)
    }
    // CPU will try to block the player:
     else if (grid[1].mark === enemyMark && grid[2].mark === enemyMark && availableSpots.includes(0)) {
      onGridCellClick(0)
    } else if (grid[0].mark === enemyMark && grid[2].mark === enemyMark && availableSpots.includes(1)) {
      onGridCellClick(1)
    } else if (grid[0].mark === enemyMark && grid[1].mark === enemyMark && availableSpots.includes(2)) {
      onGridCellClick(2)
    } else if (grid[4].mark === enemyMark && grid[5].mark === enemyMark && availableSpots.includes(3)) {
      onGridCellClick(3)
    } else if (grid[3].mark === enemyMark && grid[5].mark === enemyMark && availableSpots.includes(4)) {
      onGridCellClick(4)
    } else if (grid[3].mark === enemyMark && grid[4].mark === enemyMark && availableSpots.includes(5)) {
      onGridCellClick(5)
    } else if (grid[7].mark === enemyMark && grid[8].mark === enemyMark && availableSpots.includes(6)) {
      onGridCellClick(6)
    } else if (grid[6].mark === enemyMark && grid[8].mark === enemyMark && availableSpots.includes(7)) {
      onGridCellClick(7)
    } else if (grid[6].mark === enemyMark && grid[7].mark === enemyMark && availableSpots.includes(8)) {
      onGridCellClick(8)
    } else if (grid[3].mark === enemyMark && grid[6].mark === enemyMark && availableSpots.includes(0)) {
      onGridCellClick(0)
    } else if (grid[0].mark === enemyMark && grid[6].mark === enemyMark && availableSpots.includes(3)) {
      onGridCellClick(3)
    } else if (grid[0].mark === enemyMark && grid[3].mark === enemyMark && availableSpots.includes(6)) {
      onGridCellClick(6)
    } else if (grid[4].mark === enemyMark && grid[7].mark === enemyMark && availableSpots.includes(1)) {
      onGridCellClick(1)
    } else if (grid[1].mark === enemyMark && grid[7].mark === enemyMark && availableSpots.includes(4)) {
      onGridCellClick(4)
    } else if (grid[1].mark === enemyMark && grid[4].mark === enemyMark && availableSpots.includes(7)) {
      onGridCellClick(7)
    } else if (grid[5].mark === enemyMark && grid[8].mark === enemyMark && availableSpots.includes(2)) {
      onGridCellClick(2)
    } else if (grid[2].mark === enemyMark && grid[8].mark === enemyMark && availableSpots.includes(5)) {
      onGridCellClick(5)
    } else if (grid[2].mark === enemyMark && grid[5].mark === enemyMark && availableSpots.includes(8)) {
      onGridCellClick(8)
    } else if (grid[4].mark === enemyMark && grid[8].mark === enemyMark && availableSpots.includes(0)) {
      onGridCellClick(0)
    } else if (grid[0].mark === enemyMark && grid[8].mark === enemyMark && availableSpots.includes(4)) {
      onGridCellClick(4)
    } else if (grid[0].mark === enemyMark && grid[4].mark === enemyMark && availableSpots.includes(8)) {
      onGridCellClick(8)
    } else if (grid[4].mark === enemyMark && grid[6].mark === enemyMark && availableSpots.includes(2)) {
      onGridCellClick(2)
    } else if (grid[2].mark === enemyMark && grid[6].mark === enemyMark && availableSpots.includes(4)) {
      onGridCellClick(4)
    } else if (grid[2].mark === enemyMark && grid[4].mark === enemyMark && availableSpots.includes(6)) {
      onGridCellClick(6)
    } 
    // Or just put in a random spot:
    else {
      const randomSpot = Math.floor(Math.random() * (availableSpots.length));
      onGridCellClick(availableSpots[randomSpot])
    }
  } 

  useEffect(() => {
    if (currentPlayer === player2.name && player2.displayName === 'CPU') {
      console.log('computer turn')
      setCanClickCell(false)
      // Used a timer so people can see the computer "thinking"
      setTimeout(() => {
        computerMove()
        setCanClickCell(true)
      }, 300)
    }
  }, [currentPlayer])

  return (
    <GridContainer>

      <GridCell 
        onClick={() => {
          if (grid[0].mark === '' && canClickCell) {
            onGridCellClick(0)
          }
        }}
        style={{
          backgroundColor: winPositions.includes(0) ? (grid[0].mark === 'X' ? '#31C3BD' : (grid[0].mark === 'O' ? '#F2B137' : '')) : '',
          boxShadow: winPositions.includes(0) ? (grid[0].mark === 'X' ? '0px -8px 0px 0px #118C87 inset' : (grid[0].mark === 'O' ? '0px -8px 0px 0px #CC8B13 inset' : '')) : ''
        }}
      >
        {
          grid[0].src === '' ? ('') : (
            <img src={grid[0].src} alt={grid[0].mark} />
          )
        }
        
      </GridCell>

      <GridCell 
        onClick={() => {
          if (grid[1].mark === '' && canClickCell) {
            onGridCellClick(1)
          }
        }}
        style={{
          backgroundColor: winPositions.includes(1) ? (grid[1].mark === 'X' ? '#31C3BD' : (grid[1].mark === 'O' ? '#F2B137' : '')) : '',
          boxShadow: winPositions.includes(1) ? (grid[1].mark === 'X' ? '0px -8px 0px 0px #118C87 inset' : (grid[1].mark === 'O' ? '0px -8px 0px 0px #CC8B13 inset' : '')) : ''
        }}
      >
        {
          grid[1].src === '' ? ('') : (
            <img src={grid[1].src} alt={grid[1].mark} />
          )
        }
        
      </GridCell>

      <GridCell 
        onClick={() => {
          if (grid[2].mark === '' && canClickCell) {
            onGridCellClick(2)
          }
        }}
        style={{
          backgroundColor: winPositions.includes(2) ? (grid[2].mark === 'X' ? '#31C3BD' : (grid[2].mark === 'O' ? '#F2B137' : '')) : '',
          boxShadow: winPositions.includes(2) ? (grid[2].mark === 'X' ? '0px -8px 0px 0px #118C87 inset' : (grid[2].mark === 'O' ? '0px -8px 0px 0px #CC8B13 inset' : '')) : ''
        }}
      >
        {
          grid[2].src === '' ? ('') : (
            <img src={grid[2].src} alt={grid[2].mark} />
          )
        }
        
      </GridCell>

      <GridCell 
        onClick={() => {
          if (grid[3].mark === '' && canClickCell) {
            onGridCellClick(3)
          }
        }}
        style={{
          backgroundColor: winPositions.includes(3) ? (grid[3].mark === 'X' ? '#31C3BD' : (grid[3].mark === 'O' ? '#F2B137' : '')) : '',
          boxShadow: winPositions.includes(3) ? (grid[3].mark === 'X' ? '0px -8px 0px 0px #118C87 inset' : (grid[3].mark === 'O' ? '0px -8px 0px 0px #CC8B13 inset' : '')) : ''
        }}
      >
        {
          grid[3].src === '' ? ('') : (
            <img src={grid[3].src} alt={grid[3].mark} />
          )
        }
        
      </GridCell>

      <GridCell 
        onClick={() => {
          if (grid[4].mark === '' && canClickCell) {
            onGridCellClick(4)
          }
        }}
        style={{
          backgroundColor: winPositions.includes(4) ? (grid[4].mark === 'X' ? '#31C3BD' : (grid[4].mark === 'O' ? '#F2B137' : '')) : '',
          boxShadow: winPositions.includes(4) ? (grid[4].mark === 'X' ? '0px -8px 0px 0px #118C87 inset' : (grid[4].mark === 'O' ? '0px -8px 0px 0px #CC8B13 inset' : '')) : ''
        }}
      >
        {
          grid[4].src === '' ? ('') : (
            <img src={grid[4].src} alt={grid[4].mark} />
          )
        }
        
      </GridCell>

      <GridCell 
        onClick={() => {
          if (grid[5].mark === '' && canClickCell) {
            onGridCellClick(5)
          }
        }}
        style={{
          backgroundColor: winPositions.includes(5) ? (grid[5].mark === 'X' ? '#31C3BD' : (grid[5].mark === 'O' ? '#F2B137' : '')) : '',
          boxShadow: winPositions.includes(5) ? (grid[5].mark === 'X' ? '0px -8px 0px 0px #118C87 inset' : (grid[5].mark === 'O' ? '0px -8px 0px 0px #CC8B13 inset' : '')) : ''
        }}
      >
        {
          grid[5].src === '' ? ('') : (
            <img src={grid[5].src} alt={grid[5].mark} />
          )
        }
        
      </GridCell>

      <GridCell 
        onClick={() => {
          if (grid[6].mark === '' && canClickCell) {
            onGridCellClick(6)
          }
        }}
        style={{
          backgroundColor: winPositions.includes(6) ? (grid[6].mark === 'X' ? '#31C3BD' : (grid[6].mark === 'O' ? '#F2B137' : '')) : '',
          boxShadow: winPositions.includes(6) ? (grid[6].mark === 'X' ? '0px -8px 0px 0px #118C87 inset' : (grid[6].mark === 'O' ? '0px -8px 0px 0px #CC8B13 inset' : '')) : ''
        }}
      >
        {
          grid[6].src === '' ? ('') : (
            <img src={grid[6].src} alt={grid[6].mark} />
          )
        }
        
      </GridCell>

      <GridCell 
        onClick={() => {
          if (grid[7].mark === '' && canClickCell) {
            onGridCellClick(7)
          }
        }}
        style={{
          backgroundColor: winPositions.includes(7) ? (grid[7].mark === 'X' ? '#31C3BD' : (grid[7].mark === 'O' ? '#F2B137' : '')) : '',
          boxShadow: winPositions.includes(7) ? (grid[7].mark === 'X' ? '0px -8px 0px 0px #118C87 inset' : (grid[7].mark === 'O' ? '0px -8px 0px 0px #CC8B13 inset' : '')) : ''
        }}
      >
        {
          grid[7].src === '' ? ('') : (
            <img src={grid[7].src} alt={grid[7].mark} />
          )
        }
        
      </GridCell>

      <GridCell 
        onClick={() => {
          if (grid[8].mark === '' && canClickCell) {
            onGridCellClick(8)
          }
        }}
        style={{
          backgroundColor: winPositions.includes(8) ? (grid[8].mark === 'X' ? '#31C3BD' : (grid[8].mark === 'O' ? '#F2B137' : '')) : '',
          boxShadow: winPositions.includes(8) ? (grid[8].mark === 'X' ? '0px -8px 0px 0px #118C87 inset' : (grid[8].mark === 'O' ? '0px -8px 0px 0px #CC8B13 inset' : '')) : ''
        }}
      >
        {
          grid[8].src === '' ? ('') : (
            <img src={grid[8].src} alt={grid[8].mark} />
          )
        }
        
      </GridCell>

    </GridContainer>
  )
}
