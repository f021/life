import React, { PropTypes } from 'react'

const Player = ({ play, stop, timer }) => (
  <ul>
    <li onClick={play}>Play</li>
    <li onClick={stop}>Stop</li>
    <li>{timer}</li>
  </ul>
)

Player.propTypes = {
  play: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired
}

export default Player
