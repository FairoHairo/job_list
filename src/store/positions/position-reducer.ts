import { Position } from '../types'
import { Action } from './position-actions'

export const positionReducer = (state: Position[] = [], action: Action): Position[] => {
  switch(action.type) {
    case 'ADD_POSITIONS': {
      return action.positions
    }

    default: {
      return state
    }
  }
}