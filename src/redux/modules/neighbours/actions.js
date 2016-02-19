// action types

export const TOGGLE_POINT = 'TOGGLE_POINT'
export const TOGGLE_MODE = 'TOGGLE_MODE'
export const SET_SIZE = 'SET_SIZE'

// action creators

export const setNeighboursSize = (width) => ({
  type: SET_SIZE,
  w: width
})

export const toggleNeighboursPoint = (index) => ({
  type: TOGGLE_POINT,
  index
})

export const toggleNeighboursMode = () => ({
  type: TOGGLE_MODE
})
