import React, { PropTypes } from 'react'

const Life = ({ test, test1, test2 }) => (
  <div>Life</div>
)

Life.propTypes = {
  test: PropTypes.func.isRequired,
  test1: PropTypes.bool.isRequired,
  test2: PropTypes.string.isRequired
}

export default Life
