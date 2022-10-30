export type AddFilter = {
  type: 'ADD_FILTER';
  filter: string;
}

export type RemoveFilter = {
  type: 'REMOVE_FILTER';
  filter: string;
}

export type ClearFilters = {
  type: 'CLEAR_FILTER'
}

export type Action = AddFilter | RemoveFilter | ClearFilters

export const addFilter = (filter: string): Action => ({
  type: 'ADD_FILTER',
  filter
})

export const removeFilter = (filter: string): Action => ({
  type: 'REMOVE_FILTER',
  filter
})

export const clearFilters = (): Action => ({ type: 'CLEAR_FILTER' })