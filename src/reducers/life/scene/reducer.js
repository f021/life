import initialState from './initial-state'
import {
  SET_SCENE_SIZE,
  SET_SCENE,
  SET_SCENE_MODE
} from './actions'

const scene = ( state = initialState, action) => {
  switch (action.type) {
    case SET_SCENE_SIZE:
      return {
         ...state,
         alone: action.number
       }
    case SET_SCENE_MODE:
      return {
        ...state,
        tor: !state.tor
      }
    case SET_SCENE:
      console.log(state)
      return {
        ...state,
        ...action.scene
      }
    default:
      return state
  }
}

export default scene
