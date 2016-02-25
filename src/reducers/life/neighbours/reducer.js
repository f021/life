import initialState from './initial-state'
import {
  TOGGLE_NEIGHBOURS_MODE,
  TOGGLE_NEIGHBOURS_POINT,
  SET_NEIGHBOURS_SIZE
} from './actions'

const neighbours = ( state = initialState, action) => {
  switch (action.type) {
    case SET_NEIGHBOURS_SIZE:
      return {
        // todo : write function for array
         ...state,
         [action.side]: Number(action.size)
       }
    case TOGGLE_NEIGHBOURS_MODE:
      return {
        ...state,
        mode: !state.mode
      }
    case TOGGLE_NEIGHBOURS_POINT:
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
          arr: [ ...state.arr ]
        }
      }
    default:
      return state
  }
}

export default neighbours
