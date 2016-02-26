import React from 'react'

const Toggle = ({
  flag,
  on,
  off,
  onClick
}) => (
  flag ?
    <div>
      <a href='#' onClick={onClick}>{on}</a>
      {off}
    </div> :
    <div>
      {on}
      <a href='#' onClick={onClick}>{off}</a>
    </div>
)

export default Toggle
