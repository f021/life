import React from 'react'
import { connect } from 'react-redux'
import Grid from '../components/Grid'
import InputNumbers from '../components/InputNumbers'
import Toggle from '../components/Toggle'
import {
  toggleNeighboursMode,
  toggleNeighboursPoint,
  setNeighboursSize
} from '../actions'

const Neighbours = ({
  fields,
  mode,
  changeSize,
  toggleMode,
  togglePoint, w, h, arr,
  ...rest
}) => (
  <div>
    <h1>Pattern</h1>
    <Grid
      onClick={togglePoint}
      w={w}
      h={h}
      arr={arr}
      {...rest }
    />
    <InputNumbers
      onChange={changeSize}
      fields={fields}
      min='1'
    />
    <Toggle
      onClick={toggleMode}
      flag={mode}
      on='start point'
      off='neighbours'
    />
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
    dispatch(toggleNeighboursPoint(Number(index)
    )),
  changeSize: (side, value) =>
    dispatch(setNeighboursSize(side, Number(value))),
  toggleMode: () => dispatch(toggleNeighboursMode)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Neighbours)
