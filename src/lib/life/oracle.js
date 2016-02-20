import { sum } from './util'
import getAddressBook from './address-book'

const Oracle = ({ playground, rules, neighbors }) => {

  const { alone, born, overflow } = rules
  const address = getAddressBook(playground, neighbors)

// env :: [ Int ] -> [ Int ] -> Int
  const env = (xs, arr) =>
    xs.map(x => arr[x])

// :notchange 0 :alone -1 :overflow -2 : survive 1 :born 2
// justice :: Int -> Int -> Int
  const verdict = (cell, n) =>
    cell > 0
      ? (n < alone && -1) || (n > overflow && -2) || 1
      : n === born && 2 || 0

// fate :: [ Int ] -> [ Int ]
  const askFate = state =>
    state.map((cell, i) =>
      verdict(cell, sum(env(address[i], state))))

  return { askFate }
}

export default Oracle
