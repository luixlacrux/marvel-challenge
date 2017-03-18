import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Main Components
import Characters from '../components/characters'
import Favourites from '../components/favourites'
import Comic from '../components/comic'

// UI Share Components
import Header from '../shares/header'
import Footer from '../shares/footer'

import storage from '../utils/storage'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favourites: []
    }
    this.previousLocation = this.props.location
    this.renderComic = this.renderComic.bind(this)
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

  loadStorage () {
    const favourites = storage.load()
    this.setState({
      favourites
    })
  }

  componentDidMount () {
    this.loadStorage()
  }

  renderComic (props) {
    const { favourites } = this.state
    return (
      <Comic {...props} favourites={favourites}/>
    )
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
        <Header {...this.props}/>

        <div className="Main-content">
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path="/" component={Characters} />
          </Switch>

          <Favourites data={this.state.favourites} />
        </div>

        {/* Render Modal */}
        {isModal ? <Route path='/comic/:id' render={this.renderComic} /> : null}

        <Footer />
      </section>
    )
  }
}

export default App
