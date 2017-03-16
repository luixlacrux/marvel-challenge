import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Components
import Characters from '../components/characters'

function Pages () {
  return (
    <Router>
      <Route path='/' component={Characters} />
    </Router>
  )
}

export default Pages
