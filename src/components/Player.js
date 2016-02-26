import React, { PropTypes } from 'react'
import Toggle from './Toggle'

const Player = ({
  play, changeSpeed,
  playing, timer, speed
}) => (
  <div>
    <Toggle
      onClick={play}
      flag={!playing}
      on='play'
      off='pause'
    />
    tick: {timer},
    speed: {parseFloat(speed/1000)} sec.
    <br />
    <input
      onChange={changeSpeed}
      type='range'
      min='0'
      max='1000'
      value={speed}
    />
  </div>
)

Player.propTypes = {
  play: PropTypes.func.isRequired,
  changeSpeed: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired
}

export default Player
