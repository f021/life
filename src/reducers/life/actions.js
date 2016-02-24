import game from '../../lib/life/setup'

export * from './rules/actions'
export * from './playground/actions'
export * from './neighbours/actions'
export * from './player/actions'

export const INSTALL = 'INSTALL'
export const RESET_ALL = 'RESET_ALL'
export const CLEAR_SCENE = 'CLEAR_SCENE'
export const GET_NEXT_POPULATION = 'GET_NEXT_POPULATION'

 export const getNextPopulation = () =>
  (dispatch, getState) => {
    dispatch({type: 'GAME'})
    console.log(game(...getState()))
  }
