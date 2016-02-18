import { compose, trigger } from './util'
import Maps from './maps'


const Draw = (elm = document.body) => {

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  let offset = { x: 0, y: 0 }
  let pointer = [ { x: 0, y: 0 } ]
  let mouse = {x: false, y: false}
  let scene
  let size


  const setCanvasSize = () => {
    canvas.width = elm.offsetWidth,
    canvas.height = elm.offsetHeight
  }

  const setSize = () => {
    const { width, height } = canvas
    const { w, h } = scene
    size = (
      width > height && w > h || width < height && w < h
        ? Math.max(width, height)
        : Math.min(width, height)
      )/ Math.max(w, h)
  }

  const setPointer = arr =>
    pointer = arr

  const setMouse = ({ x, y }) => {
    const { w, h } = scene
    x -= offset.x
    y -= offset.y
    mouse = {
      x: x > 0 && x < size * w && Math.floor(x / size),
      y: y > 0 && y < size * h && Math.floor(y / size)
    }
  }

  const setOffset = () => {
    offset.x = (canvas.width - scene.w * size)/2
    offset.y = (canvas.height - scene.h * size)/2
  }

  const setScene = (obj) => {
    scene = obj
    scene.maps = Maps(obj)
    setSize()
    setOffset()
  }

  const mouseXY = (x, y) => {
    const bbox = canvas.getBoundingClientRect()
    return {
      x: x - bbox.left * (canvas.width  / bbox.width),
      y: y - bbox.top * (canvas.height  / bbox.height)
    }
  }

  const mousemove = event => {
    setMouse(mouseXY(event.clientX, event.clientY))
    mouse.x !== false && mouse.y !== false && render()
  }


  const fillColor = cell => {
    switch (cell) {
      case -2:
        return 'red'
      case -1:
        return 'orange'
      case 0:
        return 'white'
      case 1:
        return 'yellow'
      case 2:
        return 'green'
      default:
        return 'grey'
    }
  }

  const drawCell = (cell, i) => {
    ctx.beginPath()
    ctx.strokeStyle = 'white'
    ctx.strokeWidth = '.5'
    ctx.fillStyle = fillColor(cell)
    ctx.rect(i % scene.w * size, Math.floor(i / scene.w) * size, size, size)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }

  const drawPointer = () => {
    scene.maps.getIndexMap(pointer, mouse).forEach((a) => {
      ctx.beginPath()
      ctx.strokeStyle = 'white'
      ctx.strokeWidth = '.5'
      ctx.fillStyle = 'black'
      ctx.rect(a % w * size, Math.floor(a / w) * size, size, size)
      ctx.fill()
      ctx.stroke()
      ctx.closePath()
    })
  }

  const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.translate(offset.x, offset.y)
      scene.arr.forEach(drawCell)
      drawPointer()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
    }

  const resize = compose(render, setCanvasSize)
  window.addEventListener('resize', resize)
  canvas.addEventListener('mousemove', mousemove)

  setCanvasSize()
  elm.appendChild(canvas)

  return {
    setScene,
    setPointer,
    render
  }

}


export default Draw
