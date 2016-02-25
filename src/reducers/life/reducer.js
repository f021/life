
import initialState from './initial-state'

import {
  PLAY, STOP, TICK, NEXT, PREV, CLEAR_SCENE, GET_NEXT_POPULATION,
  INSTALL
 } from './actions'
import { combineReducers } from 'redux'

const life = (state = initialState, action) => {
  switch(action.type) {
    case INSTALL:
    console.log('install', state)
      // return {
      //   ...state,
      //   current: fillArr([state.width * state.height], () =>
      //     Math.random() > state.chance ? 1 : 0)
      // }
    case TICK:
    case GET_NEXT_POPULATION:
      console.log(action.life)
    default:
      return state
  }
}


export default life
