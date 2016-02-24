import life from './index'

const game = ({ current, ...setup }) => {
  console.log(current, ...setup)
}

export default game
