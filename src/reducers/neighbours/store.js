import { createStore } from 'redux'
import neighbours from './reducer'

const store = createStore(neighbours)

export default store
