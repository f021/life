import initialState from './initial-state'
import {
  PLAY,
  PAUSE,
  TICK,
  SET_SPEED
} from './actions'

const player = ( state = initialState, action) => {
  switch (action.type) {
    case SET_SPEED:
      return {
        ...state,
        speed: action.speed
      }
    case 'TICK':
      return {
        ...state,
        timer: state.timer + 1
      }
    case PLAY:
    case PAUSE:
      return {
        ...state,
        playing: action.type === PLAY ? true : false
      }
    default:
      return state
  }
}

export default player
