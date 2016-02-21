import { compose, box } from '../../utils'

const painter = (setup, draw, elm) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const setSize = () => {
    canvas.width = elm.offsetWidth,
    canvas.height = elm.offsetHeight
  }

  const mouseXY = (x, y) => {
    const bbox = canvas.getBoundingClientRect()
    return {
      x: x - bbox.left * (canvas.width  / bbox.width),
      y: y - bbox.top * (canvas.height  / bbox.height)
    }
  }

  setSize()
  elm.appendChild(canvas)
  setup(canvas, ctx)
  const scene = draw(canvas, ctx)
  const render = state => {
    scene(state)
  }
  const resize = compose(render, setSize)

  window.addEventListener('resize', resize)

  return render
}

export default painter
