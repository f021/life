import React, { PropTypes } from 'react'

const Player = ({ play, stop, timer, speed, setFullPage }) => (
  <div>
    <a href='#' onClick={play}>play</a>
    {' '}
    <a href='#' onClick={stop}>pause</a>
    {' '}
    tick: { timer}
    {' '}
    <a href='#' onClick={setFullPage}>full page</a>
  </div>
)

Player.propTypes = {
  play: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  setFullPage: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired
}

export default Player
