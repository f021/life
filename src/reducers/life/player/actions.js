// action types

export const PLAY = 'PLAY'
export const STOP = 'STOP'
export const NEXT = 'NEXT'
export const PREV = 'PREV'
export const HIDE = 'HIDE'
export const TICK = 'TICK'
// action fabric

const actionCreate = type => ({
    'type': type
  })

// action creators

export const tick = actionCreate(TICK)
export const next = actionCreate(NEXT)
export const prev = actionCreate(PREV)
export const hide = actionCreate(HIDE)

// async actions

export const play = (delay = 1000/60) =>
  (dispatch, getState) => {
  const timerId = setInterval(() => {
    dispatch(tick)
  }, delay)
    dispatch({type: PLAY, timerId})
  }

export const stop = () =>
  (dispatch, getState) => {
    clearInterval(getState().timerId)
    dispatch({type: STOP, timerId: null})
  }
