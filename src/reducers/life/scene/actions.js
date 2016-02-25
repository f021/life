// action types

export const SET_SCENE_SIZE = 'SET_PLAYGROUND_SIZE'
export const SET_SCENE = 'SET_SCENE'
export const SET_SCENE_MODE = 'SET_SCENE_MODE'

// action creators

export const setSceneSize = (width) => ({
  type: SET_SCENE_SIZE,
  width
})

export const setSceneMode = () => ({
  type: SET_SCENE_MODE
})

export const setScene = (scene) => ({
  type: SET_SCENE,
  scene
})
