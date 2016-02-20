// action types

export const SET_PLAYGROUND_SIZE = 'SET_PLAYGROUND_SIZE'
export const SET_PLAYGROUND = 'SET_PLAYGROUND'
export const SET_PLAYGROUND_MODE = 'SET_PLAYGROUND_MODE'

// action creators

export const setPlaygroundSize = (width) => ({
  type: SET_PLAYGROUND_SIZE,
  width
})

export const setPlaygroundMode = () => ({
  type: SET_PLAYGROUND_MODE
})

export const setPlayground = (playground) => ({
  type: SET_PLAYGROUND,
  playground
})
