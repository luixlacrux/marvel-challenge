import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Characters from '../components/characters'
import Comic from '../components/comic'

import Header from '../shares/header'
import Footer from '../shares/footer'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.previousLocation = this.props.location
  }


  componentWillUpdate (nextProps) {
    const { location } = this.props
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render () {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )

    return (
      <section className="Main-container">
        <Header />
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Characters}/>
        </Switch>
        {isModal ? <Route path='/comic/:id' component={Comic} /> : null}
        <Footer />
      </section>
    )
  }
}

export default Home
