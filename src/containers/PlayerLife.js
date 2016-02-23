import { connect } from 'react-redux'
import { play, stop, setFullPage } from '../actions'
import Player from '../components/Player'

const mapStateToProps = (state) => ({
  timer: state.timer,
  speed: state.speed
})

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(play()),
  stop: () => dispatch(stop()),
  setFullPage: () => dispatch(setFullPage)
})

const PlayerLife = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)

export default PlayerLife
