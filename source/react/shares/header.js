import React, { Component } from 'react'

function Header () {
  return (
    <header className="Header ">
      <div className="Header-content">
        <figure className="Header-logo">
          <img src="assets/images/marvel-logo.png" alt="Marvel logo" width="150" />
        </figure>
        <form className="Header-search" action="#!">
          <input type="text" placeholder="Search character..." autoFocus autoComplete="off" />
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

export default Header
