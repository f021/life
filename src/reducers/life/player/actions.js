// action types

export const PLAY = 'PLAY'
export const STOP = 'STOP'
export const NEXT = 'NEXT'
export const PREV = 'PREV'
export const HIDE = 'HIDE'

// action fabric

const actionCreate = type =>
  number => ({
    'type': type
  })

// action creators

export const play = actionCreate(PLAY)
export const stop = actionCreate(STOP)
export const next = actionCreate(NEXT)
export const prev = actionCreate(PREV)
export const hide = actionCreate(HIDE)
