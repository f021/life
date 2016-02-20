import initialState from './initial-state'
import { SET_ALONE_RULE, SET_OVERFLOW_RULE, SET_BORN_RULE } from './actions'

const rules = ( state = initialState, action) => {
  switch (action.type) {
    case SET_ALONE_RULE:
      return {
         ...state,
         alone: action.number
       }
    case SET_OVERFLOW_RULE:
      return {
        ...state,
        overflow: action.number
      }
    case SET_BORN_RULE:
      return {
        ...state,
        born: action.number
      }
    default:
      return state
  }
}

export default rules
