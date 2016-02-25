export const fillArr = ([x, ...xs], fn) =>
  Array.from(new Array(x), (_, i) =>
    xs.length ? fillArr(xs, fn) : fn(i))

export const fillMatrix = ([w, h], fn) =>
  Array.from(new Array(w), () =>
    fillArr([h], fn))
