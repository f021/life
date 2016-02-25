export const SET_SCENE_SIZE = 'SET_SCENE_SIZE'
export const SET_SCENE = 'SET_SCENE'
export const SET_SCENE_MODE = 'SET_SCENE_MODE'

export const setSceneSize = (side, size) => ({
  type: SET_SCENE_SIZE, side, size
})

export const setSceneMode = ({
  type: SET_SCENE_MODE
})

export const setScene = (scene) => ({
  type: SET_SCENE, scene
})
