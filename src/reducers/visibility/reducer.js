import initialState from './initial-state'
import { TOGGLE_VISIBILITY } from './actions'

const visibility = ( state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return !state
    default:
      return state
  }
}

export default visibility
