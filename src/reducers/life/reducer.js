import { mergeReducers } from '../../lib/redux-merge'
import Life from '../../lib/life'
import initialState from './initial-state'
import * as reducers from './reducers'
import {
  PLAY, STOP, NEXT, PREV, CLEAR_SCENE, GET_NEXT_POPULATION,
  INSTALL
 } from './actions'


const logic = (state = initialState, action) => {
  switch(action.type) {
    case INSTALL:

    default:
      return state
  }
}

// console.log(Life)
const life = mergeReducers(reducers, logic)

// console.log('in', life)
export default life
