// action types

export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'
export const NEXT = 'NEXT'
export const PREV = 'PREV'
export const HIDE = 'HIDE'
export const TICK = 'TICK'
export const SET_FULL_PAGE = 'SET_FULL_PAGE'
// action fabric

const actionCreate = type => ({
    'type': type
  })

// action creators

export const tick = actionCreate(TICK)
export const next = actionCreate(NEXT)
export const prev = actionCreate(PREV)
export const hide = actionCreate(HIDE)
export const setFullPage = actionCreate(SET_FULL_PAGE)

// async actions

export const play = () =>
  (dispatch, getState) => {
  const timerId = setInterval(() =>
    dispatch(tick)
    , getState().speed)
    dispatch({ type: PLAY, timerId })
  }

export const stop = () =>
  (dispatch, getState) => {
    clearInterval(getState().timerId)
    dispatch({ type: PAUSE, timerId: 0 })
  }
