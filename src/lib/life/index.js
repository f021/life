import { notEqual, norma } from '../../utils'
import Oracle from './oracle'


function* life({ current, ...setup }) {

  let past = new Array(scene.length).fill(0)
  const norm = norma(0, 1, x => x > 0)

  while(notEqual(past, current)) {
    let askFate = Oracle(newSetup || setup)
    [ past, current ] = [[ ...current ], askFate(current)]
    let { newScene, ...newSetup } = yield current
    current = (newScene || current).map(norm)
  }
}


export default life
