import life from './life'

const game = evolution => update =>
  if (!evouliton) {
    [ evolution, update ] = [ life(update), undefined ]
  }
  return evolution.next(update)

export default game
