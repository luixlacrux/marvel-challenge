import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Main Components
import Characters from '../components/characters'
import CharacterDetail from '../components/characters/detail'
import Favourites from '../components/favourites'
import Comic from '../components/comic'

// UI Share Components
import Header from '../shared/header'
import Footer from '../shared/footer'

import storage from '../utils/storage'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favourites: []
    }
    this.previousLocation = this.props.location
    this.renderComic = this.renderComic.bind(this)
    this.addToFavourites = this.addToFavourites.bind(this)
    this.deleteToFavourites = this.deleteToFavourites.bind(this)
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

  addToFavourites (item) {
    let { favourites } = this.state
    favourites.push(item)
    this.setState({ favourites })
    storage.save(this.state.favourites)
  }

  deleteToFavourites (id) {
    let { favourites } = this.state
    const index = favourites.findIndex(elem => elem.id == id)
    favourites.splice(index, 1)
    this.setState({ favourites })
    storage.save(this.state.favourites)
  }

  renderComic (props) {
    const { favourites } = this.state
    return (
      <Comic
        {...props}
        favourites={favourites}
        addToFavourites={this.addToFavourites}
      />
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
            <Route exact path="/characters/:id" component={CharacterDetail} />
          </Switch>

          <Favourites
            data={this.state.favourites}
            deleteToFavourites={this.deleteToFavourites}
          />
        </div>

        {/* Render Modal */}
        {isModal ? <Route path='/comic/:id' render={this.renderComic} /> : null}

        <Footer />
      </section>
    )
  }
}

export default App
