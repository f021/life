export * from './rules/actions'
export * from './playground/actions'
export * from './neighbours/actions'

export const GET_NEXT_POPULATION = 'GET_NEXT_POPULATION'

export const getNextPopulation = () => ({
  type: GET_NEXT_POPULATION
})
