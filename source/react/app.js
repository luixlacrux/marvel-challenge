import React from 'react'
import { render } from 'react-dom'
import Pages from './pages'

import Header from './shares/header'

function Main () {
  return (
    <section className="Main-container">
      <Header />
      <Pages />
    </section>
  )
}

render(
  <Main />,
  document.getElementById('app')
)
