import { GridCell, GridContainer } from "./styles";
import { GridArrayProps } from "../../../../App";
import { useState } from "react";

interface GridProps {
  handleSetCurrentPlayer: () => void
  currentPlayer: string
  handleSetGrid: (position: number) => void
  grid: GridArrayProps[]
  checkWin: () => number[]
}

export default function Grid({handleSetCurrentPlayer, currentPlayer, handleSetGrid, grid, checkWin}: GridProps) {

  const [winPositions, setWinPositions] = useState<number[]>([])

  function onGridCellClick(position: number) {
    handleSetGrid(position)
    setWinPositions(checkWin())
  }

  return (
    <GridContainer>

      <GridCell 
        onClick={() => {
          if (grid[0].mark === '') {
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
          if (grid[1].mark === '') {
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
          if (grid[2].mark === '') {
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
          if (grid[3].mark === '') {
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
          if (grid[4].mark === '') {
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
          if (grid[5].mark === '') {
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
          if (grid[6].mark === '') {
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
          if (grid[7].mark === '') {
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
          if (grid[8].mark === '') {
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
