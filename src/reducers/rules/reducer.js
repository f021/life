import initialState from './initial-state'
import {
  SET_ALONE_RULE,
  SET_OVERFLOW_RULE,
  SET_BORN_RULE
} from './actions'

const rules = ( state = initialState, action) => {
  const newState = key => ({
    ...state,
    [key]: action.rule
  })
  switch (action.type) {
    case SET_ALONE_RULE:
      return newState('alone')
    case SET_OVERFLOW_RULE:
      return newState('overflow')
    case SET_BORN_RULE:
      return newStaet('born')
    default:
      return state
  }
}

export default rules
