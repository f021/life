// default conway's game of life
// pattern of neighbours

const initialState = {
  mode: true, // if (true) { toggle point in arr } else { change startPoint }
  w: 3,
  startPoint: 4,
  arr: [
    1, 1, 1,
    1, 0, 1,
    1, 1, 1
  ]
}

export default initialState
