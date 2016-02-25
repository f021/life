import { equal, norma, not, same } from './utils'
import oracle from './oracle'
import getAddressBook from './address-book'

const norm = norma(0, 1, x => x > 0)

function* life(scene, rules, neighbours, current) {

  const renew = (prev, next={}) =>
    not(same(prev, next)) ?
      next :
      prev

  const update = update => {
    current = update.current || current
    if (update.rules) {
      rules = renew(rules, update.rules)
    }
    if (update.neighbours || update.scene) {
      scene = renew(scene, update.scene)
      neighbours = renew(neighbours, update.neighbours)
      address = oracle(scene, neighbours)
    }
  }

  const askFate = () =>
    oracle(current.map(norm), rules, address)

  let past = new Array(current.length).fill(0)
  let address = getAddressBook(scene, neighbours)

  while(not(equal(past, current))) {
    [ past, current ] = [[ ...current ], askFate()]
    let state = yield current
    if (state) {
      update(state)
    }
  }

}

export default life
