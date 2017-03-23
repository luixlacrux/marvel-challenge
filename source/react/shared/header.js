import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showFavourites = this.showFavourites.bind(this)
    this.hideFavourites = this.hideFavourites.bind(this)
    this.elems = {
      body: document.body,
      opacity: document.getElementById('opacity')
    }
  }

  searchValue () {
    return this.search.value.trim().replace(/\s/g, '+')
  }

  handleSubmit (e) {
    e.preventDefault()
    const { history } = this.props
    history.push({
      pathname: '/',
      search: `?s=${this.searchValue()}`
    })
  }

  showFavourites (e) {
    this.elems.favourites = document.getElementById('favourites')
    const { favourites, body, opacity } = this.elems

    favourites.classList.add('active')
    body.classList.add('not-scroll')
    opacity.classList.add('active')

    opacity.addEventListener('click', this.hideFavourites)
  }

  hideFavourites (e) {
    const { favourites, body, opacity } = this.elems

    favourites.classList.remove('active')
    opacity.classList.remove('active')
    body.classList.remove('not-scroll')

    opacity.removeEventListener('click', this.hideFavourites)
  }

  render () {
    return (
      <header className="Header ">
        <div className="Header-content">
          <Link className="Header-logo" to='/'>
            <img src="assets/images/marvel-logo.png" alt="Marvel logo" width="150" />
          </Link>
          <form className="Header-search" onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref={(input) => { this.search = input }}
              placeholder="Search character..."
              autoFocus
              autoComplete="off"
              required
            />
            <button>
              <img src="assets/icons/search.png" alt="icon search" />
            </button>
          </form>
          <button className="btn" onClick={this.showFavourites}>
            <img src="assets/icons/btn-favourites-primary.png" alt="add favourites" />
          </button>

        </div>
      </header>
    )
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired
}

export default Header
