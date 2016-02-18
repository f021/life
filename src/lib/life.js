import { notEqual, norma } from './util'
import Oracle from './oracle'

const Life = (battlefield, state) => {

  const { askFate } = Oracle(battlefield)
  let past = new Array(state.length).fill(0)
  const norm = norma(0, 1, x => x > 0)

  function* run() {
    while(notEqual(past, state)) {
      [ past, state ] = [[ ...state ], askFate(state)]
      let alt = yield state
      state = (alt || state).map(norm)
    }
  }

  return { run }

}

export default Life
