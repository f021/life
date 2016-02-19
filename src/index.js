import React from 'react'
import ReactDom from 'react-dom'
import Redux from 'redux'
import { setBornRule, setAloneRule, setOverflowRule } from './redux/modules/rules/actions'
import { toggleVisibility } from './redux/modules/visibility/actions'
import { toggleNeighboursPoint, toggleNeighboursMode } from './redux/modules/neighbours/actions'
import store from './redux'

store.subscribe(()=>{
  console.log(store.getState())
})
store.dispatch(toggleVisibility())
store.dispatch(setBornRule(10))
store.dispatch(setAloneRule(5))
store.dispatch(setOverflowRule(11))
store.dispatch(toggleVisibility())
store.dispatch(toggleNeighboursMode())
store.dispatch(toggleNeighboursPoint(5))
store.dispatch(toggleNeighboursMode())
store.dispatch(toggleNeighboursPoint(5))
store.dispatch(toggleNeighboursMode())
store.dispatch(toggleNeighboursPoint(1))
store.dispatch(toggleNeighboursPoint(2))
store.dispatch(toggleNeighboursMode())
store.dispatch(toggleNeighboursPoint(5))
store.dispatch(toggleNeighboursPoint(1))
class App extends React.Component {
  state = {
    user: 'alexa'
  }


onClick = (e)  => {
  console.log(e)
  console.log(this.state.user)
}

  render() {
    return (
      <div onClick={this.onClick}>{this.state.user}</div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'))
