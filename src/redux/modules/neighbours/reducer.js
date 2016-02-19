import initialState from './initial-state'
import { TOGGLE_MODE, TOGGLE_POINT, SET_SIZE } from './actions'

const rules = ( state = initialState, action) => {

  const change = (elm) => state.arr.map((x, i) =>
    i === action.index ? elm : x)

  switch (action.type) {
    case SET_SIZE:
      return {
        // todo : write function for array
         ...state
       }
    case TOGGLE_MODE:
      return {
        ...state,
        mode: !state.mode
      }
    case TOGGLE_POINT:
      if (state.mode) {
        return {
          ...state,
          arr: [
            ...state.arr.slice(0, action.index),
            state.arr[action.index] ? 0 : 1,
            ...state.arr.slice(action.index + 1)
          ]
        }
      } else {
        return {
          ...state,
          startPoint: action.index,
          arr: [...state.arr]
        }
      }
    default:
      return state
  }
}

export default rules
