import rootReducer from '.././reducers'
import { createStore } from 'redux'


const store = createStore(rootReducer)

store.dispatch({type: 'TOGGLE_NEIGHBOURS_MODE'})
store.dispatch({type: 'SET_PLAYGROUND'})
console.log(store.getState())

export default store
