import { WIN_COMBINATIONS } from "./constants";
import { GridArrayProps, Mark } from "./types";

export const checkWinner = (
  currentGrid: GridArrayProps[],
  currentMark: Mark,
  nbOfMoves: number
): {
  hasWinner: boolean,
  winPositions: number[]
} => {

  if (nbOfMoves < 5) {
    return {
      hasWinner: false,
      winPositions: []
    }
  } 

  for (let i = 0; i < WIN_COMBINATIONS.length; i++) {
    const curr = WIN_COMBINATIONS[i];
    if (
      currentGrid[curr[0]].mark === currentMark &&
      currentGrid[curr[1]].mark === currentMark &&
      currentGrid[curr[2]].mark === currentMark
    ) {
      return {
        hasWinner: true,
        winPositions: WIN_COMBINATIONS[i]
      }
    }
  }
  return {
    hasWinner: false,
    winPositions: []
  }
}

export function getComputerMove(currentGrid: GridArrayProps[], personMark: Mark, cpuMark: Mark) {
  let availableSpots:number[] = []

  currentGrid.forEach((grid, index) => {
    if (grid.mark === '') {
      availableSpots.push(index)
    }
  })

  // CPU will try to win
  if (currentGrid[1].mark === cpuMark && currentGrid[2].mark === cpuMark && availableSpots.includes(0)) {
    return 0
  } else if (currentGrid[0].mark === cpuMark && currentGrid[2].mark === cpuMark && availableSpots.includes(1)) {
    return 1
  } else if (currentGrid[0].mark === cpuMark && currentGrid[1].mark === cpuMark && availableSpots.includes(2)) {
    return 2
  } else if (currentGrid[4].mark === cpuMark && currentGrid[5].mark === cpuMark && availableSpots.includes(3)) {
    return 3
  } else if (currentGrid[3].mark === cpuMark && currentGrid[5].mark === cpuMark && availableSpots.includes(4)) {
    return 4
  } else if (currentGrid[3].mark === cpuMark && currentGrid[4].mark === cpuMark && availableSpots.includes(5)) {
    return 5
  } else if (currentGrid[7].mark === cpuMark && currentGrid[8].mark === cpuMark && availableSpots.includes(6)) {
    return 6
  } else if (currentGrid[6].mark === cpuMark && currentGrid[8].mark === cpuMark && availableSpots.includes(7)) {
    return 7
  } else if (currentGrid[6].mark === cpuMark && currentGrid[7].mark === cpuMark && availableSpots.includes(8)) {
    return 8
  } else if (currentGrid[3].mark === cpuMark && currentGrid[6].mark === cpuMark && availableSpots.includes(0)) {
    return 0
  } else if (currentGrid[0].mark === cpuMark && currentGrid[6].mark === cpuMark && availableSpots.includes(3)) {
    return 3
  } else if (currentGrid[0].mark === cpuMark && currentGrid[3].mark === cpuMark && availableSpots.includes(6)) {
    return 6
  } else if (currentGrid[4].mark === cpuMark && currentGrid[7].mark === cpuMark && availableSpots.includes(1)) {
    return 1
  } else if (currentGrid[1].mark === cpuMark && currentGrid[7].mark === cpuMark && availableSpots.includes(4)) {
    return 4
  } else if (currentGrid[1].mark === cpuMark && currentGrid[4].mark === cpuMark && availableSpots.includes(7)) {
    return 7
  } else if (currentGrid[5].mark === cpuMark && currentGrid[8].mark === cpuMark && availableSpots.includes(2)) {
    return 2
  } else if (currentGrid[2].mark === cpuMark && currentGrid[8].mark === cpuMark && availableSpots.includes(5)) {
    return 5
  } else if (currentGrid[2].mark === cpuMark && currentGrid[5].mark === cpuMark && availableSpots.includes(8)) {
    return 8
  } else if (currentGrid[4].mark === cpuMark && currentGrid[8].mark === cpuMark && availableSpots.includes(0)) {
    return 0
  } else if (currentGrid[0].mark === cpuMark && currentGrid[8].mark === cpuMark && availableSpots.includes(4)) {
    return 4
  } else if (currentGrid[0].mark === cpuMark && currentGrid[4].mark === cpuMark && availableSpots.includes(8)) {
    return 8
  } else if (currentGrid[4].mark === cpuMark && currentGrid[6].mark === cpuMark && availableSpots.includes(2)) {
    return 2
  } else if (currentGrid[2].mark === cpuMark && currentGrid[6].mark === cpuMark && availableSpots.includes(4)) {
    return 4
  } else if (currentGrid[2].mark === cpuMark && currentGrid[4].mark === cpuMark && availableSpots.includes(6)) {
    return 6
  }
  // CPU will try to block the player:
  else if (currentGrid[1].mark === personMark && currentGrid[2].mark === personMark && availableSpots.includes(0)) {
    return 0
  } else if (currentGrid[0].mark === personMark && currentGrid[2].mark === personMark && availableSpots.includes(1)) {
    return 1
  } else if (currentGrid[0].mark === personMark && currentGrid[1].mark === personMark && availableSpots.includes(2)) {
    return 2
  } else if (currentGrid[4].mark === personMark && currentGrid[5].mark === personMark && availableSpots.includes(3)) {
    return 3
  } else if (currentGrid[3].mark === personMark && currentGrid[5].mark === personMark && availableSpots.includes(4)) {
    return 4
  } else if (currentGrid[3].mark === personMark && currentGrid[4].mark === personMark && availableSpots.includes(5)) {
    return 5
  } else if (currentGrid[7].mark === personMark && currentGrid[8].mark === personMark && availableSpots.includes(6)) {
    return 6
  } else if (currentGrid[6].mark === personMark && currentGrid[8].mark === personMark && availableSpots.includes(7)) {
    return 7
  } else if (currentGrid[6].mark === personMark && currentGrid[7].mark === personMark && availableSpots.includes(8)) {
    return 8
  } else if (currentGrid[3].mark === personMark && currentGrid[6].mark === personMark && availableSpots.includes(0)) {
    return 0
  } else if (currentGrid[0].mark === personMark && currentGrid[6].mark === personMark && availableSpots.includes(3)) {
    return 3
  } else if (currentGrid[0].mark === personMark && currentGrid[3].mark === personMark && availableSpots.includes(6)) {
    return 6
  } else if (currentGrid[4].mark === personMark && currentGrid[7].mark === personMark && availableSpots.includes(1)) {
    return 1
  } else if (currentGrid[1].mark === personMark && currentGrid[7].mark === personMark && availableSpots.includes(4)) {
    return 4
  } else if (currentGrid[1].mark === personMark && currentGrid[4].mark === personMark && availableSpots.includes(7)) {
    return 7
  } else if (currentGrid[5].mark === personMark && currentGrid[8].mark === personMark && availableSpots.includes(2)) {
    return 2
  } else if (currentGrid[2].mark === personMark && currentGrid[8].mark === personMark && availableSpots.includes(5)) {
    return 5
  } else if (currentGrid[2].mark === personMark && currentGrid[5].mark === personMark && availableSpots.includes(8)) {
    return 8
  } else if (currentGrid[4].mark === personMark && currentGrid[8].mark === personMark && availableSpots.includes(0)) {
    return 0
  } else if (currentGrid[0].mark === personMark && currentGrid[8].mark === personMark && availableSpots.includes(4)) {
    return 4
  } else if (currentGrid[0].mark === personMark && currentGrid[4].mark === personMark && availableSpots.includes(8)) {
    return 8
  } else if (currentGrid[4].mark === personMark && currentGrid[6].mark === personMark && availableSpots.includes(2)) {
    return 2
  } else if (currentGrid[2].mark === personMark && currentGrid[6].mark === personMark && availableSpots.includes(4)) {
    return 4
  } else if (currentGrid[2].mark === personMark && currentGrid[4].mark === personMark && availableSpots.includes(6)) {
    return 6
  } 
  // Or just put in a random spot:
  else {
    const randomSpot = Math.floor(Math.random() * (availableSpots.length));
    return availableSpots[randomSpot]
  }
}
