import React from 'react'
import PlayerLife from '../containers/PlayerLife'
import Scene from '../containers/Scene'
import Rules from '../containers/Rules'
import Neighbours from '../containers/Neighbours'
import {Scene as DrawScene} from './Scene'

const App = (props) => (
  <div>
    <h1>Alexa</h1>
    <PlayerLife/>
    <Rules />
    <Scene />
    <Neighbours />
  </div>
)

export default App
