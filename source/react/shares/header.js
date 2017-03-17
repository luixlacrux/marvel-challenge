import React, { Component } from 'react'
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
          <button className="btn">
            <img src="assets/icons/btn-favourites-primary.png" alt="add favourites" />
          </button>

        </div>
      </header>
    )
  }
}

export default Header
