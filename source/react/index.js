import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Home Component
import App from './components/app'

render(
  <Router>
    <Route component={App}/>
  </Router>,
  document.getElementById('app')
)
