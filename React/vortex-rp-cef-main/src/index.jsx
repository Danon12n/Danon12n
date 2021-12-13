require('Utils/api')

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'Redux/store'

import 'Styles/index.sass'

import App from './App'

ReactDOM.render(
  <Provider {...{ store }}>
    <App/>
  </Provider>,
  document.getElementById('root')
)