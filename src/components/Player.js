import React, { PropTypes } from 'react'

const n = [ 1, 1, 1,
            1, 0, 1,
            1, 1, 1 ]
const play = [1, 1, 1, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0]

const playground = {
  w: 5,
  h: 5,
  flag: false
}

const neighbors = {
  w: 3,
  h: 3,
  arr: n,
  startPoint: 4
}

const rules = {
  born: 3,
  alone: 2,
  overflow: 3
}


const Player = (props) => {
  const { play, stop, timer, speed, setFullPage, getNextPopulation } = props
  // console.log('p', props)
  const go = {
    battlefield: {
      playground, neighbors, rules
    },
    current: play
  }
  return (
    <div>
      <a href='#' onClick={play}>play</a>
      {' '}
      <a href='#' onClick={stop}>pause</a>
      {' '}
      tick: { timer}
      {' '}
      <a href='#' onClick={setFullPage}>full page</a>
      {' '}
      <a href='#' onClick={getNextPopulation}>life</a>
    </div>
  )
}

Player.propTypes = {
  play: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  setFullPage: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired
}

export default Player
