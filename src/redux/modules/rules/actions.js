// action types

export const SET_BORN_RULE = 'SET_BORN_RULE'
export const SET_ALONE_RULE = 'SET_ALONE_RULE'
export const SET_OVERFLOW_RULE = 'SET_OVERFLOW_RULE'

// action fabric

const actionCreate = type =>
  number => ({
    type,
    number
  })

// action creators

export const setBornRule = () =>
  actionCreate(SET_BORN_RULE)

export const setAloneRul = () =>
  actionCreate(SET_ALONE_RULE)

export const setOwerflowRule = () =>
  actionCreate(SET_OVERFLOW_RULE)
