import React, { PropTypes } from 'react'
import Row from './Row'
import { toRow } from '../utils'

const Grid = ({
  arr,
  w,
  ...rest
}) => (
  <table>
    <tbody>
      {toRow(arr, w).map((row, i) => (
        <Row
          key={i}
          row={row}
          y={i}
          arr={arr}
          {...rest}
        />
      ))}
    </tbody>
  </table>
)

Grid.PropTypes = {
  arr: PropTypes.array.isRequired,
  w: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Grid
