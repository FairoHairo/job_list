import { Position } from "../types"


export type AddPositions = {
  type: 'ADD_POSITIONS';
  positions: Position[];
}


export type Action = AddPositions

export const addPositions = (positions: Position[]): Action => {
  console.log(1)

  return ({
    type: "ADD_POSITIONS",
    positions
  })
}