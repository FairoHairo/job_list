import { Action } from './filters-actions'

export const filterReducer = (state: string[] = [], action: Action) => {
  switch(action.type) {
    case 'ADD_FILTER': {
      if (state.includes(action.filter)) return state

      return [...state, action.filter]
    }

    case 'REMOVE_FILTER': {
      return state.filter((item) => item !== action.filter)
    }

    case 'CLEAR_FILTER': {
      return []
    } 

    default: {
      return state 
    }
  }
}