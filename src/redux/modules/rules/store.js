import { createStore } from 'redux'
import rules from './reducer'

export let store = createStore(rules)
