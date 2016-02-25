import { connect } from 'react-redux'
import { play, stop, setFullPage, getNextPopulation } from '../actions'
import Player from '../components/Player'

const mapStateToProps = (state) => ({
  ...state.player
})

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(play()),
  stop: () => dispatch(stop()),
  setFullPage: () => dispatch(setFullPage),
  getNextPopulation: () => dispatch(getNextPopulation())
})

const PlayerLife = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)

export default PlayerLife
