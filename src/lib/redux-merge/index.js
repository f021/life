import { getMethods } from '../../utils'

const merge = reducers =>
  (state, action) => reducers.reduce(
    (nextState, reducer) =>
      Object.assign({}, nextState,
        reducer(state ? nextState : undefined, action))
      , state
  )

export const mergeReducers = (first, last = () => {}) =>
  merge([...getMethods(first), last ])
