import React from 'react'
import ReactDom from 'react-dom'
import Redux from 'redux'
import { setBornRule, setAloneRule, setOverflowRule } from './redux/modules/rules/actions'
// import store from './redux/modules/rules/store.js'
import store from './redux'
store.subscribe(()=>{
  console.log(store.getState())
})
store.dispatch(setBornRule(10))
store.dispatch(setAloneRule(5))
store.dispatch(setOverflowRule(11))
// const App = props =>
//   <div>React-Redux</div>
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
