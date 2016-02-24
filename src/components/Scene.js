import React, { PropTypes } from 'react'
import { compose } from '../utils'
import { connect } from 'react-redux'

class Scene extends React.Component {


  static PropTypes = {
    fullPage: PropTypes.bool.isRequired,
    // scene: PropTypes.obj
  }

  state = {
    canvas: undefined,
    ctx: undefined,
    offset: { x: 0, y: 0 },
    pointer: [{ x: 0, y: 0 }],
    mouse: { x: false, y: false },
    size: undefined
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    this.setState({ canvas, ctx }, () => {
      this.listen('addEventListener')
      this.resize()
    })
  }

  shouldComponentUpdate({ fullPage }) {
    return this.props.fullPage !== fullPage
      ? true
      : false
  }

  componentDidUpdate() {
    console.log('UPDATE')
    this.resize()
  }

  componentWillUnmount() {
    this.listen('removeEventListener')
  }

  update = () =>
    requestAnimationFrame(() =>
      this.draw())

  setOffset = resolve => {
    const { width, height } = this.state.canvas
    const { size } = this.state
    const { w, h } = this.props
    this.setState({
      offset: {
        x: (width - w * size)/2,
        y: (height - h * size)/2
      }
    }, resolve)
  }

  setSize = resolve => {
    const { width, height } = this.state.canvas
    const { w, h } = this.props
    this.setState({
      size: ( width > height && w > h || width < height && w < h
        ? Math.max(width, height)
        : Math.min(width, height)
      )/ Math.max(w, h)
    }, resolve)
  }

  setCanvasSize = resolve => {
    const { canvas, elm } = this.refs
    const { fullPage } = this.props
    canvas.width = fullPage ? window.innerWidth : elm.offsetWidth,
    canvas.height = fullPage ? window.innerHeight : elm.offsetHeight
    resolve()
  }

  resize = () =>
    new Promise(this.setCanvasSize)
      .then(this.setSize)
      .then(this.setOffset)
      .then(this.update)

  listen = (method) => {
    const { canvas } = this.state
    window[method]('resize', this.resize)
    canvas[method]('mousemove', this.mousemove)
  }

  mouseXY = (x, y) => {
    const { canvas } = this.state
    const bbox = canvas.getBoundingClientRect()
    return {
      x: x - bbox.left * (canvas.width  / bbox.width),
      y: y - bbox.top * (canvas.height  / bbox.height)
    }
  }

  mousemove = ({ clientX, clientY }) => {
    this.setState({
      mouse: this.mouseXY(clientX, clientY)
    })
  }

  colorStyle = cell => {
    const color = (stroke, fill) => ({stroke, fill})
    switch (cell) {
      case -2:
        return color('grey', 'grey')
      case -1:
        return color('grey', 'grey')
      case 0:
        return color('green','yellow')
      case 1:
        return color('white', 'red')
      case 2:
        return color('green', 'gren')
      default:
        return color('grey', 'grey')
    }
  }


  drawCell = (cell, i) => {
    const { ctx, size } = this.state
    const { w, h } = this.props
    const { stroke, fill } = this.colorStyle(cell)
    ctx.beginPath()
    ctx.strokeStyle = stroke
    // ctx.strokeWidth = '.1'
    ctx.fillStyle = fill
    ctx.rect(i % w * size, Math.floor(i / w) * size, size, size)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }

  // drawPointer = () => {
  //   scene.maps.getIndexMap(pointer, mouse).forEach((a) => {
  //     ctx.beginPath()
  //     ctx.strokeStyle = 'white'
  //     ctx.strokeWidth = '.5'
  //     ctx.fillStyle = 'black'
  //     ctx.rect(a % w * size, Math.floor(a / w) * size, size, size)
  //     ctx.fill()
  //     ctx.stroke()
  //     ctx.closePath()
  //   })
  // }

  draw = () => {
    const { canvas, ctx, offset } = this.state
    const { current } = this.props
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.translate(offset.x, offset.y)
    current.forEach(this.drawCell)
    // drawPointer()
    ctx.setTransform(1, 0, 0, 1, 0, 0)
  }

  render() {
    const { fullPage } = this.props
    return (
      <div ref='elm' style={test}>
        <canvas
          ref='canvas'
          style={fullPage ? fullPageStyle : wrapStyle}
        />
      </div>
    )
  }
}



const test = {
  width: '100%',
  height: '500px',
  backgroundColor: 'rgba(0, 100, 200, .1)'
}

const wrapStyle = {
  width: '100%',
  height: '100%',
  padding: 0
}

const fullPageStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  padding: 0,
  margin: 0,
  zIndex: -1,
}

export default connect(state => ({
  fullPage: state.fullPage,
  current: state.current,
  w: state.width,
  h: state.height
}))(Scene)
