const loop = ({ dispatch, getState }) => next => action => {
  // switch (action.type) {

  console.log('tut')
    if (action.type=== 'PLAY') {
      setTimeout(() =>
      dispatch({type: 'TICK'} , 5000))
      return ({...action})
    }
    if (action.type=== 'STOP') {
      // console.log('stop')
      setTimeout(clearInterval(getState().timerId), 10000)
    }

      return next(action)
  // }
}

export default loop
