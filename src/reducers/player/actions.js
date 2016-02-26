// action types

export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'
export const TICK = 'TICK'
export const SET_SPEED = 'SET_SPEED'
// action fabric

const actionCreate = type => ({
    'type': type
  })

// action creators
export const play = actionCreate(PLAY)
export const tick = actionCreate(TICK)
export const pause = actionCreate(PAUSE)
export const setSpeed = (speed) => ({
  ...actionCreate(SET_SPEED),
  speed
})
// async actions

export const start = () =>
  (dispatch, getState) => {
    if (!getState().player.playing) {
      dispatch(play)
      setTimeout(function next() {
        const { speed,  playing } = getState().player
        if ( playing ) {
          dispatch(tick)
          setTimeout(next, speed)
        }
      }, 0)
    } else {
      dispatch(pause)
    }
  }
