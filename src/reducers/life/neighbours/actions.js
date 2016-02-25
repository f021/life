// action types

export const TOGGLE_NEIGHBOURS_POINT = 'TOGGLE_NEIGHBOURS_POINT'
export const TOGGLE_NEIGHBOURS_MODE = 'TOGGLE_NEIGHBOURS_MODE'
export const SET_NEIGHBOURS_SIZE = 'SET_NEIGHBOURS_SIZE'

// action creators

export const setNeighboursSize = (side, size) => ({
  type: SET_NEIGHBOURS_SIZE,
  side, size
})

export const toggleNeighboursPoint = (index) => ({
  type: TOGGLE_NEIGHBOURS_POINT,
  index
})

export const toggleNeighboursMode = ({
  type: TOGGLE_NEIGHBOURS_MODE
})
