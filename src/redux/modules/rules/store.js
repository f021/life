import { createStore } from 'redux'
import rules from './reducer'

let store = createStore(rules)

export default store
