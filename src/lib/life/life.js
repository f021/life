import { notEqual, norma } from './util'
import Oracle from './oracle'

const Life = (battlefield, current) => {

  const { askFate } = Oracle(battlefield)
  let past = new Array(current.length).fill(0)
  const norm = norma(0, 1, x => x > 0)

  function* run() {
    while(notEqual(past, current)) {
      [ past, current ] = [[ ...current ], askFate(current)]
      let alt = yield current
      current = (alt || current).map(norm)
    }
  }

  return { run }

}

export default Life
