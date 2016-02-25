import { connect } from 'react-redux'
import InputNumbers from '../components/InputNumbers'
import { setRule } from '../actions'

const mapStateToProps = (state) => {
  const { rules } = state.life
  return {
    fields: [
      { label: 'born', value: rules.born },
      { label: 'alone', value: rules.alone },
      { label: 'overflow', value: rules.overflow }
    ]
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChange: (rule, value) =>
    dispatch(setRule(rule, value))
})

const Rules = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputNumbers)

export default Rules
