import React, { PropTypes } from 'react'

export defauld class Rules extends React.Component {

  propType = {
    alone: PropTypes.number,
    overflow: PropTypes.number,
    born: PropTypes.number
  }

  render() {
    return (
      <form>
        {this.props.rules}
      </form>
    )
  }
}
