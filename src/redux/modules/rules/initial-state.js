// default conway's game of life rules
// 1 . Any live cell with fewer than two live neighbours dies
// as if caused by under-population.
// 2. Any live cell with two or three live neighbours lives
// on to the next generation.
// 3. Any live cell with more than three live neighbours dies,
// as if by over-population.
// 4. Any dead cell with exactly three live neighbours becomes a live cell,
// as if by reproduction.

const initialState = {
  born: 3,
  alone: 2,
  overflow: 3
}


export default initialState
