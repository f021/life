import { createStore } from 'redux'
import rules from './reducer'

const store = createStore(rules)

export default store
