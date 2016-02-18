
export const createStore = (reducer) => {

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push()
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener(state))
  }

  dispatch({})

  return {
    getState, subscribe, dispatch
  }

}
