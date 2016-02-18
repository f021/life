import React from 'react'
import ReactDom from 'react-dom'
import Redux from 'redux'

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