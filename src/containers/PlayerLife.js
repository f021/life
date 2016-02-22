import { connect } from 'react-redux'
import { play, stop } from '../actions'
import Player from '../components/Player'

const mapStateToProps = (state) => ({
  timer: state.timer
})

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(play()),
  stop: () => dispatch(stop())
})

const PlayerLife = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)

export default PlayerLife
