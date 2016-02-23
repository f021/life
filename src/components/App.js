import React from 'react'
import PlayerLife from '../containers/PlayerLife'
import Scene from './Scene'

const App = (props) => (
  <div style = {style}>
    <h1>Alexa</h1>
    <PlayerLife/>
    <Scene />
  </div>
)

const style = {
  position: 'relative'
}

export default App
