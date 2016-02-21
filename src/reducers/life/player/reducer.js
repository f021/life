import initialState from './initial-state'
import { toggleKey } from '../../../utils'
import {
  PLAY,
  STOP,
  HIDE
 } from './actions'

const player = ( state = initialState, action) => {
  const turn = toggleKey(state)
  switch (action.type) {
    case PLAY:
    case STOP:
      return turn('playing')
    case HIDE:
      return turn('autohide')
    default:
      return state
  }
}

export default player
