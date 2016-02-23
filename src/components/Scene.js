import React, { PropTypes } from 'react'
import { compose } from '../utils'
import { connect } from 'react-redux'

class Scene extends React.Component {

  static PropTypes = {
    fullPage: PropTypes.bool.isRequired
  }

  state = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    offset: { x: 0, y: 0 },
    pointer: [{ x: 0, y: 0 }],
    mouse: { x: false, y: false }
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    this.setSize()
    this.setState({ canvas, ctx }, () =>
      this.listen('addEventListener'))
  }

  shouldComponentUpdate({ fullPage }) {
    return this.props.fullPage !== fullPage
      ? true
      : false
  }

  componentDidUpdate() {
    this.resize()
  }

  componentWillUnmount() {
    this.listen('removeEventListener')
  }

  update = () =>
    requestAnimationFrame(() =>
      this.draw())

  setSize = () => {
    const { canvas, elm } = this.refs
    const { fullPage } = this.props
    canvas.width = fullPage ? window.innerWidth : elm.offsetWidth,
    canvas.height = fullPage ? window.innerHeight : elm.offsetHeight
  }

  resize = () => {
    this.setSize()
    this.update()
  }

  listen = (method) => {
    const { canvas } = this.state
    window[method]('resize', this.resize)
    canvas[method]('mousemove', this.mousemove)
    this.update()
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
    console.log(this.state.mouse)
  }

  draw = () => {
    const { canvas, ctx } = this.state
    ctx.fillRect(0, 0, canvas.width, canvas.height)
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
  width: '300px',
  height: '300px'
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
  transition: 'all linear 2s 3s'
}

export default connect(state => ({
  fullPage: state.fullPage
}))(Scene)
