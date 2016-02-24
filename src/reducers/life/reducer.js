import { mergeReducers } from '../../lib/redux-merge'
import { fillArr } from '../../lib/life/fill-array'
import Life from '../../lib/life'
import initialState from './initial-state'
import * as reducers from './reducers'
import {
  PLAY, STOP, TICK, NEXT, PREV, CLEAR_SCENE, GET_NEXT_POPULATION,
  INSTALL
 } from './actions'

const logic = (state = initialState, action) => {
  switch(action.type) {
    case INSTALL:
      return {
        ...state,
        current: fillArr([state.width * state.height], () =>
          Math.random() > state.chance ? 1 : 0)
      }
    case TICK:
    case GET_NEXT_POPULATION:
      console.log(action.life)
    default:
      return state
  }
}

// console.log(Life)
const life = mergeReducers(reducers, logic)

// console.log('in', life)
export default life
