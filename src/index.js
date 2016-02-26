import './main.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App.js'
import Life from './lib/life'
import { addRow, toRow, fromRow, resizeArr } from './utils'

console.log(
  toRow(
    [1,1,1,
    1,0,1,
    1,1,1], 3).map(row =>
      resizeArr(row, 5)
    )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
