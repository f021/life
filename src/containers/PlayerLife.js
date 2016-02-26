import { connect } from 'react-redux'
import { start, setSpeed } from '../actions'
import Player from '../components/Player'

const mapStateToProps = ({ player }) => ({
  ...player
})

const mapDispatchToProps = (dispatch) => ({
  play: () => dispatch(start()),
  changeSpeed: ({ target }) =>
    dispatch(setSpeed(parseFloat(target.value)))
})

const PlayerLife = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)

export default PlayerLife
