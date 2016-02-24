import './main.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App.js'
import Life from './lib/life'
store.dispatch({type: 'INSTALL'})
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
