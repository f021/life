import initialState from './initial-state'
import {
  SET_PLAYGROUND_SIZE,
  SET_PLAYGROUND,
  SET_PLAYGROUND_MODE
} from './actions'

const rules = ( state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYGROUND_SIZE:
      return {
         ...state,
         alone: action.number
       }
    case SET_PLAYGROUND_MODE:
      return {
        ...state,
        mode: !state.mode
      }
    case SET_PLAYGROUND:
      console.log(state)
      return {
        ...state,
        ...action.playground
      }
    default:
      return state
  }
}

export default rules
