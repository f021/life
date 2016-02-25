import life from './index'

const game = evolution =>
  update => {
    console.log('GAME_UPDATE', update)
    if (!evolution) {
      evolution = life(update)
      return evolution.next()
    }
    return evolution.next(update)
  }

export default game
