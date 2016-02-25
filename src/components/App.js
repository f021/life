import React from 'react'
import PlayerLife from '../containers/PlayerLife'
import Scene from '../containers/Scene'
import Rules from '../containers/Rules'
import Neighbours from '../containers/Neighbours'

const App = (props) => (
  <div style = {style}>
    <h1>Alexa</h1>
    <PlayerLife/>
    <Rules />
    <Scene />
    <Neighbours />
  </div>
)

const style = {
  position: 'relative'
}

export default App
