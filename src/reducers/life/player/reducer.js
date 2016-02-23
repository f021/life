import initialState from './initial-state'
import {  PLAY, PAUSE, HIDE,
  SET_FULL_PAGE
 } from './actions'

const player = ( state = initialState, action) => {
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        timer: state.timer + 1
      }
    case PLAY:
    case PAUSE:
      return {
        ...state,
        playing: action.type === PLAY ? true : false,
        timerId: action.timerId
      }
    case HIDE:
      return {
        ...state,
        autohide: !state.autohide
      }
    case SET_FULL_PAGE:
      return {
        ...state,
        fullPage: !state.fullPage
      }
    default:
      return state
  }
}

export default player
