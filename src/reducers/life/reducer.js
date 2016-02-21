import { mergeReducers } from '../../lib/redux-merge'
import Life from '../../lib/life'
import initialState from './initial-state'
import * as reducers from './reducers'
import { GET_NEXT_POPULATION } from './actions'


const logic = (state = initialState, action) => {
  switch(action.type) {
    case 'START':
    case 'SET_BORN_RULE':
    case 'TOGGLE_NEIGHBOURS_POINT':
      return {...state, startPoint: 'a'}
    case 'TICK':
      console.log(state.timer)
    default:
      return state
  }
}

// console.log(Life)
const life = mergeReducers(reducers, logic)

// console.log('in', life)
export default life
