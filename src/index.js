import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App.js'
import { play, stop } from './reducers/life/actions'

store.dispatch(play())
store.dispatch(stop())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
