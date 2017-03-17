import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Component
import Home from '../components/home'

function App (props) {
  return (
    <Router>
      <Route component={Home}/>
    </Router>
  )
}

export default App
