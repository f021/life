import initialState from './initial-state'
import { addColumn, addRow } from '../../../utils'
import {
  TOGGLE_NEIGHBOURS_MODE,
  TOGGLE_NEIGHBOURS_POINT,
  SET_NEIGHBOURS_SIZE
} from './actions'

const resize = (state = {}, action) => {
  const { arr, w, startPoint } = state
  const { side, size } = action
  switch (side) {
    case 'w':
      return {
        arr: [...addRow(arr, w, size) ],
        startPoint: startPoint + size
      }
    case 'h':
      return [...addColumn(arr, w, size)]
    default:
      return state
  }
}


const neighbours = ( state = initialState, action) => {
  switch (action.type) {
    case SET_NEIGHBOURS_SIZE:
      return {
         ...state,
         [action.side]: action.size,
         ...resize(state, action)
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
          startPoint: action.index
        }
      }
    default:
      return state
  }
}

export default neighbours
