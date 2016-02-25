import game from '../../lib/life'

let evolution = game()
export * from './rules/actions'
export * from './playground/actions'
export * from './neighbours/actions'
export * from './player/actions'

export const INSTALL = 'INSTALL'
export const RESET_ALL = 'RESET_ALL'
export const CLEAR_SCENE = 'CLEAR_SCENE'
export const GET_NEXT_POPULATION = 'GET_NEXT_POPULATION'

const convert = obj => {
  return {
    current: obj.current,
    state: {
      rules: {
        alone: obj.alone,
        born: obj.born,
        overflow: obj.overflow
      },
      pattern: {
        startPoint: obj.startPoint,
        arr: obj.arr,
        w: obj.w,
        h: obj.h
      },
      scene: {
        w: obj.width,
        h: obj.height,
        flag: obj.tor
      }
    }
  }
}


 export const getNextPopulation = () =>
  (dispatch, getState) => {
    console.log(evolution(convert(getState())))
    dispatch({type: 'GAME'})
  }
