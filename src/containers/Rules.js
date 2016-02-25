import React from 'react'
import { connect } from 'react-redux'
import InputNumbers from '../components/InputNumbers'
import { setRule } from '../actions'

const Rules = ({ fields, setRule }) => (
  <div>
    <h1>Rules</h1>
    <InputNumbers
      fields={fields}
      onChange={setRule}
    />
  </div>
)

const mapStateToProps = (state) => {
  const { born, alone, overflow } = state.life.rules
  return {
    fields: [
      { label: 'born', value: born },
      { label: 'alone', value: alone },
      { label: 'overflow', value: overflow }
    ]
  }
}

const mapDispatchToProps = (dispatch) => ({
  setRule: (rule, value) =>
    dispatch(setRule(rule, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rules)
