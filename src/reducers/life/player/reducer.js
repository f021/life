import initialState from './initial-state'
import {  PLAY, STOP,
  HIDE
 } from './actions'

const player = ( state = initialState, action) => {
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        timer: state.timer + 1
      }
    case PLAY:
    case STOP:
      return {
        ...state,
        playing: !state.playing,
        timerId: action.timerId
      }
    case HIDE:
      return {
        ...state,
        autohide: !state.autohide
      }
    default:
      return state
  }
}

export default player
