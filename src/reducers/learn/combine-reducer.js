export const combineReducer = (reducers) =>
  (state = {}, action) =>
    Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action)
        return nextState
      }, {})

// middleware

const middleware = store => {
  const { dispatch, getState } = store
  return next =>
    action => {
      console.info(action)
  }
}

const thunk = store => next => action =>
  typeof action === function
    ? action(store.dispatch, store.getState)
    : next(action)
