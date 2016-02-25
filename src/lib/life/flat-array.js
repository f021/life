export const flat = ([x, ...xs], acc = []) =>
  x !== undefined
    ? Array.isArray(x)
      ? flat([...x, ...xs], acc)
      : flat(xs, [...acc, x])
    : acc

export const flat1 = arr =>
  arr.reduce((acc, x) =>
    Array.isArray(x)
      ? [...acc, ...flat1(x)]
      : [...acc, x]
    , [])

export const flat2 = arr =>
  arr.reduce((acc, x) =>
    acc.concat(Array.isArray(x)
      ? flat2(x)
      : x)
    , [])
