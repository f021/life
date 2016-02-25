import React, { PropTypes } from 'react'
import Cell from './Cell'

const Row = ({
  row,
  y,
  ...rest
}) => (
  <tr>
    {row.map((cell, i) => (
      <Cell
        key={i}
        index={i + y * row.length}
        {...rest}
      >
        {cell}
      </Cell>
    ))}
  </tr>
)

Row.PropTypes = {
  row: PropTypes.array.isRequired,
  y: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Row
