import { useContext } from "react";
import { GridCell, GridContainer } from "./styles";
import { GameContext } from "../../../../context/GameContext";

export default function Grid() {

  const { state, UpdateGrid } = useContext(GameContext)

  function onGridCellClick(position: number) {
    UpdateGrid(position)
  }


  return (
    <GridContainer>
      {
        state.grid.map((grid, index) => {
          return (
            <GridCell
              key={index}
              onClick={() => {
                if (grid.mark === '') {
                  onGridCellClick(index)
                }
              }}
              style={{
                backgroundColor: state.winPositions.includes(index) ? (grid.mark === 'x' ? '#31C3BD' : (grid.mark === 'o' ? '#F2B137' : '')) : '',
                boxShadow: state.winPositions.includes(index) ? (grid.mark === 'x' ? '0px -8px 0px 0px #118C87 inset' : (grid.mark === 'o' ? '0px -8px 0px 0px #CC8B13 inset' : '')) : ''
              }}
            >
              {
                grid.src === '' ? ('') : (<img src={grid.src} alt={grid.mark} />)
              }
            </GridCell>
          )
        })
      }
    </GridContainer>
  )
}
