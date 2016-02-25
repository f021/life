import React from 'react'
import { connect } from 'react-redux'
import Grid from '../components/Grid'
import InputNumbers from '../components/InputNumbers'
import CheckBox from '../components/CheckBox'
import {
  toggleNeighboursMode,
  toggleNeighboursPoint,
  setNeighboursSize
} from '../actions'

const Neighbours = ({
  fields,
  changeSize,
  toggleMode,
  togglePoint,
  ...rest
}) => (
  <div>
    <h1>Pattern</h1>
    <Grid
      onClick={togglePoint}
      {...rest }
    />
    <InputNumbers
      onChange={changeSize}
      fields={fields}
    />
    <CheckBox
      onChange={toggleMode}
      check={rest.check}
    >
    start
    </CheckBox>
  </div>
)

const mapStateToProps = (state) => {
  const { ...rest } = state.life.neighbours
  return {
    fields: [
      { label: 'w', value: rest.w },
      { label: 'h', value: rest.h }
    ],
    ...rest
  }
}

const mapDispatchToProps = (dispatch) => ({
  togglePoint: (index) =>
    dispatch(toggleNeighboursPoint(index
    )),
  changeSize: (side, value) =>
    dispatch(setNeighboursSize(side, value)),
  toggleMode: () => dispatch(toggleNeighboursMode)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Neighbours)
