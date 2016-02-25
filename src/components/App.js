import React from 'react'
import PlayerLife from '../containers/PlayerLife'
import Scene from './Scene'
import Rules from '../containers/Rules'

const App = (props) => (
  <div style = {style}>
    <h1>Alexa</h1>
    <PlayerLife/>
    <h1>Rules</h1>
    <Rules />
    {/*<Scene />*/}
  </div>
)

const style = {
  position: 'relative'
}

export default App
