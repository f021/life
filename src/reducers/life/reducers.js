import neighbours from './neighbours'
import rules from './rules'
import scene from './scene'
import reducer from './reducer'

import { combineReducers } from 'redux'

export default combineReducers({
  neighbours,
  rules,
  scene,
  current: reducer
})
