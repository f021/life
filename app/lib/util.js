// vectorFn :: Function -> [ { Vector } ] -> { Vector }
const vectorFn = fn => (...args) =>
  args.reduce((v1, v2) => ({
    x: fn(v1.x, v2.x),
    y: fn(v1.y, v2.y)
  }))

const add = vectorFn((a,b) => a + b)

const sub = vectorFn((a,b) => a - b)

// compose :: [Function] -> a -> a
const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc),  x)

// sum :: [ Int ] -> Int
const sum = arr =>
  arr.reduce((a,b) => a + b)

// zip :: [ a ] -> [ a ] -> [ [a, a] ]
const zip = (as, bs) =>
  as.map((a, i) => [a, bs[i]])

// not :: a -> Boolean
const not = a => !a

// notEqual :: [ a ] -> [ a ] -> Boolean
const notEqual = (as, bs) =>
    as.some((a, i) => a !== bs[i])

// norma :: a -> a -> Function -> a -> a
const norma = (a, b, rule) => n => rule(n) ? b : a

const box = (w, h) => ({w, h, landscape: w > h })

const center = (a, b) => [ (a.w - b.w)/2, (a.h - b.h)/2 ]

const trigger = (fn, fn2, f = false) =>
  x => {
    f = !f
    f ? fn(x) : fn2(x)
  }

export {
  trigger,
  center,
  add,
  sub,
  compose, sum, zip, not, notEqual, norma, box }
