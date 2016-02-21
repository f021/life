import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App'

store.dispatch({type: 'PLAY'})
store.dispatch({type: 'STOP'})
store.dispatch({type: 'TOGGLE_NEIGHBOURS_POINT', index: 1})
store.dispatch({type: 'SET_BORN_RULE', rule: 18})
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
