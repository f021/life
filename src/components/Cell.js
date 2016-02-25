import React, { PropTypes } from 'react'

const Cell = ({
  children,
  index,
  onClick,
  startPoint
}) => (
  <td
    className={`cell-${index === startPoint ? 'start': children}`}
    onClick={() => onClick(index)}
  />
)

Cell.PropTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Cell
