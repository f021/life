const life = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    action(dispatch, getState)
  }
  // action.next, typeof action.__proto__)
  return next(action)
}

export default life
