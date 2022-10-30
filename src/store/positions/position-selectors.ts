import { State } from "../types"

export const selectAllPositions = (state: State) => state.positions

export const  selectVisiblePositions = (state: State, filters: string[]) => {
  if (filters.length === 0) return state.positions

  return state.positions.filter((pos) => {
    const positionFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools)

    return filters.every((item) => positionFilters.includes(item))
  })
}