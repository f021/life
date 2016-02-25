import initialState from './initial-state'
import { SET_RULE } from './actions'

const rules = ( state = initialState, action) => {
  switch (action.type) {
    case SET_RULE:
      return {
        ...state,
        [action.rule]: Number(action.value)
      }
    default:
      return state
  }
}

export default rules
