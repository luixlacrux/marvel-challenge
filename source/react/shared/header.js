import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
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

  toggleFavourites (e) {
    const favourites = document.getElementById('favourites')
    const opacity = document.getElementById('opacity')
    const body = document.body

    favourites.classList.add('active')
    body.classList.add('not-scroll')
    opacity.classList.add('active')

    opacity.addEventListener('click', (e) => {
      body.classList.remove('not-scroll')
      favourites.classList.remove('active')
      opacity.classList.remove('active')
    })
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
          <button className="btn" onClick={this.toggleFavourites}>
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
