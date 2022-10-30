import { combineReducers } from 'redux'
import { positionReducer } from './positions/position-reducer'
import filterReducer from './filters'
import { State } from './types'

export const rootReducer = combineReducers<State>({
  positions: positionReducer,
  filters: filterReducer
})