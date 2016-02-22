import rootReducer from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import loop from '../middleware/loop'
import thunk from 'redux-thunk'

const logger = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
)

export default store
