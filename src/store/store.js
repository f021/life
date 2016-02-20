import rootReducer from '.././reducers'
import { createStore, applyMiddleware } from 'redux'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}


const logger2 = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('logger2')
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

store.dispatch({type: 'TOGGLE_NEIGHBOURS_POINT', index: 1})

console.log(store.getState())

export default store
