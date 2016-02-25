import React from 'react'
import { connect } from 'react-redux'
import InputNumbers from '../components/InputNumbers'
import CheckBox from '../components/CheckBox'
import { setSceneSize, setSceneMode } from '../actions'

const Scene = ({
  fields, tor, changeSize, toggleMode
}) => {
  // console.log(fields, flag)
  return(
  <div>
    <h1>Scene</h1>
    <InputNumbers
      onChange={changeSize}
      fields={fields}
    />
    <CheckBox
      onChange={toggleMode}
      check={tor}
    >
    tor
    </CheckBox>
  </div>
)}


const mapStateToProps = (state) => {
  const { w, h, tor } = state.life.scene
  return {
    fields: [
      { label: 'w', value: w },
      { label: 'h', value: h }
    ],
    tor
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeSize: (side, value) =>
    dispatch(setSceneSize(side, value)),
  toggleMode: () => dispatch(setSceneMode)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Scene)
