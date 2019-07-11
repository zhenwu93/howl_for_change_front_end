import React from 'react'
import ReactDom from 'react-dom'
import App from './Components/App'
import "./index.css";

import 'semantic-ui-css/semantic.min.css'

ReactDom.render(
  <App />,
  document.querySelector('#root')
)
