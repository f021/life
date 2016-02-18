
// import { add, sub } from './vector.js'
import Maps from './maps'
// import Oracle from './oracle'
import Life from './life'
import Draw from './draw'


const n = [ 1, 1, 1,
            1, 0, 1,
            1, 1, 1 ]

const cros = [ 1, 0, 0,0,1,
              1, 1,0, 1,1,
              0,0, 1, 0, 0]


const play = [1, 1, 1, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0]

const play2 = [0, 0, 0, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 1,
              0, 0, 0, 0, 1,
              0, 0, 0, 0, 1]


const playground = {
  w: 5,
  h: 5,
  flag: false
}

const neighbors = {
  w: 3,
  h: 3,
  arr: n,
  startPoint: 4
}

const rules = {
  born: 3,
  alone: 2,
  overflow: 3
}


const c = Draw(document.getElementById('root'))
c.setScene({w: 10, h: 10, flag: false, arr:new Array(100).fill(2)})
c.setPointer(Maps({w: 3, h: 3}).getVectorMap(n, 4))

c.render()
const cc = Draw(document.getElementById('second'))
cc.setScene({w: 20, h: 3, flag: false, arr:new Array(60).fill(1)})
cc.setPointer(Maps({w: 5, h:3}).getVectorMap(cros, 4))
cc.render()
const ccc = Draw(document.getElementById('three'))
ccc.setScene({w: 5, h: 5, flag: false, arr:new Array(25).fill(0)})
ccc.setPointer(Maps({w: 4, h:4}).getVectorMap([
  0, 1, 1, 0,
  1, 0, 0, 1,
  1, 0, 0, 1,
  0, 1, 1, 0,
],5))
ccc.render()
const cсcc = Draw(document.getElementById('four'))
cсcc.setScene({w: 2, h: 20, arr:new Array(40).fill(0)})
cсcc.render()
var a = Life({playground, neighbors, rules}, play)
var b = a.run()

module.exports = {}
